# 🚀 MindSpark v2.0 - Easy Testing Guide

**Just follow these 3 simple steps!**

---

## Step 1: Open the App (5 seconds)

1. Open your browser (Chrome recommended)
2. Go to: **http://localhost:8000**
3. Press **F12** to open Developer Tools
4. Click on the **"Console"** tab

---

## Step 2: Load Test Helper (10 seconds)

**Option A: Copy from file**
1. Open the file: `test_helper.js`
2. Press **Ctrl+A** (select all)
3. Press **Ctrl+C** (copy)
4. Click in the Console
5. Press **Ctrl+V** (paste)
6. Press **Enter**

**Option B: Type this command**
```javascript
// Just copy and paste this ONE line:
fetch('/test_helper.js').then(r=>r.text()).then(eval)
```

You should see:
```
✅ Testing Helper Loaded!
Type: TestHelper.help() for commands
Quick Start: TestHelper.setupAllTests()
```

---

## Step 3: Run Tests (30 seconds)

### **Quick Test - See Everything at Once:**
```javascript
TestHelper.testAllNotifications()
```
This will show all 4 notifications in sequence!

### **Setup for Manual Testing:**
```javascript
TestHelper.setupAllTests()
```
Then reload the page (F5) and play normally.

---

## 🎯 Available Commands

Once the helper is loaded, you can use these commands:

### **See All Notifications:**
```javascript
TestHelper.testAllNotifications()
```
Shows all 4 notifications with animations!

### **Test Individual Features:**
```javascript
TestHelper.testMilestoneReward()    // Show "Lucky 7!" 🍀
TestHelper.testSessionStarter()     // Show "Welcome Back!" 🎉
TestHelper.testSoftReset()          // Show "Streak Reduced" 💪
TestHelper.testAdCooldown()         // Setup ad cooldown test 📊
```

### **Setup & Status:**
```javascript
TestHelper.setupAllTests()          // Setup all test data
TestHelper.status()                 // Show current stats
TestHelper.reset()                  // Clear everything
TestHelper.help()                   // Show all commands
```

---

## 📋 Testing Scenarios

### **Scenario 1: See Milestone Reward** 🍀
```javascript
TestHelper.testMilestoneReward()
```
✅ You should see: "🍀 Lucky 7! +2 Bonus Points!" with confetti

### **Scenario 2: See Session Starter** 🎉
```javascript
TestHelper.testSessionStarter()
```
✅ You should see: "🎉 Welcome Back! +2 Starter Bonus!" with confetti

### **Scenario 3: See Soft Reset** 💪
```javascript
TestHelper.testSoftReset()
```
✅ You should see: "💪 Streak Reduced - You kept 9 points (60% saved)!"

### **Scenario 4: See Ad Cooldown UI** 📊
```javascript
TestHelper.testAdCooldown()
```
Then in the game:
1. Start a puzzle
2. Click "💡 Get Hint"
3. ✅ You should see progress bar showing "2/5 puzzles"

---

## 🎨 What You Should See

### **All Notifications Test:**
When you run `TestHelper.testAllNotifications()`, you'll see:

1. **Session Starter** (0.5 sec)
   - "🎉 Welcome Back!"
   - Confetti animation

2. **Milestone Reward** (2 sec)
   - "🍀 Lucky 7! +2 Bonus Points!"
   - Confetti animation

3. **Soft Reset** (4 sec)
   - "💪 Streak Reduced"
   - "You kept 9 points (60% saved)!"

4. **Streak Freeze** (6 sec)
   - "❄️ Streak Freeze Earned!"
   - "You earned 1 streak freeze!"

All notifications auto-dismiss after 4 seconds.

---

## 🐛 Troubleshooting

### **"TestHelper is not defined"**
- Make sure you pasted the entire test_helper.js file
- Or use: `fetch('/test_helper.js').then(r=>r.text()).then(eval)`

### **"ProgressManager is not defined"**
- Make sure you're on http://localhost:8000
- Reload the page and try again

### **Notifications not showing**
- Check if browser console has errors (red text)
- Make sure you're on the home screen or puzzle screen
- Try: `TestHelper.status()` to check current state

### **Want to start fresh?**
```javascript
TestHelper.reset()
```
Then reload the page (F5)

---

## ✅ Quick Checklist

After testing, verify you saw:

- [ ] Milestone reward notification (🍀 Lucky 7!)
- [ ] Session starter notification (🎉 Welcome Back!)
- [ ] Soft reset notification (💪 Streak Reduced)
- [ ] Streak freeze notification (❄️ Freeze Earned!)
- [ ] Confetti animations
- [ ] Sound effects (if enabled)
- [ ] Ad cooldown progress bar
- [ ] All notifications auto-dismiss

---

## 🎯 Summary

**Easiest way to test:**
1. Open http://localhost:8000
2. Press F12 → Console
3. Paste: `fetch('/test_helper.js').then(r=>r.text()).then(eval)`
4. Run: `TestHelper.testAllNotifications()`
5. Watch the magic! ✨

**That's it!** You'll see all 4 notifications with confetti animations.

---

**Need help?** Type `TestHelper.help()` in console for all commands.

**Ready to test?** Let's go! 🚀
