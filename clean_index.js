const fs = require('fs');

let htmlContent = fs.readFileSync('c:\\Users\\user\\Desktop\\kwality streets\\index.html', 'utf8');

// The new clean menu section
const cleanMenuSection = `
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

            <!-- Categories will be rendered here dynamically -->
            <div id="menu-categories-container"></div>
        </div>
    </section>
`;

// Replace everything between <!-- Menu Section --> and <!-- Map Section -->
const regex = /<!-- Menu Section -->[\s\S]*?(?=<!-- Map Section -->)/;
htmlContent = htmlContent.replace(regex, cleanMenuSection + '\n');

fs.writeFileSync('c:\\Users\\user\\Desktop\\kwality streets\\index.html', htmlContent);

console.log("index.html cleaned up.");
