# 📱 MindSpark Android Testing Guide (User Side)

> **Goal:** Verify that the MindSpark app works perfectly on a real Android phone before launch.

---

## 📥 **Step 1: Install the App**

1.  **Transfer the APK:** 
    *   Find the file: `android/app/build/outputs/apk/debug/app-debug.apk`
    *   Send it to your phone (Email, WhatsApp, or Google Drive).
2.  **Install:**
    *   Tap the file on your phone.
    *   If prompted, allow **"Install from Unknown Sources"**.
    *   Tap **Install**.

---

## 🧪 **Step 2: Run the Test Checklist**

### **1. Launch Experience** 🚀
*   [ ] **Splash Screen:** Does the "Enso Studio" logo animated properly?
*   [ ] **Welcome:** Does the "MindSpark" home screen appear without crashing?
*   [ ] **Notification:** If you're a returning user, do you see the "+2 Points" welcome bonus?

### **2. Gameplay Test** 🎮
*   [ ] **Start Game:** Go to **Practice Mode > Pattern > Beginner**.
*   [ ] **Play:** Solve 2-3 puzzles.
*   [ ] **Controls:** Are the buttons easy to tap? Is the text readable?
*   [ ] **Result:** Does the "Correct/Incorrect" screen show up clearly?

### **3. AdMob & Hints (Crucial!)** 💰
*   [ ] **Check Hints:** Go to a puzzle and tap "💡 Get Hint".
*   [ ] **Drain Points:** Use hints until you have **less than 3 streak points**.
*   [ ] **Watch Ad:** When the "Watch Ad" button appears, tap it.
    *   *Result:* You should see a "Test Ad" (a placeholder video from Google).
*   [ ] **Reward:** After the ad, do you get **+3 Streak Points**?

### **4. Features & Settings** ⚙️
*   [ ] **Feedback:** Go to **Settings > Send Feedback**. Does it open the Google Form?
*   [ ] **Toggles:** Turn Sound/Haptics ON and OFF. Do they work?
*   [ ] **Progress:** Check the "View Progress" screen. Is your streak updating?

---

## 🐛 **Step 3: Report Issues**

If you find a bug, note it down like this:

*   **Issue:** (e.g. "Splash screen lagged")
*   **Phone Model:** (e.g. "Samsung S21")
*   **Action:** (e.g. "Opened the app")

---

**✅ If everything works, we are ready for the Play Store!**
