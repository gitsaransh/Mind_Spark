// File Validation Script for MindSpark v7.0
const fs = require('fs');
const path = require('path');

console.log('🔍 MindSpark v7.0 - File Validation\n');
console.log('═══════════════════════════════════════\n');

const requiredFiles = {
    'HTML Files': [
        'www/index.html',
        'www/privacy.html',
        'www/terms.html'
    ],
    'JavaScript Modules': [
        'www/js/puzzles.js',
        'www/js/storage.js',
        'www/js/ads.js',
        'www/js/analytics.js',
        'www/js/sounds.js',
        'www/js/tutorial.js',
        'www/js/share.js',
        'www/js/badges.js',
        'www/js/hints.js',
        'www/js/gameEngine.js',
        'www/js/app.js'
    ],
    'CSS Files': [
        'www/css/styles.css'
    ],
    'Configuration Files': [
        'package.json',
        'netlify.toml',
        'capacitor.config.json',
        'test_helper.js'
    ],
    'Testing Files': [
        'TESTING_SESSION.md',
        'TESTING_PACKAGE_README.md',
        'COPY_PASTE_TESTS.md',
        'EASY_TESTING_GUIDE.md'
    ]
};

let totalFiles = 0;
let foundFiles = 0;
let missingFiles = [];

for (const [category, files] of Object.entries(requiredFiles)) {
    console.log(`\n📁 ${category}`);
    console.log('─'.repeat(40));

    for (const file of files) {
        totalFiles++;
        const filePath = path.join(__dirname, file);

        if (fs.existsSync(filePath)) {
            const stats = fs.statSync(filePath);
            const sizeKB = (stats.size / 1024).toFixed(2);
            console.log(`  ✅ ${file} (${sizeKB} KB)`);
            foundFiles++;
        } else {
            console.log(`  ❌ ${file} - MISSING`);
            missingFiles.push(file);
        }
    }
}

console.log('\n═══════════════════════════════════════\n');
console.log('📊 VALIDATION SUMMARY\n');
console.log(`Total Files Checked: ${totalFiles}`);
console.log(`Files Found: ${foundFiles}`);
console.log(`Files Missing: ${missingFiles.length}`);

if (missingFiles.length > 0) {
    console.log('\n⚠️  Missing Files:');
    missingFiles.forEach(file => console.log(`   - ${file}`));
    console.log('\n❌ VALIDATION FAILED\n');
    process.exit(1);
} else {
    console.log('\n✅ ALL FILES PRESENT - VALIDATION PASSED\n');
    process.exit(0);
}
