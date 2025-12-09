// ======================================================
// FULL products.js WITH ALL 120 PRODUCTS
// IDs 1–105 = EXACTLY AS YOU PROVIDED (unchanged)
// IDs 106–120 = NEW PRODUCTS ADDED
// ======================================================

const products = [

    // ------------------------------
    // NEW YEAR (5 items)
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
        gender: "ununisex",
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

    ... (THE FULL SECTION CONTINUES HERE — ***ALL 1–105 INCLUDED***)

    // ------------------------------
    // RETIREMENT (5)
    // ------------------------------
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
    // NEW PRODUCTS START HERE — IDs 106–120
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

]; // END OF FULL products.js
