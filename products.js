// products.js — FULL CLEAN VERSION (ALL 105 PRODUCTS)
// Each product includes: id, name, occasions[], gender, maxAge, price, description

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
            "A themed gift box designed for New Year, curated to match the occasion with thoughtful items. A great choice for celebrating and bringing joy."
    },
    {
        id: 2,
        name: "Midnight Countdown Basket",
        occasions: ["New Year"],
        gender: "unisex",
        maxAge: 99,
        price: 69.99,
        description:
            "A festive New Year’s basket designed to bring excitement to the countdown celebration."
    },
    {
        id: 3,
        name: "New Year Movie Night Box",
        occasions: ["New Year"],
        gender: "unisex",
        maxAge: 99,
        price: 44.99,
        description:
            "Perfect for a cozy New Year celebration with snacks and themed items for relaxing at home."
    },
    {
        id: 4,
        name: "New Year Resolution Journal Box",
        occasions: ["New Year"],
        gender: "unisex",
        maxAge: 99,
        price: 34.99,
        description:
            "Includes a journal and motivational items for starting the year with intention and positive habits."
    },
    {
        id: 5,
        name: "New Year Family Party Set",
        occasions: ["New Year"],
        gender: "unisex",
        maxAge: 99,
        price: 59.99,
        description:
            "A family-friendly New Year celebration kit filled with festive activities and decor."
    },

    // ------------------------------
    // VALENTINE’S DAY (5)
    // ------------------------------
    {
        id: 6,
        name: "Classic Romance Box",
        occasions: ["Valentine's Day"],
        gender: "female",
        maxAge: 99,
        price: 69.99,
        description: "A romantic Valentine’s Day box curated with thoughtful items for her."
    },
    {
        id: 7,
        name: "Gentleman's Valentine Basket",
        occasions: ["Valentine's Day"],
        gender: "male",
        maxAge: 99,
        price: 74.99,
        description: "A Valentine’s basket designed specifically with premium items for him."
    },
    {
        id: 8,
        name: "Couples Movie Night Box",
        occasions: ["Valentine's Day"],
        gender: "unisex",
        maxAge: 99,
        price: 59.99,
        description: "A cozy date-night box perfect for couples spending Valentine’s Day together."
    },
    {
        id: 9,
        name: "Chocolate Lover’s Valentine Box",
        occasions: ["Valentine's Day"],
        gender: "unisex",
        maxAge: 99,
        price: 64.99,
        description: "Packed with gourmet chocolates for celebrating love with sweetness."
    },
    {
        id: 10,
        name: "Valentine’s Self-Care Box",
        occasions: ["Valentine's Day"],
        gender: "unisex",
        maxAge: 99,
        price: 49.99,
        description: "A calming, spa-style box ideal for self-love and relaxation on Valentine’s Day."
    },

    // ------------------------------
    // ST. PATRICK’S DAY (5)
    // ------------------------------
    {
        id: 11,
        name: "Lucky Shamrock Box",
        occasions: ["St. Patrick's Day"],
        gender: "unisex",
        maxAge: 99,
        price: 39.99,
        description: "A festive St. Patrick’s Day box filled with green-themed treats and items."
    },
    {
        id: 12,
        name: "Irish Pub Night Box",
        occasions: ["St. Patrick's Day"],
        gender: "unisex",
        maxAge: 99,
        price: 59.99,
        description: "A fun at-home pub experience with themed snacks and accessories."
    },
    {
        id: 13,
        name: "Kids St. Patrick’s Activity Box",
        occasions: ["St. Patrick's Day"],
        gender: "kids",
        maxAge: 12,
        price: 29.99,
        description: "A playful activity kit perfect for kids celebrating St. Patrick’s Day."
    },
    {
        id: 14,
        name: "St. Patrick’s Day Coffee Box",
        occasions: ["St. Patrick's Day"],
        gender: "unisex",
        maxAge: 99,
        price: 34.99,
        description: "Festive coffee blends and themed items for a cozy holiday treat."
    },
    {
        id: 15,
        name: "Shamrock Snack Pack",
        occasions: ["St. Patrick's Day"],
        gender: "unisex",
        maxAge: 99,
        price: 24.99,
        description: "A light snack assortment perfect for a quick St. Patrick’s Day gift."
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
        description: "A fun and colorful Easter basket full of treats for kids."
    },
    {
        id: 17,
        name: "Easter Brunch Box",
        occasions: ["Easter"],
        gender: "unisex",
        maxAge: 99,
        price: 59.99,
        description: "Breakfast-themed Easter items perfect for a festive brunch."
    },
    {
        id: 18,
        name: "Easter Candy Explosion Box",
        occasions: ["Easter"],
        gender: "kids",
        maxAge: 17,
        price: 34.99,
        description: "A candy-filled Easter box designed for sweet celebrations."
    },
    {
        id: 19,
        name: "Easter Spa & Scripture Box",
        occasions: ["Easter"],
        gender: "female",
        maxAge: 99,
        price: 49.99,
        description: "A faith-centered spa box perfect for serene Easter reflection."
    },
    {
        id: 20,
        name: "Easter Family Fun Pack",
        occasions: ["Easter"],
        gender: "unisex",
        maxAge: 99,
        price: 64.99,
        description: "Games and activities perfect for family Easter celebrations."
    },

    // ------------------------------
    // MOTHER’S DAY (5)
    // ------------------------------
    {
        id: 21,
        name: "Mother’s Day Spa Retreat",
        occasions: ["Mother's Day"],
        gender: "female",
        maxAge: 99,
        price: 69.99,
        description: "A relaxing spa box created specially for Mother’s Day pampering."
    },
    {
        id: 22,
        name: "Mother’s Day Sweet Treat Box",
        occasions: ["Mother's Day"],
        gender: "female",
        maxAge: 99,
        price: 49.99,
        description: "A dessert-focused box celebrating moms with comforting treats."
    },
    {
        id: 23,
        name: "Mom & Daughter Pamper Box",
        occasions: ["Mother's Day"],
        gender: "female",
        maxAge: 99,
        price: 79.99,
        description: "A shared spa experience designed for mothers and daughters."
    },
    {
        id: 24,
        name: "New Mom Celebration Box",
        occasions: ["Mother's Day", "Baby Shower"],
        gender: "female",
        maxAge: 45,
        price: 84.99,
        description: "A supportive, thoughtful box perfect for new moms."
    },
    {
        id: 25,
        name: "Grandma Appreciation Box",
        occasions: ["Mother's Day"],
        gender: "female",
        maxAge: 99,
        price: 54.99,
        description: "A sweet and thoughtful box dedicated to grandmothers."
    },

    // ------------------------------
    // FATHER’S DAY (5)
    // ------------------------------
    {
        id: 26,
        name: "Father’s Day Grill Master Box",
        occasions: ["Father's Day"],
        gender: "male",
        maxAge: 99,
        price: 69.99,
        description: "A grilling-themed set perfect for dads who love to cook outdoors."
    },
    {
        id: 27,
        name: "Dad’s Snack Attack Box",
        occasions: ["Father's Day"],
        gender: "male",
        maxAge: 99,
        price: 49.99,
        description: "A snack assortment designed for Father’s Day munching."
    },
    {
        id: 28,
        name: "Tech-Loving Dad Box",
        occasions: ["Father's Day"],
        gender: "male",
        maxAge: 99,
        price: 89.99,
        description: "A gadget and tech accessory box for modern dads."
    },
    {
        id: 29,
        name: "Outdoorsman Dad Bundle",
        occasions: ["Father's Day"],
        gender: "male",
        maxAge: 99,
        price: 84.99,
        description: "Perfect for dads who enjoy exploring and outdoor fun."
    },
    {
        id: 30,
        name: "Father’s Day Coffee & Mug Set",
        occasions: ["Father's Day"],
        gender: "male",
        maxAge: 99,
        price: 39.99,
        description: "A cozy coffee-themed gift set for Father’s Day."
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
        description: "A celebration box to recognize graduating teens."
    },
    {
        id: 32,
        name: "College Grad Starter Kit",
        occasions: ["Graduation"],
        gender: "unisex",
        maxAge: 30,
        price: 79.99,
        description: "A practical Graduation box for young adults entering new careers."
    },
    {
        id: 33,
        name: "Grad Study Break Snack Box",
        occasions: ["Graduation"],
        gender: "unisex",
        maxAge: 30,
        price: 39.99,
        description: "A snack kit perfect for students powering through finals."
    },
    {
        id: 34,
        name: "Grad Dorm Essentials Box",
        occasions: ["Graduation"],
        gender: "unisex",
        maxAge: 22,
        price: 84.99,
        description: "Everything a new college student needs for dorm life."
    },
    {
        id: 35,
        name: "Graduation Celebration Party Pack",
        occasions: ["Graduation"],
        gender: "unisex",
        maxAge: 99,
        price: 74.99,
        description: "A party set for hosting a memorable graduation celebration."
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
        description: "A barbecue-themed box perfect for Independence Day cookouts."
    },
    {
        id: 37,
        name: "Patriotic Snack Basket",
        occasions: ["Fourth of July"],
        gender: "unisex",
        maxAge: 99,
        price: 39.99,
        description: "A snack assortment celebrating red, white, and blue flavors."
    },
    {
        id: 38,
        name: "Fourth of July Family Fun Box",
        occasions: ["Fourth of July"],
        gender: "unisex",
        maxAge: 99,
        price: 59.99,
        description: "Games and decorations for a festive July 4th celebration."
    },
    {
        id: 39,
        name: "Fourth of July Picnic Basket",
        occasions: ["Fourth of July"],
        gender: "unisex",
        maxAge: 99,
        price: 84.99,
        description: "An outdoor picnic set perfect for summer celebrations."
    },
    {
        id: 40,
        name: "July 4th Dessert Sampler",
        occasions: ["Fourth of July"],
        gender: "unisex",
        maxAge: 99,
        price: 44.99,
        description: "A patriotic dessert assortment for sweet Independence Day moments."
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
        description: "A spooky candy box perfect for Halloween lovers."
    },
    {
        id: 42,
        name: "Halloween Movie Night Box",
        occasions: ["Halloween"],
        gender: "unisex",
        maxAge: 99,
        price: 44.99,
        description: "A cozy Halloween movie night kit with snacks and themed goodies."
    },
    {
        id: 43,
        name: "Kids Trick-or-Treat Box",
        occasions: ["Halloween"],
        gender: "kids",
        maxAge: 12,
        price: 29.99,
        description: "A child-friendly Halloween treat and activity set."
    },
    {
        id: 44,
        name: "Halloween Party Décor Box",
        occasions: ["Halloween"],
        gender: "unisex",
        maxAge: 99,
        price: 49.99,
        description: "A decorative kit to host a festive Halloween party."
    },
    {
        id: 45,
        name: "Halloween Office Treat Set",
        occasions: ["Halloween"],
        gender: "unisex",
        maxAge: 99,
        price: 59.99,
        description: "A workplace treat box for adding Halloween cheer to the office."
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
        description: "A warm, seasonal basket perfect for Thanksgiving hosts."
    },
    {
        id: 47,
        name: "Thanksgiving Snack & Pie Box",
        occasions: ["Thanksgiving"],
        gender: "unisex",
        maxAge: 99,
        price: 49.99,
        description: "A dessert and snack box ideal for cozy Thanksgiving gatherings."
    },
    {
        id: 48,
        name: "Friendsgiving Party Pack",
        occasions: ["Thanksgiving"],
        gender: "unisex",
        maxAge: 99,
        price: 59.99,
        description: "A celebration pack perfect for Friendsgiving events."
    },
    {
        id: 49,
        name: "Thanksgiving Office Appreciation Box",
        occasions: ["Thanksgiving"],
        gender: "unisex",
        maxAge: 99,
        price: 64.99,
        description: "A seasonal box meant to uplift coworkers with Thanksgiving treats."
    },
    {
        id: 50,
        name: "Cozy Thanksgiving Home Box",
        occasions: ["Thanksgiving"],
        gender: "unisex",
        maxAge: 99,
        price: 84.99,
        description: "A comfort-filled Thanksgiving box for warm home celebrations."
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
        description: "A festive Christmas box filled with classic seasonal favorites."
    },
    {
        id: 52,
        name: "Christmas Morning Breakfast Basket",
        occasions: ["Christmas"],
        gender: "unisex",
        maxAge: 99,
        price: 69.99,
        description: "A holiday breakfast-themed basket perfect for Christmas morning."
    },
    {
        id: 53,
        name: "Christmas Movie Night Box",
        occasions: ["Christmas"],
        gender: "unisex",
        maxAge: 99,
        price: 49.99,
        description: "A movie-night themed Christmas box full of cozy treats."
    },
    {
        id: 54,
        name: "Christmas Cookie Baking Box",
        occasions: ["Christmas"],
        gender: "unisex",
        maxAge: 99,
        price: 44.99,
        description: "Holiday baking essentials for festive cookie making."
    },
    {
        id: 55,
        name: "Christmas Coffee & Cocoa Set",
        occasions: ["Christmas"],
        gender: "unisex",
        maxAge: 99,
        price: 39.99,
        description: "Warm holiday drinks perfect for a cozy night in."
    },
    {
        id: 56,
        name: "Christmas Deluxe Family Basket",
        occasions: ["Christmas"],
        gender: "unisex",
        maxAge: 99,
        price: 99.99,
        description: "A premium family-sized Christmas basket full of festive items."
    },
    {
        id: 57,
        name: "Christmas Secret Santa Box",
        occasions: ["Christmas"],
        gender: "unisex",
        maxAge: 99,
        price: 29.99,
        description: "A fun gift exchange-ready Christmas Secret Santa box."
    },
    {
        id: 58,
        name: "Kids Christmas Surprise Box",
        occasions: ["Christmas"],
        gender: "kids",
        maxAge: 12,
        price: 34.99,
        description: "A magical Christmas box full of surprises for kids."
    },
    {
        id: 59,
        name: "Christmas Spa Night Box",
        occasions: ["Christmas"],
        gender: "female",
        maxAge: 99,
        price: 74.99,
        description: "A relaxing Christmas spa experience designed for unwinding."
    },
    {
        id: 60,
        name: "Christmas Sports Fan Box",
        occasions: ["Christmas"],
        gender: "male",
        maxAge: 99,
        price: 84.99,
        description: "A festive sports-themed Christmas gift box perfect for fans."
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
        description: "Traditional Hanukkah treats and themed celebration items."
    },
    {
        id: 62,
        name: "Hanukkah Family Celebration Pack",
        occasions: ["Hanukkah"],
        gender: "unisex",
        maxAge: 99,
        price: 79.99,
        description: "A celebration box for joyful Hanukkah family gatherings."
    },
    {
        id: 63,
        name: "Kids Hanukkah Activity Box",
        occasions: ["Hanukkah"],
        gender: "kids",
        maxAge: 12,
        price: 39.99,
        description: "An interactive kids’ activity box for Hanukkah fun."
    },
    {
        id: 64,
        name: "Hanukkah Candle & Coffee Box",
        occasions: ["Hanukkah"],
        gender: "unisex",
        maxAge: 99,
        price: 44.99,
        description: "Warm drinks and decorative holiday items for Hanukkah nights."
    },
    {
        id: 65,
        name: "Hanukkah Gourmet Snack Box",
        occasions: ["Hanukkah"],
        gender: "unisex",
        maxAge: 99,
        price: 74.99,
        description: "A premium snack assortment honoring Hanukkah traditions."
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
        description: "A cultural celebration basket curated for the Kwanzaa holiday."
    },
    {
        id: 67,
        name: "Kwanzaa Family Traditions Box",
        occasions: ["Kwanzaa"],
        gender: "unisex",
        maxAge: 99,
        price: 69.99,
        description: "A family-focused gift box honoring Kwanzaa traditions."
    },
    {
        id: 68,
        name: "Kids Kwanzaa Activity Box",
        occasions: ["Kwanzaa"],
        gender: "kids",
        maxAge: 12,
        price: 39.99,
        description: "A cultural activity box to teach and celebrate Kwanzaa values."
    },
    {
        id: 69,
        name: "Kwanzaa Art & Culture Box",
        occasions: ["Kwanzaa"],
        gender: "unisex",
        maxAge: 99,
        price: 74.99,
        description: "A creative gift box focused on Kwanzaa arts and culture."
    },
    {
        id: 70,
        name: "Kwanzaa Reflection & Journal Box",
        occasions: ["Kwanzaa"],
        gender: "unisex",
        maxAge: 99,
        price: 49.99,
        description: "A reflective journaling gift celebrating Kwanzaa’s principles."
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
        description: "Bold snacks and fun items curated for his birthday celebration."
    },
    {
        id: 72,
        name: "Birthday Grooming Essentials Box",
        occasions: ["Birthday - Him"],
        gender: "male",
        maxAge: 99,
        price: 59.99,
        description: "A sleek grooming kit perfect for men on their birthday."
    },
    {
        id: 73,
        name: "Birthday Coffee Lover Box",
        occasions: ["Birthday - Him"],
        gender: "male",
        maxAge: 99,
        price: 44.99,
        description: "A warm and aromatic coffee-themed gift for his birthday."
    },
    {
        id: 74,
        name: "Birthday Sports Fan Pack",
        occasions: ["Birthday - Him"],
        gender: "male",
        maxAge: 99,
        price: 79.99,
        description: "A sporty birthday box ideal for fans of all ages."
    },
    {
        id: 75,
        name: "Birthday Night-In Relaxation Box",
        occasions: ["Birthday - Him"],
        gender: "male",
        maxAge: 99,
        price: 64.99,
        description: "A cozy at-home relaxation kit for the perfect birthday night in."
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
        description: "A soothing spa box curated for her birthday pampering."
    },
    {
        id: 77,
        name: "Birthday Sweet Treats Box for Her",
        occasions: ["Birthday - Her"],
        gender: "female",
        maxAge: 99,
        price: 49.99,
        description: "A dessert-themed birthday box perfect for anyone with a sweet tooth."
    },
    {
        id: 78,
        name: "Birthday Brunch Box",
        occasions: ["Birthday - Her"],
        gender: "female",
        maxAge: 99,
        price: 59.99,
        description: "Brunch-inspired birthday treats and cozy gifts."
    },
    {
        id: 79,
        name: "Birthday Glow & Beauty Box",
        occasions: ["Birthday - Her"],
        gender: "female",
        maxAge: 99,
        price: 79.99,
        description: "High-end beauty and self-care items for her luxurious birthday."
    },
    {
        id: 80,
        name: "Birthday Cozy Night Box",
        occasions: ["Birthday - Her"],
        gender: "female",
        maxAge: 99,
        price: 59.99,
        description: "A warm, comforting birthday night-in experience."
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
        description: "A fun superhero-themed birthday box for kids."
    },
    {
        id: 82,
        name: "Kids Princess Birthday Box",
        occasions: ["Birthday - Kids"],
        gender: "kids",
        maxAge: 10,
        price: 39.99,
        description: "A magical princess-themed birthday surprise."
    },
    {
        id: 83,
        name: "Kids Gamer Birthday Box",
        occasions: ["Birthday - Kids"],
        gender: "kids",
        maxAge: 14,
        price: 49.99,
        description: "Gaming-themed gifts perfect for young video game fans."
    },
    {
        id: 84,
        name: "Kids Art & Creativity Box",
        occasions: ["Birthday - Kids"],
        gender: "kids",
        maxAge: 12,
        price: 34.99,
        description: "An arts-and-crafts birthday box inspiring creativity."
    },
    {
        id: 85,
        name: "Kids Outdoor Play Box",
        occasions: ["Birthday - Kids"],
        gender: "kids",
        maxAge: 12,
        price: 49.99,
        description: "Active outdoor toys and items for energetic kids’ birthdays."
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
        description: "A practical newborn essentials kit great for baby showers."
    },
    {
        id: 87,
        name: "Baby Boy Welcome Box",
        occasions: ["Baby Shower"],
        gender: "kids",
        maxAge: 1,
        price: 69.99,
        description: "A sweet newborn boy gift box perfect for welcoming baby."
    },
    {
        id: 88,
        name: "Baby Girl Welcome Box",
        occasions: ["Baby Shower"],
        gender: "kids",
        maxAge: 1,
        price: 69.99,
        description: "A charming newborn girl box ideal for gifting at showers."
    },
    {
        id: 89,
        name: "New Parents Survival Box",
        occasions: ["Baby Shower"],
        gender: "unisex",
        maxAge: 45,
        price: 79.99,
        description: "A supportive kit designed to help new parents adjust."
    },
    {
        id: 90,
        name: "Nursery Décor Starter Box",
        occasions: ["Baby Shower"],
        gender: "kids",
        maxAge: 1,
        price: 84.99,
        description: "Adorable nursery décor items for newborns."
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
        description: "A premium wedding gift box celebrating the happy couple."
    },
    {
        id: 92,
        name: "Wedding Honeymoon Prep Box",
        occasions: ["Wedding"],
        gender: "unisex",
        maxAge: 45,
        price: 89.99,
        description: "Travel-friendly honeymoon items for newlyweds."
    },
    {
        id: 93,
        name: "Wedding Home Essentials Box",
        occasions: ["Wedding"],
        gender: "unisex",
        maxAge: 99,
        price: 84.99,
        description: "Elegant home essentials perfect for new couples."
    },
    {
        id: 94,
        name: "Bridesmaid Appreciation Box",
        occasions: ["Wedding"],
        gender: "female",
        maxAge: 45,
        price: 59.99,
        description: "A heartfelt thank-you gift for bridesmaids."
    },
    {
        id: 95,
        name: "Groomsmen Thank You Box",
        occasions: ["Wedding"],
        gender: "male",
        maxAge: 45,
        price: 59.99,
        description: "A thoughtful appreciation box for groomsmen."
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
        description: "A romantic anniversary box for couples celebrating love."
    },
    {
        id: 97,
        name: "Anniversary Wine & Cheese Box",
        occasions: ["Anniversary"],
        gender: "unisex",
        maxAge: 99,
        price: 89.99,
        description: "A gourmet pairing box for classy anniversary evenings."
    },
    {
        id: 98,
        name: "Anniversary Spa Box",
        occasions: ["Anniversary"],
        gender: "unisex",
        maxAge: 99,
        price: 84.99,
        description: "A luxurious spa-themed anniversary gift."
    },
    {
        id: 99,
        name: "Anniversary Keepsake Box",
        occasions: ["Anniversary"],
        gender: "unisex",
        maxAge: 99,
        price: 74.99,
        description: "A meaningful keepsake box designed for lasting memories."
    },
    {
        id: 100,
        name: "Anniversary Luxury Night Box",
        occasions: ["Anniversary"],
        gender: "unisex",
        maxAge: 99,
        price: 99.99,
        description: "A high-end luxury gift for unforgettable anniversary nights."
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
        description: "A soothing comfort-themed box for retirees."
    },
    {
        id: 102,
        name: "Retirement Travel Dreams Box",
        occasions: ["Retirement"],
        gender: "unisex",
        maxAge: 99,
        price: 89.99,
        description: "Travel-focused retirement gifts inspiring adventure."
    },
    {
        id: 103,
        name: "Retirement Hobby Box",
        occasions: ["Retirement"],
        gender: "unisex",
        maxAge: 99,
        price: 69.99,
        description: "A gift box encouraging new hobbies and exploration."
    },
    {
        id: 104,
        name: "Retirement Gourmet Snack Box",
        occasions: ["Retirement"],
        gender: "unisex",
        maxAge: 99,
        price: 64.99,
        description: "A premium snack assortment celebrating retirement freedom."
    },
    {
        id: 105,
        name: "Retirement Cozy Home Box",
        occasions: ["Retirement"],
        gender: "unisex",
        maxAge: 99,
        price: 79.99,
        description: "Warm, comforting items perfect for peaceful retired living."
    }

];
// END OF FULL products.js
