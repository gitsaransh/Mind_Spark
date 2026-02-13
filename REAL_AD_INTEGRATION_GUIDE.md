# 📺 MindSpark - Real Ad Integration Guide (Sprint 2)

**Priority:** P1 - HIGH  
**Due:** Feb 16, 2026  
**Effort:** 5 days  
**Revenue Impact:** $1,500-4,500/month

---

## 🎯 **Objective**

Replace the simulated ad system (`simulateAdWatch()`) with real ad SDK integration to generate revenue from rewarded video ads.

---

## 📋 **Phase 1: Research & Decision (Day 1)**

### **Ad Network Options:**

#### **Option A: Google AdMob** ⭐ RECOMMENDED
**Best for:** Mobile apps (PWA, Android, iOS)

**Pros:**
- ✅ High eCPM ($5-15 for rewarded video)
- ✅ Excellent fill rate (95%+)
- ✅ Easy integration
- ✅ Google ecosystem (Analytics, Firebase)
- ✅ Supports PWA via web SDK

**Cons:**
- ❌ Requires Google account
- ❌ Payment threshold ($100)

**Revenue Estimate:**
- 10,000 MAU × 3 ads/day × $0.01 CPM = $3,000/month

---

#### **Option B: Google AdSense**
**Best for:** Web applications

**Pros:**
- ✅ Easy setup for web
- ✅ Good fill rate
- ✅ Familiar platform

**Cons:**
- ❌ Lower eCPM than AdMob
- ❌ Limited rewarded video support
- ❌ Better for display ads

**Revenue Estimate:**
- 10,000 MAU × 3 ads/day × $0.005 CPM = $1,500/month

---

#### **Option C: Unity Ads**
**Best for:** Games (especially Unity-based)

**Pros:**
- ✅ High eCPM for games
- ✅ Good for mobile games

**Cons:**
- ❌ Requires Unity SDK
- ❌ Overkill for web app

---

### **Recommendation:** Google AdMob
**Reason:** Best balance of eCPM, fill rate, and ease of integration for PWA/mobile app.

---

## 📋 **Phase 2: Account Setup (Day 1-2)**

### **Step 1: Create AdMob Account**
1. Go to https://admob.google.com
2. Sign in with Google account
3. Accept terms and conditions
4. Complete account setup

### **Step 2: Add Your App**
1. Click "Apps" → "Add App"
2. Choose platform: "Android" or "iOS" (or both)
3. App name: "MindSpark"
4. Link to app store (or select "No" if not published yet)

### **Step 3: Create Ad Units**
1. Click "Ad units" → "Add ad unit"
2. Select format: **"Rewarded"**
3. Ad unit name: "MindSpark Hint Reward"
4. Copy the **Ad Unit ID** (e.g., `ca-app-pub-XXXXXXXX/YYYYYYYYYY`)

### **Step 4: Get App ID**
1. Go to "App settings"
2. Copy the **App ID** (e.g., `ca-app-pub-XXXXXXXX~ZZZZZZZZZZ`)

---

## 📋 **Phase 3: SDK Integration (Day 3-4)**

### **For Web/PWA:**

#### **Step 1: Add AdMob Script**
```html
<!-- In index.html, before closing </head> -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXX"
     crossorigin="anonymous"></script>
```

#### **Step 2: Initialize AdMob**
```javascript
// In js/hints.js, replace simulateAdWatch()

async simulateAdWatch() {
    return new Promise((resolve, reject) => {
        // Load rewarded ad
        const adUnitId = 'ca-app-pub-XXXXXXXX/YYYYYYYYYY';
        
        // For web, use AdSense rewarded ads
        if (typeof adsbygoogle !== 'undefined') {
            try {
                // Show rewarded ad
                (adsbygoogle = window.adsbygoogle || []).push({});
                
                // On ad completion
                resolve();
            } catch (error) {
                console.error('Ad failed to load:', error);
                reject(error);
            }
        } else {
            // Fallback to simulation if ads not available
            console.warn('AdMob not loaded, using simulation');
            this.simulateAdWatchFallback().then(resolve);
        }
    });
}

// Keep simulation as fallback
simulateAdWatchFallback() {
    return new Promise((resolve) => {
        let countdown = 5;
        const adDialog = this.createAdDialog(countdown);
        
        const interval = setInterval(() => {
            countdown--;
            this.updateAdCountdown(adDialog, countdown);
            
            if (countdown <= 0) {
                clearInterval(interval);
                adDialog.remove();
                resolve();
            }
        }, 1000);
    });
}
```

---

### **For Mobile App (PWA → Android):**

#### **Step 1: Add AdMob Plugin**
If using Capacitor or Cordova:

```bash
# Capacitor
npm install @capacitor-community/admob
npx cap sync

# Cordova
cordova plugin add cordova-plugin-admob-free
```

#### **Step 2: Initialize in App**
```javascript
// In js/app.js

import { AdMob, RewardedAdPluginEvents } from '@capacitor-community/admob';

async initializeAdMob() {
    await AdMob.initialize({
        requestTrackingAuthorization: true,
        testingDevices: ['YOUR_TEST_DEVICE_ID'],
        initializeForTesting: false,
    });
    
    console.log('AdMob initialized');
}

// Call on app start
document.addEventListener('DOMContentLoaded', () => {
    this.initializeAdMob();
});
```

#### **Step 3: Show Rewarded Ad**
```javascript
// In js/hints.js

async simulateAdWatch() {
    return new Promise(async (resolve, reject) => {
        try {
            // Prepare rewarded ad
            await AdMob.prepareRewardedAd({
                adId: 'ca-app-pub-XXXXXXXX/YYYYYYYYYY',
                isTesting: false,
            });
            
            // Listen for reward
            AdMob.addListener(RewardedAdPluginEvents.Rewarded, (reward) => {
                console.log('User earned reward:', reward);
                resolve();
            });
            
            // Listen for errors
            AdMob.addListener(RewardedAdPluginEvents.FailedToLoad, (error) => {
                console.error('Ad failed to load:', error);
                // Fallback to simulation
                this.simulateAdWatchFallback().then(resolve);
            });
            
            // Show ad
            await AdMob.showRewardedAd();
            
        } catch (error) {
            console.error('AdMob error:', error);
            // Fallback to simulation
            this.simulateAdWatchFallback().then(resolve);
        }
    });
}
```

---

## 📋 **Phase 4: Testing (Day 4)**

### **Test Scenarios:**

#### **1. Ad Loading**
- [ ] Ad loads successfully
- [ ] Loading indicator shows
- [ ] Handles slow network

#### **2. Ad Display**
- [ ] Ad shows full-screen
- [ ] Video plays correctly
- [ ] Close button appears after 5 seconds

#### **3. Reward Delivery**
- [ ] Reward triggers on completion
- [ ] Points added correctly
- [ ] Notification shows

#### **4. Error Handling**
- [ ] Handles no internet
- [ ] Handles ad unavailable
- [ ] Falls back to simulation
- [ ] Shows user-friendly error

#### **5. Cooldown System**
- [ ] 5-puzzle cooldown works
- [ ] Daily limit (6 ads) enforced
- [ ] Midnight rollover works

---

## 📋 **Phase 5: Compliance (Day 5)**

### **1. Privacy Policy**

Create `privacy-policy.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <title>MindSpark Privacy Policy</title>
</head>
<body>
    <h1>Privacy Policy for MindSpark</h1>
    
    <h2>Ad Services</h2>
    <p>We use Google AdMob to show ads. AdMob may collect:</p>
    <ul>
        <li>Device information (OS, model)</li>
        <li>Ad interaction data</li>
        <li>Approximate location (for ad targeting)</li>
    </ul>
    
    <h2>Data We Collect</h2>
    <p>MindSpark stores locally:</p>
    <ul>
        <li>Game progress (puzzles solved, streaks)</li>
        <li>Settings preferences</li>
        <li>No personal information</li>
    </ul>
    
    <h2>Third-Party Services</h2>
    <p>Google AdMob: <a href="https://policies.google.com/privacy">Privacy Policy</a></p>
    
    <p>Last updated: [DATE]</p>
</body>
</html>
```

### **2. GDPR Consent (EU Users)**

```javascript
// In js/app.js

async checkGDPRConsent() {
    // Check if user is in EU (use IP geolocation or ask)
    const isEU = await this.isUserInEU();
    
    if (isEU) {
        const consent = localStorage.getItem('gdpr_consent');
        if (!consent) {
            this.showGDPRConsentDialog();
        }
    }
}

showGDPRConsentDialog() {
    // Show dialog asking for consent
    // "We use ads to keep MindSpark free. Allow personalized ads?"
    // [Accept] [Decline]
    
    // If declined, show non-personalized ads
}
```

### **3. COPPA Compliance (Under 13)**

```javascript
// In AdMob settings
AdMob.initialize({
    tagForChildDirectedTreatment: true, // If app is for children
    tagForUnderAgeOfConsent: true,      // If EU users under 16
});
```

### **4. Terms of Service**

Add link to footer:
```html
<footer>
    <a href="privacy-policy.html">Privacy Policy</a> | 
    <a href="terms.html">Terms of Service</a>
</footer>
```

---

## 📋 **Phase 6: Revenue Tracking**

### **1. Add Analytics Events**

```javascript
// In js/hints.js

async watchAdForStreaks() {
    // ... existing code ...
    
    // Track ad impression
    AnalyticsManager.trackEvent('ad_impression', {
        ad_type: 'rewarded_video',
        placement: 'hint_system',
    });
    
    // After ad completion
    AnalyticsManager.trackEvent('ad_completed', {
        ad_type: 'rewarded_video',
        reward_amount: this.AD_REWARD,
    });
    
    // Track revenue (estimated)
    AnalyticsManager.trackRevenue({
        value: 0.01, // Estimated $0.01 per ad
        currency: 'USD',
        source: 'admob_rewarded',
    });
}
```

### **2. Monitor Metrics**

Track in Google Analytics:
- Ad impressions
- Ad completion rate
- Revenue per user
- Daily active users
- Retention impact

---

## 📊 **Expected Results**

### **Revenue Projections:**

| MAU | Ads/User/Day | eCPM | Monthly Revenue |
|-----|--------------|------|-----------------|
| 1,000 | 3 | $10 | $300 |
| 5,000 | 3 | $10 | $1,500 |
| 10,000 | 3 | $10 | $3,000 |
| 50,000 | 3 | $10 | $15,000 |

### **Success Metrics:**
- Ad watch rate: 60-70% (when eligible)
- Ad completion rate: 90%+
- Fill rate: 95%+
- User retention: No negative impact

---

## 🚨 **Common Issues & Solutions**

### **Issue 1: Ads Not Showing**
**Cause:** Test mode not enabled  
**Solution:** Use test ad unit IDs during development

```javascript
const TEST_AD_UNIT = 'ca-app-pub-3940256099942544/5224354917'; // Google test ID
```

### **Issue 2: Low Fill Rate**
**Cause:** Limited ad inventory  
**Solution:** Enable mediation (add more ad networks)

### **Issue 3: Revenue Lower Than Expected**
**Cause:** Low eCPM, poor targeting  
**Solution:** Optimize ad placement, enable personalized ads

---

## ✅ **Implementation Checklist**

- [ ] Research ad networks
- [ ] Choose AdMob
- [ ] Create AdMob account
- [ ] Add app to AdMob
- [ ] Create rewarded ad unit
- [ ] Get App ID and Ad Unit ID
- [ ] Add AdMob SDK to project
- [ ] Replace `simulateAdWatch()` with real ads
- [ ] Test ad loading
- [ ] Test ad display
- [ ] Test reward delivery
- [ ] Test error handling
- [ ] Add privacy policy
- [ ] Implement GDPR consent
- [ ] Add COPPA compliance
- [ ] Set up revenue tracking
- [ ] Monitor metrics
- [ ] Optimize performance

---

## 🎯 **Next Steps**

1. ✅ Complete v2.0 UI polish
2. ✅ Manual testing of current features
3. 🔄 Create AdMob account
4. 🔄 Integrate AdMob SDK
5. 🔄 Test with real ads
6. 🔄 Deploy to production

---

**Status:** 📝 READY FOR SPRINT 2  
**ETA:** 5 days  
**Revenue Impact:** $1,500-4,500/month  
**Priority:** HIGH

Let's monetize MindSpark! 💰
