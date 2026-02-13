# 🧪 Quick Test Guide - MindSpark v7.0

**For:** Saransh  
**Version:** 7.0  
**Date:** January 28, 2026  
**Time Required:** 10 minutes

---

## ⚡ QUICK START

### Open the App:
1. Navigate to: `c:\Users\Saransh\OneDrive\Documents\Mind_Spark\index.html`
2. Open in browser (Chrome recommended)
3. Open Console: Press **F12** → Click **Console** tab

---

## ✅ TEST 1: Session Bonus (First-Time User)

### Steps:
```javascript
// Copy-paste into console:
localStorage.clear();
location.reload();
```

### Expected Results:
- ✅ Console shows: `✅ Session bonus awarded: +2 points (0h since last session)`
- ✅ Home screen shows: **🔥 2** (streak points)
- ✅ NO notification popup (clean UX for first-time users)

### If It Fails:
- Check console for errors
- Verify `sessionTracking` exists in localStorage
- Report error message to me

---

## ✅ TEST 2: Session Bonus (Returning User)

### Steps:
```javascript
// 1. First, play ONE puzzle (any difficulty)
// 2. Then copy-paste this into console:

const progress = ProgressManager.getProgress();
progress.sessionTracking.lastPuzzleTime = Date.now() - (5 * 60 * 60 * 1000);
ProgressManager.saveProgress(progress);
location.reload();
```

### Expected Results:
- ✅ Notification appears: **"🎉 Welcome Back! +2 Starter Bonus! Last played 5 hours ago"**
- ✅ Confetti animation plays
- ✅ Milestone sound plays
- ✅ Streak points increase by 2
- ✅ Console shows: `✅ Session bonus awarded: +2 points (5h since last session)`

### If It Fails:
- Check if notification appears (might be delayed 1 second)
- Verify confetti animation
- Check console for errors

---

## ✅ TEST 3: New Puzzles

### Steps:
1. Click **"Start Playing"**
2. Select **"Relaxed Mode"**
3. Select **"Beginner"** difficulty
4. Play through 5-10 puzzles

### Expected Results:
You should encounter NEW puzzles like:
- ✅ "5, 10, 15, 20, ?" → Answer: **25**
- ✅ "A, C, E, G, ?" → Answer: **I**
- ✅ "Monday, Tuesday, Wednesday, ?" → Answer: **Thursday**
- ✅ "100, 90, 80, 70, ?" → Answer: **60**
- ✅ "1, 2, 4, 8, ?" → Answer: **16**

### If It Fails:
- Check if you're seeing only old puzzles (might be random)
- Play 10+ puzzles to ensure new ones appear
- Report which puzzles you see

---

## ✅ TEST 4: Cache Update

### Steps:
```javascript
// Copy-paste into console:
caches.keys().then(keys => console.log('Cache versions:', keys));
```

### Expected Results:
- ✅ Console shows: `Cache versions: ["mindspark-v7.0"]`
- ✅ Old cache (v6.5) should be deleted

### If It Fails:
- Hard refresh: **Ctrl + Shift + R**
- Check console for service worker errors

---

## 🐛 COMMON ISSUES & FIXES

### Issue: "Session bonus not awarded"
**Fix:**
```javascript
// Check if sessionTracking exists:
const progress = ProgressManager.getProgress();
console.log('Session tracking:', progress.sessionTracking);

// If undefined, it's a migration issue - report to me
```

### Issue: "New puzzles not appearing"
**Fix:**
- Play 10+ puzzles (random selection might show old ones first)
- Check total puzzle count:
```javascript
console.log('Total puzzles:', PUZZLES.length); // Should be 95
```

### Issue: "Notification not showing"
**Fix:**
- Wait 1-2 seconds after reload (notification is delayed)
- Check if `showSessionStarterBonus` method exists:
```javascript
console.log(typeof App.showSessionStarterBonus); // Should be "function"
```

---

## 📊 VERIFICATION CHECKLIST

After testing, verify:

- [ ] Session Bonus works for first-time users
- [ ] Session Bonus works for returning users
- [ ] Notification appears with confetti
- [ ] New puzzles appear in game
- [ ] Cache updated to v7.0
- [ ] No console errors
- [ ] App loads normally
- [ ] All existing features still work

---

## 📝 REPORT TEMPLATE

If you find issues, copy this template:

```
**Issue:** [Brief description]
**Test:** [Which test case: 1, 2, 3, or 4]
**Expected:** [What should happen]
**Actual:** [What actually happened]
**Console Error:** [Copy error message from console]
**Screenshot:** [If applicable]
```

---

## ✅ SUCCESS CRITERIA

**All tests pass if:**
1. ✅ Session Bonus awards +2 points on first load
2. ✅ Notification shows for returning users
3. ✅ New puzzles appear in game rotation
4. ✅ Cache version is v7.0
5. ✅ No errors in console

---

## 🎉 NEXT STEPS AFTER TESTING

### If All Tests Pass:
1. ✅ Mark Day 1 as complete
2. ✅ I'll continue with Day 2 work (30 more puzzles)
3. ✅ No action needed from you

### If Any Test Fails:
1. 🐛 Report issue using template above
2. 🔧 I'll fix immediately
3. 🧪 Retest after fix

---

## ⏱️ TIME ESTIMATE

- Test 1: 2 minutes
- Test 2: 3 minutes
- Test 3: 5 minutes
- Test 4: 1 minute
- **Total: ~10 minutes**

---

## 💡 PRO TIPS

**Tip 1:** Keep console open during all tests to catch any errors

**Tip 2:** If something doesn't work, try hard refresh first: **Ctrl + Shift + R**

**Tip 3:** Test in Incognito mode to ensure clean state: **Ctrl + Shift + N**

**Tip 4:** Take screenshots of any issues for easier debugging

---

**Status:** Ready for Testing  
**Priority:** HIGH  
**Blocker:** No - can continue development while you test

---

*Happy Testing! 🧪✨*
