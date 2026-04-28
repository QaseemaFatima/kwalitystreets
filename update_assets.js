const fs = require('fs');

const cssToAppend = `
/* Menu Section */
.menu-section {
    background-color: #FAF7F2;
    color: #2C2C2C;
    padding: 6rem 2rem;
    min-height: 100vh;
}

.menu-container {
    max-width: 900px;
    margin: 0 auto;
}

.section-title {
    font-family: var(--font-heading);
    text-align: center;
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 3rem;
    color: #1a1a1a;
    letter-spacing: 2px;
    text-transform: uppercase;
}

.menu-tabs {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 4rem;
}

.tab-btn {
    background: transparent;
    border: none;
    font-family: var(--font-body);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    color: #666;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
}

.tab-btn:hover {
    color: #1a1a1a;
}

.tab-btn.active {
    color: #1a1a1a;
    border-bottom: 2px solid #1a1a1a;
    font-weight: 500;
}

.menu-category {
    display: none;
    animation: fadeIn 0.5s ease;
}

.menu-category.active {
    display: block;
}

.category-subtitle {
    font-family: var(--font-heading);
    font-size: 1.8rem;
    margin: 3rem 0 1.5rem 0;
    color: #1a1a1a;
    text-align: center;
    border-bottom: 1px solid #E0DCD3;
    padding-bottom: 1rem;
}

.menu-category h3:first-child {
    margin-top: 0;
}

.menu-item {
    margin-bottom: 1.2rem;
}

.item-header {
    display: flex;
    align-items: baseline;
    width: 100%;
}

.item-name {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 1.1rem;
    color: #2C2C2C;
}

.item-spacer {
    flex-grow: 1;
    border-bottom: 1px dotted #ccc;
    margin: 0 15px;
    position: relative;
    top: -6px;
}

.item-price {
    font-family: var(--font-body);
    font-weight: 500;
    font-size: 1.1rem;
    color: #1a1a1a;
}
`;

const jsToAppend = `
    // Tab Logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuCategories = document.querySelectorAll('.menu-category');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and categories
            tabBtns.forEach(b => b.classList.remove('active'));
            menuCategories.forEach(c => c.classList.remove('active'));

            // Add active class to clicked button
            btn.classList.add('active');

            // Show corresponding category
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });
`;

fs.appendFileSync('c:\\Users\\user\\Desktop\\kwality streets\\index.css', cssToAppend);

let jsContent = fs.readFileSync('c:\\Users\\user\\Desktop\\kwality streets\\main.js', 'utf8');
jsContent = jsContent.replace('});\n', jsToAppend + '});\n');
fs.writeFileSync('c:\\Users\\user\\Desktop\\kwality streets\\main.js', jsContent);

console.log("CSS and JS updated");
