// =============================================
// SAINIKMART — PRODUCTS DATABASE
// Add, edit, or remove products from this file
// =============================================

const products = [
  // ===== SNACKS =====
  { id: 1, name: "Lay's Classic Salted Chips", category: "snacks", price: 20, emoji: "🥔", desc: "Crispy and light potato chips with a classic salted flavour. A perfect snack for any time of the day, enjoyed by all age groups." },
  { id: 2, name: "Haldiram's Aloo Bhujia", category: "snacks", price: 50, emoji: "🌿", desc: "Authentic Rajasthani aloo bhujia made from fine gram flour and potatoes. Crunchy, spicy, and packed with traditional Indian flavour." },
  { id: 3, name: "Kurkure Masala Munch", category: "snacks", price: 20, emoji: "🌶️", desc: "Crunchy corn puffs with a bold masala flavour. A favourite Indian snack loved by children and adults alike across the country." },
  { id: 4, name: "Too Yumm Veggie Sticks", category: "snacks", price: 30, emoji: "🥕", desc: "Baked and not fried, these veggie sticks are a healthier snacking option without compromising on taste and crunch." },
  { id: 5, name: "Bingo Mad Angles", category: "snacks", price: 20, emoji: "🔺", desc: "Triangular shaped chips with an irresistible achari masti flavour. A bold and tangy snack that keeps you coming back for more." },

  // ===== DAIRY & MILK =====
  { id: 6, name: "Amul Butter (100g)", category: "dairy", price: 55, emoji: "🧈", desc: "India's most loved butter, made from fresh cream. Rich, smooth, and perfect for spreading on toast or adding to your favourite recipes." },
  { id: 7, name: "Britannia Cheese Slices", category: "dairy", price: 75, emoji: "🧀", desc: "Smooth and creamy processed cheese slices, ideal for sandwiches, burgers, and grilled dishes. Made from quality milk." },
  { id: 8, name: "Amul Masti Dahi (400g)", category: "dairy", price: 40, emoji: "🥛", desc: "Thick and creamy set curd made from fresh milk. A wholesome addition to every Indian meal, perfect for raita and lassi." },
  { id: 9, name: "Nestle Milkmaid (400g)", category: "dairy", price: 85, emoji: "🍯", desc: "Sweetened condensed milk ideal for making desserts, sweets, and baked goods. A trusted ingredient in Indian kitchens." },

  // ===== BEVERAGES =====
  { id: 10, name: "Tropicana Orange Juice (1L)", category: "beverages", price: 110, emoji: "🍊", desc: "Refreshing 100% real fruit juice made from sun-ripened oranges. No artificial flavours or preservatives. A healthy beverage choice." },
  { id: 11, name: "Coca-Cola (2L)", category: "beverages", price: 95, emoji: "🥤", desc: "The world's favourite sparkling soft drink. Crisp, refreshing, and perfect for any occasion — from casual gatherings to special events." },
  { id: 12, name: "Tata Tea Premium (500g)", category: "beverages", price: 220, emoji: "🍵", desc: "A premium blend of fine Assam and Darjeeling tea leaves. Delivers a rich, full-bodied flavour and aroma for the perfect cup every morning." },
  { id: 13, name: "Red Bull Energy Drink", category: "beverages", price: 125, emoji: "⚡", desc: "The original energy drink that vitalises body and mind. Contains caffeine, taurine, and B-vitamins to help you stay alert and focused." },
  { id: 14, name: "Bournvita (500g)", category: "beverages", price: 260, emoji: "🍫", desc: "A delicious chocolate malt drink mix that provides essential vitamins and minerals. A nutritious addition to your daily glass of milk." },

  // ===== INSTANT & READY TO EAT =====
  { id: 15, name: "Maggi 2-Minute Noodles (Pack of 12)", category: "instant", price: 144, emoji: "🍜", desc: "India's most iconic instant noodle brand. Quick, tasty, and satisfying — ready in just 2 minutes with the signature Maggi masala flavour." },
  { id: 16, name: "Yippee Magic Masala Noodles", category: "instant", price: 14, emoji: "🍝", desc: "Long, smooth noodles with a bold and zesty magic masala seasoning. A delicious and quick meal option that is loved across India." },
  { id: 17, name: "MTR Ready to Eat Dal Makhani", category: "instant", price: 90, emoji: "🥘", desc: "Restaurant-style dal makhani ready in 3 minutes. Made with authentic spices and slow-cooked lentils for a rich, satisfying meal." },
  { id: 18, name: "Knorr Cup-a-Soup Tomato", category: "instant", price: 30, emoji: "🍲", desc: "A warm and comforting tomato soup mix ready in minutes. Simply add hot water for a rich, velvety soup that refreshes the senses." },

  // ===== BISCUITS & COOKIES =====
  { id: 19, name: "Parle-G Original Biscuits", category: "biscuits", price: 10, emoji: "🍪", desc: "India's most beloved biscuit with a timeless sweet taste. Perfect with chai or enjoyed on its own — a staple in every Indian household." },
  { id: 20, name: "Oreo Chocolate Cream Biscuits", category: "biscuits", price: 30, emoji: "⚫", desc: "Classic chocolate sandwich biscuits with a rich cream filling. Best enjoyed by twisting, licking, and dunking in your favourite milk." },
  { id: 21, name: "Britannia Good Day Cashew", category: "biscuits", price: 35, emoji: "🥜", desc: "Rich butter biscuits loaded with real cashew pieces. A premium treat that pairs perfectly with your evening tea or coffee." },
  { id: 22, name: "Bourbon Chocolate Biscuits", category: "biscuits", price: 20, emoji: "🍫", desc: "Two chocolate biscuits sandwiched together with a smooth chocolate cream filling. A delightful treat for chocolate lovers of all ages." },

  // ===== BREAKFAST CEREALS =====
  { id: 23, name: "Kellogg's Corn Flakes (875g)", category: "cereals", price: 340, emoji: "🌽", desc: "Light and crispy corn flakes that are an ideal breakfast choice. Rich in iron and vitamins, best enjoyed with cold milk and fresh fruit." },
  { id: 24, name: "Quaker Oats (1kg)", category: "cereals", price: 280, emoji: "🌾", desc: "Wholesome rolled oats that provide sustained energy throughout the morning. A heart-healthy breakfast choice rich in natural fibre." },
  { id: 25, name: "Muesli Fruit & Nut (500g)", category: "cereals", price: 220, emoji: "🍓", desc: "A nutritious blend of rolled oats, dried fruits, nuts, and seeds. A wholesome and satisfying breakfast that fuels your day effectively." },

  // ===== SWEETS & NAMKEEN =====
  { id: 26, name: "Haldiram's Mixture (400g)", category: "sweets", price: 120, emoji: "🎉", desc: "A classic Indian snack mix featuring a variety of sev, peanuts, and fried lentils with a perfectly balanced spice blend." },
  { id: 27, name: "Bikaji Bhujia Sev (400g)", category: "sweets", price: 90, emoji: "🌀", desc: "Fine and crispy sev made from gram flour, seasoned with authentic spices. A traditional Indian namkeen enjoyed across all occasions." },
  { id: 28, name: "Chitale Bakarwadi (200g)", category: "sweets", price: 80, emoji: "🌀", desc: "A popular Maharashtrian snack with crispy outer layers and a spiced coconut filling. A unique and flavourful treat to savour." },

  // ===== SPICES & MASALAS =====
  { id: 29, name: "MDH Chhole Masala (100g)", category: "spices", price: 55, emoji: "🌶️", desc: "An aromatic blend of premium whole spices for making authentic Punjabi-style chhole. Brings restaurant quality flavour to your kitchen." },
  { id: 30, name: "Everest Kitchen King Masala (100g)", category: "spices", price: 60, emoji: "👑", desc: "A versatile all-purpose masala blend ideal for a wide range of Indian dishes. Delivers consistent and rich flavour in every cook." },
  { id: 31, name: "Catch Turmeric Powder (200g)", category: "spices", price: 45, emoji: "🟡", desc: "Pure and vibrant turmeric powder sourced from the finest rhizomes. An essential ingredient for colour, flavour, and health benefits." },
  { id: 32, name: "Badshah Garam Masala (100g)", category: "spices", price: 65, emoji: "✨", desc: "A fragrant and robust garam masala blend made from whole roasted spices. Adds warmth and depth to curries, rice dishes, and more." },

  // ===== OILS & GHEE =====
  { id: 33, name: "Fortune Sunflower Oil (1L)", category: "oils", price: 140, emoji: "🌻", desc: "Light and healthy refined sunflower oil with a neutral taste. Ideal for everyday cooking, frying, and baking with a high smoke point." },
  { id: 34, name: "Amul Pure Ghee (500ml)", category: "oils", price: 320, emoji: "✨", desc: "Pure and aromatic cow milk ghee made using traditional methods. Adds a rich, buttery flavour to rotis, rice, and Indian sweets." },
  { id: 35, name: "Saffola Gold Oil (2L)", category: "oils", price: 380, emoji: "💛", desc: "A premium blended cooking oil fortified with vitamins. Suitable for daily cooking with a lighter texture that helps maintain heart health." },

  // ===== SAUCES & CONDIMENTS =====
  { id: 36, name: "Kissan Fresh Tomato Ketchup (1kg)", category: "sauces", price: 165, emoji: "🍅", desc: "Made from ripe and juicy tomatoes, this ketchup is a staple condiment for every household. Perfect with snacks, sandwiches, and more." },
  { id: 37, name: "Maggi Hot and Sweet Sauce (400g)", category: "sauces", price: 90, emoji: "🌶️", desc: "A tangy and spicy tomato-chilli sauce that enhances any snack or meal. The ideal dip for samosas, pakoras, and French fries." },
  { id: 38, name: "Dr. Oetker Mayonnaise (300g)", category: "sauces", price: 115, emoji: "🥗", desc: "Rich and creamy eggless mayonnaise with a smooth, indulgent texture. Perfect for sandwiches, wraps, salads, and as a dipping sauce." },

  // ===== BAKERY ITEMS =====
  { id: 39, name: "Britannia Bread (400g)", category: "bakery", price: 45, emoji: "🍞", desc: "Soft and fresh white sandwich bread made with quality wheat flour. Perfect for toast, sandwiches, and everyday breakfast needs." },
  { id: 40, name: "Britannia Toastea Rusk", category: "bakery", price: 35, emoji: "🥐", desc: "Light and crispy double-baked rusks with a delicate sweetness. Best enjoyed with a hot cup of chai for a traditional Indian breakfast." },
  { id: 41, name: "English Oven Multigrain Bread", category: "bakery", price: 55, emoji: "🌾", desc: "Nutritious multigrain bread baked with a blend of wholesome grains and seeds. A healthier bread option for a balanced daily diet." }
];

// Category display names
const categoryNames = {
  snacks: "Snacks",
  dairy: "Dairy & Milk",
  beverages: "Beverages",
  instant: "Instant & Ready to Eat",
  biscuits: "Biscuits & Cookies",
  cereals: "Breakfast Cereals",
  sweets: "Packaged Sweets & Namkeen",
  spices: "Spices & Masalas",
  oils: "Oils & Ghee",
  sauces: "Sauces & Condiments",
  bakery: "Bakery Items"
};
