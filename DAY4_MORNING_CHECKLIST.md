# 🌅 Morning Checklist - Day 4 (Mobile Migration)

## 🛑 STOP! READ THIS BEFORE STARTING
You are about to convert the web project into a Native Android App.
**Backup has been created at:** `backup_v2_before_capacitor/`

## 📋 PRE-FLIGHT CHECKS
- [ ] **Verify Backup:** Check `backup_v2_before_capacitor` exists and has files.
- [ ] **Browser Test:** Open `index.html` one last time to ensure:
  - All 150 puzzles load
  - Streaks work
  - Session dashboard works
  - Hints work

## 🛠️ MIGRATION STEPS
1. **Prepare Folders:**
   - [x] Create `www/`
   - [x] Move `index.html`, `css/`, `js/`, `assets/`, `icons/` into `www/`
   - [x] *DO NOT* move `.git`, `package.json`, `backup_...`

2. **Install Capacitor:**
   - [x] `npm init -y`
   - [x] `npm install @capacitor/core @capacitor/cli @capacitor/android`
   - [x] `npx cap init MindSpark com.mindspark.puzzlegame --web-dir=www`
   - [x] `npx cap add android`

3. **Config Check (`capacitor.config.json`):**
   ```json
   {
     "appId": "com.mindspark.puzzlegame",
     "appName": "MindSpark",
     "webDir": "www",
     "bundledWebRuntime": false
   }
   ```

4. **Build APK:**
   ```bash
   npx cap sync
   npx cap open android
   ```
   - In Android Studio: `Build > Build Bundle(s) / APK(s) > Build APK(s)`

## 🎯 DELIVERABLES
- [ ] **APK File:** Located in `android/app/build/outputs/apk/debug/app-debug.apk`
- [ ] **Screenshot:** App running in Emulator/Device
- [ ] **Confirmation:** "I played 5 puzzles on Android and it works!"

## 🆘 TROUBLESHOOTING
- **Path Errors:** If screen is white, check `index.html` script tags. They must be relative (`./js/app.js` not `/js/app.js`).
- **Permissions:** If build fails, checking AndroidManifest.xml.

---
**Ready to launch? Type "START DAY 4"**
