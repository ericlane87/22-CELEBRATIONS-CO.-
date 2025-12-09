/* ==========================================================
   CHATBOT.JS — FULL WORKING VERSION
   Restores:
   ✔ Auto-open for 1 second
   ✔ Bubble toggle
   ✔ Close button
   ✔ Greeting detection
   ✔ Occasion → gift flow
   ✔ English/Spanish greetings
   ✔ Phone number/contact info responses
========================================================== */

const chatBubble = document.getElementById("chatbotBubble");
const chatWindow = document.getElementById("chatbotWindow");
const chatClose = document.getElementById("chatClose");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const chatSend = document.getElementById("chatSend");

let awaitingOccasion = false;
let awaitingRecipient = false;

/* ==========================================================
   CHAT WINDOW OPEN/CLOSE
========================================================== */
function openChat() {
  chatWindow.classList.remove("hidden");
  chatWindow.style.opacity = "1";
  chatWindow.style.transform = "translateY(0)";
}

function closeChat() {
  chatWindow.style.opacity = "0";
  chatWindow.style.transform = "translateY(10px)";
  setTimeout(() => chatWindow.classList.add("hidden"), 250);
}

chatBubble.addEventListener("click", () => {
  if (chatWindow.classList.contains("hidden")) openChat();
  else closeChat();
});

chatClose.addEventListener("click", closeChat);

/* ==========================================================
   AUTO POP-UP FOR 1 SECOND ON PAGE LOAD
========================================================== */
window.addEventListener("load", () => {
  setTimeout(() => openChat(), 500);
  setTimeout(() => closeChat(), 1600);
});

/* ==========================================================
   MESSAGE UTILITIES
========================================================== */
function addMessage(text, sender = "bot") {
  const msg = document.createElement("div");
  msg.className = `chat-msg ${sender}`;
  msg.textContent = text;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function bot(text) {
  addMessage(text, "bot");
}

function user(text) {
  addMessage(text, "user");
}

/* ==========================================================
   INITIAL GREETING
========================================================== */
bot("Good evening! I'm your 22 Celebration Co. gift assistant.\nI can help you find the perfect gift. Tell me who it’s for and the occasion.\nTambién hablo español — escribe 'Espanol:' para empezar.");

/* ==========================================================
   TEXT PROCESSING
========================================================== */
function processMessage(input) {
  const text = input.trim().toLowerCase();

  /* SPANISH GREETING SYSTEM */
  if (text.startsWith("espanol")) {
    bot("¡Perfecto! ¿Para quién es el regalo y para qué ocasión?");
    return;
  }

  /* GENERAL GREETINGS */
  const greetings = ["hi", "hello", "hey", "hola", "what’s up", "sup"];
  if (greetings.some(g => text.includes(g))) {
    bot("Hello! Who is the gift for, and what’s the occasion?");
    return;
  }

  /* PHONE INFO OR CONTACT BUTTON */
  if (text.includes("phone") || text.includes("number") || text.includes("contact")) {
    bot("You can reach us anytime at (770) 820-1456.\nIf you prefer, click the Contact page for our message form.");
    return;
  }

  /* OCCASION DETECTION */
  const knownOccasions = [
    "christmas","birthday","valentine","easter","hanukkah","kwanzaa",
    "thanksgiving","graduation","baby shower","wedding","anniversary",
    "new year","st. patrick","4th","fourth","halloween","mother","father"
  ];

  if (knownOccasions.some(o => text.includes(o))) {
    bot("Great! And who is the gift for?");
    awaitingRecipient = true;
    return;
  }

  /* RECIPIENT DETECTION */
  if (awaitingRecipient) {
    awaitingRecipient = false;
    bot("Perfect — let me suggest some great gift ideas.\nYou can also browse all items on the Shop page!");
    return;
  }

  /* OTHERWISE: general friendly response */
  bot("Got it! Tell me the holiday or occasion, and who the gift is for.");
}

/* ==========================================================
   SEND MESSAGE
========================================================== */
function handleSend() {
  const msg = chatInput.value.trim();
  if (!msg) return;

  user(msg);
  chatInput.value = "";
  processMessage(msg);
}

chatSend.addEventListener("click", handleSend);
chatInput.addEventListener("keypress", e => {
  if (e.key === "Enter") handleSend();
});
