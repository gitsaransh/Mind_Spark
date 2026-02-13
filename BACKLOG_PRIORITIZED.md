# 📋 MindSpark Backlog - Prioritized

**Last Updated:** Feb 7, 2026, 1:10 AM  
**Current Status:** ✅ Code cleanup complete, app deployed and working

---

## 🔴 **HIGH PRIORITY (Do Next)**

### **1. Replace Feedback URL Placeholder** ⚡
**File:** `www/js/app.js`, Line 172  
**Current:** Placeholder Reddit URL  
**Action:** Replace with actual feedback form or Reddit thread  
**Time:** 5 minutes  
**Why:** Users need a way to provide feedback

```javascript
// TODO: Replace with your actual Reddit thread or Google Form URL
const feedbackUrl = "https://www.reddit.com/r/WebGames/";
```

**Options:**
- Create a Google Form for feedback
- Create a Reddit thread
- Use a feedback service like Typeform

---

### **2. Manual Testing Checklist** 📱
**Status:** Partially done (difficulty selection tested)  
**Action:** Complete full testing using `MOBILE_TEST_CHECKLIST.md`  
**Time:** 15-30 minutes  
**Why:** Ensure all features work on mobile

**Test:**
- [ ] Practice Mode flow (✅ Already tested)
- [ ] Badge unlocking
- [ ] Daily Challenge
- [ ] Hint system
- [ ] Sound effects
- [ ] Settings panel
- [ ] Progress screen
- [ ] Share functionality

---

### **3. Generate Android APK** 📦
**Status:** Not started  
**Action:** Build APK for real device testing  
**Time:** 10-15 minutes  
**Why:** Test native mobile app experience

**Steps:**
```bash
# From Mind_Spark directory
npx cap sync android
cd android
./gradlew assembleDebug
```

**Output:** `android/app/build/outputs/apk/debug/app-debug.apk`

---

## 🟡 **MEDIUM PRIORITY (This Week)**

### **4. AdMob Verification** 💰
**Status:** Config exists, needs verification  
**Publisher ID:** `ca-pub-4564028467824607`  
**Action:** Verify AdMob setup before APK build  
**Time:** 10 minutes  
**Why:** Ensure ads work in production

**Check:**
- [ ] AdMob account active
- [ ] Publisher ID correct
- [ ] Ad unit IDs configured
- [ ] Test ads working

---

### **5. Add Error Logging Service** 🔍
**Status:** Not started  
**Action:** Integrate Sentry or LogRocket  
**Time:** 30 minutes  
**Why:** Track production errors

**Recommended:** Sentry (free tier)
```bash
npm install @sentry/browser
```

---

### **6. Tutorial Update** 📚
**Status:** Needs review  
**Action:** Ensure tutorial covers new features  
**Time:** 15 minutes  
**Why:** Users need to understand new game modes

**Check:**
- [ ] Covers Relaxed/Timed modes
- [ ] Explains Practice Mode
- [ ] Shows category selection
- [ ] Demonstrates badge system

---

## 🟢 **LOW PRIORITY (Future Enhancements)**

### **7. Social Share Feature** 📤
**Status:** Not started  
**Action:** Implement "Share Your Spark" functionality  
**Time:** 1-2 hours  
**Why:** Viral growth potential

**Features:**
- Share daily stats
- Share achievements
- Share streak milestones

---

### **8. More Puzzles** 🧩
**Current:** ~130 puzzles  
**Target:** 200+ puzzles  
**Action:** Add 70 more puzzles  
**Time:** 2-3 hours  
**Why:** More content = better retention

**Categories to expand:**
- Math (need more Intermediate/Expert)
- Logic (need more Expert)
- Pattern (balanced)

---

### **9. Code Quality Tools** 🛠️
**Status:** Not started  
**Action:** Add ESLint + pre-commit hooks  
**Time:** 30 minutes  
**Why:** Prevent messy code in future

```bash
npm install --save-dev eslint
npx eslint --init
```

---

### **10. Sound Effects Review** 🔊
**Status:** Implemented, needs testing  
**Action:** Verify all sounds are pleasant  
**Time:** 10 minutes  
**Why:** Audio UX matters

**Test:**
- [ ] Click sound
- [ ] Success sound
- [ ] Failure sound
- [ ] Milestone sound
- [ ] Haptic feedback

---

## ✅ **COMPLETED (Recent)**

- ✅ **Code Cleanup** - Removed 23 debug statements (Feb 6-7)
- ✅ **Netlify Deployment** - Auto-deploy configured (Feb 6-7)
- ✅ **Bug Fix** - Difficulty selection working (Feb 6-7)
- ✅ **Repo Public** - Fixed deployment issues (Feb 7)
- ✅ **v2.0 Core** - Soft reset, ad cooldown, notifications (Jan 27)
- ✅ **Badge System** - Achievements implemented (Jan 27)
- ✅ **Practice Mode** - Category selection (Jan 27)

---

## 🎯 **RECOMMENDED NEXT ACTIONS**

### **Today (Feb 7):**
1. ⚡ **Replace feedback URL** (5 min)
2. 📱 **Complete mobile testing** (30 min)
3. 📦 **Build Android APK** (15 min)

### **This Week:**
4. 💰 **Verify AdMob setup** (10 min)
5. 🔍 **Add Sentry logging** (30 min)
6. 📚 **Review tutorial** (15 min)

### **Next Week:**
7. 📤 **Social share feature** (2 hours)
8. 🧩 **Add 30-50 more puzzles** (1-2 hours)

---

## 📊 **Progress Tracking**

**Total Backlog Items:** 10  
**High Priority:** 3  
**Medium Priority:** 3  
**Low Priority:** 4  

**Estimated Time to Clear High Priority:** ~1 hour  
**Estimated Time to Clear All:** ~8-10 hours

---

## 🚀 **Quick Wins (Under 15 min each)**

1. ✅ Replace feedback URL
2. ✅ Build Android APK
3. ✅ Verify AdMob config
4. ✅ Review tutorial
5. ✅ Test sound effects

**Do these 5 first for maximum impact!** 🎯

---

**Need help with any of these? Just ask!** 🙋‍♂️
