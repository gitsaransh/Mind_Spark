// ============================================
// MindSpark - Ad Management System (AdMob + AdSense)
// ============================================

// If using ES modules in future:
// import { AdMob, RewardedAdPluginEvents, AdMobError } from '@capacitor-community/admob';

const AdsManager = {
    // Configuration
    config: {
        // App ID (User to provide from AdMob dashboard)
        appId: 'ca-app-pub-4564028467824607~7976884590',
        // Ad Unit IDs
        androidAdUnitId: 'ca-app-pub-4564028467824607/7568916404',
        iosAdUnitId: 'ca-app-pub-XXXXXXXXXXXXXXXX/AAAAAAAAAA',
        webAdUnitId: 'ca-pub-4564028467824607',

        testMode: true,  // Set to false when deploying for real revenue
        testDeviceIds: [], // Add test device IDs here
    },

    state: {
        isInitialized: false,
        isAdLoaded: false,
        isLoading: false,
        pendingRewardResolve: null, // Store promise resolve function
        pendingRewardReject: null   // Store promise reject function
    },

    // Initialize AdMob (Call on App Start)
    async init() {
        if (this.state.isInitialized) return;

        console.log('🎬 AdsManager: Initializing...');

        // Check if running on Native Platform (Android/iOS)
        if (this.isNativePlatform()) {
            try {
                const AdMob = window.Capacitor?.Plugins?.AdMob;

                if (AdMob) {
                    // Initialize AdMob
                    await AdMob.initialize({
                        requestTrackingAuthorization: true,
                        testingDevices: this.config.testDeviceIds,
                        initializeForTesting: this.config.testMode,
                    });

                    // Set up event listeners ONCE during initialization
                    this.setupAdMobEventListeners(AdMob);

                    this.state.isInitialized = true;
                    console.log('✅ AdsManager: AdMob initialized successfully');
                } else {
                    console.warn('⚠️ AdsManager: AdMob plugin not found. Is it installed?');
                }
            } catch (error) {
                console.error('❌ AdsManager: AdMob Init Error', error);
            }
        } else {
            // WEB Fallback (AdSense)
            this.initWebAds();
        }
    },

    // Setup AdMob Event Listeners (called once during init)
    setupAdMobEventListeners(AdMob) {
        console.log('🎧 AdsManager: Setting up event listeners...');

        // Event: Ad Loaded Successfully
        AdMob.addListener('onRewardedAdLoaded', () => {
            console.log('✅ AdMob Event: Rewarded ad loaded');
            this.state.isAdLoaded = true;
            this.state.isLoading = false;
        });

        // Event: Ad Failed to Load
        AdMob.addListener('onRewardedAdFailedToLoad', (error) => {
            console.error('❌ AdMob Event: Failed to load ad', error);
            this.state.isAdLoaded = false;
            this.state.isLoading = false;

            // Reject the pending promise if exists
            if (this.state.pendingRewardReject) {
                this.state.pendingRewardReject({
                    success: false,
                    error: 'Ad failed to load',
                    message: 'Ad not available. Try again later.'
                });
                this.state.pendingRewardReject = null;
                this.state.pendingRewardResolve = null;
            }
        });

        // Event: Ad Shown (Opened)
        AdMob.addListener('onRewardedAdShowed', () => {
            console.log('👁️ AdMob Event: Rewarded ad shown');
        });

        // Event: User Earned Reward (CRITICAL - This is when we grant the hint)
        AdMob.addListener('onRewardedAdEarned', (reward) => {
            console.log('🎁 AdMob Event: User earned reward!', reward);

            // Resolve the pending promise with success
            if (this.state.pendingRewardResolve) {
                this.state.pendingRewardResolve({
                    success: true,
                    reward: reward
                });
                this.state.pendingRewardResolve = null;
                this.state.pendingRewardReject = null;
            }
        });

        // Event: Ad Closed/Dismissed
        AdMob.addListener('onRewardedAdDismissed', () => {
            console.log('🚪 AdMob Event: Rewarded ad dismissed');
            this.state.isAdLoaded = false;

            // If promise is still pending (user closed ad without watching)
            if (this.state.pendingRewardResolve) {
                console.warn('⚠️ User closed ad without completing it');
                this.state.pendingRewardResolve({
                    success: false,
                    error: 'Ad closed early',
                    message: 'You need to watch the full ad to earn the reward.'
                });
                this.state.pendingRewardResolve = null;
                this.state.pendingRewardReject = null;
            }
        });

        // Event: Ad Failed to Show
        AdMob.addListener('onRewardedAdFailedToShow', (error) => {
            console.error('❌ AdMob Event: Failed to show ad', error);

            if (this.state.pendingRewardReject) {
                this.state.pendingRewardReject({
                    success: false,
                    error: 'Ad failed to show',
                    message: 'Unable to show ad. Please try again.'
                });
                this.state.pendingRewardReject = null;
                this.state.pendingRewardResolve = null;
            }
        });

        console.log('✅ AdsManager: Event listeners registered');
    },

    // Check if running on Capacitor Native
    isNativePlatform() {
        return window.Capacitor && window.Capacitor.isNativePlatform();
    },

    // Initialize Web Ads (AdSense)
    initWebAds() {
        if (!this.config.webAdUnitId.includes('pub-')) {
            console.warn('⚠️ AdsManager: Invalid web ad unit ID');
            return;
        }

        const script = document.createElement('script');
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${this.config.webAdUnitId}`;
        script.async = true;
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);
        this.state.isInitialized = true;
        console.log('✅ AdsManager: AdSense initialized');
    },

    // Show Rewarded Video Ad (Main Entry Point)
    async showRewardedAd() {
        console.log('🎬 AdsManager: showRewardedAd() called');

        // 1. Native AdMob
        if (this.isNativePlatform()) {
            return this.showNativeRewardedAd();
        }

        // 2. Web AdSense (or Mock)
        return this.showWebRewardedAd();
    },

    // Native AdMob Logic with Proper Event Handling
    async showNativeRewardedAd() {
        return new Promise(async (resolve, reject) => {
            const AdMob = window.Capacitor?.Plugins?.AdMob;

            if (!AdMob) {
                console.error('❌ AdMob plugin missing');
                // Fallback to mock ad
                const mockResult = await this.showMockAd('AdMob Not Available - Mock Fallback');
                resolve(mockResult);
                return;
            }

            try {
                this.state.isLoading = true;
                console.log('📡 Loading rewarded ad...');

                // Store the promise resolve/reject for event handlers
                this.state.pendingRewardResolve = resolve;
                this.state.pendingRewardReject = reject;

                // Prepare Ad options
                const options = {
                    adId: this.config.androidAdUnitId,
                    isTesting: this.config.testMode
                };

                // Prepare the ad (this will trigger onRewardedAdLoaded or onRewardedAdFailedToLoad)
                await AdMob.prepareRewardedAd(options);

                // Wait a moment for the ad to load
                await new Promise(r => setTimeout(r, 500));

                if (!this.state.isAdLoaded) {
                    throw new Error('Ad failed to load within timeout');
                }

                // Show the ad (this will trigger onRewardedAdShowed)
                console.log('📺 Showing rewarded ad...');
                await AdMob.showRewardedAd();

                // The promise will be resolved by event listeners:
                // - onRewardedAdEarned (success = true)
                // - onRewardedAdDismissed (success = false if closed early)
                // - onRewardedAdFailedToShow (error)

            } catch (error) {
                console.error('❌ AdMob Show Error:', error);
                this.state.isLoading = false;

                // Clear pending promises
                this.state.pendingRewardResolve = null;
                this.state.pendingRewardReject = null;

                // Fallback to mock ad
                const mockResult = await this.showMockAd('Native Ad Failed - Mock Fallback');
                resolve(mockResult);
            }
        });
    },

    // Web/Mock Logic
    async showWebRewardedAd() {
        if (this.config.testMode || !this.config.webAdUnitId) {
            return this.showMockAd('Rewarded (Web Simulation)');
        }

        // Real AdSense Rewarded (H5 Games API) is complex.
        // Standard AdSense (adsbygoogle) is for display banners mostly.
        // We will stick to Mock for Web for now unless H5 API is specifically requested.
        return this.showMockAd('Rewarded (Mock for Web)');
    },

    // Mock Ad UI
    showMockAd(type) {
        return new Promise((resolve) => {
            const adOverlay = document.createElement('div');
            adOverlay.className = 'ad-mock-overlay';
            adOverlay.innerHTML = `
                <div class="ad-mock-content">
                    <div class="ad-badge">TEST AD</div>
                    <h3>${type}</h3>
                    <p>Watching this video earns you a hint!</p>
                    <div class="ad-video-placeholder">▶️ Video Playing...</div>
                    <div class="ad-timer">Reward in <span id="ad-timer-countdown">5</span>s</div>
                    <button id="ad-close-btn" class="btn btn-secondary" disabled>Close</button>
                </div>
            `;

            // Quick Styles for overlay
            adOverlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);z-index:9999;display:flex;align-items:center;justify-content:center;color:white;';
            const content = adOverlay.querySelector('.ad-mock-content');
            content.style.cssText = 'text-align:center;background:#222;padding:25px;border-radius:15px;width:90%;max-width:350px;';
            const vid = adOverlay.querySelector('.ad-video-placeholder');
            vid.style.cssText = 'background:#000;height:150px;display:flex;align-items:center;justify-content:center;margin:15px 0;border-radius:8px;color:#888;';

            document.body.appendChild(adOverlay);

            let seconds = 5;
            const timerEl = document.getElementById('ad-timer-countdown');
            const btn = document.getElementById('ad-close-btn');

            const interval = setInterval(() => {
                seconds--;
                if (timerEl) timerEl.textContent = seconds;
                if (seconds <= 0) {
                    clearInterval(interval);
                    if (btn) {
                        btn.disabled = false;
                        btn.textContent = 'Close & Collect Reward';
                        btn.classList.add('btn-primary');
                        btn.classList.remove('btn-secondary');
                    }
                }
            }, 1000);

            btn.addEventListener('click', () => {
                adOverlay.remove();
                resolve(true);
            });
        });
    }
};

// Initialize on load if possible
document.addEventListener('deviceready', () => {
    // For Cordova/Capacitor specifics
    AdsManager.init();
});
// Also try on DOMContentLoaded for web
document.addEventListener('DOMContentLoaded', () => {
    AdsManager.init();
});
