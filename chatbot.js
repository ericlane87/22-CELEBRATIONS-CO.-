/* ============================================================
   CHATBOT — A1-Prime Stable Version
   - Opens automatically for 1 second
   - Closes smoothly
   - No disappearing bug
   - Keyword-based gift recommendations
============================================================ */

const bubble = document.getElementById("chatbotBubble");
const windowBox = document.getElementById("chatbotWindow");
const closeBtn = document.getElementById("chatClose");
const messages = document.getElementById("chatMessages");
const input = document.getElementById("chatInput");
const sendBtn = document.getElementById("chatSend");

let chatOpen = false;
let greeted = false;

/* ---------------------------------------------
   READY (NO AUTO-OPEN)
--------------------------------------------- */

/* ---------------------------------------------
   OPEN CHAT WINDOW
--------------------------------------------- */
function openChat() {
  windowBox.classList.remove("hidden");
  chatOpen = true;
  showGreeting();
}

/* ---------------------------------------------
   CLOSE CHAT WINDOW
--------------------------------------------- */
function closeChat() {
  windowBox.classList.add("hidden");
  chatOpen = false;
}

/* ---------------------------------------------
   BUBBLE OPEN
--------------------------------------------- */
bubble.addEventListener("click", () => {
  if (!chatOpen) openChat();
  showGreeting();
});

/* ---------------------------------------------
   CLOSE BUTTON
--------------------------------------------- */
closeBtn.addEventListener("click", () => {
  closeChat();
});

/* ---------------------------------------------
   ADD MESSAGE TO CHAT
--------------------------------------------- */
function addMessage(text, sender = "bot") {
  const msg = document.createElement("div");
  msg.classList.add("chat-message", sender);
  msg.textContent = text;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight;
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

function showGreeting() {
  if (greeted || !messages) return;
  if (messages.children.length > 0) {
    greeted = true;
    return;
  }
  greeted = true;
  addMessage(
    `${getGreeting()}! Tell me the occasion, who it's for, and your budget — I can recommend the best gift.`,
    "bot"
  );
}

/* ---------------------------------------------
   BOT LOGIC — SIMPLE OCCASION DETECTION
--------------------------------------------- */
function botReply(userText) {
  const t = userText.toLowerCase();

  // Basic rules
  if (t.includes("hi") || t.includes("hello")) {
    return "Hi there! Share the occasion, who it's for, and your budget — I will suggest the right gift.";
  }

  if (t.includes("birthday")) return "Lovely! We have Birthday Boxes for Him, Her, and Kids.";
  if (t.includes("christmas")) return "Our Christmas collection includes cozy, festive, and family-themed boxes!";
  if (t.includes("valentine")) return "Romantic, cozy, and sweet — our Valentine’s Day boxes are perfect gifts!";
  if (t.includes("baby")) return "We offer Baby Shower boxes for new parents and newborn essentials.";
  if (t.includes("wedding")) return "Wedding and bridal-themed boxes are available with elegant premium touches.";
  if (t.includes("mother")) return "Mother’s Day boxes include spa themes, sweets, and heartfelt appreciation gifts.";
  if (t.includes("father") || t.includes("dad")) return "Father’s Day boxes feature grilling, gadgets, snacks, and more.";

  // Fallback
  return "Tell me the occasion, who it's for, and your budget — I’ll match you with the perfect box!";
}

/* ---------------------------------------------
   SEND MESSAGE
--------------------------------------------- */
function handleSend() {
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  setTimeout(() => {
    addMessage(botReply(text), "bot");
  }, 500);
}

sendBtn.addEventListener("click", handleSend);
input.addEventListener("keypress", e => {
  if (e.key === "Enter") handleSend();
});
