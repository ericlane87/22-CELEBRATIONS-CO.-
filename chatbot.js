/* ==========================================================
   CHATBOT.JS — STABLE VERSION
   ✔ Auto-open for 1 second on load
   ✔ Bubble click toggles window
   ✔ Close button works
   ✔ Greeting + holiday + relationship logic
   ✔ Phone / contact info responses
========================================================== */

// Grab elements safely
const chatBubble  = document.getElementById("chatbotBubble");
const chatWindow  = document.getElementById("chatbotWindow");
const chatClose   = document.getElementById("chatClose");
const chatMessages = document.getElementById("chatMessages");
const chatInput   = document.getElementById("chatInput");
const chatSend    = document.getElementById("chatSend");

// If the page doesn’t have the chat elements (like other pages), stop here
if (chatBubble && chatWindow && chatMessages && chatInput && chatSend && chatClose) {

  /* ========================================================
     BASIC OPEN/CLOSE (NO ANIMATION FIGHTING)
  ======================================================== */
  function openChat() {
    chatWindow.classList.remove("hidden");
  }

  function closeChat() {
    chatWindow.classList.add("hidden");
  }

  chatBubble.addEventListener("click", () => {
    // Toggle chat window
    if (chatWindow.classList.contains("hidden")) {
      openChat();
    } else {
      closeChat();
    }
  });

  chatClose.addEventListener("click", closeChat);

  /* ========================================================
     AUTO POP-UP ON LOAD (SHOW ~1s, THEN HIDE)
  ======================================================== */
  window.addEventListener("load", () => {
    // Start hidden (in case the HTML changed)
    chatWindow.classList.add("hidden");

    // Small delay so it feels natural
    setTimeout(() => {
      openChat(); // show
      setTimeout(() => {
        closeChat(); // hide after ~1 second
      }, 1000);
    }, 500);
  });

  /* ========================================================
     MESSAGE HELPERS
  ======================================================== */
  function addMessage(text, sender = "bot") {
    const msg = document.createElement("div");
    msg.className = `chat-message ${sender}`;
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

  /* ========================================================
     CONVERSATION STATE
  ======================================================== */
  let expectingOccasion = false;
  let expectingRecipient = false;

  const relationshipKeywords = [
    "wife","husband","girlfriend","boyfriend","fiancé","fiance",
    "mother","mom","father","dad","sister","brother","daughter",
    "son","aunt","uncle","grandma","grandpa","mother-in-law",
    "father-in-law","friend","coworker","boss","teacher","kid","child"
  ];

  const holidayKeywords = [
    "christmas","xmas",
    "valentine","valentine's","valentines",
    "birthday",
    "new year","new years","new year's",
    "easter",
    "thanksgiving",
    "halloween",
    "hanukkah","hanukah","chanukah",
    "kwanzaa",
    "st. patrick","st patrick","patrick's day",
    "4th of july","fourth of july","july 4th",
    "graduation","grad",
    "mother's day","mothers day",
    "father's day","fathers day",
    "baby shower",
    "wedding",
    "anniversary",
    "retirement"
  ];

  /* ========================================================
     INITIAL GREETING
  ======================================================== */
  bot(
    "Good evening! I'm your 22 Celebration Co. gift assistant.\n" +
    "I can help you find the perfect gift. Tell me who it’s for and the occasion.\n" +
    "También hablo español — escribe 'Espanol:' para empezar."
  );

  /* ========================================================
     MAIN MESSAGE HANDLER
  ======================================================== */
  function processMessage(rawText) {
    const text = rawText.trim();
    const lower = text.toLowerCase();

    if (!text) return;

    // Spanish trigger
    if (lower.startsWith("espanol")) {
      bot("¡Perfecto! Cuéntame: ¿para quién es el regalo y para qué ocasión?");
      expectingRecipient = true;
      expectingOccasion = true;
      return;
    }

    // Greetings (English & Spanish-ish)
    const greetings = [
      "hi","hello","hey","hola","what's up","whats up","sup",
      "buenas","buenos dias","buenas tardes","buenas noches"
    ];
    if (greetings.some(g => lower.includes(g))) {
      bot("Hi there! Tell me who the gift is for and what the occasion is.");
      expectingRecipient = true;
      expectingOccasion = true;
      return;
    }

    // Phone / contact info questions
    if (
      lower.includes("phone") || lower.includes("number") ||
      lower.includes("call")  || lower.includes("location") ||
      lower.includes("address") || lower.includes("contact")
    ) {
      bot(
        "You can reach us at (770) 820-1456.\n" +
        "You can also use the Contact page on this site to send us a message."
      );
      return;
    }

    // Check for relationship / recipient
    const hasRelationship = relationshipKeywords.some(k => lower.includes(k));

    // Check for holiday
    const hasHoliday = holidayKeywords.some(k => lower.includes(k));

    // If they say "gift for my ____" but no holiday:
    if (hasRelationship && !hasHoliday) {
      bot(
        "Great — I’d love to help you find a gift.\n" +
        "What’s the occasion or holiday? (For example: Christmas, birthday, Valentine’s Day, etc.)"
      );
      expectingOccasion = true;
      return;
    }

    // If they mention a holiday but not who it's for:
    if (hasHoliday && !hasRelationship) {
      bot(
        "Nice choice of occasion! Who is the gift for? (For example: wife, husband, mom, friend, coworker, etc.)"
      );
      expectingRecipient = true;
      return;
    }

    // If they mention both holiday + relationship in one sentence:
    if (hasHoliday && hasRelationship) {
      // Holiday takes precedence in our logic, just like you requested
      bot(
        "Perfect — I’ve got a good sense of what you need.\n" +
        "I’d recommend a few themed boxes that match that occasion and relationship.\n" +
        "You can also head to the Shop page and filter by that holiday for more options."
      );
      expectingRecipient = false;
      expectingOccasion = false;
      return;
    }

    // If we were already expecting the occasion and they respond with something
    if (expectingOccasion && hasHoliday) {
      bot(
        "Got it — that’s a great occasion.\n" +
        "Now I’ll think of some gift ideas that fit. You can also browse the Shop page for more options."
      );
      expectingOccasion = false;
      return;
    }

    // If we were expecting the recipient and they give some relationship-ish words
    if (expectingRecipient && hasRelationship) {
      bot(
        "Wonderful. Based on who it’s for and the occasion, we can match a themed box.\n" +
        "Tell me anything they especially like — snacks, self-care, movies, faith-based items, etc."
      );
      expectingRecipient = false;
      return;
    }

    // Fallback response
    bot(
      "Thanks for sharing! To help best, tell me:\n" +
      "1) Who is the gift for?\n" +
      "2) What is the occasion or holiday?"
    );
  }

  /* ========================================================
     SEND MESSAGE
  ======================================================== */
  function handleSend() {
    const text = chatInput.value.trim();
    if (!text) return;
    user(text);
    chatInput.value = "";
    processMessage(text);
  }

  chatSend.addEventListener("click", handleSend);
  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleSend();
  });
}
