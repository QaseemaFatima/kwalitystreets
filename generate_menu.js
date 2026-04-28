const fs = require('fs');

const menuData = {
    "fast-food": [
        { subtitle: "Pizzas" },
        { name: "Plain Cheese", price: "160" }, { name: "Onion Cheese", price: "170" }, { name: "Tomato Cheese", price: "170" }, { name: "Capsicum Cheese", price: "185" }, { name: "All Mix Veg", price: "205" }, { name: "Mushroom Cheese", price: "225" }, { name: "Sweet Corn", price: "235" }, { name: "Chilli Paneer", price: "250" }, { name: "Paneer Tikka", price: "250" }, { name: "Chicken", price: "265" },
        { subtitle: "Burgers" },
        { name: "Veg Burger", price: "115" }, { name: "Veg Cheese Burger", price: "125" }, { name: "Chicken Burger", price: "165" }, { name: "Chicken Cheese Burger", price: "180" },
        { subtitle: "Eggs" },
        { name: "Boiled Egg", price: "55" }, { name: "Bhurji w/ Bread", price: "90" }, { name: "Omelette w/ Bread", price: "100" },
        { subtitle: "Sandwiches" },
        { name: "Plain Bread Slice", price: "40" }, { name: "Butter & Bread", price: "65" }, { name: "Butter Toast", price: "70" }, { name: "Veg Sandwich", price: "90" }, { name: "Butter/ Jam on Toast", price: "95" }, { name: "Cheese Sandwich", price: "105" }, { name: "Veg Grilled Sandwich", price: "110" }, { name: "Bombay Sandwich", price: "120" }, { name: "Cheese Grilled Sandwich", price: "125" }, { name: "Kwality Special Club Sandwich", price: "180" }, { name: "Paneer Tikka Sandwich", price: "180" }, { name: "Chicken Sandwich", price: "165" },
        { subtitle: "Momos" },
        { name: "Veg Steamed", price: "130" }, { name: "Veg Fried", price: "140" }, { name: "Veg Tandoori", price: "160" }, { name: "Chicken Steamed", price: "170" }, { name: "Chicken Fried", price: "180" }, { name: "Chicken Tandoori", price: "200" }
    ],
    "desserts": [
        { subtitle: "Ice Cream" },
        { name: "Vanilla / Chocolate / Strawberry / Pista / Mango", price: "90" }, { name: "Kesar Pista", price: "99" }, { name: "Butterscotch", price: "99" }, { name: "Kulfi", price: "80" }, { name: "Cassata", price: "120" },
        { subtitle: "Sundaes" },
        { name: "Single", price: "129" }, { name: "Double", price: "149" }, { name: "Tutti Fruity", price: "189" }, { name: "Vanilla w/ Choc Syrup", price: "139" },
        { subtitle: "Indian Sweets" },
        { name: "Rasgulla", price: "90" }, { name: "Gulab Jamun", price: "90" }, { name: "Kheer", price: "105" }, { name: "Gajar Ka Halwa", price: "105" }, { name: "Gulab Jamun w/ Ice Cream", price: "139" },
        { subtitle: "Bakery" },
        { name: "Pineapple Pastry", price: "80" }, { name: "Black Forest / Chocolate Pastry", price: "90" }, { name: "Rum Ball", price: "80" }, { name: "Cream Roll", price: "60" }, { name: "Brownie", price: "95" }, { name: "Muffin", price: "80" }, { name: "Brownie w/ Ice Cream", price: "150" }
    ],
    "breads-rice": [
        { subtitle: "Indian Breads" },
        { name: "Tandoori Roti", price: "22" }, { name: "Tawa Roti", price: "23" }, { name: "Rumali Roti", price: "28" }, { name: "Missi Roti", price: "33" }, { name: "Naan / Paratha", price: "50" }, { name: "Butter Naan / Paratha", price: "55" }, { name: "Onion Kulcha", price: "55" }, { name: "Stuffed Paratha / Naan", price: "55" }, { name: "Garlic / Ginger Naan", price: "60" }, { name: "Kashmiri Naan", price: "67" }, { name: "Paneer Kulcha", price: "75" },
        { subtitle: "Rice & Biryani" },
        { name: "Plain Rice", price: "95" }, { name: "Jeera Rice", price: "110" }, { name: "Veg Pulao", price: "165" }, { name: "Veg Biryani", price: "195" }, { name: "Kashmiri Pulao", price: "200" }, { name: "Shahi / Paneer / Egg Biryani", price: "210" }, { name: "Chicken Biryani", price: "245" }, { name: "Chicken Tikka Biryani", price: "275" },
        { subtitle: "Papad" },
        { name: "Roasted Papad", price: "26" }, { name: "Fry Papad", price: "30" }, { name: "Masala Papad", price: "45" }
    ],
    "appetizers": [
        { subtitle: "Veg Appetizers" },
        { name: "Aloo Chat", price: "95" }, { name: "Veg Pakoda", price: "120" }, { name: "Paneer Fry", price: "120" }, { name: "Veg Kabab / Cutlet", price: "145" }, { name: "Hara Bhara Kabab", price: "155" }, { name: "Paneer Pakoda", price: "180" }, { name: "Crispy Corn / Cheese Corn Kabab", price: "195" }, { name: "Honey Chilli Potato", price: "220" }, { name: "Pepper Paneer", price: "225" },
        { subtitle: "Tandoor Veg" },
        { name: "Veg Seekh Kabab", price: "225" }, { name: "Mushroom / Paneer Tikka", price: "235" }, { name: "Paneer Achari Tikka", price: "245" }, { name: "Malai Broccoli", price: "265" }, { name: "Tandoori Platter", price: "420" },
        { subtitle: "Non-Veg Appetizers" },
        { name: "Chicken Cutlet", price: "225" }, { name: "Chicken Kabab", price: "230" }, { name: "Pepper / Lemon Butter Chicken", price: "250" }, { name: "Fried Chicken", price: "430" }, { name: "Fish Finger", price: "390" },
        { subtitle: "Tandoor Non-Veg" },
        { name: "Chicken Tikka", price: "250" }, { name: "Malai / Achari / Hariyali Tikka", price: "270" }, { name: "Chicken Tandoori", price: "450" }, { name: "Amritsari Fish Tikka", price: "390" },
        { subtitle: "Soya Chaap" },
        { name: "Achari / Chatpata Chaap", price: "175" }, { name: "Afghani Chaap", price: "195" }, { name: "Soya Rolls", price: "150" }
    ],
    "main-course": [
        { subtitle: "Main Course (Veg) - Paneer" },
        { name: "Matar / Palak / Butter Paneer", price: "230" }, { name: "Shahi / Malai Kofta", price: "245" }, { name: "Paneer Bhurji / Tiranga / Do-Pyaza", price: "275" }, { name: "Paneer Tikka Masala / Kadhai / Lababdar", price: "295" },
        { subtitle: "Main Course (Veg) - Dal & Sabzi" },
        { name: "Kadhi Pakoda", price: "175" }, { name: "Chana Masala", price: "185" }, { name: "Dal Fry", price: "215" }, { name: "Dal Tadka", price: "220" }, { name: "Dal Makhani", price: "240" },
        { name: "Aloo Jeera", price: "130" }, { name: "Dum Aloo", price: "195" }, { name: "Gobhi Do-Pyaza", price: "200" }, { name: "Veg Kofta / Jaipuriya / Mix Veg", price: "210" }, { name: "Mushroom Curry", price: "215" }, { name: "Kaju Curry", price: "299" },
        { subtitle: "Main Course (Non-Veg)" },
        { name: "Butter / Kadhai / Handi / Mughlai / Tikka Masala Chicken", price: "729" }, { name: "Fish Curry / Masala", price: "739" }, { name: "Egg Curry", price: "149" }, { name: "Egg Masala", price: "169" }
    ],
    "south-indian": [
        { subtitle: "South Indian" },
        { name: "Idli", price: "65" }, { name: "Vada", price: "75" }, { name: "Idli Sambar", price: "90" }, { name: "Sada Dosa", price: "95" }, { name: "Masala Dosa", price: "115" }, { name: "Rawa / Paper / Cut Dosa", price: "140" }, { name: "Mysore Masala Dosa", price: "155" }, { name: "Paneer Masala Dosa", price: "170" }, { name: "Uttapam", price: "115" },
        { subtitle: "Heavy Bites & Sizzlers" },
        { name: "Veg Sizzler", price: "385" }, { name: "Paneer Sizzler", price: "405" }, { name: "Chicken Sizzler", price: "505" },
        { name: "Standard Thali", price: "215" }, { name: "Deluxe Thali", price: "255" },
        { name: "Pao Bhaji", price: "115" }, { name: "Chhola Bhatura", price: "115" },
        { subtitle: "Light Bites & Mini Meals" },
        { name: "Pani Puri", price: "45" }, { name: "Bhel Puri", price: "70" }, { name: "Dahi Puri / Papdi Chaat", price: "85" }, { name: "Dahi Vada / Chhola Tikki", price: "95" },
        { name: "Penne Arrabbiata / Alfredo / Rosatella (Veg)", price: "200" }, { name: "Penne Arrabbiata / Alfredo / Rosatella (Chicken)", price: "260" },
        { name: "Pao Chhole / Sambar Rice", price: "105" }, { name: "Dal Fry / Kadhi / Makhani / Chana Masala Rice", price: "155" }, { name: "Chhole / Paneer Kulche", price: "210" }, { name: "Butter Paneer Masala Rice", price: "210" }
    ],
    "chinese": [
        { subtitle: "Soups" },
        { name: "Clear Soup", price: "90" }, { name: "Manchow / Hot & Sour", price: "100" }, { name: "Tomato / Mushroom / Sweet Corn", price: "110" }, { name: "Chicken Soups", price: "130" },
        { subtitle: "Chinese Veg" },
        { name: "Noodles", price: "135" }, { name: "Hakka / Garlic Noodles", price: "150" }, { name: "Fried Rice", price: "150" }, { name: "Manchurian", price: "205" }, { name: "Chilly Paneer", price: "225" },
        { subtitle: "Chinese Non-Veg" },
        { name: "Chicken Noodles / Fried Rice", price: "180" }, { name: "Chicken Manchurian", price: "245" }, { name: "Chilly Chicken", price: "255" }, { name: "Drums of Heaven", price: "295" }
    ],
    "beverages": [
        { subtitle: "Hot & Cold Beverages" },
        { name: "Tea", price: "28" }, { name: "Hot Coffee", price: "60" }, { name: "Fresh Lemon Water / Soda", price: "65" }, { name: "Lassi", price: "75" }, { name: "Cold Coffee", price: "95" }, { name: "Thandai", price: "120" },
        { subtitle: "Mocktails" },
        { name: "Masala Coke", price: "99" }, { name: "Iced Tea", price: "105" }, { name: "Virgin Mojito / Blue Lagoon", price: "120" },
        { subtitle: "Juices & Shakes" },
        { name: "Pineapple / Orange / Mausambi / Watermelon Juice", price: "90" }, { name: "Mixed Fruit Juice", price: "100" }, { name: "Anaar / Apple Juice", price: "130" },
        { name: "Banana / Papaya Shake", price: "85" }, { name: "Mango Shake", price: "100" }, { name: "Vanilla / Strawberry Shake", price: "105" }, { name: "Chocolate Shake", price: "120" }, { name: "Badam Shake", price: "130" }
    ]
};

let menuHTML = `
    <!-- Menu Section -->
    <section id="menu" class="menu-section">
        <div class="menu-container">
            <h2 class="section-title">Menu</h2>
            
            <div class="menu-tabs">
                <button class="tab-btn active" data-target="appetizers">Appetizers</button>
                <button class="tab-btn" data-target="main-course">Main Course</button>
                <button class="tab-btn" data-target="breads-rice">Breads & Rice</button>
                <button class="tab-btn" data-target="fast-food">Fast Food</button>
                <button class="tab-btn" data-target="chinese">Chinese</button>
                <button class="tab-btn" data-target="south-indian">South Indian & Bites</button>
                <button class="tab-btn" data-target="desserts">Desserts</button>
                <button class="tab-btn" data-target="beverages">Beverages</button>
            </div>
`;

Object.keys(menuData).forEach(category => {
    menuHTML += `\n            <div class="menu-category ${category === 'appetizers' ? 'active' : ''}" id="${category}">`;
    menuData[category].forEach(item => {
        if (item.subtitle) {
            menuHTML += `\n                <h3 class="category-subtitle">${item.subtitle}</h3>`;
        } else {
            menuHTML += `
                <div class="menu-item">
                    <div class="item-header">
                        <span class="item-name">${item.name}</span>
                        <div class="item-spacer"></div>
                        <span class="item-price">₹${item.price}</span>
                    </div>
                </div>`;
        }
    });
    menuHTML += `\n            </div>`;
});

menuHTML += `
        </div>
    </section>
`;

const htmlFile = 'c:\\Users\\user\\Desktop\\kwality streets\\index.html';
let htmlContent = fs.readFileSync(htmlFile, 'utf8');

// Insert before the last script tag
htmlContent = htmlContent.replace('    <script src="main.js"></script>', menuHTML + '\n    <script src="main.js"></script>');

fs.writeFileSync(htmlFile, htmlContent);
console.log("Menu generated successfully.");
