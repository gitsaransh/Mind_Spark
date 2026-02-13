# 🚀 MindSpark v2.0 - Critical Changes Implementation Plan

## ✅ CONFIRMED - All Changes Will Be Implemented

### **Answers to Your Questions:**

1. **✅ Soft reset formula with floor() rounding?**
   - Yes, implementing `Math.floor()` for all calculations
   - Will preserve 50% for streaks ≥10, 40% for streaks ≥5

2. **✅ Ad SDK cooldown tracking?**
   - Currently simulated, will track via localStorage
   - Server-side tracking recommended for production
   - Cooldown persists across sessions

3. **✅ Server-side last_puzzle_date storage?**
   - Currently using localStorage (client-side)
   - For production: Recommend Firebase/backend API
   - Anti-cheat validation on server recommended

4. **✅ Midnight timezone rollover handling?**
   - Using user's local timezone (`new Date().toDateString()`)
   - Daily counters reset at midnight local time
   - Streak checks use calendar days, not 24-hour periods

5. **✅ Streak freeze notifications?**
   - In-app notifications for now (no push infrastructure)
   - Visual indicators on home screen
   - Can add push notifications in Phase 3 with PWA

---

## 📋 IMPLEMENTATION PHASES

### **Phase 1: Critical (Implementing Now)** ⚡

#### 1. Soft Reset Formula
```javascript
// In gameEngine.js - submitAnswer()
if (!isCorrect) {
    const oldStreak = progress.currentStreak;
    let newStreak;
    
    if (oldStreak >= 10) {
        newStreak = Math.floor(oldStreak * 0.5); // Keep 50%
    } else if (oldStreak >= 5) {
        newStreak = Math.floor(oldStreak * 0.4); // Keep 40%
    } else {
        newStreak = 0; // Full reset below 5
    }
    
    progress.currentStreak = newStreak;
    
    // Show appropriate message
    if (oldStreak >= 5) {
        message = `Streak reduced! You kept ${newStreak} points 💪`;
    } else {
        message = `Streak reset! Keep going 🔥`;
    }
}
```

#### 2. Negative Balance Protection
```javascript
// In hints.js - canAffordHint()
canAffordHint() {
    const streakPoints = this.getStreakPoints();
    return streakPoints >= this.HINT_COST; // Never allow negative
}

// Always enforce minimum 0
deductStreakPoints(amount) {
    const progress = ProgressManager.getProgress();
    progress.currentStreak = Math.max(0, progress.currentStreak - amount);
    ProgressManager.saveProgress(progress);
}
```

#### 3. Day Streak Starts at 1
```javascript
// In storage.js - updateStreak()
if (!lastPlayed) {
    // First time playing
    progress.currentStreak = 1; // Changed from 0
    progress.longestStreak = 1;
    progress.lastPlayedDate = today;
}
```

#### 4. Ad Reward Reduced to +3
```javascript
// In hints.js
const HintSystem = {
    HINT_COST: 3,
    AD_REWARD: 3, // Changed from 5
    MAX_HINTS_PER_PUZZLE: 2
}
```

---

### **Phase 2: Important (Implementing Now)** 🔥

#### 5. Ad Cooldown System
```javascript
// New tracking in storage
adEconomy: {
    adsWatchedToday: 0,
    puzzlesSinceLastAd: 0,
    lastAdDate: null,
    totalAdsWatched: 0
}

// Cooldown logic
const MAX_DAILY_ADS = 6;
const PUZZLES_BETWEEN_ADS = 5;

canWatchAd() {
    if (this.adsWatchedToday >= MAX_DAILY_ADS) {
        return { can: false, reason: "Daily ad limit reached (6/6)" };
    }
    if (this.puzzlesSinceLastAd < PUZZLES_BETWEEN_ADS) {
        const needed = PUZZLES_BETWEEN_ADS - this.puzzlesSinceLastAd;
        return { can: false, reason: `Solve ${needed} more puzzles first` };
    }
    return { can: true, reason: "Watch ad for +3 points" };
}
```

#### 6. Streak Freeze System
```javascript
// New data structure
streakProtection: {
    freezesAvailable: 0, // Max 3
    freezeActive: false,
    totalFreezesEarned: 0,
    totalFreezesUsed: 0
}

// Earning freezes (every 7 days)
if (progress.currentStreak % 7 === 0 && progress.currentStreak > 0) {
    progress.streakProtection.freezesAvailable = 
        Math.min(3, progress.streakProtection.freezesAvailable + 1);
    showReward("Earned 1 Streak Freeze! ❄️");
}

// Using freezes (automatic on skip)
if (daysMissed > 0 && progress.streakProtection.freezesAvailable > 0) {
    progress.streakProtection.freezesAvailable--;
    progress.streakProtection.freezeActive = true;
    // Streak preserved!
} else {
    progress.currentStreak = 1; // Reset to 1, not 0
}
```

#### 7. Session Starter Bonus
```javascript
// Check if new session (4+ hours since last puzzle)
function isNewSession() {
    const lastPuzzleTime = localStorage.getItem('lastPuzzleTime');
    if (!lastPuzzleTime) return true;
    
    const hoursSince = (Date.now() - parseInt(lastPuzzleTime)) / (1000 * 60 * 60);
    return hoursSince >= 4;
}

// Apply starter bonus
if (isNewSession()) {
    const starterBonus = getSessionStarterBonus(); // Default 2, can be 3
    progress.currentStreak = starterBonus;
    showMessage(`Welcome back! Starting with 🔥 ${starterBonus} points`);
}
```

---

### **Phase 3: Enhancement (Implementing Now)** ✨

#### 8. Milestone Rewards
```javascript
const MILESTONES = {
    5: { message: "5 in a row!", reward: 0, confetti: true },
    7: { message: "Lucky 7!", reward: 2, confetti: true },
    10: { message: "Perfect 10!", reward: 0, confetti: true, sound: true },
    13: { message: "Lucky 13!", reward: 3, confetti: true },
    15: { message: "Unstoppable!", reward: 0, confetti: true, shake: true },
    18: { message: "Lucky streak!", reward: 2, confetti: true },
    20: { message: "Master!", reward: 2, confetti: true, shake: true },
    23: { message: "Lucky streak!", reward: 1, confetti: true },
    25: { message: "Legend!", reward: 5, confetti: true, fullscreen: true }
};
```

#### 9. Day Streak Milestone Rewards
```javascript
const DAY_MILESTONES = {
    3: { 
        message: "3-day streak! Building momentum 💪",
        puzzlePoints: 5
    },
    7: { 
        message: "One week streak! 🎉",
        puzzlePoints: 10,
        freezeReward: 1
    },
    14: { 
        message: "Two weeks strong! 🔥",
        freezeReward: 1,
        badge: "two_week_warrior"
    },
    30: { 
        message: "Monthly master! 🏆",
        freezeReward: 1,
        permanentBonus: true // Session starter becomes 3
    }
};
```

#### 10. Permanent Bonuses
```javascript
// After 30-day streak
if (dayStreak === 30) {
    progress.permanentBonuses = {
        sessionStarterBonus: 3, // Upgraded from 2
        unlocked30DayBadge: true
    };
}
```

---

## 🗂️ FILES TO MODIFY

### 1. **js/storage.js** - Add new data structures
- Add `adEconomy` tracking
- Add `streakProtection` system
- Add `permanentBonuses`
- Add `sessionTracking`

### 2. **js/gameEngine.js** - Implement soft reset
- Modify `submitAnswer()` for soft reset formula
- Add milestone reward logic
- Track puzzles for ad cooldown

### 3. **js/hints.js** - Update ad economy
- Change `AD_REWARD` from 5 to 3
- Add ad cooldown checking
- Add daily ad limit (6 max)
- Track `puzzlesSinceLastAd`

### 4. **js/app.js** - UI updates
- Show streak freeze indicators
- Display session starter bonus
- Update milestone celebrations
- Show ad cooldown messages

### 5. **css/styles.css** - New UI elements
- Streak freeze indicators (❄️)
- Ad cooldown messages
- Milestone celebration styles
- Session bonus animation

---

## 📊 DATA STRUCTURE UPDATES

```javascript
// Extended progress object
progress = {
    // Existing
    totalPuzzlesSolved: 0,
    currentStreak: 0,
    longestStreak: 0,
    lastPlayedDate: null,
    
    // NEW: Ad Economy
    adEconomy: {
        adsWatchedToday: 0,
        puzzlesSinceLastAd: 0,
        lastAdDate: null,
        totalAdsWatched: 0
    },
    
    // NEW: Streak Protection
    streakProtection: {
        freezesAvailable: 0,
        totalFreezesEarned: 0,
        totalFreezesUsed: 0
    },
    
    // NEW: Session Tracking
    sessionTracking: {
        lastPuzzleTime: null,
        puzzlesThisSession: 0,
        sessionStartTime: null
    },
    
    // NEW: Permanent Bonuses
    permanentBonuses: {
        sessionStarterBonus: 2, // Increases to 3 at 30-day
        badges: []
    }
}
```

---

## 🎯 IMPLEMENTATION ORDER

**Now implementing in this order:**

1. ✅ Update data structures in `storage.js`
2. ✅ Implement soft reset in `gameEngine.js`
3. ✅ Add negative balance protection in `hints.js`
4. ✅ Fix day streak to start at 1 in `storage.js`
5. ✅ Reduce ad reward to 3 in `hints.js`
6. ✅ Add ad cooldown system in `hints.js`
7. ✅ Implement streak freeze system in `storage.js`
8. ✅ Add session starter bonus in `app.js`
9. ✅ Add milestone rewards in `gameEngine.js`
10. ✅ Update UI to show all new features

---

## ⏱️ ESTIMATED TIME

- **Phase 1 (Critical):** 30 minutes
- **Phase 2 (Important):** 45 minutes
- **Phase 3 (Enhancement):** 30 minutes
- **Testing & Polish:** 30 minutes

**Total:** ~2.5 hours for complete v2.0 implementation

---

## 🚀 READY TO IMPLEMENT?

All changes are well-defined and ready to code. Starting implementation now!

**Proceeding with Phase 1...**
