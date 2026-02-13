# 📦 Build Android APK - Manual Guide

**Issue:** PowerShell script execution is disabled on your system  
**Solution:** Use Android Studio or enable PowerShell scripts

---

## 🔧 **Option 1: Enable PowerShell Scripts (Recommended)**

### **Quick Fix:**
1. Open **PowerShell as Administrator**
2. Run this command:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
3. Type `Y` and press Enter
4. Close PowerShell

### **Then Build APK:**
```bash
npx cap sync android
cd android
gradlew assembleDebug
```

**Output:** `android/app/build/outputs/apk/debug/app-debug.apk`

---

## 🎨 **Option 2: Use Android Studio (GUI Method)**

### **Step 1: Open Project**
1. Open **Android Studio**
2. Click **"Open an Existing Project"**
3. Navigate to: `C:\Users\Saransh\OneDrive\Documents\Mind_Spark\android`
4. Click **"OK"**

### **Step 2: Sync Project**
1. Wait for Gradle sync to complete (bottom status bar)
2. If prompted, click **"Sync Now"**

### **Step 3: Build APK**
1. Click **Build** menu → **Build Bundle(s) / APK(s)** → **Build APK(s)**
2. Wait for build to complete (~2-5 minutes)
3. Click **"locate"** in the notification popup

**Output Location:**
```
android\app\build\outputs\apk\debug\app-debug.apk
```

---

## 📱 **Option 3: Use Capacitor CLI Directly**

If you have Capacitor installed globally:

```bash
# Sync web assets to Android
capacitor sync android

# Open in Android Studio
capacitor open android
```

Then build from Android Studio (see Option 2, Step 3)

---

## 🚀 **After Building:**

### **Install on Phone:**

**Method 1: USB Cable**
1. Enable **Developer Options** on your phone:
   - Settings → About Phone → Tap "Build Number" 7 times
2. Enable **USB Debugging**:
   - Settings → Developer Options → USB Debugging
3. Connect phone to PC via USB
4. Copy `app-debug.apk` to phone
5. Open file and install

**Method 2: File Sharing**
1. Upload APK to Google Drive / Dropbox
2. Download on phone
3. Install (may need to allow "Install from Unknown Sources")

---

## ⚠️ **Troubleshooting:**

### **"Gradle not found"**
Install Android Studio: https://developer.android.com/studio

### **"SDK not found"**
1. Open Android Studio
2. Tools → SDK Manager
3. Install Android SDK (API 33 recommended)

### **"Build failed"**
1. Check `android/app/build.gradle` for errors
2. Run `gradlew clean` then try again

---

## 📊 **What the APK Includes:**

✅ All web assets (HTML, CSS, JS)  
✅ Capacitor native bridge  
✅ AdMob plugin (if configured)  
✅ Splash screen  
✅ App icons  
✅ Native Android wrapper  

---

## 🎯 **Testing the APK:**

Once installed on your phone:

1. **Launch app** from home screen
2. **Test all features**:
   - [ ] Tutorial flow
   - [ ] Practice Mode
   - [ ] Daily Challenge
   - [ ] Hint system
   - [ ] Badge unlocking
   - [ ] Sound effects
   - [ ] Haptic feedback
3. **Check performance**:
   - [ ] Smooth animations
   - [ ] Fast load times
   - [ ] No crashes

---

## 📝 **Next Steps After Testing:**

1. Note any bugs or issues
2. Fix issues in web code (`www/` folder)
3. Rebuild APK with fixes
4. When ready for production:
   - Build **release APK**: `gradlew assembleRelease`
   - Sign with keystore
   - Upload to Google Play Console

---

## 🔗 **Useful Links:**

- **Android Studio:** https://developer.android.com/studio
- **Capacitor Docs:** https://capacitorjs.com/docs/android
- **APK Signing:** https://developer.android.com/studio/publish/app-signing

---

**Current Status:** ⏳ Waiting for PowerShell fix or Android Studio build  
**Estimated Time:** 10-15 minutes (first time), 2-3 minutes (subsequent builds)

**Choose the method that works best for you!** 🚀
