'use strict';
const lessons = {
  '일상생활': [
    ['What do you do in the morning?', '아침에 무엇을 하나요?', 'I drink coffee in the morning.', '“I drink coffee”처럼 주어(I) 다음에 동작(drink)을 써 보세요. 습관을 말할 때는 현재형을 사용해요.', 'in the morning은 “아침에”라는 뜻이에요. 커피 대신 tea(차), water(물)를 넣어도 좋아요.'],
    ['What do you like to do on weekends?', '주말에 무엇을 하는 것을 좋아하나요?', 'I like to go for a walk on weekends.', '“I like to + 동사” 순서인지 확인해 보세요. like 뒤에 동사를 바로 붙이기보다 to를 함께 쓰면 좋아요.', 'go for a walk는 “산책하다”예요. I like to read books처럼 좋아하는 활동을 바꿀 수 있어요.']
  ],
  '여행': [
    ['Where would you like to travel?', '어디로 여행을 가고 싶나요?', 'I would like to travel to Japan.', '목적지를 말할 때 travel 뒤에 to가 있는지 살펴보세요.', 'would like to는 “~하고 싶어요”라는 부드러운 표현이에요. Japan 대신 가고 싶은 나라를 넣어 보세요.'],
    ['How do you get to the airport?', '공항까지 어떻게 가나요?', 'I go to the airport by bus.', '교통수단은 by bus처럼 말해요. by a bus가 아니라 by bus예요.', 'go to는 “~에 가다”, by bus는 “버스로”예요. by train(기차로), by taxi(택시로)도 사용할 수 있어요.']
  ],
  '식당': [
    ['What would you like to order?', '무엇을 주문하고 싶나요?', 'I would like a chicken salad, please.', '음식을 정중하게 요청하려면 “I would like …, please.” 형태를 참고하세요.', 'I would like 뒤에 음식 이름을 넣으면 “~을 주세요”가 돼요. 한 접시의 샐러드는 a salad라고 할 수 있어요.'],
    ['What would you like to drink?', '무엇을 마시고 싶나요?', 'I would like some water, please.', 'water는 보통 개수를 세지 않으므로 a water 대신 some water를 써 보세요.', 'some water는 “물 좀”이라는 뜻이에요. a glass of water라고 하면 “물 한 잔”이에요.']
  ],
  '쇼핑': [
    ['What are you looking for?', '무엇을 찾고 있나요?', 'I am looking for a blue shirt.', 'look for는 “찾다”예요. for가 빠지지 않았는지 확인해 보세요.', 'I am looking for는 “~을 찾고 있어요”예요. a blue shirt는 “파란 셔츠 한 벌”이에요.'],
    ['What size do you need?', '어떤 사이즈가 필요하나요?', 'I need a medium, please.', '“I need + 필요한 것” 순서를 참고하세요.', 'a medium은 옷을 고르는 상황에서 “중간 사이즈 한 벌”이라는 뜻이에요. small이나 large로 바꿀 수 있어요.']
  ],
  '직장': [
    ['What do you do?', '어떤 일을 하나요?', 'I am an office worker.', '직업을 말할 때 “I am + a/an + 직업”을 사용해요. am이나 관사가 빠졌는지 살펴보세요.', 'office는 모음 소리로 시작하므로 an을 써요. I am a teacher는 “저는 교사예요”라는 뜻이에요.'],
    ['What time do you start work?', '몇 시에 일을 시작하나요?', 'I start work at nine.', '시각 앞에는 at을 써요. in nine보다 at nine이 자연스러워요.', 'start work는 “일을 시작하다”예요. at nine은 “9시에”라는 뜻이고 at ten처럼 시간을 바꿀 수 있어요.']
  ]
};
const $ = id => document.getElementById(id);
const storageKey = 'my-english-coach.reviews.v1';
let topic = '일상생활', index = 0, currentAnswer = '', records = [], storageReadable = true;
try { const value = JSON.parse(localStorage.getItem(storageKey) || '[]'); if (!Array.isArray(value)) throw new Error(); records = value.filter(r => r && typeof r.id === 'string' && ['topic','question','answer','suggestion','explanation'].every(k => typeof r[k] === 'string')); } catch { storageReadable = false; }
function show(page) { stopSpeech(); for (const id of ['home','practice','review']) $(id).hidden = id !== page; window.scrollTo({top:0}); }
function question() { return lessons[topic][index]; }
function renderQuestion() { stopSpeech(); const q = question(); $('beginner-help').open = false; $('starter-example').textContent = q[2]; $('starter-meaning').textContent = meanings[q[2]] || q[4]; $('topic-label').textContent = topic + ' · 초급'; $('question').textContent = q[0]; $('translation').textContent = q[1]; $('progress').textContent = `${index + 1} / ${lessons[topic].length} 질문`; $('answer').value = ''; currentAnswer = ''; $('feedback').hidden = true; for (const b of $('categories').children) b.setAttribute('aria-pressed', String(b.textContent === topic)); }
function begin() { show('practice'); renderQuestion(); }
for (const name of Object.keys(lessons)) { const b = document.createElement('button'); b.textContent = name; b.type = 'button'; b.onclick = () => { topic = name; index = 0; renderQuestion(); }; $('categories').append(b); }
$('start').onclick = begin; $('practice-menu').onclick = begin; $('back-practice').onclick = begin;
$('home-link').onclick = e => { e.preventDefault(); show('home'); };
$('answer-form').onsubmit = e => { e.preventDefault(); const answer = $('answer').value.trim(); if (!answer) { $('answer').setCustomValidity('영어 답변을 한 문장 입력해 주세요.'); $('answer').reportValidity(); return; } currentAnswer = answer; const q = question(); $('original').textContent = answer; $('suggestion').textContent = q[2]; const same = answer.toLowerCase().replace(/[.!?]/g,'').trim() === q[2].toLowerCase().replace(/[.!?]/g,'').trim(); $('issue').textContent = same ? '준비된 예문과 같은 표현을 사용했어요! 아래 설명으로 표현을 익혀 보세요.' : '샘플 점검 안내: ' + q[3] + ' 이 안내는 입력한 문장의 오류를 자동으로 판별한 결과가 아니에요.'; $('explanation').textContent = q[4]; $('save-status').textContent = ''; $('save').disabled = false; $('save').textContent = '복습에 저장'; $('feedback').hidden = false; $('feedback').scrollIntoView({behavior:'smooth',block:'start'}); };
$('answer').oninput = () => { $('answer').setCustomValidity(''); if (currentAnswer) { $('feedback').hidden = true; currentAnswer = ''; } };
$('next').onclick = () => { index = (index + 1) % lessons[topic].length; renderQuestion(); $('answer').focus(); };
function persist(next) { if (!storageReadable) return false; try { localStorage.setItem(storageKey, JSON.stringify(next)); records = next; updateCount(); return true; } catch { return false; } }
function updateCount() { $('review-count').textContent = records.length; }
$('save').onclick = () => { const q = question(); if (records.some(r => r.question === q[0] && r.answer === currentAnswer)) { $('save-status').textContent = '이미 저장한 문장이에요.'; return; } const r = {id:crypto.randomUUID(),topic,question:q[0],answer:currentAnswer,suggestion:q[2],explanation:q[4],createdAt:new Date().toISOString()}; if (persist([...records,r])) { $('save-status').textContent = '복습 노트에 저장했어요.'; $('save').disabled = true; $('save').textContent = '저장 완료'; } else { $('save-status').textContent = '브라우저 저장 공간을 사용할 수 없어요. 저장 설정을 확인해 주세요. 기존 데이터는 덮어쓰지 않았어요.'; } };
function textElement(tag, text) { const el = document.createElement(tag); el.textContent = text; return el; }
function renderReviews() { const list = $('review-list'); list.replaceChildren(); if (!records.length) { const empty = textElement('p',storageReadable ? '아직 저장된 문장이 없어요. 회화 연습에서 “복습에 저장”을 눌러 보세요.' : '저장된 기록을 읽을 수 없어요. 브라우저 저장 설정을 확인해 주세요.'); empty.className = 'empty'; list.append(empty); } for (const r of [...records].reverse()) { const card = document.createElement('article'); card.className = 'card review-card'; card.append(textElement('span',r.topic),textElement('h2',r.question),textElement('h3','내 문장'),textElement('p',r.answer),textElement('h3','추천 예문'),textElement('p',r.suggestion),textElement('h3','표현 설명'),textElement('p',r.explanation)); const remove = textElement('button','복습에서 삭제'); remove.className = 'delete'; remove.onclick = () => { if (persist(records.filter(item => item.id !== r.id))) renderReviews(); else { remove.textContent = '삭제하지 못했어요. 저장 설정을 확인해 주세요.'; } }; card.append(remove); list.append(card); } }
$('review-menu').onclick = () => { renderReviews(); show('review'); }; updateCount();

const meanings = {
'I drink coffee in the morning.':'저는 아침에 커피를 마셔요.',
'I like to go for a walk on weekends.':'저는 주말에 산책하는 것을 좋아해요.',
'I would like to travel to Japan.':'저는 일본으로 여행 가고 싶어요.',
'I go to the airport by bus.':'저는 버스로 공항에 가요.',
'I would like a chicken salad, please.':'치킨 샐러드 하나 주세요.',
'I would like some water, please.':'물 좀 주세요.',
'I am looking for a blue shirt.':'파란 셔츠를 찾고 있어요.',
'I need a medium, please.':'중간 사이즈로 주세요.',
'I am an office worker.':'저는 회사원이에요.',
'I start work at nine.':'저는 9시에 일을 시작해요.'
};
let recognition = null;
function stopSpeech() {
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  if (recognition) { const previous = recognition; recognition = null; previous.abort(); }
  $('speak-answer').disabled = false; $('stop-recording').hidden = true;
  $('audio-status').textContent = ''; $('mic-status').textContent = '마이크는 지원되는 브라우저에서 사용할 수 있어요. 음성 인식 서비스에 음성이 전송될 수 있습니다. 녹음 파일은 이 앱에 저장되지 않아요.';
}
function speak(text, rate = .85) {
  stopSpeech();
  if (!('speechSynthesis' in window)) { $('audio-status').textContent = '이 브라우저는 음성 재생을 지원하지 않아요. 화면의 예문을 읽어 주세요.'; return; }
  const utterance = new SpeechSynthesisUtterance(text); utterance.lang = 'en-US'; utterance.rate = rate;
  const voice = speechSynthesis.getVoices().find(v => v.lang.startsWith('en')); if (voice) utterance.voice = voice;
  utterance.onerror = () => { $('audio-status').textContent = '음성을 재생하지 못했어요. 기기 음량과 영어 음성 설정을 확인해 주세요.'; };
  $('audio-status').textContent = '영어 음성을 재생합니다. 소리가 안 들리면 기기 음량을 확인해 주세요.';
  speechSynthesis.speak(utterance);
}
$('listen-question').onclick = () => speak(question()[0]);
$('listen-slow').onclick = () => speak(question()[0], .6);
$('listen-example').onclick = () => speak(question()[2]);
$('spoken-done').onclick = () => { $('answer').value = question()[2]; $('answer').dispatchEvent(new Event('input')); $('answer-form').requestSubmit(); $('original').textContent = '따라 말하기 연습 (사용한 예문): ' + question()[2]; $('issue').textContent = '따라 말하기를 완료했어요. 실제 음성이나 발음을 평가한 결과는 아니에요. 다음에는 예문을 가리고 말해 보세요.'; };
$('speak-answer').onclick = () => {
  stopSpeech(); const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition || !window.isSecureContext) { $('mic-status').textContent = '이 환경에서는 마이크 답변을 사용할 수 없어요. 예문을 소리 내어 따라 말하거나 직접 입력해 주세요. 마이크 기능은 HTTPS 사이트의 지원 브라우저에서 사용하세요.'; return; }
  const session = new Recognition(); recognition = session; session.lang = 'en-US'; session.interimResults = false;
  session.onresult = event => { if (recognition !== session) return; $('answer').value = event.results[0][0].transcript.slice(0,1000); $('answer').dispatchEvent(new Event('input')); $('mic-status').textContent = '들은 내용을 입력했어요. 내용이 맞는지 확인하고 답변 확인을 눌러 주세요.'; };
  session.onerror = event => { if (recognition !== session) return; $('mic-status').textContent = event.error === 'not-allowed' ? '마이크 권한이 허용되지 않았어요. 직접 입력하거나 예문을 따라 말해도 됩니다.' : '말을 인식하지 못했어요. 다시 시도하거나 직접 입력해 주세요.'; };
  session.onend = () => { if (recognition !== session) return; recognition = null; $('speak-answer').disabled = false; $('stop-recording').hidden = true; if ($('mic-status').textContent.startsWith('듣고 있어요')) $('mic-status').textContent = '말하기가 끝났어요. 답변이 없으면 다시 시도해 주세요.'; };
  try { session.start(); $('speak-answer').disabled = true; $('stop-recording').hidden = false; $('mic-status').textContent = '듣고 있어요. 영어로 짧게 말해 주세요.'; } catch { stopSpeech(); $('mic-status').textContent = '마이크를 시작하지 못했어요. 직접 입력해 주세요.'; }
};
$('stop-recording').onclick = () => { if (recognition) recognition.stop(); };
renderQuestion();
