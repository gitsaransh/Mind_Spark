# 📱 MindSpark Mobile Testing Checklist
**Test URL:** https://wondrous-beijinho-983579.netlify.app  
**Version:** v2.0 (Code Cleanup Build)  
**Date:** Feb 6, 2026

---

## 🎯 QUICK TEST (5 Minutes)

### **1. Open the App**
- [ ] **Splash Screen:** Enso Studio logo animates and fades out
- [ ] App loads without errors
- [ ] Welcome screen appears with "MindSpark" logo
- [ ] **Session Bonus:** "Welcome back! +2 points" notification triggers (if returning user)

### **2. Tutorial Flow**
- [ ] Click "Next" through tutorial
- [ ] Tutorial slides work smoothly
- [ ] Can click "Skip" to bypass tutorial

### **3. Play a Puzzle**
- [ ] Click "Practice Mode"
- [ ] Select a category (Pattern/Logic/Math/Mixed)
- [ ] Select difficulty (Beginner/Intermediate/Expert)
- [ ] Puzzle loads correctly
- [ ] Can select an answer
- [ ] Submit button works
- [ ] Result screen shows (✅ or ❌)

### **4. Basic UI Check**
- [ ] Text is readable
- [ ] Buttons are tappable
- [ ] No layout issues (text overflow, cut-off elements)
- [ ] App fits screen properly (no scrolling needed)

---

## 🔍 DETAILED TEST (15 Minutes)

### **Home Screen**
- [ ] Streak counter displays (taps to show info)
- [ ] **Ad Cooldown:** Progress bar visible (or "Ready!")
- [ ] **Streak Freezes:** Snowflakes visible (if owned)
- [ ] Stats show (Puzzles Solved, Accuracy)
- [ ] All buttons are visible and tappable

### **Game Modes**
- [ ] **Timed Mode:** Timer counts down
- [ ] **Relaxed Mode:** No timer shown
- [ ] **Practice Mode:** Category selection works
- [ ] Can go back from any screen

### **Gameplay**
- [ ] Question text is clear
- [ ] All 4 answer options are visible
- [ ] Selected answer highlights
- [ ] Submit button enables after selection
- [ ] Timer works (if in Timed mode)
- [ ] Hint button appears (💡)

### **Results Screen**
- [ ] Shows correct/incorrect icon
- [ ] Displays time taken
- [ ] Shows current streak
- [ ] Explanation text is readable
- [ ] "Continue" button works
- [ ] **Badge Popup:** Triggers if new badge earned

### **Progress Screen**
- [ ] Current streak displays
- [ ] Longest streak shows
- [ ] Total puzzles count
- [ ] Accuracy percentages visible
- [ ] **Session Stats:** "This Session" card visible
- [ ] **Badges:** Grid shows unlocked badges
- [ ] Can navigate back to home

### **Hint System & Ads**
- [ ] Hint button shows streak points cost
- [ ] Can use hint (if enough points)
- [ ] Hint text displays clearly
- [ ] Points deducted correctly
- [ ] **Ad Option:** "Watch Ad" appears when points are low ( < 3 )
- [ ] **Test Ad:** Clicking "Watch Ad" shows test video/overlay
- [ ] **Reward:** Points awarded after ad completes

### **Settings**
- [ ] Settings icon (⚙️) works
- [ ] Sound toggle works
- [ ] Haptic toggle works
- [ ] **Feedback:** "Send Feedback" opens Google Form
- [ ] Can close settings panel

---

## 📱 MOBILE-SPECIFIC CHECKS

### **Touch & Gestures**
- [ ] All buttons respond to tap
- [ ] No accidental double-taps
- [ ] Scrolling works smoothly (if needed)
- [ ] No ghost clicks or delayed responses

### **Screen Fit**
- [ ] Content fits within screen
- [ ] No horizontal scrolling
- [ ] Safe area respected (notch/camera cutout)
- [ ] Bottom navigation bar doesn't overlap

### **Performance**
- [ ] App loads in under 3 seconds
- [ ] Transitions are smooth
- [ ] No lag when tapping buttons
- [ ] Animations run smoothly

### **Orientation**
- [ ] Portrait mode works
- [ ] Landscape mode works (optional)
- [ ] Layout adjusts properly

---

## 🐛 BUG REPORTING

**If you find issues, note:**
1. **What happened:** (e.g., "Submit button didn't work")
2. **What you did:** (e.g., "Selected answer and tapped Submit")
3. **Phone model:** (e.g., "iPhone 13, iOS 17")
4. **Browser:** (e.g., "Safari" or "Chrome")
5. **Screenshot:** (if possible)

---

## ✅ EXPECTED BEHAVIOR

### **After Code Cleanup:**
- ✅ **NO console errors** (for developers checking DevTools)
- ✅ **NO debug messages** in console
- ✅ Clean, professional experience
- ✅ All features work as before

### **Known Issues (OK to ignore):**
- Some icon files might not load (404 errors in console)
- Service worker might show warnings
- These don't affect gameplay

---

## 📊 TEST RESULTS TEMPLATE

**Tester Name:** _______________  
**Phone:** _______________  
**Browser:** _______________  
**Date:** _______________

### Quick Summary:
- [ ] ✅ App works perfectly
- [ ] ⚠️ Minor issues found (list below)
- [ ] ❌ Major issues found (list below)

### Issues Found:
1. 
2. 
3. 

### Overall Rating: ___/10

### Comments:


---

## 🚀 SHARE THIS CHECKLIST

**Send to testers:**
```
Hey! Please test MindSpark on your phone:

URL: https://wondrous-beijinho-983579.netlify.app

Quick test (5 min):
1. Open the link
2. Play through tutorial
3. Solve 2-3 puzzles
4. Check if everything works smoothly

Let me know if you find any issues!
```

---

**Questions?** Contact the developer.
