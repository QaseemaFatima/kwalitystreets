const fs = require('fs');

const mapHTML = `
    <!-- Map Section -->
    <div class="map-section" style="width: 100%; height: 400px; line-height: 0;">
        <iframe src="https://maps.google.com/maps?q=Kwality%20Restaurant%20Fast%20Food%20TT%20Nagar%20Bhopal&t=&z=16&ie=UTF8&iwloc=&output=embed" width="100%" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>

    <!-- Footer Section -->
`;

let htmlContent = fs.readFileSync('c:\\Users\\user\\Desktop\\kwality streets\\index.html', 'utf8');
htmlContent = htmlContent.replace('    <!-- Footer Section -->', mapHTML);
fs.writeFileSync('c:\\Users\\user\\Desktop\\kwality streets\\index.html', htmlContent);

console.log("Map injected successfully.");
