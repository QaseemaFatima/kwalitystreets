const fs = require('fs');

const footerHTML = `
    <!-- Footer Section -->
    <footer class="footer-section">
        <div class="footer-container">
            <div class="footer-col">
                <h3>Our Location</h3>
                <p>Bhadbhada Rd, New Market,<br>Roshanpura, TT Nagar,<br>Bhopal, Madhya Pradesh<br>462003, India</p>
            </div>
            
            <div class="footer-col">
                <h3>Opening Times</h3>
                <p class="days">Monday To Saturday</p>
                <p>Lunch - 12:00 pm - 3:30 pm</p>
                <p>Dinner - 6:30 pm - 10:30 pm</p>
                <br>
                <p class="days">Sunday</p>
                <p>Brunch - 12:00 Noon - 4:00 pm</p>
                <p>Dinner - 6:30 pm - 10:30 pm</p>
            </div>
            
            <div class="footer-col">
                <h3>FB Feed</h3>
                <p>KwalityStreets</p>
            </div>
            
            <div class="footer-col">
                <h3>Insta Feeds</h3>
                <p>@KwalityStreetsBhopal</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 ALL RIGHT RESERVED. | KWALITY STREETS</p>
        </div>
    </footer>
`;

const footerCSS = `
/* Footer Section */
.footer-section {
    background-color: #111;
    color: #fff;
    padding: 4rem 2rem 1rem 2rem;
    font-family: var(--font-body);
    border-top: 1px solid #333;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-bottom: 3rem;
}

.footer-col h3 {
    font-family: var(--font-heading);
    font-size: 1.2rem;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.footer-col p {
    color: #999;
    font-size: 0.9rem;
    line-height: 1.8;
    margin-bottom: 0.5rem;
}

.footer-col .days {
    color: var(--accent-color);
    font-weight: 500;
}

.footer-bottom {
    text-align: center;
    border-top: 1px solid #333;
    padding-top: 1.5rem;
}

.footer-bottom p {
    color: #666;
    font-size: 0.8rem;
    letter-spacing: 1px;
}

@media (max-width: 900px) {
    .footer-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    .footer-container {
        grid-template-columns: 1fr;
        text-align: center;
    }
}
`;

let htmlContent = fs.readFileSync('c:\\Users\\user\\Desktop\\kwality streets\\index.html', 'utf8');
htmlContent = htmlContent.replace('</body>', footerHTML + '\n</body>');
fs.writeFileSync('c:\\Users\\user\\Desktop\\kwality streets\\index.html', htmlContent);

fs.appendFileSync('c:\\Users\\user\\Desktop\\kwality streets\\index.css', footerCSS);

console.log("Footer injected successfully.");
