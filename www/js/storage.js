// ============================================
// MindSpark - Local Storage Manager
// ============================================

const STORAGE_KEYS = {
    PROGRESS: 'mindspark_progress',
    ANALYTICS: 'mindspark_analytics',
    PREFERENCES: 'mindspark_preferences',
    COMPLETED_PUZZLES: 'mindspark_completed',
    DAILY_CHALLENGE: 'mindspark_daily_challenge'
};

// Storage wrapper with error handling
const Storage = {
    // Save data to localStorage
    save(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Storage save error:', error);
            return false;
        }
    },

    // Load data from localStorage
    load(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error('Storage load error:', error);
            return defaultValue;
        }
    },

    // Remove data from localStorage
    remove(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('Storage remove error:', error);
            return false;
        }
    },

    // Clear all MindSpark data
    clearAll() {
        Object.values(STORAGE_KEYS).forEach(key => {
            this.remove(key);
        });
    }
};

// ============================================
// Progress Management
// ============================================

const ProgressManager = {
    // Initialize or load progress
    getProgress() {
        const defaultProgress = {
            totalPuzzlesSolved: 0,
            currentStreak: 0,
            longestStreak: 0,
            lastPlayedDate: null,
            accuracyByDifficulty: {
                beginner: { correct: 0, total: 0 },
                intermediate: { correct: 0, total: 0 },
                expert: { correct: 0, total: 0 }
            },
            puzzlesByType: {
                pattern: 0,
                odd_one_out: 0,
                cause_effect: 0,
                error_detection: 0,
                best_choice: 0,
                logic: 0,
                math: 0
            },
            // v2.0: Ad Economy System
            adEconomy: {
                adsWatchedToday: 0,
                puzzlesSinceLastAd: 0,
                lastAdDate: null,
                totalAdsWatched: 0
            },
            // v2.0: Streak Protection (Freeze System)
            streakProtection: {
                freezesAvailable: 0,
                totalFreezesEarned: 0,
                totalFreezesUsed: 0
            },
            // v2.0: Session Tracking
            sessionTracking: {
                lastPuzzleTime: null,
                puzzlesThisSession: 0,
                sessionStartTime: null
            },
            // v2.0: Permanent Bonuses
            permanentBonuses: {
                sessionStarterBonus: 2, // Increases to 3 at 30-day streak
                badges: []
            },
            // v2.0: Session Stats
            currentSession: {
                startTime: null,
                puzzlesAttempted: 0,
                puzzlesCleared: 0,
                puzzlesFailed: 0,
                bestStreak: 0,
                active: false
            }
        };

        const progress = Storage.load(STORAGE_KEYS.PROGRESS, defaultProgress);

        // v2.0: Migrate old data if needed
        return this.migrateToV2(progress);
    },

    // Save progress
    saveProgress(progress) {
        return Storage.save(STORAGE_KEYS.PROGRESS, progress);
    },

    // v2.0: Migrate old data to v2.0 structure
    migrateToV2(progress) {
        let migrated = false;

        // Add adEconomy if missing
        if (!progress.adEconomy) {
            progress.adEconomy = {
                adsWatchedToday: 0,
                puzzlesSinceLastAd: 0,
                lastAdDate: null,
                totalAdsWatched: 0
            };
            migrated = true;
        }

        // Add streakProtection if missing
        if (!progress.streakProtection) {
            progress.streakProtection = {
                freezesAvailable: 0,
                totalFreezesEarned: 0,
                totalFreezesUsed: 0
            };
            migrated = true;
        }

        // Add sessionTracking if missing
        if (!progress.sessionTracking) {
            progress.sessionTracking = {
                lastPuzzleTime: null,
                puzzlesThisSession: 0,
                sessionStartTime: null
            };
            migrated = true;
        }

        // Add permanentBonuses if missing
        if (!progress.permanentBonuses) {
            progress.permanentBonuses = {
                sessionStarterBonus: 2,
                badges: []
            };
            migrated = true;
        }

        // Add currentSession if missing
        if (!progress.currentSession) {
            progress.currentSession = {
                startTime: null,
                puzzlesAttempted: 0,
                puzzlesCleared: 0,
                puzzlesFailed: 0,
                bestStreak: 0,
                active: false
            };
            migrated = true;
        }

        // Add new puzzle types if missing
        if (progress.puzzlesByType && !progress.puzzlesByType.logic) {
            progress.puzzlesByType.logic = 0;
            progress.puzzlesByType.math = 0;
            migrated = true;
        }

        // Save if migrated
        if (migrated) {
            this.saveProgress(progress);

        }

        return progress;
    },

    // Update streak based on current date
    updateStreak() {
        const progress = this.getProgress();
        const today = new Date().toDateString();
        const lastPlayed = progress.lastPlayedDate;

        if (!lastPlayed) {
            // First time playing
            progress.currentStreak = 1;
            progress.longestStreak = 1;
        } else {
            const lastDate = new Date(lastPlayed);
            const todayDate = new Date(today);
            const diffTime = todayDate - lastDate;
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays === 0) {
                // Same day, no change
                return progress;
            } else if (diffDays === 1) {
                // Consecutive day
                progress.currentStreak += 1;
                progress.longestStreak = Math.max(progress.longestStreak, progress.currentStreak);

                // v2.0: Award streak freeze every 7 days
                if (progress.currentStreak % 7 === 0 && progress.currentStreak > 0) {
                    if (progress.streakProtection.freezesAvailable < 3) {
                        progress.streakProtection.freezesAvailable++;
                        progress.streakProtection.totalFreezesEarned++;

                        // Show reward notification
                        if (typeof App !== 'undefined' && App.showStreakFreezeReward) {
                            App.showStreakFreezeReward();
                        }
                    }
                }
            } else {
                // Days skipped - check for freeze protection
                const daysMissed = diffDays - 1;

                if (progress.streakProtection.freezesAvailable >= daysMissed) {
                    // Use freezes to protect streak
                    progress.streakProtection.freezesAvailable -= daysMissed;
                    progress.streakProtection.totalFreezesUsed += daysMissed;

                    // Show protection notification
                    if (typeof App !== 'undefined' && App.showStreakProtected) {
                        App.showStreakProtected(daysMissed);
                    }
                    // Streak preserved!
                } else {
                    // Not enough freezes - reset to 1
                    progress.currentStreak = 1;

                    // Show reset notification
                    if (typeof App !== 'undefined' && App.showStreakReset) {
                        App.showStreakReset();
                    }
                }
            }
        }

        progress.lastPlayedDate = today;
        this.saveProgress(progress);
        return progress;
    },

    // Record puzzle completion
    recordPuzzle(puzzleId, isCorrect, difficulty, type, timeTaken) {
        const progress = this.getProgress();

        // Update total
        progress.totalPuzzlesSolved += 1;

        // Update accuracy by difficulty
        if (progress.accuracyByDifficulty[difficulty]) {
            progress.accuracyByDifficulty[difficulty].total += 1;
            if (isCorrect) {
                progress.accuracyByDifficulty[difficulty].correct += 1;
            }
        }

        // Update puzzles by type
        if (progress.puzzlesByType[type] !== undefined) {
            progress.puzzlesByType[type] += 1;
        }

        // v2.0: Update puzzle streak with soft reset
        const oldStreak = progress.currentStreak;
        if (isCorrect) {
            // Correct answer: increment streak
            progress.currentStreak += 1;
            progress.longestStreak = Math.max(progress.longestStreak, progress.currentStreak);
        } else {
            // v2.0: Soft reset formula
            let newStreak;
            if (oldStreak >= 10) {
                newStreak = Math.floor(oldStreak * 0.5); // Keep 50%
            } else if (oldStreak >= 5) {
                newStreak = Math.floor(oldStreak * 0.4); // Keep 40%
            } else {
                newStreak = 0; // Full reset below 5
            }
            progress.currentStreak = newStreak;

            // Store reset info for UI message
            progress._lastResetInfo = {
                oldStreak: oldStreak,
                newStreak: newStreak,
                wasSoftReset: oldStreak >= 5
            };

            // v2.0: Show soft reset notification
            if (typeof App !== 'undefined' && App.showSoftResetNotification) {
                App.showSoftResetNotification(oldStreak, newStreak);
            }
        }

        // v2.0: Track puzzle for ad cooldown
        if (typeof HintSystem !== 'undefined') {
            HintSystem.onPuzzleSolved();
        }

        // v2.0: Update session tracking
        progress.sessionTracking.lastPuzzleTime = Date.now();
        progress.sessionTracking.puzzlesThisSession += 1;

        // Update day streak
        this.updateStreak();

        this.saveProgress(progress);

        // Also track completed puzzle IDs
        this.addCompletedPuzzle(puzzleId);

        return progress;
    },

    // Get completed puzzle IDs
    getCompletedPuzzles() {
        return Storage.load(STORAGE_KEYS.COMPLETED_PUZZLES, []);
    },

    // Add completed puzzle ID
    addCompletedPuzzle(puzzleId) {
        const completed = this.getCompletedPuzzles();
        if (!completed.includes(puzzleId)) {
            completed.push(puzzleId);
            Storage.save(STORAGE_KEYS.COMPLETED_PUZZLES, completed);
        }
    },

    // Reset progress (for testing or user request)
    resetProgress() {
        Storage.remove(STORAGE_KEYS.PROGRESS);
        Storage.remove(STORAGE_KEYS.COMPLETED_PUZZLES);
    }
};

// ============================================
// Preferences Management
// ============================================

const PreferencesManager = {
    // Get user preferences
    getPreferences() {
        const defaultPrefs = {
            lastMode: null,
            lastDifficulty: null,
            soundEnabled: true,
            animationsEnabled: true
        };

        return Storage.load(STORAGE_KEYS.PREFERENCES, defaultPrefs);
    },

    // Save preferences
    savePreferences(prefs) {
        return Storage.save(STORAGE_KEYS.PREFERENCES, prefs);
    },

    // Update specific preference
    updatePreference(key, value) {
        const prefs = this.getPreferences();
        prefs[key] = value;
        this.savePreferences(prefs);
    }
};

// ============================================
// Daily Challenge Management
// ============================================

const DailyChallengeManager = {
    // Check if daily challenge is completed today
    isCompletedToday() {
        const data = Storage.load(STORAGE_KEYS.DAILY_CHALLENGE, {});
        const today = new Date().toDateString();
        return data.completedDate === today;
    },

    // Mark daily challenge as completed
    markCompleted(puzzleId, isCorrect, timeTaken) {
        const today = new Date().toDateString();
        const data = {
            completedDate: today,
            puzzleId: puzzleId,
            isCorrect: isCorrect,
            timeTaken: timeTaken
        };
        Storage.save(STORAGE_KEYS.DAILY_CHALLENGE, data);
    },

    // Get daily challenge data
    getDailyChallengeData() {
        return Storage.load(STORAGE_KEYS.DAILY_CHALLENGE, {});
    }
};
