'use strict';
const sixMonthCourse = {
  "version": 1,
  "modules": [
    {
      "id": "m01",
      "title": "첫 인사와 자기소개",
      "category": "일상생활",
      "goal": "처음 만난 사람에게 이름·출신·사는 곳을 말해요.",
      "tip": "I'm은 I am의 줄임말이에요. 이름은 My name is 뒤에, 출신은 I'm from 뒤에 말해요.",
      "exchanges": [
        {
          "id": "m01-0",
          "prompt": "Hi! What's your name?",
          "promptKo": "안녕하세요! 이름이 뭐예요?",
          "answer": "My name is Min.",
          "answerKo": "제 이름은 민이에요."
        },
        {
          "id": "m01-1",
          "prompt": "Nice to meet you, Min.",
          "promptKo": "만나서 반가워요, 민.",
          "answer": "Nice to meet you, too.",
          "answerKo": "저도 만나서 반가워요."
        },
        {
          "id": "m01-2",
          "prompt": "Where are you from?",
          "promptKo": "어디 출신이에요?",
          "answer": "I'm from Korea.",
          "answerKo": "저는 한국 출신이에요."
        },
        {
          "id": "m01-3",
          "prompt": "Where do you live?",
          "promptKo": "어디에 살아요?",
          "answer": "I live in Seoul.",
          "answerKo": "저는 서울에 살아요."
        },
        {
          "id": "m01-4",
          "prompt": "What do you do?",
          "promptKo": "어떤 일을 하세요?",
          "answer": "I'm an office worker.",
          "answerKo": "저는 회사원이에요."
        },
        {
          "id": "m01-5",
          "prompt": "What do you like to do?",
          "promptKo": "무엇을 하는 것을 좋아해요?",
          "answer": "I like to listen to music.",
          "answerKo": "저는 음악 듣기를 좋아해요."
        }
      ],
      "changeExample": "Min → Jisoo / Seoul → Busan",
      "changeInstruction": "내 이름과 사는 도시로 바꿔 소개하세요."
    },
    {
      "id": "m02",
      "title": "하루 일과",
      "category": "일상생활",
      "goal": "일어나는 시간부터 잠드는 시간까지 이야기해요.",
      "tip": "습관은 I + 동사로 말해요. 시각 앞에는 at을 붙여요.",
      "exchanges": [
        {
          "id": "m02-0",
          "prompt": "What time do you get up?",
          "promptKo": "몇 시에 일어나요?",
          "answer": "I get up at seven.",
          "answerKo": "저는 7시에 일어나요."
        },
        {
          "id": "m02-1",
          "prompt": "What do you do first?",
          "promptKo": "제일 먼저 무엇을 해요?",
          "answer": "I drink a glass of water.",
          "answerKo": "저는 물 한 잔을 마셔요."
        },
        {
          "id": "m02-2",
          "prompt": "What do you have for breakfast?",
          "promptKo": "아침으로 무엇을 먹어요?",
          "answer": "I have eggs and toast.",
          "answerKo": "저는 달걀과 토스트를 먹어요."
        },
        {
          "id": "m02-3",
          "prompt": "How do you go to work?",
          "promptKo": "어떻게 출근해요?",
          "answer": "I go to work by bus.",
          "answerKo": "저는 버스로 출근해요."
        },
        {
          "id": "m02-4",
          "prompt": "What do you do after work?",
          "promptKo": "퇴근 후 무엇을 해요?",
          "answer": "I go for a walk.",
          "answerKo": "저는 산책해요."
        },
        {
          "id": "m02-5",
          "prompt": "What time do you go to bed?",
          "promptKo": "몇 시에 자요?",
          "answer": "I go to bed at eleven.",
          "answerKo": "저는 11시에 자요."
        }
      ],
      "changeExample": "seven → eight / bus → subway",
      "changeInstruction": "시간과 교통수단을 내 일과에 맞게 바꾸세요."
    },
    {
      "id": "m03",
      "title": "좋아하는 것 말하기",
      "category": "일상생활",
      "goal": "취향을 말하고 짧은 이유를 덧붙여요.",
      "tip": "I like 뒤에는 좋아하는 것을, because 뒤에는 이유를 말해요.",
      "exchanges": [
        {
          "id": "m03-0",
          "prompt": "Do you like music?",
          "promptKo": "음악을 좋아해요?",
          "answer": "Yes, I like music.",
          "answerKo": "네, 음악을 좋아해요."
        },
        {
          "id": "m03-1",
          "prompt": "What kind of music do you like?",
          "promptKo": "어떤 음악을 좋아해요?",
          "answer": "I like pop music.",
          "answerKo": "저는 팝 음악을 좋아해요."
        },
        {
          "id": "m03-2",
          "prompt": "Who is your favorite singer?",
          "promptKo": "가장 좋아하는 가수는 누구예요?",
          "answer": "My favorite singer is Adele.",
          "answerKo": "제가 가장 좋아하는 가수는 아델이에요."
        },
        {
          "id": "m03-3",
          "prompt": "Do you like movies, too?",
          "promptKo": "영화도 좋아해요?",
          "answer": "Yes, I like funny movies.",
          "answerKo": "네, 웃긴 영화를 좋아해요."
        },
        {
          "id": "m03-4",
          "prompt": "Why do you like them?",
          "promptKo": "왜 좋아해요?",
          "answer": "Because they make me laugh.",
          "answerKo": "저를 웃게 해 주기 때문이에요."
        },
        {
          "id": "m03-5",
          "prompt": "Would you like to watch a movie this weekend?",
          "promptKo": "이번 주말에 영화를 볼래요?",
          "answer": "Yes, that sounds good.",
          "answerKo": "네, 좋겠어요."
        }
      ],
      "changeExample": "pop music → jazz / funny movies → action movies",
      "changeInstruction": "좋아하는 음악·영화를 바꿔 말하세요."
    },
    {
      "id": "m04",
      "title": "가족과 집 이야기",
      "category": "일상생활",
      "goal": "가족과 사는 곳을 소개해요.",
      "tip": "I have는 가지고 있다는 뜻뿐 아니라 가족을 소개할 때도 써요.",
      "exchanges": [
        {
          "id": "m04-0",
          "prompt": "Do you have any brothers or sisters?",
          "promptKo": "형제자매가 있나요?",
          "answer": "I have one sister.",
          "answerKo": "저는 자매 한 명이 있어요."
        },
        {
          "id": "m04-1",
          "prompt": "Does she live near you?",
          "promptKo": "그분은 가까이 살아요?",
          "answer": "Yes, she lives near me.",
          "answerKo": "네, 제 가까이에 살아요."
        },
        {
          "id": "m04-2",
          "prompt": "Who do you live with?",
          "promptKo": "누구와 살아요?",
          "answer": "I live with my family.",
          "answerKo": "저는 가족과 살아요."
        },
        {
          "id": "m04-3",
          "prompt": "Do you live in a house or an apartment?",
          "promptKo": "단독주택에 살아요, 아파트에 살아요?",
          "answer": "I live in an apartment.",
          "answerKo": "저는 아파트에 살아요."
        },
        {
          "id": "m04-4",
          "prompt": "Is your neighborhood quiet?",
          "promptKo": "동네가 조용한가요?",
          "answer": "Yes, it's quiet and convenient.",
          "answerKo": "네, 조용하고 편리해요."
        },
        {
          "id": "m04-5",
          "prompt": "What do you like about your home?",
          "promptKo": "집에서 무엇이 마음에 들어요?",
          "answer": "I like the view from my window.",
          "answerKo": "창문으로 보이는 풍경이 좋아요."
        }
      ],
      "changeExample": "one sister → one brother / family → a friend",
      "changeInstruction": "가족과 함께 사는 사람을 실제 상황으로 바꾸세요."
    },
    {
      "id": "m05",
      "title": "못 알아들었을 때",
      "category": "일상생활",
      "goal": "다시 말하기·천천히 말하기를 부탁해요.",
      "tip": "Could you + 동사 + please?는 상대에게 정중하게 부탁하는 표현이에요.",
      "exchanges": [
        {
          "id": "m05-0",
          "prompt": "The next bus leaves in fifteen minutes.",
          "promptKo": "다음 버스는 15분 뒤에 출발해요.",
          "answer": "Sorry, could you say that again?",
          "answerKo": "죄송하지만 다시 말해 주시겠어요?"
        },
        {
          "id": "m05-1",
          "prompt": "The next bus leaves in fifteen minutes.",
          "promptKo": "다음 버스는 15분 뒤에 출발해요.",
          "answer": "Could you speak more slowly, please?",
          "answerKo": "좀 더 천천히 말씀해 주시겠어요?"
        },
        {
          "id": "m05-2",
          "prompt": "It leaves at a quarter past two.",
          "promptKo": "2시 15분에 출발해요.",
          "answer": "What does a quarter past two mean?",
          "answerKo": "a quarter past two가 무슨 뜻인가요?"
        },
        {
          "id": "m05-3",
          "prompt": "It means two fifteen.",
          "promptKo": "2시 15분이라는 뜻이에요.",
          "answer": "So, it leaves at two fifteen, right?",
          "answerKo": "그러니까 2시 15분 출발이 맞나요?"
        },
        {
          "id": "m05-4",
          "prompt": "That's right. The platform is over there.",
          "promptKo": "맞아요. 승강장은 저쪽이에요.",
          "answer": "Could you show me, please?",
          "answerKo": "보여 주시겠어요?"
        },
        {
          "id": "m05-5",
          "prompt": "Of course. Follow me.",
          "promptKo": "물론이죠. 따라오세요.",
          "answer": "Thank you for your help.",
          "answerKo": "도와주셔서 고마워요."
        }
      ],
      "changeExample": "two fifteen → three thirty",
      "changeInstruction": "다른 시간을 들었다고 상상해 다시 확인하세요."
    },
    {
      "id": "m06",
      "title": "카페에서 주문하기",
      "category": "식당",
      "goal": "음료·크기·포장 여부를 선택해요.",
      "tip": "I'd like는 I would like의 줄임말로 주문할 때 정중하게 써요.",
      "exchanges": [
        {
          "id": "m06-0",
          "prompt": "What would you like?",
          "promptKo": "무엇을 드릴까요?",
          "answer": "I'd like a latte, please.",
          "answerKo": "라테 하나 주세요."
        },
        {
          "id": "m06-1",
          "prompt": "What size would you like?",
          "promptKo": "어떤 크기로 드릴까요?",
          "answer": "A small one, please.",
          "answerKo": "작은 것으로 주세요."
        },
        {
          "id": "m06-2",
          "prompt": "Hot or iced?",
          "promptKo": "따뜻한 것으로 할까요, 차가운 것으로 할까요?",
          "answer": "Iced, please.",
          "answerKo": "차가운 것으로 주세요."
        },
        {
          "id": "m06-3",
          "prompt": "For here or to go?",
          "promptKo": "매장에서 드시나요, 가져가시나요?",
          "answer": "To go, please.",
          "answerKo": "포장해 주세요."
        },
        {
          "id": "m06-4",
          "prompt": "Would you like anything else?",
          "promptKo": "다른 것도 필요하세요?",
          "answer": "No, thank you. That's all.",
          "answerKo": "아니요, 고마워요. 그게 전부예요."
        },
        {
          "id": "m06-5",
          "prompt": "How would you like to pay?",
          "promptKo": "어떻게 결제하시겠어요?",
          "answer": "Can I pay by card?",
          "answerKo": "카드로 결제할 수 있나요?"
        }
      ],
      "changeExample": "latte → tea / small → large / iced → hot",
      "changeInstruction": "음료·크기·온도를 바꿔 새 주문을 해 보세요."
    },
    {
      "id": "m07",
      "title": "식당에서 식사하기",
      "category": "식당",
      "goal": "자리를 요청하고 음식을 주문해요.",
      "tip": "A table for two는 두 명 자리예요. Could I have는 물건이나 음식을 요청할 때 써요.",
      "exchanges": [
        {
          "id": "m07-0",
          "prompt": "How many people?",
          "promptKo": "몇 분이세요?",
          "answer": "A table for two, please.",
          "answerKo": "두 명 자리 부탁해요."
        },
        {
          "id": "m07-1",
          "prompt": "Would you like a menu?",
          "promptKo": "메뉴를 드릴까요?",
          "answer": "Yes, please.",
          "answerKo": "네, 부탁해요."
        },
        {
          "id": "m07-2",
          "prompt": "Are you ready to order?",
          "promptKo": "주문하시겠어요?",
          "answer": "I'd like the chicken soup.",
          "answerKo": "치킨 수프를 주세요."
        },
        {
          "id": "m07-3",
          "prompt": "What would you like to drink?",
          "promptKo": "무엇을 마시겠어요?",
          "answer": "Could I have some water, please?",
          "answerKo": "물 좀 주시겠어요?"
        },
        {
          "id": "m07-4",
          "prompt": "How is your food?",
          "promptKo": "음식은 어떠세요?",
          "answer": "It's delicious, thank you.",
          "answerKo": "맛있어요, 고마워요."
        },
        {
          "id": "m07-5",
          "prompt": "Do you need anything else?",
          "promptKo": "다른 것이 필요하세요?",
          "answer": "Could I have the bill, please?",
          "answerKo": "계산서 좀 주시겠어요?"
        }
      ],
      "changeExample": "two → three / chicken soup → pasta",
      "changeInstruction": "인원수와 주문할 음식을 바꿔 말하세요."
    },
    {
      "id": "m08",
      "title": "메뉴와 식재료 묻기",
      "category": "식당",
      "goal": "추천 메뉴·매운 정도·알레르기를 확인해요.",
      "tip": "Does it have는 음식에 무엇이 들어 있는지 묻는 표현이에요. 알레르기는 실제 정보를 말해야 해요.",
      "exchanges": [
        {
          "id": "m08-0",
          "prompt": "Do you have any questions about the menu?",
          "promptKo": "메뉴에 대해 궁금한 점이 있나요?",
          "answer": "What do you recommend?",
          "answerKo": "무엇을 추천하세요?"
        },
        {
          "id": "m08-1",
          "prompt": "The curry is popular.",
          "promptKo": "카레가 인기가 있어요.",
          "answer": "Is it spicy?",
          "answerKo": "매운가요?"
        },
        {
          "id": "m08-2",
          "prompt": "We can make it mild.",
          "promptKo": "덜 맵게 만들 수 있어요.",
          "answer": "Not too spicy, please.",
          "answerKo": "너무 맵지 않게 해 주세요."
        },
        {
          "id": "m08-3",
          "prompt": "Do you have any allergies?",
          "promptKo": "알레르기가 있나요?",
          "answer": "I'm allergic to peanuts.",
          "answerKo": "저는 땅콩 알레르기가 있어요."
        },
        {
          "id": "m08-4",
          "prompt": "This dish has no peanuts.",
          "promptKo": "이 요리에는 땅콩이 없어요.",
          "answer": "Does it have any other nuts?",
          "answerKo": "다른 견과류가 들어 있나요?"
        },
        {
          "id": "m08-5",
          "prompt": "No, it doesn't.",
          "promptKo": "아니요, 들어 있지 않아요.",
          "answer": "Then I'll have that, please.",
          "answerKo": "그럼 그것으로 주세요."
        }
      ],
      "changeExample": "peanuts → milk",
      "changeInstruction": "샘플 알레르기는 연습용이에요. 실제 주문에서는 본인의 알레르기만 말하세요."
    },
    {
      "id": "m09",
      "title": "옷 사기",
      "category": "쇼핑",
      "goal": "색과 사이즈를 고르고 입어 봐요.",
      "tip": "I'm looking for는 찾고 있다는 뜻이에요. try on은 옷을 입어 보는 것이에요.",
      "exchanges": [
        {
          "id": "m09-0",
          "prompt": "Can I help you?",
          "promptKo": "도와드릴까요?",
          "answer": "I'm looking for a shirt.",
          "answerKo": "셔츠를 찾고 있어요."
        },
        {
          "id": "m09-1",
          "prompt": "What color would you like?",
          "promptKo": "어떤 색을 원하세요?",
          "answer": "I'd like a blue one.",
          "answerKo": "파란 것으로 주세요."
        },
        {
          "id": "m09-2",
          "prompt": "What size do you need?",
          "promptKo": "어떤 사이즈가 필요하세요?",
          "answer": "I need a medium.",
          "answerKo": "중간 사이즈가 필요해요."
        },
        {
          "id": "m09-3",
          "prompt": "Would you like to try it on?",
          "promptKo": "입어 보시겠어요?",
          "answer": "Yes. Where is the fitting room?",
          "answerKo": "네. 탈의실이 어디인가요?"
        },
        {
          "id": "m09-4",
          "prompt": "How does it fit?",
          "promptKo": "크기가 잘 맞나요?",
          "answer": "It's a little small. Do you have a large?",
          "answerKo": "조금 작아요. 큰 사이즈가 있나요?"
        },
        {
          "id": "m09-5",
          "prompt": "Here is a large one.",
          "promptKo": "여기 큰 사이즈가 있어요.",
          "answer": "This fits well. I'll take it.",
          "answerKo": "이것은 잘 맞아요. 이걸 살게요."
        }
      ],
      "changeExample": "blue → white / medium → small",
      "changeInstruction": "색과 사이즈를 바꿔 요청하세요."
    },
    {
      "id": "m10",
      "title": "마트에서 장보기",
      "category": "쇼핑",
      "goal": "위치를 묻고 필요한 양을 사요.",
      "tip": "Where can I find는 물건 위치를 물을 때 써요. a bottle of는 한 병이에요.",
      "exchanges": [
        {
          "id": "m10-0",
          "prompt": "Can I help you find something?",
          "promptKo": "찾는 물건이 있나요?",
          "answer": "Where can I find milk?",
          "answerKo": "우유는 어디에 있나요?"
        },
        {
          "id": "m10-1",
          "prompt": "It's in aisle three.",
          "promptKo": "3번 통로에 있어요.",
          "answer": "Thank you. Do you have soy milk?",
          "answerKo": "고마워요. 두유도 있나요?"
        },
        {
          "id": "m10-2",
          "prompt": "Yes, it's next to the milk.",
          "promptKo": "네, 우유 옆에 있어요.",
          "answer": "I'd like two cartons, please.",
          "answerKo": "두 팩 주세요."
        },
        {
          "id": "m10-3",
          "prompt": "Do you need anything else?",
          "promptKo": "다른 것도 필요하세요?",
          "answer": "I need a bottle of water.",
          "answerKo": "물 한 병이 필요해요."
        },
        {
          "id": "m10-4",
          "prompt": "Do you need a bag?",
          "promptKo": "봉투가 필요하세요?",
          "answer": "No, I have my own bag.",
          "answerKo": "아니요, 제 가방이 있어요."
        },
        {
          "id": "m10-5",
          "prompt": "Would you like a receipt?",
          "promptKo": "영수증이 필요하세요?",
          "answer": "Yes, please.",
          "answerKo": "네, 부탁해요."
        }
      ],
      "changeExample": "two cartons → one carton / water → juice",
      "changeInstruction": "물건과 수량을 바꿔 요청하세요."
    },
    {
      "id": "m11",
      "title": "길 찾기",
      "category": "여행",
      "goal": "목적지 방향과 거리를 확인해요.",
      "tip": "How do I get to는 목적지까지 가는 방법을 물어요. on foot는 걸어서라는 뜻이에요.",
      "exchanges": [
        {
          "id": "m11-0",
          "prompt": "You look lost. Can I help?",
          "promptKo": "길을 잃은 것 같네요. 도와드릴까요?",
          "answer": "How do I get to the station?",
          "answerKo": "역까지 어떻게 가나요?"
        },
        {
          "id": "m11-1",
          "prompt": "Go straight and turn left.",
          "promptKo": "직진하고 왼쪽으로 도세요.",
          "answer": "Is it far from here?",
          "answerKo": "여기서 먼가요?"
        },
        {
          "id": "m11-2",
          "prompt": "It's about ten minutes on foot.",
          "promptKo": "걸어서 약 10분이에요.",
          "answer": "Can I walk there?",
          "answerKo": "걸어갈 수 있나요?"
        },
        {
          "id": "m11-3",
          "prompt": "Yes. It's next to the bank.",
          "promptKo": "네. 은행 옆에 있어요.",
          "answer": "Is that the bank over there?",
          "answerKo": "저쪽에 있는 것이 그 은행인가요?"
        },
        {
          "id": "m11-4",
          "prompt": "That's right. Use this crossing.",
          "promptKo": "맞아요. 이 횡단보도를 이용하세요.",
          "answer": "So I go straight, then turn left?",
          "answerKo": "그러니까 직진한 뒤 왼쪽으로 돌면 되나요?"
        },
        {
          "id": "m11-5",
          "prompt": "Exactly.",
          "promptKo": "맞아요.",
          "answer": "Thank you. That really helps.",
          "answerKo": "고마워요. 큰 도움이 됐어요."
        }
      ],
      "changeExample": "station → museum / ten → twenty",
      "changeInstruction": "목적지와 걸리는 시간을 바꿔 확인하세요."
    },
    {
      "id": "m12",
      "title": "버스와 기차 타기",
      "category": "여행",
      "goal": "표를 사고 출발 시간과 승강장을 확인해요.",
      "tip": "a ticket to는 목적지로 가는 표예요. one-way는 편도, round-trip은 왕복이에요.",
      "exchanges": [
        {
          "id": "m12-0",
          "prompt": "Where would you like to go?",
          "promptKo": "어디로 가고 싶으세요?",
          "answer": "A ticket to the airport, please.",
          "answerKo": "공항행 표 한 장 주세요."
        },
        {
          "id": "m12-1",
          "prompt": "One-way or round-trip?",
          "promptKo": "편도인가요, 왕복인가요?",
          "answer": "One-way, please.",
          "answerKo": "편도로 주세요."
        },
        {
          "id": "m12-2",
          "prompt": "The next train leaves at ten.",
          "promptKo": "다음 기차는 10시에 출발해요.",
          "answer": "Which platform does it leave from?",
          "answerKo": "어느 승강장에서 출발하나요?"
        },
        {
          "id": "m12-3",
          "prompt": "Platform five.",
          "promptKo": "5번 승강장이에요.",
          "answer": "How long does it take?",
          "answerKo": "얼마나 걸리나요?"
        },
        {
          "id": "m12-4",
          "prompt": "About forty minutes.",
          "promptKo": "약 40분이에요.",
          "answer": "Does it go directly to the airport?",
          "answerKo": "공항까지 바로 가나요?"
        },
        {
          "id": "m12-5",
          "prompt": "Yes, it does.",
          "promptKo": "네, 바로 가요.",
          "answer": "Great. Thank you.",
          "answerKo": "좋아요. 고마워요."
        }
      ],
      "changeExample": "airport → city center / one-way → round-trip",
      "changeInstruction": "목적지와 표 종류를 바꿔 요청하세요."
    },
    {
      "id": "m13",
      "title": "호텔 체크인",
      "category": "여행",
      "goal": "예약 이름·숙박 기간·조식 시간을 확인해요.",
      "tip": "under Kim은 김이라는 이름으로라는 뜻이에요. What time is는 시간을 물어요.",
      "exchanges": [
        {
          "id": "m13-0",
          "prompt": "Welcome. Do you have a reservation?",
          "promptKo": "어서 오세요. 예약하셨나요?",
          "answer": "I have a reservation under Kim.",
          "answerKo": "김이라는 이름으로 예약했어요."
        },
        {
          "id": "m13-1",
          "prompt": "May I see your passport?",
          "promptKo": "여권을 볼 수 있을까요?",
          "answer": "Here you are.",
          "answerKo": "여기 있어요."
        },
        {
          "id": "m13-2",
          "prompt": "How many nights are you staying?",
          "promptKo": "몇 박 머무르세요?",
          "answer": "I'm staying for three nights.",
          "answerKo": "3박 머물 거예요."
        },
        {
          "id": "m13-3",
          "prompt": "Here is your room key.",
          "promptKo": "여기 객실 열쇠가 있어요.",
          "answer": "What time is breakfast?",
          "answerKo": "아침 식사는 몇 시인가요?"
        },
        {
          "id": "m13-4",
          "prompt": "From seven to ten.",
          "promptKo": "7시부터 10시까지예요.",
          "answer": "Is breakfast included?",
          "answerKo": "아침 식사가 포함되어 있나요?"
        },
        {
          "id": "m13-5",
          "prompt": "Yes, it is. Enjoy your stay.",
          "promptKo": "네, 포함돼 있어요. 편히 머무르세요.",
          "answer": "Thank you. Where is the elevator?",
          "answerKo": "고마워요. 엘리베이터가 어디에 있나요?"
        }
      ],
      "changeExample": "Kim → Lee / three nights → two nights",
      "changeInstruction": "예약 이름과 숙박 기간을 바꿔 말하세요."
    },
    {
      "id": "m14",
      "title": "호텔에서 필요한 것 요청",
      "category": "여행",
      "goal": "객실 문제와 필요한 물건을 정중하게 말해요.",
      "tip": "not working은 작동하지 않는다는 뜻이에요. Could I have another는 하나 더 달라는 부탁이에요.",
      "exchanges": [
        {
          "id": "m14-0",
          "prompt": "Is everything okay with your room?",
          "promptKo": "객실은 괜찮으신가요?",
          "answer": "The air conditioner is not working.",
          "answerKo": "에어컨이 작동하지 않아요."
        },
        {
          "id": "m14-1",
          "prompt": "I'm sorry. We'll send someone.",
          "promptKo": "죄송해요. 직원을 보내 드릴게요.",
          "answer": "How soon can someone come?",
          "answerKo": "얼마나 빨리 오실 수 있나요?"
        },
        {
          "id": "m14-2",
          "prompt": "In about ten minutes.",
          "promptKo": "약 10분 뒤에요.",
          "answer": "Thank you. Could I have another towel?",
          "answerKo": "고마워요. 수건 하나 더 받을 수 있을까요?"
        },
        {
          "id": "m14-3",
          "prompt": "Of course. How many do you need?",
          "promptKo": "물론이죠. 몇 장 필요하세요?",
          "answer": "Two towels, please.",
          "answerKo": "수건 두 장 부탁해요."
        },
        {
          "id": "m14-4",
          "prompt": "We'll bring them to your room.",
          "promptKo": "객실로 가져다드릴게요.",
          "answer": "Could you also tell me the Wi-Fi password?",
          "answerKo": "와이파이 비밀번호도 알려 주시겠어요?"
        },
        {
          "id": "m14-5",
          "prompt": "It's on the card by your bed.",
          "promptKo": "침대 옆 카드에 있어요.",
          "answer": "I see it now. Thank you for your help.",
          "answerKo": "이제 보여요. 도와주셔서 고마워요."
        }
      ],
      "changeExample": "two towels → three towels / ten → twenty",
      "changeInstruction": "필요한 수건 수와 기다리는 시간을 바꿔 요청하세요."
    },
    {
      "id": "m15",
      "title": "공항과 입국",
      "category": "여행",
      "goal": "여행 목적과 머무를 곳을 말해요.",
      "tip": "실제 입국에서는 사실대로 답해야 해요. I'm here for는 방문 목적을 말하는 표현이에요.",
      "exchanges": [
        {
          "id": "m15-0",
          "prompt": "What is the purpose of your visit?",
          "promptKo": "방문 목적이 무엇인가요?",
          "answer": "I'm here on vacation.",
          "answerKo": "휴가로 왔어요."
        },
        {
          "id": "m15-1",
          "prompt": "How long will you stay?",
          "promptKo": "얼마나 머물 건가요?",
          "answer": "I'll stay for one week.",
          "answerKo": "일주일 머물 거예요."
        },
        {
          "id": "m15-2",
          "prompt": "Where will you stay?",
          "promptKo": "어디에 머물 건가요?",
          "answer": "I'll stay at the City Hotel.",
          "answerKo": "시티 호텔에 머물 거예요."
        },
        {
          "id": "m15-3",
          "prompt": "Do you have a return ticket?",
          "promptKo": "돌아가는 표가 있나요?",
          "answer": "Yes, here it is.",
          "answerKo": "네, 여기 있어요."
        },
        {
          "id": "m15-4",
          "prompt": "Are you traveling alone?",
          "promptKo": "혼자 여행하시나요?",
          "answer": "No, I'm traveling with my family.",
          "answerKo": "아니요, 가족과 여행해요."
        },
        {
          "id": "m15-5",
          "prompt": "Enjoy your trip.",
          "promptKo": "즐거운 여행 되세요.",
          "answer": "Thank you. Have a nice day.",
          "answerKo": "고마워요. 좋은 하루 보내세요."
        }
      ],
      "changeExample": "one week → two weeks / City Hotel → Park Hotel",
      "changeInstruction": "연습용 방문 기간과 호텔을 바꿔 말하세요. 실제 입국에서는 사실대로 답하세요."
    },
    {
      "id": "m16",
      "title": "친구와 약속 정하기",
      "category": "일상생활",
      "goal": "날짜·시간·장소를 합의해요.",
      "tip": "Are you free는 시간이 있는지 물어요. How about은 제안할 때 써요.",
      "exchanges": [
        {
          "id": "m16-0",
          "prompt": "Are you free on Saturday?",
          "promptKo": "토요일에 시간 있어요?",
          "answer": "Yes, I'm free in the afternoon.",
          "answerKo": "네, 오후에 시간 있어요."
        },
        {
          "id": "m16-1",
          "prompt": "Would you like to get coffee?",
          "promptKo": "커피 마실래요?",
          "answer": "I'd love to.",
          "answerKo": "좋아요."
        },
        {
          "id": "m16-2",
          "prompt": "What time works for you?",
          "promptKo": "몇 시가 좋아요?",
          "answer": "How about two o'clock?",
          "answerKo": "2시는 어때요?"
        },
        {
          "id": "m16-3",
          "prompt": "Two is good. Where should we meet?",
          "promptKo": "2시 좋아요. 어디서 만날까요?",
          "answer": "Let's meet at the station.",
          "answerKo": "역에서 만나요."
        },
        {
          "id": "m16-4",
          "prompt": "Which exit?",
          "promptKo": "어느 출구요?",
          "answer": "Exit three, please.",
          "answerKo": "3번 출구요."
        },
        {
          "id": "m16-5",
          "prompt": "See you there.",
          "promptKo": "거기서 만나요.",
          "answer": "See you on Saturday.",
          "answerKo": "토요일에 봐요."
        }
      ],
      "changeExample": "Saturday → Sunday / two → three",
      "changeInstruction": "날짜와 시간을 바꿔 약속을 잡으세요."
    },
    {
      "id": "m17",
      "title": "직장에서 부탁하기",
      "category": "직장",
      "goal": "도움을 부탁하고 기한을 확인해요.",
      "tip": "Could you는 부탁, Could I는 내가 해도 되는지 물을 때 써요.",
      "exchanges": [
        {
          "id": "m17-0",
          "prompt": "How is your work going?",
          "promptKo": "일은 잘 되고 있나요?",
          "answer": "I need some help with this file.",
          "answerKo": "이 파일 작업에 도움이 필요해요."
        },
        {
          "id": "m17-1",
          "prompt": "What do you need?",
          "promptKo": "무엇이 필요해요?",
          "answer": "Could you show me how to use this?",
          "answerKo": "이것을 쓰는 방법을 보여 주시겠어요?"
        },
        {
          "id": "m17-2",
          "prompt": "Sure. Click here first.",
          "promptKo": "물론이죠. 먼저 여기를 클릭하세요.",
          "answer": "Could you show me one more time?",
          "answerKo": "한 번 더 보여 주시겠어요?"
        },
        {
          "id": "m17-3",
          "prompt": "Of course. When is it due?",
          "promptKo": "물론이죠. 마감이 언제예요?",
          "answer": "It's due tomorrow.",
          "answerKo": "마감은 내일이에요."
        },
        {
          "id": "m17-4",
          "prompt": "Can you finish it by then?",
          "promptKo": "그때까지 끝낼 수 있나요?",
          "answer": "Yes, I'll finish it today.",
          "answerKo": "네, 오늘 끝낼게요."
        },
        {
          "id": "m17-5",
          "prompt": "Let me know if you need anything.",
          "promptKo": "필요한 게 있으면 말해 주세요.",
          "answer": "Thank you for your help.",
          "answerKo": "도와주셔서 고마워요."
        }
      ],
      "changeExample": "tomorrow → Friday / file → report",
      "changeInstruction": "마감과 필요한 도움을 바꿔 말하세요."
    },
    {
      "id": "m18",
      "title": "일정과 회의",
      "category": "직장",
      "goal": "시간을 조정하고 장소를 확인해요.",
      "tip": "Could we는 함께 할 일을 정중하게 제안해요. instead는 대신이라는 뜻이에요.",
      "exchanges": [
        {
          "id": "m18-0",
          "prompt": "Can we meet tomorrow morning?",
          "promptKo": "내일 오전에 만날 수 있나요?",
          "answer": "I'm sorry, I'm busy in the morning.",
          "answerKo": "죄송하지만 오전에는 바빠요."
        },
        {
          "id": "m18-1",
          "prompt": "When are you free?",
          "promptKo": "언제 시간이 있나요?",
          "answer": "I'm free after two.",
          "answerKo": "2시 이후에 시간이 있어요."
        },
        {
          "id": "m18-2",
          "prompt": "How about three?",
          "promptKo": "3시는 어때요?",
          "answer": "Three works for me.",
          "answerKo": "저는 3시 괜찮아요."
        },
        {
          "id": "m18-3",
          "prompt": "Let's meet in the office.",
          "promptKo": "사무실에서 만나요.",
          "answer": "Could we meet online instead?",
          "answerKo": "대신 온라인으로 만날 수 있을까요?"
        },
        {
          "id": "m18-4",
          "prompt": "Sure. I'll send you a link.",
          "promptKo": "그럼요. 링크를 보내 드릴게요.",
          "answer": "How long will the meeting take?",
          "answerKo": "회의는 얼마나 걸릴까요?"
        },
        {
          "id": "m18-5",
          "prompt": "About thirty minutes.",
          "promptKo": "약 30분이요.",
          "answer": "Great. See you tomorrow.",
          "answerKo": "좋아요. 내일 봬요."
        }
      ],
      "changeExample": "three → four / thirty → twenty",
      "changeInstruction": "회의 시작 시간과 소요 시간을 바꿔 말하세요."
    },
    {
      "id": "m19",
      "title": "취미 대화 이어가기",
      "category": "일상생활",
      "goal": "취미·빈도·이유를 이어서 말해요.",
      "tip": "How often은 얼마나 자주인지 물어요. once a week는 일주일에 한 번이에요.",
      "exchanges": [
        {
          "id": "m19-0",
          "prompt": "What do you do in your free time?",
          "promptKo": "여가 시간에 무엇을 해요?",
          "answer": "I like hiking.",
          "answerKo": "저는 등산을 좋아해요."
        },
        {
          "id": "m19-1",
          "prompt": "How often do you go hiking?",
          "promptKo": "얼마나 자주 등산해요?",
          "answer": "I go once a week.",
          "answerKo": "일주일에 한 번 가요."
        },
        {
          "id": "m19-2",
          "prompt": "Do you go alone?",
          "promptKo": "혼자 가요?",
          "answer": "No, I usually go with a friend.",
          "answerKo": "아니요, 보통 친구와 가요."
        },
        {
          "id": "m19-3",
          "prompt": "Where do you usually go?",
          "promptKo": "보통 어디로 가요?",
          "answer": "We go to a mountain near my home.",
          "answerKo": "집 근처 산에 가요."
        },
        {
          "id": "m19-4",
          "prompt": "Why do you like it?",
          "promptKo": "왜 좋아해요?",
          "answer": "It helps me relax.",
          "answerKo": "마음을 편하게 해 줘요."
        },
        {
          "id": "m19-5",
          "prompt": "Can I join you sometime?",
          "promptKo": "언젠가 함께 가도 될까요?",
          "answer": "Of course. Let's go next weekend.",
          "answerKo": "물론이죠. 다음 주말에 가요."
        }
      ],
      "changeExample": "hiking → swimming / once → twice",
      "changeInstruction": "취미와 횟수를 바꿔 말하세요."
    },
    {
      "id": "m20",
      "title": "지난 주말 이야기",
      "category": "일상생활",
      "goal": "지난 일을 순서대로 이야기해요.",
      "tip": "지난 일은 went, watched처럼 과거형으로 말해요. then은 그다음이라는 뜻이에요.",
      "exchanges": [
        {
          "id": "m20-0",
          "prompt": "How was your weekend?",
          "promptKo": "주말은 어땠어요?",
          "answer": "It was great.",
          "answerKo": "아주 좋았어요."
        },
        {
          "id": "m20-1",
          "prompt": "What did you do?",
          "promptKo": "무엇을 했어요?",
          "answer": "I went to the park.",
          "answerKo": "공원에 갔어요."
        },
        {
          "id": "m20-2",
          "prompt": "Who did you go with?",
          "promptKo": "누구와 갔어요?",
          "answer": "I went with my family.",
          "answerKo": "가족과 갔어요."
        },
        {
          "id": "m20-3",
          "prompt": "What did you do there?",
          "promptKo": "거기서 무엇을 했어요?",
          "answer": "We had a picnic and took photos.",
          "answerKo": "소풍을 즐기고 사진을 찍었어요."
        },
        {
          "id": "m20-4",
          "prompt": "Did you do anything else?",
          "promptKo": "다른 것도 했어요?",
          "answer": "Then we had dinner at a restaurant.",
          "answerKo": "그다음 식당에서 저녁을 먹었어요."
        },
        {
          "id": "m20-5",
          "prompt": "Would you go there again?",
          "promptKo": "거기에 또 가고 싶어요?",
          "answer": "Yes, I'd like to go again.",
          "answerKo": "네, 또 가고 싶어요."
        }
      ],
      "changeExample": "park → museum / family → a friend",
      "changeInstruction": "장소와 함께 간 사람을 바꿔 말하세요."
    },
    {
      "id": "m21",
      "title": "식당에서 문제 해결",
      "category": "식당",
      "goal": "잘못된 주문을 설명하고 바꿔 달라고 해요.",
      "tip": "I ordered A, but this is B는 주문과 다른 음식이 나왔을 때 써요.",
      "exchanges": [
        {
          "id": "m21-0",
          "prompt": "Is everything okay?",
          "promptKo": "괜찮으신가요?",
          "answer": "I ordered soup, but this is a salad.",
          "answerKo": "수프를 주문했는데 이것은 샐러드예요."
        },
        {
          "id": "m21-1",
          "prompt": "I'm sorry. Let me check.",
          "promptKo": "죄송해요. 확인할게요.",
          "answer": "Could you bring the soup, please?",
          "answerKo": "수프를 가져다주시겠어요?"
        },
        {
          "id": "m21-2",
          "prompt": "Yes. It will take ten minutes.",
          "promptKo": "네. 10분 걸릴 거예요.",
          "answer": "That's okay. I can wait.",
          "answerKo": "괜찮아요. 기다릴 수 있어요."
        },
        {
          "id": "m21-3",
          "prompt": "Here is your soup.",
          "promptKo": "여기 수프가 있어요.",
          "answer": "Thank you. Could I have a spoon?",
          "answerKo": "고마워요. 숟가락을 받을 수 있을까요?"
        },
        {
          "id": "m21-4",
          "prompt": "Of course. Anything else?",
          "promptKo": "물론이죠. 다른 것도 필요하세요?",
          "answer": "Could you check the bill, please?",
          "answerKo": "계산서를 확인해 주시겠어요?"
        },
        {
          "id": "m21-5",
          "prompt": "I removed the salad from the bill.",
          "promptKo": "계산서에서 샐러드를 뺐어요.",
          "answer": "Thank you for fixing it.",
          "answerKo": "바로잡아 주셔서 고마워요."
        }
      ],
      "changeExample": "soup → pasta / salad → pizza",
      "changeInstruction": "주문한 것과 잘못 나온 것을 바꿔 설명하세요."
    },
    {
      "id": "m22",
      "title": "약국에서 증상 설명",
      "category": "여행",
      "goal": "아픈 곳과 기간을 설명하고 전문가에게 물어요.",
      "tip": "I have a headache는 두통이 있다는 뜻이에요. 실제 약 선택·복용은 약사나 의사의 안내를 따르세요.",
      "exchanges": [
        {
          "id": "m22-0",
          "prompt": "How can I help you?",
          "promptKo": "무엇을 도와드릴까요?",
          "answer": "I have a headache.",
          "answerKo": "머리가 아파요."
        },
        {
          "id": "m22-1",
          "prompt": "How long have you had it?",
          "promptKo": "얼마나 오래 아팠나요?",
          "answer": "Since this morning.",
          "answerKo": "오늘 아침부터요."
        },
        {
          "id": "m22-2",
          "prompt": "Do you have a fever?",
          "promptKo": "열이 있나요?",
          "answer": "No, I don't have a fever.",
          "answerKo": "아니요, 열은 없어요."
        },
        {
          "id": "m22-3",
          "prompt": "Are you taking any medicine?",
          "promptKo": "복용 중인 약이 있나요?",
          "answer": "Yes. Here is the name.",
          "answerKo": "네. 여기 약 이름이 있어요."
        },
        {
          "id": "m22-4",
          "prompt": "Do you have any allergies?",
          "promptKo": "알레르기가 있나요?",
          "answer": "I'm not sure. Could you help me check?",
          "answerKo": "잘 모르겠어요. 확인을 도와주시겠어요?"
        },
        {
          "id": "m22-5",
          "prompt": "Please ask the pharmacist before taking anything.",
          "promptKo": "무엇이든 복용하기 전에 약사에게 물어보세요.",
          "answer": "Could I speak to the pharmacist, please?",
          "answerKo": "약사와 이야기할 수 있을까요?"
        }
      ],
      "changeExample": "headache → stomachache / this morning → yesterday",
      "changeInstruction": "증상과 시작 시간을 바꿔 연습하세요. 실제 약 상담은 전문가에게 하세요."
    },
    {
      "id": "m23",
      "title": "반품과 교환",
      "category": "쇼핑",
      "goal": "반품 이유와 영수증을 말해요.",
      "tip": "I'd like to return this는 반품 요청이에요. exchange는 교환한다는 뜻이에요.",
      "exchanges": [
        {
          "id": "m23-0",
          "prompt": "How can I help you?",
          "promptKo": "무엇을 도와드릴까요?",
          "answer": "I'd like to return this shirt.",
          "answerKo": "이 셔츠를 반품하고 싶어요."
        },
        {
          "id": "m23-1",
          "prompt": "What is wrong with it?",
          "promptKo": "무엇이 문제인가요?",
          "answer": "It's too small.",
          "answerKo": "너무 작아요."
        },
        {
          "id": "m23-2",
          "prompt": "Do you have the receipt?",
          "promptKo": "영수증이 있나요?",
          "answer": "Yes, here it is.",
          "answerKo": "네, 여기 있어요."
        },
        {
          "id": "m23-3",
          "prompt": "Would you like to exchange it?",
          "promptKo": "교환하시겠어요?",
          "answer": "Do you have a larger size?",
          "answerKo": "더 큰 사이즈가 있나요?"
        },
        {
          "id": "m23-4",
          "prompt": "I'm sorry, we don't.",
          "promptKo": "죄송하지만 없어요.",
          "answer": "Then I'd like a refund, please.",
          "answerKo": "그럼 환불 부탁해요."
        },
        {
          "id": "m23-5",
          "prompt": "We can refund your card.",
          "promptKo": "카드로 환불해 드릴 수 있어요.",
          "answer": "How long will it take?",
          "answerKo": "얼마나 걸릴까요?"
        }
      ],
      "changeExample": "shirt → jacket / small → big",
      "changeInstruction": "반품할 물건과 이유를 바꿔 말하세요."
    },
    {
      "id": "m24",
      "title": "물건을 잃어버렸을 때",
      "category": "여행",
      "goal": "잃어버린 물건과 장소를 설명해요.",
      "tip": "I lost는 잃어버렸다는 뜻이에요. I last saw는 마지막으로 본 장소를 설명해요.",
      "exchanges": [
        {
          "id": "m24-0",
          "prompt": "What happened?",
          "promptKo": "무슨 일이 있었나요?",
          "answer": "I lost my bag.",
          "answerKo": "가방을 잃어버렸어요."
        },
        {
          "id": "m24-1",
          "prompt": "What does it look like?",
          "promptKo": "어떻게 생겼나요?",
          "answer": "It's a small black bag.",
          "answerKo": "작은 검은색 가방이에요."
        },
        {
          "id": "m24-2",
          "prompt": "Where did you last see it?",
          "promptKo": "마지막으로 어디에서 봤나요?",
          "answer": "I last saw it on the bus.",
          "answerKo": "버스에서 마지막으로 봤어요."
        },
        {
          "id": "m24-3",
          "prompt": "What was inside?",
          "promptKo": "안에 무엇이 있었나요?",
          "answer": "My wallet and my phone were inside.",
          "answerKo": "지갑과 휴대폰이 들어 있었어요."
        },
        {
          "id": "m24-4",
          "prompt": "Do you remember the bus number?",
          "promptKo": "버스 번호를 기억하나요?",
          "answer": "Yes, it was bus number ten.",
          "answerKo": "네, 10번 버스였어요."
        },
        {
          "id": "m24-5",
          "prompt": "Please leave your contact details.",
          "promptKo": "연락처를 남겨 주세요.",
          "answer": "Can I give you my email address?",
          "answerKo": "이메일 주소를 드려도 될까요?"
        }
      ],
      "changeExample": "black → blue / ten → twenty",
      "changeInstruction": "분실물의 색과 버스 번호를 바꿔 말하세요."
    },
    {
      "id": "m25",
      "title": "전화로 예약하기",
      "category": "일상생활",
      "goal": "전화로 예약하고 다시 확인해요.",
      "tip": "I'd like to book은 예약하고 싶다는 뜻이에요. Let me confirm은 다시 확인하겠다는 뜻이에요.",
      "exchanges": [
        {
          "id": "m25-0",
          "prompt": "Hello. How can I help you?",
          "promptKo": "안녕하세요. 무엇을 도와드릴까요?",
          "answer": "I'd like to book a table.",
          "answerKo": "식사 자리를 예약하고 싶어요."
        },
        {
          "id": "m25-1",
          "prompt": "For which day?",
          "promptKo": "어느 날인가요?",
          "answer": "For this Friday, please.",
          "answerKo": "이번 금요일로 부탁해요."
        },
        {
          "id": "m25-2",
          "prompt": "What time?",
          "promptKo": "몇 시인가요?",
          "answer": "At seven in the evening.",
          "answerKo": "저녁 7시요."
        },
        {
          "id": "m25-3",
          "prompt": "For how many people?",
          "promptKo": "몇 명인가요?",
          "answer": "For four people.",
          "answerKo": "네 명이에요."
        },
        {
          "id": "m25-4",
          "prompt": "May I have your name?",
          "promptKo": "이름을 알려 주시겠어요?",
          "answer": "It's Kim. K-I-M.",
          "answerKo": "김이에요. K-I-M이에요."
        },
        {
          "id": "m25-5",
          "prompt": "Your booking is confirmed.",
          "promptKo": "예약이 확정됐어요.",
          "answer": "Let me confirm: Friday at seven, for four.",
          "answerKo": "확인할게요. 금요일 7시, 네 명이죠."
        }
      ],
      "changeExample": "Friday → Saturday / seven → eight / four → two",
      "changeInstruction": "날짜·시간·인원수를 바꿔 예약하세요."
    },
    {
      "id": "m26",
      "title": "여행 계획 설명하기",
      "category": "여행",
      "goal": "일정·선택 이유·대안을 말해요.",
      "tip": "I'm going to는 계획을 말해요. if는 조건을 붙일 때 써요.",
      "exchanges": [
        {
          "id": "m26-0",
          "prompt": "Where are you going on vacation?",
          "promptKo": "휴가에 어디로 가요?",
          "answer": "I'm going to Japan.",
          "answerKo": "일본에 갈 예정이에요."
        },
        {
          "id": "m26-1",
          "prompt": "How long will you stay?",
          "promptKo": "얼마나 머물 거예요?",
          "answer": "I'll stay for five days.",
          "answerKo": "5일 머물 거예요."
        },
        {
          "id": "m26-2",
          "prompt": "What would you like to do there?",
          "promptKo": "거기서 무엇을 하고 싶어요?",
          "answer": "I'd like to try local food.",
          "answerKo": "현지 음식을 먹어 보고 싶어요."
        },
        {
          "id": "m26-3",
          "prompt": "Why did you choose Japan?",
          "promptKo": "왜 일본을 선택했어요?",
          "answer": "Because it's close to Korea.",
          "answerKo": "한국에서 가깝기 때문이에요."
        },
        {
          "id": "m26-4",
          "prompt": "What if it rains?",
          "promptKo": "비가 오면 어떻게 할 거예요?",
          "answer": "If it rains, I'll visit a museum.",
          "answerKo": "비가 오면 박물관에 갈 거예요."
        },
        {
          "id": "m26-5",
          "prompt": "Do you need any help planning?",
          "promptKo": "계획하는 데 도움이 필요해요?",
          "answer": "Could you recommend a good hotel?",
          "answerKo": "좋은 호텔을 추천해 주시겠어요?"
        }
      ],
      "changeExample": "Japan → Canada / five → seven",
      "changeInstruction": "나라와 기간을 바꿔 여행 계획을 설명하세요."
    },
    {
      "id": "m27",
      "title": "초대와 정중한 거절",
      "category": "일상생활",
      "goal": "초대를 수락하거나 이유와 대안을 말해요.",
      "tip": "I'd love to, but는 그러고 싶지만 어렵다는 부드러운 거절이에요.",
      "exchanges": [
        {
          "id": "m27-0",
          "prompt": "Would you like to have dinner on Friday?",
          "promptKo": "금요일에 저녁 먹을래요?",
          "answer": "I'd love to, but I have plans.",
          "answerKo": "그러고 싶지만 약속이 있어요."
        },
        {
          "id": "m27-1",
          "prompt": "How about Saturday?",
          "promptKo": "토요일은 어때요?",
          "answer": "Saturday works for me.",
          "answerKo": "토요일은 괜찮아요."
        },
        {
          "id": "m27-2",
          "prompt": "Shall we try the new restaurant?",
          "promptKo": "새 식당에 가 볼까요?",
          "answer": "That sounds great.",
          "answerKo": "좋겠어요."
        },
        {
          "id": "m27-3",
          "prompt": "Can you eat spicy food?",
          "promptKo": "매운 음식을 먹을 수 있어요?",
          "answer": "A little, but not too spicy.",
          "answerKo": "조금은요, 하지만 너무 매운 건 못 먹어요."
        },
        {
          "id": "m27-4",
          "prompt": "I'll book a table for six.",
          "promptKo": "6시에 자리를 예약할게요.",
          "answer": "Could we make it six thirty?",
          "answerKo": "6시 반으로 할 수 있을까요?"
        },
        {
          "id": "m27-5",
          "prompt": "Of course. See you then.",
          "promptKo": "물론이죠. 그때 봐요.",
          "answer": "Thanks for inviting me.",
          "answerKo": "초대해 줘서 고마워요."
        }
      ],
      "changeExample": "Saturday → Sunday / six thirty → seven",
      "changeInstruction": "가능한 날짜와 약속 시간을 바꿔 말하세요."
    },
    {
      "id": "m28",
      "title": "선택과 의견 이야기",
      "category": "직장",
      "goal": "두 선택지를 비교하고 의견을 말해요.",
      "tip": "I think는 내 생각을 말해요. A is cheaper than B는 A가 B보다 저렴하다는 뜻이에요.",
      "exchanges": [
        {
          "id": "m28-0",
          "prompt": "Should we meet online or in person?",
          "promptKo": "온라인으로 만날까요, 직접 만날까요?",
          "answer": "I think we should meet online.",
          "answerKo": "온라인으로 만나면 좋겠어요."
        },
        {
          "id": "m28-1",
          "prompt": "Why do you prefer that?",
          "promptKo": "왜 그쪽이 더 좋아요?",
          "answer": "Because it saves time.",
          "answerKo": "시간을 아낄 수 있기 때문이에요."
        },
        {
          "id": "m28-2",
          "prompt": "What about the cost?",
          "promptKo": "비용은 어떤가요?",
          "answer": "It's cheaper than traveling.",
          "answerKo": "이동하는 것보다 저렴해요."
        },
        {
          "id": "m28-3",
          "prompt": "Do you think everyone can join?",
          "promptKo": "모두 참석할 수 있을까요?",
          "answer": "I'm not sure. Let's ask them.",
          "answerKo": "잘 모르겠어요. 물어봐요."
        },
        {
          "id": "m28-4",
          "prompt": "What if someone can't join?",
          "promptKo": "참석할 수 없는 사람이 있으면요?",
          "answer": "We can send them the notes.",
          "answerKo": "그분들에게 메모를 보낼 수 있어요."
        },
        {
          "id": "m28-5",
          "prompt": "Let's do that.",
          "promptKo": "그렇게 해요.",
          "answer": "Great. I'll send the invitation.",
          "answerKo": "좋아요. 제가 초대장을 보낼게요."
        }
      ],
      "changeExample": "online → in person / time → money",
      "changeInstruction": "만남 방식과 선택 이유를 바꿔 제안하세요."
    },
    {
      "id": "m29",
      "title": "여행 중 일정 변경",
      "category": "여행",
      "goal": "문제를 설명하고 대안·시간·비용을 확인해요.",
      "tip": "I'd like to change는 바꾸고 싶다는 뜻이에요. Is there는 가능한 대안이 있는지 물어요.",
      "exchanges": [
        {
          "id": "m29-0",
          "prompt": "How can I help you today?",
          "promptKo": "오늘 무엇을 도와드릴까요?",
          "answer": "I'd like to change my ticket.",
          "answerKo": "표를 바꾸고 싶어요."
        },
        {
          "id": "m29-1",
          "prompt": "What seems to be the problem?",
          "promptKo": "무슨 문제인가요?",
          "answer": "I missed my train.",
          "answerKo": "기차를 놓쳤어요."
        },
        {
          "id": "m29-2",
          "prompt": "When would you like to travel?",
          "promptKo": "언제 출발하고 싶으세요?",
          "answer": "Is there another train today?",
          "answerKo": "오늘 다른 기차가 있나요?"
        },
        {
          "id": "m29-3",
          "prompt": "There is one at three.",
          "promptKo": "3시에 하나 있어요.",
          "answer": "How much does it cost to change?",
          "answerKo": "변경 비용은 얼마인가요?"
        },
        {
          "id": "m29-4",
          "prompt": "It costs ten dollars.",
          "promptKo": "10달러예요.",
          "answer": "That's fine. Can I pay by card?",
          "answerKo": "괜찮아요. 카드로 결제할 수 있나요?"
        },
        {
          "id": "m29-5",
          "prompt": "Yes. Here is your new ticket.",
          "promptKo": "네. 여기 새 표가 있어요.",
          "answer": "Thank you. Which platform should I go to?",
          "answerKo": "고마워요. 어느 승강장으로 가야 하나요?"
        }
      ],
      "changeExample": "train → bus / three → four",
      "changeInstruction": "교통수단과 시간을 바꿔 표 변경을 요청하세요."
    },
    {
      "id": "m30",
      "title": "종합 대화와 다음 목표",
      "category": "일상생활",
      "goal": "자기소개부터 경험·계획·질문까지 이어 말해요.",
      "tip": "짧은 문장 두 개를 연결해 보세요. and는 더하기, but는 반대 내용, because는 이유를 붙여요.",
      "exchanges": [
        {
          "id": "m30-0",
          "prompt": "Tell me a little about yourself.",
          "promptKo": "자기소개를 조금 해 주세요.",
          "answer": "I'm from Korea, and I live in Seoul.",
          "answerKo": "한국 출신이고 서울에 살아요."
        },
        {
          "id": "m30-1",
          "prompt": "What do you enjoy doing?",
          "promptKo": "무엇을 하는 것을 즐겨요?",
          "answer": "I like walking because it helps me relax.",
          "answerKo": "마음이 편해져서 걷기를 좋아해요."
        },
        {
          "id": "m30-2",
          "prompt": "What did you do last weekend?",
          "promptKo": "지난 주말에 무엇을 했어요?",
          "answer": "I met a friend, and we had lunch.",
          "answerKo": "친구를 만나 함께 점심을 먹었어요."
        },
        {
          "id": "m30-3",
          "prompt": "What are your plans for next month?",
          "promptKo": "다음 달 계획은 무엇인가요?",
          "answer": "I'm going to travel and practice English.",
          "answerKo": "여행하며 영어를 연습할 예정이에요."
        },
        {
          "id": "m30-4",
          "prompt": "What do you do when you don't understand?",
          "promptKo": "이해하지 못할 때 어떻게 해요?",
          "answer": "I ask people to speak more slowly.",
          "answerKo": "사람들에게 더 천천히 말해 달라고 해요."
        },
        {
          "id": "m30-5",
          "prompt": "Do you have a question for me?",
          "promptKo": "저에게 질문이 있나요?",
          "answer": "What do you like to do in your free time?",
          "answerKo": "여가 시간에 무엇을 하는 것을 좋아하세요?"
        }
      ],
      "changeExample": "Seoul → Busan / walking → swimming",
      "changeInstruction": "본인의 도시·취미로 바꾸고 문장을 하나 더 덧붙이세요."
    }
  ],
  "routines": [
    {
      "title": "처음 듣고 따라 말하기",
      "goal": "이 상황에서 쓰는 표현 6개를 소리와 뜻으로 익혀요.",
      "minutes": 35,
      "tasks": [
        "질문과 예문을 2번씩 들었어요",
        "예문을 보며 소리 내어 5번 따라 말했어요",
        "한국어 뜻을 읽고 영어로 3번 말해 봤어요"
      ],
      "hint": true
    },
    {
      "title": "내 상황으로 바꿔 말하기",
      "goal": "같은 표현의 이름·시간·물건을 바꿔 내 말로 만들어요.",
      "minutes": 35,
      "tasks": [
        "질문을 듣고 뜻을 확인했어요",
        "바꿔 말하기 안내를 보고 내 답을 3번 말했어요",
        "원래 예문과 내 답을 번갈아 3번 말했어요"
      ],
      "hint": true
    },
    {
      "title": "듣고 바로 답하기",
      "goal": "질문 뜻을 구별하고 예문 없이 짧게 답해요.",
      "minutes": 35,
      "tasks": [
        "질문만 먼저 들었어요",
        "예문을 가리고 내 답변을 소리 내어 3번 말했어요",
        "막힌 표현은 확인하고 다시 3번 말했어요"
      ],
      "hint": false
    },
    {
      "title": "상황 역할 대화",
      "goal": "상대방의 말을 듣고 내 차례에 답하며 대화를 이어가요.",
      "minutes": 35,
      "tasks": [
        "상대방의 말을 먼저 들었어요",
        "내 차례의 답변을 소리 내어 말했어요",
        "질문과 답을 연결해 한 번 더 연습했어요"
      ],
      "hint": false
    },
    {
      "title": "지난 상황과 섞어서 복습",
      "goal": "이번 상황과 이전 상황을 섞어 답하는 연습을 해요.",
      "minutes": 35,
      "tasks": [
        "질문을 듣고 어떤 상황인지 생각했어요",
        "예문을 가리고 내 답을 3번 말했어요",
        "어려운 표현을 확인하고 다시 말했어요"
      ],
      "hint": false
    },
    {
      "title": "도움 없이 말하기 점검",
      "goal": "예문을 먼저 보지 않고 필요한 말을 전달해 봐요.",
      "minutes": 35,
      "tasks": [
        "질문을 듣고 소리 내어 답했어요",
        "예문과 비교해 필요한 뜻을 전달했는지 확인했어요",
        "혼자 말했는지 아래에 솔직하게 표시했어요"
      ],
      "hint": false
    }
  ],
  "days": [
    {
      "day": 1,
      "module": 0,
      "routine": 0,
      "title": "첫 인사와 자기소개 · 처음 듣고 따라 말하기",
      "entries": [
        {
          "module": 0,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 0,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 0,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 0,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 0,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 0,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 2,
      "module": 0,
      "routine": 1,
      "title": "첫 인사와 자기소개 · 내 상황으로 바꿔 말하기",
      "entries": [
        {
          "module": 0,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 0,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 0,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 0,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 0,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 0,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 3,
      "module": 0,
      "routine": 2,
      "title": "첫 인사와 자기소개 · 듣고 바로 답하기",
      "entries": [
        {
          "module": 0,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 0,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 0,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 0,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 0,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 0,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 4,
      "module": 0,
      "routine": 3,
      "title": "첫 인사와 자기소개 · 상황 역할 대화",
      "entries": [
        {
          "module": 0,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 0,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 0,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 0,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 0,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 0,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 5,
      "module": 0,
      "routine": 4,
      "title": "첫 인사와 자기소개 · 지난 상황과 섞어서 복습",
      "entries": [
        {
          "module": 0,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 0,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 0,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 0,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 0,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 0,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 6,
      "module": 0,
      "routine": 5,
      "title": "첫 인사와 자기소개 · 도움 없이 말하기 점검",
      "entries": [
        {
          "module": 0,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 0,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 0,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 0,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 0,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 0,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 7,
      "module": 1,
      "routine": 0,
      "title": "하루 일과 · 처음 듣고 따라 말하기",
      "entries": [
        {
          "module": 1,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 1,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 1,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 1,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 1,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 1,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 8,
      "module": 1,
      "routine": 1,
      "title": "하루 일과 · 내 상황으로 바꿔 말하기",
      "entries": [
        {
          "module": 1,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 1,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 1,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 1,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 1,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 1,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 9,
      "module": 1,
      "routine": 2,
      "title": "하루 일과 · 듣고 바로 답하기",
      "entries": [
        {
          "module": 1,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 1,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 1,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 1,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 1,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 1,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 10,
      "module": 1,
      "routine": 3,
      "title": "하루 일과 · 상황 역할 대화",
      "entries": [
        {
          "module": 1,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 1,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 1,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 1,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 1,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 1,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 11,
      "module": 1,
      "routine": 4,
      "title": "하루 일과 · 지난 상황과 섞어서 복습",
      "entries": [
        {
          "module": 1,
          "index": 0,
          "role": "이번 상황 복습"
        },
        {
          "module": 1,
          "index": 2,
          "role": "이번 상황 복습"
        },
        {
          "module": 1,
          "index": 4,
          "role": "이번 상황 복습"
        },
        {
          "module": 0,
          "index": 1,
          "role": "이전 상황 복습"
        },
        {
          "module": 0,
          "index": 3,
          "role": "이전 상황 복습"
        },
        {
          "module": 0,
          "index": 5,
          "role": "이전 상황 복습"
        }
      ],
      "monthly": false
    },
    {
      "day": 12,
      "module": 1,
      "routine": 5,
      "title": "하루 일과 · 도움 없이 말하기 점검",
      "entries": [
        {
          "module": 1,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 1,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 1,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 1,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 1,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 1,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 13,
      "module": 2,
      "routine": 0,
      "title": "좋아하는 것 말하기 · 처음 듣고 따라 말하기",
      "entries": [
        {
          "module": 2,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 2,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 2,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 2,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 2,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 2,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 14,
      "module": 2,
      "routine": 1,
      "title": "좋아하는 것 말하기 · 내 상황으로 바꿔 말하기",
      "entries": [
        {
          "module": 2,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 2,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 2,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 2,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 2,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 2,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 15,
      "module": 2,
      "routine": 2,
      "title": "좋아하는 것 말하기 · 듣고 바로 답하기",
      "entries": [
        {
          "module": 2,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 2,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 2,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 2,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 2,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 2,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 16,
      "module": 2,
      "routine": 3,
      "title": "좋아하는 것 말하기 · 상황 역할 대화",
      "entries": [
        {
          "module": 2,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 2,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 2,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 2,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 2,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 2,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 17,
      "module": 2,
      "routine": 4,
      "title": "좋아하는 것 말하기 · 지난 상황과 섞어서 복습",
      "entries": [
        {
          "module": 2,
          "index": 0,
          "role": "이번 상황 복습"
        },
        {
          "module": 2,
          "index": 2,
          "role": "이번 상황 복습"
        },
        {
          "module": 2,
          "index": 4,
          "role": "이번 상황 복습"
        },
        {
          "module": 1,
          "index": 1,
          "role": "이전 상황 복습"
        },
        {
          "module": 1,
          "index": 3,
          "role": "이전 상황 복습"
        },
        {
          "module": 1,
          "index": 5,
          "role": "이전 상황 복습"
        }
      ],
      "monthly": false
    },
    {
      "day": 18,
      "module": 2,
      "routine": 5,
      "title": "좋아하는 것 말하기 · 도움 없이 말하기 점검",
      "entries": [
        {
          "module": 2,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 2,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 2,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 2,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 2,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 2,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 19,
      "module": 3,
      "routine": 0,
      "title": "가족과 집 이야기 · 처음 듣고 따라 말하기",
      "entries": [
        {
          "module": 3,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 3,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 3,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 3,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 3,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 3,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 20,
      "module": 3,
      "routine": 1,
      "title": "가족과 집 이야기 · 내 상황으로 바꿔 말하기",
      "entries": [
        {
          "module": 3,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 3,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 3,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 3,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 3,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 3,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 21,
      "module": 3,
      "routine": 2,
      "title": "가족과 집 이야기 · 듣고 바로 답하기",
      "entries": [
        {
          "module": 3,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 3,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 3,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 3,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 3,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 3,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 22,
      "module": 3,
      "routine": 3,
      "title": "가족과 집 이야기 · 상황 역할 대화",
      "entries": [
        {
          "module": 3,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 3,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 3,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 3,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 3,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 3,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 23,
      "module": 3,
      "routine": 4,
      "title": "가족과 집 이야기 · 지난 상황과 섞어서 복습",
      "entries": [
        {
          "module": 3,
          "index": 0,
          "role": "이번 상황 복습"
        },
        {
          "module": 3,
          "index": 2,
          "role": "이번 상황 복습"
        },
        {
          "module": 3,
          "index": 4,
          "role": "이번 상황 복습"
        },
        {
          "module": 2,
          "index": 1,
          "role": "이전 상황 복습"
        },
        {
          "module": 2,
          "index": 3,
          "role": "이전 상황 복습"
        },
        {
          "module": 2,
          "index": 5,
          "role": "이전 상황 복습"
        }
      ],
      "monthly": false
    },
    {
      "day": 24,
      "module": 3,
      "routine": 5,
      "title": "가족과 집 이야기 · 도움 없이 말하기 점검",
      "entries": [
        {
          "module": 3,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 3,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 3,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 3,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 3,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 3,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 25,
      "module": 4,
      "routine": 0,
      "title": "못 알아들었을 때 · 처음 듣고 따라 말하기",
      "entries": [
        {
          "module": 4,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 4,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 4,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 4,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 4,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 4,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 26,
      "module": 4,
      "routine": 1,
      "title": "못 알아들었을 때 · 내 상황으로 바꿔 말하기",
      "entries": [
        {
          "module": 4,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 4,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 4,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 4,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 4,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 4,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 27,
      "module": 4,
      "routine": 2,
      "title": "못 알아들었을 때 · 듣고 바로 답하기",
      "entries": [
        {
          "module": 4,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 4,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 4,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 4,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 4,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 4,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 28,
      "module": 4,
      "routine": 3,
      "title": "못 알아들었을 때 · 상황 역할 대화",
      "entries": [
        {
          "module": 4,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 4,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 4,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 4,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 4,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 4,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 29,
      "module": 4,
      "routine": 4,
      "title": "못 알아들었을 때 · 지난 상황과 섞어서 복습",
      "entries": [
        {
          "module": 4,
          "index": 0,
          "role": "이번 상황 복습"
        },
        {
          "module": 4,
          "index": 2,
          "role": "이번 상황 복습"
        },
        {
          "module": 4,
          "index": 4,
          "role": "이번 상황 복습"
        },
        {
          "module": 3,
          "index": 1,
          "role": "이전 상황 복습"
        },
        {
          "module": 3,
          "index": 3,
          "role": "이전 상황 복습"
        },
        {
          "module": 3,
          "index": 5,
          "role": "이전 상황 복습"
        }
      ],
      "monthly": false
    },
    {
      "day": 30,
      "module": 4,
      "routine": 5,
      "title": "못 알아들었을 때 · 도움 없이 말하기 점검",
      "entries": [
        {
          "module": 4,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 4,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 4,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 4,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 4,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 4,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": true
    },
    {
      "day": 31,
      "module": 5,
      "routine": 0,
      "title": "카페에서 주문하기 · 처음 듣고 따라 말하기",
      "entries": [
        {
          "module": 5,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 5,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 5,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 5,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 5,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 5,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 32,
      "module": 5,
      "routine": 1,
      "title": "카페에서 주문하기 · 내 상황으로 바꿔 말하기",
      "entries": [
        {
          "module": 5,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 5,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 5,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 5,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 5,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 5,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 33,
      "module": 5,
      "routine": 2,
      "title": "카페에서 주문하기 · 듣고 바로 답하기",
      "entries": [
        {
          "module": 5,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 5,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 5,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 5,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 5,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 5,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 34,
      "module": 5,
      "routine": 3,
      "title": "카페에서 주문하기 · 상황 역할 대화",
      "entries": [
        {
          "module": 5,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 5,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 5,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 5,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 5,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 5,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 35,
      "module": 5,
      "routine": 4,
      "title": "카페에서 주문하기 · 지난 상황과 섞어서 복습",
      "entries": [
        {
          "module": 5,
          "index": 0,
          "role": "이번 상황 복습"
        },
        {
          "module": 5,
          "index": 2,
          "role": "이번 상황 복습"
        },
        {
          "module": 5,
          "index": 4,
          "role": "이번 상황 복습"
        },
        {
          "module": 4,
          "index": 1,
          "role": "이전 상황 복습"
        },
        {
          "module": 4,
          "index": 3,
          "role": "이전 상황 복습"
        },
        {
          "module": 4,
          "index": 5,
          "role": "이전 상황 복습"
        }
      ],
      "monthly": false
    },
    {
      "day": 36,
      "module": 5,
      "routine": 5,
      "title": "카페에서 주문하기 · 도움 없이 말하기 점검",
      "entries": [
        {
          "module": 5,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 5,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 5,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 5,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 5,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 5,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 37,
      "module": 6,
      "routine": 0,
      "title": "식당에서 식사하기 · 처음 듣고 따라 말하기",
      "entries": [
        {
          "module": 6,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 6,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 6,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 6,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 6,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 6,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 38,
      "module": 6,
      "routine": 1,
      "title": "식당에서 식사하기 · 내 상황으로 바꿔 말하기",
      "entries": [
        {
          "module": 6,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 6,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 6,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 6,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 6,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 6,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 39,
      "module": 6,
      "routine": 2,
      "title": "식당에서 식사하기 · 듣고 바로 답하기",
      "entries": [
        {
          "module": 6,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 6,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 6,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 6,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 6,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 6,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 40,
      "module": 6,
      "routine": 3,
      "title": "식당에서 식사하기 · 상황 역할 대화",
      "entries": [
        {
          "module": 6,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 6,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 6,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 6,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 6,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 6,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 41,
      "module": 6,
      "routine": 4,
      "title": "식당에서 식사하기 · 지난 상황과 섞어서 복습",
      "entries": [
        {
          "module": 6,
          "index": 0,
          "role": "이번 상황 복습"
        },
        {
          "module": 6,
          "index": 2,
          "role": "이번 상황 복습"
        },
        {
          "module": 6,
          "index": 4,
          "role": "이번 상황 복습"
        },
        {
          "module": 5,
          "index": 1,
          "role": "이전 상황 복습"
        },
        {
          "module": 5,
          "index": 3,
          "role": "이전 상황 복습"
        },
        {
          "module": 5,
          "index": 5,
          "role": "이전 상황 복습"
        }
      ],
      "monthly": false
    },
    {
      "day": 42,
      "module": 6,
      "routine": 5,
      "title": "식당에서 식사하기 · 도움 없이 말하기 점검",
      "entries": [
        {
          "module": 6,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 6,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 6,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 6,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 6,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 6,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 43,
      "module": 7,
      "routine": 0,
      "title": "메뉴와 식재료 묻기 · 처음 듣고 따라 말하기",
      "entries": [
        {
          "module": 7,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 7,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 7,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 7,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 7,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 7,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 44,
      "module": 7,
      "routine": 1,
      "title": "메뉴와 식재료 묻기 · 내 상황으로 바꿔 말하기",
      "entries": [
        {
          "module": 7,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 7,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 7,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 7,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 7,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 7,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 45,
      "module": 7,
      "routine": 2,
      "title": "메뉴와 식재료 묻기 · 듣고 바로 답하기",
      "entries": [
        {
          "module": 7,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 7,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 7,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 7,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 7,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 7,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 46,
      "module": 7,
      "routine": 3,
      "title": "메뉴와 식재료 묻기 · 상황 역할 대화",
      "entries": [
        {
          "module": 7,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 7,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 7,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 7,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 7,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 7,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 47,
      "module": 7,
      "routine": 4,
      "title": "메뉴와 식재료 묻기 · 지난 상황과 섞어서 복습",
      "entries": [
        {
          "module": 7,
          "index": 0,
          "role": "이번 상황 복습"
        },
        {
          "module": 7,
          "index": 2,
          "role": "이번 상황 복습"
        },
        {
          "module": 7,
          "index": 4,
          "role": "이번 상황 복습"
        },
        {
          "module": 6,
          "index": 1,
          "role": "이전 상황 복습"
        },
        {
          "module": 6,
          "index": 3,
          "role": "이전 상황 복습"
        },
        {
          "module": 6,
          "index": 5,
          "role": "이전 상황 복습"
        }
      ],
      "monthly": false
    },
    {
      "day": 48,
      "module": 7,
      "routine": 5,
      "title": "메뉴와 식재료 묻기 · 도움 없이 말하기 점검",
      "entries": [
        {
          "module": 7,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 7,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 7,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 7,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 7,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 7,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 49,
      "module": 8,
      "routine": 0,
      "title": "옷 사기 · 처음 듣고 따라 말하기",
      "entries": [
        {
          "module": 8,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 8,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 8,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 8,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 8,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 8,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 50,
      "module": 8,
      "routine": 1,
      "title": "옷 사기 · 내 상황으로 바꿔 말하기",
      "entries": [
        {
          "module": 8,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 8,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 8,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 8,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 8,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 8,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 51,
      "module": 8,
      "routine": 2,
      "title": "옷 사기 · 듣고 바로 답하기",
      "entries": [
        {
          "module": 8,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 8,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 8,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 8,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 8,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 8,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 52,
      "module": 8,
      "routine": 3,
      "title": "옷 사기 · 상황 역할 대화",
      "entries": [
        {
          "module": 8,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 8,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 8,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 8,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 8,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 8,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 53,
      "module": 8,
      "routine": 4,
      "title": "옷 사기 · 지난 상황과 섞어서 복습",
      "entries": [
        {
          "module": 8,
          "index": 0,
          "role": "이번 상황 복습"
        },
        {
          "module": 8,
          "index": 2,
          "role": "이번 상황 복습"
        },
        {
          "module": 8,
          "index": 4,
          "role": "이번 상황 복습"
        },
        {
          "module": 7,
          "index": 1,
          "role": "이전 상황 복습"
        },
        {
          "module": 7,
          "index": 3,
          "role": "이전 상황 복습"
        },
        {
          "module": 7,
          "index": 5,
          "role": "이전 상황 복습"
        }
      ],
      "monthly": false
    },
    {
      "day": 54,
      "module": 8,
      "routine": 5,
      "title": "옷 사기 · 도움 없이 말하기 점검",
      "entries": [
        {
          "module": 8,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 8,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 8,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 8,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 8,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 8,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 55,
      "module": 9,
      "routine": 0,
      "title": "마트에서 장보기 · 처음 듣고 따라 말하기",
      "entries": [
        {
          "module": 9,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 9,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 9,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 9,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 9,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 9,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 56,
      "module": 9,
      "routine": 1,
      "title": "마트에서 장보기 · 내 상황으로 바꿔 말하기",
      "entries": [
        {
          "module": 9,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 9,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 9,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 9,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 9,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 9,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 57,
      "module": 9,
      "routine": 2,
      "title": "마트에서 장보기 · 듣고 바로 답하기",
      "entries": [
        {
          "module": 9,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 9,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 9,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 9,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 9,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 9,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 58,
      "module": 9,
      "routine": 3,
      "title": "마트에서 장보기 · 상황 역할 대화",
      "entries": [
        {
          "module": 9,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 9,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 9,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 9,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 9,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 9,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 59,
      "module": 9,
      "routine": 4,
      "title": "마트에서 장보기 · 지난 상황과 섞어서 복습",
      "entries": [
        {
          "module": 9,
          "index": 0,
          "role": "이번 상황 복습"
        },
        {
          "module": 9,
          "index": 2,
          "role": "이번 상황 복습"
        },
        {
          "module": 9,
          "index": 4,
          "role": "이번 상황 복습"
        },
        {
          "module": 8,
          "index": 1,
          "role": "이전 상황 복습"
        },
        {
          "module": 8,
          "index": 3,
          "role": "이전 상황 복습"
        },
        {
          "module": 8,
          "index": 5,
          "role": "이전 상황 복습"
        }
      ],
      "monthly": false
    },
    {
      "day": 60,
      "module": 9,
      "routine": 5,
      "title": "마트에서 장보기 · 도움 없이 말하기 점검",
      "entries": [
        {
          "module": 9,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 9,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 9,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 9,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 9,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 9,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": true
    },
    {
      "day": 61,
      "module": 10,
      "routine": 0,
      "title": "길 찾기 · 처음 듣고 따라 말하기",
      "entries": [
        {
          "module": 10,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 10,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 10,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 10,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 10,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 10,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 62,
      "module": 10,
      "routine": 1,
      "title": "길 찾기 · 내 상황으로 바꿔 말하기",
      "entries": [
        {
          "module": 10,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 10,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 10,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 10,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 10,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 10,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 63,
      "module": 10,
      "routine": 2,
      "title": "길 찾기 · 듣고 바로 답하기",
      "entries": [
        {
          "module": 10,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 10,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 10,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 10,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 10,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 10,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 64,
      "module": 10,
      "routine": 3,
      "title": "길 찾기 · 상황 역할 대화",
      "entries": [
        {
          "module": 10,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 10,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 10,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 10,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 10,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 10,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 65,
      "module": 10,
      "routine": 4,
      "title": "길 찾기 · 지난 상황과 섞어서 복습",
      "entries": [
        {
          "module": 10,
          "index": 0,
          "role": "이번 상황 복습"
        },
        {
          "module": 10,
          "index": 2,
          "role": "이번 상황 복습"
        },
        {
          "module": 10,
          "index": 4,
          "role": "이번 상황 복습"
        },
        {
          "module": 9,
          "index": 1,
          "role": "이전 상황 복습"
        },
        {
          "module": 9,
          "index": 3,
          "role": "이전 상황 복습"
        },
        {
          "module": 9,
          "index": 5,
          "role": "이전 상황 복습"
        }
      ],
      "monthly": false
    },
    {
      "day": 66,
      "module": 10,
      "routine": 5,
      "title": "길 찾기 · 도움 없이 말하기 점검",
      "entries": [
        {
          "module": 10,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 10,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 10,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 10,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 10,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 10,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 67,
      "module": 11,
      "routine": 0,
      "title": "버스와 기차 타기 · 처음 듣고 따라 말하기",
      "entries": [
        {
          "module": 11,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 11,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 11,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 11,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 11,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 11,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 68,
      "module": 11,
      "routine": 1,
      "title": "버스와 기차 타기 · 내 상황으로 바꿔 말하기",
      "entries": [
        {
          "module": 11,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 11,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 11,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 11,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 11,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 11,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 69,
      "module": 11,
      "routine": 2,
      "title": "버스와 기차 타기 · 듣고 바로 답하기",
      "entries": [
        {
          "module": 11,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 11,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 11,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 11,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 11,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 11,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 70,
      "module": 11,
      "routine": 3,
      "title": "버스와 기차 타기 · 상황 역할 대화",
      "entries": [
        {
          "module": 11,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 11,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 11,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 11,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 11,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 11,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 71,
      "module": 11,
      "routine": 4,
      "title": "버스와 기차 타기 · 지난 상황과 섞어서 복습",
      "entries": [
        {
          "module": 11,
          "index": 0,
          "role": "이번 상황 복습"
        },
        {
          "module": 11,
          "index": 2,
          "role": "이번 상황 복습"
        },
        {
          "module": 11,
          "index": 4,
          "role": "이번 상황 복습"
        },
        {
          "module": 10,
          "index": 1,
          "role": "이전 상황 복습"
        },
        {
          "module": 10,
          "index": 3,
          "role": "이전 상황 복습"
        },
        {
          "module": 10,
          "index": 5,
          "role": "이전 상황 복습"
        }
      ],
      "monthly": false
    },
    {
      "day": 72,
      "module": 11,
      "routine": 5,
      "title": "버스와 기차 타기 · 도움 없이 말하기 점검",
      "entries": [
        {
          "module": 11,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 11,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 11,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 11,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 11,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 11,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 73,
      "module": 12,
      "routine": 0,
      "title": "호텔 체크인 · 처음 듣고 따라 말하기",
      "entries": [
        {
          "module": 12,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 12,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 12,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 12,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 12,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 12,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 74,
      "module": 12,
      "routine": 1,
      "title": "호텔 체크인 · 내 상황으로 바꿔 말하기",
      "entries": [
        {
          "module": 12,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 12,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 12,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 12,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 12,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 12,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 75,
      "module": 12,
      "routine": 2,
      "title": "호텔 체크인 · 듣고 바로 답하기",
      "entries": [
        {
          "module": 12,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 12,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 12,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 12,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 12,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 12,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 76,
      "module": 12,
      "routine": 3,
      "title": "호텔 체크인 · 상황 역할 대화",
      "entries": [
        {
          "module": 12,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 12,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 12,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 12,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 12,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 12,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 77,
      "module": 12,
      "routine": 4,
      "title": "호텔 체크인 · 지난 상황과 섞어서 복습",
      "entries": [
        {
          "module": 12,
          "index": 0,
          "role": "이번 상황 복습"
        },
        {
          "module": 12,
          "index": 2,
          "role": "이번 상황 복습"
        },
        {
          "module": 12,
          "index": 4,
          "role": "이번 상황 복습"
        },
        {
          "module": 11,
          "index": 1,
          "role": "이전 상황 복습"
        },
        {
          "module": 11,
          "index": 3,
          "role": "이전 상황 복습"
        },
        {
          "module": 11,
          "index": 5,
          "role": "이전 상황 복습"
        }
      ],
      "monthly": false
    },
    {
      "day": 78,
      "module": 12,
      "routine": 5,
      "title": "호텔 체크인 · 도움 없이 말하기 점검",
      "entries": [
        {
          "module": 12,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 12,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 12,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 12,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 12,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 12,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 79,
      "module": 13,
      "routine": 0,
      "title": "호텔에서 필요한 것 요청 · 처음 듣고 따라 말하기",
      "entries": [
        {
          "module": 13,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 13,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 13,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 13,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 13,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 13,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 80,
      "module": 13,
      "routine": 1,
      "title": "호텔에서 필요한 것 요청 · 내 상황으로 바꿔 말하기",
      "entries": [
        {
          "module": 13,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 13,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 13,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 13,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 13,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 13,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 81,
      "module": 13,
      "routine": 2,
      "title": "호텔에서 필요한 것 요청 · 듣고 바로 답하기",
      "entries": [
        {
          "module": 13,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 13,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 13,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 13,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 13,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 13,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 82,
      "module": 13,
      "routine": 3,
      "title": "호텔에서 필요한 것 요청 · 상황 역할 대화",
      "entries": [
        {
          "module": 13,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 13,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 13,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 13,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 13,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 13,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 83,
      "module": 13,
      "routine": 4,
      "title": "호텔에서 필요한 것 요청 · 지난 상황과 섞어서 복습",
      "entries": [
        {
          "module": 13,
          "index": 0,
          "role": "이번 상황 복습"
        },
        {
          "module": 13,
          "index": 2,
          "role": "이번 상황 복습"
        },
        {
          "module": 13,
          "index": 4,
          "role": "이번 상황 복습"
        },
        {
          "module": 12,
          "index": 1,
          "role": "이전 상황 복습"
        },
        {
          "module": 12,
          "index": 3,
          "role": "이전 상황 복습"
        },
        {
          "module": 12,
          "index": 5,
          "role": "이전 상황 복습"
        }
      ],
      "monthly": false
    },
    {
      "day": 84,
      "module": 13,
      "routine": 5,
      "title": "호텔에서 필요한 것 요청 · 도움 없이 말하기 점검",
      "entries": [
        {
          "module": 13,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 13,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 13,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 13,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 13,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 13,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 85,
      "module": 14,
      "routine": 0,
      "title": "공항과 입국 · 처음 듣고 따라 말하기",
      "entries": [
        {
          "module": 14,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 14,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 14,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 14,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 14,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 14,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 86,
      "module": 14,
      "routine": 1,
      "title": "공항과 입국 · 내 상황으로 바꿔 말하기",
      "entries": [
        {
          "module": 14,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 14,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 14,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 14,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 14,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 14,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 87,
      "module": 14,
      "routine": 2,
      "title": "공항과 입국 · 듣고 바로 답하기",
      "entries": [
        {
          "module": 14,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 14,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 14,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 14,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 14,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 14,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 88,
      "module": 14,
      "routine": 3,
      "title": "공항과 입국 · 상황 역할 대화",
      "entries": [
        {
          "module": 14,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 14,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 14,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 14,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 14,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 14,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 89,
      "module": 14,
      "routine": 4,
      "title": "공항과 입국 · 지난 상황과 섞어서 복습",
      "entries": [
        {
          "module": 14,
          "index": 0,
          "role": "이번 상황 복습"
        },
        {
          "module": 14,
          "index": 2,
          "role": "이번 상황 복습"
        },
        {
          "module": 14,
          "index": 4,
          "role": "이번 상황 복습"
        },
        {
          "module": 13,
          "index": 1,
          "role": "이전 상황 복습"
        },
        {
          "module": 13,
          "index": 3,
          "role": "이전 상황 복습"
        },
        {
          "module": 13,
          "index": 5,
          "role": "이전 상황 복습"
        }
      ],
      "monthly": false
    },
    {
      "day": 90,
      "module": 14,
      "routine": 5,
      "title": "공항과 입국 · 도움 없이 말하기 점검",
      "entries": [
        {
          "module": 14,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 14,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 14,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 14,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 14,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 14,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": true
    },
    {
      "day": 91,
      "module": 15,
      "routine": 0,
      "title": "친구와 약속 정하기 · 처음 듣고 따라 말하기",
      "entries": [
        {
          "module": 15,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 15,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 15,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 15,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 15,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 15,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 92,
      "module": 15,
      "routine": 1,
      "title": "친구와 약속 정하기 · 내 상황으로 바꿔 말하기",
      "entries": [
        {
          "module": 15,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 15,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 15,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 15,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 15,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 15,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 93,
      "module": 15,
      "routine": 2,
      "title": "친구와 약속 정하기 · 듣고 바로 답하기",
      "entries": [
        {
          "module": 15,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 15,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 15,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 15,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 15,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 15,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 94,
      "module": 15,
      "routine": 3,
      "title": "친구와 약속 정하기 · 상황 역할 대화",
      "entries": [
        {
          "module": 15,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 15,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 15,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 15,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 15,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 15,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 95,
      "module": 15,
      "routine": 4,
      "title": "친구와 약속 정하기 · 지난 상황과 섞어서 복습",
      "entries": [
        {
          "module": 15,
          "index": 0,
          "role": "이번 상황 복습"
        },
        {
          "module": 15,
          "index": 2,
          "role": "이번 상황 복습"
        },
        {
          "module": 15,
          "index": 4,
          "role": "이번 상황 복습"
        },
        {
          "module": 14,
          "index": 1,
          "role": "이전 상황 복습"
        },
        {
          "module": 14,
          "index": 3,
          "role": "이전 상황 복습"
        },
        {
          "module": 14,
          "index": 5,
          "role": "이전 상황 복습"
        }
      ],
      "monthly": false
    },
    {
      "day": 96,
      "module": 15,
      "routine": 5,
      "title": "친구와 약속 정하기 · 도움 없이 말하기 점검",
      "entries": [
        {
          "module": 15,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 15,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 15,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 15,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 15,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 15,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 97,
      "module": 16,
      "routine": 0,
      "title": "직장에서 부탁하기 · 처음 듣고 따라 말하기",
      "entries": [
        {
          "module": 16,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 16,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 16,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 16,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 16,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 16,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 98,
      "module": 16,
      "routine": 1,
      "title": "직장에서 부탁하기 · 내 상황으로 바꿔 말하기",
      "entries": [
        {
          "module": 16,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 16,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 16,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 16,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 16,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 16,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 99,
      "module": 16,
      "routine": 2,
      "title": "직장에서 부탁하기 · 듣고 바로 답하기",
      "entries": [
        {
          "module": 16,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 16,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 16,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 16,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 16,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 16,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 100,
      "module": 16,
      "routine": 3,
      "title": "직장에서 부탁하기 · 상황 역할 대화",
      "entries": [
        {
          "module": 16,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 16,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 16,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 16,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 16,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 16,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 101,
      "module": 16,
      "routine": 4,
      "title": "직장에서 부탁하기 · 지난 상황과 섞어서 복습",
      "entries": [
        {
          "module": 16,
          "index": 0,
          "role": "이번 상황 복습"
        },
        {
          "module": 16,
          "index": 2,
          "role": "이번 상황 복습"
        },
        {
          "module": 16,
          "index": 4,
          "role": "이번 상황 복습"
        },
        {
          "module": 15,
          "index": 1,
          "role": "이전 상황 복습"
        },
        {
          "module": 15,
          "index": 3,
          "role": "이전 상황 복습"
        },
        {
          "module": 15,
          "index": 5,
          "role": "이전 상황 복습"
        }
      ],
      "monthly": false
    },
    {
      "day": 102,
      "module": 16,
      "routine": 5,
      "title": "직장에서 부탁하기 · 도움 없이 말하기 점검",
      "entries": [
        {
          "module": 16,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 16,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 16,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 16,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 16,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 16,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 103,
      "module": 17,
      "routine": 0,
      "title": "일정과 회의 · 처음 듣고 따라 말하기",
      "entries": [
        {
          "module": 17,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 17,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 17,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 17,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 17,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 17,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 104,
      "module": 17,
      "routine": 1,
      "title": "일정과 회의 · 내 상황으로 바꿔 말하기",
      "entries": [
        {
          "module": 17,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 17,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 17,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 17,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 17,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 17,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 105,
      "module": 17,
      "routine": 2,
      "title": "일정과 회의 · 듣고 바로 답하기",
      "entries": [
        {
          "module": 17,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 17,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 17,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 17,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 17,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 17,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 106,
      "module": 17,
      "routine": 3,
      "title": "일정과 회의 · 상황 역할 대화",
      "entries": [
        {
          "module": 17,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 17,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 17,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 17,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 17,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 17,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 107,
      "module": 17,
      "routine": 4,
      "title": "일정과 회의 · 지난 상황과 섞어서 복습",
      "entries": [
        {
          "module": 17,
          "index": 0,
          "role": "이번 상황 복습"
        },
        {
          "module": 17,
          "index": 2,
          "role": "이번 상황 복습"
        },
        {
          "module": 17,
          "index": 4,
          "role": "이번 상황 복습"
        },
        {
          "module": 16,
          "index": 1,
          "role": "이전 상황 복습"
        },
        {
          "module": 16,
          "index": 3,
          "role": "이전 상황 복습"
        },
        {
          "module": 16,
          "index": 5,
          "role": "이전 상황 복습"
        }
      ],
      "monthly": false
    },
    {
      "day": 108,
      "module": 17,
      "routine": 5,
      "title": "일정과 회의 · 도움 없이 말하기 점검",
      "entries": [
        {
          "module": 17,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 17,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 17,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 17,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 17,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 17,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 109,
      "module": 18,
      "routine": 0,
      "title": "취미 대화 이어가기 · 처음 듣고 따라 말하기",
      "entries": [
        {
          "module": 18,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 18,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 18,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 18,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 18,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 18,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 110,
      "module": 18,
      "routine": 1,
      "title": "취미 대화 이어가기 · 내 상황으로 바꿔 말하기",
      "entries": [
        {
          "module": 18,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 18,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 18,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 18,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 18,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 18,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 111,
      "module": 18,
      "routine": 2,
      "title": "취미 대화 이어가기 · 듣고 바로 답하기",
      "entries": [
        {
          "module": 18,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 18,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 18,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 18,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 18,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 18,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 112,
      "module": 18,
      "routine": 3,
      "title": "취미 대화 이어가기 · 상황 역할 대화",
      "entries": [
        {
          "module": 18,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 18,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 18,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 18,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 18,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 18,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 113,
      "module": 18,
      "routine": 4,
      "title": "취미 대화 이어가기 · 지난 상황과 섞어서 복습",
      "entries": [
        {
          "module": 18,
          "index": 0,
          "role": "이번 상황 복습"
        },
        {
          "module": 18,
          "index": 2,
          "role": "이번 상황 복습"
        },
        {
          "module": 18,
          "index": 4,
          "role": "이번 상황 복습"
        },
        {
          "module": 17,
          "index": 1,
          "role": "이전 상황 복습"
        },
        {
          "module": 17,
          "index": 3,
          "role": "이전 상황 복습"
        },
        {
          "module": 17,
          "index": 5,
          "role": "이전 상황 복습"
        }
      ],
      "monthly": false
    },
    {
      "day": 114,
      "module": 18,
      "routine": 5,
      "title": "취미 대화 이어가기 · 도움 없이 말하기 점검",
      "entries": [
        {
          "module": 18,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 18,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 18,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 18,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 18,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 18,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 115,
      "module": 19,
      "routine": 0,
      "title": "지난 주말 이야기 · 처음 듣고 따라 말하기",
      "entries": [
        {
          "module": 19,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 19,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 19,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 19,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 19,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 19,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 116,
      "module": 19,
      "routine": 1,
      "title": "지난 주말 이야기 · 내 상황으로 바꿔 말하기",
      "entries": [
        {
          "module": 19,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 19,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 19,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 19,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 19,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 19,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 117,
      "module": 19,
      "routine": 2,
      "title": "지난 주말 이야기 · 듣고 바로 답하기",
      "entries": [
        {
          "module": 19,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 19,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 19,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 19,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 19,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 19,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 118,
      "module": 19,
      "routine": 3,
      "title": "지난 주말 이야기 · 상황 역할 대화",
      "entries": [
        {
          "module": 19,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 19,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 19,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 19,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 19,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 19,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 119,
      "module": 19,
      "routine": 4,
      "title": "지난 주말 이야기 · 지난 상황과 섞어서 복습",
      "entries": [
        {
          "module": 19,
          "index": 0,
          "role": "이번 상황 복습"
        },
        {
          "module": 19,
          "index": 2,
          "role": "이번 상황 복습"
        },
        {
          "module": 19,
          "index": 4,
          "role": "이번 상황 복습"
        },
        {
          "module": 18,
          "index": 1,
          "role": "이전 상황 복습"
        },
        {
          "module": 18,
          "index": 3,
          "role": "이전 상황 복습"
        },
        {
          "module": 18,
          "index": 5,
          "role": "이전 상황 복습"
        }
      ],
      "monthly": false
    },
    {
      "day": 120,
      "module": 19,
      "routine": 5,
      "title": "지난 주말 이야기 · 도움 없이 말하기 점검",
      "entries": [
        {
          "module": 19,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 19,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 19,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 19,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 19,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 19,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": true
    },
    {
      "day": 121,
      "module": 20,
      "routine": 0,
      "title": "식당에서 문제 해결 · 처음 듣고 따라 말하기",
      "entries": [
        {
          "module": 20,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 20,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 20,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 20,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 20,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 20,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 122,
      "module": 20,
      "routine": 1,
      "title": "식당에서 문제 해결 · 내 상황으로 바꿔 말하기",
      "entries": [
        {
          "module": 20,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 20,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 20,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 20,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 20,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 20,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 123,
      "module": 20,
      "routine": 2,
      "title": "식당에서 문제 해결 · 듣고 바로 답하기",
      "entries": [
        {
          "module": 20,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 20,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 20,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 20,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 20,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 20,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 124,
      "module": 20,
      "routine": 3,
      "title": "식당에서 문제 해결 · 상황 역할 대화",
      "entries": [
        {
          "module": 20,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 20,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 20,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 20,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 20,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 20,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 125,
      "module": 20,
      "routine": 4,
      "title": "식당에서 문제 해결 · 지난 상황과 섞어서 복습",
      "entries": [
        {
          "module": 20,
          "index": 0,
          "role": "이번 상황 복습"
        },
        {
          "module": 20,
          "index": 2,
          "role": "이번 상황 복습"
        },
        {
          "module": 20,
          "index": 4,
          "role": "이번 상황 복습"
        },
        {
          "module": 19,
          "index": 1,
          "role": "이전 상황 복습"
        },
        {
          "module": 19,
          "index": 3,
          "role": "이전 상황 복습"
        },
        {
          "module": 19,
          "index": 5,
          "role": "이전 상황 복습"
        }
      ],
      "monthly": false
    },
    {
      "day": 126,
      "module": 20,
      "routine": 5,
      "title": "식당에서 문제 해결 · 도움 없이 말하기 점검",
      "entries": [
        {
          "module": 20,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 20,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 20,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 20,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 20,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 20,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 127,
      "module": 21,
      "routine": 0,
      "title": "약국에서 증상 설명 · 처음 듣고 따라 말하기",
      "entries": [
        {
          "module": 21,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 21,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 21,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 21,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 21,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 21,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 128,
      "module": 21,
      "routine": 1,
      "title": "약국에서 증상 설명 · 내 상황으로 바꿔 말하기",
      "entries": [
        {
          "module": 21,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 21,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 21,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 21,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 21,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 21,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 129,
      "module": 21,
      "routine": 2,
      "title": "약국에서 증상 설명 · 듣고 바로 답하기",
      "entries": [
        {
          "module": 21,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 21,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 21,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 21,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 21,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 21,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 130,
      "module": 21,
      "routine": 3,
      "title": "약국에서 증상 설명 · 상황 역할 대화",
      "entries": [
        {
          "module": 21,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 21,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 21,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 21,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 21,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 21,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 131,
      "module": 21,
      "routine": 4,
      "title": "약국에서 증상 설명 · 지난 상황과 섞어서 복습",
      "entries": [
        {
          "module": 21,
          "index": 0,
          "role": "이번 상황 복습"
        },
        {
          "module": 21,
          "index": 2,
          "role": "이번 상황 복습"
        },
        {
          "module": 21,
          "index": 4,
          "role": "이번 상황 복습"
        },
        {
          "module": 20,
          "index": 1,
          "role": "이전 상황 복습"
        },
        {
          "module": 20,
          "index": 3,
          "role": "이전 상황 복습"
        },
        {
          "module": 20,
          "index": 5,
          "role": "이전 상황 복습"
        }
      ],
      "monthly": false
    },
    {
      "day": 132,
      "module": 21,
      "routine": 5,
      "title": "약국에서 증상 설명 · 도움 없이 말하기 점검",
      "entries": [
        {
          "module": 21,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 21,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 21,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 21,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 21,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 21,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 133,
      "module": 22,
      "routine": 0,
      "title": "반품과 교환 · 처음 듣고 따라 말하기",
      "entries": [
        {
          "module": 22,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 22,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 22,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 22,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 22,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 22,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 134,
      "module": 22,
      "routine": 1,
      "title": "반품과 교환 · 내 상황으로 바꿔 말하기",
      "entries": [
        {
          "module": 22,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 22,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 22,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 22,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 22,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 22,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 135,
      "module": 22,
      "routine": 2,
      "title": "반품과 교환 · 듣고 바로 답하기",
      "entries": [
        {
          "module": 22,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 22,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 22,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 22,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 22,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 22,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 136,
      "module": 22,
      "routine": 3,
      "title": "반품과 교환 · 상황 역할 대화",
      "entries": [
        {
          "module": 22,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 22,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 22,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 22,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 22,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 22,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 137,
      "module": 22,
      "routine": 4,
      "title": "반품과 교환 · 지난 상황과 섞어서 복습",
      "entries": [
        {
          "module": 22,
          "index": 0,
          "role": "이번 상황 복습"
        },
        {
          "module": 22,
          "index": 2,
          "role": "이번 상황 복습"
        },
        {
          "module": 22,
          "index": 4,
          "role": "이번 상황 복습"
        },
        {
          "module": 21,
          "index": 1,
          "role": "이전 상황 복습"
        },
        {
          "module": 21,
          "index": 3,
          "role": "이전 상황 복습"
        },
        {
          "module": 21,
          "index": 5,
          "role": "이전 상황 복습"
        }
      ],
      "monthly": false
    },
    {
      "day": 138,
      "module": 22,
      "routine": 5,
      "title": "반품과 교환 · 도움 없이 말하기 점검",
      "entries": [
        {
          "module": 22,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 22,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 22,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 22,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 22,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 22,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 139,
      "module": 23,
      "routine": 0,
      "title": "물건을 잃어버렸을 때 · 처음 듣고 따라 말하기",
      "entries": [
        {
          "module": 23,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 23,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 23,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 23,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 23,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 23,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 140,
      "module": 23,
      "routine": 1,
      "title": "물건을 잃어버렸을 때 · 내 상황으로 바꿔 말하기",
      "entries": [
        {
          "module": 23,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 23,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 23,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 23,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 23,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 23,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 141,
      "module": 23,
      "routine": 2,
      "title": "물건을 잃어버렸을 때 · 듣고 바로 답하기",
      "entries": [
        {
          "module": 23,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 23,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 23,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 23,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 23,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 23,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 142,
      "module": 23,
      "routine": 3,
      "title": "물건을 잃어버렸을 때 · 상황 역할 대화",
      "entries": [
        {
          "module": 23,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 23,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 23,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 23,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 23,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 23,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 143,
      "module": 23,
      "routine": 4,
      "title": "물건을 잃어버렸을 때 · 지난 상황과 섞어서 복습",
      "entries": [
        {
          "module": 23,
          "index": 0,
          "role": "이번 상황 복습"
        },
        {
          "module": 23,
          "index": 2,
          "role": "이번 상황 복습"
        },
        {
          "module": 23,
          "index": 4,
          "role": "이번 상황 복습"
        },
        {
          "module": 22,
          "index": 1,
          "role": "이전 상황 복습"
        },
        {
          "module": 22,
          "index": 3,
          "role": "이전 상황 복습"
        },
        {
          "module": 22,
          "index": 5,
          "role": "이전 상황 복습"
        }
      ],
      "monthly": false
    },
    {
      "day": 144,
      "module": 23,
      "routine": 5,
      "title": "물건을 잃어버렸을 때 · 도움 없이 말하기 점검",
      "entries": [
        {
          "module": 23,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 23,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 23,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 23,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 23,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 23,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 145,
      "module": 24,
      "routine": 0,
      "title": "전화로 예약하기 · 처음 듣고 따라 말하기",
      "entries": [
        {
          "module": 24,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 24,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 24,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 24,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 24,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 24,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 146,
      "module": 24,
      "routine": 1,
      "title": "전화로 예약하기 · 내 상황으로 바꿔 말하기",
      "entries": [
        {
          "module": 24,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 24,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 24,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 24,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 24,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 24,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 147,
      "module": 24,
      "routine": 2,
      "title": "전화로 예약하기 · 듣고 바로 답하기",
      "entries": [
        {
          "module": 24,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 24,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 24,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 24,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 24,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 24,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 148,
      "module": 24,
      "routine": 3,
      "title": "전화로 예약하기 · 상황 역할 대화",
      "entries": [
        {
          "module": 24,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 24,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 24,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 24,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 24,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 24,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 149,
      "module": 24,
      "routine": 4,
      "title": "전화로 예약하기 · 지난 상황과 섞어서 복습",
      "entries": [
        {
          "module": 24,
          "index": 0,
          "role": "이번 상황 복습"
        },
        {
          "module": 24,
          "index": 2,
          "role": "이번 상황 복습"
        },
        {
          "module": 24,
          "index": 4,
          "role": "이번 상황 복습"
        },
        {
          "module": 23,
          "index": 1,
          "role": "이전 상황 복습"
        },
        {
          "module": 23,
          "index": 3,
          "role": "이전 상황 복습"
        },
        {
          "module": 23,
          "index": 5,
          "role": "이전 상황 복습"
        }
      ],
      "monthly": false
    },
    {
      "day": 150,
      "module": 24,
      "routine": 5,
      "title": "전화로 예약하기 · 도움 없이 말하기 점검",
      "entries": [
        {
          "module": 24,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 24,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 24,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 24,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 24,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 24,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": true
    },
    {
      "day": 151,
      "module": 25,
      "routine": 0,
      "title": "여행 계획 설명하기 · 처음 듣고 따라 말하기",
      "entries": [
        {
          "module": 25,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 25,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 25,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 25,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 25,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 25,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 152,
      "module": 25,
      "routine": 1,
      "title": "여행 계획 설명하기 · 내 상황으로 바꿔 말하기",
      "entries": [
        {
          "module": 25,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 25,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 25,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 25,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 25,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 25,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 153,
      "module": 25,
      "routine": 2,
      "title": "여행 계획 설명하기 · 듣고 바로 답하기",
      "entries": [
        {
          "module": 25,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 25,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 25,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 25,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 25,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 25,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 154,
      "module": 25,
      "routine": 3,
      "title": "여행 계획 설명하기 · 상황 역할 대화",
      "entries": [
        {
          "module": 25,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 25,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 25,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 25,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 25,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 25,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 155,
      "module": 25,
      "routine": 4,
      "title": "여행 계획 설명하기 · 지난 상황과 섞어서 복습",
      "entries": [
        {
          "module": 25,
          "index": 0,
          "role": "이번 상황 복습"
        },
        {
          "module": 25,
          "index": 2,
          "role": "이번 상황 복습"
        },
        {
          "module": 25,
          "index": 4,
          "role": "이번 상황 복습"
        },
        {
          "module": 24,
          "index": 1,
          "role": "이전 상황 복습"
        },
        {
          "module": 24,
          "index": 3,
          "role": "이전 상황 복습"
        },
        {
          "module": 24,
          "index": 5,
          "role": "이전 상황 복습"
        }
      ],
      "monthly": false
    },
    {
      "day": 156,
      "module": 25,
      "routine": 5,
      "title": "여행 계획 설명하기 · 도움 없이 말하기 점검",
      "entries": [
        {
          "module": 25,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 25,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 25,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 25,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 25,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 25,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 157,
      "module": 26,
      "routine": 0,
      "title": "초대와 정중한 거절 · 처음 듣고 따라 말하기",
      "entries": [
        {
          "module": 26,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 26,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 26,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 26,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 26,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 26,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 158,
      "module": 26,
      "routine": 1,
      "title": "초대와 정중한 거절 · 내 상황으로 바꿔 말하기",
      "entries": [
        {
          "module": 26,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 26,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 26,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 26,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 26,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 26,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 159,
      "module": 26,
      "routine": 2,
      "title": "초대와 정중한 거절 · 듣고 바로 답하기",
      "entries": [
        {
          "module": 26,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 26,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 26,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 26,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 26,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 26,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 160,
      "module": 26,
      "routine": 3,
      "title": "초대와 정중한 거절 · 상황 역할 대화",
      "entries": [
        {
          "module": 26,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 26,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 26,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 26,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 26,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 26,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 161,
      "module": 26,
      "routine": 4,
      "title": "초대와 정중한 거절 · 지난 상황과 섞어서 복습",
      "entries": [
        {
          "module": 26,
          "index": 0,
          "role": "이번 상황 복습"
        },
        {
          "module": 26,
          "index": 2,
          "role": "이번 상황 복습"
        },
        {
          "module": 26,
          "index": 4,
          "role": "이번 상황 복습"
        },
        {
          "module": 25,
          "index": 1,
          "role": "이전 상황 복습"
        },
        {
          "module": 25,
          "index": 3,
          "role": "이전 상황 복습"
        },
        {
          "module": 25,
          "index": 5,
          "role": "이전 상황 복습"
        }
      ],
      "monthly": false
    },
    {
      "day": 162,
      "module": 26,
      "routine": 5,
      "title": "초대와 정중한 거절 · 도움 없이 말하기 점검",
      "entries": [
        {
          "module": 26,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 26,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 26,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 26,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 26,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 26,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 163,
      "module": 27,
      "routine": 0,
      "title": "선택과 의견 이야기 · 처음 듣고 따라 말하기",
      "entries": [
        {
          "module": 27,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 27,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 27,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 27,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 27,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 27,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 164,
      "module": 27,
      "routine": 1,
      "title": "선택과 의견 이야기 · 내 상황으로 바꿔 말하기",
      "entries": [
        {
          "module": 27,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 27,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 27,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 27,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 27,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 27,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 165,
      "module": 27,
      "routine": 2,
      "title": "선택과 의견 이야기 · 듣고 바로 답하기",
      "entries": [
        {
          "module": 27,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 27,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 27,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 27,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 27,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 27,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 166,
      "module": 27,
      "routine": 3,
      "title": "선택과 의견 이야기 · 상황 역할 대화",
      "entries": [
        {
          "module": 27,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 27,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 27,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 27,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 27,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 27,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 167,
      "module": 27,
      "routine": 4,
      "title": "선택과 의견 이야기 · 지난 상황과 섞어서 복습",
      "entries": [
        {
          "module": 27,
          "index": 0,
          "role": "이번 상황 복습"
        },
        {
          "module": 27,
          "index": 2,
          "role": "이번 상황 복습"
        },
        {
          "module": 27,
          "index": 4,
          "role": "이번 상황 복습"
        },
        {
          "module": 26,
          "index": 1,
          "role": "이전 상황 복습"
        },
        {
          "module": 26,
          "index": 3,
          "role": "이전 상황 복습"
        },
        {
          "module": 26,
          "index": 5,
          "role": "이전 상황 복습"
        }
      ],
      "monthly": false
    },
    {
      "day": 168,
      "module": 27,
      "routine": 5,
      "title": "선택과 의견 이야기 · 도움 없이 말하기 점검",
      "entries": [
        {
          "module": 27,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 27,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 27,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 27,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 27,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 27,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 169,
      "module": 28,
      "routine": 0,
      "title": "여행 중 일정 변경 · 처음 듣고 따라 말하기",
      "entries": [
        {
          "module": 28,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 28,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 28,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 28,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 28,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 28,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 170,
      "module": 28,
      "routine": 1,
      "title": "여행 중 일정 변경 · 내 상황으로 바꿔 말하기",
      "entries": [
        {
          "module": 28,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 28,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 28,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 28,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 28,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 28,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 171,
      "module": 28,
      "routine": 2,
      "title": "여행 중 일정 변경 · 듣고 바로 답하기",
      "entries": [
        {
          "module": 28,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 28,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 28,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 28,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 28,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 28,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 172,
      "module": 28,
      "routine": 3,
      "title": "여행 중 일정 변경 · 상황 역할 대화",
      "entries": [
        {
          "module": 28,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 28,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 28,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 28,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 28,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 28,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 173,
      "module": 28,
      "routine": 4,
      "title": "여행 중 일정 변경 · 지난 상황과 섞어서 복습",
      "entries": [
        {
          "module": 28,
          "index": 0,
          "role": "이번 상황 복습"
        },
        {
          "module": 28,
          "index": 2,
          "role": "이번 상황 복습"
        },
        {
          "module": 28,
          "index": 4,
          "role": "이번 상황 복습"
        },
        {
          "module": 27,
          "index": 1,
          "role": "이전 상황 복습"
        },
        {
          "module": 27,
          "index": 3,
          "role": "이전 상황 복습"
        },
        {
          "module": 27,
          "index": 5,
          "role": "이전 상황 복습"
        }
      ],
      "monthly": false
    },
    {
      "day": 174,
      "module": 28,
      "routine": 5,
      "title": "여행 중 일정 변경 · 도움 없이 말하기 점검",
      "entries": [
        {
          "module": 28,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 28,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 28,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 28,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 28,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 28,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 175,
      "module": 29,
      "routine": 0,
      "title": "종합 대화와 다음 목표 · 처음 듣고 따라 말하기",
      "entries": [
        {
          "module": 29,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 29,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 29,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 29,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 29,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 29,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 176,
      "module": 29,
      "routine": 1,
      "title": "종합 대화와 다음 목표 · 내 상황으로 바꿔 말하기",
      "entries": [
        {
          "module": 29,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 29,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 29,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 29,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 29,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 29,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 177,
      "module": 29,
      "routine": 2,
      "title": "종합 대화와 다음 목표 · 듣고 바로 답하기",
      "entries": [
        {
          "module": 29,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 29,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 29,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 29,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 29,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 29,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 178,
      "module": 29,
      "routine": 3,
      "title": "종합 대화와 다음 목표 · 상황 역할 대화",
      "entries": [
        {
          "module": 29,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 29,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 29,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 29,
          "index": 3,
          "role": "오늘의 상황"
        },
        {
          "module": 29,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 29,
          "index": 5,
          "role": "오늘의 상황"
        }
      ],
      "monthly": false
    },
    {
      "day": 179,
      "module": 29,
      "routine": 4,
      "title": "종합 대화와 다음 목표 · 지난 상황과 섞어서 복습",
      "entries": [
        {
          "module": 29,
          "index": 0,
          "role": "이번 상황 복습"
        },
        {
          "module": 29,
          "index": 2,
          "role": "이번 상황 복습"
        },
        {
          "module": 29,
          "index": 4,
          "role": "이번 상황 복습"
        },
        {
          "module": 28,
          "index": 1,
          "role": "이전 상황 복습"
        },
        {
          "module": 28,
          "index": 3,
          "role": "이전 상황 복습"
        },
        {
          "module": 28,
          "index": 5,
          "role": "이전 상황 복습"
        }
      ],
      "monthly": false
    },
    {
      "day": 180,
      "module": 29,
      "routine": 5,
      "title": "종합 대화와 다음 목표 · 도움 없이 말하기 점검",
      "entries": [
        {
          "module": 29,
          "index": 2,
          "role": "오늘의 상황"
        },
        {
          "module": 29,
          "index": 0,
          "role": "오늘의 상황"
        },
        {
          "module": 29,
          "index": 4,
          "role": "오늘의 상황"
        },
        {
          "module": 29,
          "index": 1,
          "role": "오늘의 상황"
        },
        {
          "module": 29,
          "index": 5,
          "role": "오늘의 상황"
        },
        {
          "module": 29,
          "index": 3,
          "role": "오늘의 상황"
        }
      ],
      "monthly": true
    }
  ],
  "monthly": [
    {
      "title": "자기소개",
      "prompt": "Tell me about yourself.",
      "goal": "이름·출신·사는 곳을 두 문장 이상으로 말하기"
    },
    {
      "title": "일과와 취향",
      "prompt": "What do you do every day, and what do you like?",
      "goal": "일과 한 가지와 좋아하는 활동 말하기"
    },
    {
      "title": "음식 주문",
      "prompt": "What would you like to order?",
      "goal": "음식·음료를 고르고 요청하기"
    },
    {
      "title": "주문 문제",
      "prompt": "Is everything okay with your order?",
      "goal": "주문한 것과 다른 것이 나왔다고 설명하기"
    },
    {
      "title": "쇼핑",
      "prompt": "What size and color do you need?",
      "goal": "원하는 색·사이즈를 말하고 가격 묻기"
    },
    {
      "title": "반품",
      "prompt": "Why would you like to return this?",
      "goal": "반품 요청과 이유 말하기"
    },
    {
      "title": "길 찾기",
      "prompt": "You look lost. Can I help you?",
      "goal": "목적지까지 가는 방법과 걸리는 시간 묻기"
    },
    {
      "title": "호텔",
      "prompt": "Welcome. How can I help you?",
      "goal": "예약 이름과 필요한 것 요청하기"
    },
    {
      "title": "약속",
      "prompt": "When and where should we meet?",
      "goal": "가능한 날짜·시간·장소 제안하기"
    },
    {
      "title": "못 알아들었을 때",
      "prompt": "The train leaves at a quarter past three.",
      "goal": "다시 또는 천천히 말해 달라고 요청하고 시간 확인하기"
    }
  ]
};
