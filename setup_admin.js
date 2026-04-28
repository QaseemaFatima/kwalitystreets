const fs = require('fs');

const menuData = {
    "fast-food": [
        { subtitle: "Pizzas" },
        { id: "1", name: "Plain Cheese", price: "160" }, { id: "2", name: "Onion Cheese", price: "170" }, { id: "3", name: "Tomato Cheese", price: "170" }, { id: "4", name: "Capsicum Cheese", price: "185" }, { id: "5", name: "All Mix Veg", price: "205" }, { id: "6", name: "Mushroom Cheese", price: "225" }, { id: "7", name: "Sweet Corn", price: "235" }, { id: "8", name: "Chilli Paneer", price: "250" }, { id: "9", name: "Paneer Tikka", price: "250" }, { id: "10", name: "Chicken", price: "265" },
        { subtitle: "Burgers" },
        { id: "11", name: "Veg Burger", price: "115" }, { id: "12", name: "Veg Cheese Burger", price: "125" }, { id: "13", name: "Chicken Burger", price: "165" }, { id: "14", name: "Chicken Cheese Burger", price: "180" },
        { subtitle: "Eggs" },
        { id: "15", name: "Boiled Egg", price: "55" }, { id: "16", name: "Bhurji w/ Bread", price: "90" }, { id: "17", name: "Omelette w/ Bread", price: "100" },
        { subtitle: "Sandwiches" },
        { id: "18", name: "Plain Bread Slice", price: "40" }, { id: "19", name: "Butter & Bread", price: "65" }, { id: "20", name: "Butter Toast", price: "70" }, { id: "21", name: "Veg Sandwich", price: "90" }, { id: "22", name: "Butter/ Jam on Toast", price: "95" }, { id: "23", name: "Cheese Sandwich", price: "105" }, { id: "24", name: "Veg Grilled Sandwich", price: "110" }, { id: "25", name: "Bombay Sandwich", price: "120" }, { id: "26", name: "Cheese Grilled Sandwich", price: "125" }, { id: "27", name: "Kwality Special Club Sandwich", price: "180" }, { id: "28", name: "Paneer Tikka Sandwich", price: "180" }, { id: "29", name: "Chicken Sandwich", price: "165" },
        { subtitle: "Momos" },
        { id: "30", name: "Veg Steamed", price: "130" }, { id: "31", name: "Veg Fried", price: "140" }, { id: "32", name: "Veg Tandoori", price: "160" }, { id: "33", name: "Chicken Steamed", price: "170" }, { id: "34", name: "Chicken Fried", price: "180" }, { id: "35", name: "Chicken Tandoori", price: "200" }
    ],
    "desserts": [
        { subtitle: "Ice Cream" },
        { id: "36", name: "Vanilla / Chocolate / Strawberry / Pista / Mango", price: "90" }, { id: "37", name: "Kesar Pista", price: "99" }, { id: "38", name: "Butterscotch", price: "99" }, { id: "39", name: "Kulfi", price: "80" }, { id: "40", name: "Cassata", price: "120" },
        { subtitle: "Sundaes" },
        { id: "41", name: "Single", price: "129" }, { id: "42", name: "Double", price: "149" }, { id: "43", name: "Tutti Fruity", price: "189" }, { id: "44", name: "Vanilla w/ Choc Syrup", price: "139" },
        { subtitle: "Indian Sweets" },
        { id: "45", name: "Rasgulla", price: "90" }, { id: "46", name: "Gulab Jamun", price: "90" }, { id: "47", name: "Kheer", price: "105" }, { id: "48", name: "Gajar Ka Halwa", price: "105" }, { id: "49", name: "Gulab Jamun w/ Ice Cream", price: "139" },
        { subtitle: "Bakery" },
        { id: "50", name: "Pineapple Pastry", price: "80" }, { id: "51", name: "Black Forest / Chocolate Pastry", price: "90" }, { id: "52", name: "Rum Ball", price: "80" }, { id: "53", name: "Cream Roll", price: "60" }, { id: "54", name: "Brownie", price: "95" }, { id: "55", name: "Muffin", price: "80" }, { id: "56", name: "Brownie w/ Ice Cream", price: "150" }
    ],
    "breads-rice": [
        { subtitle: "Indian Breads" },
        { id: "57", name: "Tandoori Roti", price: "22" }, { id: "58", name: "Tawa Roti", price: "23" }, { id: "59", name: "Rumali Roti", price: "28" }, { id: "60", name: "Missi Roti", price: "33" }, { id: "61", name: "Naan / Paratha", price: "50" }, { id: "62", name: "Butter Naan / Paratha", price: "55" }, { id: "63", name: "Onion Kulcha", price: "55" }, { id: "64", name: "Stuffed Paratha / Naan", price: "55" }, { id: "65", name: "Garlic / Ginger Naan", price: "60" }, { id: "66", name: "Kashmiri Naan", price: "67" }, { id: "67", name: "Paneer Kulcha", price: "75" },
        { subtitle: "Rice & Biryani" },
        { id: "68", name: "Plain Rice", price: "95" }, { id: "69", name: "Jeera Rice", price: "110" }, { id: "70", name: "Veg Pulao", price: "165" }, { id: "71", name: "Veg Biryani", price: "195" }, { id: "72", name: "Kashmiri Pulao", price: "200" }, { id: "73", name: "Shahi / Paneer / Egg Biryani", price: "210" }, { id: "74", name: "Chicken Biryani", price: "245" }, { id: "75", name: "Chicken Tikka Biryani", price: "275" },
        { subtitle: "Papad" },
        { id: "76", name: "Roasted Papad", price: "26" }, { id: "77", name: "Fry Papad", price: "30" }, { id: "78", name: "Masala Papad", price: "45" }
    ],
    "appetizers": [
        { subtitle: "Veg Appetizers" },
        { id: "79", name: "Aloo Chat", price: "95" }, { id: "80", name: "Veg Pakoda", price: "120" }, { id: "81", name: "Paneer Fry", price: "120" }, { id: "82", name: "Veg Kabab / Cutlet", price: "145" }, { id: "83", name: "Hara Bhara Kabab", price: "155" }, { id: "84", name: "Paneer Pakoda", price: "180" }, { id: "85", name: "Crispy Corn / Cheese Corn Kabab", price: "195" }, { id: "86", name: "Honey Chilli Potato", price: "220" }, { id: "87", name: "Pepper Paneer", price: "225" },
        { subtitle: "Tandoor Veg" },
        { id: "88", name: "Veg Seekh Kabab", price: "225" }, { id: "89", name: "Mushroom / Paneer Tikka", price: "235" }, { id: "90", name: "Paneer Achari Tikka", price: "245" }, { id: "91", name: "Malai Broccoli", price: "265" }, { id: "92", name: "Tandoori Platter", price: "420" },
        { subtitle: "Non-Veg Appetizers" },
        { id: "93", name: "Chicken Cutlet", price: "225" }, { id: "94", name: "Chicken Kabab", price: "230" }, { id: "95", name: "Pepper / Lemon Butter Chicken", price: "250" }, { id: "96", name: "Fried Chicken", price: "430" }, { id: "97", name: "Fish Finger", price: "390" },
        { subtitle: "Tandoor Non-Veg" },
        { id: "98", name: "Chicken Tikka", price: "250" }, { id: "99", name: "Malai / Achari / Hariyali Tikka", price: "270" }, { id: "100", name: "Chicken Tandoori", price: "450" }, { id: "101", name: "Amritsari Fish Tikka", price: "390" },
        { subtitle: "Soya Chaap" },
        { id: "102", name: "Achari / Chatpata Chaap", price: "175" }, { id: "103", name: "Afghani Chaap", price: "195" }, { id: "104", name: "Soya Rolls", price: "150" }
    ],
    "main-course": [
        { subtitle: "Main Course (Veg) - Paneer" },
        { id: "105", name: "Matar / Palak / Butter Paneer", price: "230" }, { id: "106", name: "Shahi / Malai Kofta", price: "245" }, { id: "107", name: "Paneer Bhurji / Tiranga / Do-Pyaza", price: "275" }, { id: "108", name: "Paneer Tikka Masala / Kadhai / Lababdar", price: "295" },
        { subtitle: "Main Course (Veg) - Dal & Sabzi" },
        { id: "109", name: "Kadhi Pakoda", price: "175" }, { id: "110", name: "Chana Masala", price: "185" }, { id: "111", name: "Dal Fry", price: "215" }, { id: "112", name: "Dal Tadka", price: "220" }, { id: "113", name: "Dal Makhani", price: "240" },
        { id: "114", name: "Aloo Jeera", price: "130" }, { id: "115", name: "Dum Aloo", price: "195" }, { id: "116", name: "Gobhi Do-Pyaza", price: "200" }, { id: "117", name: "Veg Kofta / Jaipuriya / Mix Veg", price: "210" }, { id: "118", name: "Mushroom Curry", price: "215" }, { id: "119", name: "Kaju Curry", price: "299" },
        { subtitle: "Main Course (Non-Veg)" },
        { id: "120", name: "Butter / Kadhai / Handi / Mughlai / Tikka Masala Chicken", price: "729" }, { id: "121", name: "Fish Curry / Masala", price: "739" }, { id: "122", name: "Egg Curry", price: "149" }, { id: "123", name: "Egg Masala", price: "169" }
    ],
    "south-indian": [
        { subtitle: "South Indian" },
        { id: "124", name: "Idli", price: "65" }, { id: "125", name: "Vada", price: "75" }, { id: "126", name: "Idli Sambar", price: "90" }, { id: "127", name: "Sada Dosa", price: "95" }, { id: "128", name: "Masala Dosa", price: "115" }, { id: "129", name: "Rawa / Paper / Cut Dosa", price: "140" }, { id: "130", name: "Mysore Masala Dosa", price: "155" }, { id: "131", name: "Paneer Masala Dosa", price: "170" }, { id: "132", name: "Uttapam", price: "115" },
        { subtitle: "Heavy Bites & Sizzlers" },
        { id: "133", name: "Veg Sizzler", price: "385" }, { id: "134", name: "Paneer Sizzler", price: "405" }, { id: "135", name: "Chicken Sizzler", price: "505" },
        { id: "136", name: "Standard Thali", price: "215" }, { id: "137", name: "Deluxe Thali", price: "255" },
        { id: "138", name: "Pao Bhaji", price: "115" }, { id: "139", name: "Chhola Bhatura", price: "115" },
        { subtitle: "Light Bites & Mini Meals" },
        { id: "140", name: "Pani Puri", price: "45" }, { id: "141", name: "Bhel Puri", price: "70" }, { id: "142", name: "Dahi Puri / Papdi Chaat", price: "85" }, { id: "143", name: "Dahi Vada / Chhola Tikki", price: "95" },
        { id: "144", name: "Penne Arrabbiata / Alfredo / Rosatella (Veg)", price: "200" }, { id: "145", name: "Penne Arrabbiata / Alfredo / Rosatella (Chicken)", price: "260" },
        { id: "146", name: "Pao Chhole / Sambar Rice", price: "105" }, { id: "147", name: "Dal Fry / Kadhi / Makhani / Chana Masala Rice", price: "155" }, { id: "148", name: "Chhole / Paneer Kulche", price: "210" }, { id: "149", name: "Butter Paneer Masala Rice", price: "210" }
    ],
    "chinese": [
        { subtitle: "Soups" },
        { id: "150", name: "Clear Soup", price: "90" }, { id: "151", name: "Manchow / Hot & Sour", price: "100" }, { id: "152", name: "Tomato / Mushroom / Sweet Corn", price: "110" }, { id: "153", name: "Chicken Soups", price: "130" },
        { subtitle: "Chinese Veg" },
        { id: "154", name: "Noodles", price: "135" }, { id: "155", name: "Hakka / Garlic Noodles", price: "150" }, { id: "156", name: "Fried Rice", price: "150" }, { id: "157", name: "Manchurian", price: "205" }, { id: "158", name: "Chilly Paneer", price: "225" },
        { subtitle: "Chinese Non-Veg" },
        { id: "159", name: "Chicken Noodles / Fried Rice", price: "180" }, { id: "160", name: "Chicken Manchurian", price: "245" }, { id: "161", name: "Chilly Chicken", price: "255" }, { id: "162", name: "Drums of Heaven", price: "295" }
    ],
    "beverages": [
        { subtitle: "Hot & Cold Beverages" },
        { id: "163", name: "Tea", price: "28" }, { id: "164", name: "Hot Coffee", price: "60" }, { id: "165", name: "Fresh Lemon Water / Soda", price: "65" }, { id: "166", name: "Lassi", price: "75" }, { id: "167", name: "Cold Coffee", price: "95" }, { id: "168", name: "Thandai", price: "120" },
        { subtitle: "Mocktails" },
        { id: "169", name: "Masala Coke", price: "99" }, { id: "170", name: "Iced Tea", price: "105" }, { id: "171", name: "Virgin Mojito / Blue Lagoon", price: "120" },
        { subtitle: "Juices & Shakes" },
        { id: "172", name: "Pineapple / Orange / Mausambi / Watermelon Juice", price: "90" }, { id: "173", name: "Mixed Fruit Juice", price: "100" }, { id: "174", name: "Anaar / Apple Juice", price: "130" },
        { id: "175", name: "Banana / Papaya Shake", price: "85" }, { id: "176", name: "Mango Shake", price: "100" }, { id: "177", name: "Vanilla / Strawberry Shake", price: "105" }, { id: "178", name: "Chocolate Shake", price: "120" }, { id: "179", name: "Badam Shake", price: "130" }
    ]
};

const menuDataJs = 'window.defaultMenuData = ' + JSON.stringify(menuData, null, 4) + ';';
fs.writeFileSync('c:\\\\Users\\\\user\\\\Desktop\\\\kwality streets\\\\menuData.js', menuDataJs);

// Strip HTML menu content from index.html
let htmlContent = fs.readFileSync('c:\\\\Users\\\\user\\\\Desktop\\\\kwality streets\\\\index.html', 'utf8');

// Replace everything inside the categories with empty divs
const categories = ['appetizers', 'main-course', 'breads-rice', 'fast-food', 'chinese', 'south-indian', 'desserts', 'beverages'];

categories.forEach(cat => {
    // Regex to match <div class="menu-category" id="cat"> ... </div> up to the next category or closing tags
    const regex = new RegExp('<div class="menu-category(.*?)" id="' + cat + '">[\\\\s\\\\S]*?(?=<div class="menu-category|<\\\\/div>\\\\s*<\\\\/div>\\\\s*<\\\\/section>)');
    htmlContent = htmlContent.replace(regex, '<div class="menu-category$1" id="' + cat + '">\\n            </div>\\n            ');
});

// Add <script src="menuData.js"></script> before main.js
if (!htmlContent.includes('menuData.js')) {
    htmlContent = htmlContent.replace('<script src="main.js"></script>', '<script src="menuData.js"></script>\\n    <script src="main.js"></script>');
}

fs.writeFileSync('c:\\\\Users\\\\user\\\\Desktop\\\\kwality streets\\\\index.html', htmlContent);

console.log("menuData.js created and index.html stripped.");
