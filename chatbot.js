/* ============================================================
   22 CELEBRATION CO. — CHATBOT FULL SCRIPT (AUTO POPUP FIXED)
============================================================ */

const chatBubble = document.getElementById("chatbotBubble");
const chatWindow = document.getElementById("chatbotWindow");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const chatSend = document.getElementById("chatSend");
const chatClose = document.getElementById("chatClose");

/* ------------------------------------------------------------
   SMOOTH SHOW/HIDE ANIMATION HELPERS
------------------------------------------------------------ */

function showChatWindow() {
    chatWindow.classList.remove("hidden");
    chatWindow.style.opacity = "1";
    chatWindow.style.transform = "translateY(0)";
}

function hideChatWindow() {
    chatWindow.style.opacity = "0";
    chatWindow.style.transform = "translateY(12px)";
    setTimeout(() => chatWindow.classList.add("hidden"), 500);
}

/* ------------------------------------------------------------
   AUTOMATIC POP-UP ON PAGE LOAD
------------------------------------------------------------ */

window.addEventListener("load", () => {
    // Delay slightly to avoid race conditions after featured section render
    setTimeout(() => {
        showChatWindow();

        // Close smoothly after 1 second
        setTimeout(() => {
            hideChatWindow();
        }, 1000);

    }, 350); // allows page elements to finish rendering
});

/* ------------------------------------------------------------
   CHAT BUBBLE CLICKS – ALWAYS WORK
------------------------------------------------------------ */

chatBubble.addEventListener("click", () => {
    showChatWindow();
});

/* ------------------------------------------------------------
   CLOSE BUTTON
------------------------------------------------------------ */

chatClose.addEventListener("click", () => {
    hideChatWindow();
});

/* ------------------------------------------------------------
   CHAT MESSAGE LOGIC
------------------------------------------------------------ */

function addMessage(text, sender = "bot") {
    const msg = document.createElement("div");
    msg.className = `chat-message ${sender}`;
    msg.innerText = text;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function botReply(text) {
    setTimeout(() => addMessage(text, "bot"), 300);
}

/* Greetings detection */
const greetings = ["hello", "hi", "hey", "hola", "yo", "what's up", "sup"];

/* Keyword triggers */
const relations = ["wife", "husband", "mom", "mother", "dad", "father", "brother",
    "sister", "friend", "girlfriend", "boyfriend", "fiancé", "fiancee",
    "aunt", "uncle", "mother-in-law", "son", "daughter"
];

const holidays = [
    "christmas", "new year", "valentine", "valentine's day",
    "st. patrick", "easter", "mother's day", "father's day",
    "graduation", "fourth of july", "4th of july", "halloween",
    "thanksgiving", "hanukkah", "kwanzaa", "birthday", "wedding", "baby shower"
];

/* ------------------------------------------------------------
   USER MESSAGE HANDLING
------------------------------------------------------------ */

chatSend.addEventListener("click", processMessage);
chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") processMessage();
});

function processMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    addMessage(text, "user");
    chatInput.value = "";

    const lower = text.toLowerCase();

    // Greeting logic
    if (greetings.some(g => lower.includes(g))) {
        botReply("Hello! 👋 How can I help you find the perfect gift today?");
        botReply("I can help with holidays, birthdays, or special people in your life.");
        return;
    }

    // Detect holiday
    let matchedHoliday = holidays.find(h => lower.includes(h));

    // Detect relationship
    let matchedRelation = relations.find(r => lower.includes(r));

    if (matchedHoliday && matchedRelation) {
        botReply(`Great! A ${matchedHoliday} gift for your ${matchedRelation}.`);
        botReply("Tell me their age, and a few things they enjoy. I’ll find matching gifts!");
        return;
    }

    if (matchedHoliday) {
        botReply(`Perfect! You’re looking for ${matchedHoliday} gifts.`);
        botReply("Who is the gift for? (example: wife, husband, mom, etc.)");
        return;
    }

    if (matchedRelation) {
        botReply(`Got it! You're shopping for your ${matchedRelation}.`);
        botReply("What’s the occasion?");
        return;
    }

    // Phone number request
    if (lower.includes("phone") || lower.includes("call")) {
        botReply("You can reach us anytime at (770) 820-1456 📞");
        return;
    }

    // Contact form request
    if (lower.includes("contact") || lower.includes("email") || lower.includes("message")) {
        botReply("You can also reach us using the contact form. Just click the Contact page!");
        return;
    }

    // General fallback
    botReply("I can help with holiday gifts, birthdays, custom baskets, or suggestions. Tell me who it's for and the occasion!");
}
