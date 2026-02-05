// ============================================
// MindSpark - Badge System
// ============================================

const BADGE_DEFINITIONS = [
    // Streak Badges
    {
        id: 'streak_3',
        name: 'Spark',
        desc: 'Reach a streak of 3 days',
        icon: '🔥',
        category: 'streak',
        condition: (stats) => stats.currentStreak >= 3
    },
    {
        id: 'streak_7',
        name: 'Flame',
        desc: 'Reach a streak of 7 days',
        icon: '🕯️',
        category: 'streak',
        condition: (stats) => stats.currentStreak >= 7
    },
    {
        id: 'streak_14',
        name: 'Inferno',
        desc: 'Reach a streak of 14 days',
        icon: '🌋',
        category: 'streak',
        condition: (stats) => stats.currentStreak >= 14
    },
    {
        id: 'streak_30',
        name: 'Eternal Flame',
        desc: 'Reach a streak of 30 days',
        icon: '☀️',
        category: 'streak',
        condition: (stats) => stats.currentStreak >= 30
    },

    // Volume Badges
    {
        id: 'puzzles_10',
        name: 'Novice Thinker',
        desc: 'Solve 10 total puzzles',
        icon: '🌱',
        category: 'volume',
        condition: (stats) => stats.totalPuzzlesSolved >= 10
    },
    {
        id: 'puzzles_50',
        name: 'Avid Learner',
        desc: 'Solve 50 total puzzles',
        icon: '📚',
        category: 'volume',
        condition: (stats) => stats.totalPuzzlesSolved >= 50
    },
    {
        id: 'puzzles_100',
        name: 'Mind Master',
        desc: 'Solve 100 total puzzles',
        icon: '🧠',
        category: 'volume',
        condition: (stats) => stats.totalPuzzlesSolved >= 100
    },

    // Category Badges
    {
        id: 'logic_master',
        name: 'Sherlock',
        desc: 'Solve 20 Logic puzzles',
        icon: '🔍',
        category: 'category',
        condition: (stats) => (stats.puzzlesByType && stats.puzzlesByType.logic >= 20)
    },
    {
        id: 'math_master',
        name: 'Human Calculator',
        desc: 'Solve 20 Math puzzles',
        icon: '🧮',
        category: 'category',
        condition: (stats) => (stats.puzzlesByType && stats.puzzlesByType.math >= 20)
    },
    {
        id: 'pattern_master',
        name: 'Pattern Seeker',
        desc: 'Solve 20 Pattern puzzles',
        icon: '🧩',
        category: 'category',
        condition: (stats) => (stats.puzzlesByType && stats.puzzlesByType.pattern >= 20)
    },

    // Special Badges
    {
        id: 'early_bird',
        name: 'Early Bird',
        desc: 'Solve a puzzle between 4AM and 8AM',
        icon: '🌅',
        category: 'special',
        checkOnSolve: true, // Special flag to check only on solve event
        condition: (stats, context) => {
            if (!context || !context.timestamp) return false;
            const hour = new Date(context.timestamp).getHours();
            return hour >= 4 && hour < 8;
        }
    },
    {
        id: 'night_owl',
        name: 'Night Owl',
        desc: 'Solve a puzzle between 10PM and 4AM',
        icon: '🦉',
        category: 'special',
        checkOnSolve: true,
        condition: (stats, context) => {
            if (!context || !context.timestamp) return false;
            const hour = new Date(context.timestamp).getHours();
            return hour >= 22 || hour < 4;
        }
    }
];

const BadgeManager = {
    // Check for new badges
    checkForNewBadges(progress, context = {}) {
        const earnedBadges = [];
        const existingBadgeIds = new Set(
            (progress.permanentBonuses.badges || []).map(b => b.id)
        );

        BADGE_DEFINITIONS.forEach(def => {
            // Skip if already owned
            if (existingBadgeIds.has(def.id)) return;

            // Check condition
            try {
                if (def.condition(progress, context)) {
                    // Unlock badge
                    const badgeInstance = {
                        id: def.id,
                        name: def.name,
                        desc: def.desc,
                        icon: def.icon,
                        dateEarned: new Date().toISOString()
                    };

                    // Add to progress
                    if (!progress.permanentBonuses.badges) {
                        progress.permanentBonuses.badges = [];
                    }
                    progress.permanentBonuses.badges.push(badgeInstance);

                    earnedBadges.push(badgeInstance);
                }
            } catch (err) {
                console.error(`Error checking badge ${def.id}:`, err);
            }
        });

        return earnedBadges;
    },

    // Get all defined badges
    getAllBadges() {
        return BADGE_DEFINITIONS;
    },

    // Get user badges
    getUserBadges() {
        const progress = ProgressManager.getProgress();
        return progress.permanentBonuses.badges || [];
    }
};

// Expose globally
window.BadgeManager = BadgeManager;
