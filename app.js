'use strict';
const lessons = Object.fromEntries(Object.entries(courseLessons).map(([topic, entries]) => [topic, entries.map(q => [q[0], q[1], q[2], '예문과 비교해 주어와 동사의 순서, 빠진 단어가 있는지 살펴보세요. 다른 답변도 가능해요.', `${q[2]}는 “${q[3]}”라는 뜻이에요. 한 덩어리로 익힌 뒤 내 상황에 맞게 이름·장소·시간 등을 바꿔 말해 보세요.`]) ]));
const $ = id => document.getElementById(id);
const storageKey = 'my-english-coach.reviews.v1';
let topic = '일상생활', index = 0, currentAnswer = '', records = [], storageReadable = true;
try { const value = JSON.parse(localStorage.getItem(storageKey) || '[]'); if (!Array.isArray(value)) throw new Error(); records = value.filter(r => r && typeof r.id === 'string' && ['topic','question','answer','suggestion','explanation'].every(k => typeof r[k] === 'string')); } catch { storageReadable = false; }
function show(page) { stopSpeech(); for (const id of ['home','practice','review','daily-complete','course','history']) $(id).hidden = id !== page; window.scrollTo({top:0}); }
function question() { return lessons[topic][index]; }
function renderQuestion() { stopSpeech(); const q = question(); $('beginner-help').open = false; $('starter-example').textContent = q[2]; $('starter-meaning').textContent = meanings[q[2]] || q[4]; $('topic-label').textContent = topic + ' · 초급'; $('question').textContent = q[0]; $('question-sound').textContent = hangulSound(q[0]); $('starter-sound').textContent = hangulSound(q[2]); $('translation').textContent = q[1]; $('progress').textContent = `${index + 1} / ${lessons[topic].length} 질문`; $('answer').value = ''; currentAnswer = ''; $('feedback').hidden = true; for (const b of $('categories').children) b.setAttribute('aria-pressed', String(b.textContent === topic)); }
function begin() { dailyMode = false; $('daily-guide').hidden = true; $('categories').hidden = false; $('next').hidden = false; show('practice'); renderQuestion(); }
for (const name of Object.keys(lessons)) { const b = document.createElement('button'); b.textContent = name; b.type = 'button'; b.onclick = () => { topic = name; index = 0; renderQuestion(); }; $('categories').append(b); }
$('start').onclick = startDaily; $('practice-menu').onclick = begin; $('back-practice').onclick = begin;
$('home-link').onclick = e => { e.preventDefault(); show('home'); };
$('answer-form').onsubmit = e => { e.preventDefault(); const answer = $('answer').value.trim(); if (!answer) { $('answer').setCustomValidity('답변을 입력해 주세요. 영어 또는 한글 발음으로 적어도 괜찮아요.'); $('answer').reportValidity(); return; } currentAnswer = answer; const q = question(); $('original').textContent = answer; $('suggestion').textContent = q[2]; $('suggestion-sound').textContent = hangulSound(q[2]); const same = answer.toLowerCase().replace(/[.!?]/g,'').trim() === q[2].toLowerCase().replace(/[.!?]/g,'').trim(); $('issue').textContent = same ? '준비된 예문과 같은 표현을 사용했어요! 아래 설명으로 표현을 익혀 보세요.' : '샘플 점검 안내: ' + q[3] + ' 이 안내는 입력한 문장의 오류를 자동으로 판별한 결과가 아니에요.'; $('explanation').textContent = q[4]; $('save-status').textContent = ''; $('save').disabled = false; $('save').textContent = '복습에 저장'; $('feedback').hidden = false; $('feedback').scrollIntoView({behavior:'smooth',block:'start'}); };
$('answer').oninput = () => { $('answer').setCustomValidity(''); if (currentAnswer) { $('feedback').hidden = true; currentAnswer = ''; } };
$('next').onclick = () => { index = (index + 1) % lessons[topic].length; renderQuestion(); $('answer').focus(); };
function persist(next) { if (!storageReadable) return false; try { localStorage.setItem(storageKey, JSON.stringify(next)); records = next; updateCount(); return true; } catch { return false; } }
function updateCount() { $('review-count').textContent = records.length; }
$('save').onclick = () => { const q = question(); if (records.some(r => r.question === q[0] && r.answer === currentAnswer)) { $('save-status').textContent = '이미 저장한 문장이에요.'; return; } const r = {id:crypto.randomUUID(),topic,question:q[0],answer:currentAnswer,suggestion:q[2],explanation:q[4],createdAt:new Date().toISOString()}; if (persist([...records,r])) { $('save-status').textContent = '복습 노트에 저장했어요.'; $('save').disabled = true; $('save').textContent = '저장 완료'; } else { $('save-status').textContent = '브라우저 저장 공간을 사용할 수 없어요. 저장 설정을 확인해 주세요. 기존 데이터는 덮어쓰지 않았어요.'; } };
function textElement(tag, text) { const el = document.createElement(tag); el.textContent = text; return el; }
function renderReviews() { const list = $('review-list'); list.replaceChildren(); if (!records.length) { const empty = textElement('p',storageReadable ? '아직 저장된 문장이 없어요. 회화 연습에서 “복습에 저장”을 눌러 보세요.' : '저장된 기록을 읽을 수 없어요. 브라우저 저장 설정을 확인해 주세요.'); empty.className = 'empty'; list.append(empty); } for (const r of [...records].reverse()) { const card = document.createElement('article'); card.className = 'card review-card'; card.append(textElement('span',r.topic),textElement('h2',r.question),textElement('h3','내 문장'),textElement('p',r.answer),textElement('h3','추천 예문'),textElement('p',r.suggestion),textElement('h3','표현 설명'),textElement('p',r.explanation)); const remove = textElement('button','복습에서 삭제'); remove.className = 'delete'; remove.onclick = () => { if (persist(records.filter(item => item.id !== r.id))) renderReviews(); else { remove.textContent = '삭제하지 못했어요. 저장 설정을 확인해 주세요.'; } }; card.append(remove); list.append(card); } }
$('review-menu').onclick = () => { renderReviews(); show('review'); }; updateCount();

const meanings = Object.fromEntries(Object.values(courseLessons).flat().map(q => [q[2],q[3]]));
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

// The guided 180-day course is implemented in course-app.js. Free practice remains available.
let dailyMode = false;
function startDaily() { window.startCourse(); }
renderQuestion();
