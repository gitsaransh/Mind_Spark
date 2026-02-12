# 💰 AdSense & AdMob Integration Complete

## ✅ Completed Actions

1.  **AdSense Script Injection:**
    *   Updated `www/js/ads.js` to use your Publisher ID: `ca-pub-4564028467824607`.
    *   The `adsbygoogle` script will now automatically load on your PWA.

2.  **Ads.txt Created:**
    *   Created `www/ads.txt` with your publisher ID (`google.com, pub-4564028467824607, DIRECT, f08c47fec0942fa0`).
    *   This is **critical** for AdSense verification.

3.  **App Logic Updated:**
    *   Modified `www/js/hints.js` to use `AdsManager`.
    *   "Watch Ad for Hint" button now triggers the ad flow (mocks for now on web, prepares for native ads on Android).

---

## 📋 Your Next Steps (Verification)

### 1. Deploy the App
You must deploy the updated code to your URL (`https://mindspark-app.netlify.app/`) for AdSense to see it.
*   **Action:** I will trigger a build/deploy if you're ready, or you can do it.

### 2. Verify in AdSense
1.  Log in to your **Google AdSense** account.
2.  Go to **Sites** -> **Add Site**.
3.  Enter: `mindspark-app.netlify.app` (or your custom domain).
4.  It will check for the code snippet (which we added) and `ads.txt`.
5.  **Status:** It effectively takes 10 minutes to 2 weeks for approval.

### 3. Check Ads.txt Status
In AdSense, check "Ads.txt status". It should say "Found" once deployed.

---

## 📱 Android Note
For the Android app to show **AdMob** ads:
1.  We need an **AdMob App ID** (different from AdSense Pub ID).
2.  We need an **Ad Unit ID** for the Rewarded Video.
3.  Currently, `www/js/ads.js` uses placeholders for these.
    *   *If you want AdMob on Android:* You must create an app in AdMob and provide these IDs.
    *   *If not:* The app will continue to work, but ads won't load on native Android (fallback to simulation).
