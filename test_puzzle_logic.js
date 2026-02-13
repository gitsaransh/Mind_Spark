const fs = require('fs');

// We need to load multiple files to simulate the environment
const puzzlesContent = fs.readFileSync('www/js/puzzles.js', 'utf8');
const gameEngineContent = fs.readFileSync('www/js/gameEngine.js', 'utf8');

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

// Mock getPuzzlesByFilter (from puzzles.js, usually separate functions)
// We'll just define it manually for this test since it wasn't exported
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

// 4. Load GameEngine (Partial)
// Since GameEngine is an object literal, we need to extract it or wrap it.
// We'll extract the `startPuzzle` method logic and test it in isolation
// because loading the whole file might have dependency issues (PreferencesManager etc).

// Let's just create a Mock GameEngine with the NEW logic we just pasted.
const MockGameEngine = {
    state: {
        sessionPuzzles: [],
        selectedCategory: null,
        selectedDifficulty: 'beginner'
    },

    startPuzzle: function () {
        // v2.2 Logic Copy-Paste
        const progress = global.ProgressManager.getProgress();
        const solvedIds = progress.solvedPuzzles || [];

        // Simulating the Set logic
        const excludeSet = new Set([...solvedIds, ...this.state.sessionPuzzles]);
        const excludeIds = Array.from(excludeSet);

        const category = this.state.selectedCategory;
        const difficulty = this.state.selectedDifficulty;

        // Try to get NEW puzzle
        let puzzle = global.getRandomPuzzle(category, difficulty, excludeIds);

        // Fallback
        if (!puzzle) {
            console.log("   -> Fallback triggered (All solved!)");
            const sessionOnlyExcludes = this.state.sessionPuzzles;
            puzzle = global.getRandomPuzzle(category, difficulty, sessionOnlyExcludes);
        }

        if (puzzle) {
            this.state.sessionPuzzles.push(puzzle.id);
        }
        return puzzle;
    }
};


// ==== TEST SCENARIO ====
console.log("🧪 TESTING PUZZLE SELECTION LOGIC\n");

// Setup: Pick a category with few puzzles to test exhaustion easily
// Let's us 'odd_one_out' 'beginner' -> There are about 10 of them.
MockGameEngine.state.selectedCategory = 'odd_one_out';
MockGameEngine.state.selectedDifficulty = 'beginner';

const availableCount = global.getPuzzlesByFilter('odd_one_out', 'beginner').length;
console.log(`Available 'Odd-Beginner' Puzzles: ${availableCount}`);

console.log("\n--- Phase 1: Solving Unique Puzzles ---");
for (let i = 1; i <= availableCount; i++) {
    const p = MockGameEngine.startPuzzle();
    if (p) {
        console.log(`Puzzle ${i}: ${p.id} (Unique)`);
        // Simulate solving it -> Add to global history
        global.ProgressManager.addSolved(p.id);
    } else {
        console.error(`❌ Failed to get puzzle at step ${i}`);
    }
}

console.log("\n--- Phase 2: All Solved. Testing Fallback ---");
// Now all puzzles are in history. The next call should trigger fallback.
const fallbackPuzzle = MockGameEngine.startPuzzle();

if (fallbackPuzzle) {
    console.log(`✅ Fallback Successful! Got: ${fallbackPuzzle.id}`);

    // Check if it was one we already solved (it MUST be, since we solved all)
    const isOld = global.ProgressManager.getProgress().solvedPuzzles.includes(fallbackPuzzle.id);
    console.log(`   Is this an old puzzle? ${isOld ? 'YES (Correct)' : 'NO (Error)'}`);
} else {
    console.error("❌ Fallback Failed. Returned null.");
}

console.log("\n✅ Test Complete.");
