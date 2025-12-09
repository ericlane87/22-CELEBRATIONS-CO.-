// ======================================================
// products.js — 120 Demo Products
// IDs 1–105: Core holiday & life-event gifts
// IDs 106–120: Extra boosters for key occasions
// ======================================================

const products = [

  // ------------------------------
  // NEW YEAR (5)
  // ------------------------------
  {
    id: 1,
    name: "New Year Sparkle Box",
    occasions: ["New Year"],
    gender: "unisex",
    maxAge: 99,
    price: 49.99,
    description:
      "A themed gift box designed for New Year, curated to match the occasion with thoughtful items. It’s a great choice for celebrating and bringing joy to anyone who loves meaningful, well-selected gifts."
  },
  {
    id: 2,
    name: "Midnight Countdown Basket",
    occasions: ["New Year"],
    gender: "unisex",
    maxAge: 99,
    price: 69.99,
    description:
      "A themed gift box designed for New Year, curated with festive accessories. It’s a great option for ringing in the new year with style and excitement."
  },
  {
    id: 3,
    name: "New Year Movie Night Box",
    occasions: ["New Year"],
    gender: "unisex",
    maxAge: 99,
    price: 44.99,
    description:
      "A themed gift box designed for New Year, curated to bring cozy celebration energy into your home. Perfect for unwinding and enjoying a memorable night with loved ones."
  },
  {
    id: 4,
    name: "New Year Resolution Journal Box",
    occasions: ["New Year"],
    gender: "unisex",
    maxAge: 99,
    price: 34.99,
    description:
      "A themed gift box designed for New Year, curated to inspire motivation and positive habits. It’s ideal for anyone starting the year with meaningful goals and reflection."
  },
  {
    id: 5,
    name: "New Year Family Party Set",
    occasions: ["New Year"],
    gender: "unisex",
    maxAge: 99,
    price: 59.99,
    description:
      "A themed gift box designed for New Year celebrations, complete with festive items perfect for family gatherings. It’s a joyful way to welcome the new year together."
  },

  // ------------------------------
  // VALENTINE'S DAY (5)
  // ------------------------------
  {
    id: 6,
    name: "Classic Romance Box",
    occasions: ["Valentine's Day"],
    gender: "female",
    maxAge: 99,
    price: 69.99,
    description:
      "A themed gift box designed for Valentine’s Day, curated with romantic touches for a heartfelt experience. It’s a wonderful way to express love and appreciation."
  },
  {
    id: 7,
    name: "Gentleman's Valentine Basket",
    occasions: ["Valentine's Day"],
    gender: "male",
    maxAge: 99,
    price: 74.99,
    description:
      "A themed gift box designed for Valentine’s Day, curated with premium items selected just for him. It’s perfect for making your partner feel celebrated and cherished."
  },
  {
    id: 8,
    name: "Couples Movie Night Box",
    occasions: ["Valentine's Day"],
    gender: "unisex",
    maxAge: 99,
    price: 59.99,
    description:
      "A themed gift box designed for Valentine’s Day, curated for cozy bonding moments. Ideal for couples looking to enjoy a warm, intimate night together."
  },
  {
    id: 9,
    name: "Chocolate Lover’s Valentine Box",
    occasions: ["Valentine's Day"],
    gender: "unisex",
    maxAge: 99,
    price: 64.99,
    description:
      "A themed gift box designed for Valentine’s Day, curated with treats for chocolate enthusiasts. It’s a delightful way to satisfy sweet cravings while celebrating love."
  },
  {
    id: 10,
    name: "Valentine’s Self-Care Box",
    occasions: ["Valentine's Day"],
    gender: "unisex",
    maxAge: 99,
    price: 49.99,
    description:
      "A themed gift box designed for Valentine’s Day, curated to promote rest and relaxation. It’s perfect for anyone needing a comforting and thoughtful treat."
  },

  // ------------------------------
  // ST. PATRICK'S DAY (5)
  // ------------------------------
  {
    id: 11,
    name: "Lucky Shamrock Box",
    occasions: ["St. Patrick's Day"],
    gender: "unisex",
    maxAge: 99,
    price: 39.99,
    description:
      "A themed gift box designed for St. Patrick’s Day, curated with fun green-themed items. It’s an excellent choice for adding charm and joy to the holiday."
  },
  {
    id: 12,
    name: "Irish Pub Night Box",
    occasions: ["St. Patrick's Day"],
    gender: "unisex",
    maxAge: 99,
    price: 59.99,
    description:
      "A themed gift box designed for St. Patrick’s Day, curated for a festive pub-at-home experience. It’s perfect for anyone wanting to celebrate with flavor and fun."
  },
  {
    id: 13,
    name: "Kids St. Patrick’s Activity Box",
    occasions: ["St. Patrick's Day"],
    gender: "kids",
    maxAge: 12,
    price: 29.99,
    description:
      "A themed gift box designed for St. Patrick’s Day, curated with interactive fun for kids. It’s great for sparking creativity and making the holiday memorable."
  },
  {
    id: 14,
    name: "St. Patrick’s Day Coffee Box",
    occasions: ["St. Patrick's Day"],
    gender: "unisex",
    maxAge: 99,
    price: 34.99,
    description:
      "A themed gift box designed for St. Patrick’s Day, curated with warm, comforting flavors. It's ideal for coffee lovers wanting a festive touch."
  },
  {
    id: 15,
    name: "Shamrock Snack Pack",
    occasions: ["St. Patrick's Day"],
    gender: "unisex",
    maxAge: 99,
    price: 24.99,
    description:
      "A themed gift box designed for St. Patrick’s Day, curated with tasty themed snacks. It’s a simple and fun way to celebrate the holiday spirit."
  },

  // ------------------------------
  // EASTER (5)
  // ------------------------------
  {
    id: 16,
    name: "Classic Easter Basket",
    occasions: ["Easter"],
    gender: "kids",
    maxAge: 12,
    price: 39.99,
    description:
      "A themed gift box designed for Easter, curated with colorful treats and surprises. It’s a joyful option for families celebrating the holiday."
  },
  {
    id: 17,
    name: "Easter Brunch Box",
    occasions: ["Easter"],
    gender: "unisex",
    maxAge: 99,
    price: 59.99,
    description:
      "A themed gift box designed for Easter, curated with seasonal flavors and decor. It’s ideal for enhancing festive brunch traditions."
  },
  {
    id: 18,
    name: "Easter Candy Explosion Box",
    occasions: ["Easter"],
    gender: "kids",
    maxAge: 17,
    price: 34.99,
    description:
      "A themed gift box designed for Easter, curated with delicious sweets perfect for kids. It’s a cheerful way to celebrate springtime fun."
  },
  {
    id: 19,
    name: "Easter Spa & Scripture Box",
    occasions: ["Easter"],
    gender: "female",
    maxAge: 99,
    price: 49.99,
    description:
      "A themed gift box designed for Easter, curated with soothing items and inspirational touches. It’s perfect for creating a peaceful holiday moment."
  },
  {
    id: 20,
    name: "Easter Family Fun Pack",
    occasions: ["Easter"],
    gender: "unisex",
    maxAge: 99,
    price: 64.99,
    description:
      "A themed gift box designed for Easter, curated for group activities and shared joy. It’s a wonderful choice for families celebrating together."
  },

  // ------------------------------
  // MOTHER'S DAY (5)
  // ------------------------------
  {
    id: 21,
    name: "Mother’s Day Spa Retreat",
    occasions: ["Mother's Day"],
    gender: "female",
    maxAge: 99,
    price: 69.99,
    description:
      "A themed gift box designed for Mother’s Day, curated to promote relaxation and pampering. It’s a thoughtful choice for showing appreciation and love."
  },
  {
    id: 22,
    name: "Mother’s Day Sweet Treat Box",
    occasions: ["Mother's Day"],
    gender: "female",
    maxAge: 99,
    price: 49.99,
    description:
      "A themed gift box designed for Mother’s Day, curated with comforting sweet delights. It’s perfect for adding warmth and joy to her special day."
  },
  {
    id: 23,
    name: "Mom & Daughter Pamper Box",
    occasions: ["Mother's Day"],
    gender: "female",
    maxAge: 99,
    price: 79.99,
    description:
      "A themed gift box designed for Mother’s Day, curated for bonding and self-care. It’s a beautiful way to celebrate connection and love."
  },
  {
    id: 24,
    name: "New Mom Celebration Box",
    occasions: ["Mother's Day", "Baby Shower"],
    gender: "female",
    maxAge: 45,
    price: 84.99,
    description:
      "A themed gift box designed for Mother’s Day, curated to support and celebrate new moms. It’s a heartfelt choice full of meaningful items."
  },
  {
    id: 25,
    name: "Grandma Appreciation Box",
    occasions: ["Mother's Day"],
    gender: "female",
    maxAge: 99,
    price: 54.99,
    description:
      "A themed gift box designed for Mother’s Day, curated with thoughtful items just for grandmothers. It’s a lovely way to honor her care and wisdom."
  },

  // ------------------------------
  // FATHER'S DAY (5)
  // ------------------------------
  {
    id: 26,
    name: "Father’s Day Grill Master Box",
    occasions: ["Father's Day"],
    gender: "male",
    maxAge: 99,
    price: 69.99,
    description:
      "A themed gift box designed for Father’s Day, curated with grilling essentials perfect for outdoor fun. It’s a great way to show appreciation with a personal touch."
  },
  {
    id: 27,
    name: "Dad’s Snack Attack Box",
    occasions: ["Father's Day"],
    gender: "male",
    maxAge: 99,
    price: 49.99,
    description:
      "A themed gift box designed for Father’s Day, curated with his favorite snacks. It’s a fun and thoughtful way to celebrate his day."
  },
  {
    id: 28,
    name: "Tech-Loving Dad Box",
    occasions: ["Father's Day"],
    gender: "male",
    maxAge: 99,
    price: 89.99,
    description:
      "A themed gift box designed for Father’s Day, curated with handy gadgets and accessories. It’s ideal for dads who love practical and modern gifts."
  },
  {
    id: 29,
    name: "Outdoorsman Dad Bundle",
    occasions: ["Father's Day"],
    gender: "male",
    maxAge: 99,
    price: 84.99,
    description:
      "A themed gift box designed for Father’s Day, curated for those who enjoy nature and adventure. It's a meaningful way to recognize his passions."
  },
  {
    id: 30,
    name: "Father’s Day Coffee & Mug Set",
    occasions: ["Father's Day"],
    gender: "male",
    maxAge: 99,
    price: 39.99,
    description:
      "A themed gift box designed for Father’s Day, curated with warm treats and a quality mug. It’s perfect for dads who appreciate a simple, cozy gift."
  },

  // ------------------------------
  // GRADUATION (5)
  // ------------------------------
  {
    id: 31,
    name: "High School Graduation Box",
    occasions: ["Graduation"],
    gender: "unisex",
    maxAge: 19,
    price: 59.99,
    description:
      "A themed gift box designed for Graduation, curated with items that capture the excitement of new beginnings. It’s a great way to celebrate the graduate’s achievement."
  },
  {
    id: 32,
    name: "College Grad Starter Kit",
    occasions: ["Graduation"],
    gender: "unisex",
    maxAge: 30,
    price: 79.99,
    description:
      "A themed gift box designed for Graduation, curated with practical and motivational items. It's ideal for grads entering the next phase of life."
  },
  {
    id: 33,
    name: "Grad Study Break Snack Box",
    occasions: ["Graduation"],
    gender: "unisex",
    maxAge: 30,
    price: 39.99,
    description:
      "A themed gift box designed for Graduation, curated with comforting snacks for late-night study sessions. It’s a thoughtful way to support and celebrate a student."
  },
  {
    id: 34,
    name: "Grad Dorm Essentials Box",
    occasions: ["Graduation"],
    gender: "unisex",
    maxAge: 22,
    price: 84.99,
    description:
      "A themed gift box designed for Graduation, curated with helpful items for moving into a dorm. It’s perfect for easing the transition into college life."
  },
  {
    id: 35,
    name: "Graduation Celebration Party Pack",
    occasions: ["Graduation"],
    gender: "unisex",
    maxAge: 99,
    price: 74.99,
    description:
      "A themed gift box designed for Graduation, curated to elevate the celebration. It’s a festive choice for families and friends congratulating their grad."
  },

  // ------------------------------
  // FOURTH OF JULY (5)
  // ------------------------------
  {
    id: 36,
    name: "Fourth of July BBQ Box",
    occasions: ["Fourth of July"],
    gender: "unisex",
    maxAge: 99,
    price: 69.99,
    description:
      "A themed gift box designed for the Fourth of July, curated with grilling favorites and patriotic flair. It’s a lively way to celebrate the holiday with friends and family."
  },
  {
    id: 37,
    name: "Patriotic Snack Basket",
    occasions: ["Fourth of July"],
    gender: "unisex",
    maxAge: 99,
    price: 39.99,
    description:
      "A themed gift box designed for the Fourth of July, curated with festive red, white, and blue snacks. It’s a simple but fun way to enjoy the holiday spirit."
  },
  {
    id: 38,
    name: "Fourth of July Family Fun Box",
    occasions: ["Fourth of July"],
    gender: "unisex",
    maxAge: 99,
    price: 59.99,
    description:
      "A themed gift box designed for the Fourth of July, curated with games and decorations. It’s great for creating a memorable celebration."
  },
  {
    id: 39,
    name: "Fourth of July Picnic Basket",
    occasions: ["Fourth of July"],
    gender: "unisex",
    maxAge: 99,
    price: 84.99,
    description:
      "A themed gift box designed for the Fourth of July, curated for outdoor gatherings. It’s perfect for enjoying a festive summer afternoon."
  },
  {
    id: 40,
    name: "July 4th Dessert Sampler",
    occasions: ["Fourth of July"],
    gender: "unisex",
    maxAge: 99,
    price: 44.99,
    description:
      "A themed gift box designed for the Fourth of July, curated with patriotic treats. It’s an easy way to satisfy sweet cravings during the celebration."
  },

  // ------------------------------
  // HALLOWEEN (5)
  // ------------------------------
  {
    id: 41,
    name: "Halloween Candy Blast Box",
    occasions: ["Halloween"],
    gender: "unisex",
    maxAge: 99,
    price: 34.99,
    description:
      "A themed gift box designed for Halloween, curated with spooky treats and seasonal goodies. It’s a fun way to enjoy the festive excitement."
  },
  {
    id: 42,
    name: "Halloween Movie Night Box",
    occasions: ["Halloween"],
    gender: "unisex",
    maxAge: 99,
    price: 44.99,
    description:
      "A themed gift box designed for Halloween, curated with snacks and cozy movie-night essentials. It’s great for creating a spooky-but-fun evening at home."
  },
  {
    id: 43,
    name: "Kids Trick-or-Treat Box",
    occasions: ["Halloween"],
    gender: "kids",
    maxAge: 12,
    price: 29.99,
    description:
      "A themed gift box designed for Halloween, curated for children with playful items and treats. It’s perfect for enhancing the fun of the holiday."
  },
  {
    id: 44,
    name: "Halloween Party Décor Box",
    occasions: ["Halloween"],
    gender: "unisex",
    maxAge: 99,
    price: 49.99,
    description:
      "A themed gift box designed for Halloween, curated to help set the mood for gatherings. It’s a festive choice for anyone hosting a celebration."
  },
  {
    id: 45,
    name: "Halloween Office Treat Set",
    occasions: ["Halloween"],
    gender: "unisex",
    maxAge: 99,
    price: 59.99,
    description:
      "A themed gift box designed for Halloween, curated for sharing treats in the workplace. It’s a great way to bring seasonal cheer to your team."
  },

  // ------------------------------
  // THANKSGIVING (5)
  // ------------------------------
  {
    id: 46,
    name: "Thanksgiving Host Basket",
    occasions: ["Thanksgiving"],
    gender: "unisex",
    maxAge: 99,
    price: 74.99,
    description:
      "A themed gift box designed for Thanksgiving, curated with warm, seasonal items perfect for hosting. It’s a thoughtful way to show appreciation to loved ones."
  },
  {
    id: 47,
    name: "Thanksgiving Snack & Pie Box",
    occasions: ["Thanksgiving"],
    gender: "unisex",
    maxAge: 99,
    price: 49.99,
    description:
      "A themed gift box designed for Thanksgiving, curated with cozy treats and fall flavors. It’s ideal for enjoying the holiday with comfort and joy."
  },
  {
    id: 48,
    name: "Friendsgiving Party Pack",
    occasions: ["Thanksgiving"],
    gender: "unisex",
    maxAge: 99,
    price: 59.99,
    description:
      "A themed gift box designed for Thanksgiving, curated to enhance group celebrations. It’s a festive way to share gratitude with friends."
  },
  {
    id: 49,
    name: "Thanksgiving Office Appreciation Box",
    occasions: ["Thanksgiving"],
    gender: "unisex",
    maxAge: 99,
    price: 64.99,
    description:
      "A themed gift box designed for Thanksgiving, curated to uplift coworkers with seasonal treats. It’s a great option for building team spirit."
  },
  {
    id: 50,
    name: "Cozy Thanksgiving Home Box",
    occasions: ["Thanksgiving"],
    gender: "unisex",
    maxAge: 99,
    price: 84.99,
    description:
      "A themed gift box designed for Thanksgiving, curated with home comforts ideal for the season. It’s perfect for creating a warm, inviting holiday atmosphere."
  },

  // ------------------------------
  // CHRISTMAS (10)
  // ------------------------------
  {
    id: 51,
    name: "Classic Christmas Gift Box",
    occasions: ["Christmas"],
    gender: "unisex",
    maxAge: 99,
    price: 59.99,
    description:
      "A themed gift box designed for Christmas, curated with festive treats and seasonal items. It’s a joyful choice for spreading holiday cheer."
  },
  {
    id: 52,
    name: "Christmas Morning Breakfast Basket",
    occasions: ["Christmas"],
    gender: "unisex",
    maxAge: 99,
    price: 69.99,
    description:
      "A themed gift box designed for Christmas, curated with breakfast favorites for a cozy morning. It’s a warm and inviting way to celebrate the holiday."
  },
  {
    id: 53,
    name: "Christmas Movie Night Box",
    occasions: ["Christmas"],
    gender: "unisex",
    maxAge: 99,
    price: 49.99,
    description:
      "A themed gift box designed for Christmas, curated with snacks and cozy essentials. It’s ideal for festive family nights at home."
  },
  {
    id: 54,
    name: "Christmas Cookie Baking Box",
    occasions: ["Christmas"],
    gender: "unisex",
    maxAge: 99,
    price: 44.99,
    description:
      "A themed gift box designed for Christmas, curated with baking tools and ingredients. It’s perfect for creating sweet holiday memories."
  },
  {
    id: 55,
    name: "Christmas Coffee & Cocoa Set",
    occasions: ["Christmas"],
    gender: "unisex",
    maxAge: 99,
    price: 39.99,
    description:
      "A themed gift box designed for Christmas, curated with warm and comforting drink mixes. It’s a delightful treat for anyone who loves winter flavors."
  },
  {
    id: 56,
    name: "Christmas Deluxe Family Basket",
    occasions: ["Christmas"],
    gender: "unisex",
    maxAge: 99,
    price: 99.99,
    description:
      "A themed gift box designed for Christmas, curated with premium seasonal items for the whole family. It’s a luxurious option for celebrating together."
  },
  {
    id: 57,
    name: "Christmas Secret Santa Box",
    occasions: ["Christmas"],
    gender: "unisex",
    maxAge: 99,
    price: 29.99,
    description:
      "A themed gift box designed for Christmas, curated for holiday gift exchanges. It’s a fun and budget-friendly way to spread joy."
  },
  {
    id: 58,
    name: "Kids Christmas Surprise Box",
    occasions: ["Christmas"],
    gender: "kids",
    maxAge: 12,
    price: 34.99,
    description:
      "A themed gift box designed for Christmas, curated with fun surprises for kids. It’s a playful option for bringing magic to the holiday."
  },
  {
    id: 59,
    name: "Christmas Spa Night Box",
    occasions: ["Christmas"],
    gender: "female",
    maxAge: 99,
    price: 74.99,
    description:
      "A themed gift box designed for Christmas, curated with soothing spa items. It’s perfect for unwinding during the busy holiday season."
  },
  {
    id: 60,
    name: "Christmas Sports Fan Box",
    occasions: ["Christmas"],
    gender: "male",
    maxAge: 99,
    price: 84.99,
    description:
      "A themed gift box designed for Christmas, curated with sports-themed items. It's a great choice for holiday gifting to fans."
  },

  // ------------------------------
  // HANUKKAH (5)
  // ------------------------------
  {
    id: 61,
    name: "Hanukkah Treats Box",
    occasions: ["Hanukkah"],
    gender: "unisex",
    maxAge: 99,
    price: 59.99,
    description:
      "A themed gift box designed for Hanukkah, curated with traditional treats and festive items. It’s a meaningful way to honor the holiday."
  },
  {
    id: 62,
    name: "Hanukkah Family Celebration Pack",
    occasions: ["Hanukkah"],
    gender: "unisex",
    maxAge: 99,
    price: 79.99,
    description:
      "A themed gift box designed for Hanukkah, curated for joyful family gatherings. It’s great for enhancing the warmth of the season."
  },
  {
    id: 63,
    name: "Kids Hanukkah Activity Box",
    occasions: ["Hanukkah"],
    gender: "kids",
    maxAge: 12,
    price: 39.99,
    description:
      "A themed gift box designed for Hanukkah, curated with interactive activities for children. It’s perfect for teaching and celebrating tradition."
  },
  {
    id: 64,
    name: "Hanukkah Candle & Coffee Box",
    occasions: ["Hanukkah"],
    gender: "unisex",
    maxAge: 99,
    price: 44.99,
    description:
      "A themed gift box designed for Hanukkah, curated with warm drink mixes and decorative elements. It’s a comforting addition to the holiday."
  },
  {
    id: 65,
    name: "Hanukkah Gourmet Snack Box",
    occasions: ["Hanukkah"],
    gender: "unisex",
    maxAge: 99,
    price: 74.99,
    description:
      "A themed gift box designed for Hanukkah, curated with high-quality seasonal snacks. It’s ideal for sharing during the celebration."
  },

  // ------------------------------
  // KWANZAA (5)
  // ------------------------------
  {
    id: 66,
    name: "Kwanzaa Celebration Basket",
    occasions: ["Kwanzaa"],
    gender: "unisex",
    maxAge: 99,
    price: 79.99,
    description:
      "A themed gift box designed for Kwanzaa, curated with cultural items and festive accents. It’s a meaningful way to honor the holiday’s traditions."
  },
  {
    id: 67,
    name: "Kwanzaa Family Traditions Box",
    occasions: ["Kwanzaa"],
    gender: "unisex",
    maxAge: 99,
    price: 69.99,
    description:
      "A themed gift box designed for Kwanzaa, curated for family celebrations rooted in heritage. It’s perfect for bringing loved ones together."
  },
  {
    id: 68,
    name: "Kids Kwanzaa Activity Box",
    occasions: ["Kwanzaa"],
    gender: "kids",
    maxAge: 12,
    price: 39.99,
    description:
      "A themed gift box designed for Kwanzaa, curated with educational activities for children. It’s a playful way to explore cultural values."
  },
  {
    id: 69,
    name: "Kwanzaa Art & Culture Box",
    occasions: ["Kwanzaa"],
    gender: "unisex",
    maxAge: 99,
    price: 74.99,
    description:
      "A themed gift box designed for Kwanzaa, curated with creative and cultural-themed items. It’s a great gift for honoring tradition and expression."
  },
  {
    id: 70,
    name: "Kwanzaa Reflection & Journal Box",
    occasions: ["Kwanzaa"],
    gender: "unisex",
    maxAge: 99,
    price: 49.99,
    description:
      "A themed gift box designed for Kwanzaa, curated for moments of reflection and self-growth. It’s an inspiring option for the holiday season."
  },

  // ------------------------------
  // BIRTHDAY – HIM (5)
  // ------------------------------
  {
    id: 71,
    name: "Birthday Snack Box for Him",
    occasions: ["Birthday - Him"],
    gender: "male",
    maxAge: 99,
    price: 49.99,
    description:
      "A themed gift box designed for his birthday, curated with bold flavors and fun surprises. It’s an enjoyable way to celebrate his special day."
  },
  {
    id: 72,
    name: "Birthday Grooming Essentials Box",
    occasions: ["Birthday - Him"],
    gender: "male",
    maxAge: 99,
    price: 59.99,
    description:
      "A themed gift box designed for his birthday, curated with self-care items he’ll appreciate. It’s a thoughtful way to help him look and feel great."
  },
  {
    id: 73,
    name: "Birthday Coffee Lover Box",
    occasions: ["Birthday - Him"],
    gender: "male",
    maxAge: 99,
    price: 44.99,
    description:
      "A themed gift box designed for his birthday, curated with rich coffee blends and accessories. It’s ideal for men who enjoy a comforting brew."
  },
  {
    id: 74,
    name: "Birthday Sports Fan Pack",
    occasions: ["Birthday - Him"],
    gender: "male",
    maxAge: 99,
    price: 79.99,
    description:
      "A themed gift box designed for his birthday, curated with sporty items and team-themed touches. It’s a great way to celebrate his passions."
  },
  {
    id: 75,
    name: "Birthday Night-In Relaxation Box",
    occasions: ["Birthday - Him"],
    gender: "male",
    maxAge: 99,
    price: 64.99,
    description:
      "A themed gift box designed for his birthday, curated with cozy and relaxing items. It’s perfect for unwinding and enjoying his day."
  },

  // ------------------------------
  // BIRTHDAY – HER (5)
  // ------------------------------
  {
    id: 76,
    name: "Birthday Spa Box for Her",
    occasions: ["Birthday - Her"],
    gender: "female",
    maxAge: 99,
    price: 69.99,
    description:
      "A themed gift box designed for her birthday, curated with soothing spa essentials. It’s a pampering way to celebrate her special day."
  },
  {
    id: 77,
    name: "Birthday Sweet Treats Box for Her",
    occasions: ["Birthday - Her"],
    gender: "female",
    maxAge: 99,
    price: 49.99,
    description:
      "A themed gift box designed for her birthday, curated with indulgent sweet snacks. It’s a delightful option for anyone with a sweet tooth."
  },
  {
    id: 78,
    name: "Birthday Brunch Box",
    occasions: ["Birthday - Her"],
    gender: "female",
    maxAge: 99,
    price: 59.99,
    description:
      "A themed gift box designed for her birthday, curated with morning treats and cozy items. It’s wonderful for starting her day with joy."
  },
  {
    id: 79,
    name: "Birthday Glow & Beauty Box",
    occasions: ["Birthday - Her"],
    gender: "female",
    maxAge: 99,
    price: 79.99,
    description:
      "A themed gift box designed for her birthday, curated with high-quality beauty items. It’s a radiant way to make her feel valued."
  },
  {
    id: 80,
    name: "Birthday Cozy Night Box",
    occasions: ["Birthday - Her"],
    gender: "female",
    maxAge: 99,
    price: 59.99,
    description:
      "A themed gift box designed for her birthday, curated with comfort-focused items. It’s a relaxing gift to help her unwind."
  },

  // ------------------------------
  // BIRTHDAY – KIDS (5)
  // ------------------------------
  {
    id: 81,
    name: "Kids Superhero Birthday Box",
    occasions: ["Birthday - Kids"],
    gender: "kids",
    maxAge: 10,
    price: 39.99,
    description:
      "A themed gift box designed for kids’ birthdays, curated with exciting superhero-inspired items. It’s a fun and imaginative way to celebrate."
  },
  {
    id: 82,
    name: "Kids Princess Birthday Box",
    occasions: ["Birthday - Kids"],
    gender: "kids",
    maxAge: 10,
    price: 39.99,
    description:
      "A themed gift box designed for kids’ birthdays, curated with magical princess-themed surprises. It’s perfect for creating a memorable celebration."
  },
  {
    id: 83,
    name: "Kids Gamer Birthday Box",
    occasions: ["Birthday - Kids"],
    gender: "kids",
    maxAge: 14,
    price: 49.99,
    description:
      "A themed gift box designed for kids’ birthdays, curated with gaming-inspired goodies. It’s ideal for young players who love fun challenges."
  },
  {
    id: 84,
    name: "Kids Art & Creativity Box",
    occasions: ["Birthday - Kids"],
    gender: "kids",
    maxAge: 12,
    price: 34.99,
    description:
      "A themed gift box designed for kids’ birthdays, curated with art supplies and creative tools. It’s a wonderful way to inspire imagination."
  },
  {
    id: 85,
    name: "Kids Outdoor Play Box",
    occasions: ["Birthday - Kids"],
    gender: "kids",
    maxAge: 12,
    price: 49.99,
    description:
      "A themed gift box designed for kids’ birthdays, curated with active and outdoor play items. It’s great for energetic celebrations."
  },

  // ------------------------------
  // BABY SHOWER (5)
  // ------------------------------
  {
    id: 86,
    name: "Baby Shower Essentials Box",
    occasions: ["Baby Shower"],
    gender: "unisex",
    maxAge: 1,
    price: 69.99,
    description:
      "A themed gift box designed for Baby Showers, curated with practical newborn essentials. It’s perfect for supporting new parents."
  },
  {
    id: 87,
    name: "Baby Boy Welcome Box",
    occasions: ["Baby Shower"],
    gender: "kids",
    maxAge: 1,
    price: 69.99,
    description:
      "A themed gift box designed for Baby Showers, curated with items to welcome a newborn boy. It’s a sweet and thoughtful gifting choice."
  },
  {
    id: 88,
    name: "Baby Girl Welcome Box",
    occasions: ["Baby Shower"],
    gender: "kids",
    maxAge: 1,
    price: 69.99,
    description:
      "A themed gift box designed for Baby Showers, curated with items to welcome a newborn girl. It’s a charming and heartfelt present."
  },
  {
    id: 89,
    name: "New Parents Survival Box",
    occasions: ["Baby Shower"],
    gender: "unisex",
    maxAge: 45,
    price: 79.99,
    description:
      "A themed gift box designed for Baby Showers, curated with essentials that help new parents adjust. It’s a caring and useful gift option."
  },
  {
    id: 90,
    name: "Nursery Décor Starter Box",
    occasions: ["Baby Shower"],
    gender: "kids",
    maxAge: 1,
    price: 84.99,
    description:
      "A themed gift box designed for Baby Showers, curated with adorable nursery décor pieces. It’s a lovely way to help prepare the baby’s room."
  },

  // ------------------------------
  // WEDDING (5)
  // ------------------------------
  {
    id: 91,
    name: "Wedding Couple Celebration Box",
    occasions: ["Wedding"],
    gender: "unisex",
    maxAge: 99,
    price: 99.99,
    description:
      "A themed gift box designed for Weddings, curated with elegant items for the couple. It’s a refined way to mark their special day."
  },
  {
    id: 92,
    name: "Wedding Honeymoon Prep Box",
    occasions: ["Wedding"],
    gender: "unisex",
    maxAge: 45,
    price: 89.99,
    description:
      "A themed gift box designed for Weddings, curated with travel-friendly essentials. It’s perfect for helping newlyweds enjoy their honeymoon."
  },
  {
    id: 93,
    name: "Wedding Home Essentials Box",
    occasions: ["Wedding"],
    gender: "unisex",
    maxAge: 99,
    price: 84.99,
    description:
      "A themed gift box designed for Weddings, curated with decorative and useful household items. It’s ideal for couples starting their new life together."
  },
  {
    id: 94,
    name: "Bridesmaid Appreciation Box",
    occasions: ["Wedding"],
    gender: "female",
    maxAge: 45,
    price: 59.99,
    description:
      "A themed gift box designed for Weddings, curated to show gratitude to bridesmaids. It’s a thoughtful keepsake they’ll appreciate."
  },
  {
    id: 95,
    name: "Groomsmen Thank You Box",
    occasions: ["Wedding"],
    gender: "male",
    maxAge: 45,
    price: 59.99,
    description:
      "A themed gift box designed for Weddings, curated to thank groomsmen for their support. It’s a meaningful token of appreciation."
  },

  // ------------------------------
  // ANNIVERSARY (5)
  // ------------------------------
  {
    id: 96,
    name: "Anniversary Date Night Box",
    occasions: ["Anniversary"],
    gender: "unisex",
    maxAge: 99,
    price: 79.99,
    description:
      "A themed gift box designed for Anniversaries, curated with romantic and enjoyable items. It’s perfect for celebrating love and milestones."
  },
  {
    id: 97,
    name: "Anniversary Wine & Cheese Box",
    occasions: ["Anniversary"],
    gender: "unisex",
    maxAge: 99,
    price: 89.99,
    description:
      "A themed gift box designed for Anniversaries, curated with gourmet pairings. It’s a sophisticated option for a memorable night."
  },
  {
    id: 98,
    name: "Anniversary Spa Box",
    occasions: ["Anniversary"],
    gender: "unisex",
    maxAge: 99,
    price: 84.99,
    description:
      "A themed gift box designed for Anniversaries, curated with relaxing spa essentials. It’s an intimate and thoughtful way to celebrate together."
  },
  {
    id: 99,
    name: "Anniversary Keepsake Box",
    occasions: ["Anniversary"],
    gender: "unisex",
    maxAge: 99,
    price: 74.99,
    description:
      "A themed gift box designed for Anniversaries, curated to help preserve meaningful memories. It’s a heartfelt gift for long-lasting love."
  },
  {
    id: 100,
    name: "Anniversary Luxury Night Box",
    occasions: ["Anniversary"],
    gender: "unisex",
    maxAge: 99,
    price: 99.99,
    description:
      "A themed gift box designed for Anniversaries, curated with luxurious items for a premium celebration. It’s a beautiful way to elevate the occasion."
  },

  // ------------------------------
  // RETIREMENT (5)
  // ------------------------------
  {
    id: 101,
    name: "Retirement Relaxation Box",
    occasions: ["Retirement"],
    gender: "unisex",
    maxAge: 99,
    price: 79.99,
    description:
      "A themed gift box designed for Retirement, curated with soothing and enjoyable items. It’s a thoughtful way to celebrate a new chapter."
  },
  {
    id: 102,
    name: "Retirement Travel Dreams Box",
    occasions: ["Retirement"],
    gender: "unisex",
    maxAge: 99,
    price: 89.99,
    description:
      "A themed gift box designed for Retirement, curated for future adventures. It’s perfect for encouraging exploration and enjoyment."
  },
  {
    id: 103,
    name: "Retirement Hobby Box",
    occasions: ["Retirement"],
    gender: "unisex",
    maxAge: 99,
    price: 69.99,
    description:
      "A themed gift box designed for Retirement, curated with items to spark new hobbies. It’s an inspiring way to begin post-work life."
  },
  {
    id: 104,
    name: "Retirement Gourmet Snack Box",
    occasions: ["Retirement"],
    gender: "unisex",
    maxAge: 99,
    price: 64.99,
    description:
      "A themed gift box designed for Retirement, curated with delicious high-quality treats. It’s great for savoring the freedom of retirement."
  },
  {
    id: 105,
    name: "Retirement Cozy Home Box",
    occasions: ["Retirement"],
    gender: "unisex",
    maxAge: 99,
    price: 79.99,
    description:
      "A themed gift box designed for Retirement, curated with warm and comforting items. It’s ideal for creating peaceful downtime."
  },

  // ======================================================
  // BOOSTER PRODUCTS (106–120)
  // Extra: Christmas, Valentine’s, Birthday, Baby Shower, Wedding
  // ======================================================

  // CHRISTMAS BOOSTERS (4)
  {
    id: 106,
    name: "Christmas Fireside Comfort Box",
    occasions: ["Christmas"],
    gender: "unisex",
    maxAge: 99,
    price: 69.99,
    description:
      "A cozy Christmas-themed gift box filled with warm winter treats, soft textures, and classic seasonal comforts. Perfect for relaxing by the fire and enjoying the spirit of the holidays."
  },
  {
    id: 107,
    name: "Christmas Family Game Night Box",
    occasions: ["Christmas"],
    gender: "unisex",
    maxAge: 99,
    price: 64.99,
    description:
      "A festive gift box designed for family fun during the Christmas season, complete with games and snacks. It’s an engaging way to bring the whole household together."
  },
  {
    id: 108,
    name: "Christmas Winter Wellness Box",
    occasions: ["Christmas"],
    gender: "unisex",
    maxAge: 99,
    price: 54.99,
    description:
      "A soothing holiday-themed wellness box crafted to help recipients unwind during the busy season. Includes calming fragrances, self-care items, and cozy touches."
  },
  {
    id: 109,
    name: "Christmas Hot Chocolate Deluxe Box",
    occasions: ["Christmas"],
    gender: "unisex",
    maxAge: 99,
    price: 44.99,
    description:
      "A premium hot chocolate-themed Christmas box featuring gourmet mixes and seasonal add-ins. Perfect for warming up cold evenings with comfort and cheer."
  },

  // VALENTINE'S DAY BOOSTERS (3)
  {
    id: 110,
    name: "Valentine’s Candlelight Box",
    occasions: ["Valentine's Day"],
    gender: "female",
    maxAge: 99,
    price: 74.99,
    description:
      "A romantic Valentine’s Day gift box filled with soft lighting, sensual scents, and elegant touches. Designed to create a warm, intimate atmosphere for couples."
  },
  {
    id: 111,
    name: "Valentine’s Gourmet Dessert Box",
    occasions: ["Valentine's Day"],
    gender: "unisex",
    maxAge: 99,
    price: 64.99,
    description:
      "A luxury dessert-focused Valentine’s box curated with indulgent sweets and artisan flavors. Perfect for sharing a delicious moment with someone special."
  },
  {
    id: 112,
    name: "Valentine’s Heartfelt Letters Box",
    occasions: ["Valentine's Day"],
    gender: "unisex",
    maxAge: 99,
    price: 49.99,
    description:
      "A sentimental Valentine’s set featuring guided love-letter prompts, keepsake stationery, and sweet personal touches. Ideal for couples who value emotional expression."
  },

  // BIRTHDAY BOOSTERS (3)
  {
    id: 113,
    name: "Birthday Luxe Celebration Box",
    occasions: ["Birthday - Him", "Birthday - Her"],
    gender: "unisex",
    maxAge: 99,
    price: 89.99,
    description:
      "A high-end birthday box filled with celebratory items, premium treats, and elegant touches. Great for making anyone feel deeply appreciated on their special day."
  },
  {
    id: 114,
    name: "Birthday Surprise Treat Tower",
    occasions: ["Birthday - Kids", "Birthday - Her", "Birthday - Him"],
    gender: "unisex",
    maxAge: 99,
    price: 59.99,
    description:
      "A fun, stackable tower of surprise treats meant to delight recipients of all ages. Perfect for adding excitement and joy to any birthday celebration."
  },
  {
    id: 115,
    name: "Birthday Party Essentials Mini-Pack",
    occasions: ["Birthday - Kids"],
    gender: "kids",
    maxAge: 12,
    price: 34.99,
    description:
      "A compact but festive birthday celebration pack filled with themed items ideal for children. Created to make small gatherings feel magical."
  },

  // BABY SHOWER BOOSTERS (3)
  {
    id: 116,
    name: "Baby Shower Luxury Essentials Box",
    occasions: ["Baby Shower"],
    gender: "unisex",
    maxAge: 1,
    price: 89.99,
    description:
      "A premium Baby Shower gift set featuring high-quality newborn care items and gentle essentials. Designed to support new parents with comfort and practicality."
  },
  {
    id: 117,
    name: "Baby Shower Memory Keepsake Box",
    occasions: ["Baby Shower"],
    gender: "unisex",
    maxAge: 1,
    price: 64.99,
    description:
      "A sentimental Baby Shower box designed to help parents record special early moments. Includes memory cards, keepsake envelopes, and soft personal touches."
  },
  {
    id: 118,
    name: "Baby Shower Sleep & Snuggle Box",
    occasions: ["Baby Shower"],
    gender: "unisex",
    maxAge: 1,
    price: 74.99,
    description:
      "A cozy box of soft blankets, soothing nighttime items, and comfort-themed accessories for newborns. Thoughtfully crafted to support restful bonding moments."
  },

  // WEDDING BOOSTERS (2)
  {
    id: 119,
    name: "Wedding Deluxe Couple Keepsake Box",
    occasions: ["Wedding"],
    gender: "unisex",
    maxAge: 99,
    price: 109.99,
    description:
      "A premium wedding box celebrating the couple with elegant keepsakes and timeless decor pieces. Created to honor the beginning of their new chapter together."
  },
  {
    id: 120,
    name: "Wedding Bridal Prep Elegance Box",
    occasions: ["Wedding"],
    gender: "female",
    maxAge: 45,
    price: 79.99,
    description:
      "A refined bridal preparation box filled with calming self-care items and beauty-focused touches. Perfect for helping brides feel centered and radiant on their special day."
  }

]; // END products
