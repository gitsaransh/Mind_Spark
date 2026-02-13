const fs = require('fs');

// We need to load multiple files to simulate the environment
const puzzlesContent = fs.readFileSync('www/js/puzzles.js', 'utf8');

// ==== MOCK ENVIRONMENT ====
// 1. Mock PUZZLES
global.PUZZLE_TYPES = {
    PATTERN: 'pattern', ODD_ONE_OUT: 'odd_one_out', CAUSE_EFFECT: 'cause_effect',
    ERROR_DETECTION: 'error_detection', BEST_CHOICE: 'best_choice', LOGIC: 'logic', MATH: 'math'
};
global.DIFFICULTY = { BEGINNER: 'beginner', INTERMEDIATE: 'intermediate', EXPERT: 'expert' };

// Load Puzzles
const startIdx = puzzlesContent.indexOf('const PUZZLES = [');
const puzzlesDef = puzzlesContent.substring(startIdx).replace('const PUZZLES =', 'global.PUZZLES =');
eval(puzzlesDef);

// Mock getPuzzlesByFilter
global.getPuzzlesByFilter = function (type = null, difficulty = null) {
    return global.PUZZLES.filter(p => {
        return (type === null || p.type === type) && (difficulty === null || p.difficulty === difficulty);
    });
};

global.getRandomPuzzle = function (type = null, difficulty = null, excludeIds = []) {
    const filtered = global.getPuzzlesByFilter(type, difficulty).filter(p => !excludeIds.includes(p.id));
    if (filtered.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * filtered.length);
    return filtered[randomIndex];
};

// 2. Mock ProgressManager
global.ProgressManager = {
    progress: { solvedPuzzles: [] },
    getProgress: function () { return this.progress; },
    addSolved: function (id) { this.progress.solvedPuzzles.push(id); }
};

// 3. Mock AnalyticsManager
global.AnalyticsManager = { startSession: () => { } };

// 4. Mock GameEngine (UPDATED LOGIC)
const MockGameEngine = {
    state: {
        sessionPuzzles: [],
        selectedCategory: null,
        selectedDifficulty: 'beginner'
    },

    startPuzzle: function () {
        // v2.2 Logic (Synced with gameEngine.js)
        const progress = global.ProgressManager.getProgress();
        const solvedIds = progress.solvedPuzzles || [];

        const excludeSet = new Set([...solvedIds, ...this.state.sessionPuzzles]);
        const excludeIds = Array.from(excludeSet);

        const category = this.state.selectedCategory;
        const difficulty = this.state.selectedDifficulty;

        // 3. Try to get NEW puzzle
        let puzzle = global.getRandomPuzzle(category, difficulty, excludeIds);

        // 4. Fallback Logic:
        if (!puzzle) {
            console.log("   -> Fallback 1 triggered (Try History Recycle)");
            // Scenario A: User solved ALL puzzles in history...
            puzzle = global.getRandomPuzzle(category, difficulty, this.state.sessionPuzzles);

            if (!puzzle) {
                console.log("   -> Fallback 2 triggered (Try Bruteforce)");
                // Scenario B: User exhausted EVERYTHING in this session!
                puzzle = global.getRandomPuzzle(category, difficulty, []);
            }
        }

        if (puzzle) {
            this.state.sessionPuzzles.push(puzzle.id);
        }
        return puzzle;
    }
};


// ==== TEST SCENARIO ====
console.log("🧪 TESTING PUZZLE SELECTION LOGIC (UPDATED)\n");

MockGameEngine.state.selectedCategory = 'odd_one_out';
MockGameEngine.state.selectedDifficulty = 'beginner';

const availableCount = global.getPuzzlesByFilter('odd_one_out', 'beginner').length;
console.log(`Available 'Odd-Beginner' Puzzles: ${availableCount}`);

console.log("\n--- Phase 1: Solving Unique Puzzles ---");
for (let i = 1; i <= availableCount; i++) {
    const p = MockGameEngine.startPuzzle();
    if (p) {
        console.log(`Puzzle ${i}: ${p.id} (Unique)`);
        global.ProgressManager.addSolved(p.id);
    } else {
        console.error(`❌ Failed to get puzzle at step ${i}`);
    }
}

console.log("\n--- Phase 2: All Solved (History Full). Testing Fallback 1 ---");
// This should pick from history, but NOT from session (since session is full too, it might trigger fallback 2)
// Wait, in this simulation, sessionPuzzles AND solvedPuzzles have ALL the IDs.
// So Fallback 1 (exclude sessionPuzzles) will ALSO return null because sessionPuzzles has everything.
// So this should trigger Fallback 2 immediately.

const fallbackPuzzle = MockGameEngine.startPuzzle();

if (fallbackPuzzle) {
    console.log(`✅ Fallback Successful! Got: ${fallbackPuzzle.id}`);
} else {
    console.error("❌ Fallback Failed entirely.");
}

console.log("\n✅ Test Complete.");
