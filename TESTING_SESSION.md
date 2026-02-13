# 🧪 MindSpark v2.0 - Testing Session

**Date:** 2026-01-27  
**Version:** 2.0  
**Tester:** Manual Testing

---

## ✅ TEST 1: Soft Reset Formula

### **Setup:**
Need to get to various streak levels and test wrong answers.

### **Test Cases:**

#### **Case 1.1: Streak ≥ 10 (Keep 50%)**
- [ ] Get to 🔥 10 streak
- [ ] Get wrong answer
- [ ] **Expected:** 🔥 5 (kept 50%)
- [ ] **Actual:** _________

#### **Case 1.2: Streak ≥ 10 (Higher)**
- [ ] Get to 🔥 15 streak
- [ ] Get wrong answer
- [ ] **Expected:** 🔥 7 (kept 50%)
- [ ] **Actual:** _________

#### **Case 1.3: Streak 5-9 (Keep 40%)**
- [ ] Get to 🔥 8 streak
- [ ] Get wrong answer
- [ ] **Expected:** 🔥 3 (kept 40%)
- [ ] **Actual:** _________

#### **Case 1.4: Streak < 5 (Full Reset)**
- [ ] Get to 🔥 4 streak
- [ ] Get wrong answer
- [ ] **Expected:** 🔥 0 (full reset)
- [ ] **Actual:** _________

### **How to Test:**
1. Open http://localhost:8000
2. Open browser console (F12)
3. Start playing puzzles
4. Get correct answers to build streak
5. Intentionally get wrong answer
6. Check console for progress data
7. Verify streak points match expected

### **Console Command to Check:**
```javascript
// In browser console:
const progress = JSON.parse(localStorage.getItem('mindspark_progress'));
console.log('Current Streak:', progress.currentStreak);
```

---

## ✅ TEST 2: Ad Cooldown System

### **Test Cases:**

#### **Case 2.1: Cooldown Active**
- [ ] Watch an ad
- [ ] Try to watch another immediately
- [ ] **Expected:** "Solve 5 more puzzles first"
- [ ] **Actual:** _________

#### **Case 2.2: Cooldown Progress**
- [ ] Watch an ad
- [ ] Solve 1 puzzle
- [ ] Try to watch ad
- [ ] **Expected:** "Solve 4 more puzzles first"
- [ ] **Actual:** _________

#### **Case 2.3: Cooldown Complete**
- [ ] Watch an ad
- [ ] Solve 5 puzzles
- [ ] Try to watch ad
- [ ] **Expected:** Ad plays successfully
- [ ] **Actual:** _________

#### **Case 2.4: Daily Limit**
- [ ] Watch 6 ads (solving 5 puzzles between each)
- [ ] Try to watch 7th ad
- [ ] **Expected:** "Daily ad limit reached (6/6)"
- [ ] **Actual:** _________

### **How to Test:**
1. Get some streak points
2. Use hints to get points low
3. Click "Watch Ad" button
4. Note the cooldown message
5. Solve puzzles and retry

### **Console Command to Check:**
```javascript
const progress = JSON.parse(localStorage.getItem('mindspark_progress'));
console.log('Ads watched today:', progress.adEconomy.adsWatchedToday);
console.log('Puzzles since last ad:', progress.adEconomy.puzzlesSinceLastAd);
```

---

## ✅ TEST 3: Streak Freeze Protection

### **Test Cases:**

#### **Case 3.1: Earn Freeze at Day 7**
- [ ] Get to 7-day streak
- [ ] **Expected:** Earn 1 freeze
- [ ] **Actual:** _________

**Note:** This requires playing for 7 consecutive days. For testing, we can simulate:

```javascript
// Simulate 7-day streak in console:
const progress = JSON.parse(localStorage.getItem('mindspark_progress'));
progress.currentStreak = 7;
localStorage.setItem('mindspark_progress', JSON.stringify(progress));
// Then solve a puzzle to trigger the check
```

#### **Case 3.2: Freeze Protection Works**
- [ ] Have 1+ freezes available
- [ ] Skip a day (simulate)
- [ ] **Expected:** Freeze used, streak preserved
- [ ] **Actual:** _________

**Simulation:**
```javascript
// Set up freeze and skip day:
const progress = JSON.parse(localStorage.getItem('mindspark_progress'));
progress.streakProtection.freezesAvailable = 2;
progress.lastPlayedDate = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toDateString(); // 2 days ago
localStorage.setItem('mindspark_progress', JSON.stringify(progress));
// Refresh page and start puzzle
```

#### **Case 3.3: No Freeze Available**
- [ ] Have 0 freezes
- [ ] Skip a day (simulate)
- [ ] **Expected:** Streak resets to 1
- [ ] **Actual:** _________

---

## 📊 TEST RESULTS SUMMARY

### **Soft Reset:**
- [ ] ✅ All cases passed
- [ ] ⚠️ Some issues found: _________
- [ ] ❌ Failed: _________

### **Ad Cooldown:**
- [ ] ✅ All cases passed
- [ ] ⚠️ Some issues found: _________
- [ ] ❌ Failed: _________

### **Streak Freeze:**
- [ ] ✅ All cases passed
- [ ] ⚠️ Some issues found: _________
- [ ] ❌ Failed: _________

---

## 🐛 ISSUES FOUND

### **Issue 1:**
- **Description:** _________
- **Severity:** Critical / High / Medium / Low
- **Steps to Reproduce:** _________
- **Expected:** _________
- **Actual:** _________

### **Issue 2:**
- **Description:** _________
- **Severity:** Critical / High / Medium / Low
- **Steps to Reproduce:** _________
- **Expected:** _________
- **Actual:** _________

---

## ✅ SIGN-OFF

- [ ] All critical tests passed
- [ ] No blocking issues found
- [ ] Ready for UI polish phase
- [ ] Ready for production

**Tester:** _________  
**Date:** _________  
**Status:** ✅ PASS / ⚠️ PASS WITH ISSUES / ❌ FAIL
