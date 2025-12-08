/************************************************************
   S3 AI CHATBOT — Warm & Friendly Gift Assistant
   Supports:
   - Greeting detection
   - Relationship detection (wifs → wife, etc.)
   - Holiday detection (birthday, bday, xmas, etc.)
   - Age extraction
   - Hobby extraction
   - Spanish mode
   - Business Q&A
   - Dynamic recommendations (1–5 gifts)
************************************************************/

const bubble = document.getElementById("chatbotBubble");
const win = document.getElementById("chatbotWindow");
const closeBtn = document.getElementById("chatClose");
const msgs = document.getElementById("chatMessages");
const input = document.getElementById("chatInput");
const sendBtn = document.getElementById("chatSend");

let typingDiv = null;

/* -------------------------------------------
   Utilities
--------------------------------------------*/

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function addTyping() {
  removeTyping();
  typingDiv = document.createElement("div");
  typingDiv.className = "typing-indicator chat-msg bot";
  typingDiv.textContent = "✨ Gift Finder is typing…";
  msgs.appendChild(typingDiv);
  msgs.scrollTop = msgs.scrollHeight;
}

function removeTyping() {
  if (typingDiv) {
    typingDiv.remove();
    typingDiv = null;
  }
}

async function botSay(text) {
  addTyping();
  await sleep(700 + Math.random() * 600);
  removeTyping();

  const div = document.createElement("div");
  div.className = "chat-msg bot";
  div.textContent = text;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

/* -------------------------------------------
   Conversation memory
--------------------------------------------*/

const convo = {
  spanish: false,
  relationship: null,
  holiday: null,
  age: null,
  hobbies: null
};

/* -------------------------------------------
   Word detection lists
--------------------------------------------*/

const greetingWords = [
  "hello","hi","hey","hola","buenas","sup","what’s up","whats up",
  "good morning","good evening","good afternoon"
];

const relationshipMap = {
  wif: "wife",
  wife: "wife",
  hubby: "husband",
  husband: "husband",
  mom: "mom",
  mother: "mom",
  "mother in law": "mother-in-law",
  dad: "dad",
  father: "dad",
  "father in law": "father-in-law",
  sister: "sister",
  bro: "brother",
  brother: "brother",
  girlfriend: "girlfriend",
  boyfriend: "boyfriend",
  fiance: "fiancé",
  fiancé: "fiancé",
  aunt: "aunt",
  uncle: "uncle",
  grandma: "grandmother",
  grandpa: "grandfather",
  friend: "friend",
  boss: "boss",
  coworker: "coworker"
};

const holidayMap = {
  birthday: "Birthday",
  bday: "Birthday",
  "b-day": "Birthday",
  xmas: "Christmas",
  christmas: "Christmas",
  chrismas: "Christmas",
  "valentine": "Valentine’s Day",
  valentines: "Valentine’s Day",
  "valentines day": "Valentine’s Day",
  easter: "Easter",
  thanksgiving: "Thanksgiving",
  halloween: "Halloween",
  "4th": "Fourth of July",
  "4th of july": "Fourth of July",
  graduation: "Graduation",
  hanukkah: "Hanukkah",
  kwanzaa: "Kwanzaa",
  "mother": "Mother’s Day",
  "father": "Father’s Day",
  retirement: "Retirement",
  wedding: "Wedding",
  anniversary: "Anniversary",
  shower: "Baby Shower",
  "back to school": "Back to School"
};

/* -------------------------------------------
   NLP: Detect greeting
--------------------------------------------*/
function detectGreeting(text) {
  text = text.toLowerCase();
  return greetingWords.some(g => text.includes(g));
}

/* -------------------------------------------
   NLP: Relationship detection
--------------------------------------------*/
function detectRelationship(text) {
  text = text.toLowerCase();
  for (const key in relationshipMap) {
    if (text.includes(key)) {
      return relationshipMap[key];
    }
  }
  return null;
}

/* -------------------------------------------
   NLP: Holiday detection
--------------------------------------------*/
function detectHoliday(text) {
  text = text.toLowerCase();
  for (const key in holidayMap) {
    if (text.includes(key)) {
      return holidayMap[key];
    }
  }
  return null;
}

/* -------------------------------------------
   NLP: Age extraction
--------------------------------------------*/
function extractAge(text) {
  const match = text.match(/\d+/g);
  if (!match) return null;
  return Math.max(...match.map(n => parseInt(n)));
}

/* -------------------------------------------
   NLP: Hobby extraction (soft)
--------------------------------------------*/
function extractHobbies(text) {
  const hobbyWords = [
    "coffee","candle","spa","sports","movies","gaming","art","baking","gardening","reading",
    "music","fashion","beauty","relax","cook","tech","travel"
  ];
  const t = text.toLowerCase();
  return hobbyWords.filter(h => t.includes(h));
}

/* -------------------------------------------
   Business Q&A
--------------------------------------------*/
async function handleBusinessQA(text) {
  const t = text.toLowerCase();

  if (t.includes("phone") || t.includes("number") || t.includes("call")) {
    await botSay("You can reach us anytime at **(770) 820-1456**.");
    return true;
  }

  if (t.includes("location") || t.includes("where are you")) {
    await botSay("We operate online and ship **anywhere in the United States.**");
    return true;
  }

  if (t.includes("contact") || t.includes("form") || t.includes("email")) {
    await botSay("You can contact us here: **contact.html**. The form goes directly to us.");
    return true;
  }

  if (t.includes("ship") || t.includes("shipping") || t.includes("deliver")) {
    await botSay("We ship **anywhere in the United States!** 🇺🇸");
    return true;
  }

  if (t.includes("custom")) {
    await botSay("Yes! We offer fully **custom gift baskets**. For example, a $40 custom basket is priced at **$80**. Just tell me who it’s for and what theme you'd like.");
    return true;
  }

  return false;
}

/* -------------------------------------------
   Recommendation Engine — Dynamic R3
--------------------------------------------*/
function getRecommendations() {
  let list = products.slice();

  if (convo.holiday) {
    list = list.filter(p =>
      p.occasions.some(o =>
        o.toLowerCase().includes(convo.holiday.toLowerCase())
      )
    );
  }

  if (convo.relationship) {
    const female = ["wife","girlfriend","mom","mother","mother-in-law","sister","daughter","aunt","grandmother"];
    const male = ["husband","dad","father","father-in-law","brother","son","uncle","grandfather","boyfriend"];

    if (female.includes(convo.relationship)) {
      list = list.filter(p => p.gender === "female" || p.gender === "unisex");
    }
    if (male.includes(convo.relationship)) {
      list = list.filter(p => p.gender === "male" || p.gender === "unisex");
    }
  }

  if (convo.age) {
    list = list.filter(p => p.maxAge >= convo.age);
  }

  if (convo.hobbies && convo.hobbies.length > 0) {
    list = list.filter(p =>
      convo.hobbies.some(h =>
        p.name.toLowerCase().includes(h.toLowerCase())
      )
    );
  }

  if (list.length === 0) {
    return products.slice(0, 3);
  }

  if (list.length > 5) {
    return list.slice(0, 5);
  }

  return list.slice(0, Math.min(list.length, 5));
}

/* -------------------------------------------
   Main handler
--------------------------------------------*/
async function handleUserMessage() {
  const text = input.value.trim();
  if (!text) return;

  const userMsg = document.createElement("div");
  userMsg.className = "chat-msg user";
  userMsg.textContent = text;
  msgs.appendChild(userMsg);
  msgs.scrollTop = msgs.scrollHeight;

  input.value = "";

  const lower = text.toLowerCase();

  // Spanish mode
  if (lower.startsWith("espanol") || lower.startsWith("español")) {
    convo.spanish = true;
    await botSay("¡Claro! ¿Para quién es el regalo y cuál es la ocasión?");
    return;
  }

  // Greeting
  if (detectGreeting(lower)) {
    await botSay("Hi there! 😊 How can I help you find the perfect gift today?");
    return;
  }

  // Business Q&A
  if (await handleBusinessQA(lower)) return;

  // Detect relationship / holiday / age / hobbies
  const rel = detectRelationship(lower);
  if (rel) convo.relationship = rel;

  const hol = detectHoliday(lower);
  if (hol) convo.holiday = hol;

  const age = extractAge(lower);
  if (age) convo.age = age;

  const hobbyList = extractHobbies(lower);
  if (hobbyList.length > 0) convo.hobbies = hobbyList;

  // Step logic
  if (!convo.relationship && !convo.holiday) {
    await botSay("Got it! Who is the gift for, and is it for a holiday or special occasion?");
    return;
  }

  if (convo.relationship && !convo.holiday) {
    await botSay(`Great! A gift for your ${convo.relationship}. What occasion is it for? Birthday, Christmas, anniversary, or something else?`);
    return;
  }

  if (convo.holiday && !convo.relationship) {
    await botSay(`Nice! A ${convo.holiday} gift. Who is this gift for?`);
    return;
  }

  if (!convo.age) {
    await botSay("About how old are they? (You can say something like 25 or 9–12.)");
    return;
  }

  if (!convo.hobbies) {
    await botSay("Tell me a few things they enjoy—coffee, candles, movies, sports, spa nights, anything!");
    return;
  }

  // We have enough → recommend
  const recs = getRecommendations();

  await botSay(
    `Perfect! I think I found some great options for a ${convo.holiday} gift for your ${convo.relationship}.`
  );

  for (const r of recs) {
    await botSay(`🎁 ${r.name} — $${r.price.toFixed(2)}`);
  }

  await botSay("If you'd like more ideas, just tell me anything else about them!");
}

/* -------------------------------------------
   Events
--------------------------------------------*/

sendBtn.addEventListener("click", handleUserMessage);
input.addEventListener("keypress", e => {
  if (e.key === "Enter") handleUserMessage();
});

window.addEventListener("load", async () => {
  bubble.style.display = "none";
  win.classList.add("visible");

  await botSay("Hi there! 👋 I'm your friendly gift assistant from 22 Celebration Co.");
  await botSay("I can help you find the perfect gift for any of our 22 special occasions. Who’s the gift for?");

  setTimeout(() => {
    win.classList.remove("visible");
    bubble.style.display = "flex";
  }, 2600);
});

bubble.addEventListener("click", () => {
  bubble.style.display = "none";
  win.classList.add("visible");
});

closeBtn.addEventListener("click", () => {
  win.classList.remove("visible");
  bubble.style.display = "flex";
});
