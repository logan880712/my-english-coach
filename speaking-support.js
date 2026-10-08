'use strict';
const pronunciationWords = {
  "a": "어",
  "about": "어바웃",
  "adele": "어델",
  "anything": "애니씽",
  "are": "아",
  "at": "앳",
  "because": "비커즈",
  "can": "캔",
  "city": "시티",
  "click": "클릭",
  "could": "쿠드",
  "did": "디드",
  "do": "두",
  "does": "더즈",
  "english": "잉글리시",
  "enjoy": "인조이",
  "exactly": "이그잭틀리",
  "exit": "엑싯",
  "fi": "파이",
  "follow": "팔로우",
  "for": "포",
  "friday": "프라이데이",
  "from": "프럼",
  "go": "고우",
  "great": "그레이트",
  "have": "해브",
  "hello": "헬로우",
  "here": "히어",
  "hi": "하이",
  "hot": "핫",
  "hotel": "호텔",
  "how": "하우",
  "i": "아이",
  "i'd": "아이드",
  "i'll": "아일",
  "i'm": "아임",
  "iced": "아이스드",
  "if": "이프",
  "in": "인",
  "is": "이즈",
  "it": "잇",
  "it's": "잇츠",
  "japan": "저팬",
  "k": "케이",
  "kim": "킴",
  "korea": "커리아",
  "let": "렛",
  "let's": "렛츠",
  "m": "엠",
  "may": "메이",
  "min": "민",
  "my": "마이",
  "nice": "나이스",
  "no": "노우",
  "not": "낫",
  "of": "어브",
  "one": "원",
  "platform": "플랫폼",
  "please": "플리즈",
  "saturday": "새터데이",
  "see": "씨",
  "seoul": "서울",
  "shall": "쉘",
  "should": "슈드",
  "since": "신스",
  "so": "소우",
  "sorry": "쏘리",
  "sure": "슈어",
  "tell": "텔",
  "thank": "쌩크",
  "thanks": "쌩크스",
  "that": "댓",
  "that's": "댓츠",
  "the": "더",
  "then": "덴",
  "there": "데어",
  "this": "디스",
  "three": "쓰리",
  "to": "투",
  "two": "투",
  "use": "유즈",
  "we": "위",
  "we'll": "윌",
  "welcome": "웰컴",
  "what": "왓",
  "what's": "왓츠",
  "when": "웬",
  "where": "웨어",
  "which": "위치",
  "who": "후",
  "why": "와이",
  "wi": "와이",
  "would": "우드",
  "yes": "예스",
  "you": "유",
  "your": "유어",
  "address": "어드레스",
  "after": "애프터",
  "afternoon": "애프터눈",
  "again": "어겐",
  "air": "에어",
  "airport": "에어포트",
  "aisle": "아일",
  "all": "올",
  "allergic": "얼러직",
  "allergies": "앨러지즈",
  "alone": "얼로운",
  "also": "올소우",
  "an": "언",
  "and": "앤드",
  "another": "어나더",
  "any": "애니",
  "apartment": "어파트먼트",
  "ask": "애스크",
  "bag": "백",
  "bank": "뱅크",
  "be": "비",
  "bed": "베드",
  "before": "비포",
  "bill": "빌",
  "black": "블랙",
  "blue": "블루",
  "book": "북",
  "booking": "부킹",
  "bottle": "바틀",
  "breakfast": "브렉퍼스트",
  "bring": "브링",
  "brothers": "브라더즈",
  "bus": "버스",
  "busy": "비지",
  "but": "벗",
  "by": "바이",
  "can't": "캔트",
  "card": "카드",
  "cartons": "카튼즈",
  "change": "체인지",
  "cheaper": "치퍼",
  "check": "체크",
  "chicken": "치킨",
  "choose": "추즈",
  "close": "클로우스",
  "coffee": "커피",
  "color": "컬러",
  "come": "컴",
  "conditioner": "컨디셔너",
  "confirm": "컨펌",
  "confirmed": "컨펌드",
  "contact": "칸택트",
  "convenient": "컨비니언트",
  "cost": "코스트",
  "costs": "코스츠",
  "course": "코스",
  "crossing": "크로씽",
  "curry": "커리",
  "day": "데이",
  "days": "데이즈",
  "delicious": "딜리셔스",
  "details": "디테일즈",
  "dinner": "디너",
  "directly": "디렉틀리",
  "dish": "디시",
  "doesn't": "더즌트",
  "doing": "두잉",
  "dollars": "달러즈",
  "don't": "돈트",
  "drink": "드링크",
  "due": "듀",
  "eat": "잇",
  "eggs": "에그즈",
  "elevator": "엘리베이터",
  "eleven": "일레븐",
  "else": "엘스",
  "email": "이메일",
  "evening": "이브닝",
  "every": "에브리",
  "everyone": "에브리원",
  "everything": "에브리씽",
  "exchange": "익스체인지",
  "family": "패밀리",
  "far": "파",
  "favorite": "페이버릿",
  "fever": "피버",
  "fifteen": "피프틴",
  "file": "파일",
  "find": "파인드",
  "fine": "파인",
  "finish": "피니시",
  "first": "퍼스트",
  "fit": "핏",
  "fits": "핏츠",
  "fitting": "피팅",
  "five": "파이브",
  "fixing": "픽씽",
  "food": "푸드",
  "foot": "풋",
  "forty": "포티",
  "four": "포",
  "free": "프리",
  "friend": "프렌드",
  "funny": "퍼니",
  "get": "겟",
  "give": "기브",
  "glass": "글래스",
  "going": "고잉",
  "good": "굿",
  "had": "해드",
  "happened": "해픈드",
  "has": "해즈",
  "headache": "헤드에이크",
  "help": "헬프",
  "helps": "헬프스",
  "hiking": "하이킹",
  "home": "홈",
  "house": "하우스",
  "included": "인클루디드",
  "inside": "인사이드",
  "instead": "인스테드",
  "invitation": "인비테이션",
  "inviting": "인바이팅",
  "join": "조인",
  "key": "키",
  "kind": "카인드",
  "know": "노우",
  "large": "라지",
  "larger": "라저",
  "last": "래스트",
  "latte": "라테",
  "laugh": "래프",
  "leave": "리브",
  "leaves": "리브즈",
  "left": "레프트",
  "like": "라이크",
  "link": "링크",
  "listen": "리슨",
  "little": "리틀",
  "live": "리브",
  "lives": "리브즈",
  "local": "로컬",
  "long": "롱",
  "look": "룩",
  "looking": "루킹",
  "lost": "로스트",
  "love": "러브",
  "lunch": "런치",
  "make": "메이크",
  "many": "메니",
  "me": "미",
  "mean": "민",
  "means": "민즈",
  "medicine": "메디슨",
  "medium": "미디엄",
  "meet": "밋",
  "meeting": "미팅",
  "menu": "메뉴",
  "met": "멧",
  "mild": "마일드",
  "milk": "밀크",
  "minutes": "미닛츠",
  "missed": "미스트",
  "month": "먼쓰",
  "more": "모어",
  "morning": "모닝",
  "mountain": "마운튼",
  "movie": "무비",
  "movies": "무비즈",
  "much": "머치",
  "museum": "뮤지엄",
  "music": "뮤직",
  "name": "네임",
  "near": "니어",
  "need": "니드",
  "neighborhood": "네이버후드",
  "new": "뉴",
  "next": "넥스트",
  "nights": "나이츠",
  "notes": "노츠",
  "now": "나우",
  "number": "넘버",
  "nuts": "넛츠",
  "o'clock": "어클락",
  "office": "오피스",
  "often": "오픈",
  "okay": "오케이",
  "on": "온",
  "once": "원스",
  "online": "온라인",
  "or": "오어",
  "order": "오더",
  "ordered": "오더드",
  "other": "어더",
  "over": "오우버",
  "own": "오운",
  "park": "파크",
  "passport": "패스포트",
  "password": "패스워드",
  "past": "패스트",
  "pay": "페이",
  "peanuts": "피넛츠",
  "people": "피플",
  "person": "퍼슨",
  "pharmacist": "파머시스트",
  "phone": "폰",
  "photos": "포토우즈",
  "picnic": "피크닉",
  "planning": "플래닝",
  "plans": "플랜즈",
  "pop": "팝",
  "popular": "파퓰러",
  "practice": "프랙티스",
  "prefer": "프리퍼",
  "problem": "프라블럼",
  "purpose": "퍼퍼스",
  "quarter": "쿼터",
  "question": "퀘스천",
  "questions": "퀘스천즈",
  "quiet": "콰이엇",
  "rains": "레인즈",
  "ready": "레디",
  "really": "리얼리",
  "receipt": "리씨트",
  "recommend": "레커멘드",
  "refund": "리펀드",
  "relax": "릴랙스",
  "remember": "리멤버",
  "removed": "리무브드",
  "reservation": "레저베이션",
  "restaurant": "레스터란트",
  "return": "리턴",
  "right": "라이트",
  "room": "룸",
  "round": "라운드",
  "salad": "샐러드",
  "saves": "세이브즈",
  "saw": "쏘",
  "say": "세이",
  "seems": "씸즈",
  "send": "센드",
  "seven": "세븐",
  "she": "쉬",
  "shirt": "셔트",
  "show": "쇼우",
  "singer": "싱어",
  "sister": "시스터",
  "sisters": "시스터즈",
  "six": "식스",
  "size": "사이즈",
  "slowly": "슬로울리",
  "small": "스몰",
  "some": "썸",
  "someone": "썸원",
  "something": "썸씽",
  "sometime": "썸타임",
  "soon": "순",
  "sounds": "사운즈",
  "soup": "수프",
  "soy": "소이",
  "speak": "스피크",
  "spicy": "스파이시",
  "spoon": "스푼",
  "station": "스테이션",
  "stay": "스테이",
  "staying": "스테잉",
  "straight": "스트레이트",
  "table": "테이블",
  "take": "테이크",
  "taking": "테이킹",
  "ten": "텐",
  "than": "댄",
  "them": "뎀",
  "they": "데이",
  "think": "씽크",
  "thirty": "써티",
  "ticket": "티킷",
  "time": "타임",
  "toast": "토우스트",
  "today": "투데이",
  "tomorrow": "투마로우",
  "too": "투",
  "took": "툭",
  "towel": "타월",
  "towels": "타월즈",
  "train": "트레인",
  "travel": "트래블",
  "traveling": "트래블링",
  "trip": "트립",
  "try": "트라이",
  "turn": "턴",
  "under": "언더",
  "understand": "언더스탠드",
  "up": "업",
  "usually": "유주얼리",
  "vacation": "베이케이션",
  "view": "뷰",
  "visit": "비짓",
  "wait": "웨이트",
  "walk": "워크",
  "walking": "워킹",
  "wallet": "월릿",
  "was": "워즈",
  "watch": "와치",
  "water": "워터",
  "way": "웨이",
  "week": "윅",
  "weekend": "위켄드",
  "well": "웰",
  "went": "웬트",
  "were": "워",
  "work": "워크",
  "worker": "워커",
  "working": "워킹",
  "works": "웍스",
  "wrong": "롱",
  "will": "윌",
  "window": "윈도우",
  "with": "위드",
  "yourself": "유어셀프"
};
const dailyWordSets = [
  [
    {
      "word": "name",
      "meaning": "이름",
      "pronunciation": "네임"
    },
    {
      "word": "from",
      "meaning": "~출신의",
      "pronunciation": "프럼"
    },
    {
      "word": "live",
      "meaning": "살다",
      "pronunciation": "리브"
    },
    {
      "word": "work",
      "meaning": "일하다",
      "pronunciation": "워크"
    },
    {
      "word": "nice",
      "meaning": "좋은",
      "pronunciation": "나이스"
    },
    {
      "word": "music",
      "meaning": "음악",
      "pronunciation": "뮤직"
    }
  ],
  [
    {
      "word": "morning",
      "meaning": "아침",
      "pronunciation": "모닝"
    },
    {
      "word": "breakfast",
      "meaning": "아침식사",
      "pronunciation": "브렉퍼스트"
    },
    {
      "word": "bus",
      "meaning": "버스",
      "pronunciation": "버스"
    },
    {
      "word": "after",
      "meaning": "~후에",
      "pronunciation": "애프터"
    },
    {
      "word": "walk",
      "meaning": "산책하다",
      "pronunciation": "워크"
    },
    {
      "word": "seven",
      "meaning": "일곱",
      "pronunciation": "세븐"
    }
  ],
  [
    {
      "word": "like",
      "meaning": "좋아하다",
      "pronunciation": "라이크"
    },
    {
      "word": "favorite",
      "meaning": "가장좋아하는",
      "pronunciation": "페이버릿"
    },
    {
      "word": "singer",
      "meaning": "가수",
      "pronunciation": "싱어"
    },
    {
      "word": "movie",
      "meaning": "영화",
      "pronunciation": "무비"
    },
    {
      "word": "funny",
      "meaning": "재미있는",
      "pronunciation": "퍼니"
    },
    {
      "word": "weekend",
      "meaning": "주말",
      "pronunciation": "위켄드"
    }
  ],
  [
    {
      "word": "family",
      "meaning": "가족",
      "pronunciation": "패밀리"
    },
    {
      "word": "sister",
      "meaning": "자매",
      "pronunciation": "시스터"
    },
    {
      "word": "apartment",
      "meaning": "아파트",
      "pronunciation": "어파트먼트"
    },
    {
      "word": "near",
      "meaning": "가까운",
      "pronunciation": "니어"
    },
    {
      "word": "quiet",
      "meaning": "조용한",
      "pronunciation": "콰이엇"
    },
    {
      "word": "home",
      "meaning": "집",
      "pronunciation": "홈"
    }
  ],
  [
    {
      "word": "again",
      "meaning": "다시",
      "pronunciation": "어겐"
    },
    {
      "word": "slowly",
      "meaning": "천천히",
      "pronunciation": "슬로울리"
    },
    {
      "word": "mean",
      "meaning": "뜻하다",
      "pronunciation": "민"
    },
    {
      "word": "show",
      "meaning": "보여주다",
      "pronunciation": "쇼우"
    },
    {
      "word": "help",
      "meaning": "도움",
      "pronunciation": "헬프"
    },
    {
      "word": "minutes",
      "meaning": "분",
      "pronunciation": "미닛츠"
    }
  ],
  [
    {
      "word": "latte",
      "meaning": "라테",
      "pronunciation": "라테"
    },
    {
      "word": "small",
      "meaning": "작은",
      "pronunciation": "스몰"
    },
    {
      "word": "hot",
      "meaning": "뜨거운",
      "pronunciation": "핫"
    },
    {
      "word": "iced",
      "meaning": "차가운",
      "pronunciation": "아이스드"
    },
    {
      "word": "card",
      "meaning": "카드",
      "pronunciation": "카드"
    },
    {
      "word": "pay",
      "meaning": "지불하다",
      "pronunciation": "페이"
    }
  ],
  [
    {
      "word": "table",
      "meaning": "테이블",
      "pronunciation": "테이블"
    },
    {
      "word": "menu",
      "meaning": "메뉴",
      "pronunciation": "메뉴"
    },
    {
      "word": "chicken",
      "meaning": "닭고기",
      "pronunciation": "치킨"
    },
    {
      "word": "soup",
      "meaning": "수프",
      "pronunciation": "수프"
    },
    {
      "word": "water",
      "meaning": "물",
      "pronunciation": "워터"
    },
    {
      "word": "bill",
      "meaning": "계산서",
      "pronunciation": "빌"
    }
  ],
  [
    {
      "word": "recommend",
      "meaning": "추천하다",
      "pronunciation": "레커멘드"
    },
    {
      "word": "spicy",
      "meaning": "매운",
      "pronunciation": "스파이시"
    },
    {
      "word": "mild",
      "meaning": "순한",
      "pronunciation": "마일드"
    },
    {
      "word": "allergic",
      "meaning": "알레르기가있는",
      "pronunciation": "얼러직"
    },
    {
      "word": "peanuts",
      "meaning": "땅콩",
      "pronunciation": "피넛츠"
    },
    {
      "word": "nuts",
      "meaning": "견과류",
      "pronunciation": "넛츠"
    }
  ],
  [
    {
      "word": "shirt",
      "meaning": "셔츠",
      "pronunciation": "셔트"
    },
    {
      "word": "color",
      "meaning": "색깔",
      "pronunciation": "컬러"
    },
    {
      "word": "blue",
      "meaning": "파란색",
      "pronunciation": "블루"
    },
    {
      "word": "size",
      "meaning": "크기",
      "pronunciation": "사이즈"
    },
    {
      "word": "medium",
      "meaning": "중간사이즈",
      "pronunciation": "미디엄"
    },
    {
      "word": "large",
      "meaning": "큰사이즈",
      "pronunciation": "라지"
    }
  ],
  [
    {
      "word": "milk",
      "meaning": "우유",
      "pronunciation": "밀크"
    },
    {
      "word": "aisle",
      "meaning": "통로",
      "pronunciation": "아일"
    },
    {
      "word": "soy",
      "meaning": "콩",
      "pronunciation": "소이"
    },
    {
      "word": "bottle",
      "meaning": "병",
      "pronunciation": "바틀"
    },
    {
      "word": "bag",
      "meaning": "가방",
      "pronunciation": "백"
    },
    {
      "word": "receipt",
      "meaning": "영수증",
      "pronunciation": "리씨트"
    }
  ],
  [
    {
      "word": "station",
      "meaning": "역",
      "pronunciation": "스테이션"
    },
    {
      "word": "straight",
      "meaning": "똑바로",
      "pronunciation": "스트레이트"
    },
    {
      "word": "left",
      "meaning": "왼쪽",
      "pronunciation": "레프트"
    },
    {
      "word": "far",
      "meaning": "먼",
      "pronunciation": "파"
    },
    {
      "word": "bank",
      "meaning": "은행",
      "pronunciation": "뱅크"
    },
    {
      "word": "foot",
      "meaning": "발",
      "pronunciation": "풋"
    }
  ],
  [
    {
      "word": "airport",
      "meaning": "공항",
      "pronunciation": "에어포트"
    },
    {
      "word": "ticket",
      "meaning": "표",
      "pronunciation": "티킷"
    },
    {
      "word": "platform",
      "meaning": "승강장",
      "pronunciation": "플랫폼"
    },
    {
      "word": "train",
      "meaning": "기차",
      "pronunciation": "트레인"
    },
    {
      "word": "forty",
      "meaning": "마흔",
      "pronunciation": "포티"
    },
    {
      "word": "directly",
      "meaning": "바로",
      "pronunciation": "디렉틀리"
    }
  ],
  [
    {
      "word": "reservation",
      "meaning": "예약",
      "pronunciation": "레저베이션"
    },
    {
      "word": "passport",
      "meaning": "여권",
      "pronunciation": "패스포트"
    },
    {
      "word": "nights",
      "meaning": "밤",
      "pronunciation": "나이츠"
    },
    {
      "word": "key",
      "meaning": "열쇠",
      "pronunciation": "키"
    },
    {
      "word": "breakfast",
      "meaning": "아침식사",
      "pronunciation": "브렉퍼스트"
    },
    {
      "word": "elevator",
      "meaning": "엘리베이터",
      "pronunciation": "엘리베이터"
    }
  ],
  [
    {
      "word": "room",
      "meaning": "객실",
      "pronunciation": "룸"
    },
    {
      "word": "conditioner",
      "meaning": "에어컨의조절장치",
      "pronunciation": "컨디셔너"
    },
    {
      "word": "towel",
      "meaning": "수건",
      "pronunciation": "타월"
    },
    {
      "word": "another",
      "meaning": "하나더",
      "pronunciation": "어나더"
    },
    {
      "word": "password",
      "meaning": "비밀번호",
      "pronunciation": "패스워드"
    },
    {
      "word": "ten",
      "meaning": "열",
      "pronunciation": "텐"
    }
  ],
  [
    {
      "word": "purpose",
      "meaning": "목적",
      "pronunciation": "퍼퍼스"
    },
    {
      "word": "vacation",
      "meaning": "휴가",
      "pronunciation": "베이케이션"
    },
    {
      "word": "stay",
      "meaning": "머무르다",
      "pronunciation": "스테이"
    },
    {
      "word": "hotel",
      "meaning": "호텔",
      "pronunciation": "호텔"
    },
    {
      "word": "return",
      "meaning": "돌아오는",
      "pronunciation": "리턴"
    },
    {
      "word": "alone",
      "meaning": "혼자",
      "pronunciation": "얼로운"
    }
  ],
  [
    {
      "word": "free",
      "meaning": "시간이있는",
      "pronunciation": "프리"
    },
    {
      "word": "Saturday",
      "meaning": "토요일",
      "pronunciation": "새터데이"
    },
    {
      "word": "afternoon",
      "meaning": "오후",
      "pronunciation": "애프터눈"
    },
    {
      "word": "coffee",
      "meaning": "커피",
      "pronunciation": "커피"
    },
    {
      "word": "meet",
      "meaning": "만나다",
      "pronunciation": "밋"
    },
    {
      "word": "exit",
      "meaning": "출구",
      "pronunciation": "엑싯"
    }
  ],
  [
    {
      "word": "file",
      "meaning": "파일",
      "pronunciation": "파일"
    },
    {
      "word": "need",
      "meaning": "필요하다",
      "pronunciation": "니드"
    },
    {
      "word": "use",
      "meaning": "사용하다",
      "pronunciation": "유즈"
    },
    {
      "word": "tomorrow",
      "meaning": "내일",
      "pronunciation": "투마로우"
    },
    {
      "word": "finish",
      "meaning": "끝내다",
      "pronunciation": "피니시"
    },
    {
      "word": "help",
      "meaning": "도움",
      "pronunciation": "헬프"
    }
  ],
  [
    {
      "word": "busy",
      "meaning": "바쁜",
      "pronunciation": "비지"
    },
    {
      "word": "morning",
      "meaning": "오전",
      "pronunciation": "모닝"
    },
    {
      "word": "online",
      "meaning": "온라인으로",
      "pronunciation": "온라인"
    },
    {
      "word": "instead",
      "meaning": "대신",
      "pronunciation": "인스테드"
    },
    {
      "word": "link",
      "meaning": "링크",
      "pronunciation": "링크"
    },
    {
      "word": "meeting",
      "meaning": "회의",
      "pronunciation": "미팅"
    }
  ],
  [
    {
      "word": "hiking",
      "meaning": "등산",
      "pronunciation": "하이킹"
    },
    {
      "word": "once",
      "meaning": "한번",
      "pronunciation": "원스"
    },
    {
      "word": "usually",
      "meaning": "보통",
      "pronunciation": "유주얼리"
    },
    {
      "word": "mountain",
      "meaning": "산",
      "pronunciation": "마운튼"
    },
    {
      "word": "relax",
      "meaning": "긴장을풀다",
      "pronunciation": "릴랙스"
    },
    {
      "word": "friend",
      "meaning": "친구",
      "pronunciation": "프렌드"
    }
  ],
  [
    {
      "word": "weekend",
      "meaning": "주말",
      "pronunciation": "위켄드"
    },
    {
      "word": "park",
      "meaning": "공원",
      "pronunciation": "파크"
    },
    {
      "word": "picnic",
      "meaning": "소풍",
      "pronunciation": "피크닉"
    },
    {
      "word": "photos",
      "meaning": "사진",
      "pronunciation": "포토우즈"
    },
    {
      "word": "dinner",
      "meaning": "저녁식사",
      "pronunciation": "디너"
    },
    {
      "word": "again",
      "meaning": "다시",
      "pronunciation": "어겐"
    }
  ],
  [
    {
      "word": "order",
      "meaning": "주문하다",
      "pronunciation": "오더"
    },
    {
      "word": "salad",
      "meaning": "샐러드",
      "pronunciation": "샐러드"
    },
    {
      "word": "check",
      "meaning": "확인하다",
      "pronunciation": "체크"
    },
    {
      "word": "wait",
      "meaning": "기다리다",
      "pronunciation": "웨이트"
    },
    {
      "word": "spoon",
      "meaning": "숟가락",
      "pronunciation": "스푼"
    },
    {
      "word": "bill",
      "meaning": "계산서",
      "pronunciation": "빌"
    }
  ],
  [
    {
      "word": "headache",
      "meaning": "두통",
      "pronunciation": "헤드에이크"
    },
    {
      "word": "fever",
      "meaning": "열",
      "pronunciation": "피버"
    },
    {
      "word": "medicine",
      "meaning": "약",
      "pronunciation": "메디슨"
    },
    {
      "word": "since",
      "meaning": "~부터",
      "pronunciation": "신스"
    },
    {
      "word": "pharmacist",
      "meaning": "약사",
      "pronunciation": "파머시스트"
    },
    {
      "word": "allergies",
      "meaning": "알레르기",
      "pronunciation": "앨러지즈"
    }
  ],
  [
    {
      "word": "return",
      "meaning": "반품하다",
      "pronunciation": "리턴"
    },
    {
      "word": "small",
      "meaning": "작은",
      "pronunciation": "스몰"
    },
    {
      "word": "exchange",
      "meaning": "교환하다",
      "pronunciation": "익스체인지"
    },
    {
      "word": "larger",
      "meaning": "더큰",
      "pronunciation": "라저"
    },
    {
      "word": "refund",
      "meaning": "환불",
      "pronunciation": "리펀드"
    },
    {
      "word": "receipt",
      "meaning": "영수증",
      "pronunciation": "리씨트"
    }
  ],
  [
    {
      "word": "lost",
      "meaning": "잃어버린",
      "pronunciation": "로스트"
    },
    {
      "word": "black",
      "meaning": "검은색",
      "pronunciation": "블랙"
    },
    {
      "word": "inside",
      "meaning": "안에",
      "pronunciation": "인사이드"
    },
    {
      "word": "wallet",
      "meaning": "지갑",
      "pronunciation": "월릿"
    },
    {
      "word": "phone",
      "meaning": "전화기",
      "pronunciation": "폰"
    },
    {
      "word": "contact",
      "meaning": "연락처",
      "pronunciation": "칸택트"
    }
  ],
  [
    {
      "word": "book",
      "meaning": "예약하다",
      "pronunciation": "북"
    },
    {
      "word": "Friday",
      "meaning": "금요일",
      "pronunciation": "프라이데이"
    },
    {
      "word": "evening",
      "meaning": "저녁",
      "pronunciation": "이브닝"
    },
    {
      "word": "four",
      "meaning": "넷",
      "pronunciation": "포"
    },
    {
      "word": "name",
      "meaning": "이름",
      "pronunciation": "네임"
    },
    {
      "word": "confirm",
      "meaning": "확인하다",
      "pronunciation": "컨펌"
    }
  ],
  [
    {
      "word": "travel",
      "meaning": "여행하다",
      "pronunciation": "트래블"
    },
    {
      "word": "local",
      "meaning": "현지의",
      "pronunciation": "로컬"
    },
    {
      "word": "food",
      "meaning": "음식",
      "pronunciation": "푸드"
    },
    {
      "word": "close",
      "meaning": "가까운",
      "pronunciation": "클로우스"
    },
    {
      "word": "rains",
      "meaning": "비가온다",
      "pronunciation": "레인즈"
    },
    {
      "word": "museum",
      "meaning": "박물관",
      "pronunciation": "뮤지엄"
    }
  ],
  [
    {
      "word": "plans",
      "meaning": "계획",
      "pronunciation": "플랜즈"
    },
    {
      "word": "Saturday",
      "meaning": "토요일",
      "pronunciation": "새터데이"
    },
    {
      "word": "spicy",
      "meaning": "매운",
      "pronunciation": "스파이시"
    },
    {
      "word": "inviting",
      "meaning": "초대하는",
      "pronunciation": "인바이팅"
    },
    {
      "word": "sounds",
      "meaning": "~하게들린다",
      "pronunciation": "사운즈"
    },
    {
      "word": "thanks",
      "meaning": "고마워요",
      "pronunciation": "쌩크스"
    }
  ],
  [
    {
      "word": "prefer",
      "meaning": "선호하다",
      "pronunciation": "프리퍼"
    },
    {
      "word": "because",
      "meaning": "왜냐하면",
      "pronunciation": "비커즈"
    },
    {
      "word": "saves",
      "meaning": "절약하다",
      "pronunciation": "세이브즈"
    },
    {
      "word": "cheaper",
      "meaning": "더저렴한",
      "pronunciation": "치퍼"
    },
    {
      "word": "notes",
      "meaning": "메모",
      "pronunciation": "노츠"
    },
    {
      "word": "invitation",
      "meaning": "초대장",
      "pronunciation": "인비테이션"
    }
  ],
  [
    {
      "word": "change",
      "meaning": "변경하다",
      "pronunciation": "체인지"
    },
    {
      "word": "missed",
      "meaning": "놓친",
      "pronunciation": "미스트"
    },
    {
      "word": "another",
      "meaning": "다른",
      "pronunciation": "어나더"
    },
    {
      "word": "cost",
      "meaning": "비용",
      "pronunciation": "코스트"
    },
    {
      "word": "new",
      "meaning": "새로운",
      "pronunciation": "뉴"
    },
    {
      "word": "platform",
      "meaning": "승강장",
      "pronunciation": "플랫폼"
    }
  ],
  [
    {
      "word": "yourself",
      "meaning": "자기자신",
      "pronunciation": "유어셀프"
    },
    {
      "word": "enjoy",
      "meaning": "즐기다",
      "pronunciation": "인조이"
    },
    {
      "word": "relax",
      "meaning": "긴장을풀다",
      "pronunciation": "릴랙스"
    },
    {
      "word": "weekend",
      "meaning": "주말",
      "pronunciation": "위켄드"
    },
    {
      "word": "practice",
      "meaning": "연습하다",
      "pronunciation": "프랙티스"
    },
    {
      "word": "understand",
      "meaning": "이해하다",
      "pronunciation": "언더스탠드"
    }
  ]
];
function hangulSound(value) { return value.replace(/[A-Za-z]+(?:'[A-Za-z]+)?/g, word => pronunciationWords[word.toLowerCase()] || word); }
Object.assign(pronunciationWords, {weekends:'위켄즈',yesterday:'예스터데이',watched:'와치트',studying:'스터디잉',learning:'러닝',want:'원트',talk:'토크',bathroom:'배쓰룸',directions:'디렉션즈',out:'아웃',finished:'피니시트',different:'디퍼런트',price:'프라이스',expensive:'익스펜시브',start:'스타트',nine:'나인',am:'앰',speaking:'스피킹',fast:'패스트',word:'워드',jisoo:'지수',busan:'부산',eight:'에이트',subway:'서브웨이',jazz:'재즈',action:'액션',brother:'브라더',tea:'티',pasta:'파스타',white:'와이트',carton:'카튼',juice:'주스',twenty:'트웬티',center:'센터',lee:'리',weeks:'윅스',sunday:'선데이',report:'리포트',swimming:'스위밍',twice:'트와이스',pizza:'피자',stomachache:'스터먹에이크',jacket:'재킷',big:'빅',canada:'캐나다',money:'머니'});
function wordsForDay(day) {
 const d=sixMonthCourse.days[day-1],source=dailyWordSets[d.module];
 // Revisit vocabulary across the six lesson types, including the previous situation on review day.
 let result=Array.from({length:10},(_,i)=>source[(d.routine+i)%source.length]);
 if(d.routine===4&&d.module>0) result=[...source.slice(0,6),...dailyWordSets[d.module-1].filter(w=>!source.slice(0,6).some(x=>x.word.toLowerCase()===w.word.toLowerCase())).slice(0,4)];
 return result;
}
function weeklyQuestions(day,legacy=false) {
 const pool=[],sentences=[];
 for(let n=Math.max(1,day-6);n<=day;n++) {
  for(const word of (legacy?legacyWordsForDay(n):wordsForDay(n)))if(!pool.some(w=>w.word.toLowerCase()===word.word.toLowerCase()))pool.push(word);
  for(const item of sixMonthCourse.days[n-1].entries){const q=sixMonthCourse.modules[item.module].exchanges[item.index];if(!sentences.some(x=>x.answer===q.answer||x.answerKo===q.answerKo))sentences.push(q);}
 }
 const rotate=(options,n)=>[...options.slice(n%3),...options.slice(0,n%3)];
 const result=pool.slice(0,5).map((w,i)=>({kind:'word',prompt:w.word,sound:w.pronunciation,meaning:w.meaning,options:rotate([w.meaning,...pool.filter(x=>x.meaning!==w.meaning).map(x=>x.meaning).filter((x,j,a)=>a.indexOf(x)===j).slice(0,2)],day+i),correct:w.meaning}));
 for(let i=0;i<3;i++){const target=sentences[(day+i*2)%sentences.length];const alternatives=sentences.filter(q=>q.answer!==target.answer&&q.answerKo!==target.answerKo).slice(0,2);result.push({kind:'sentence',prompt:target.answerKo,sound:hangulSound(target.answer),meaning:target.answerKo,options:rotate([target.answer,...alternatives.map(q=>q.answer)],day+i),correct:target.answer});}
 return result;
}
// Teach the useful phrase together instead of the less useful isolated noun.
dailyWordSets[13][1] = {word:'air conditioner',meaning:'에어컨',pronunciation:'에어 컨디셔너'};

const extraConversationWords = [
  [
    {
      "word": "Hi there.",
      "meaning": "안녕하세요",
      "pronunciation": "하이 데어"
    },
    {
      "word": "Nice to meet you.",
      "meaning": "만나서 반가워요",
      "pronunciation": "나이스 투 밋 유"
    },
    {
      "word": "What about you?",
      "meaning": "그쪽은요?",
      "pronunciation": "왓 어바웃 유"
    },
    {
      "word": "See you.",
      "meaning": "또 봐요",
      "pronunciation": "씨 유"
    },
    {
      "word": "first name",
      "meaning": "이름",
      "pronunciation": "퍼스트 네임"
    },
    {
      "word": "hometown",
      "meaning": "고향",
      "pronunciation": "홈타운"
    }
  ],
  [
    {
      "word": "get up",
      "meaning": "일어나다",
      "pronunciation": "겟 업"
    },
    {
      "word": "get ready",
      "meaning": "준비하다",
      "pronunciation": "겟 레디"
    },
    {
      "word": "head out",
      "meaning": "밖으로 나가다",
      "pronunciation": "헤드 아웃"
    },
    {
      "word": "on my way",
      "meaning": "가는 중이에요",
      "pronunciation": "온 마이 웨이"
    },
    {
      "word": "take a break",
      "meaning": "잠깐 쉬다",
      "pronunciation": "테이크 어 브레이크"
    },
    {
      "word": "go to bed",
      "meaning": "잠자리에 들다",
      "pronunciation": "고우 투 베드"
    }
  ],
  [
    {
      "word": "I'm into music.",
      "meaning": "음악에 관심이 많아요",
      "pronunciation": "아임 인투 뮤직"
    },
    {
      "word": "Sounds good.",
      "meaning": "좋아요",
      "pronunciation": "사운즈 굿"
    },
    {
      "word": "Not really.",
      "meaning": "별로요",
      "pronunciation": "낫 리얼리"
    },
    {
      "word": "Me too.",
      "meaning": "저도요",
      "pronunciation": "미 투"
    },
    {
      "word": "hang out",
      "meaning": "편하게 어울리다",
      "pronunciation": "행 아웃"
    },
    {
      "word": "favorite food",
      "meaning": "가장 좋아하는 음식",
      "pronunciation": "페이버릿 푸드"
    }
  ],
  [
    {
      "word": "parents",
      "meaning": "부모님",
      "pronunciation": "페어런츠"
    },
    {
      "word": "live nearby",
      "meaning": "근처에 살다",
      "pronunciation": "리브 니어바이"
    },
    {
      "word": "move in",
      "meaning": "이사 들어오다",
      "pronunciation": "무브 인"
    },
    {
      "word": "live alone",
      "meaning": "혼자 살다",
      "pronunciation": "리브 얼로운"
    },
    {
      "word": "at home",
      "meaning": "집에",
      "pronunciation": "앳 홈"
    },
    {
      "word": "make yourself at home",
      "meaning": "편하게 계세요",
      "pronunciation": "메이크 유어셀프 앳 홈"
    }
  ],
  [
    {
      "word": "Sorry?",
      "meaning": "다시 말씀해 주시겠어요?",
      "pronunciation": "쏘리"
    },
    {
      "word": "Say that again, please.",
      "meaning": "다시 말해 주세요",
      "pronunciation": "세이 댓 어겐 플리즈"
    },
    {
      "word": "A little slower, please.",
      "meaning": "조금 더 천천히요",
      "pronunciation": "어 리틀 슬로워 플리즈"
    },
    {
      "word": "Got it.",
      "meaning": "이해했어요",
      "pronunciation": "갓 잇"
    },
    {
      "word": "I'm not sure.",
      "meaning": "잘 모르겠어요",
      "pronunciation": "아임 낫 슈어"
    },
    {
      "word": "One more time.",
      "meaning": "한 번 더요",
      "pronunciation": "원 모어 타임"
    }
  ],
  [
    {
      "word": "to go",
      "meaning": "포장해서",
      "pronunciation": "투 고우"
    },
    {
      "word": "for here",
      "meaning": "매장에서 먹을",
      "pronunciation": "포 히어"
    },
    {
      "word": "decaf",
      "meaning": "디카페인",
      "pronunciation": "디캐프"
    },
    {
      "word": "less ice",
      "meaning": "얼음 적게",
      "pronunciation": "레스 아이스"
    },
    {
      "word": "That's all.",
      "meaning": "그게 전부예요",
      "pronunciation": "댓츠 올"
    },
    {
      "word": "Can I get a latte?",
      "meaning": "라테 한 잔 주세요",
      "pronunciation": "캔 아이 겟 어 라테"
    }
  ],
  [
    {
      "word": "a table for two",
      "meaning": "두 명 자리",
      "pronunciation": "어 테이블 포 투"
    },
    {
      "word": "order",
      "meaning": "주문하다",
      "pronunciation": "오더"
    },
    {
      "word": "anything else",
      "meaning": "추가로 필요한 것",
      "pronunciation": "애니씽 엘스"
    },
    {
      "word": "refill",
      "meaning": "다시 채워 주기",
      "pronunciation": "리필"
    },
    {
      "word": "tap water",
      "meaning": "수돗물·일반 식수",
      "pronunciation": "탭 워터"
    },
    {
      "word": "the bill, please",
      "meaning": "계산서 주세요",
      "pronunciation": "더 빌 플리즈"
    }
  ],
  [
    {
      "word": "Does it have nuts?",
      "meaning": "견과류가 들어 있나요?",
      "pronunciation": "더즈 잇 해브 넛츠"
    },
    {
      "word": "not too spicy",
      "meaning": "너무 맵지 않게",
      "pronunciation": "낫 투 스파이시"
    },
    {
      "word": "on the side",
      "meaning": "따로 담아서",
      "pronunciation": "온 더 사이드"
    },
    {
      "word": "without onions",
      "meaning": "양파 빼고",
      "pronunciation": "위다웃 어니언즈"
    },
    {
      "word": "vegetarian",
      "meaning": "채식주의자용의",
      "pronunciation": "베지테리언"
    },
    {
      "word": "What do you recommend?",
      "meaning": "무엇을 추천하세요?",
      "pronunciation": "왓 두 유 레커멘드"
    }
  ],
  [
    {
      "word": "try it on",
      "meaning": "입어 보다",
      "pronunciation": "트라이 잇 온"
    },
    {
      "word": "fitting room",
      "meaning": "탈의실",
      "pronunciation": "피팅 룸"
    },
    {
      "word": "Does it fit?",
      "meaning": "크기가 맞나요?",
      "pronunciation": "더즈 잇 핏"
    },
    {
      "word": "a bigger size",
      "meaning": "더 큰 사이즈",
      "pronunciation": "어 비거 사이즈"
    },
    {
      "word": "I'll take it.",
      "meaning": "이걸 살게요",
      "pronunciation": "아일 테이크 잇"
    },
    {
      "word": "just looking",
      "meaning": "그냥 구경 중",
      "pronunciation": "저스트 루킹"
    }
  ],
  [
    {
      "word": "Where can I find it?",
      "meaning": "어디에서 찾을 수 있나요?",
      "pronunciation": "웨어 캔 아이 파인드 잇"
    },
    {
      "word": "checkout",
      "meaning": "계산대",
      "pronunciation": "체크아웃"
    },
    {
      "word": "on sale",
      "meaning": "할인 중인",
      "pronunciation": "온 세일"
    },
    {
      "word": "a bag, please",
      "meaning": "봉투 주세요",
      "pronunciation": "어 백 플리즈"
    },
    {
      "word": "cash",
      "meaning": "현금",
      "pronunciation": "캐시"
    },
    {
      "word": "change",
      "meaning": "거스름돈",
      "pronunciation": "체인지"
    }
  ],
  [
    {
      "word": "turn right",
      "meaning": "오른쪽으로 돌다",
      "pronunciation": "턴 라이트"
    },
    {
      "word": "go straight",
      "meaning": "직진하다",
      "pronunciation": "고우 스트레이트"
    },
    {
      "word": "across from",
      "meaning": "맞은편에",
      "pronunciation": "어크로스 프럼"
    },
    {
      "word": "next to",
      "meaning": "바로 옆에",
      "pronunciation": "넥스트 투"
    },
    {
      "word": "Is it far?",
      "meaning": "먼가요?",
      "pronunciation": "이즈 잇 파"
    },
    {
      "word": "I'm lost.",
      "meaning": "길을 잃었어요",
      "pronunciation": "아임 로스트"
    }
  ],
  [
    {
      "word": "one-way",
      "meaning": "편도",
      "pronunciation": "원 웨이"
    },
    {
      "word": "round-trip",
      "meaning": "왕복",
      "pronunciation": "라운드 트립"
    },
    {
      "word": "get on",
      "meaning": "타다",
      "pronunciation": "겟 온"
    },
    {
      "word": "get off",
      "meaning": "내리다",
      "pronunciation": "겟 오프"
    },
    {
      "word": "Which stop?",
      "meaning": "어느 정류장이에요?",
      "pronunciation": "위치 스탑"
    },
    {
      "word": "Does this go to the airport?",
      "meaning": "이것이 공항으로 가나요?",
      "pronunciation": "더즈 디스 고우 투 디 에어포트"
    }
  ],
  [
    {
      "word": "check in",
      "meaning": "체크인하다",
      "pronunciation": "체크 인"
    },
    {
      "word": "included",
      "meaning": "포함된",
      "pronunciation": "인클루디드"
    },
    {
      "word": "room key",
      "meaning": "객실 열쇠",
      "pronunciation": "룸 키"
    },
    {
      "word": "front desk",
      "meaning": "프런트 데스크",
      "pronunciation": "프런트 데스크"
    },
    {
      "word": "check out",
      "meaning": "체크아웃하다",
      "pronunciation": "체크 아웃"
    },
    {
      "word": "under my name",
      "meaning": "제 이름으로",
      "pronunciation": "언더 마이 네임"
    }
  ],
  [
    {
      "word": "extra towel",
      "meaning": "추가 수건",
      "pronunciation": "엑스트라 타월"
    },
    {
      "word": "Wi-Fi password",
      "meaning": "와이파이 비밀번호",
      "pronunciation": "와이 파이 패스워드"
    },
    {
      "word": "not working",
      "meaning": "작동하지 않는",
      "pronunciation": "낫 워킹"
    },
    {
      "word": "hot water",
      "meaning": "온수",
      "pronunciation": "핫 워터"
    },
    {
      "word": "Could you check it?",
      "meaning": "확인해 주시겠어요?",
      "pronunciation": "쿠쥬 체크 잇"
    },
    {
      "word": "right away",
      "meaning": "바로",
      "pronunciation": "라이트 어웨이"
    }
  ],
  [
    {
      "word": "boarding pass",
      "meaning": "탑승권",
      "pronunciation": "보딩 패스"
    },
    {
      "word": "gate",
      "meaning": "탑승구",
      "pronunciation": "게이트"
    },
    {
      "word": "luggage",
      "meaning": "짐",
      "pronunciation": "러기지"
    },
    {
      "word": "return ticket",
      "meaning": "귀국 표",
      "pronunciation": "리턴 티킷"
    },
    {
      "word": "on vacation",
      "meaning": "휴가 중인",
      "pronunciation": "온 베이케이션"
    },
    {
      "word": "How long?",
      "meaning": "얼마나 오래요?",
      "pronunciation": "하우 롱"
    }
  ],
  [
    {
      "word": "Are you free?",
      "meaning": "시간 있어요?",
      "pronunciation": "아 유 프리"
    },
    {
      "word": "How about two?",
      "meaning": "2시는 어때요?",
      "pronunciation": "하우 어바웃 투"
    },
    {
      "word": "Works for me.",
      "meaning": "저는 괜찮아요",
      "pronunciation": "웍스 포 미"
    },
    {
      "word": "I'm running late.",
      "meaning": "조금 늦을 것 같아요",
      "pronunciation": "아임 러닝 레이트"
    },
    {
      "word": "See you there.",
      "meaning": "거기서 봐요",
      "pronunciation": "씨 유 데어"
    },
    {
      "word": "Let me know.",
      "meaning": "알려 주세요",
      "pronunciation": "렛 미 노우"
    }
  ],
  [
    {
      "word": "Could you help me?",
      "meaning": "도와주시겠어요?",
      "pronunciation": "쿠쥬 헬프 미"
    },
    {
      "word": "show me",
      "meaning": "보여 주다",
      "pronunciation": "쇼우 미"
    },
    {
      "word": "one more time",
      "meaning": "한 번 더",
      "pronunciation": "원 모어 타임"
    },
    {
      "word": "by tomorrow",
      "meaning": "내일까지",
      "pronunciation": "바이 투마로우"
    },
    {
      "word": "No problem.",
      "meaning": "문제없어요",
      "pronunciation": "노우 프라블럼"
    },
    {
      "word": "I'll handle it.",
      "meaning": "제가 처리할게요",
      "pronunciation": "아일 핸들 잇"
    }
  ],
  [
    {
      "word": "reschedule",
      "meaning": "일정을 다시 잡다",
      "pronunciation": "리스케줄"
    },
    {
      "word": "join",
      "meaning": "참석하다",
      "pronunciation": "조인"
    },
    {
      "word": "in person",
      "meaning": "직접 만나서",
      "pronunciation": "인 퍼슨"
    },
    {
      "word": "Does that work?",
      "meaning": "그렇게 해도 괜찮나요?",
      "pronunciation": "더즈 댓 워크"
    },
    {
      "word": "Let's meet online.",
      "meaning": "온라인으로 만나요",
      "pronunciation": "렛츠 밋 온라인"
    },
    {
      "word": "See you tomorrow.",
      "meaning": "내일 봐요",
      "pronunciation": "씨 유 투마로우"
    }
  ],
  [
    {
      "word": "free time",
      "meaning": "여가 시간",
      "pronunciation": "프리 타임"
    },
    {
      "word": "go hiking",
      "meaning": "등산하다",
      "pronunciation": "고우 하이킹"
    },
    {
      "word": "once a week",
      "meaning": "일주일에 한 번",
      "pronunciation": "원스 어 윅"
    },
    {
      "word": "join us",
      "meaning": "우리와 함께하다",
      "pronunciation": "조인 어스"
    },
    {
      "word": "take it easy",
      "meaning": "느긋하게 지내다",
      "pronunciation": "테이크 잇 이지"
    },
    {
      "word": "I'd love to.",
      "meaning": "좋아요·그러고 싶어요",
      "pronunciation": "아이드 러브 투"
    }
  ],
  [
    {
      "word": "How was it?",
      "meaning": "어땠어요?",
      "pronunciation": "하우 워즈 잇"
    },
    {
      "word": "had fun",
      "meaning": "즐겁게 보냈다",
      "pronunciation": "해드 펀"
    },
    {
      "word": "went out",
      "meaning": "외출했다",
      "pronunciation": "웬트 아웃"
    },
    {
      "word": "stayed home",
      "meaning": "집에 있었다",
      "pronunciation": "스테이드 홈"
    },
    {
      "word": "last weekend",
      "meaning": "지난 주말",
      "pronunciation": "래스트 위켄드"
    },
    {
      "word": "What did you do?",
      "meaning": "무엇을 했어요?",
      "pronunciation": "왓 디드 유 두"
    }
  ],
  [
    {
      "word": "wrong order",
      "meaning": "잘못된 주문",
      "pronunciation": "롱 오더"
    },
    {
      "word": "I ordered soup.",
      "meaning": "수프를 주문했어요",
      "pronunciation": "아이 오더드 수프"
    },
    {
      "word": "Could you change it?",
      "meaning": "바꿔 주시겠어요?",
      "pronunciation": "쿠쥬 체인지 잇"
    },
    {
      "word": "That's okay.",
      "meaning": "괜찮아요",
      "pronunciation": "댓츠 오케이"
    },
    {
      "word": "take it off the bill",
      "meaning": "계산서에서 빼다",
      "pronunciation": "테이크 잇 오프 더 빌"
    },
    {
      "word": "too cold",
      "meaning": "너무 차가운",
      "pronunciation": "투 콜드"
    }
  ],
  [
    {
      "word": "sore throat",
      "meaning": "목이 아픔",
      "pronunciation": "소어 쓰로트"
    },
    {
      "word": "stomachache",
      "meaning": "복통",
      "pronunciation": "스터먹에이크"
    },
    {
      "word": "pain",
      "meaning": "통증",
      "pronunciation": "페인"
    },
    {
      "word": "since yesterday",
      "meaning": "어제부터",
      "pronunciation": "신스 예스터데이"
    },
    {
      "word": "How often?",
      "meaning": "얼마나 자주요?",
      "pronunciation": "하우 오픈"
    },
    {
      "word": "side effects",
      "meaning": "부작용",
      "pronunciation": "사이드 이펙츠"
    }
  ],
  [
    {
      "word": "doesn't fit",
      "meaning": "크기가 맞지 않다",
      "pronunciation": "더즌트 핏"
    },
    {
      "word": "Can I exchange it?",
      "meaning": "교환할 수 있나요?",
      "pronunciation": "캔 아이 익스체인지 잇"
    },
    {
      "word": "a refund, please",
      "meaning": "환불 부탁해요",
      "pronunciation": "어 리펀드 플리즈"
    },
    {
      "word": "original card",
      "meaning": "결제했던 카드",
      "pronunciation": "어리저널 카드"
    },
    {
      "word": "too tight",
      "meaning": "너무 꽉 끼는",
      "pronunciation": "투 타이트"
    },
    {
      "word": "too loose",
      "meaning": "너무 헐렁한",
      "pronunciation": "투 루스"
    }
  ],
  [
    {
      "word": "lost and found",
      "meaning": "분실물 센터",
      "pronunciation": "로스트 앤드 파운드"
    },
    {
      "word": "I left it here.",
      "meaning": "여기에 두고 갔어요",
      "pronunciation": "아이 레프트 잇 히어"
    },
    {
      "word": "describe",
      "meaning": "설명하다",
      "pronunciation": "디스크라이브"
    },
    {
      "word": "last seen",
      "meaning": "마지막으로 본",
      "pronunciation": "래스트 씬"
    },
    {
      "word": "contact me",
      "meaning": "연락해 주세요",
      "pronunciation": "칸택트 미"
    },
    {
      "word": "Has anyone found it?",
      "meaning": "누가 찾았나요?",
      "pronunciation": "해즈 애니원 파운드 잇"
    }
  ],
  [
    {
      "word": "make a booking",
      "meaning": "예약하다",
      "pronunciation": "메이크 어 부킹"
    },
    {
      "word": "available",
      "meaning": "가능한·자리가 있는",
      "pronunciation": "어베일러블"
    },
    {
      "word": "for two people",
      "meaning": "두 명으로",
      "pronunciation": "포 투 피플"
    },
    {
      "word": "Could you spell that?",
      "meaning": "철자를 말해 주시겠어요?",
      "pronunciation": "쿠쥬 스펠 댓"
    },
    {
      "word": "confirm my booking",
      "meaning": "예약을 확인하다",
      "pronunciation": "컨펌 마이 부킹"
    },
    {
      "word": "cancel",
      "meaning": "취소하다",
      "pronunciation": "캔슬"
    }
  ],
  [
    {
      "word": "I'd like to visit.",
      "meaning": "방문하고 싶어요",
      "pronunciation": "아이드 라이크 투 비짓"
    },
    {
      "word": "nearby",
      "meaning": "근처의",
      "pronunciation": "니어바이"
    },
    {
      "word": "get around",
      "meaning": "이동해 다니다",
      "pronunciation": "겟 어라운드"
    },
    {
      "word": "local food",
      "meaning": "현지 음식",
      "pronunciation": "로컬 푸드"
    },
    {
      "word": "any suggestions",
      "meaning": "추천할 만한 것",
      "pronunciation": "애니 서제스천즈"
    },
    {
      "word": "if it rains",
      "meaning": "비가 오면",
      "pronunciation": "이프 잇 레인즈"
    }
  ],
  [
    {
      "word": "I'd love to, but…",
      "meaning": "그러고 싶지만…",
      "pronunciation": "아이드 러브 투 벗"
    },
    {
      "word": "Maybe next time.",
      "meaning": "다음 기회에요",
      "pronunciation": "메이비 넥스트 타임"
    },
    {
      "word": "Thanks for inviting me.",
      "meaning": "초대해 줘서 고마워요",
      "pronunciation": "쌩크스 포 인바이팅 미"
    },
    {
      "word": "Sounds great.",
      "meaning": "좋겠어요",
      "pronunciation": "사운즈 그레이트"
    },
    {
      "word": "I have plans.",
      "meaning": "약속이 있어요",
      "pronunciation": "아이 해브 플랜즈"
    },
    {
      "word": "How about Sunday?",
      "meaning": "일요일은 어때요?",
      "pronunciation": "하우 어바웃 선데이"
    }
  ],
  [
    {
      "word": "I think…",
      "meaning": "제 생각에는…",
      "pronunciation": "아이 씽크"
    },
    {
      "word": "I agree.",
      "meaning": "동의해요",
      "pronunciation": "아이 어그리"
    },
    {
      "word": "I'm not sure.",
      "meaning": "잘 모르겠어요",
      "pronunciation": "아임 낫 슈어"
    },
    {
      "word": "What do you think?",
      "meaning": "어떻게 생각해요?",
      "pronunciation": "왓 두 유 씽크"
    },
    {
      "word": "save time",
      "meaning": "시간을 아끼다",
      "pronunciation": "세이브 타임"
    },
    {
      "word": "good idea",
      "meaning": "좋은 생각",
      "pronunciation": "굿 아이디어"
    }
  ],
  [
    {
      "word": "miss the train",
      "meaning": "기차를 놓치다",
      "pronunciation": "미스 더 트레인"
    },
    {
      "word": "next available",
      "meaning": "다음에 가능한",
      "pronunciation": "넥스트 어베일러블"
    },
    {
      "word": "change my ticket",
      "meaning": "표를 바꾸다",
      "pronunciation": "체인지 마이 티킷"
    },
    {
      "word": "How much extra?",
      "meaning": "추가 비용이 얼마인가요?",
      "pronunciation": "하우 머치 엑스트라"
    },
    {
      "word": "delayed",
      "meaning": "지연된",
      "pronunciation": "딜레이드"
    },
    {
      "word": "Can I take the next one?",
      "meaning": "다음 것을 탈 수 있나요?",
      "pronunciation": "캔 아이 테이크 더 넥스트 원"
    }
  ],
  [
    {
      "word": "to be honest",
      "meaning": "솔직히 말하면",
      "pronunciation": "투 비 아너스트"
    },
    {
      "word": "What about you?",
      "meaning": "그쪽은요?",
      "pronunciation": "왓 어바웃 유"
    },
    {
      "word": "I mean…",
      "meaning": "제 말은…",
      "pronunciation": "아이 민"
    },
    {
      "word": "let me think",
      "meaning": "생각해 볼게요",
      "pronunciation": "렛 미 씽크"
    },
    {
      "word": "by the way",
      "meaning": "그런데",
      "pronunciation": "바이 더 웨이"
    },
    {
      "word": "Could you explain?",
      "meaning": "설명해 주시겠어요?",
      "pronunciation": "쿠쥬 익스플레인"
    }
  ]
];
function legacyWordsForDay(day){
 const d=sixMonthCourse.days[day-1],source=dailyWordSets[d.module].slice(0,6);
 let result=Array.from({length:5},(_,i)=>source[(d.routine+i)%source.length]);
 if(d.routine===4&&d.module>0)result=[...source.slice(0,3),...dailyWordSets[d.module-1].slice(0,6).filter(w=>!source.slice(0,3).some(x=>x.word.toLowerCase()===w.word.toLowerCase())).slice(0,2)];
 return result;
}
extraConversationWords.forEach((words,i)=>dailyWordSets[i].push(...words));
