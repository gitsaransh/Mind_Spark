# 📋 Copy-Paste Testing Code

**Just copy and paste these into your browser console!**

---

## 🚀 Option 1: Load Test Helper (Recommended)

**Copy this ONE line:**
```javascript
fetch('/test_helper.js').then(r=>r.text()).then(eval)
```

**Then run:**
```javascript
TestHelper.testAllNotifications()
```

---

## 🎨 Option 2: All-in-One Test (No file needed)

**Copy and paste this entire block:**

```javascript
// Quick test - shows all notifications
console.log('🧪 Testing all v2.0 notifications...\n');

setTimeout(() => {
    console.log('1️⃣ Session Starter...');
    App.showSessionStarterBonus(2, 5);
}, 500);

setTimeout(() => {
    console.log('2️⃣ Milestone Reward...');
    App.showMilestoneReward(7, 2);
}, 2500);

setTimeout(() => {
    console.log('3️⃣ Soft Reset...');
    App.showSoftResetNotification(15, 9);
}, 5000);

setTimeout(() => {
    console.log('4️⃣ Streak Freeze...');
    App.showStreakFreezeReward();
}, 7500);

console.log('✅ Watch for 4 notifications over 10 seconds!');
```

---

## 📊 Option 3: Setup Test Data for Manual Play

**Copy and paste this:**

```javascript
// Setup test data
const progress = ProgressManager.getProgress();

// Set streak to 6 (next correct triggers milestone)
progress.currentStreak = 6;

// Setup ad cooldown (2/5 puzzles)
progress.adEconomy = {
    adsWatchedToday: 2,
    puzzlesSinceLastAd: 2,
    lastAdDate: new Date().toDateString(),
    totalAdsWatched: 2
};

// Setup streak freezes (2/3)
progress.streakProtection = {
    freezesAvailable: 2,
    freezesUsed: 1,
    lastFreezeEarned: new Date().toISOString()
};

ProgressManager.saveProgress(progress);

console.log('✅ Test data setup complete!');
console.log('📊 Streak: 6 (solve 1 more for milestone)');
console.log('📊 Ad cooldown: 2/5 puzzles');
console.log('📊 Freezes: 2/3');
console.log('\n🚀 Reload page (F5) and start playing!');
```

---

## 🎯 Individual Tests

### **Test Milestone Reward:**
```javascript
App.showMilestoneReward(7, 2);
```

### **Test Session Starter:**
```javascript
App.showSessionStarterBonus(2, 5);
```

### **Test Soft Reset:**
```javascript
App.showSoftResetNotification(15, 9);
```

### **Test Streak Freeze:**
```javascript
App.showStreakFreezeReward();
```

### **Test Ad Cooldown UI:**
```javascript
const progress = ProgressManager.getProgress();
progress.currentStreak = 0;
progress.adEconomy = {
    adsWatchedToday: 2,
    puzzlesSinceLastAd: 2,
    lastAdDate: new Date().toDateString(),
    totalAdsWatched: 2
};
ProgressManager.saveProgress(progress);
console.log('✅ Now try to use a hint - you\'ll see the progress bar!');
```

---

## 🔄 Reset Everything

```javascript
localStorage.clear();
location.reload();
```

---

## 📊 Check Current Status

```javascript
const progress = ProgressManager.getProgress();
console.log('Current Streak:', progress.currentStreak || 0);
console.log('Total Puzzles:', progress.totalPuzzlesSolved || 0);
if (progress.adEconomy) {
    console.log('Puzzles Since Ad:', progress.adEconomy.puzzlesSinceLastAd || 0, '/ 5');
    console.log('Ads Today:', progress.adEconomy.adsWatchedToday || 0, '/ 6');
}
if (progress.streakProtection) {
    console.log('Freezes:', progress.streakProtection.freezesAvailable || 0, '/ 3');
}
```

---

## ✅ Recommended Testing Flow

**1. Quick Visual Test (30 seconds):**
```javascript
fetch('/test_helper.js').then(r=>r.text()).then(eval)
TestHelper.testAllNotifications()
```

**2. Setup for Manual Testing (1 minute):**
```javascript
fetch('/test_helper.js').then(r=>r.text()).then(eval)
TestHelper.setupAllTests()
// Then reload page (F5) and play
```

**3. Test Ad Cooldown (2 minutes):**
```javascript
fetch('/test_helper.js').then(r=>r.text()).then(eval)
TestHelper.testAdCooldown()
// Then start a puzzle and try to use hint
```

---

**That's it! Just copy, paste, and test! 🚀**
