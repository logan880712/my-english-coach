'use strict';
(() => {
 const key = 'my-english-coach.learning.v1';
 const course = sixMonthCourse;
 const el = id => document.getElementById(id);
 const dateKey = () => { const d=new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; };
 const freshStep = () => ({checks:[false,false,false],hard:false,note:'',quiz:null,assessment:null});
 const freshActive = day => ({day,position:0,steps:Array.from({length:6},freshStep),monthly:Array(10).fill(null)});
 const emptyState = () => ({version:1,cursor:0,active:freshActive(1),history:[]});
 const choices = ['solo','hint','again'];
 const choiceLabels = {solo:'혼자 소통',hint:'도움을 받아 소통',again:'아직 어려움'};
 let state=emptyState(), storedRaw=null, blocked=false, preview=false, working=null, lesson=null, mic=null;
 function validate(s) {
  if (!s || s.version!==1 || !Number.isInteger(s.cursor) || s.cursor<0 || s.cursor>180 || !Array.isArray(s.history) || s.history.length!==s.cursor) throw Error('기록 형식이 올바르지 않습니다.');
  const stepValid = v => v && Array.isArray(v.checks) && v.checks.length===3 && v.checks.every(x=>typeof x==='boolean') && typeof v.hard==='boolean' && typeof v.note==='string' && v.note.length<=1000 && (v.quiz===null || v.quiz===0 || v.quiz===1) && (v.assessment===null || choices.includes(v.assessment));
  const monthlyValid = a => Array.isArray(a) && a.length===10 && a.every(v=>v===null || choices.includes(v));
  s.history.forEach((h,i)=> {if(!h || h.day!==i+1 || typeof h.completedAt!=='string' || !Number.isFinite(Date.parse(h.completedAt)) || typeof h.date!=='string' || !/^\d{4}-\d{2}-\d{2}$/.test(h.date) || !Array.isArray(h.steps) || h.steps.length!==6 || !h.steps.every(stepValid) || !monthlyValid(h.monthly)) throw Error('완료 기록이 올바르지 않습니다.');});
  if(s.cursor===180) {if(s.active!==null) throw Error('완료 상태가 올바르지 않습니다.');}
  else if(!s.active || s.active.day!==s.cursor+1 || !Number.isInteger(s.active.position) || s.active.position<0 || s.active.position>6 || !Array.isArray(s.active.steps) || s.active.steps.length!==6 || !s.active.steps.every(stepValid) || !monthlyValid(s.active.monthly)) throw Error('진행 기록이 올바르지 않습니다.');
  return s;
 }
 function warn(text) {el('course-warning').textContent=text;el('course-warning').hidden=false;}
 try {storedRaw=localStorage.getItem(key);if(storedRaw)state=validate(JSON.parse(storedRaw));}
 catch {blocked=true;warn('학습 기록을 읽을 수 없어요. 기존 기록을 덮어쓰지 않습니다. 지금 연습은 가능하지만 진도가 저장되지 않아요. 학습 기록 메뉴에서 백업하거나 정상 백업을 가져와 주세요.');}
 function save() {
  if(preview)return true;
  if(blocked)return false;
  try {if(localStorage.getItem(key)!==storedRaw){blocked=true;warn('다른 탭에서 기록이 바뀌었어요. 이 탭에서는 덮어쓰지 않습니다. 백업이 필요하면 먼저 백업한 뒤 새로고침해 주세요.');return false;}
   const next=JSON.stringify(validate(state));localStorage.setItem(key,next);storedRaw=next;return true;
  } catch {warn('브라우저에 기록을 저장하지 못했어요. 지금 화면에서는 연습할 수 있지만 닫으면 진도가 사라질 수 있습니다. 학습 기록에서 백업해 주세요.');return false;}
 }
 function text(tag,value,cls) {const n=document.createElement(tag);n.textContent=value;if(cls)n.className=cls;return n;}
 function stopMic() {if(mic){const old=mic;mic=null;old.abort();}el('course-mic').disabled=false;el('course-mic-stop').hidden=true;}
 const previousShow=show;
 show=function(page){stopMic();previousShow(page);};
 function audio(value,rate=.85) {
  stopMic();if(!('speechSynthesis' in window)){el('course-status').textContent='이 브라우저는 음성 재생을 지원하지 않아요. 화면의 문장을 읽고 연습해 주세요.';return;}
  speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(value);u.lang='en-US';u.rate=rate;
  const voice=speechSynthesis.getVoices().find(v=>v.lang.startsWith('en'));if(voice)u.voice=voice;
  u.onerror=()=>{el('course-status').textContent='소리를 재생하지 못했어요. 휴대폰 음량과 영어 음성 설정을 확인해 주세요.';};
  speechSynthesis.speak(u);el('course-status').textContent='영어 음성을 재생합니다. 질문을 듣고 내 차례에 소리 내어 답해 보세요.';
 }
 function lessonFor(day){return course.days[day-1];}
 function entryFor(item){return course.modules[item.module].exchanges[item.index];}
 function todayCompleted(){return state.history.length && state.history[state.history.length-1].date===dateKey();}
 function updateHome(){
  el('daily-home').textContent=`180일 중 ${state.cursor}일 수업 완료 · ${state.cursor===180?'전체 과정 완료':todayCompleted()?'오늘 공부 완료':'차근차근 이어서 공부해요'}`;
  const d=lessonFor(Math.min(state.cursor+1,180));const m=course.modules[d.module];
  el('home-stage').textContent=state.cursor===180?'6개월 과정의 모든 수업을 마쳤어요':`${Math.floor((d.day-1)/30)+1}개월차 · ${d.day}일차`;
  el('home-lesson').textContent=state.cursor===180?'앞으로도 대화하며 계속 익혀요':d.title;
  el('home-goal').textContent=state.cursor===180?'학습 기록에서 어려웠던 상황을 다시 연습하고 사람과 대화해 보세요.':course.routines[d.routine].goal;
  el('start').textContent=state.cursor===180?'전체 과정 완료 기록 보기':todayCompleted()?'오늘 완료한 공부 보기':state.active.position?'오늘 공부 이어하기 →':'오늘 공부 시작하기 →';
 }
 function start(day,asPreview=false){
  stopMic();preview=asPreview;
  if(!asPreview&&(todayCompleted()||state.cursor===180)){showCompletion(state.history[state.history.length-1]);return;}
  lesson=lessonFor(day||state.cursor+1);working=asPreview?freshActive(lesson.day):state.active;
  show('course');el('course-preview').hidden=!preview;
  el('course-title').textContent=`${lesson.day}일차 · ${course.modules[lesson.module].title}`;
  el('course-stage').textContent=`${Math.floor((lesson.day-1)/30)+1}개월차 / 6개월 · ${Math.floor((lesson.day-1)/6)+1}번째 상황`;
  el('course-routine').textContent=course.routines[lesson.routine].title;
  el('course-goal').textContent=course.modules[lesson.module].goal;
  el('course-instruction').textContent=course.routines[lesson.routine].goal;
  const difficult=findDifficult();el('spaced-review').hidden=!difficult;
  if(difficult){el('spaced-example').textContent=difficult.answer;el('spaced-meaning').textContent=difficult.answerKo;el('spaced-listen').onclick=()=>audio(difficult.answer);}
  renderStep();el('course-title').focus();
 }
 function findDifficult(){
  for(let h=state.history.length-1;h>=0;h--){const done=state.history[h];const d=lessonFor(done.day);const i=done.steps.findIndex(s=>s.hard||s.assessment==='again');if(i>=0)return entryFor(d.entries[i]);}
  return null;
 }
 function current(){return entryFor(lesson.entries[working.position]);}
 function currentState(){return working.steps[working.position];}
 function quizOptions(){
  const item=current();const other=course.modules[lesson.entries[working.position].module].exchanges.find(e=>e.promptKo!==item.promptKo);
  const options=[item.promptKo,other.promptKo];if((lesson.day+working.position)%2)options.reverse();return options;
 }
 function ready(){const s=currentState();return s.checks.every(Boolean) && (lesson.routine!==2||s.quiz!==null&&quizOptions()[s.quiz]===current().promptKo) && (lesson.routine!==5||s.assessment!==null);}
 function updateNext(){el('course-next').disabled=!ready();}
 function renderStep(){
  stopMic();if('speechSynthesis' in window)speechSynthesis.cancel();
  el('course-status').textContent='';el('course-mic-status').textContent='음성 인식은 브라우저 서비스에 음성이 전송될 수 있어요. 녹음 파일은 앱에 저장하지 않습니다. 지원되지 않으면 소리 내어 말하기만 해도 됩니다.';
  el('course-progress').textContent=`${working.position} / 6표현 완료`;
  if(working.position===6){el('course-work').hidden=true;if(lesson.monthly)renderMonthly();else finishLesson();return;}
  el('course-work').hidden=false;el('monthly-check').hidden=true;
  const item=lesson.entries[working.position],q=current(),s=currentState(),r=course.routines[lesson.routine],m=course.modules[item.module];
  el('exchange-role').textContent=`${working.position+1}번째 표현 · ${item.role} · ${m.title}`;
  el('course-prompt').textContent=q.prompt;el('course-prompt-ko').textContent=q.promptKo;
  el('course-translation').open=r.hint;el('course-hint').open=r.hint;
  el('course-answer').textContent=q.answer;el('course-answer-ko').textContent=q.answerKo;el('course-tip').textContent=m.tip;
  el('course-change').textContent=m.changeInstruction;el('course-change-example').textContent=m.changeExample;
  el('course-personalize').open=lesson.routine===1;
  el('course-note').value=s.note;el('course-hard').checked=s.hard;
  el('speaking-prompt').textContent=lesson.routine===3?'역할 대화: 화면의 상대방 말을 듣고 내 차례에 답하세요. 답한 뒤 다음 표현으로 넘어가면 대화가 이어집니다.':lesson.routine===5?'먼저 예문을 가리고 답하세요. 나중에 예문과 비교하고 스스로 점검합니다.':'영어 입력은 필수가 아니에요. 휴대폰을 보며 소리 내어 말하는 것이 가장 중요합니다.';
  el('course-checks').replaceChildren();r.tasks.forEach((task,i)=>{const label=text('label',null,'check-label'),box=document.createElement('input');box.type='checkbox';box.checked=s.checks[i];box.id=`task-${i}`;box.onchange=()=>{s.checks[i]=box.checked;save();updateNext();};label.append(box,document.createTextNode(' '+task));el('course-checks').append(label);});
  el('meaning-quiz').hidden=lesson.routine!==2;el('quiz-options').replaceChildren();el('quiz-result').textContent='';
  if(lesson.routine===2){quizOptions().forEach((value,i)=>{const b=text('button',value,'secondary');b.type='button';b.setAttribute('aria-pressed',String(s.quiz===i));b.onclick=()=>{s.quiz=i;save();for(const n of el('quiz-options').children)n.setAttribute('aria-pressed',String(n===b));el('quiz-result').textContent=value===q.promptKo?'맞아요. 이제 소리 내어 답해 보세요.':'다시 들어보거나 한국어 뜻을 확인한 뒤 골라 보세요.';updateNext();};el('quiz-options').append(b);});if(s.quiz!==null)el('quiz-result').textContent=quizOptions()[s.quiz]===q.promptKo?'뜻을 확인했어요. 이제 소리 내어 답해 보세요.':'다시 들어보고 골라 보세요.';}
  el('course-assessment').hidden=lesson.routine!==5;for(const b of el('course-assessment').querySelectorAll('button'))b.setAttribute('aria-pressed',String(s.assessment===b.dataset.assess));
  el('course-next').textContent=working.position===5?lesson.monthly?'6표현 완료 · 월별 점검하기':'오늘 공부 끝내기':'연습 완료 · 다음 표현';updateNext();
 }
 el('course-next').onclick=()=>{if(!ready())return;working.position++;save();renderStep();if(working.position<6)el('course-prompt').scrollIntoView({block:'start'});};
 el('course-hard').onchange=()=>{currentState().hard=el('course-hard').checked;save();};
 el('course-note').oninput=()=>{currentState().note=el('course-note').value;save();};
 el('course-listen').onclick=()=>audio(current().prompt);
 el('course-listen-slow').onclick=()=>audio(current().prompt,.6);
 el('course-example-listen').onclick=()=>audio(current().answer);
 for(const b of el('course-assessment').querySelectorAll('button'))b.onclick=()=>{currentState().assessment=b.dataset.assess;save();for(const n of el('course-assessment').querySelectorAll('button'))n.setAttribute('aria-pressed',String(n===b));updateNext();};
 function renderMonthly(){
  el('monthly-check').hidden=false;el('monthly-items').replaceChildren();
  course.monthly.forEach((q,i)=>{const item=document.createElement('article');item.className='checkpoint-item';item.append(text('h3',`${i+1}. ${q.title}`),text('p',q.prompt),text('p',q.goal,'hint'));const listen=text('button','상황 듣기','secondary');listen.onclick=()=>audio(q.prompt);item.append(listen);const actions=document.createElement('div');actions.className='actions';for(const choice of choices){const b=text('button',choiceLabels[choice],'secondary');b.setAttribute('aria-pressed',String(working.monthly[i]===choice));b.onclick=()=>{working.monthly[i]=choice;save();for(const n of actions.children)n.setAttribute('aria-pressed',String(n===b));el('finish-monthly').disabled=working.monthly.some(v=>v===null);};actions.append(b);}item.append(actions);el('monthly-items').append(item);});
  el('finish-monthly').disabled=working.monthly.some(v=>v===null);
 }
 el('finish-monthly').onclick=()=>{if(working.monthly.some(v=>v===null))return;finishLesson();};
 function finishLesson(){
  if(working.position!==6)return;
  if(lesson.monthly&&working.monthly.some(v=>v===null))return;
  const done={day:lesson.day,date:dateKey(),completedAt:new Date().toISOString(),steps:structuredClone(working.steps),monthly:[...working.monthly]};
  let saved=true;
  if(!preview){if(state.cursor+1!==lesson.day)return;state.history.push(done);state.cursor++;state.active=state.cursor<180?freshActive(state.cursor+1):null;saved=save();}
  updateHome();showCompletion(done,saved);
 }
 function showCompletion(done,saved=true){
  if(!done)return;show('daily-complete');const d=lessonFor(done.day);
  el('completion-eyebrow').textContent=preview?`${done.day}일차 미리보기 연습 완료`:`${done.day} / 180일 수업 완료`;
  el('complete-title').textContent=preview?'미리보기 연습을 마쳤어요.':done.day===180?'180일 수업을 모두 마쳤어요!':'오늘 공부는 여기서 끝! 수고하셨어요.';
  el('completion-message').textContent=preview?'미리보기는 실제 학습 진도를 바꾸지 않습니다.':done.day===180?'꾸준히 연습한 시간을 축하합니다. 이것은 수업 완료이며 회화 실력 인증은 아니에요. 어려웠던 상황은 계속 연습하고 실제 대화로 확인해 보세요.':'오늘은 쉬셔도 됩니다. 내일 또 이어서 연습해요.';
  el('completed-sentences').replaceChildren(text('h2',d.title));d.entries.forEach((item,i)=>{const q=entryFor(item);el('completed-sentences').append(text('p',q.answer),text('p',q.answerKo,'hint'));if(done.steps[i].note)el('completed-sentences').append(text('p',`내 메모: ${done.steps[i].note}`));});
  if(d.routine===5)el('completed-sentences').append(text('p',`예문 없이 말하기 자기 점검: ${done.steps.filter(s=>s.assessment==='solo').length} / 6표현. 아직 어려운 표현은 다시 연습해요.`));
  if(d.monthly){const count=done.monthly.filter(v=>v==='solo').length;el('completed-sentences').append(text('h3',`월별 자기 점검: ${count} / 10상황에서 혼자 소통`),text('p',count>=7?'목표 기준에 가까워졌다고 느끼셨군요. 사람과 실제 대화에서도 확인해 보세요.':'다음 달에도 어려운 상황을 중심으로 연습하세요. 매달 비교하는 것이 중요해요.'));}
  el('completion-storage').textContent=preview?'미리보기 내용은 기록하지 않았어요.':!saved||blocked?'진도를 저장하지 못했어요. 닫기 전에 학습 기록에서 백업해 주세요.':'학습 기록을 이 브라우저에 저장했어요. 다른 기기로 옮기려면 기록을 백업해 주세요.';
  el('complete-title').focus();
 }
 function openHistory(){preview=false;show('history');renderHistory();}
 function renderHistory(){
  el('history-summary').textContent=`완료 ${state.cursor} / 180일 · 다음 수업 ${Math.min(state.cursor+1,180)}일차. 결석해도 수업은 건너뛰지 않습니다.`;
  el('history-list').replaceChildren();if(!state.history.length)el('history-list').append(text('p','아직 완료한 수업이 없어요. 오늘 공부부터 시작해 보세요.','empty'));
  for(const h of [...state.history].reverse()){const card=document.createElement('details');card.append(text('summary',`${h.day}일차 · ${lessonFor(h.day).title} · ${h.date}`));lessonFor(h.day).entries.forEach((item,i)=>{const q=entryFor(item);card.append(text('p',q.answer),text('p',q.answerKo,'hint'));if(h.steps[i].note)card.append(text('p',`내 답변 메모: ${h.steps[i].note}`));if(h.steps[i].hard||h.steps[i].assessment==='again')card.append(text('p','다시 복습할 표현','eyebrow'));});el('history-list').append(card);}
  el('monthly-history').replaceChildren();const checks=state.history.filter(h=>h.day%30===0);if(!checks.length)el('monthly-history').append(text('p','30일 수업을 마칠 때 첫 점검이 열려요. 매달 10가지 상황의 변화를 살펴봅니다.'));for(const h of checks){const block=document.createElement('details');block.append(text('summary',`${h.day/30}개월차 · 혼자 소통 ${h.monthly.filter(v=>v==='solo').length} / 10상황`));course.monthly.forEach((q,i)=>block.append(text('p',`${q.title}: ${choiceLabels[h.monthly[i]]}`)));block.append(text('p','자기 점검 기록입니다. 자동 평가나 실력 인증이 아니에요.','hint'));el('monthly-history').append(block);}
  el('course-plan').replaceChildren();course.modules.forEach((m,i)=>{const details=document.createElement('details');details.append(text('summary',`${i+1}번째 상황 · ${m.title} (${i*6+1}~${i*6+6}일차)`),text('p',m.goal));for(const day of course.days.slice(i*6,i*6+6)){const button=text('button',`${day.day}일차 · ${course.routines[day.routine].title}${day.day<=state.cursor?' · 완료':''}`,'plan-lesson');button.onclick=()=>start(day.day,true);details.append(button);}el('course-plan').append(details);});
 }
 window.startCourse=()=>{preview=false;start();};
 el('start').onclick=window.startCourse;el('course-menu').onclick=window.startCourse;
 el('history-menu').onclick=openHistory;el('daily-home-button').onclick=()=>{preview=false;show('home');updateHome();};el('extra-practice').onclick=()=>{preview=false;begin();};
 el('home-link').onclick=e=>{e.preventDefault();preview=false;show('home');updateHome();};
 el('course-mic').onclick=()=>{
  stopMic();if('speechSynthesis' in window)speechSynthesis.cancel();const R=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!R||!window.isSecureContext){el('course-mic-status').textContent='이 브라우저에서는 음성 메모를 사용할 수 없어요. 메모는 선택 사항입니다. 소리 내어 말하고 연습 체크만 해도 돼요.';return;}
  const session=new R();mic=session;session.lang='en-US';session.interimResults=false;
  session.onresult=e=>{if(mic!==session)return;const value=e.results[0][0].transcript.slice(0,1000);currentState().note=value;el('course-note').value=value;save();el('course-mic-status').textContent='들은 내용을 메모했어요. 틀리게 인식한 부분은 직접 고칠 수 있어요.';};
  session.onerror=e=>{if(mic!==session)return;el('course-mic-status').textContent=e.error==='not-allowed'?'마이크 권한이 허용되지 않았어요. 직접 입력하거나 말하기만 해도 괜찮아요.':'말을 인식하지 못했어요. 다시 시도하거나 소리 내어 말하기만 해도 괜찮아요.';};
  session.onend=()=>{if(mic!==session)return;mic=null;el('course-mic').disabled=false;el('course-mic-stop').hidden=true;if(el('course-mic-status').textContent.startsWith('듣고'))el('course-mic-status').textContent='말하기가 끝났어요. 메모가 없으면 다시 시도해 주세요.';};
  try{session.start();el('course-mic').disabled=true;el('course-mic-stop').hidden=false;el('course-mic-status').textContent='듣고 있어요. 짧게 영어로 말해 주세요.';}catch{stopMic();el('course-mic-status').textContent='마이크를 시작하지 못했어요. 직접 입력하거나 소리 내어 연습하세요.';}
 };
 el('course-mic-stop').onclick=()=>{if(mic)mic.stop();};
 el('export-records').onclick=()=>{
  const backup={format:'my-english-coach-backup',version:1,exportedAt:new Date().toISOString(),learning:state,reviews:records};
  if(blocked&&storedRaw)backup.unreadableOriginal=storedRaw;
  const blob=new Blob([JSON.stringify(backup,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download=`my-english-coach-${dateKey()}.json`;document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);el('backup-status').textContent='백업 파일 다운로드를 요청했어요. 다운로드 폴더나 파일 앱에 보관하세요. 파일에는 내 답변 메모가 포함됩니다.';
 };
 el('import-records').onclick=()=>el('import-file').click();
 el('import-file').onchange=async()=>{
  const file=el('import-file').files[0];if(!file)return;
  try{if(file.size>4*1024*1024)throw Error('백업 파일이 너무 큽니다.');const data=JSON.parse(await file.text());if(data.format!=='my-english-coach-backup'||data.version!==1)throw Error('이 프로그램의 백업 파일이 아닙니다.');const restored=validate(data.learning);
   if(!Array.isArray(data.reviews)||data.reviews.length>10000||!data.reviews.every(r=>r&&typeof r.id==='string'&&['topic','question','answer','suggestion','explanation'].every(k=>typeof r[k]==='string'&&r[k].length<=10000)))throw Error('복습 기록이 올바르지 않습니다.');
   if(!window.confirm(`이 백업의 ${restored.cursor}일 완료 기록과 복습 문장 ${data.reviews.length}개로 현재 브라우저 기록을 교체합니다. 필요한 현재 기록은 먼저 백업하세요. 가져올까요?`))return;
   const oldLearning=localStorage.getItem(key),oldReviews=localStorage.getItem(storageKey);try{localStorage.setItem(key,JSON.stringify(restored));localStorage.setItem(storageKey,JSON.stringify(data.reviews));}catch(e){try{if(oldLearning===null)localStorage.removeItem(key);else localStorage.setItem(key,oldLearning);if(oldReviews===null)localStorage.removeItem(storageKey);else localStorage.setItem(storageKey,oldReviews);}catch{}throw Error('저장 공간을 사용할 수 없어 가져오지 못했습니다.');}
   state=restored;records=data.reviews;storageReadable=true;storedRaw=localStorage.getItem(key);blocked=false;preview=false;el('course-warning').hidden=true;updateCount();updateHome();renderHistory();el('backup-status').textContent='백업 기록을 가져왔어요. 오늘 공부 메뉴에서 이어서 시작하세요.';
  }catch(e){el('backup-status').textContent=`가져오지 못했어요: ${e.message}`;}finally{el('import-file').value='';}
 };
 window.addEventListener('focus',updateHome);
 window.addEventListener('storage',e=>{if(e.key===key&&e.newValue!==storedRaw){blocked=true;warn('다른 탭에서 기록이 바뀌었어요. 이 탭에서는 덮어쓰지 않습니다. 필요하면 백업하고 새로고침해 주세요.');}});
 updateHome();
})();
