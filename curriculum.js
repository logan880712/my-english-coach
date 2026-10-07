'use strict';
// Question, Korean question, model answer, Korean answer. These are authored samples, not AI correction.
const courseLessons = {
'일상생활': [
["What's your name?",'이름이 뭐예요?',"My name is Min.",'제 이름은 민이에요.'],
['Where are you from?','어디 출신이에요?',"I'm from Korea.",'저는 한국 출신이에요.'],
['How are you today?','오늘 기분이 어때요?',"I'm good, thank you.",'좋아요, 고마워요.'],
['What do you like?','무엇을 좋아해요?','I like music.','저는 음악을 좋아해요.'],
['Where do you live?','어디에 살아요?','I live in Seoul.','저는 서울에 살아요.'],
['What do you do in the morning?','아침에 무엇을 해요?','I drink coffee in the morning.','저는 아침에 커피를 마셔요.'],
['What do you do on weekends?','주말에 무엇을 해요?','I go for a walk on weekends.','저는 주말에 산책해요.'],
['What food do you like?','어떤 음식을 좋아해요?','I like chicken.','저는 닭고기를 좋아해요.'],
['What did you do yesterday?','어제 무엇을 했어요?','I watched a movie yesterday.','저는 어제 영화를 봤어요.'],
['What are you doing now?','지금 무엇을 하고 있어요?',"I'm studying English.",'저는 영어를 공부하고 있어요.'],
['What will you do tomorrow?','내일 무엇을 할 거예요?',"I'm going to meet a friend.",'저는 친구를 만날 예정이에요.'],
['Why are you learning English?','왜 영어를 배우고 있어요?','I want to talk to people when I travel.','여행할 때 사람들과 이야기하고 싶어요.']
],
'여행': [
['Can I help you?','도와드릴까요?','Where is the bathroom?','화장실이 어디인가요?'],
['Where are you going?','어디로 가세요?',"I'm going to the airport.",'공항에 가요.'],
['How will you get there?','어떻게 거기까지 갈 거예요?',"I'll take a bus.",'버스를 탈 거예요.'],
['Do you need directions?','길 안내가 필요하세요?','How do I get to the station?','역까지 어떻게 가나요?'],
['Do you have a reservation?','예약하셨나요?','I have a reservation under Kim.','김이라는 이름으로 예약했어요.'],
['How long will you stay?','얼마나 머무를 거예요?',"I'll stay for three nights.",'3박 머물 거예요.'],
['Do you need anything?','필요한 것이 있으세요?','Could I have another towel, please?','수건 하나 더 받을 수 있을까요?'],
['What is the problem?','무슨 문제인가요?','The air conditioner is not working.','에어컨이 작동하지 않아요.'],
['Are you ready to check out?','체크아웃하시겠어요?',"I'd like to check out, please.",'체크아웃하고 싶어요.'],
['Is this your first visit?','처음 방문하셨나요?','Yes, this is my first visit.','네, 처음 방문했어요.'],
['Do you need help?','도움이 필요하세요?',"I'm lost. Could you help me?",'길을 잃었어요. 도와주시겠어요?'],
['What would you like to know?','무엇을 알고 싶으세요?','What time does the last train leave?','마지막 기차는 몇 시에 출발하나요?']
],
'식당': [
['How many people?','몇 분이세요?','A table for two, please.','두 명 자리 부탁해요.'],
['Would you like to see the menu?','메뉴를 보시겠어요?','Yes, could I see the menu, please?','네, 메뉴를 볼 수 있을까요?'],
['Are you ready to order?','주문하시겠어요?',"I'd like a chicken salad, please.",'치킨 샐러드 하나 주세요.'],
['What would you like to drink?','무엇을 마시겠어요?',"I'd like some water, please.",'물 좀 주세요.'],
['Do you have any questions?','궁금한 것이 있으세요?','What do you recommend?','무엇을 추천하세요?'],
['How spicy would you like it?','얼마나 맵게 해 드릴까요?','Not too spicy, please.','너무 맵지 않게 해 주세요.'],
['Do you have any allergies?','알레르기가 있으세요?',"I'm allergic to peanuts.",'저는 땅콩 알레르기가 있어요.'],
['Would you like anything else?','다른 것도 필요하세요?','Could I have a spoon, please?','숟가락을 받을 수 있을까요?'],
['Is everything okay?','괜찮으신가요?','I ordered soup, but this is a salad.','저는 수프를 주문했는데 이것은 샐러드예요.'],
['For here or to go?','여기서 드시나요, 가져가시나요?','To go, please.','포장해 주세요.'],
['Are you finished?','식사를 마치셨나요?','Could I have the bill, please?','계산서 좀 주시겠어요?'],
['How would you like to pay?','어떻게 결제하시겠어요?','Can I pay by card?','카드로 결제할 수 있나요?']
],
'쇼핑': [
['Can I help you find something?','찾는 물건이 있으세요?',"I'm looking for a shirt.",'셔츠를 찾고 있어요.'],
['What color would you like?','어떤 색을 원하세요?',"I'd like a blue one.",'파란색으로 주세요.'],
['What size do you need?','어떤 사이즈가 필요하세요?','I need a medium, please.','중간 사이즈로 주세요.'],
['Would you like to try it on?','입어 보시겠어요?','Yes, where is the fitting room?','네, 탈의실이 어디인가요?'],
['Does it fit?','크기가 맞나요?',"It's too small.",'너무 작아요.'],
['Do you need a different size?','다른 사이즈가 필요하세요?','Do you have a larger size?','더 큰 사이즈가 있나요?'],
['Do you have any questions?','궁금한 것이 있으세요?','How much is this?','이것은 얼마인가요?'],
['Is the price okay?','가격이 괜찮나요?',"It's a little expensive.",'조금 비싸네요.'],
['Would you like this one?','이것으로 하시겠어요?',"I'll take it.",'이것으로 할게요.'],
['Do you need a bag?','봉투가 필요하세요?','Yes, please.','네, 부탁해요.'],
['How can I help you today?','무엇을 도와드릴까요?',"I'd like to return this.",'이것을 반품하고 싶어요.'],
['Why would you like to return it?','왜 반품하려고 하세요?','It does not fit. I have the receipt.','크기가 맞지 않아요. 영수증이 있어요.']
],
'직장': [
['What do you do?','어떤 일을 하세요?',"I'm an office worker.",'저는 회사원이에요.'],
['What time do you start work?','몇 시에 일을 시작하세요?','I start work at nine.','저는 9시에 일을 시작해요.'],
['Are you busy today?','오늘 바쁘세요?',"Yes, but I'm free after lunch.",'네, 하지만 점심 후에는 시간이 있어요.'],
['When can we meet?','언제 만날 수 있을까요?','Can we meet at two?','2시에 만날 수 있을까요?'],
['Do you understand?','이해하셨나요?','Could you say that again, please?','다시 말해 주시겠어요?'],
['Am I speaking too fast?','제가 너무 빨리 말하나요?','Could you speak more slowly, please?','조금 더 천천히 말해 주시겠어요?'],
['Do you have a question?','질문이 있으세요?','What does this word mean?','이 단어는 무슨 뜻인가요?'],
['Do you need help?','도움이 필요하세요?','Could you show me how to do this?','이것을 어떻게 하는지 보여 주시겠어요?'],
['When will it be ready?','언제 준비되나요?',"I'll finish it tomorrow.",'내일 끝낼게요.'],
['Can you send me the file?','파일을 보내 주시겠어요?',"Sure, I'll send it by email.",'물론이죠, 이메일로 보낼게요.'],
['Can you come to the meeting?','회의에 오실 수 있나요?',"I'm sorry, I can't come today.",'죄송하지만 오늘 갈 수 없어요.'],
['What do you think?','어떻게 생각하세요?','I think we need more time.','시간이 더 필요하다고 생각해요.']
]
};
