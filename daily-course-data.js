'use strict';
// Keep the original schedule so saved lessons and test answers remain readable.
const legacyCourseDays = sixMonthCourse.days;
const dailyConversationPacks = [
  [
    {"title":"처음 만났을 때","pairs":[
      ["Hello. How are you?", "안녕하세요. 어떻게 지내세요?", "I'm good, thanks. How about you?", "잘 지내요, 고마워요. 그쪽은요?"],
      ["Is this your first time here?", "여기는 처음 오셨나요?", "Yes, it's my first time.", "네, 처음이에요."],
      ["Are you here on vacation?", "휴가로 오셨나요?", "Yes, I'm here for a week.", "네, 일주일 동안 왔어요."]
    ]},
    {"title":"이름과 호칭","pairs":[
      ["How do you spell your name?", "이름 철자가 어떻게 되나요?", "It's M-I-N.", "엠 아이 엔이에요."],
      ["What should I call you?", "어떻게 부르면 될까요?", "You can call me Min.", "민이라고 부르시면 돼요."],
      ["Did I say your name right?", "이름을 제대로 말했나요?", "Yes, that's right.", "네, 맞아요."]
    ]},
    {"title":"출신과 방문 이유","pairs":[
      ["Which part of Korea are you from?", "한국 어느 지역 출신이에요?", "I'm from Busan.", "부산 출신이에요."],
      ["What brings you here?", "여기는 무슨 일로 오셨어요?", "I'm visiting a friend.", "친구를 만나러 왔어요."],
      ["Do you come here often?", "여기 자주 오세요?", "No, not very often.", "아니요, 자주 오지는 않아요."]
    ]},
    {"title":"사는 곳과 동네","pairs":[
      ["Do you live near here?", "이 근처에 사세요?", "Yes, about ten minutes away.", "네, 약 10분 거리에 살아요."],
      ["Do you like your neighborhood?", "사는 동네가 마음에 드나요?", "Yes, it's quiet and convenient.", "네, 조용하고 편리해요."],
      ["How long have you lived there?", "거기서 얼마나 오래 살았어요?", "I've lived there for two years.", "2년 동안 살았어요."]
    ]},
    {"title":"하는 일 소개","pairs":[
      ["Where do you work?", "어디에서 일하세요?", "I work at a small company.", "작은 회사에서 일해요."],
      ["Do you work from home?", "재택근무 하세요?", "Sometimes, but usually I go to the office.", "가끔 하지만 보통 출근해요."],
      ["Do you like your job?", "하는 일이 마음에 드나요?", "Yes, I like working with my team.", "네, 팀원들과 일하는 게 좋아요."]
    ]},
    {"title":"대화 이어가기와 마무리","pairs":[
      ["What do you do in your free time?", "여가 시간에는 무엇을 하세요?", "I watch movies and go for walks.", "영화를 보고 산책해요."],
      ["Would you like to sit here?", "여기 앉으실래요?", "Sure, thank you.", "좋아요, 고마워요."],
      ["It was nice talking to you.", "이야기해서 즐거웠어요.", "You too. See you around!", "저도요. 또 봐요!"]
    ]}
  ],
  [
    {"title":"기상과 준비","pairs":[
      ["Do you get up early?", "일찍 일어나세요?", "Not really. I get up around eight.", "그렇지는 않아요. 8시쯤 일어나요."],
      ["Do you use an alarm?", "알람을 쓰세요?", "Yes, I set two alarms.", "네, 알람을 두 개 맞춰요."],
      ["Are you a morning person?", "아침형 인간인가요?", "No, I need coffee first.", "아니요, 먼저 커피가 필요해요."]
    ]},
    {"title":"아침 준비","pairs":[
      ["Do you take a shower in the morning?", "아침에 샤워하세요?", "Yes, before breakfast.", "네, 아침 먹기 전에요."],
      ["How long does it take to get ready?", "준비하는 데 얼마나 걸려요?", "About thirty minutes.", "약 30분이요."],
      ["Are you ready to leave?", "나갈 준비 됐어요?", "Almost. Give me five minutes.", "거의요. 5분만 주세요."]
    ]},
    {"title":"아침 식사","pairs":[
      ["Do you eat breakfast every day?", "매일 아침을 드세요?", "Usually, but sometimes I skip it.", "보통 먹지만 가끔 거르기도 해요."],
      ["Would you like some toast?", "토스트 드실래요?", "Yes, just one slice, please.", "네, 한 조각만 주세요."],
      ["Do you want coffee or tea?", "커피와 차 중 무엇을 드실래요?", "Coffee, please. No sugar.", "커피 주세요. 설탕은 빼 주세요."]
    ]},
    {"title":"출근길","pairs":[
      ["How long is your commute?", "출근하는 데 얼마나 걸려요?", "It takes about forty minutes.", "약 40분 걸려요."],
      ["Is the bus crowded?", "버스가 붐비나요?", "Yes, especially in the morning.", "네, 특히 아침에요."],
      ["What time do you leave home?", "몇 시에 집에서 나가요?", "I leave at eight thirty.", "8시 30분에 나가요."]
    ]},
    {"title":"퇴근 후 시간","pairs":[
      ["Are you busy tonight?", "오늘 저녁 바쁘세요?", "No, I'm just staying home.", "아니요, 그냥 집에 있을 거예요."],
      ["Do you cook after work?", "퇴근 후 요리하세요?", "Sometimes. I often order food.", "가끔요. 자주 음식을 주문해요."],
      ["How was your day?", "오늘 하루 어땠어요?", "It was busy, but pretty good.", "바빴지만 꽤 괜찮았어요."]
    ]},
    {"title":"취침과 휴식","pairs":[
      ["Are you tired?", "피곤하세요?", "Yes, I had a long day.", "네, 오늘 하루가 길었어요."],
      ["Do you stay up late?", "늦게까지 안 주무세요?", "Sometimes, when I watch a movie.", "가끔 영화를 볼 때요."],
      ["What do you do before bed?", "자기 전에 무엇을 하세요?", "I put my phone away and read.", "휴대폰을 치우고 책을 읽어요."]
    ]}
  ],
  [
    {"title":"음악 취향","pairs":[
      ["Do you listen to music every day?", "매일 음악을 들으세요?", "Yes, on my way to work.", "네, 출근하는 길에요."],
      ["Who is your favorite singer?", "가장 좋아하는 가수는 누구예요?", "I really like Adele.", "아델을 정말 좋아해요."],
      ["Can you recommend a song?", "노래 하나 추천해 주실래요?", "Sure. Let me find one.", "물론이죠. 하나 찾아볼게요."]
    ]},
    {"title":"영화와 드라마","pairs":[
      ["What kind of movies do you watch?", "어떤 영화를 보세요?", "I usually watch comedies.", "보통 코미디를 봐요."],
      ["Have you seen this movie?", "이 영화 보셨어요?", "Not yet. Is it good?", "아직요. 재미있나요?"],
      ["Do you prefer movies or TV shows?", "영화와 TV 프로그램 중 무엇을 더 좋아해요?", "I prefer movies.", "영화를 더 좋아해요."]
    ]},
    {"title":"음식 취향","pairs":[
      ["What's your favorite food?", "가장 좋아하는 음식은 뭐예요?", "I love noodles.", "면 요리를 정말 좋아해요."],
      ["Do you like spicy food?", "매운 음식을 좋아해요?", "Yes, but not too spicy.", "네, 하지만 너무 매운 건 싫어요."],
      ["Is there anything you don't like?", "싫어하는 음식이 있나요?", "I don't really like olives.", "올리브는 별로 좋아하지 않아요."]
    ]},
    {"title":"주말 취향","pairs":[
      ["Would you rather go out or stay in?", "밖에 나가는 것과 집에 있는 것 중 뭐가 좋아요?", "I'd rather stay in tonight.", "오늘 저녁에는 집에 있고 싶어요."],
      ["Do you enjoy hiking?", "등산을 즐기세요?", "Yes, when the weather is nice.", "네, 날씨가 좋을 때요."],
      ["What do you like about it?", "그것의 어떤 점이 좋아요?", "It helps me relax.", "마음을 편하게 해 줘요."]
    ]},
    {"title":"함께할 활동 고르기","pairs":[
      ["Do you want to watch a movie?", "영화 볼래요?", "Sure. What do you want to watch?", "좋아요. 무엇을 보고 싶어요?"],
      ["How about a comedy?", "코미디는 어때요?", "Sounds good to me.", "저는 좋아요."],
      ["Do you want to try something new?", "새로운 걸 해 볼래요?", "Yes, let's give it a try.", "네, 한번 해 봐요."]
    ]},
    {"title":"이유와 공통점","pairs":[
      ["Why do you like this place?", "이곳이 왜 좋아요?", "It's quiet and the food is good.", "조용하고 음식이 맛있어요."],
      ["I like walking by the river.", "저는 강가를 걷는 게 좋아요.", "Me too. It's really relaxing.", "저도요. 정말 편안해져요."],
      ["What don't you like about it?", "그것의 어떤 점이 싫어요?", "It's a little too noisy.", "조금 너무 시끄러워요."]
    ]}
  ],
  [
    {"title":"가족 구성","pairs":[
      ["Do you have any brothers or sisters?", "형제자매가 있나요?", "Yes, I have an older sister.", "네, 누나가 한 명 있어요."],
      ["Are you the oldest?", "형제자매 중 가장 나이가 많나요?", "No, I'm the youngest.", "아니요, 제가 막내예요."],
      ["Does your family live nearby?", "가족이 가까이 사나요?", "Yes, we live in the same city.", "네, 같은 도시에 살아요."]
    ]},
    {"title":"가족의 일과","pairs":[
      ["What does your sister do?", "누나는 무슨 일을 하나요?", "She's a teacher.", "선생님이에요."],
      ["Is your brother still in school?", "남동생은 아직 학교에 다니나요?", "Yes, he's in college.", "네, 대학에 다녀요."],
      ["Do your parents work?", "부모님은 일을 하시나요?", "My dad works, but my mom is retired.", "아버지는 일하시고 어머니는 은퇴하셨어요."]
    ]},
    {"title":"함께 보내는 시간","pairs":[
      ["How often do you see your family?", "가족을 얼마나 자주 보나요?", "We meet every weekend.", "주말마다 만나요."],
      ["What do you do together?", "함께 무엇을 하나요?", "We usually have dinner together.", "보통 함께 저녁을 먹어요."],
      ["Do you call your parents often?", "부모님께 자주 전화하나요?", "Yes, a few times a week.", "네, 일주일에 몇 번요."]
    ]},
    {"title":"친구 소개","pairs":[
      ["How do you know each other?", "두 분은 어떻게 아는 사이예요?", "We went to school together.", "같은 학교에 다녔어요."],
      ["How long have you been friends?", "친구로 지낸 지 얼마나 됐어요?", "For about ten years.", "약 10년이요."],
      ["Is this your friend?", "이분은 친구인가요?", "Yes, this is my friend Jisoo.", "네, 제 친구 지수예요."]
    ]},
    {"title":"성격 이야기","pairs":[
      ["What's your sister like?", "누나는 어떤 사람이에요?", "She's kind and funny.", "친절하고 재미있어요."],
      ["Are you close to your brother?", "형과 가까운 사이인가요?", "Yes, we talk almost every day.", "네, 거의 매일 이야기해요."],
      ["Who's the most outgoing in your family?", "가족 중 누가 가장 외향적이에요?", "My younger brother is.", "제 남동생이에요."]
    ]},
    {"title":"사진 보며 이야기","pairs":[
      ["Who is this in the photo?", "사진 속 이 사람은 누구예요?", "That's my cousin.", "제 사촌이에요."],
      ["Where was this photo taken?", "이 사진은 어디서 찍었어요?", "At my parents' house.", "부모님 집에서요."],
      ["You look alike!", "두 분 닮았네요!", "Yes, people say that a lot.", "네, 사람들이 자주 그렇게 말해요."]
    ]}
  ],
  [
    {"title":"다시 말해 달라고 하기","pairs":[
      ["Sorry, did you say fifteen?", "죄송해요, 15라고 하셨나요?", "Could you say the number again?", "숫자를 다시 말씀해 주시겠어요?"],
      ["Can you hear me?", "제 말이 들리나요?", "Yes, but could you repeat the last part?", "네, 그런데 마지막 부분을 반복해 주실래요?"],
      ["Do you understand?", "이해하셨나요?", "Not quite. Could you say it again?", "완전히는 아니에요. 다시 말씀해 주시겠어요?"]
    ]},
    {"title":"속도 조절 부탁","pairs":[
      ["Am I speaking too fast?", "제가 너무 빨리 말하나요?", "A little. Could you slow down?", "조금요. 천천히 말씀해 주실래요?"],
      ["Should I repeat that?", "다시 말씀드릴까요?", "Yes, slowly, please.", "네, 천천히 부탁해요."],
      ["Is this speed okay?", "이 속도는 괜찮나요?", "Yes, that's much better.", "네, 훨씬 좋아요."]
    ]},
    {"title":"모르는 단어 묻기","pairs":[
      ["Do you know what this means?", "이것이 무슨 뜻인지 아세요?", "No. What does it mean?", "아니요. 무슨 뜻인가요?"],
      ["Can you explain it another way?", "다른 방식으로 설명해 주실래요?", "Sure. I'll use simple words.", "물론이죠. 쉬운 단어로 말할게요."],
      ["Is this word new to you?", "이 단어는 처음 보세요?", "Yes. Can you give me an example?", "네. 예를 들어 주실래요?"]
    ]},
    {"title":"숫자와 시간 확인","pairs":[
      ["Did you say thirteen or thirty?", "13인가요, 30인가요?", "Thirty. Three zero.", "30이요. 삼 영이요."],
      ["What time did you say?", "몇 시라고 하셨죠?", "Six thirty, in the evening.", "저녁 6시 30분이요."],
      ["Is that the correct address?", "주소가 맞나요?", "Let me check one more time.", "한 번 더 확인할게요."]
    ]},
    {"title":"철자와 메모 부탁","pairs":[
      ["How do you spell that?", "철자가 어떻게 되나요?", "Could you write it down for me?", "저를 위해 적어 주실래요?"],
      ["Would you like me to text it to you?", "문자로 보내 드릴까요?", "Yes, that would help.", "네, 도움이 되겠어요."],
      ["Can you show me on the map?", "지도에서 보여 주실래요?", "Sure. It's right here.", "물론이죠. 바로 여기예요."]
    ]},
    {"title":"이해했는지 확인","pairs":[
      ["So, we meet at six, right?", "그러니까 6시에 만나는 거죠?", "Yes, that's what I meant.", "네, 그 뜻이었어요."],
      ["Does that make sense?", "이해가 되나요?", "Yes, I get it now.", "네, 이제 알겠어요."],
      ["Do you have any questions?", "질문이 있나요?", "Just one. Where should I go?", "하나만요. 어디로 가면 되나요?"]
    ]}
  ],
  [
    {"title":"음료 고르기","pairs":[
      ["What can I get you?", "무엇을 드릴까요?", "Can I get a latte, please?", "라테 한 잔 주실래요?"],
      ["Would you like it hot or iced?", "따뜻한 걸로 드릴까요, 차가운 걸로 드릴까요?", "Iced, please.", "차가운 걸로 주세요."],
      ["What size would you like?", "어떤 크기로 드릴까요?", "A medium, please.", "중간 크기로 주세요."]
    ]},
    {"title":"당도와 우유 조절","pairs":[
      ["Would you like sugar?", "설탕 넣어 드릴까요?", "No sugar, please.", "설탕은 빼 주세요."],
      ["What kind of milk would you like?", "어떤 우유를 원하세요?", "Oat milk, please.", "귀리 우유로 주세요."],
      ["Any other changes?", "다른 요청이 있나요?", "Could you make it less sweet?", "덜 달게 해 주실래요?"]
    ]},
    {"title":"추가 주문","pairs":[
      ["Anything to eat?", "먹을 것도 필요하세요?", "I'll have a sandwich too.", "샌드위치도 주세요."],
      ["Would you like another drink?", "음료를 하나 더 원하세요?", "Yes, an iced tea, please.", "네, 아이스티 주세요."],
      ["Anything else?", "더 필요한 게 있나요?", "That's all, thank you.", "이게 전부예요, 고마워요."]
    ]},
    {"title":"포장과 매장 이용","pairs":[
      ["Is that for here or to go?", "드시고 가실 건가요, 가져가실 건가요?", "To go, please.", "포장해 주세요."],
      ["Do you need a bag?", "봉투가 필요하세요?", "Yes, please.", "네, 주세요."],
      ["Would you like a lid?", "뚜껑 드릴까요?", "Yes, so I can take it with me.", "네, 가져갈 수 있게요."]
    ]},
    {"title":"계산과 적립","pairs":[
      ["How would you like to pay?", "어떻게 결제하시겠어요?", "I'll pay by card.", "카드로 결제할게요."],
      ["Would you like a receipt?", "영수증 필요하세요?", "Yes, please, just in case.", "네, 혹시 모르니 주세요."],
      ["Do you have a loyalty card?", "적립 카드가 있나요?", "No, can I get one?", "없어요. 하나 만들 수 있나요?"]
    ]},
    {"title":"주문 확인과 기다리기","pairs":[
      ["What name should I put on the order?", "주문에 어떤 이름을 적을까요?", "Min, please.", "민으로 해 주세요."],
      ["Are you waiting for your drink?", "음료를 기다리고 계신가요?", "Yes, I ordered an iced latte.", "네, 아이스 라테를 주문했어요."],
      ["Is this your coffee?", "이 커피가 고객님 건가요?", "Yes, thank you. Have a nice day!", "네, 고마워요. 좋은 하루 보내세요!"]
    ]}
  ],
  [
    {"title":"자리 요청","pairs":[
      ["Do you have a reservation?", "예약하셨나요?", "No. Do you have a table for two?", "아니요. 두 명 앉을 자리가 있나요?"],
      ["Inside or outside?", "실내와 실외 중 어디가 좋으세요?", "Inside, please.", "실내로 부탁해요."],
      ["Would this table be okay?", "이 자리는 괜찮으세요?", "Could we sit by the window?", "창가에 앉을 수 있을까요?"]
    ]},
    {"title":"메뉴 살펴보기","pairs":[
      ["Are you ready to order?", "주문하시겠어요?", "Could we have a few more minutes?", "조금만 더 시간을 주실래요?"],
      ["Do you have any questions about the menu?", "메뉴에 궁금한 점이 있나요?", "What's in this dish?", "이 요리에는 무엇이 들어가나요?"],
      ["Would you like a recommendation?", "추천해 드릴까요?", "Yes, what's popular here?", "네, 여기서는 뭐가 인기 있나요?"]
    ]},
    {"title":"음식과 음료 주문","pairs":[
      ["What would you like for your main dish?", "메인 요리는 무엇으로 드릴까요?", "I'll have the chicken, please.", "닭고기 요리 주세요."],
      ["What would you like to drink?", "음료는 무엇으로 드릴까요?", "Just water for me, please.", "저는 물만 주세요."],
      ["Would you like a side dish?", "곁들임 요리도 원하세요?", "Yes, a small salad.", "네, 작은 샐러드요."]
    ]},
    {"title":"재료와 조리 요청","pairs":[
      ["Do you have any allergies?", "알레르기가 있나요?", "Yes, I'm allergic to peanuts.", "네, 땅콩 알레르기가 있어요."],
      ["How would you like your steak?", "스테이크는 어떻게 구워 드릴까요?", "Medium, please.", "미디엄으로 부탁해요."],
      ["Would you like sauce on it?", "소스를 뿌려 드릴까요?", "Could I have the sauce on the side?", "소스를 따로 주실 수 있나요?"]
    ]},
    {"title":"식사 중 부탁","pairs":[
      ["Is everything okay?", "음식은 괜찮으세요?", "Yes, but could we have more water?", "네, 그런데 물을 더 주실래요?"],
      ["Do you need anything else?", "더 필요한 게 있나요?", "Could we have some napkins?", "냅킨 좀 주실래요?"],
      ["Would you like some pepper?", "후추 드릴까요?", "No, thank you. It's good as it is.", "아니요, 고마워요. 이대로 좋아요."]
    ]},
    {"title":"계산과 남은 음식","pairs":[
      ["Are you finished?", "식사 마치셨나요?", "Yes. Could we get the bill?", "네. 계산서 주실래요?"],
      ["Would you like to take the rest home?", "남은 음식을 가져가시겠어요?", "Yes, could you pack it up?", "네, 포장해 주실래요?"],
      ["Together or separate?", "같이 계산하시나요, 따로 하시나요?", "Separate, please.", "따로 계산할게요."]
    ]}
  ],
  [
    {"title":"물건 위치 묻기","pairs":[
      ["Can I help you find something?", "물건 찾는 걸 도와드릴까요?", "Yes, where are the eggs?", "네, 달걀은 어디 있나요?"],
      ["What are you looking for?", "무엇을 찾으세요?", "I'm looking for fresh vegetables.", "신선한 채소를 찾고 있어요."],
      ["Did you find everything?", "필요한 걸 다 찾으셨나요?", "Not yet. Where's the milk?", "아직요. 우유는 어디 있나요?"]
    ]},
    {"title":"양과 개수 고르기","pairs":[
      ["How many would you like?", "몇 개 원하세요?", "Six, please.", "여섯 개 주세요."],
      ["How much do you need?", "얼마나 필요하세요?", "About half a kilo.", "약 반 킬로그램이요."],
      ["Is this enough?", "이 정도면 충분한가요?", "A little more, please.", "조금 더 주세요."]
    ]},
    {"title":"신선도와 상태","pairs":[
      ["Are these ready to eat?", "이것들은 바로 먹을 수 있나요?", "Yes, they're ripe.", "네, 잘 익었어요."],
      ["When should I use this?", "이건 언제까지 써야 하나요?", "Within three days.", "3일 안에요."],
      ["Is this fresh?", "이건 신선한가요?", "Yes, it came in this morning.", "네, 오늘 아침에 들어왔어요."]
    ]},
    {"title":"가격과 할인","pairs":[
      ["How much are these tomatoes?", "이 토마토는 얼마예요?", "They're three dollars a kilo.", "킬로그램당 3달러예요."],
      ["Is this on sale?", "이건 할인 중인가요?", "Yes, it's twenty percent off.", "네, 20퍼센트 할인해요."],
      ["Can I get just one?", "하나만 살 수 있나요?", "Yes, you don't need the whole pack.", "네, 묶음 전체를 살 필요는 없어요."]
    ]},
    {"title":"대체품과 재료","pairs":[
      ["Do you have a smaller pack?", "더 작은 포장이 있나요?", "Yes, over here.", "네, 이쪽에 있어요."],
      ["Is there a cheaper option?", "더 저렴한 게 있나요?", "This one costs less.", "이것이 더 저렴해요."],
      ["Does this contain milk?", "여기에 우유가 들어 있나요?", "Yes, it does.", "네, 들어 있어요."]
    ]},
    {"title":"계산대에서","pairs":[
      ["Do you need a bag today?", "오늘 봉투가 필요하세요?", "No, I brought my own.", "아니요, 가져왔어요."],
      ["Cash or card?", "현금인가요, 카드인가요?", "Card, please.", "카드요."],
      ["Would you like the receipt in the bag?", "영수증을 봉투에 넣을까요?", "Yes, thank you.", "네, 고마워요."]
    ]}
  ],
  [
    {"title":"원하는 옷 찾기","pairs":[
      ["Can I help you with anything?", "도움이 필요하세요?", "I'm looking for a jacket.", "재킷을 찾고 있어요."],
      ["What color are you looking for?", "어떤 색을 찾으세요?", "Something dark, maybe navy.", "어두운 색이요, 남색 정도요."],
      ["Is this for you?", "본인이 입으실 건가요?", "Yes, it's for me.", "네, 제가 입을 거예요."]
    ]},
    {"title":"사이즈 확인","pairs":[
      ["What size do you usually wear?", "보통 어떤 사이즈를 입으세요?", "I usually wear a medium.", "보통 미디엄을 입어요."],
      ["Would you like to try a larger size?", "더 큰 사이즈를 입어 보실래요?", "Yes, this feels a little tight.", "네, 이건 조금 끼어요."],
      ["Does it fit?", "잘 맞나요?", "The sleeves are too long.", "소매가 너무 길어요."]
    ]},
    {"title":"입어 보기","pairs":[
      ["Would you like to try it on?", "입어 보시겠어요?", "Yes. Where's the fitting room?", "네. 탈의실은 어디 있나요?"],
      ["How does it feel?", "착용감이 어때요?", "It's comfortable, but a little loose.", "편하지만 조금 헐렁해요."],
      ["Can I try another one?", "다른 것을 입어 볼 수 있나요?", "Of course. Take your time.", "물론이죠. 천천히 보세요."]
    ]},
    {"title":"색상과 비교","pairs":[
      ["Do you prefer this color?", "이 색이 더 좋으세요?", "I like the blue one better.", "파란색이 더 좋아요."],
      ["Would you like to see another style?", "다른 스타일도 보실래요?", "Yes, something simpler.", "네, 더 단순한 걸로요."],
      ["Which one do you like?", "어떤 것이 마음에 드세요?", "This one, but I'm not sure yet.", "이것이요, 하지만 아직 확신이 없어요."]
    ]},
    {"title":"가격과 구매 결정","pairs":[
      ["What's your budget?", "예산이 얼마인가요?", "Around fifty dollars.", "약 50달러요."],
      ["Are you taking this one?", "이것으로 구매하시나요?", "Yes, I'll take it.", "네, 이걸로 살게요."],
      ["Would you like to keep looking?", "더 둘러보시겠어요?", "Yes, I'll think about it.", "네, 좀 생각해 볼게요."]
    ]},
    {"title":"결제와 교환 조건","pairs":[
      ["Would you like a bag for it?", "봉투에 담아 드릴까요?", "Yes, please.", "네, 부탁해요."],
      ["Do you need a gift receipt?", "선물용 영수증이 필요한가요?", "No, a regular receipt is fine.", "아니요, 일반 영수증이면 돼요."],
      ["Can I exchange it later?", "나중에 교환할 수 있나요?", "Yes, within thirty days.", "네, 30일 안에요."]
    ]}
  ],
  [
    {"title":"생활용품 찾기","pairs":[
      ["Where can I find toothpaste?", "치약은 어디에 있나요?", "It's in aisle five.", "5번 통로에 있어요."],
      ["Do you sell batteries?", "건전지 파나요?", "Yes, near the checkout.", "네, 계산대 근처에 있어요."],
      ["Can you help me find shampoo?", "샴푸 찾는 걸 도와주실래요?", "Sure, follow me.", "물론이죠, 따라오세요."]
    ]},
    {"title":"상품 종류 확인","pairs":[
      ["Do you have a travel size?", "여행용 작은 크기가 있나요?", "Yes, on the top shelf.", "네, 맨 위 선반에 있어요."],
      ["Is this the same product?", "이것은 같은 제품인가요?", "Yes, just a different size.", "네, 크기만 달라요."],
      ["Which one is better for travel?", "여행에는 어느 것이 더 좋나요?", "The smaller one is easier to carry.", "작은 것이 들고 다니기 편해요."]
    ]},
    {"title":"재고와 대안","pairs":[
      ["Is this in stock?", "이건 재고가 있나요?", "Let me check for you.", "확인해 드릴게요."],
      ["When will it be back?", "언제 다시 들어오나요?", "Probably next week.", "아마 다음 주에요."],
      ["Do you have something similar?", "비슷한 것이 있나요?", "Yes, this brand is similar.", "네, 이 브랜드가 비슷해요."]
    ]},
    {"title":"가격표 확인","pairs":[
      ["Is this price correct?", "이 가격이 맞나요?", "Yes, that's the sale price.", "네, 할인 가격이에요."],
      ["Do I need to buy two?", "두 개 사야 하나요?", "No, you can buy just one.", "아니요, 하나만 살 수 있어요."],
      ["How much is the larger pack?", "더 큰 묶음은 얼마예요?", "It's eight dollars.", "8달러예요."]
    ]},
    {"title":"도움과 부탁","pairs":[
      ["Could you reach that for me?", "저것을 꺼내 주실래요?", "Sure. This one?", "물론이죠. 이것인가요?"],
      ["Where can I get a basket?", "장바구니는 어디서 가져오나요?", "By the entrance.", "입구 옆에서요."],
      ["Is there a restroom here?", "여기에 화장실이 있나요?", "Yes, at the back.", "네, 뒤쪽에 있어요."]
    ]},
    {"title":"셀프 계산","pairs":[
      ["Have you used this machine before?", "이 기계를 사용해 보셨나요?", "No, could you show me?", "아니요, 알려 주실래요?"],
      ["Did you scan everything?", "전부 바코드를 찍으셨나요?", "I think so. Could you check?", "그런 것 같아요. 확인해 주실래요?"],
      ["Do you need help paying?", "결제하는 데 도움이 필요한가요?", "Yes, my card isn't working.", "네, 카드가 작동하지 않아요."]
    ]}
  ],
  [
    {"title":"목적지 위치","pairs":[
      ["Is there a bank nearby?", "근처에 은행이 있나요?", "Yes, just around the corner.", "네, 모퉁이를 돌면 있어요."],
      ["Where is the nearest station?", "가장 가까운 역은 어디예요?", "Go straight for two blocks.", "두 블록 곧장 가세요."],
      ["Am I close to the museum?", "박물관에 가까이 왔나요?", "Yes, it's across the street.", "네, 길 건너에 있어요."]
    ]},
    {"title":"방향 확인","pairs":[
      ["Should I turn left here?", "여기서 왼쪽으로 돌아야 하나요?", "No, turn right at the light.", "아니요, 신호등에서 오른쪽으로 도세요."],
      ["Do I keep going straight?", "계속 직진하면 되나요?", "Yes, until you see the park.", "네, 공원이 보일 때까지요."],
      ["Is it on this side of the road?", "도로 이쪽에 있나요?", "No, it's on the other side.", "아니요, 반대편에 있어요."]
    ]},
    {"title":"거리와 시간","pairs":[
      ["Can I walk there?", "걸어서 갈 수 있나요?", "Yes, it's a ten-minute walk.", "네, 걸어서 10분이에요."],
      ["Is it far from here?", "여기서 먼가요?", "Not really, about five minutes.", "그렇게 멀지 않아요, 약 5분이에요."],
      ["Would a taxi be faster?", "택시가 더 빠를까요?", "Yes, but walking is easy too.", "네, 하지만 걸어가기도 쉬워요."]
    ]},
    {"title":"길을 잃었을 때","pairs":[
      ["Are you lost?", "길을 잃으셨나요?", "Yes, I'm trying to find my hotel.", "네, 호텔을 찾으려고 해요."],
      ["Which way did you come from?", "어느 쪽에서 오셨나요?", "I came from the station.", "역에서 왔어요."],
      ["Do you have the address?", "주소가 있나요?", "Yes, here it is on my phone.", "네, 휴대폰에 있어요."]
    ]},
    {"title":"지도와 표지판","pairs":[
      ["Can you point it out on this map?", "이 지도에서 가리켜 주실래요?", "Sure, it's right here.", "물론이죠, 바로 여기예요."],
      ["Does this sign mean the exit?", "이 표지판이 출구를 뜻하나요?", "Yes, go that way.", "네, 그쪽으로 가세요."],
      ["Is this the right entrance?", "여기가 맞는 입구인가요?", "Yes, go through these doors.", "네, 이 문으로 들어가세요."]
    ]},
    {"title":"도착 확인","pairs":[
      ["Is this the city library?", "여기가 시립 도서관인가요?", "Yes, you've found it.", "네, 잘 찾으셨어요."],
      ["Where is the main entrance?", "정문은 어디인가요?", "It's on the other side.", "반대편에 있어요."],
      ["Thanks for your help.", "도와주셔서 고마워요.", "You're welcome. Have a good day.", "천만에요. 좋은 하루 보내세요."]
    ]}
  ],
  [
    {"title":"노선 고르기","pairs":[
      ["Does this bus go to the airport?", "이 버스는 공항에 가나요?", "Yes, but you need to change once.", "네, 하지만 한 번 갈아타야 해요."],
      ["Which train should I take?", "어느 기차를 타야 하나요?", "Take the blue line.", "파란색 노선을 타세요."],
      ["Is this going downtown?", "이건 시내로 가나요?", "Yes, get on here.", "네, 여기서 타세요."]
    ]},
    {"title":"표 구매","pairs":[
      ["Where can I buy a ticket?", "표는 어디서 살 수 있나요?", "At the machine over there.", "저쪽 기계에서요."],
      ["One way or round trip?", "편도인가요, 왕복인가요?", "One way, please.", "편도로 주세요."],
      ["Can I use this card?", "이 카드를 쓸 수 있나요?", "Yes, just tap it here.", "네, 여기에 대기만 하세요."]
    ]},
    {"title":"승강장과 출발","pairs":[
      ["Which platform is it?", "몇 번 승강장인가요?", "Platform three.", "3번 승강장이에요."],
      ["When is the next train?", "다음 기차는 언제 오나요?", "In about five minutes.", "약 5분 뒤에요."],
      ["Is this seat taken?", "이 자리에 누가 앉나요?", "No, go ahead.", "아니요, 앉으세요."]
    ]},
    {"title":"이동 중 확인","pairs":[
      ["How many stops is it?", "몇 정거장인가요?", "Four stops from here.", "여기서 네 정거장이에요."],
      ["Do I need to transfer?", "갈아타야 하나요?", "Yes, at the next station.", "네, 다음 역에서요."],
      ["Could you tell me when to get off?", "언제 내려야 하는지 알려 주실래요?", "Sure, I'll let you know.", "물론이죠, 알려 드릴게요."]
    ]},
    {"title":"문제 상황","pairs":[
      ["Did I miss my stop?", "내릴 곳을 지나쳤나요?", "Yes, get off at the next one.", "네, 다음 정거장에서 내리세요."],
      ["Is the train delayed?", "기차가 지연됐나요?", "Yes, by about ten minutes.", "네, 약 10분 지연됐어요."],
      ["Why isn't my card working?", "왜 카드가 안 되나요?", "You need to add more money.", "돈을 더 충전해야 해요."]
    ]},
    {"title":"택시 이용","pairs":[
      ["Where would you like to go?", "어디로 가시겠어요?", "To this address, please.", "이 주소로 가 주세요."],
      ["Could you stop here?", "여기에 세워 주실래요?", "Sure, I'll pull over.", "물론이죠, 차를 세울게요."],
      ["Can I pay by card in the taxi?", "택시에서 카드로 결제할 수 있나요?", "Yes, that's fine.", "네, 괜찮아요."]
    ]}
  ],
  [
    {"title":"예약 확인","pairs":[
      ["What name is the booking under?", "예약자 이름이 무엇인가요?", "It's under Min Kim.", "민 김으로 되어 있어요."],
      ["How many nights are you staying?", "며칠 묵으시나요?", "Three nights.", "3박이요."],
      ["May I see your passport?", "여권을 볼 수 있을까요?", "Sure, here you are.", "물론이죠, 여기 있어요."]
    ]},
    {"title":"체크인 시간","pairs":[
      ["Can I check in early?", "일찍 체크인할 수 있나요?", "Let me see if your room is ready.", "객실이 준비됐는지 확인할게요."],
      ["When will the room be ready?", "객실은 언제 준비되나요?", "Around two o'clock.", "2시쯤이에요."],
      ["Can you store my bags?", "짐을 보관해 주실 수 있나요?", "Of course, leave them here.", "물론이죠, 여기에 두세요."]
    ]},
    {"title":"객실과 위치","pairs":[
      ["What floor is my room on?", "제 객실은 몇 층인가요?", "On the fifth floor.", "5층이에요."],
      ["Where is the elevator?", "엘리베이터는 어디인가요?", "Just past the front desk.", "프런트 데스크를 지나면 있어요."],
      ["How do I use the key card?", "카드 키는 어떻게 쓰나요?", "Hold it against the door.", "문에 대세요."]
    ]},
    {"title":"시설 안내","pairs":[
      ["Is breakfast included?", "조식이 포함되어 있나요?", "Yes, from seven to ten.", "네, 7시부터 10시까지예요."],
      ["Is there a gym?", "헬스장이 있나요?", "Yes, on the second floor.", "네, 2층에 있어요."],
      ["Where can I get drinking water?", "마실 물은 어디서 받을 수 있나요?", "There's a machine in the lobby.", "로비에 기계가 있어요."]
    ]},
    {"title":"와이파이와 결제","pairs":[
      ["What's the Wi-Fi password?", "와이파이 비밀번호는 뭔가요?", "It's on your key card holder.", "카드 키 케이스에 적혀 있어요."],
      ["Do I need to pay now?", "지금 결제해야 하나요?", "Yes, please.", "네, 부탁드립니다."],
      ["Is there a deposit?", "보증금이 있나요?", "Yes, we'll explain it before payment.", "네, 결제 전에 안내해 드릴게요."]
    ]},
    {"title":"체크아웃 준비","pairs":[
      ["What time is checkout?", "체크아웃은 몇 시인가요?", "By eleven in the morning.", "오전 11시까지예요."],
      ["Can I check out later?", "늦게 체크아웃할 수 있나요?", "Let me check the availability.", "가능한지 확인할게요."],
      ["Can you call a taxi for me?", "택시를 불러 주실 수 있나요?", "Sure. Where are you going?", "물론이죠. 어디로 가시나요?"]
    ]}
  ],
  [
    {"title":"수건과 물 요청","pairs":[
      ["What can I bring you?", "무엇을 가져다드릴까요?", "Two extra towels, please.", "수건 두 장 더 주세요."],
      ["Do you need anything for your room?", "객실에 필요한 것이 있나요?", "Could I get another bottle of water?", "물 한 병 더 받을 수 있나요?"],
      ["How many pillows do you need?", "베개가 몇 개 필요하세요?", "One more would be great.", "하나 더 주시면 좋겠어요."]
    ]},
    {"title":"객실 청소","pairs":[
      ["Would you like your room cleaned?", "객실을 청소해 드릴까요?", "Yes, while I'm out, please.", "네, 제가 나가 있는 동안 부탁해요."],
      ["Can we come in now?", "지금 들어가도 될까요?", "Could you come back in an hour?", "한 시간 뒤에 다시 와 주실래요?"],
      ["Do you need fresh sheets?", "새 침대 시트가 필요하세요?", "Yes, please change them.", "네, 바꿔 주세요."]
    ]},
    {"title":"온도와 소음","pairs":[
      ["What's wrong with the room?", "객실에 무슨 문제가 있나요?", "The air conditioner isn't working.", "에어컨이 작동하지 않아요."],
      ["Is it too cold?", "너무 추운가요?", "Yes, could I get an extra blanket?", "네, 담요를 하나 더 받을 수 있나요?"],
      ["Is the noise coming from outside?", "소음이 밖에서 나나요?", "No, from the room next door.", "아니요, 옆방에서 나요."]
    ]},
    {"title":"비품과 고장","pairs":[
      ["Is something missing?", "뭔가 빠져 있나요?", "There's no hair dryer.", "헤어드라이어가 없어요."],
      ["What's the problem with the door?", "문에 무슨 문제가 있나요?", "My key card doesn't work.", "카드 키가 작동하지 않아요."],
      ["Can someone check the shower?", "누군가 샤워기를 확인해 주실 수 있나요?", "Yes, we'll send someone up.", "네, 직원을 보내 드릴게요."]
    ]},
    {"title":"요청 진행 확인","pairs":[
      ["Has someone come to your room yet?", "아직 직원이 객실에 왔나요?", "Not yet. I'm still waiting.", "아직요. 계속 기다리고 있어요."],
      ["Can we help you with anything else?", "또 도와드릴 것이 있나요?", "Could you tell me how long it will take?", "얼마나 걸리는지 알려 주실래요?"],
      ["Is the problem fixed now?", "이제 문제가 해결됐나요?", "Yes, thank you for your help.", "네, 도와주셔서 고마워요."]
    ]},
    {"title":"객실 변경","pairs":[
      ["Would you like another room?", "다른 객실을 원하세요?", "Yes, a quieter room, please.", "네, 더 조용한 객실로 부탁해요."],
      ["Is this room better?", "이 객실이 더 괜찮나요?", "Yes, this is much better.", "네, 훨씬 좋아요."],
      ["Do you need help with your bags?", "짐 옮기는 데 도움이 필요한가요?", "Yes, that would be helpful.", "네, 도움이 되겠어요."]
    ]}
  ],
  [
    {"title":"항공편 확인","pairs":[
      ["Where are you flying today?", "오늘 어디로 가시나요?", "I'm flying to Seoul.", "서울로 가요."],
      ["May I see your ticket?", "표를 볼 수 있을까요?", "Yes, it's on my phone.", "네, 휴대폰에 있어요."],
      ["Are you traveling alone?", "혼자 여행하시나요?", "Yes, just me.", "네, 저 혼자예요."]
    ]},
    {"title":"수하물과 좌석","pairs":[
      ["How many bags are you checking?", "짐을 몇 개 부치시나요?", "Just one bag.", "가방 하나요."],
      ["Do you have any carry-on bags?", "기내에 가져갈 가방이 있나요?", "Yes, this small backpack.", "네, 이 작은 배낭이요."],
      ["Window or aisle?", "창가인가요, 통로인가요?", "An aisle seat, please.", "통로 자리로 부탁해요."]
    ]},
    {"title":"보안 검색","pairs":[
      ["Could you take your laptop out?", "노트북을 꺼내 주시겠어요?", "Sure. Should I put it here?", "물론이죠. 여기에 놓으면 되나요?"],
      ["Do I need to take off my shoes?", "신발을 벗어야 하나요?", "Yes, please.", "네, 부탁드립니다."],
      ["Can I bring this water through?", "이 물을 가지고 통과할 수 있나요?", "Please check with the security staff.", "보안 직원에게 확인해 주세요."]
    ]},
    {"title":"탑승구 찾기","pairs":[
      ["Where is gate twelve?", "12번 탑승구는 어디인가요?", "Go straight and turn left.", "직진해서 왼쪽으로 도세요."],
      ["Has boarding started?", "탑승이 시작됐나요?", "Not yet. Please wait here.", "아직요. 여기서 기다려 주세요."],
      ["Is this the flight to Seoul?", "이것이 서울행 항공편인가요?", "Yes, you're at the right gate.", "네, 맞는 탑승구에 오셨어요."]
    ]},
    {"title":"지연과 안내","pairs":[
      ["Has the gate changed?", "탑승구가 바뀌었나요?", "Yes, it's now gate twenty.", "네, 이제 20번 탑승구예요."],
      ["How long is the delay?", "얼마나 지연됐나요?", "About thirty minutes.", "약 30분이요."],
      ["Where can I get an update?", "새 안내를 어디서 확인하나요?", "Check the screen over there.", "저쪽 화면을 확인하세요."]
    ]},
    {"title":"도착과 입국","pairs":[
      ["What's the purpose of your visit?", "방문 목적이 무엇인가요?", "I'm here on vacation.", "휴가로 왔어요."],
      ["How long will you stay?", "얼마나 머무를 예정인가요?", "For one week.", "일주일이요."],
      ["Where will you be staying?", "어디에서 머무르실 건가요?", "At a hotel downtown.", "시내 호텔에서요."]
    ]}
  ],
  [
    {"title":"시간 제안","pairs":[
      ["Are you free this weekend?", "이번 주말에 시간 있나요?", "Yes, Saturday works for me.", "네, 토요일이면 좋아요."],
      ["When would you like to meet?", "언제 만나고 싶으세요?", "How about Friday evening?", "금요일 저녁은 어때요?"],
      ["Does six o'clock work for you?", "6시는 괜찮으세요?", "Could we make it seven?", "7시로 할 수 있을까요?"]
    ]},
    {"title":"장소 고르기","pairs":[
      ["Where should we meet?", "어디서 만날까요?", "Let's meet at the station.", "역에서 만나요."],
      ["Do you know this cafe?", "이 카페를 아세요?", "Yes, it's easy to find.", "네, 찾기 쉬워요."],
      ["Should we meet inside?", "안에서 만날까요?", "Let's meet by the entrance.", "입구 옆에서 만나요."]
    ]},
    {"title":"약속 확인","pairs":[
      ["Are we still on for tonight?", "오늘 저녁 약속은 그대로인가요?", "Yes, see you at seven.", "네, 7시에 봐요."],
      ["Did you get my message?", "제 메시지 받으셨나요?", "Yes, I'll be there.", "네, 갈게요."],
      ["Should I book a table?", "자리를 예약할까요?", "Yes, for two people.", "네, 두 명으로요."]
    ]},
    {"title":"늦을 때 연락","pairs":[
      ["Are you on your way?", "오고 계신가요?", "Yes, but I'm running late.", "네, 그런데 조금 늦을 것 같아요."],
      ["How late will you be?", "얼마나 늦으실 것 같나요?", "About ten minutes. Sorry!", "약 10분이요. 미안해요!"],
      ["Should I wait outside?", "밖에서 기다릴까요?", "Please go inside. I'll find you.", "안에 들어가세요. 제가 찾아갈게요."]
    ]},
    {"title":"일정 변경","pairs":[
      ["Can we change the time?", "시간을 바꿀 수 있나요?", "Sure, what time is better?", "물론이죠, 언제가 더 좋으세요?"],
      ["Would tomorrow be okay?", "내일은 괜찮을까요?", "Yes, tomorrow is fine.", "네, 내일 괜찮아요."],
      ["Can we meet next week instead?", "대신 다음 주에 만날 수 있나요?", "Of course. Let's check our schedules.", "물론이죠. 일정을 확인해 봐요."]
    ]},
    {"title":"만난 뒤 다음 약속","pairs":[
      ["Was it easy to get here?", "여기 오기 쉬웠나요?", "Yes, your directions helped.", "네, 알려 주신 길 안내가 도움이 됐어요."],
      ["Would you like to meet again?", "다시 만나실래요?", "I'd love to. Maybe next weekend?", "좋아요. 다음 주말은 어떨까요?"],
      ["Text me when you get home.", "집에 도착하면 문자 주세요.", "I will. Thanks for today!", "그럴게요. 오늘 고마웠어요!"]
    ]}
  ],
  [
    {"title":"도움 부탁","pairs":[
      ["Do you need a hand?", "도움이 필요하세요?", "Yes, could you help me with this?", "네, 이것 좀 도와주실래요?"],
      ["What do you need help with?", "어떤 도움이 필요하세요?", "I'm not sure how to use this program.", "이 프로그램 쓰는 법을 잘 모르겠어요."],
      ["Is now a good time?", "지금 시간 괜찮으세요?", "Yes, I have a few minutes.", "네, 몇 분 정도 괜찮아요."]
    ]},
    {"title":"업무 설명 확인","pairs":[
      ["Do you understand the task?", "업무를 이해하셨나요?", "Mostly. Could you explain this part?", "대체로요. 이 부분을 설명해 주실래요?"],
      ["Which part is unclear?", "어느 부분이 명확하지 않나요?", "The last step.", "마지막 단계요."],
      ["Would an example help?", "예가 있으면 도움이 될까요?", "Yes, that would help a lot.", "네, 큰 도움이 되겠어요."]
    ]},
    {"title":"자료와 파일","pairs":[
      ["Did you get the file?", "파일을 받으셨나요?", "Not yet. Could you send it again?", "아직요. 다시 보내 주실래요?"],
      ["Can you open the document?", "문서를 열 수 있나요?", "No, I don't have access.", "아니요, 접근 권한이 없어요."],
      ["Where should I save this?", "이것을 어디에 저장하나요?", "In the shared folder.", "공유 폴더에요."]
    ]},
    {"title":"시간과 마감","pairs":[
      ["When do you need this?", "이것이 언제까지 필요하세요?", "By tomorrow afternoon.", "내일 오후까지요."],
      ["Can you finish it today?", "오늘 끝낼 수 있나요?", "I can finish most of it.", "대부분은 끝낼 수 있어요."],
      ["Do you need more time?", "시간이 더 필요하세요?", "Yes, one more day, please.", "네, 하루만 더 주세요."]
    ]},
    {"title":"확인과 수정","pairs":[
      ["Could you check my work?", "제가 한 일을 확인해 주실래요?", "Sure, send it to me.", "물론이죠, 보내 주세요."],
      ["Is this what you wanted?", "원하신 것이 이것인가요?", "Yes, but please change the title.", "네, 하지만 제목을 바꿔 주세요."],
      ["Have you fixed the problem?", "문제를 고쳤나요?", "Yes, it works now.", "네, 이제 잘 돼요."]
    ]},
    {"title":"감사와 도움 제안","pairs":[
      ["Thanks for showing me.", "알려 주셔서 고마워요.", "No problem. Just ask if you need help.", "괜찮아요. 도움이 필요하면 말씀하세요."],
      ["Can I help with anything?", "제가 도울 것이 있나요?", "Could you check these numbers?", "이 숫자들을 확인해 주실래요?"],
      ["How did it go?", "어떻게 됐나요?", "Much better, thanks to you.", "덕분에 훨씬 좋아졌어요."]
    ]}
  ],
  [
    {"title":"회의 시작","pairs":[
      ["Can everyone hear me?", "모두 제 말이 들리나요?", "Yes, we can hear you.", "네, 들려요."],
      ["Are we ready to start?", "시작할 준비 됐나요?", "Yes, let's get started.", "네, 시작해요."],
      ["What's today's meeting about?", "오늘 회의는 무엇에 관한 건가요?", "It's about the new schedule.", "새 일정에 관한 거예요."]
    ]},
    {"title":"의견 말하기","pairs":[
      ["What do you think?", "어떻게 생각하세요?", "I think we need more time.", "시간이 더 필요하다고 생각해요."],
      ["Do you agree with this idea?", "이 생각에 동의하시나요?", "Yes, it sounds practical.", "네, 실용적으로 들려요."],
      ["Would you like to add anything?", "덧붙이고 싶은 것이 있나요?", "Yes, I have one suggestion.", "네, 제안이 하나 있어요."]
    ]},
    {"title":"다른 의견 조심스럽게","pairs":[
      ["Do you see any problems?", "문제점이 보이나요?", "I'm a little worried about the cost.", "비용이 조금 걱정돼요."],
      ["Would another option work?", "다른 방법은 괜찮을까요?", "Maybe we could try a smaller version.", "작은 규모로 시도해 볼 수도 있겠어요."],
      ["Why do you prefer that option?", "왜 그 방법을 더 좋아하시나요?", "It's simpler and costs less.", "더 단순하고 비용이 적게 들어요."]
    ]},
    {"title":"발언과 질문","pairs":[
      ["Did you want to say something?", "말씀하실 것이 있나요?", "Yes, can I ask a quick question?", "네, 간단한 질문 하나 해도 되나요?"],
      ["Could you explain that point?", "그 부분을 설명해 주실래요?", "Sure. Let me give you an example.", "물론이죠. 예를 하나 들어 볼게요."],
      ["Can we go back to the first point?", "첫 번째 내용으로 돌아갈 수 있나요?", "Yes, let's look at it again.", "네, 다시 살펴봐요."]
    ]},
    {"title":"일정과 담당자","pairs":[
      ["Who will handle this?", "누가 이것을 담당하나요?", "I can take care of it.", "제가 맡을 수 있어요."],
      ["When can we review it?", "언제 검토할 수 있나요?", "How about Monday morning?", "월요일 아침은 어때요?"],
      ["Do you need anything from us?", "저희에게 필요한 것이 있나요?", "Yes, please send me your notes.", "네, 메모를 보내 주세요."]
    ]},
    {"title":"회의 마무리","pairs":[
      ["What are the next steps?", "다음 단계는 무엇인가요?", "We'll update the plan and share it.", "계획을 수정하고 공유할 거예요."],
      ["Is there anything else?", "다른 내용이 있나요?", "No, that's all from me.", "아니요, 저는 그게 전부예요."],
      ["Can you send a summary?", "요약을 보내 주실래요?", "Yes, I'll send it after the meeting.", "네, 회의 후에 보낼게요."]
    ]}
  ],
  [
    {"title":"취미 소개","pairs":[
      ["What do you do for fun?", "재미로 무엇을 하세요?", "I enjoy taking photos.", "사진 찍는 것을 즐겨요."],
      ["How did you get into it?", "어떻게 그것을 시작하게 됐나요?", "A friend introduced me to it.", "친구가 소개해 줬어요."],
      ["How long have you been doing it?", "그것을 한 지 얼마나 됐나요?", "For about a year.", "약 1년이요."]
    ]},
    {"title":"빈도와 시간","pairs":[
      ["How often do you exercise?", "얼마나 자주 운동하세요?", "Three times a week.", "일주일에 세 번요."],
      ["When do you usually go?", "보통 언제 가세요?", "After work, if I have time.", "시간이 있으면 퇴근 후에요."],
      ["How long do you practice?", "얼마나 오래 연습하세요?", "About thirty minutes a day.", "하루 약 30분이요."]
    ]},
    {"title":"운동 함께하기","pairs":[
      ["Do you want to go for a run?", "달리러 가실래요?", "Sure, but let's take it slow.", "좋아요, 하지만 천천히 해요."],
      ["Have you tried yoga?", "요가 해 보셨어요?", "Not yet, but I'd like to.", "아직요, 하지만 해 보고 싶어요."],
      ["Can I join you?", "함께해도 될까요?", "Of course. The more, the better.", "물론이죠. 많을수록 좋아요."]
    ]},
    {"title":"장비와 장소","pairs":[
      ["Do I need special shoes?", "특별한 신발이 필요한가요?", "No, comfortable shoes are fine.", "아니요, 편한 신발이면 돼요."],
      ["Where do you usually play?", "보통 어디에서 하세요?", "At the park near my house.", "집 근처 공원에서요."],
      ["Can I borrow your racket?", "라켓을 빌릴 수 있나요?", "Sure, I have an extra one.", "물론이죠, 하나 더 있어요."]
    ]},
    {"title":"초보라고 말하기","pairs":[
      ["Have you played before?", "전에 해 보셨어요?", "No, I'm a beginner.", "아니요, 초보예요."],
      ["Would you like me to show you?", "제가 보여 드릴까요?", "Yes, please show me the basics.", "네, 기본을 보여 주세요."],
      ["How was your first class?", "첫 수업은 어땠나요?", "It was hard, but I enjoyed it.", "어려웠지만 즐거웠어요."]
    ]},
    {"title":"느낌과 다음 계획","pairs":[
      ["Did you have fun?", "즐거웠나요?", "Yes, I'd like to do it again.", "네, 다시 하고 싶어요."],
      ["Are you sore today?", "오늘 근육이 뻐근한가요?", "A little, but I'm okay.", "조금요, 하지만 괜찮아요."],
      ["Shall we do this next week?", "다음 주에 또 할까요?", "Yes, same time next week.", "네, 다음 주 같은 시간에요."]
    ]}
  ],
  [
    {"title":"무엇을 했는지","pairs":[
      ["Did you have a good weekend?", "주말 잘 보내셨어요?", "Yes, I spent time with friends.", "네, 친구들과 시간을 보냈어요."],
      ["Did you go anywhere?", "어디 가셨나요?", "I went to a nearby beach.", "근처 해변에 갔어요."],
      ["Did you stay home?", "집에 계셨나요?", "Yes, I just relaxed at home.", "네, 그냥 집에서 쉬었어요."]
    ]},
    {"title":"함께한 사람","pairs":[
      ["Who did you go with?", "누구와 함께 갔나요?", "With my sister.", "누나와요."],
      ["Did you meet anyone new?", "새로운 사람을 만났나요?", "Yes, a friend of a friend.", "네, 친구의 친구를 만났어요."],
      ["Was your family there too?", "가족도 거기에 있었나요?", "Yes, we all had lunch together.", "네, 모두 함께 점심을 먹었어요."]
    ]},
    {"title":"음식과 장소","pairs":[
      ["What did you eat?", "무엇을 먹었나요?", "We tried a new noodle place.", "새로운 국숫집에 가 봤어요."],
      ["How was the restaurant?", "식당은 어땠나요?", "The food was great, but it was busy.", "음식은 좋았지만 붐볐어요."],
      ["Would you go there again?", "거기에 다시 가시겠어요?", "Yes, definitely.", "네, 꼭요."]
    ]},
    {"title":"뜻밖의 일","pairs":[
      ["Did anything interesting happen?", "재미있는 일이 있었나요?", "I ran into an old friend.", "옛 친구를 우연히 만났어요."],
      ["Was the weather okay?", "날씨는 괜찮았나요?", "It rained, so we stayed inside.", "비가 와서 실내에 있었어요."],
      ["Did everything go as planned?", "모든 게 계획대로 됐나요?", "Not really, but we had fun.", "그렇지는 않았지만 즐거웠어요."]
    ]},
    {"title":"좋았던 점","pairs":[
      ["What was the best part?", "무엇이 가장 좋았나요?", "Watching the sunset.", "노을을 본 것이요."],
      ["Did you enjoy the trip?", "여행이 즐거웠나요?", "Yes, it was just what I needed.", "네, 꼭 필요한 시간이었어요."],
      ["Was it worth going?", "갈 만했나요?", "Yes, I'd recommend it.", "네, 추천하고 싶어요."]
    ]},
    {"title":"다음 주말 이야기","pairs":[
      ["Any plans for next weekend?", "다음 주말 계획이 있나요?", "I might go hiking.", "등산하러 갈 수도 있어요."],
      ["Will you do the same thing again?", "같은 것을 또 하실 건가요?", "Maybe, if the weather is nice.", "아마요, 날씨가 좋으면요."],
      ["Can I come next time?", "다음번에 함께 가도 되나요?", "Of course. I'll let you know.", "물론이죠. 알려 드릴게요."]
    ]}
  ],
  [
    {"title":"주문 내용 확인","pairs":[
      ["Is this what you ordered?", "주문하신 것이 이것인가요?", "I ordered the chicken, not the beef.", "저는 소고기가 아니라 닭고기를 주문했어요."],
      ["What's missing from your order?", "주문에서 무엇이 빠졌나요?", "The fries are missing.", "감자튀김이 빠졌어요."],
      ["Did you order two drinks?", "음료 두 잔을 주문하셨나요?", "Yes, but we only got one.", "네, 그런데 한 잔만 받았어요."]
    ]},
    {"title":"옵션이 다를 때","pairs":[
      ["Is there a problem with your coffee?", "커피에 문제가 있나요?", "I asked for no sugar.", "설탕을 빼 달라고 했어요."],
      ["Did you want it hot?", "따뜻한 것을 원하셨나요?", "No, I wanted it iced.", "아니요, 차가운 것을 원했어요."],
      ["Was the sauce meant to be separate?", "소스를 따로 드리기로 했나요?", "Yes, on the side, please.", "네, 따로 부탁해요."]
    ]},
    {"title":"상태 설명","pairs":[
      ["Is your food okay?", "음식은 괜찮나요?", "It's a little cold.", "조금 차가워요."],
      ["What seems to be wrong?", "무슨 문제가 있나요?", "This isn't cooked enough for me.", "제게는 충분히 익지 않았어요."],
      ["Is it too spicy?", "너무 매운가요?", "Yes, I can't eat this.", "네, 이건 먹을 수 없어요."]
    ]},
    {"title":"교체 요청","pairs":[
      ["Would you like us to replace it?", "바꿔 드릴까요?", "Yes, please bring the correct one.", "네, 맞는 것으로 가져다주세요."],
      ["Would another dish be better?", "다른 요리가 더 좋을까요?", "Yes, could I have the soup instead?", "네, 대신 수프로 받을 수 있나요?"],
      ["Can we make you a new drink?", "새 음료를 만들어 드릴까요?", "Yes, without milk this time.", "네, 이번에는 우유 없이요."]
    ]},
    {"title":"기다리는 시간","pairs":[
      ["How long have you been waiting?", "얼마나 기다리셨나요?", "About twenty minutes.", "약 20분이요."],
      ["Can you wait a few more minutes?", "몇 분 더 기다릴 수 있나요?", "Yes, but could you check on it?", "네, 하지만 확인해 주실래요?"],
      ["Has your replacement arrived?", "교체 음식이 나왔나요?", "Not yet. Could you ask the kitchen?", "아직요. 주방에 물어봐 주실래요?"]
    ]},
    {"title":"해결과 계산 확인","pairs":[
      ["Is this better now?", "이제 더 괜찮나요?", "Yes, that's what I ordered.", "네, 제가 주문한 것이에요."],
      ["Does the bill look right?", "계산서는 맞나요?", "There's an extra drink on it.", "음료 하나가 더 적혀 있어요."],
      ["We're sorry about the mistake.", "실수해서 죄송해요.", "That's okay. Thanks for fixing it.", "괜찮아요. 해결해 주셔서 고마워요."]
    ]}
  ],
  [
    {"title":"증상 설명","pairs":[
      ["How can I help you today?", "오늘 어떻게 도와드릴까요?", "I have a headache.", "머리가 아파요."],
      ["What symptoms do you have?", "어떤 증상이 있나요?", "I have a sore throat and a cough.", "목이 아프고 기침이 나요."],
      ["When did it start?", "언제 시작됐나요?", "Yesterday evening.", "어제 저녁이요."]
    ]},
    {"title":"증상 정도와 기간","pairs":[
      ["How long have you felt this way?", "이런 상태가 얼마나 됐나요?", "For two days.", "이틀이요."],
      ["Do you have a fever?", "열이 있나요?", "I'm not sure. I haven't checked.", "잘 모르겠어요. 확인하지 않았어요."],
      ["Is the pain getting worse?", "통증이 심해지나요?", "Yes, it's worse than yesterday.", "네, 어제보다 심해요."]
    ]},
    {"title":"안전 정보 전달","pairs":[
      ["Are you taking any medicine?", "복용 중인 약이 있나요?", "Yes, here's the list.", "네, 여기 목록이 있어요."],
      ["Are you allergic to any medicine?", "약 알레르기가 있나요?", "Yes, I need to check the ingredients.", "네, 성분을 확인해야 해요."],
      ["Is this for an adult?", "성인이 사용할 건가요?", "Yes, it's for me.", "네, 제가 사용할 거예요."]
    ]},
    {"title":"복용 안내 묻기","pairs":[
      ["How should I take this?", "이것을 어떻게 복용해야 하나요?", "Please follow the pharmacist's instructions.", "약사의 안내를 따라 주세요."],
      ["Should I take it with food?", "음식과 함께 복용해야 하나요?", "Please check the label with the pharmacist.", "약사와 함께 라벨을 확인해 주세요."],
      ["Could this make me sleepy?", "이것 때문에 졸릴 수 있나요?", "Ask the pharmacist before taking it.", "복용 전에 약사에게 물어보세요."]
    ]},
    {"title":"전문가 도움 요청","pairs":[
      ["Should I see a doctor?", "의사를 만나야 하나요?", "Please ask a medical professional.", "의료 전문가에게 문의해 주세요."],
      ["Is there a clinic nearby?", "근처에 병원이 있나요?", "Yes, there's one across the street.", "네, 길 건너에 하나 있어요."],
      ["Could you write that down?", "그 내용을 적어 주실래요?", "Sure, I'll write the instructions.", "물론이죠, 안내 내용을 적을게요."]
    ]},
    {"title":"확인과 마무리","pairs":[
      ["Can you explain that again?", "다시 설명해 주실래요?", "Of course. Which part was unclear?", "물론이죠. 어떤 부분이 이해가 안 됐나요?"],
      ["Can I ask one more question?", "질문 하나 더 해도 되나요?", "Yes, go ahead.", "네, 말씀하세요."],
      ["Do you understand the directions?", "안내 내용을 이해하셨나요?", "Yes, I'll check before taking it.", "네, 복용 전에 확인할게요."]
    ]}
  ],
  [
    {"title":"반품 이유","pairs":[
      ["Why would you like to return it?", "왜 반품하고 싶으세요?", "It doesn't fit.", "사이즈가 맞지 않아요."],
      ["Is there something wrong with it?", "물건에 문제가 있나요?", "Yes, it stopped working.", "네, 작동이 멈췄어요."],
      ["Have you used it?", "사용하셨나요?", "Only once, to try it.", "시험해 보려고 한 번만요."]
    ]},
    {"title":"영수증과 구매 내역","pairs":[
      ["Do you have the receipt with you?", "영수증을 가지고 있나요?", "Yes, here it is.", "네, 여기 있어요."],
      ["When did you buy it?", "언제 구매하셨나요?", "Last Saturday.", "지난 토요일이요."],
      ["Did you buy it here?", "여기서 구매하셨나요?", "Yes, at this store.", "네, 이 매장에서요."]
    ]},
    {"title":"교환 선택","pairs":[
      ["Would you prefer an exchange?", "교환이 더 좋으세요?", "Yes, for a larger size.", "네, 더 큰 사이즈로요."],
      ["Do you want the same color?", "같은 색을 원하세요?", "Yes, if you have it.", "네, 있다면요."],
      ["Would this one work?", "이것은 괜찮을까요?", "Yes, can I try it first?", "네, 먼저 입어 봐도 되나요?"]
    ]},
    {"title":"환불 방식","pairs":[
      ["How did you pay originally?", "처음에 어떻게 결제하셨나요?", "By credit card.", "신용카드로요."],
      ["Do you have that card with you?", "그 카드를 가지고 있나요?", "Yes, I do.", "네, 있어요."],
      ["Would store credit be okay?", "매장 적립금으로 받아도 괜찮나요?", "I'd prefer a refund, if possible.", "가능하면 환불을 받고 싶어요."]
    ]},
    {"title":"조건과 처리 시간","pairs":[
      ["Is the tag still attached?", "태그가 아직 붙어 있나요?", "Yes, I haven't removed it.", "네, 떼지 않았어요."],
      ["How long will the refund take?", "환불은 얼마나 걸리나요?", "Please check with your card company.", "카드사에 확인해 주세요."],
      ["Can I return an online order here?", "온라인 주문을 여기서 반품할 수 있나요?", "Let me check our policy.", "매장 정책을 확인할게요."]
    ]},
    {"title":"처리 확인","pairs":[
      ["Is there anything else to fill out?", "더 작성할 것이 있나요?", "Just your name here.", "여기에 이름만요."],
      ["Will I get a confirmation?", "처리 확인을 받을 수 있나요?", "Yes, we'll email it to you.", "네, 이메일로 보내 드릴게요."],
      ["Has the return been processed?", "반품 처리가 됐나요?", "Yes, you're all set.", "네, 모두 처리됐어요."]
    ]}
  ],
  [
    {"title":"분실 신고","pairs":[
      ["What have you lost?", "무엇을 잃어버리셨나요?", "I can't find my wallet.", "지갑을 찾을 수 없어요."],
      ["Where did you last see it?", "마지막으로 어디서 봤나요?", "On the bus, I think.", "버스에서였던 것 같아요."],
      ["When did you notice it was missing?", "없어진 것을 언제 알았나요?", "About an hour ago.", "약 한 시간 전이요."]
    ]},
    {"title":"물건 특징 설명","pairs":[
      ["What color is your bag?", "가방이 무슨 색인가요?", "It's black with a brown strap.", "갈색 끈이 있는 검은색이에요."],
      ["Is there anything inside?", "안에 무엇이 있나요?", "My keys and a notebook.", "열쇠와 공책이요."],
      ["Does it have your name on it?", "이름이 적혀 있나요?", "Yes, on a tag inside.", "네, 안쪽 태그에요."]
    ]},
    {"title":"분실물 센터","pairs":[
      ["Where is the lost and found?", "분실물 센터는 어디인가요?", "Near the main entrance.", "정문 근처에요."],
      ["Has anyone handed in a phone?", "누가 휴대폰을 맡겼나요?", "Let me check for you.", "확인해 드릴게요."],
      ["Is this your bag?", "이것이 고객님 가방인가요?", "Yes, that's mine!", "네, 제 것이에요!"]
    ]},
    {"title":"연락처 남기기","pairs":[
      ["Can we contact you if we find it?", "찾으면 연락드려도 되나요?", "Yes, here's my phone number.", "네, 제 전화번호예요."],
      ["Do you have an email address?", "이메일 주소가 있나요?", "Yes, I'll write it down.", "네, 적어 드릴게요."],
      ["Where are you staying?", "어디에 머무르시나요?", "At the hotel across the street.", "길 건너 호텔에요."]
    ]},
    {"title":"추가 도움 요청","pairs":[
      ["Have you checked the cafe?", "카페는 확인해 보셨나요?", "Not yet. I'll ask there too.", "아직요. 거기에도 물어볼게요."],
      ["Do you need to report it?", "신고해야 하나요?", "Yes, where can I do that?", "네, 어디서 할 수 있나요?"],
      ["Can someone help me make a call?", "누가 전화하는 걸 도와줄 수 있나요?", "Sure, you can use this phone.", "물론이죠, 이 전화를 쓰세요."]
    ]},
    {"title":"찾은 뒤 확인","pairs":[
      ["Can you describe what's inside?", "안에 무엇이 있는지 설명해 주실래요?", "A blue notebook and two keys.", "파란 공책과 열쇠 두 개요."],
      ["Can you show some ID?", "신분증을 보여 주실래요?", "Yes, here's my passport.", "네, 여기 여권이 있어요."],
      ["Is everything there?", "모두 들어 있나요?", "Yes, thank you so much.", "네, 정말 고마워요."]
    ]}
  ],
  [
    {"title":"전화 시작","pairs":[
      ["How can I help you?", "어떻게 도와드릴까요?", "I'd like to make a reservation.", "예약하고 싶어요."],
      ["What date are you calling about?", "어느 날짜를 문의하시나요?", "This Friday, please.", "이번 금요일이요."],
      ["How many people is it for?", "몇 명 예약인가요?", "For two people.", "두 명이요."]
    ]},
    {"title":"시간과 자리 확인","pairs":[
      ["What time would you like?", "몇 시를 원하세요?", "Around seven in the evening.", "저녁 7시쯤요."],
      ["Would seven thirty work?", "7시 30분은 괜찮으세요?", "Yes, that works.", "네, 괜찮아요."],
      ["Do you have anything earlier?", "더 이른 시간이 있나요?", "We have a table at six.", "6시에 자리가 있어요."]
    ]},
    {"title":"예약자 정보","pairs":[
      ["May I have your name?", "성함을 알려 주실래요?", "It's Min Kim.", "민 김이에요."],
      ["Could you spell your last name?", "성의 철자를 알려 주실래요?", "K-I-M.", "케이 아이 엠이에요."],
      ["What's the best number to reach you?", "연락하기 좋은 번호가 뭔가요?", "I'll give you my mobile number.", "휴대폰 번호를 알려 드릴게요."]
    ]},
    {"title":"특별 요청","pairs":[
      ["Do you have any special requests?", "특별히 원하는 것이 있나요?", "A quiet table, if possible.", "가능하면 조용한 자리요."],
      ["Is this for a special occasion?", "특별한 날인가요?", "Yes, it's a birthday dinner.", "네, 생일 저녁 식사예요."],
      ["Do you need a high chair?", "유아용 의자가 필요한가요?", "Yes, one, please.", "네, 하나 부탁해요."]
    ]},
    {"title":"변경과 취소","pairs":[
      ["Are you calling to change a booking?", "예약을 바꾸려고 전화하셨나요?", "Yes, can we move it to Saturday?", "네, 토요일로 옮길 수 있나요?"],
      ["Do you want to cancel?", "취소하고 싶으신가요?", "Yes, I'm sorry about that.", "네, 죄송해요."],
      ["Would you like to book another day?", "다른 날로 예약하시겠어요?", "I'll call back when I know.", "일정이 정해지면 다시 전화할게요."]
    ]},
    {"title":"내용 확인","pairs":[
      ["So that's Friday at seven thirty?", "그러면 금요일 7시 30분인가요?", "Yes, for two people.", "네, 두 명이요."],
      ["Should we send a confirmation?", "예약 확인을 보내 드릴까요?", "Yes, by text, please.", "네, 문자로 부탁해요."],
      ["Is there anything else I can help with?", "또 도와드릴 것이 있나요?", "No, thank you. See you Friday.", "아니요, 고마워요. 금요일에 봬요."]
    ]}
  ],
  [
    {"title":"목적지 이야기","pairs":[
      ["Where do you want to go?", "어디로 가고 싶으세요?", "I'd like to visit Japan.", "일본에 가 보고 싶어요."],
      ["Have you been there before?", "거기에 가 본 적 있나요?", "No, it will be my first time.", "아니요, 처음 가는 거예요."],
      ["Why did you choose that place?", "왜 그곳을 선택했나요?", "I want to try the local food.", "현지 음식을 먹어 보고 싶어요."]
    ]},
    {"title":"기간과 일정","pairs":[
      ["When are you planning to leave?", "언제 출발할 예정인가요?", "At the end of next month.", "다음 달 말에요."],
      ["How long is the trip?", "여행은 얼마나 긴가요?", "About five days.", "약 5일이요."],
      ["Do you have a fixed schedule?", "일정이 정해져 있나요?", "Not yet. I'm still planning.", "아직요. 계획 중이에요."]
    ]},
    {"title":"숙소와 예산","pairs":[
      ["Where do you want to stay?", "어디에서 머무르고 싶으세요?", "Somewhere near the station.", "역 근처 어디든요."],
      ["What's your budget for the hotel?", "호텔 예산은 얼마인가요?", "Around a hundred dollars a night.", "하루 약 100달러요."],
      ["Would you share a room?", "객실을 함께 쓰실 건가요?", "Yes, with my friend.", "네, 친구와요."]
    ]},
    {"title":"할 일 고르기","pairs":[
      ["What do you want to see first?", "무엇을 먼저 보고 싶으세요?", "The old town.", "옛 시가지요."],
      ["Would you like a guided tour?", "가이드 투어를 원하세요?", "Maybe, for the first day.", "아마요, 첫날에는요."],
      ["Do you want a busy trip or a relaxed one?", "바쁜 여행과 여유로운 여행 중 뭐가 좋아요?", "A relaxed one, with some free time.", "자유 시간이 있는 여유로운 여행이요."]
    ]},
    {"title":"준비물과 예약","pairs":[
      ["Have you booked your flight?", "항공편을 예약했나요?", "Yes, but not the hotel yet.", "네, 하지만 호텔은 아직이에요."],
      ["What should I pack?", "무엇을 챙겨야 하나요?", "Comfortable shoes and a light jacket.", "편한 신발과 가벼운 재킷이요."],
      ["Do we need to book ahead?", "미리 예약해야 하나요?", "Yes, especially on weekends.", "네, 특히 주말에는요."]
    ]},
    {"title":"여행 계획 공유","pairs":[
      ["Can you send me your plan?", "계획을 보내 주실래요?", "Sure, I'll send it tonight.", "물론이죠, 오늘 저녁에 보낼게요."],
      ["Would you like to come with us?", "저희와 함께 가실래요?", "I'd love to, if I can take time off.", "휴가를 낼 수 있다면 정말 가고 싶어요."],
      ["What are you most excited about?", "무엇이 가장 기대되나요?", "Trying new food and meeting people.", "새 음식을 먹고 사람들을 만나는 것이요."]
    ]}
  ],
  [
    {"title":"초대하기","pairs":[
      ["Are you doing anything tonight?", "오늘 저녁 계획이 있나요?", "Not really. What's up?", "별로 없어요. 무슨 일이에요?"],
      ["Would you like to come over?", "집에 오실래요?", "Sure, what time?", "좋아요, 몇 시에요?"],
      ["Can you join us for dinner?", "저희와 저녁 함께하실래요?", "Yes, I'd love to.", "네, 정말 좋아요."]
    ]},
    {"title":"초대 수락","pairs":[
      ["Can you make it on Saturday?", "토요일에 올 수 있나요?", "Yes, Saturday is perfect.", "네, 토요일이 아주 좋아요."],
      ["Is six too early?", "6시는 너무 이른가요?", "No, six is fine.", "아니요, 6시 괜찮아요."],
      ["Should I bring anything?", "무언가 가져가야 하나요?", "Just yourself!", "몸만 오세요!"]
    ]},
    {"title":"못 가는 이유","pairs":[
      ["Are you free for lunch?", "점심에 시간 있나요?", "Sorry, I already have plans.", "미안해요, 이미 약속이 있어요."],
      ["Do you want to go out tonight?", "오늘 저녁 나가실래요?", "I'd like to, but I'm too tired.", "그러고 싶지만 너무 피곤해요."],
      ["Can you come to the party?", "파티에 올 수 있나요?", "I'm sorry, I have to work.", "미안해요, 일을 해야 해요."]
    ]},
    {"title":"다른 날 제안","pairs":[
      ["Would another day work?", "다른 날은 괜찮을까요?", "Yes, how about Sunday?", "네, 일요일은 어때요?"],
      ["Can we do it next week?", "다음 주에 할 수 있나요?", "Sure, let's plan for next week.", "물론이죠, 다음 주로 계획해요."],
      ["When are you free instead?", "대신 언제 시간이 있나요?", "Tuesday evening would be good.", "화요일 저녁이면 좋겠어요."]
    ]},
    {"title":"방문 준비","pairs":[
      ["Do you have my address?", "제 주소가 있나요?", "Not yet. Could you send it?", "아직요. 보내 주실래요?"],
      ["Is it okay if I bring a friend?", "친구를 데려가도 괜찮을까요?", "Of course, they're welcome.", "물론이죠, 환영이에요."],
      ["What time should I arrive?", "몇 시에 도착하면 되나요?", "Any time after six.", "6시 이후 아무 때나요."]
    ]},
    {"title":"감사와 다음 초대","pairs":[
      ["Did you enjoy yourself?", "즐거우셨나요?", "Yes, thanks for inviting me.", "네, 초대해 주셔서 고마워요."],
      ["Would you like some food to take home?", "음식을 좀 가져가실래요?", "That's so kind of you.", "정말 친절하시네요."],
      ["Let's do this again sometime.", "언제 또 이렇게 만나요.", "Definitely. Next time at my place.", "꼭요. 다음번에는 제 집에서요."]
    ]}
  ],
  [
    {"title":"선택하기","pairs":[
      ["Which one would you choose?", "어느 것을 고르시겠어요?", "I'd choose the cheaper one.", "더 저렴한 것을 고르겠어요."],
      ["Do you prefer this or that?", "이것과 저것 중 뭐가 더 좋아요?", "This one looks easier to use.", "이것이 쓰기 더 쉬워 보여요."],
      ["Are you sure about your choice?", "선택에 확신이 있나요?", "Not completely, but I'll try it.", "완전히는 아니지만 해 볼게요."]
    ]},
    {"title":"이유 설명","pairs":[
      ["Why do you think it's better?", "왜 그것이 더 좋다고 생각하세요?", "It saves time.", "시간을 절약해 줘요."],
      ["What matters most to you?", "무엇이 가장 중요하세요?", "Comfort is more important than price.", "가격보다 편안함이 더 중요해요."],
      ["What do you like about this option?", "이 선택의 어떤 점이 좋나요?", "It gives us more flexibility.", "더 유연하게 할 수 있어요."]
    ]},
    {"title":"동의하기","pairs":[
      ["Do you agree?", "동의하시나요?", "Yes, I feel the same way.", "네, 같은 생각이에요."],
      ["Does that sound reasonable?", "합리적으로 들리나요?", "Yes, that makes sense.", "네, 말이 되네요."],
      ["Should we go with this plan?", "이 계획으로 갈까요?", "Yes, let's do that.", "네, 그렇게 해요."]
    ]},
    {"title":"다른 의견","pairs":[
      ["Do you have a different idea?", "다른 생각이 있나요?", "Maybe we could start earlier.", "더 일찍 시작할 수도 있겠어요."],
      ["Is there anything you disagree with?", "동의하지 않는 부분이 있나요?", "Just the timing.", "시간만요."],
      ["Would you rather do it another way?", "다른 방식으로 하고 싶으세요?", "Yes, I'd prefer a simpler plan.", "네, 더 단순한 계획이 좋아요."]
    ]},
    {"title":"아직 결정하지 못했을 때","pairs":[
      ["Have you decided yet?", "아직 결정하셨나요?", "Not yet. I need a little more time.", "아직요. 시간이 조금 더 필요해요."],
      ["What's making it hard to choose?", "무엇 때문에 고르기 어렵나요?", "Both options have good points.", "두 선택 모두 장점이 있어요."],
      ["Would you like some advice?", "조언을 원하세요?", "Yes, what would you do?", "네, 본인이라면 어떻게 하시겠어요?"]
    ]},
    {"title":"함께 결론 내기","pairs":[
      ["Can we find a middle ground?", "중간에서 타협할 수 있나요?", "Let's try it for one week first.", "먼저 일주일 동안 해 봐요."],
      ["Is everyone okay with this?", "모두 이것에 괜찮으신가요?", "Yes, it works for me.", "네, 저는 괜찮아요."],
      ["So, what's the final decision?", "그러면 최종 결정은 무엇인가요?", "We'll take the earlier train.", "더 이른 기차를 탈 거예요."]
    ]}
  ],
  [
    {"title":"항공편 변경","pairs":[
      ["Would you like to change your flight?", "항공편을 바꾸고 싶으신가요?", "Yes, to tomorrow morning.", "네, 내일 아침으로요."],
      ["Which date would you prefer?", "어느 날짜가 좋으세요?", "The same time next Monday.", "다음 월요일 같은 시간이요."],
      ["Do you want a direct flight?", "직항편을 원하세요?", "Yes, if it's available.", "네, 가능하다면요."]
    ]},
    {"title":"열차와 버스 변경","pairs":[
      ["Did you miss your train?", "기차를 놓치셨나요?", "Yes, can I take the next one?", "네, 다음 것을 탈 수 있나요?"],
      ["Would a later bus work?", "더 늦은 버스는 괜찮으세요?", "Yes, what time does it leave?", "네, 몇 시에 출발하나요?"],
      ["Is your ticket flexible?", "변경 가능한 표인가요?", "I'm not sure. Could you check?", "잘 모르겠어요. 확인해 주실래요?"]
    ]},
    {"title":"추가 비용 확인","pairs":[
      ["Is there a change fee?", "변경 수수료가 있나요?", "Could you tell me the total cost?", "총비용을 알려 주실래요?"],
      ["Would you like to pay the difference?", "차액을 결제하시겠어요?", "Yes, if that's the only option.", "그것이 유일한 방법이라면요."],
      ["Is there a cheaper alternative?", "더 저렴한 대안이 있나요?", "I'm happy to travel later.", "더 늦게 출발해도 괜찮아요."]
    ]},
    {"title":"숙소 변경","pairs":[
      ["Are you extending your stay?", "숙박을 연장하시나요?", "Yes, for one more night.", "네, 하루 더요."],
      ["Do you want to keep the same room?", "같은 객실을 유지하고 싶으신가요?", "Yes, if possible.", "네, 가능하면요."],
      ["Can we update your booking?", "예약을 수정해 드릴까요?", "Yes, please send me the new details.", "네, 새 내용을 보내 주세요."]
    ]},
    {"title":"동행인에게 연락","pairs":[
      ["Why has the plan changed?", "왜 계획이 바뀌었나요?", "Our flight was canceled.", "항공편이 취소됐어요."],
      ["When will you arrive now?", "이제 언제 도착하나요?", "Tomorrow afternoon instead.", "대신 내일 오후에요."],
      ["Should I change the pickup time?", "마중 시간을 바꿀까요?", "Yes, I'll send you the new time.", "네, 새 시간을 보내 드릴게요."]
    ]},
    {"title":"새 일정 확인","pairs":[
      ["Is this your updated ticket?", "이것이 수정된 표인가요?", "Yes, let me check the date.", "네, 날짜를 확인할게요."],
      ["Are you ready for the new departure?", "새 출발 일정에 준비됐나요?", "Yes, everything is sorted now.", "네, 이제 모두 정리됐어요."],
      ["Do you need anything else changed?", "또 바꿀 것이 있나요?", "No, that's everything. Thank you.", "아니요, 그게 전부예요. 고마워요."]
    ]}
  ],
  [
    {"title":"낯선 사람과 대화","pairs":[
      ["Is this your first visit to Korea?", "한국 방문이 처음인가요?", "Yes. How long have you lived here?", "네. 여기서 얼마나 오래 사셨나요?"],
      ["What should I try while I'm here?", "여기 있는 동안 무엇을 해 보면 좋나요?", "Try the local food and visit the market.", "현지 음식을 먹고 시장에 가 보세요."],
      ["Would you like to join us?", "저희와 함께하실래요?", "I'd love to. Where are you going?", "좋아요. 어디로 가시나요?"]
    ]},
    {"title":"주문과 요청 연결","pairs":[
      ["Would you like something to drink first?", "먼저 마실 것을 원하세요?", "Yes, water please. Then I'll order.", "네, 물 주세요. 그다음 주문할게요."],
      ["How is everything so far?", "지금까지는 모두 괜찮나요?", "Great. Could I also have some bread?", "좋아요. 빵도 좀 받을 수 있나요?"],
      ["Are you ready for the bill?", "계산서를 드릴까요?", "Yes, and could you pack the leftovers?", "네, 남은 음식도 포장해 주실래요?"]
    ]},
    {"title":"길과 시간 함께 묻기","pairs":[
      ["Where are you trying to get to?", "어디로 가려고 하세요?", "The station. Is it far from here?", "역이요. 여기서 먼가요?"],
      ["Do you have enough time?", "시간은 충분한가요?", "I have twenty minutes. Can I walk?", "20분 있어요. 걸어갈 수 있나요?"],
      ["Would you like me to show you?", "제가 보여 드릴까요?", "Yes, that would be a big help.", "네, 큰 도움이 되겠어요."]
    ]},
    {"title":"문제 설명과 해결","pairs":[
      ["What's happened?", "무슨 일이 있었나요?", "I lost my bag on the bus.", "버스에서 가방을 잃어버렸어요."],
      ["What would you like us to do?", "저희가 어떻게 해 드리면 좋을까요?", "Could you help me contact the bus company?", "버스 회사에 연락하는 걸 도와주실래요?"],
      ["Have you got everything you need?", "필요한 것을 모두 받으셨나요?", "Yes, thanks for being so helpful.", "네, 친절하게 도와주셔서 고마워요."]
    ]},
    {"title":"경험과 계획 이어가기","pairs":[
      ["What was your favorite part of the trip?", "여행에서 무엇이 가장 좋았나요?", "Meeting people and trying new food.", "사람들을 만나고 새 음식을 먹어 본 것이요."],
      ["What would you do differently next time?", "다음번에는 무엇을 다르게 하겠어요?", "I'd stay longer and visit smaller towns.", "더 오래 머물고 작은 마을에 가겠어요."],
      ["Where do you want to go next?", "다음에는 어디로 가고 싶으세요?", "Somewhere I can practice my English.", "영어를 연습할 수 있는 곳이요."]
    ]},
    {"title":"앞으로의 회화 목표","pairs":[
      ["What can you do in English now?", "이제 영어로 무엇을 할 수 있나요?", "I can order food and ask for help.", "음식을 주문하고 도움을 요청할 수 있어요."],
      ["What do you still find difficult?", "아직 무엇이 어렵게 느껴지나요?", "Understanding people when they speak fast.", "사람들이 빨리 말할 때 이해하는 것이요."],
      ["How will you keep practicing?", "어떻게 계속 연습하실 건가요?", "I'll talk with people a little every day.", "매일 조금씩 사람들과 대화할 거예요."]
    ]}
  ]
];
(() => {
 const course=sixMonthCourse, introduced=[];
 course.routines.push({title:'오늘의 새 표현과 복습',goal:'새 표현을 듣고 내 말로 답한 뒤, 배운 표현을 다시 말해요.',minutes:35,tasks:['질문과 예문을 2번씩 들었어요','예문을 보며 소리 내어 5번 따라 말했어요','예문을 가리고 내 답을 3번 말했어요'],hint:true});
 course.modules.forEach((m,i)=>dailyConversationPacks[i].forEach((pack,j)=>pack.pairs.forEach((p,k)=>m.exchanges.push({id:`daily-${i}-${j}-${k}`,prompt:p[0],promptKo:p[1],answer:p[2],answerKo:p[3]}))));
 course.modules[0].exchanges.push({id:'daily-first-extra-1',prompt:'Can you introduce yourself?',promptKo:'자기소개를 해 주실래요?',answer:"Hi, I'm Min. I'm from Korea.",answerKo:'안녕하세요, 저는 민이에요. 한국에서 왔어요.'},{id:'daily-first-extra-2',prompt:'Are you learning English?',promptKo:'영어를 배우고 계신가요?',answer:"Yes, I'm learning a little every day.",answerKo:'네, 매일 조금씩 배우고 있어요.'});
 course.days=Array.from({length:180},(_,n)=>{
  const module=Math.floor(n/6),part=n%6,pack=dailyConversationPacks[module][part];
  const fresh=[{module,index:part},...pack.pairs.map((_,k)=>({module,index:6+part*3+k}))];
  let review=[];
  if(n===0)fresh.push({module:0,index:24},{module:0,index:25});
  else {
   const previous=introduced[n-1],older=introduced[Math.max(0,n-7)];
   review=[previous[previous.length-1],older[0]];
   if(review[0].module===review[1].module&&review[0].index===review[1].index)review[1]=older[1];
  }
  introduced.push(fresh);
  return {day:n+1,module,routine:6,daily:true,newCount:fresh.length,subtopic:pack.title,title:`${course.modules[module].title} · ${pack.title}`,entries:[...fresh.map(e=>({...e,role:'오늘의 새 표현'})),...review.map(e=>({...e,role:'배운 표현 복습'}))],monthly:(n+1)%30===0};
 });
})();
