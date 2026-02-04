// ============================================
// MindSpark - Hint System with Streak Economy
// ============================================

const HintSystem = {
    HINT_COST: 3,           // Cost in streak points per hint
    AD_REWARD: 3,           // v2.0: Reduced from 5 to 3 (exactly 1 hint)
    MAX_HINTS_PER_PUZZLE: 2, // Maximum hints allowed per puzzle
    MAX_DAILY_ADS: 6,       // v2.0: Maximum ads per day
    PUZZLES_BETWEEN_ADS: 5, // v2.0: Must solve 5 puzzles between ads

    init() {
        this.currentPuzzleHintsUsed = 0;
        console.log('💡 Hint System v2.0 initialized');
    },

    // Check if user can afford a hint
    canAffordHint() {
        const streakPoints = this.getStreakPoints();
        return streakPoints >= this.HINT_COST;
    },

    // Get current streak points (same as streak count)
    // Get current streak points (same as streak count)
    getStreakPoints() {
        const progress = ProgressManager.getProgress();
        return progress.currentStreak || 0;
    },

    // Check if hints are available for current puzzle
    canUseHint() {
        return this.currentPuzzleHintsUsed < this.MAX_HINTS_PER_PUZZLE;
    },

    // Use a hint (deduct streak points)
    useHint(puzzle) {
        if (!this.canUseHint()) {
            return {
                success: false,
                error: `Maximum ${this.MAX_HINTS_PER_PUZZLE} hints per puzzle reached!`
            };
        }

        if (!this.canAffordHint()) {
            return {
                success: false,
                error: 'Not enough streak points!',
                showAdOption: true
            };
        }

        // Deduct streak points
        this.deductStreakPoints(this.HINT_COST);
        this.currentPuzzleHintsUsed++;

        // Generate hint based on puzzle type
        const hint = this.generateHint(puzzle, this.currentPuzzleHintsUsed);

        // Track hint usage
        // Track hint usage
        if (typeof Analytics !== 'undefined' && Analytics.trackHintUsed) {
            Analytics.trackHintUsed(puzzle.id, this.currentPuzzleHintsUsed);
        }

        return {
            success: true,
            hint: hint,
            pointsRemaining: this.getStreakPoints(),
            hintsRemaining: this.MAX_HINTS_PER_PUZZLE - this.currentPuzzleHintsUsed
        };
    },

    // Generate contextual hint based on puzzle type
    generateHint(puzzle, hintLevel) {
        const hints = {
            // Pattern puzzles
            pattern: [
                "Look for a mathematical relationship between consecutive numbers.",
                `The pattern involves ${this.getPatternType(puzzle)}. Focus on how each number relates to the next.`
            ],

            // Odd one out puzzles
            odd_one_out: [
                "Think about what category or property the items belong to.",
                `Consider: ${this.getOddOneOutCategory(puzzle)}. Which item doesn't fit?`
            ],

            // Cause and effect puzzles
            cause_effect: [
                "Think about the logical consequences of the action described.",
                "Consider real-world outcomes and common sense reasoning."
            ],

            // Error detection puzzles
            error_detection: [
                "Look at the sequence of steps carefully. Is anything out of order?",
                "Think about what should logically come before or after each step."
            ],

            // Best choice puzzles
            best_choice: [
                "Consider the constraints and what's actually possible.",
                "Think about the most practical and logical option given the situation."
            ]
        };

        const puzzleHints = hints[puzzle.type] || [
            "Read the question carefully and eliminate obviously wrong answers.",
            "Think step by step and use logical reasoning."
        ];

        return puzzleHints[hintLevel - 1] || puzzleHints[puzzleHints.length - 1];
    },

    // Helper: Detect pattern type
    getPatternType(puzzle) {
        const content = puzzle.content.toLowerCase();
        if (content.includes('×') || content.includes('double')) return 'multiplication';
        if (content.includes('+')) return 'addition';
        if (content.includes('square') || content.includes('²')) return 'squares';
        if (content.includes('cube') || content.includes('³')) return 'cubes';
        return 'a mathematical operation';
    },

    // Helper: Get odd one out category
    getOddOneOutCategory(puzzle) {
        const content = puzzle.content.toLowerCase();
        if (content.includes('dog') || content.includes('cat')) return 'animals vs. objects';
        if (content.includes('red') || content.includes('blue')) return 'colors vs. shapes';
        if (content.includes('car') || content.includes('bus')) return 'vehicles vs. other items';
        return 'different categories';
    },

    // Deduct streak points
    deductStreakPoints(amount) {
        const progress = ProgressManager.getProgress();
        progress.currentStreak = Math.max(0, progress.currentStreak - amount);
        ProgressManager.saveProgress(progress);

        // Update UI if on home screen
        if (typeof App !== 'undefined' && App.loadHomeScreen) {
            App.loadHomeScreen();
        }
    },

    // Add streak points (from ad watch)
    addStreakPoints(amount) {
        const progress = ProgressManager.getProgress();
        progress.currentStreak = (progress.currentStreak || 0) + amount;
        ProgressManager.saveProgress(progress);

        // Update UI
        if (typeof App !== 'undefined' && App.loadHomeScreen) {
            App.loadHomeScreen();
        }

        // Track ad watch
        AnalyticsManager.trackAdWatched(amount);
    },

    // Reset hints for new puzzle
    resetForNewPuzzle() {
        this.currentPuzzleHintsUsed = 0;
    },

    // v2.0: Check if user can watch an ad
    canWatchAd() {
        const progress = ProgressManager.getProgress();

        // Safety check: Initialize adEconomy if it doesn't exist (for existing users)
        if (!progress.adEconomy) {
            progress.adEconomy = {
                adsWatchedToday: 0,
                puzzlesSinceLastAd: 0,
                lastAdDate: null,
                totalAdsWatched: 0
            };
            ProgressManager.saveProgress(progress);
        }

        const adEconomy = progress.adEconomy;

        // Check midnight rollover
        this.checkMidnightRollover();

        // Check daily limit
        if (adEconomy.adsWatchedToday >= this.MAX_DAILY_ADS) {
            return {
                can: false,
                reason: `Daily ad limit reached (${this.MAX_DAILY_ADS}/${this.MAX_DAILY_ADS})`
            };
        }

        // Check puzzle cooldown
        if (adEconomy.puzzlesSinceLastAd < this.PUZZLES_BETWEEN_ADS) {
            const needed = this.PUZZLES_BETWEEN_ADS - adEconomy.puzzlesSinceLastAd;
            return {
                can: false,
                reason: `Solve ${needed} more puzzle${needed > 1 ? 's' : ''} first`
            };
        }

        return {
            can: true,
            reason: `Watch ad for +${this.AD_REWARD} points`
        };
    },

    // v2.0: Check and reset daily counters at midnight
    checkMidnightRollover() {
        const progress = ProgressManager.getProgress();
        const today = new Date().toDateString();

        // Safety check: Initialize adEconomy if it doesn't exist
        if (!progress.adEconomy) {
            progress.adEconomy = {
                adsWatchedToday: 0,
                puzzlesSinceLastAd: 0,
                lastAdDate: today,
                totalAdsWatched: 0
            };
            ProgressManager.saveProgress(progress);
            return;
        }

        if (progress.adEconomy.lastAdDate !== today) {
            // New day - reset daily counters
            progress.adEconomy.adsWatchedToday = 0;
            progress.adEconomy.lastAdDate = today;
            ProgressManager.saveProgress(progress);
        }
    },

    // v2.0: Track puzzle solved (for ad cooldown)
    onPuzzleSolved() {
        const progress = ProgressManager.getProgress();

        // Safety check: Initialize adEconomy if it doesn't exist (for existing users)
        if (!progress.adEconomy) {
            progress.adEconomy = {
                adsWatchedToday: 0,
                puzzlesSinceLastAd: 0,
                lastAdDate: null,
                totalAdsWatched: 0
            };
        }

        progress.adEconomy.puzzlesSinceLastAd++;
        ProgressManager.saveProgress(progress);
    },

    // Watch ad to earn streak points
    watchAdForStreaks() {
        return new Promise((resolve) => {
            // v2.0: Check if ad can be watched
            const adCheck = this.canWatchAd();
            if (!adCheck.can) {
                resolve({
                    success: false,
                    error: adCheck.reason
                });
                return;
            }

            // Show ad loading state
            this.showAdLoadingState();

            // Simulate ad watch (in production, integrate with AdMob or Google AdSense)
            // For now, we'll use a simulated ad experience
            this.simulateAdWatch().then(() => {
                // Award streak points
                this.addStreakPoints(this.AD_REWARD);

                // v2.0: Track ad watch
                const progress = ProgressManager.getProgress();
                progress.adEconomy.adsWatchedToday++;
                progress.adEconomy.puzzlesSinceLastAd = 0; // Reset cooldown
                progress.adEconomy.totalAdsWatched++;
                ProgressManager.saveProgress(progress);

                // Show success notification
                this.showAdRewardNotification(this.AD_REWARD);

                resolve({
                    success: true,
                    pointsEarned: this.AD_REWARD,
                    totalPoints: this.getStreakPoints()
                });
            });
        });
    },

    // Simulate ad watch (replace with real ad SDK in production)
    simulateAdWatch() {
        return new Promise((resolve) => {
            // In production, this would be:
            // - Google AdMob for mobile apps
            // - Google AdSense for web
            // - Other ad networks

            // For demo, show a countdown
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
    },

    // Create ad watching dialog
    createAdDialog(countdown) {
        const dialog = document.createElement('div');
        dialog.className = 'ad-dialog-overlay';
        dialog.innerHTML = `
            <div class="ad-dialog">
                <div class="ad-header">
                    <h3>📺 Watch Ad</h3>
                    <p>Earn ${this.AD_REWARD} Streak Points</p>
                </div>
                <div class="ad-content">
                    <div class="ad-placeholder">
                        <div class="ad-icon">📺</div>
                        <p>Advertisement</p>
                        <div class="ad-countdown" id="ad-countdown">${countdown}</div>
                        <p class="ad-countdown-label">seconds remaining</p>
                    </div>
                </div>
                <div class="ad-footer">
                    <p>Thank you for supporting MindSpark! 💜</p>
                </div>
            </div>
        `;

        document.body.appendChild(dialog);
        return dialog;
    },

    // Update ad countdown
    updateAdCountdown(dialog, countdown) {
        const countdownEl = dialog.querySelector('#ad-countdown');
        if (countdownEl) {
            countdownEl.textContent = countdown;

            if (countdown <= 0) {
                countdownEl.textContent = '✓';
                countdownEl.style.color = 'var(--color-success)';
            }
        }
    },

    // Show ad loading state
    showAdLoadingState() {
        // Could show a loading spinner
        SoundManager.playClick();
    },

    // Show ad reward notification
    showAdRewardNotification(points) {
        const notification = document.createElement('div');
        notification.className = 'ad-reward-notification';
        notification.innerHTML = `
            <div class="ad-reward-content">
                <span class="ad-reward-icon">🎉</span>
                <span class="ad-reward-text">+${points} Streak Points!</span>
            </div>
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        SoundManager.playMilestone();
        SoundManager.vibrateSuccess();

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    },

    // Get hint button state
    getHintButtonState() {
        const canUse = this.canUseHint();
        const canAfford = this.canAffordHint();
        const streakPoints = this.getStreakPoints();

        return {
            enabled: canUse && canAfford,
            canUse: canUse,
            canAfford: canAfford,
            cost: this.HINT_COST,
            streakPoints: streakPoints,
            hintsUsed: this.currentPuzzleHintsUsed,
            maxHints: this.MAX_HINTS_PER_PUZZLE,
            message: this.getHintButtonMessage(canUse, canAfford, streakPoints)
        };
    },

    // Get hint button message
    getHintButtonMessage(canUse, canAfford, streakPoints) {
        if (!canUse) {
            return `Maximum ${this.MAX_HINTS_PER_PUZZLE} hints used`;
        }
        if (!canAfford) {
            return `Need ${this.HINT_COST} streak points (you have ${streakPoints})`;
        }
        return `Use hint (${this.HINT_COST} streak points)`;
    }
};

// Make globally accessible
window.HintSystem = HintSystem;

// Initialize on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => HintSystem.init());
} else {
    HintSystem.init();
}
