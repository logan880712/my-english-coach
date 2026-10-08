const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const crypto=require('node:crypto');
const context=vm.createContext({});
for(const file of ['course-data.js','daily-course-data.js','speaking-support.js'])vm.runInContext(fs.readFileSync(path.join(__dirname,'..',file),'utf8'),context);
const evaluate=code=>JSON.parse(vm.runInContext(`JSON.stringify(${code})`,context));
const days=evaluate('sixMonthCourse.days'),modules=evaluate('sixMonthCourse.modules');
const get=e=>modules[e.module].exchanges[e.index];
test('180 daily allocations teach different new exchanges and only review previously taught ones',()=>{
 assert.equal(days.length,180);const learned=new Set(),pairs=new Set();
 for(const day of days){
  assert.equal(day.entries.length,6);assert.equal(day.newCount,day.day===1?6:4);
  for(const entry of day.entries.slice(day.newCount))assert.ok(learned.has(get(entry).id),`Untaught review on day ${day.day}`);
  for(const entry of day.entries.slice(0,day.newCount)){
   const q=get(entry),key=q.prompt+'|'+q.answer;
   assert.ok(!learned.has(q.id),`Repeated new ID on day ${day.day}`);
   assert.ok(!pairs.has(key),`Repeated new exchange on day ${day.day}`);
   assert.ok(q.promptKo&&q.answerKo);learned.add(q.id);pairs.add(key);
  }
 }
 assert.equal(learned.size,722);
 assert.notDeepEqual(days[0].entries.slice(0,4),days[1].entries.slice(0,4));
});
test('every day has ten practical words and every prompt/answer has complete Hangul reading aids',()=>{
 for(const day of days){const words=evaluate(`wordsForDay(${day.day})`);assert.equal(words.length,10);assert.equal(new Set(words.map(w=>w.word.toLowerCase())).size,10);assert.ok(words.every(w=>w.meaning&&w.pronunciation));
  for(const entry of day.entries){const q=get(entry);for(const value of [q.prompt,q.answer])assert.ok(!/[a-z]/i.test(evaluate(`hangulSound(${JSON.stringify(value)})`)),value);}
 }
});
test('weekly questions cover taught material, have unambiguous options and occur 25 times',()=>{
 const weeks=days.filter(d=>d.day%7===0);assert.equal(weeks.length,25);
 for(const day of weeks){const questions=evaluate(`weeklyQuestions(${day.day})`);assert.equal(questions.length,8);assert.equal(questions.filter(q=>q.kind==='word').length,5);
  const taught=days.slice(day.day-7,day.day).flatMap(d=>d.entries.map(get));
  const words=days.slice(day.day-7,day.day).flatMap(d=>evaluate(`wordsForDay(${d.day})`));
  for(const q of questions){assert.equal(q.options.length,3);assert.equal(new Set(q.options).size,3);assert.ok(q.options.includes(q.correct));assert.ok(q.kind==='sentence'?taught.some(e=>e.answer===q.correct&&e.answerKo===q.prompt):words.some(w=>w.word===q.prompt&&w.meaning===q.correct));}
 }
 assert.equal(days.filter(d=>d.monthly).length,6);
});
test('saved old weekly prompts, options, ordering and correct answers stay identical',()=>{
 for(const fixture of require('./legacy-weekly-fixtures.json')){const questions=evaluate(`weeklyQuestions(${fixture.day},${fixture.bankVersion})`).map(({sound,...q})=>q);assert.equal(crypto.createHash('sha256').update(JSON.stringify(questions)).digest('hex'),fixture.hash);}
});
test('a mixed old/new week tests only the actual studied lesson versions',()=>{
 const oldDays=evaluate('legacyCourseDays'),versions=[1,1,1,2,2,2,2],day=7;
 const taught=versions.flatMap((v,i)=>(v===1?oldDays:days)[i].entries.map(get));
 for(const q of evaluate(`weeklyQuestions(${day},3,${JSON.stringify(versions)})`).filter(q=>q.kind==='sentence'))assert.ok(taught.some(e=>e.answer===q.correct&&e.answerKo===q.prompt));
});
