
"use strict";

/* ==========================================
   1. INGLIZCHA LUG'AT
   Qidiruv inglizcha so'z, tarjima va misolda ishlaydi.
========================================== */

const vocabulary = [
  { word: "apple", meaning: "olma", example: "I eat an apple every day.", level: "A1" },
  { word: "book", meaning: "kitob", example: "This is my favorite book.", level: "A1" },
  { word: "water", meaning: "suv", example: "Please give me some water.", level: "A1" },
  { word: "house", meaning: "uy", example: "My house is very beautiful.", level: "A1" },
  { word: "school", meaning: "maktab", example: "I go to school every morning.", level: "A1" },
  { word: "friend", meaning: "do‘st", example: "My friend is very kind.", level: "A1" },
  { word: "family", meaning: "oila", example: "I love my family.", level: "A1" },
  { word: "mother", meaning: "ona", example: "My mother is a teacher.", level: "A1" },
  { word: "father", meaning: "ota", example: "My father works every day.", level: "A1" },
  { word: "brother", meaning: "aka, uka", example: "My brother likes football.", level: "A1" },
  { word: "sister", meaning: "opa, singil", example: "My sister is reading.", level: "A1" },
  { word: "food", meaning: "ovqat", example: "The food is delicious.", level: "A1" },
  { word: "bread", meaning: "non", example: "I bought some fresh bread.", level: "A1" },
  { word: "milk", meaning: "sut", example: "She drinks milk every morning.", level: "A1" },
  { word: "house", meaning: "uy", example: "Their house is near the park.", level: "A1" },
  { word: "city", meaning: "shahar", example: "This city is very large.", level: "A1" },
  { word: "country", meaning: "mamlakat", example: "Uzbekistan is my country.", level: "A1" },
  { word: "morning", meaning: "ertalab", example: "I wake up early in the morning.", level: "A1" },
  { word: "night", meaning: "tun", example: "Good night, see you tomorrow.", level: "A1" },
  { word: "today", meaning: "bugun", example: "I am busy today.", level: "A1" },
  { word: "tomorrow", meaning: "ertaga", example: "We will meet tomorrow.", level: "A1" },
  { word: "beautiful", meaning: "chiroyli", example: "What a beautiful day!", level: "A1" },
  { word: "happy", meaning: "baxtli, xursand", example: "I am happy to see you.", level: "A1" },
  { word: "learn", meaning: "o‘rganmoq", example: "I learn English every day.", level: "A1" },
  { word: "speak", meaning: "gapirmoq", example: "Can you speak English?", level: "A1" },
  { word: "listen", meaning: "tinglamoq", example: "Listen to the teacher carefully.", level: "A1" },
  { word: "read", meaning: "o‘qimoq", example: "I read books at night.", level: "A1" },
  { word: "write", meaning: "yozmoq", example: "Please write your name here.", level: "A1" },
  { word: "work", meaning: "ishlamoq", example: "I work from Monday to Friday.", level: "A1" },
  { word: "play", meaning: "o‘ynamoq", example: "They play football after school.", level: "A1" },
  { word: "walk", meaning: "piyoda yurmoq", example: "I walk to school.", level: "A1" },
  { word: "run", meaning: "yugurmoq", example: "He can run very fast.", level: "A1" },
  { word: "eat", meaning: "yemoq", example: "We eat dinner at seven.", level: "A1" },
  { word: "drink", meaning: "ichmoq", example: "Drink enough water every day.", level: "A1" },
  { word: "sleep", meaning: "uxlamoq", example: "Babies sleep a lot.", level: "A1" },
  { word: "buy", meaning: "sotib olmoq", example: "I want to buy a new phone.", level: "A1" },
  { word: "help", meaning: "yordam bermoq", example: "Can you help me, please?", level: "A1" },
  { word: "beautiful", meaning: "go‘zal", example: "The garden looks beautiful.", level: "A1" },
  { word: "important", meaning: "muhim", example: "English is important for my future.", level: "A2" },
  { word: "different", meaning: "turli, boshqacha", example: "We have different opinions.", level: "A2" },
  { word: "improve", meaning: "yaxshilamoq", example: "I want to improve my English.", level: "A2" },
  { word: "remember", meaning: "eslab qolmoq", example: "Remember these new words.", level: "A2" },
  { word: "forget", meaning: "unutmoq", example: "Do not forget your keys.", level: "A2" },
  { word: "choose", meaning: "tanlamoq", example: "Choose the correct answer.", level: "A2" },
  { word: "answer", meaning: "javob bermoq; javob", example: "Please answer the question.", level: "A1" },
  { word: "question", meaning: "savol", example: "I have a question for you.", level: "A1" },
  { word: "always", meaning: "har doim", example: "She always arrives on time.", level: "A1" },
  { word: "usually", meaning: "odatda", example: "I usually drink tea in the morning.", level: "A2" },
  { word: "sometimes", meaning: "ba’zan", example: "Sometimes I walk to work.", level: "A2" },
  { word: "never", meaning: "hech qachon", example: "I never smoke.", level: "A2" },
  { word: "because", meaning: "chunki", example: "I stayed home because it was raining.", level: "A2" },
  { word: "although", meaning: "garchi, ... bo‘lsa-da", example: "Although it was cold, we went outside.", level: "B1" },
  { word: "experience", meaning: "tajriba", example: "This job gave me valuable experience.", level: "B1" },
  { word: "opportunity", meaning: "imkoniyat", example: "This is a great opportunity.", level: "B1" },
  { word: "achieve", meaning: "erishmoq", example: "You can achieve your goals.", level: "B1" },
  { word: "environment", meaning: "atrof-muhit", example: "We must protect the environment.", level: "B1" },
  { word: "knowledge", meaning: "bilim", example: "Knowledge is very powerful.", level: "B1" },
  { word: "develop", meaning: "rivojlantirmoq", example: "I want to develop my skills.", level: "B1" },
  { word: "decision", meaning: "qaror", example: "It was a difficult decision.", level: "B1" },
  { word: "successful", meaning: "muvaffaqiyatli", example: "She is a successful programmer.", level: "B1" },
  { word: "necessary", meaning: "zarur, kerakli", example: "Practice is necessary for progress.", level: "B1" },
  { word: "confident", meaning: "o‘ziga ishongan", example: "Try to be confident when speaking.", level: "B1" },
  { word: "challenge", meaning: "qiyinchilik, sinov", example: "Learning a language is a challenge.", level: "B1" },
  { word: "explain", meaning: "tushuntirmoq", example: "Can you explain this rule?", level: "A2" },
  { word: "understand", meaning: "tushunmoq", example: "I understand the lesson.", level: "A2" },
  { word: "travel", meaning: "sayohat qilmoq", example: "I want to travel around the world.", level: "A2" },
  { word: "healthy", meaning: "sog‘lom", example: "Eating vegetables is healthy.", level: "A2" },
  { word: "expensive", meaning: "qimmat", example: "That computer is expensive.", level: "A2" },
  { word: "cheap", meaning: "arzon", example: "This shop sells cheap clothes.", level: "A2" },
  { word: "weather", meaning: "ob-havo", example: "The weather is sunny today.", level: "A1" },
  { word: "computer", meaning: "kompyuter", example: "I use my computer to study.", level: "A1" },
  { word: "language", meaning: "til", example: "English is an international language.", level: "A1" },
  { word: "practice", meaning: "mashq qilmoq; mashq", example: "Practice speaking every day.", level: "A2" },
  { word: "mistake", meaning: "xato", example: "Everyone makes mistakes.", level: "A2" },
  { word: "future", meaning: "kelajak", example: "I am planning for my future.", level: "A2" },
  { word: "goal", meaning: "maqsad", example: "My goal is to speak English fluently.", level: "A2" },
  { word: "quickly", meaning: "tezda", example: "She finished the task quickly.", level: "A2" },
  { word: "carefully", meaning: "ehtiyotkorlik bilan", example: "Read the instructions carefully.", level: "A2" },
  { word: "possible", meaning: "mumkin", example: "Is it possible to learn this today?", level: "A2" },
  { word: "believe", meaning: "ishonmoq", example: "Believe in yourself.", level: "A2" },
  { word: "decide", meaning: "qaror qilmoq", example: "We need to decide today.", level: "A2" },
  { word: "continue", meaning: "davom ettirmoq", example: "Continue learning new words.", level: "A2" },
  { word: "achieve", meaning: "erishmoq", example: "Hard work helps you achieve success.", level: "B1" },
  { word: "suggest", meaning: "taklif qilmoq", example: "I suggest taking a short break.", level: "B1" },
  { word: "avoid", meaning: "chetlab o‘tmoq, oldini olmoq", example: "Try to avoid common mistakes.", level: "B1" },
  { word: "increase", meaning: "oshirmoq, ko‘paymoq", example: "Reading can increase your vocabulary.", level: "B1" },
  { word: "reduce", meaning: "kamaytirmoq", example: "We should reduce waste.", level: "B1" },
  { word: "require", meaning: "talab qilmoq", example: "This task requires patience.", level: "B1" },
  { word: "support", meaning: "qo‘llab-quvvatlamoq", example: "My family supports my goals.", level: "B1" },
  { word: "realize", meaning: "anglamoq", example: "I realized my mistake.", level: "B1" },
  { word: "consider", meaning: "ko‘rib chiqmoq", example: "Please consider my suggestion.", level: "B1" },
  { word: "instead", meaning: "o‘rniga", example: "Let's walk instead of driving.", level: "B1" },
  { word: "however", meaning: "biroq", example: "It was difficult; however, I finished.", level: "B1" },
  { word: "therefore", meaning: "shuning uchun", example: "It was late; therefore, we left.", level: "B1" },
  { word: "reliable", meaning: "ishonchli", example: "He is a reliable friend.", level: "B1" },
  { word: "behavior", meaning: "xulq-atvor", example: "Good behavior is important.", level: "B1" },
  { word: "relationship", meaning: "munosabat", example: "Communication improves relationships.", level: "B1" },
  { word: "opinion", meaning: "fikr", example: "In my opinion, this is useful.", level: "A2" },
  { word: "reason", meaning: "sabab", example: "What is the reason for this?", level: "A2" },
  { word: "result", meaning: "natija", example: "Practice brings good results.", level: "A2" },
  { word: "habit", meaning: "odat", example: "Reading is a good habit.", level: "A2" },
  { word: "journey", meaning: "sayohat, safar", example: "Learning English is a journey.", level: "A2" },
  { word: "skill", meaning: "ko‘nikma", example: "Programming is a useful skill.", level: "A2" },
  { word: "success", meaning: "muvaffaqiyat", example: "Success takes time and effort.", level: "A2" },
  { word: "effort", meaning: "harakat, sa’y", example: "Your effort will make a difference.", level: "B1" },
  { word: "progress", meaning: "rivojlanish, taraqqiyot", example: "I can see your progress.", level: "B1" },
  { word: "fluent", meaning: "ravon", example: "She speaks English fluently.", level: "B1" }
];


/* ==========================================
   2. NOTO'G'RI FE'LLAR
========================================== */

const irregularVerbs = [
  ["be", "was / were", "been", "bo‘lmoq"],
  ["become", "became", "become", "bo‘lib qolmoq"],
  ["begin", "began", "begun", "boshlamoq"],
  ["break", "broke", "broken", "sindirmoq"],
  ["bring", "brought", "brought", "olib kelmoq"],
  ["build", "built", "built", "qurmoq"],
  ["buy", "bought", "bought", "sotib olmoq"],
  ["catch", "caught", "caught", "tutmoq"],
  ["choose", "chose", "chosen", "tanlamoq"],
  ["come", "came", "come", "kelmoq"],
  ["cost", "cost", "cost", "narxi bo‘lmoq"],
  ["cut", "cut", "cut", "kesmoq"],
  ["do", "did", "done", "qilmoq"],
  ["draw", "drew", "drawn", "chizmoq"],
  ["drink", "drank", "drunk", "ichmoq"],
  ["drive", "drove", "driven", "haydamoq"],
  ["eat", "ate", "eaten", "yemoq"],
  ["fall", "fell", "fallen", "yiqilmoq"],
  ["feel", "felt", "felt", "his qilmoq"],
  ["fight", "fought", "fought", "jang qilmoq"],
  ["find", "found", "found", "topmoq"],
  ["fly", "flew", "flown", "uchmoq"],
  ["forget", "forgot", "forgotten", "unutmoq"],
  ["forgive", "forgave", "forgiven", "kechirmoq"],
  ["get", "got", "got / gotten", "olmoq, ega bo‘lmoq"],
  ["give", "gave", "given", "bermoq"],
  ["go", "went", "gone", "bormoq"],
  ["grow", "grew", "grown", "o‘smoq"],
  ["have", "had", "had", "ega bo‘lmoq"],
  ["hear", "heard", "heard", "eshitmoq"],
  ["hide", "hid", "hidden", "yashirmoq"],
  ["hit", "hit", "hit", "urmoq"],
  ["hold", "held", "held", "ushlamoq"],
  ["keep", "kept", "kept", "saqlamoq"],
  ["know", "knew", "known", "bilmoq"],
  ["leave", "left", "left", "ketmoq, tark etmoq"],
  ["lend", "lent", "lent", "qarzga bermoq"],
  ["let", "let", "let", "ruxsat bermoq"],
  ["lose", "lost", "lost", "yo‘qotmoq"],
  ["make", "made", "made", "yasamoq"],
  ["mean", "meant", "meant", "anglatmoq"],
  ["meet", "met", "met", "uchrashmoq"],
  ["pay", "paid", "paid", "to‘lamoq"],
  ["put", "put", "put", "qo‘ymoq"],
  ["read", "read", "read", "o‘qimoq"],
  ["ride", "rode", "ridden", "minmoq"],
  ["ring", "rang", "rung", "jiringlamoq"],
  ["rise", "rose", "risen", "ko‘tarilmoq"],
  ["run", "ran", "run", "yugurmoq"],
  ["say", "said", "said", "aytmoq"],
  ["see", "saw", "seen", "ko‘rmoq"],
  ["sell", "sold", "sold", "sotmoq"],
  ["send", "sent", "sent", "yubormoq"],
  ["set", "set", "set", "o‘rnatmoq"],
  ["shake", "shook", "shaken", "silkitmoq"],
  ["shine", "shone", "shone", "porlamoq"],
  ["shoot", "shot", "shot", "otmoq"],
  ["show", "showed", "shown", "ko‘rsatmoq"],
  ["shut", "shut", "shut", "yopmoq"],
  ["sing", "sang", "sung", "kuylamoq"],
  ["sit", "sat", "sat", "o‘tirmoq"],
  ["sleep", "slept", "slept", "uxlamoq"],
  ["speak", "spoke", "spoken", "gapirmoq"],
  ["spend", "spent", "spent", "sarflamoq"],
  ["stand", "stood", "stood", "turmoq"],
  ["steal", "stole", "stolen", "o‘g‘irlamoq"],
  ["swim", "swam", "swum", "suzmoq"],
  ["take", "took", "taken", "olmoq"],
  ["teach", "taught", "taught", "o‘rgatmoq"],
  ["tell", "told", "told", "aytib bermoq"],
  ["think", "thought", "thought", "o‘ylamoq"],
  ["throw", "threw", "thrown", "uloqtirmoq"],
  ["understand", "understood", "understood", "tushunmoq"],
  ["wake", "woke", "woken", "uyg‘onmoq"],
  ["wear", "wore", "worn", "kiymoq"],
  ["win", "won", "won", "yutmoq"],
  ["write", "wrote", "written", "yozmoq"]
];


/* ==========================================
   3. 12 TA ZAMON FORMULA CHART
========================================== */

const tenseFormulas = [
  {
    name: "Present Simple",
    subtitle: "Oddiy hozirgi zamon",
    positive: "S + V1 (he/she/it: V-s/es) + O",
    negative: "S + do/does + not + V1 + O",
    question: "Do/Does + S + V1 + O?",
    example: "She works every day.",
    use: "Odatlar, takroriy ishlar va umumiy haqiqatlar."
  },
  {
    name: "Present Continuous",
    subtitle: "Hozirgi davomiy zamon",
    positive: "S + am/is/are + V-ing + O",
    negative: "S + am/is/are + not + V-ing + O",
    question: "Am/Is/Are + S + V-ing + O?",
    example: "She is working now.",
    use: "Hozir sodir bo‘layotgan yoki vaqtinchalik ishlar."
  },
  {
    name: "Present Perfect",
    subtitle: "Hozirgi tugallangan zamon",
    positive: "S + have/has + V3 + O",
    negative: "S + have/has + not + V3 + O",
    question: "Have/Has + S + V3 + O?",
    example: "She has finished her work.",
    use: "Natijasi hozirga bog‘liq ishlar yoki tajriba."
  },
  {
    name: "Present Perfect Continuous",
    subtitle: "Hozirgi tugallangan davomiy zamon",
    positive: "S + have/has + been + V-ing",
    negative: "S + have/has + not + been + V-ing",
    question: "Have/Has + S + been + V-ing?",
    example: "She has been working for two hours.",
    use: "O‘tmishda boshlangan va hozirgacha davom etayotgan ish."
  },
  {
    name: "Past Simple",
    subtitle: "Oddiy o‘tgan zamon",
    positive: "S + V2 + O",
    negative: "S + did + not + V1 + O",
    question: "Did + S + V1 + O?",
    example: "She worked yesterday.",
    use: "O‘tmishda tugagan ishlar."
  },
  {
    name: "Past Continuous",
    subtitle: "O‘tgan davomiy zamon",
    positive: "S + was/were + V-ing + O",
    negative: "S + was/were + not + V-ing + O",
    question: "Was/Were + S + V-ing + O?",
    example: "She was working at 8 p.m.",
    use: "O‘tmishdagi ma’lum bir vaqtda davom etgan ish."
  },
  {
    name: "Past Perfect",
    subtitle: "O‘tgan tugallangan zamon",
    positive: "S + had + V3 + O",
    negative: "S + had + not + V3 + O",
    question: "Had + S + V3 + O?",
    example: "She had left before I arrived.",
    use: "O‘tmishdagi boshqa bir ishdan oldin tugagan ish."
  },
  {
    name: "Past Perfect Continuous",
    subtitle: "O‘tgan tugallangan davomiy zamon",
    positive: "S + had + been + V-ing",
    negative: "S + had + not + been + V-ing",
    question: "Had + S + been + V-ing?",
    example: "She had been working for two hours before lunch.",
    use: "O‘tmishdagi bir vaqtgacha qancha davom etganini ko‘rsatadi."
  },
  {
    name: "Future Simple",
    subtitle: "Oddiy kelasi zamon",
    positive: "S + will + V1 + O",
    negative: "S + will + not + V1 + O",
    question: "Will + S + V1 + O?",
    example: "She will work tomorrow.",
    use: "Kelajakdagi qarorlar, taxminlar va va’dalar."
  },
  {
    name: "Future Continuous",
    subtitle: "Kelasi davomiy zamon",
    positive: "S + will + be + V-ing",
    negative: "S + will + not + be + V-ing",
    question: "Will + S + be + V-ing?",
    example: "She will be working at 8 p.m. tomorrow.",
    use: "Kelajakdagi ma’lum bir vaqtda davom etadigan ish."
  },
  {
    name: "Future Perfect",
    subtitle: "Kelasi tugallangan zamon",
    positive: "S + will + have + V3",
    negative: "S + will + not + have + V3",
    question: "Will + S + have + V3?",
    example: "She will have finished by Friday.",
    use: "Kelajakdagi belgilangan vaqtgacha tugaydigan ish."
  },
  {
    name: "Future Perfect Continuous",
    subtitle: "Kelasi tugallangan davomiy zamon",
    positive: "S + will + have + been + V-ing",
    negative: "S + will + not + have + been + V-ing",
    question: "Will + S + have + been + V-ing?",
    example: "By June, she will have been working here for a year.",
    use: "Kelajakdagi bir vaqtgacha ish qancha davom etganini ko‘rsatadi."
  }
];


/* ==========================================
   4. TEST SAVOLLARI
========================================== */

const quizQuestions = [
  {
    question: '"Apple" so‘zining tarjimasi nima?',
    options: ["Nok", "Olma", "Uzum", "Shaftoli"],
    answer: 1,
    explanation: "Apple — olma."
  },
  {
    question: 'Go fe’lining V2 shakli qaysi?',
    options: ["Goed", "Gone", "Went", "Going"],
    answer: 2,
    explanation: "Go — went — gone."
  },
  {
    question: "Present Simple: She ___ English every day.",
    options: ["study", "studies", "studying", "studied"],
    answer: 1,
    explanation: "He/she/it bilan Present Simple'da studies ishlatiladi."
  },
  {
    question: "Water so‘zi nimani anglatadi?",
    options: ["Sut", "Choy", "Suv", "Non"],
    answer: 2,
    explanation: "Water — suv."
  },
  {
    question: "Write fe’lining V3 shakli qaysi?",
    options: ["Wrote", "Written", "Writing", "Writes"],
    answer: 1,
    explanation: "Write — wrote — written."
  },
  {
    question: "Past Simple inkor formulasi qaysi?",
    options: [
      "S + do not + V2",
      "S + did not + V1",
      "S + was + V3",
      "S + will + V2"
    ],
    answer: 1,
    explanation: "Past Simple inkor: S + did not + V1."
  },
  {
    question: '"Beautiful" so‘zining ma’nosi nima?',
    options: ["Qiyin", "Chiroyli", "Tez", "Kichik"],
    answer: 1,
    explanation: "Beautiful — chiroyli, go‘zal."
  },
  {
    question: "Present Continuous formulasi qaysi?",
    options: [
      "S + V2",
      "S + have + V3",
      "S + am/is/are + V-ing",
      "S + will + V1"
    ],
    answer: 2,
    explanation: "Present Continuous: S + am/is/are + V-ing."
  },
  {
    question: "Buy fe’lining V2 shakli qaysi?",
    options: ["Buyed", "Bought", "Buying", "Buy"],
    answer: 1,
    explanation: "Buy — bought — bought."
  },
  {
    question: '"Opportunity" so‘zi nimani anglatadi?',
    options: ["Muammo", "Qaror", "Imkoniyat", "Xato"],
    answer: 2,
    explanation: "Opportunity — imkoniyat."
  }
];


/* ==========================================
   5. UMUMIY YORDAMCHI FUNKSIYALAR
========================================== */

const $ = (selector) => document.querySelector(selector);

function normalizeText(value) {
  return String(value)
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    alert("Bu brauzerda ovozli talaffuz qo‘llab-quvvatlanmaydi.");
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.85;

  window.speechSynthesis.speak(utterance);
}


/* ==========================================
   6. LUG'ATNI CHIQARISH VA QIDIRISH
========================================== */

const vocabSearch = $("#vocabSearch");
const levelFilter = $("#levelFilter");
const wordFilter = $("#wordFilter");
const wordGrid = $("#wordGrid");
const emptyWords = $("#emptyWords");
const resultCount = $("#resultCount");

let favorites = new Set();

try {
  const savedFavorites = JSON.parse(
    localStorage.getItem("englishFlowFavorites") || "[]"
  );

  if (Array.isArray(savedFavorites)) {
    favorites = new Set(savedFavorites);
  }
} catch {
  favorites = new Set();
}

function saveFavorites() {
  try {
    localStorage.setItem(
      "englishFlowFavorites",
      JSON.stringify([...favorites])
    );
  } catch {
    // Sayt saqlash imkoniyati bo‘lmasa ham ishlashda davom etadi.
  }
}

function renderVocabulary() {
  const query = normalizeText(vocabSearch.value);
  const level = levelFilter.value;
  const type = wordFilter.value;

  const filteredWords = vocabulary.filter((item) => {
    const searchableText = normalizeText(
      `${item.word} ${item.meaning} ${item.example}`
    );

    const matchesSearch = searchableText.includes(query);
    const matchesLevel = level === "all" || item.level === level;
    const matchesFavorite =
      type !== "favorites" || favorites.has(item.word);

    return matchesSearch && matchesLevel && matchesFavorite;
  });

  wordGrid.replaceChildren();

  filteredWords.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "word-card";
    card.style.animationDelay = `${Math.min(index * 25, 250)}ms`;

    const top = document.createElement("div");
    top.className = "word-card-top";

    const title = document.createElement("h3");
    title.textContent = item.word;

    const actions = document.createElement("div");
    actions.className = "word-actions";

    const speakButton = document.createElement("button");
    speakButton.type = "button";
    speakButton.className = "icon-btn";
    speakButton.textContent = "🔊";
    speakButton.title = `${item.word} talaffuzini tinglash`;
    speakButton.setAttribute("aria-label", `${item.word} talaffuzi`);
    speakButton.addEventListener("click", () => speak(item.word));

    const favoriteButton = document.createElement("button");
    favoriteButton.type = "button";
    favoriteButton.className = "icon-btn";
    favoriteButton.textContent = favorites.has(item.word) ? "★" : "☆";
    favoriteButton.classList.toggle("active", favorites.has(item.word));
    favoriteButton.title = "Sevimlilarga qo‘shish";
    favoriteButton.setAttribute("aria-label", "Sevimlilarga qo‘shish");

    favoriteButton.addEventListener("click", () => {
      if (favorites.has(item.word)) {
        favorites.delete(item.word);
      } else {
        favorites.add(item.word);
      }

      saveFavorites();
      renderVocabulary();
    });

    actions.append(speakButton, favoriteButton);
    top.append(title, actions);

    const meaning = document.createElement("p");
    meaning.className = "meaning";
    meaning.textContent = item.meaning;

    const example = document.createElement("p");
    example.className = "example";
    example.textContent = `“${item.example}”`;

    const meta = document.createElement("div");
    meta.className = "word-meta";

    const levelTag = document.createElement("span");
    levelTag.className = "level-tag";
    levelTag.textContent = item.level;

    const levelText = document.createElement("span");
    levelText.className = "example";
    levelText.textContent =
      item.level === "A1" ? "Boshlang‘ich" :
      item.level === "A2" ? "Elementar" : "O‘rta";

    meta.append(levelTag, levelText);
    card.append(top, meaning, example, meta);
    wordGrid.append(card);
  });

  resultCount.textContent = `${filteredWords.length} ta so‘z topildi`;
  emptyWords.classList.toggle("hidden", filteredWords.length !== 0);
}

vocabSearch.addEventListener("input", renderVocabulary);
levelFilter.addEventListener("change", renderVocabulary);
wordFilter.addEventListener("change", renderVocabulary);


/* ==========================================
   7. NOTO'G'RI FE'LLAR JADVALI
========================================== */

const verbSearch = $("#verbSearch");
const verbSort = $("#verbSort");
const verbTable = $("#verbTable");
const verbResultCount = $("#verbResultCount");

function renderVerbs() {
  const query = normalizeText(verbSearch.value);
  let rows = irregularVerbs.filter((verb) => {
    return normalizeText(verb.join(" ")).includes(query);
  });

  if (verbSort.value === "az") {
    rows.sort((a, b) => a[0].localeCompare(b[0]));
  } else if (verbSort.value === "za") {
    rows.sort((a, b) => b[0].localeCompare(a[0]));
  }

  verbTable.replaceChildren();

  rows.forEach((verb, index) => {
    const tr = document.createElement("tr");
    const values = [index + 1, ...verb];

    values.forEach((value, columnIndex) => {
      const td = document.createElement("td");
      td.textContent = value;

      if (columnIndex === 5) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "icon-btn";
        button.textContent = "🔊";
        button.title = `${verb[0]} talaffuzini tinglash`;
        button.setAttribute("aria-label", `${verb[0]} talaffuzi`);
        button.addEventListener("click", () => speak(verb[0]));
        td.append(button);
      }

      tr.append(td);
    });

    verbTable.append(tr);
  });

  verbResultCount.textContent =
    `${rows.length} ta fe’l ko‘rsatildi. Jami: ${irregularVerbs.length} ta fe’l.`;
}

verbSearch.addEventListener("input", renderVerbs);
verbSort.addEventListener("change", renderVerbs);


/* ==========================================
   8. FORMULA CHARTNI CHIQARISH
========================================== */

function createFormulaRow(label, formula, type) {
  const row = document.createElement("div");
  row.className = "formula-row";

  const labelElement = document.createElement("span");
  labelElement.className = `formula-label ${type}`;
  labelElement.textContent = label;

  const formulaElement = document.createElement("div");
  formulaElement.className = "formula-text";
  formulaElement.textContent = formula;

  row.append(labelElement, formulaElement);
  return row;
}

function renderFormulas() {
  const formulaGrid = $("#formulaGrid");
  formulaGrid.replaceChildren();

  tenseFormulas.forEach((tense, index) => {
    const card = document.createElement("article");
    card.className = "formula-card";
    card.style.animationDelay = `${Math.min(index * 35, 300)}ms`;

    const title = document.createElement("h3");
    title.textContent = tense.name;

    const subtitle = document.createElement("p");
    subtitle.className = "formula-subtitle";
    subtitle.textContent = tense.subtitle;

    const positive = createFormulaRow("+ Tasdiq", tense.positive, "positive");
    const negative = createFormulaRow("− Inkor", tense.negative, "negative");
    const question = createFormulaRow("? Savol", tense.question, "question");

    const example = document.createElement("p");
    example.className = "formula-example";

    const exampleLabel = document.createElement("strong");
    exampleLabel.textContent = "Misol: ";

    const exampleText = document.createTextNode(tense.example);
    const br = document.createElement("br");
    const useLabel = document.createElement("strong");
    useLabel.textContent = "Ishlatilishi: ";
    const useText = document.createTextNode(tense.use);

    example.append(exampleLabel, exampleText, br, useLabel, useText);
    card.append(title, subtitle, positive, negative, question, example);
    formulaGrid.append(card);
  });
}


/* ==========================================
   9. INTERAKTIV TEST
========================================== */

const quizQuestion = $("#quizQuestion");
const quizOptions = $("#quizOptions");
const quizProgress = $("#quizProgress");
const quizScore = $("#quizScore");
const progressFill = $("#progressFill");
const quizFeedback = $("#quizFeedback");
const nextQuestionButton = $("#nextQuestion");
const restartQuizButton = $("#restartQuiz");

let currentQuestion = 0;
let score = 0;
let answered = false;

function renderQuestion() {
  answered = false;

  const question = quizQuestions[currentQuestion];

  quizQuestion.textContent = question.question;
  quizProgress.textContent =
    `Savol ${currentQuestion + 1} / ${quizQuestions.length}`;
  quizScore.textContent = `Natija: ${score}`;
  progressFill.style.width =
    `${(currentQuestion / quizQuestions.length) * 100}%`;

  quizOptions.replaceChildren();
  quizFeedback.textContent = "";
  quizFeedback.className = "quiz-feedback";
  nextQuestionButton.disabled = true;

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "quiz-option";
    button.textContent = option;

    button.addEventListener("click", () => {
      checkAnswer(index);
    });

    quizOptions.append(button);
  });
}

function checkAnswer(selectedIndex) {
  if (answered) return;
  answered = true;

  const question = quizQuestions[currentQuestion];
  const buttons = [...quizOptions.querySelectorAll("button")];
  const isCorrect = selectedIndex === question.answer;

  if (isCorrect) {
    score++;
    quizFeedback.textContent = `To‘g‘ri! ${question.explanation}`;
    quizFeedback.classList.add("good");
  } else {
    quizFeedback.textContent =
      `Noto‘g‘ri. To‘g‘ri javob: ${question.options[question.answer]}. ${question.explanation}`;
    quizFeedback.classList.add("bad");
  }

  buttons.forEach((button, index) => {
    button.disabled = true;

    if (index === question.answer) {
      button.classList.add("correct");
    } else if (index === selectedIndex) {
      button.classList.add("incorrect");
    }
  });

  quizScore.textContent = `Natija: ${score}`;
  progressFill.style.width =
    `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;

  nextQuestionButton.disabled = false;
  nextQuestionButton.textContent =
    currentQuestion === quizQuestions.length - 1
      ? "Natijani ko‘rish →"
      : "Keyingi savol →";
}

function showQuizResult() {
  quizProgress.textContent = "Test yakunlandi";
  quizScore.textContent = `Natija: ${score} / ${quizQuestions.length}`;
  progressFill.style.width = "100%";

  quizQuestion.textContent =
    score >= 8 ? "Ajoyib natija! 🎉" :
    score >= 5 ? "Yaxshi! Yana mashq qiling. 💪" :
    "Mashqni davom ettiring! 🌱";

  quizOptions.replaceChildren();

  const result = document.createElement("p");
  result.className = "quiz-feedback";
  result.textContent =
    `Siz ${quizQuestions.length} ta savoldan ${score} tasiga to‘g‘ri javob berdingiz.`;

  quizOptions.append(result);
  quizFeedback.textContent = "Lug‘at va formulalarni qayta ko‘rib, yana urinib ko‘ring.";
  nextQuestionButton.disabled = true;
  nextQuestionButton.textContent = "Test tugadi";
}

nextQuestionButton.addEventListener("click", () => {
  if (!answered) return;

  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    showQuizResult();
  }
});

restartQuizButton.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  renderQuestion();
});


/* ==========================================
   10. QORONG'I / YORUG' REJIM
========================================== */

const themeButton = $("#themeBtn");

function applyTheme(theme) {
  const isDark = theme === "dark";

  document.body.classList.toggle("dark", isDark);
  themeButton.textContent = isDark ? "☀" : "☾";
  themeButton.title = isDark ? "Yorug‘ rejim" : "Qorong‘i rejim";
  themeButton.setAttribute(
    "aria-label",
    isDark ? "Yorug‘ rejimga o‘tish" : "Qorong‘i rejimga o‘tish"
  );

  try {
    localStorage.setItem("englishFlowTheme", theme);
  } catch {
    // Mavzu saqlanmasa ham tugma ishlaydi.
  }
}

let initialTheme = "light";

try {
  initialTheme = localStorage.getItem("englishFlowTheme") || "light";
} catch {
  initialTheme = "light";
}

applyTheme(initialTheme);

themeButton.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark")
    ? "light"
    : "dark";

  applyTheme(nextTheme);
});


/* ==========================================
   11. SAYTNI ISHGA TUSHIRISH
========================================== */

$("#wordCount").textContent = `${vocabulary.length}+`;
$("#verbCount").textContent = `${irregularVerbs.length}+`;
$("#year").textContent = new Date().getFullYear();

renderVocabulary();
renderVerbs();
renderFormulas();
renderQuestion();