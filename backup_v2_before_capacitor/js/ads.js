// ============================================
// MindSpark - Ad Management System (AdSense)
// ============================================

const AdsManager = {
    // Configuration
    config: {
        publisherId: '', // User to provide: ca-pub-XXXXXXXXXXXXXXXX
        testMode: true,  // Set to false when deploying for real revenue
        interstitialInterval: 5, // Show ad every 5 puzzles (fallback if HintSystem logic needs it)
    },

    state: {
        isInitialized: false,
        scriptLoaded: false,
        lastAdTime: 0,
        adsWatchedSession: 0
    },

    // Initialize AdSense
    init() {
        if (this.state.isInitialized) return;

        // Check if publisher ID is configured
        if (!this.config.publisherId || this.config.publisherId === '') {
            console.log('⚠️ AdsManager: No Publisher ID configured. Running in MOCK mode.');
            this.config.testMode = true;
        }

        if (!this.config.testMode) {
            this.loadAdSenseScript();
        }

        this.state.isInitialized = true;
        console.log('✅ AdsManager: Initialized');
    },

    // Load Google AdSense Script
    loadAdSenseScript() {
        try {
            const script = document.createElement('script');
            script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${this.config.publisherId}`;
            script.async = true;
            script.crossOrigin = 'anonymous';
            script.onload = () => {
                this.state.scriptLoaded = true;
                console.log('✅ AdsManager: AdSense Script Loaded');
            };
            script.onerror = (err) => {
                console.error('❌ AdsManager: Failed to load AdSense', err);
            };
            document.head.appendChild(script);
        } catch (e) {
            console.error('AdsManager: Error inserting script', e);
        }
    },

    // Show Interstitial Ad (Between Levels)
    // Returns a promise that resolves when ad is closed or fails
    async showInterstitialAd() {
        console.log('🎬 AdsManager: Requesting Interstitial Ad');

        if (this.config.testMode) {
            return this.showMockAd('Interstitial');
        }

        // Real AdSense implementation for H5 Games API or similar would go here
        // For now, standard AdSense doesn't support programmatic interstitials effectively 
        // without the specific Games API. We will use a Mock implementation 
        // that simulates the experience until the specific ad unit code is added.

        // Fallback to mock for now
        return this.showMockAd('AdSense Placeholder');
    },

    // Show Rewarded Ad (For Hints/Bonuses)
    async showRewardedAd() {
        console.log('🎁 AdsManager: Requesting Rewarded Ad');

        if (this.config.testMode) {
            return this.showMockAd('Rewarded');
        }

        // Placeholder for real Rewarded Video integration
        return this.showMockAd('Rewarded (AdSense)');
    },

    // Mock Ad UI (Overlay)
    showMockAd(type) {
        return new Promise((resolve) => {
            const adOverlay = document.createElement('div');
            adOverlay.className = 'ad-mock-overlay';
            adOverlay.innerHTML = `
                <div class="ad-mock-content">
                    <div class="ad-badge">TEST AD mode</div>
                    <h3>${type} Advertisement</h3>
                    <p>This is a placeholder for a real ad.</p>
                    <div class="ad-timer">Ad closing in <span id="ad-timer-countdown">3</span>...</div>
                    <button id="ad-close-btn" class="btn btn-secondary" disabled>Close Ad</button>
                    <div class="ad-progress-bar"><div class="ad-progress-fill"></div></div>
                </div>
            `;

            // Styles
            adOverlay.style.cssText = `
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(0,0,0,0.95); z-index: 9999;
                display: flex; align-items: center; justify-content: center;
                color: white; font-family: sans-serif;
            `;

            const content = adOverlay.querySelector('.ad-mock-content');
            content.style.cssText = `
                text-align: center; max-width: 300px; padding: 20px;
                background: #333; border-radius: 12px; border: 1px solid #555;
            `;

            document.body.appendChild(adOverlay);

            // Countdown Logic
            let seconds = 3;
            const countdownEl = document.getElementById('ad-timer-countdown');
            const closeBtn = document.getElementById('ad-close-btn');

            const timer = setInterval(() => {
                seconds--;
                if (countdownEl) countdownEl.textContent = seconds;

                if (seconds <= 0) {
                    clearInterval(timer);
                    if (countdownEl) countdownEl.parentElement.textContent = 'Reward Earned!';
                    closeBtn.disabled = false;
                    closeBtn.classList.remove('btn-secondary');
                    closeBtn.classList.add('btn-primary');
                    closeBtn.textContent = 'Close & Get Reward';
                }
            }, 1000);

            // Close Logic
            closeBtn.addEventListener('click', () => {
                this.state.adsWatchedSession++;
                adOverlay.remove();
                resolve(true); // Success
            });
        });
    },

    // Set Publisher ID manually (called from Settings/Console)
    setPublisherId(id) {
        this.config.publisherId = id;
        this.config.testMode = false;
        this.loadAdSenseScript();

        // Save to local storage for persistence
        localStorage.setItem('mindspark_publisher_id', id);
        console.log(`✅ AdsManager: Publisher ID set to ${id}`);
    }
};

// Check for saved publisher ID on load
const savedPubId = localStorage.getItem('mindspark_publisher_id');
if (savedPubId) {
    AdsManager.config.publisherId = savedPubId;
    AdsManager.config.testMode = false;
}
