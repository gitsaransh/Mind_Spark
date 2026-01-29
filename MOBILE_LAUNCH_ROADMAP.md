# 🗺️ MindSpark Mobile Launch Roadmap (3 Weeks)

## 📅 WEEK 1: Content + Capacitor Learning (Jan 29 - Feb 3)

### **Day 3 (Today - Jan 29): Reaching 150 Puzzles** ✅
- **Objective:** Generate 25 more puzzles (Odd One Out / Cause Effect) to hit 150 total.
- **Learning:** Watch Capacitor & AdMob implementation guides.
- **Status:** *Pending*

### **Day 4-5 (Jan 30-31): Capacitor Setup & Migration** ⚙️
- **Objective:** Convert the PWA into a Native Android Project.
- **Tasks:**
  - Install Capacitor Core, CLI, Android platform.
  - Reorganize project structure (`/www` folder).
  - Configure `capacitor.config.json`.
  - Build & Run on Android Emulator/Device.
- **Deliverable (Jan 31):** Working APK (no ads yet).

### **Day 6-7 (Feb 1-2): AdMob Integration** 💰
- **Objective:** Replace Mock Ads with Real AdMob Rewarded Videos.
- **Tasks:**
  - Create AdMob Account & Ad Unit IDs.
  - Install `@capacitor-community/admob` plugin.
  - Update `js/ads.js` to use Capacitor's native AdMob API.
  - Test "Test Ads" on real device.
- **Deliverable (Feb 2):** APK with working +3 point test ads.

---

## 📅 WEEK 2: Content Sprint (Feb 4 - Feb 10)

### **Day 8-12 (Feb 4-8): The 300 Puzzle Push** 🧩
- **Objective:** Double the content library to 300 puzzles.
- **Tasks:**
  - Day 8: +35 (Pattern/Odd One Out)
  - Day 9: +35 (Cause Effect/Error Detection)
  - Day 10: +35 (Best Choice/Mixed)
  - Day 11: +35 (Expert All Types)
  - Day 12: +35 (Expert All Types)
- **Quality Check:** Play-test 30 random levels.
- **Deliverable (Feb 8):** 300 Puzzles + Crash-free APK.

### **Day 13-14 (Feb 9-10): Final QA & Polish** 🧪
- **Objective:** Stress test specific v2.0 features on mobile.
- **Tasks:**
  - Full Loop Test (50+ puzzles).
  - Offline Mode validation.
  - Day Streak checks (Date manipulation).
  - Streak Freeze validation.
- **Deliverable (Feb 10):** Production-Candidate APK.

---

## 📅 WEEK 3: Store Assets & Launch (Feb 11 - Feb 17)

### **Day 15-16 (Feb 11-12): Store Assets** 🎨
- **Tasks:**
  - 512x512 App Icon.
  - Adaptive Android Icon.
  - 5 Screenshots (Home, Game, Hint, Progress, Win).

### **Day 17-18 (Feb 13-14): Store Listing Prep** 📝
- **Tasks:**
  - Short & Full Description.
  - Privacy Policy link.
  - Content Rating questionnaire.

### **Day 19 (Feb 15): Gold Master Build** 🏆
- **Tasks:**
  - Switch AdMob to **Production Mode**.
  - Sign the APK/AAB bundle.
  - Final sanity check.
- **Deliverable:** Final release APK.

### **Day 20-21 (Feb 16-17): Submission** 🚀
- **Handover:** Play Store submission by **Feb 17**.

---

## 📚 Resources Checklist
- [Video] [AdMob + Capacitor Guide](https://www.youtube.com/watch?v=H_SO5pWuU4M)
- [Article] [Vanilla JS + Capacitor](https://ionic.io/blog/create-powerful-native-mobile-apps-with-capacitor-vanillajs)
- [Plugin] [Capacitor AdMob Docs](https://capgo.app/plugins/capacitor-admob/)
