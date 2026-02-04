// ============================================
// MindSpark - Game Engine
// ============================================

const GameEngine = {
    // Game state
    state: {
        currentScreen: 'home',
        selectedMode: null, // 'timed' or 'relaxed'
        selectedDifficulty: null, // 'beginner', 'intermediate', 'expert'
        selectedCategory: null, // null (all), 'pattern', 'logic', 'math'
        currentPuzzle: null,
        selectedAnswer: null,
        timer: null,
        timeRemaining: 0,
        timeElapsed: 0,
        startTime: null,
        isDailyChallenge: false,
        sessionPuzzles: [] // Track puzzles played this session
    },

    // Timer settings (in seconds)
    timerDurations: {
        beginner: 60,
        intermediate: 90,
        expert: 120
    },

    // Initialize game
    init() {
        console.log('🎮 MindSpark Game Engine initialized');
        AnalyticsManager.startSession();
        this.loadState();
    },

    // Load saved state
    loadState() {
        const prefs = PreferencesManager.getPreferences();
        if (prefs.lastMode) {
            this.state.selectedMode = prefs.lastMode;
        }
        if (prefs.lastDifficulty) {
            this.state.selectedDifficulty = prefs.lastDifficulty;
        }
    },

    // Save preferences
    savePreferences() {
        PreferencesManager.updatePreference('lastMode', this.state.selectedMode);
        PreferencesManager.updatePreference('lastDifficulty', this.state.selectedDifficulty);
    },

    // Set game mode
    setMode(mode) {
        this.state.selectedMode = mode;
        this.savePreferences();
        console.log(`Mode set to: ${mode}`);
    },

    // Set difficulty
    setDifficulty(difficulty) {
        this.state.selectedDifficulty = difficulty;
        this.savePreferences();
        console.log(`Difficulty set to: ${difficulty}`);
    },

    // Set category (practice mode)
    setCategory(category) {
        this.state.selectedCategory = category;
        console.log(`Category set to: ${category}`);
    },

    // Start a new puzzle
    startPuzzle(isDailyChallenge = false) {
        this.state.isDailyChallenge = isDailyChallenge;

        let puzzle;

        if (isDailyChallenge) {
            puzzle = getDailyChallengePuzzle();
            this.state.selectedMode = 'timed'; // Daily challenge is always timed
            this.state.selectedDifficulty = puzzle.difficulty;
        } else {
            // Get random puzzle excluding already played in this session
            const excludeIds = this.state.sessionPuzzles;
            // v2.1: Support Category Filter
            const category = this.state.selectedCategory;
            puzzle = getRandomPuzzle(category, this.state.selectedDifficulty, excludeIds);

            // If all puzzles played, reset session puzzles
            if (!puzzle) {
                this.state.sessionPuzzles = [];
                puzzle = getRandomPuzzle(category, this.state.selectedDifficulty, []);
            }
        }

        if (!puzzle) {
            console.error('No puzzle available');
            return null;
        }

        this.state.currentPuzzle = puzzle;
        this.state.selectedAnswer = null;
        this.state.startTime = Date.now();
        this.state.timeElapsed = 0;

        // Add to session puzzles
        this.state.sessionPuzzles.push(puzzle.id);

        // Start timer if in timed mode
        if (this.state.selectedMode === 'timed') {
            this.startTimer();
        }

        console.log(`Started puzzle: ${puzzle.id} (${puzzle.type}, ${puzzle.difficulty})`);
        return puzzle;
    },

    // Start timer
    startTimer() {
        const duration = this.timerDurations[this.state.selectedDifficulty] || 60;
        this.state.timeRemaining = duration;

        // Clear any existing timer
        if (this.state.timer) {
            clearInterval(this.state.timer);
        }

        // Start countdown
        this.state.timer = setInterval(() => {
            this.state.timeRemaining -= 1;

            // Notify UI to update timer display
            if (window.updateTimerDisplay) {
                window.updateTimerDisplay(this.state.timeRemaining);
            }

            // Time's up
            if (this.state.timeRemaining <= 0) {
                this.stopTimer();
                if (window.handleTimeUp) {
                    window.handleTimeUp();
                }
            }
        }, 1000);
    },

    // Stop timer
    stopTimer() {
        if (this.state.timer) {
            clearInterval(this.state.timer);
            this.state.timer = null;
        }
    },

    // Select an answer
    selectAnswer(answerIndex) {
        this.state.selectedAnswer = answerIndex;
        console.log(`Answer selected: ${answerIndex}`);
    },

    // Check and award badges
    checkBadges(progress, isCorrect) {
        const badges = [
            {
                id: 'speed_demon', name: 'Speed Demon', icon: '⚡', desc: 'Solve a puzzle in under 10 seconds',
                condition: (p) => isCorrect && this.state.timeElapsed <= 10
            },
            {
                id: 'logic_master', name: 'LogicMaster', icon: '🧠', desc: 'Solve 10 Logic puzzles',
                condition: (p) => p.puzzlesByType && p.puzzlesByType.logic >= 10
            },
            {
                id: 'math_whiz', name: 'Math Whiz', icon: '🔢', desc: 'Solve 10 Math puzzles',
                condition: (p) => p.puzzlesByType && p.puzzlesByType.math >= 10
            },
            {
                id: 'pattern_pro', name: 'Pattern Pro', icon: '🧩', desc: 'Solve 10 Pattern puzzles',
                condition: (p) => p.puzzlesByType && p.puzzlesByType.pattern >= 10
            },
            {
                id: 'dedication', name: 'Dedication', icon: '📅', desc: 'Reach a 7-day streak',
                condition: (p) => p.currentStreak >= 7
            },
            {
                id: 'century', name: 'Century Club', icon: '💯', desc: 'Solve 100 puzzles total',
                condition: (p) => p.totalPuzzlesSolved >= 100
            }
        ];

        let newBadges = [];
        // Ensure badges array exists in progress snapshot (it should come from storage)
        // But we need to modify the LIVE progress object, which ProgressManager should have returned/saved.
        // Actually, ProgressManager.recordPuzzle saves it. We need to intercept or update it again.
        // Let's rely on checking the progress object passed in.

        if (!progress.permanentBonuses) {
            progress.permanentBonuses = { badges: [] };
        } else if (!progress.permanentBonuses.badges) {
            progress.permanentBonuses.badges = [];
        }

        badges.forEach(badge => {
            // Check if already owned
            const hasBadge = progress.permanentBonuses.badges.some(b => b.id === badge.id);
            if (!hasBadge) {
                if (badge.condition(progress)) {
                    const badgeObj = {
                        id: badge.id,
                        name: badge.name,
                        icon: badge.icon,
                        desc: badge.desc,
                        date: new Date().toISOString()
                    };
                    progress.permanentBonuses.badges.push(badgeObj);
                    newBadges.push(badgeObj);
                    console.log(`🏆 Badge Earned: ${badge.name}`);
                }
            }
        });

        if (newBadges.length > 0) {
            ProgressManager.saveProgress(progress);
        }

        return newBadges;
    },

    // Submit answer and get result
    submitAnswer() {
        if (this.state.selectedAnswer === null) {
            return {
                error: 'No answer selected'
            };
        }

        const puzzle = this.state.currentPuzzle;
        const isCorrect = this.state.selectedAnswer === puzzle.correctAnswer;

        // Calculate time taken
        this.state.timeElapsed = Math.floor((Date.now() - this.state.startTime) / 1000);

        // Stop timer
        this.stopTimer();

        // Record in progress
        const progress = ProgressManager.recordPuzzle(
            puzzle.id,
            isCorrect,
            puzzle.difficulty,
            puzzle.type,
            this.state.timeElapsed
        );

        // v2.1: Check Badges
        const earnedBadges = this.checkBadges(progress, isCorrect);

        // Track in analytics
        AnalyticsManager.trackPuzzleCompletion(
            puzzle.id,
            puzzle.difficulty,
            puzzle.type,
            isCorrect,
            this.state.timeElapsed
        );

        // v2.0: Check for Milestone Rewards
        if (isCorrect) {
            const streak = progress.currentStreak;
            // Define milestones: { streak: bonus }
            const MILESTONES = {
                7: 2,   // Lucky 7
                10: 3,  // Perfect 10 (Bonus points!)
                15: 3,  // 15 Streak
                20: 5,  // 20 Streak
                25: 5,  // 25 Streak
                30: 10  // Monthly Master
            };

            if (MILESTONES[streak]) {
                const bonus = MILESTONES[streak];

                // Add bonus points
                progress.currentStreak += bonus;
                ProgressManager.saveProgress(progress);

                console.log(`🎉 Milestone reached: ${streak}! Awarded +${bonus} bonus points.`);

                // Show notification in UI
                if (typeof App !== 'undefined' && App.showMilestoneReward) {
                    setTimeout(() => {
                        App.showMilestoneReward(streak, bonus);
                    }, 500); // Slight delay for effect
                }
            }
        }

        // Update streak in analytics
        AnalyticsManager.updateStreakData(progress.currentStreak, progress.longestStreak);

        // If daily challenge, mark as completed
        if (this.state.isDailyChallenge) {
            DailyChallengeManager.markCompleted(puzzle.id, isCorrect, this.state.timeElapsed);
        }

        const result = {
            isCorrect,
            correctAnswer: puzzle.correctAnswer,
            selectedAnswer: this.state.selectedAnswer,
            explanation: puzzle.explanation,
            timeTaken: this.state.timeElapsed,
            currentStreak: progress.currentStreak,
            totalPuzzlesSolved: progress.totalPuzzlesSolved,
            earnedBadges: earnedBadges
        };

        console.log('Puzzle result:', result);
        return result;
    },

    // Get current puzzle
    getCurrentPuzzle() {
        return this.state.currentPuzzle;
    },

    // Get progress stats
    getProgressStats() {
        return ProgressManager.getProgress();
    },

    // Get analytics summary
    getAnalyticsSummary() {
        return AnalyticsManager.getSummaryReport();
    },

    // Check if daily challenge is available
    isDailyChallengeAvailable() {
        return !DailyChallengeManager.isCompletedToday();
    },

    // Get encouraging message based on result
    getEncouragingMessage(isCorrect, streak) {
        if (isCorrect) {
            const messages = [
                "Brilliant thinking! 🌟",
                "You nailed it! 🎯",
                "Excellent reasoning! 💡",
                "Perfect logic! ✨",
                "Outstanding! 🚀",
                "You're on fire! 🔥",
                "Superb analysis! 🧠",
                "Well done! 🎉"
            ];

            if (streak >= 5) {
                return `${streak} in a row! You're unstoppable! 🔥`;
            } else if (streak >= 3) {
                return `${messages[Math.floor(Math.random() * messages.length)]} ${streak} streak!`;
            } else {
                return messages[Math.floor(Math.random() * messages.length)];
            }
        } else {
            const messages = [
                "Good try! Learn and grow! 🌱",
                "Every mistake is a lesson! 📚",
                "Keep thinking, you're improving! 💪",
                "Great effort! Try another! 🎯",
                "Learning is a journey! 🚀",
                "You're getting better! ⭐",
                "Nice attempt! Keep going! 🌟",
                "Progress over perfection! 💡"
            ];
            return messages[Math.floor(Math.random() * messages.length)];
        }
    },

    // Format time for display
    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
    },

    // Reset game state (for new game)
    resetGameState() {
        this.stopTimer();
        this.state.currentPuzzle = null;
        this.state.selectedAnswer = null;
        this.state.timeElapsed = 0;
        this.state.timeRemaining = 0;
        this.state.startTime = null;
    },

    // Get difficulty label
    getDifficultyLabel(difficulty) {
        const labels = {
            beginner: 'Beginner',
            intermediate: 'Intermediate',
            expert: 'Expert'
        };
        return labels[difficulty] || difficulty;
    },

    // Get puzzle type label
    getPuzzleTypeLabel(type) {
        const labels = {
            pattern: 'Pattern Completion',
            odd_one_out: 'Odd One Out',
            cause_effect: 'Cause → Effect',
            error_detection: 'Error Detection',
            best_choice: 'Best Choice',
            logic: 'Logic Puzzle',
            math: 'Math Puzzle'
        };
        return labels[type] || type;
    }
};
