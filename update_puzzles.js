
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'js', 'puzzles.js');
let content = fs.readFileSync(filePath, 'utf8');

// Replace constant usage
content = content.replace(/DIFFICULTY\.KID/g, 'DIFFICULTY.BEGINNER');
content = content.replace(/DIFFICULTY\.ADULT_KID/g, 'DIFFICULTY.INTERMEDIATE');
content = content.replace(/DIFFICULTY\.ADULT/g, 'DIFFICULTY.EXPERT');

// Replace comments (optional, but good for cleanliness)
content = content.replace(/ - KID/g, ' - BEGINNER');
content = content.replace(/ - ADULT KID/g, ' - INTERMEDIATE');
content = content.replace(/ - ADULT/g, ' - EXPERT');

fs.writeFileSync(filePath, content);
console.log('Successfully updated js/puzzles.js');
