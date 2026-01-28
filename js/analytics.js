// ============================================
// MindSpark - Analytics Tracker
// ============================================

const AnalyticsManager = {
    // Initialize analytics data structure
    getAnalytics() {
        const defaultAnalytics = {
            sessions: [],
            dailyStats: {},
            totalPuzzlesCompleted: 0,
            totalTimeSpent: 0,
            accuracyByDifficulty: {
                beginner: { correct: 0, total: 0, avgTime: 0 },
                intermediate: { correct: 0, total: 0, avgTime: 0 },
                expert: { correct: 0, total: 0, avgTime: 0 }
            },
            streakData: {
                currentStreak: 0,
                longestStreak: 0,
                streakHistory: []
            },
            lastVisit: null
        };

        return Storage.load(STORAGE_KEYS.ANALYTICS, defaultAnalytics);
    },

    // Save analytics
    saveAnalytics(analytics) {
        return Storage.save(STORAGE_KEYS.ANALYTICS, analytics);
    },

    // Track session start
    startSession() {
        const analytics = this.getAnalytics();
        const now = new Date();
        const today = now.toDateString();

        // Check if this is a new day
        const isNewDay = analytics.lastVisit !== today;

        if (isNewDay) {
            // Initialize daily stats if not exists
            if (!analytics.dailyStats[today]) {
                analytics.dailyStats[today] = {
                    puzzlesCompleted: 0,
                    correctAnswers: 0,
                    totalTime: 0,
                    sessionCount: 0
                };
            }
            analytics.dailyStats[today].sessionCount += 1;
        }

        // Create new session
        const session = {
            startTime: now.toISOString(),
            endTime: null,
            puzzlesPlayed: 0,
            date: today
        };

        analytics.sessions.push(session);
        analytics.lastVisit = today;

        this.saveAnalytics(analytics);

        return session;
    },

    // Track puzzle completion
    trackPuzzleCompletion(puzzleId, difficulty, type, isCorrect, timeTaken) {
        const analytics = this.getAnalytics();
        const today = new Date().toDateString();

        // Update total puzzles
        analytics.totalPuzzlesCompleted += 1;
        analytics.totalTimeSpent += timeTaken;

        // Update accuracy by difficulty
        if (analytics.accuracyByDifficulty[difficulty]) {
            const diffStats = analytics.accuracyByDifficulty[difficulty];
            diffStats.total += 1;
            if (isCorrect) {
                diffStats.correct += 1;
            }

            // Update average time
            diffStats.avgTime = ((diffStats.avgTime * (diffStats.total - 1)) + timeTaken) / diffStats.total;
        }

        // Update daily stats
        if (!analytics.dailyStats[today]) {
            analytics.dailyStats[today] = {
                puzzlesCompleted: 0,
                correctAnswers: 0,
                totalTime: 0,
                sessionCount: 1
            };
        }

        analytics.dailyStats[today].puzzlesCompleted += 1;
        analytics.dailyStats[today].totalTime += timeTaken;
        if (isCorrect) {
            analytics.dailyStats[today].correctAnswers += 1;
        }

        // Update current session
        if (analytics.sessions.length > 0) {
            const currentSession = analytics.sessions[analytics.sessions.length - 1];
            currentSession.puzzlesPlayed += 1;
            currentSession.endTime = new Date().toISOString();
        }

        this.saveAnalytics(analytics);

        return analytics;
    },

    // Update streak data
    updateStreakData(currentStreak, longestStreak) {
        const analytics = this.getAnalytics();
        analytics.streakData.currentStreak = currentStreak;
        analytics.streakData.longestStreak = longestStreak;

        const today = new Date().toDateString();
        analytics.streakData.streakHistory.push({
            date: today,
            streak: currentStreak
        });

        // Keep only last 30 days of streak history
        if (analytics.streakData.streakHistory.length > 30) {
            analytics.streakData.streakHistory = analytics.streakData.streakHistory.slice(-30);
        }

        this.saveAnalytics(analytics);
    },

    // Get daily active users (simplified for client-side)
    getDailyActiveUsers(days = 7) {
        const analytics = this.getAnalytics();
        const dates = Object.keys(analytics.dailyStats).sort().slice(-days);

        return dates.map(date => ({
            date,
            active: analytics.dailyStats[date].sessionCount > 0
        }));
    },

    // Get accuracy by difficulty
    getAccuracyByDifficulty() {
        const analytics = this.getAnalytics();
        const result = {};

        Object.keys(analytics.accuracyByDifficulty).forEach(difficulty => {
            const stats = analytics.accuracyByDifficulty[difficulty];
            result[difficulty] = {
                accuracy: stats.total > 0 ? (stats.correct / stats.total * 100).toFixed(1) : 0,
                total: stats.total,
                avgTime: Math.round(stats.avgTime)
            };
        });

        return result;
    },

    // Get average time per puzzle
    getAverageTimePerPuzzle() {
        const analytics = this.getAnalytics();
        if (analytics.totalPuzzlesCompleted === 0) return 0;
        return Math.round(analytics.totalTimeSpent / analytics.totalPuzzlesCompleted);
    },

    // Get streak continuation rate
    getStreakContinuationRate() {
        const analytics = this.getAnalytics();
        const history = analytics.streakData.streakHistory;

        if (history.length < 2) return 100;

        let continuations = 0;
        for (let i = 1; i < history.length; i++) {
            if (history[i].streak > history[i - 1].streak || history[i].streak === history[i - 1].streak) {
                continuations++;
            }
        }

        return ((continuations / (history.length - 1)) * 100).toFixed(1);
    },

    // Get summary report
    getSummaryReport() {
        const analytics = this.getAnalytics();
        const progress = ProgressManager.getProgress();

        return {
            totalPuzzles: analytics.totalPuzzlesCompleted,
            currentStreak: progress.currentStreak,
            longestStreak: progress.longestStreak,
            accuracyByDifficulty: this.getAccuracyByDifficulty(),
            avgTimePerPuzzle: this.getAverageTimePerPuzzle(),
            streakContinuationRate: this.getStreakContinuationRate(),
            totalTimeSpent: Math.round(analytics.totalTimeSpent / 60), // in minutes
            lastPlayed: analytics.lastVisit
        };
    },

    // Reset analytics (for testing)
    resetAnalytics() {
        Storage.remove(STORAGE_KEYS.ANALYTICS);
    }
};
