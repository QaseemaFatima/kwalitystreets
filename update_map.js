const fs = require('fs');

let htmlContent = fs.readFileSync('c:\\Users\\user\\Desktop\\kwality streets\\index.html', 'utf8');

const oldMap = `    <!-- Map Section -->
    <div class="map-section" style="width: 100%; height: 400px; line-height: 0;">
        <iframe src="https://maps.google.com/maps?q=Kwality%20Restaurant%20Fast%20Food%20TT%20Nagar%20Bhopal&t=&z=16&ie=UTF8&iwloc=&output=embed" width="100%" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>`;

const newMap = `    <!-- Map Section -->
    <div class="map-section" style="max-width: 1200px; height: 400px; margin: 0 auto 3rem auto; padding: 0 2rem; line-height: 0;">
        <div style="border-radius: 12px; overflow: hidden; height: 100%; border: 1px solid #333;">
            <iframe src="https://maps.google.com/maps?q=Kwality's,+Bhadbhada+Road,+New+Market,+Bhopal&t=&z=17&ie=UTF8&iwloc=B&output=embed" width="100%" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
    </div>`;

htmlContent = htmlContent.replace(oldMap, newMap);
fs.writeFileSync('c:\\Users\\user\\Desktop\\kwality streets\\index.html', htmlContent);

console.log("Map updated successfully.");
