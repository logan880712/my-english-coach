'use strict';
(() => {
 const el=id=>document.getElementById(id),bridge=window.coachActivities,dialog=el('activity-dialog');
 const create=(tag,value,cls)=>{const n=document.createElement(tag);if(value!==undefined)n.textContent=value;if(cls)n.className=cls;return n;};
 let mode=null,context=null,audioToken=0,waitTimer=null,focusTimer=null,focusRemaining=300000,focusDeadline=0,focusRunning=false,focusActive=false,shadowRound=0,roleTurn=0,roleCompared=false,roleHistory=[],wordIndex=0,wordScore=0,wordMissed=false;
 function stopAudio(){audioToken++;if(waitTimer){clearInterval(waitTimer);waitTimer=null;}if('speechSynthesis' in window)speechSynthesis.cancel();}
 function speak(value,onEnd,onError){
  stopAudio();const token=audioToken;
  if(!('speechSynthesis' in window)){onError?.();return;}
  const u=new SpeechSynthesisUtterance(value);u.lang='en-US';u.rate=.8;const voice=speechSynthesis.getVoices().find(v=>v.lang.startsWith('en'));if(voice)u.voice=voice;
  u.onend=()=>{if(token===audioToken&&dialog.open)onEnd?.();};
  u.onerror=()=>{if(token===audioToken&&dialog.open)onError?.();};
  speechSynthesis.speak(u);
 }
 function showStatus(value){if(el('activity-status').textContent!==value)el('activity-status').textContent=value;}
 function openActivity(next){
  const value=bridge.context();if(!value||!value.current)return;
  bridge.stopAudio();stopAudio();mode=next;context=value;el('activity-body').replaceChildren();showStatus('');
  if(!dialog.open)dialog.showModal();
 }
 function closeActivity(){stopAudio();mode=null;if(dialog.open)dialog.close();}
 el('activity-close').onclick=closeActivity;
 dialog.addEventListener('close',()=>{if(!dialog.open){stopAudio();mode=null;}});
 dialog.addEventListener('cancel',stopAudio);
 function button(label,callback,cls='primary'){const b=create('button',label,cls);b.type='button';b.onclick=callback;return b;}
 function soundLine(value){return create('p',hangulSound(value),'pronunciation');}
 function celebration(title,description){const box=create('div',undefined,'mission-success');box.append(create('div','✦','success-star'),create('h3',title),create('p',description));return box;}
 function passport(){
  const stats=bridge.stats(),count=stats.completed;
  el('growth-plant').textContent=count>=90?'🌳':count>=30?'🌿':count>=7?'🪴':'🌱';
  el('growth-title').textContent=count?`${count}일의 연습이 차곡차곡 쌓였어요`:'오늘의 한 문장부터 시작해요';
  el('growth-badges').replaceChildren();
  for(const [threshold,name,icon] of [[1,'첫걸음','👣'],[7,'첫 일주일','⭐'],[30,'첫 한 달','🌷'],[90,'반환점','🌿'],[180,'180일 완주','🏅']]){
   const stamp=create('div',undefined,'growth-stamp'+(count>=threshold?' earned':''));stamp.append(create('span',icon),create('strong',name),create('small',count>=threshold?'받았어요':`${threshold}일 수업 완료`));el('growth-badges').append(stamp);
  }
  const c=bridge.context();if(c?.activities){const a=c.activities;el('mission-summary').textContent=`오늘의 추가 연습 · 따라 말하기 ${a.shadowing.length}개 표현 · 대화 ${a.roleplay?'완료':'도전해 볼까요?'} · 단어 게임 ${a.wordGame===null?'도전해 볼까요?':a.wordGame+'/5 첫 시도 정답'}`;}else el('mission-summary').textContent='하나만 골라도 좋아요. 짧게 연습하고 다시 오늘 수업으로 돌아오세요.';
 }
 function formatTime(ms){const seconds=Math.ceil(ms/1000);return `${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`;}
 function focusTick(){
  if(!focusRunning)return;
  focusRemaining=Math.max(0,focusDeadline-Date.now());el('focus-clock').textContent=formatTime(focusRemaining);
  if(focusRemaining===0){focusRunning=false;clearInterval(focusTimer);focusTimer=null;el('focus-message').textContent='5분 끝! 잠깐 쉬어도 좋아요. 수업 완료는 아래 연습 체크로 해 주세요.';el('focus-pause').disabled=true;}
 }
 function pauseFocus(message){
  if(!focusRunning)return;focusRemaining=Math.max(0,focusDeadline-Date.now());focusRunning=false;clearInterval(focusTimer);focusTimer=null;el('focus-clock').textContent=formatTime(focusRemaining);el('focus-pause').textContent='이어서 집중하기';el('focus-message').textContent=message||'잠깐 쉬어도 괜찮아요. 준비되면 이어서 해요.';
 }
 function resumeFocus(){if(!focusActive||!focusRemaining)return;focusDeadline=Date.now()+focusRemaining;focusRunning=true;el('focus-pause').textContent='잠깐 멈추기';el('focus-message').textContent='지금 한 표현에만 집중해요. 천천히 소리 내어 말하세요.';focusTimer=setInterval(focusTick,250);focusTick();}
 function exitFocus(){focusActive=false;focusRunning=false;if(focusTimer)clearInterval(focusTimer);focusTimer=null;document.body.classList.remove('focus-mode');el('focus-bar').hidden=true;el('focus-pause').disabled=false;}
 el('focus-start').onclick=()=>{closeActivity();exitFocus();focusActive=true;focusRemaining=300000;document.body.classList.add('focus-mode');el('focus-bar').hidden=false;resumeFocus();el('course-prompt').scrollIntoView({block:'center'});};
 el('focus-pause').onclick=()=>{if(focusRunning)pauseFocus();else resumeFocus();};el('focus-exit').onclick=exitFocus;
 // Shadowing runs only while this activity is visible, and gives time to actually speak.
 function renderShadow(){
  if(shadowRound>=3){finishShadow();return;}
  el('activity-kicker').textContent='짧게 반복하면 입에 익어요';el('activity-title').textContent='듣고 따라 말하기';el('activity-description').textContent='예문을 듣고 10초 동안 따라 말해 보세요. 총 3회 연습합니다.';
  el('activity-body').replaceChildren(create('span',`${shadowRound+1} / 3회`,'pill'),create('p',context.current.answer,'speaking-example'),soundLine(context.current.answer),create('p',context.current.answerKo),create('div','🎧','speaking-orb'),button(shadowRound?'다음 회차 듣기':'예문 듣고 시작',startShadow));
  showStatus('듣기 후에 말할 시간이 시작돼요. 마이크를 켜지 않아도 됩니다.');
 }
 function startShadow(){
  el('activity-body').querySelector('button').disabled=true;showStatus('먼저 예문을 들어 보세요.');
  speak(context.current.answer,()=>startSpeakingTime(),()=>{showStatus('소리를 재생하지 못했어요. 예문을 직접 읽고 연습해도 괜찮아요.');el('activity-body').append(button('직접 읽고 말하기 시작',()=>{stopAudio();startSpeakingTime();},'secondary'));});
 }
 function finishShadow(){
  const finish=button('3회 말했어요 · 미션 완료',()=>{
   const saved=bridge.record('shadowing');
   showStatus(context.preview?'미리보기 연습입니다. 실제 기록은 바뀌지 않아요.':saved?'오늘의 따라 말하기 미션을 기록했어요. 아래 수업 체크는 직접 마쳐 주세요.':'연습을 마쳤어요. 저장되지 않았다면 학습 기록에서 백업해 주세요.');
   el('activity-body').replaceChildren(celebration('입으로 꺼낸 한 문장, 잘했어요!','더 자연스럽게 말하기보다 직접 말해 본 것이 오늘의 한 걸음이에요.'),button('오늘 수업으로 돌아가기',closeActivity));
  });
  el('activity-body').replaceChildren(celebration('3회 연습 시간이 끝났어요!','실제로 소리 내어 따라 했다면 아래 버튼을 눌러 주세요. 발음을 자동 평가한 결과는 아닙니다.'),finish);
 }
 function startSpeakingTime(){
  const deadline=Date.now()+10000,token=audioToken,orb=el('activity-body').querySelector('.speaking-orb');orb.classList.add('speaking');
  const tick=()=>{
   if(token!==audioToken||!dialog.open)return;
   const remaining=Math.max(0,deadline-Date.now());orb.textContent=String(Math.ceil(remaining/1000));showStatus('내 차례예요! 예문을 소리 내어 따라 말해 보세요.');
   if(remaining===0){clearInterval(waitTimer);waitTimer=null;shadowRound++;if(shadowRound<3)renderShadow();else finishShadow();}
  };
  waitTimer=setInterval(tick,250);tick();
 }
 el('shadow-start').onclick=()=>{openActivity('shadow');shadowRound=0;renderShadow();};
 // A prepared six-turn conversation. Learner speech is self-confirmed, never auto graded.
 function renderRole(){
  el('activity-kicker').textContent=context.module.title;el('activity-title').textContent='상황 대화 미션';el('activity-description').textContent='상대방 말을 듣고 내 차례에 답해 보세요. 막히면 예문을 봐도 괜찮아요.';
  const body=el('activity-body');body.replaceChildren(create('span',`${roleTurn+1} / 6차례`,'pill'));
  const label={'일상생활':'대화 상대','식당':'식당 직원','여행':'안내 직원','쇼핑':'매장 직원','직장':'직장 동료'}[context.module.category];
  for(const h of roleHistory){const item=context.dialogue[h];body.append(create('div',`${label}: ${item.prompt}`,'chat-bubble coach-bubble'),create('div',`비교한 예문: ${item.answer}`,'chat-bubble learner-bubble'));}
  const q=context.dialogue[roleTurn];const bubble=create('div',undefined,'chat-bubble coach-bubble current-bubble');bubble.append(create('strong',`💬 ${label}`),create('p',q.prompt),soundLine(q.prompt));const translation=create('details');translation.append(create('summary','한국어 뜻 보기'),create('p',q.promptKo));bubble.append(translation);body.append(bubble,button('상대방 말 다시 듣기',()=>speak(q.prompt,null,()=>showStatus('소리가 안 나면 화면의 상대방 말을 읽어 주세요.')),'secondary'));
  if(!roleCompared){body.append(create('p','지금 내 차례예요. 화면에서 눈을 떼고 한 문장으로 답해 보세요.','your-turn'),button('내 답변 말했어요 · 예문과 비교',()=>{roleCompared=true;renderRole();}),button('막히면 답변 예문 보기',()=>{roleCompared=true;renderRole();showStatus('예문을 보고 소리 내어 말해 본 뒤 다음 차례로 넘어가세요.');},'secondary'));}
  else{const answer=create('div',undefined,'chat-bubble learner-bubble');answer.append(create('strong','내 답변과 비교할 예문'),create('p',q.answer),soundLine(q.answer),create('p',q.answerKo));body.append(answer,button('답변 예문 듣기',()=>speak(q.answer,null,()=>showStatus('예문을 읽고 소리 내어 말해 주세요.')),'secondary'),button(roleTurn===5?'6차례 연습했어요 · 미션 완료':'말했어요 · 다음 대화',()=>{if(roleTurn===5){const saved=bridge.record('roleplay');body.replaceChildren(celebration('대화를 끝까지 이어 봤어요!','실제 AI 대화나 발음 평가가 아니라 준비된 상황 대화 연습이에요.'),button('오늘 수업으로 돌아가기',closeActivity));showStatus(context.preview?'미리보기 대화는 기록을 바꾸지 않아요.':saved?'오늘의 대화 미션을 기록했어요.':'연습을 마쳤어요. 저장 경고가 있으면 기록을 백업해 주세요.');}else{roleHistory.push(roleTurn);roleTurn++;roleCompared=false;renderRole();speak(context.dialogue[roleTurn].prompt,null,()=>showStatus('소리가 안 나면 화면의 상대방 말을 읽어 주세요.'));}}));}
  showStatus('입력은 필요 없어요. 내 답변을 직접 소리 내어 말하세요.');body.querySelector('.current-bubble')?.scrollIntoView({block:'nearest'});
 }
 el('roleplay-start').onclick=()=>{openActivity('role');roleTurn=0;roleCompared=false;roleHistory=[];renderRole();speak(context.dialogue[0].prompt,null,()=>showStatus('소리가 안 나면 화면의 상대방 말을 읽고 답하세요.'));};
 function renderWordGame(){
  const w=context.words[wordIndex],body=el('activity-body');wordMissed=false;body.replaceChildren(create('span',`${wordIndex+1} / 5개 단어`,'pill'),create('p',w.word,'speaking-example'),create('p',w.pronunciation,'pronunciation'),button('단어 듣기',()=>speak(w.word,null,()=>showStatus('단어의 한글 발음을 보고 말해 주세요.')),'secondary'),create('p','어떤 뜻일까요?','your-turn'));
  const alternatives=context.words.filter(x=>x.meaning!==w.meaning).map(x=>x.meaning).filter((x,i,a)=>a.indexOf(x)===i).slice(0,2);const answers=[w.meaning,...alternatives],offset=wordIndex%3;const options=[...answers.slice(offset),...answers.slice(0,offset)];const choices=create('div',undefined,'word-game-options');
  for(const value of options){const b=button(value,()=>{if(value!==w.meaning){wordMissed=true;b.disabled=true;showStatus('괜찮아요. 한 번 더 생각해 보고 골라 보세요.');return;}if(!wordMissed)wordScore++;for(const n of choices.children)n.disabled=true;showStatus(`맞아요! ${w.word}는 “${w.meaning}”예요. 소리 내어 한 번 말해 보세요.`);body.append(button(wordIndex===4?'단어 게임 결과 보기':'다음 단어',()=>{if(wordIndex===4){const saved=bridge.record('wordGame',wordScore);body.replaceChildren(celebration(`${wordScore} / 5개를 첫 시도에 기억했어요!`,'틀렸던 단어도 다시 맞혀 봤어요. 게임 점수는 단어 뜻 기억 결과이며 회화 실력 점수가 아닙니다.'),button('한 번 더 연습하기',()=>{wordIndex=0;wordScore=0;renderWordGame();}),button('오늘 수업으로 돌아가기',closeActivity));showStatus(context.preview?'미리보기 게임은 실제 기록을 바꾸지 않아요.':saved?'오늘의 단어 게임 결과를 기록했어요.':'기록이 저장되지 않았다면 학습 기록에서 백업해 주세요.');}else{wordIndex++;renderWordGame();}}));},'secondary');choices.append(b);}body.append(choices);showStatus('시간 제한은 없어요. 천천히 뜻을 떠올려 보세요.');
 }
 el('word-game-start').onclick=()=>{openActivity('word');wordIndex=0;wordScore=0;el('activity-kicker').textContent='오늘 배운 단어를 한 번 더';el('activity-title').textContent='단어 기억 게임';el('activity-description').textContent='듣고, 뜻을 떠올리고, 소리 내어 말하세요. 틀려도 다시 골라 볼 수 있어요.';renderWordGame();};
 window.addEventListener('coach-progress',passport);
 window.addEventListener('coach-view-change',e=>{closeActivity();if(e.detail.page!=='course')exitFocus();});
 window.addEventListener('coach-lesson-change',()=>{closeActivity();if(bridge.context()?.position===6)exitFocus();passport();});
 document.addEventListener('visibilitychange',()=>{if(document.hidden){pauseFocus('다른 화면을 보는 동안 잠시 멈췄어요. 돌아오면 이어서 집중하세요.');if(mode==='shadow'&&shadowRound<3){stopAudio();el('activity-body').append(button('이 회차 다시 시작하기',()=>renderShadow(),'secondary'));showStatus('화면을 벗어나 연습 시간을 멈췄어요. 돌아오면 이 회차를 다시 시작하세요.');}else stopAudio();}});
 passport();
})();
