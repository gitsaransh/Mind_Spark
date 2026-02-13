// ============================================
// MindSpark - Dynamic Puzzle Loader
// Loads puzzles on-demand by difficulty level
// ============================================

const PuzzleLoader = {
    // Cache for loaded puzzles
    cache: {
        beginner: null,
        intermediate: null,
        expert: null
    },

    // Loading state
    loading: {
        beginner: false,
        intermediate: false,
        expert: false
    },

    // Base path for puzzle files
    basePath: 'js/puzzles/',

    /**
     * Load puzzles for a specific difficulty level
     * @param {string} difficulty - 'beginner', 'intermediate', or 'expert'
     * @returns {Promise<Array>} - Array of puzzles
     */
    async loadPuzzlesByDifficulty(difficulty) {
        // Validate difficulty
        const validDifficulties = ['beginner', 'intermediate', 'expert'];
        if (!validDifficulties.includes(difficulty)) {
            console.error(`❌ Invalid difficulty: ${difficulty}`);
            throw new Error(`Invalid difficulty level: ${difficulty}. Must be one of: ${validDifficulties.join(', ')}`);
        }

        // Return from cache if already loaded
        if (this.cache[difficulty]) {
            console.log(`✅ Returning cached ${difficulty} puzzles (${this.cache[difficulty].length} puzzles)`);
            return this.cache[difficulty];
        }

        // Check if already loading
        if (this.loading[difficulty]) {
            console.log(`⏳ Already loading ${difficulty} puzzles, waiting...`);
            return this.waitForLoad(difficulty);
        }

        // Start loading
        this.loading[difficulty] = true;
        console.log(`📡 Loading ${difficulty} puzzles...`);

        try {
            // Show loading indicator
            this.showLoadingIndicator(difficulty);

            // Load the script
            const puzzles = await this.loadScript(difficulty);

            // Cache the result
            this.cache[difficulty] = puzzles;
            this.loading[difficulty] = false;

            // Hide loading indicator
            this.hideLoadingIndicator();

            console.log(`✅ Loaded ${puzzles.length} ${difficulty} puzzles`);
            return puzzles;

        } catch (error) {
            this.loading[difficulty] = false;
            this.hideLoadingIndicator();

            console.error(`❌ Failed to load ${difficulty} puzzles:`, error);

            // Show user-friendly error
            this.showErrorMessage(difficulty, error);

            // Return empty array as fallback
            return [];
        }
    },

    /**
     * Load a puzzle script file
     * @param {string} difficulty - Difficulty level
     * @returns {Promise<Array>} - Array of puzzles
     */
    loadScript(difficulty) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            const filename = `${this.basePath}${difficulty}.js`;

            script.src = filename;
            script.async = true;

            script.onload = () => {
                console.log(`📦 Script loaded: ${filename}`);

                // Get the puzzles from the global variable
                const globalVarName = `${difficulty.toUpperCase()}_PUZZLES`;
                const puzzles = window[globalVarName];

                if (!puzzles || !Array.isArray(puzzles)) {
                    reject(new Error(`Puzzles not found in global variable: ${globalVarName}`));
                    return;
                }

                resolve(puzzles);
            };

            script.onerror = (error) => {
                console.error(`❌ Script load error: ${filename}`, error);
                reject(new Error(`Failed to load puzzle file: ${filename}`));
            };

            document.head.appendChild(script);
        });
    },

    /**
     * Wait for a difficulty level to finish loading
     * @param {string} difficulty - Difficulty level
     * @returns {Promise<Array>} - Array of puzzles
     */
    async waitForLoad(difficulty) {
        // Poll every 100ms until loaded
        return new Promise((resolve) => {
            const checkInterval = setInterval(() => {
                if (!this.loading[difficulty]) {
                    clearInterval(checkInterval);
                    resolve(this.cache[difficulty] || []);
                }
            }, 100);

            // Timeout after 10 seconds
            setTimeout(() => {
                clearInterval(checkInterval);
                console.error(`⏱️ Timeout waiting for ${difficulty} puzzles`);
                resolve([]);
            }, 10000);
        });
    },

    /**
     * Preload puzzles for a difficulty level (background loading)
     * @param {string} difficulty - Difficulty level
     */
    async preload(difficulty) {
        if (!this.cache[difficulty] && !this.loading[difficulty]) {
            console.log(`🔄 Preloading ${difficulty} puzzles in background...`);
            // Load without showing indicator
            const originalShow = this.showLoadingIndicator;
            this.showLoadingIndicator = () => { }; // Temporarily disable indicator

            await this.loadPuzzlesByDifficulty(difficulty);

            this.showLoadingIndicator = originalShow; // Restore
        }
    },

    /**
     * Preload all difficulty levels
     */
    async preloadAll() {
        console.log('🔄 Preloading all puzzle difficulties...');
        await Promise.all([
            this.preload('beginner'),
            this.preload('intermediate'),
            this.preload('expert')
        ]);
        console.log('✅ All puzzles preloaded');
    },

    /**
     * Get puzzles by category and difficulty
     * @param {string} category - 'logic', 'math', 'pattern', or 'mixed'
     * @param {string} difficulty - 'beginner', 'intermediate', or 'expert'
     * @returns {Promise<Array>} - Filtered puzzles
     */
    async getPuzzles(category, difficulty) {
        // Load puzzles for the difficulty
        const allPuzzles = await this.loadPuzzlesByDifficulty(difficulty);

        // If mixed, return all
        if (category === 'mixed') {
            return allPuzzles;
        }

        // Filter by category
        const filtered = allPuzzles.filter(puzzle => {
            return puzzle.category === category || puzzle.type === category;
        });

        console.log(`🎯 Filtered ${filtered.length} ${category} puzzles from ${allPuzzles.length} total`);
        return filtered;
    },

    /**
     * Clear cache for a difficulty level
     * @param {string} difficulty - Difficulty level (optional, clears all if not specified)
     */
    clearCache(difficulty = null) {
        if (difficulty) {
            this.cache[difficulty] = null;
            console.log(`🗑️ Cleared cache for ${difficulty} puzzles`);
        } else {
            this.cache = {
                beginner: null,
                intermediate: null,
                expert: null
            };
            console.log('🗑️ Cleared all puzzle cache');
        }
    },

    /**
     * Show loading indicator
     * @param {string} difficulty - Difficulty level
     */
    showLoadingIndicator(difficulty) {
        // Check if App has a loading method
        if (typeof App !== 'undefined' && App.showLoading) {
            App.showLoading(`Loading ${difficulty} puzzles...`);
            return;
        }

        // Create simple loading overlay
        const existing = document.getElementById('puzzle-loader-indicator');
        if (existing) return; // Already showing

        const overlay = document.createElement('div');
        overlay.id = 'puzzle-loader-indicator';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            backdrop-filter: blur(4px);
        `;

        overlay.innerHTML = `
            <div style="
                background: rgba(255, 255, 255, 0.1);
                border-radius: 12px;
                padding: 30px 40px;
                text-align: center;
                color: white;
            ">
                <div style="
                    width: 40px;
                    height: 40px;
                    border: 4px solid rgba(255, 255, 255, 0.3);
                    border-top-color: white;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 15px;
                "></div>
                <div style="font-size: 16px; font-weight: 500;">
                    Loading ${difficulty} puzzles...
                </div>
            </div>
            <style>
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            </style>
        `;

        document.body.appendChild(overlay);
    },

    /**
     * Hide loading indicator
     */
    hideLoadingIndicator() {
        // Check if App has a hide loading method
        if (typeof App !== 'undefined' && App.hideLoading) {
            App.hideLoading();
            return;
        }

        // Remove overlay
        const overlay = document.getElementById('puzzle-loader-indicator');
        if (overlay) {
            overlay.remove();
        }
    },

    /**
     * Show error message to user
     * @param {string} difficulty - Difficulty level
     * @param {Error} error - Error object
     */
    showErrorMessage(difficulty, error) {
        const message = `Failed to load ${difficulty} puzzles. Please check your internet connection and try again.`;

        // Use App notification if available
        if (typeof App !== 'undefined' && App.showNotification) {
            App.showNotification('Loading Error', message, 'error');
            return;
        }

        // Fallback to alert
        alert(message);
    },

    /**
     * Get cache status
     * @returns {Object} - Cache status for each difficulty
     */
    getCacheStatus() {
        return {
            beginner: {
                loaded: !!this.cache.beginner,
                count: this.cache.beginner ? this.cache.beginner.length : 0
            },
            intermediate: {
                loaded: !!this.cache.intermediate,
                count: this.cache.intermediate ? this.cache.intermediate.length : 0
            },
            expert: {
                loaded: !!this.cache.expert,
                count: this.cache.expert ? this.cache.expert.length : 0
            }
        };
    },

    /**
     * Get all loaded puzzles (from cache)
     * @returns {Array} - All cached puzzles
     */
    getAllLoadedPuzzles() {
        const all = [];
        if (this.cache.beginner) all.push(...this.cache.beginner);
        if (this.cache.intermediate) all.push(...this.cache.intermediate);
        if (this.cache.expert) all.push(...this.cache.expert);
        return all;
    }
};

// ============================================
// Helper Functions (Compatibility Layer)
// ============================================

/**
 * Get puzzles by filter (type and/or difficulty)
 * @param {string} type - Puzzle type (optional)
 * @param {string} difficulty - Difficulty level (optional)
 * @returns {Promise<Array>} - Filtered puzzles
 */
async function getPuzzlesByFilter(type = null, difficulty = null) {
    let puzzles = [];

    if (difficulty) {
        // Load specific difficulty
        puzzles = await PuzzleLoader.loadPuzzlesByDifficulty(difficulty);
    } else {
        // Load all difficulties
        await PuzzleLoader.preloadAll();
        puzzles = PuzzleLoader.getAllLoadedPuzzles();
    }

    // Filter by type if specified
    if (type) {
        puzzles = puzzles.filter(puzzle => puzzle.type === type);
    }

    return puzzles;
}

/**
 * Get a random puzzle
 * @param {string} type - Puzzle type (optional)
 * @param {string} difficulty - Difficulty level (optional)
 * @param {Array} excludeIds - IDs to exclude (optional)
 * @returns {Promise<Object|null>} - Random puzzle or null
 */
async function getRandomPuzzle(type = null, difficulty = null, excludeIds = []) {
    const filtered = (await getPuzzlesByFilter(type, difficulty)).filter(
        puzzle => !excludeIds.includes(puzzle.id)
    );

    if (filtered.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * filtered.length);
    return filtered[randomIndex];
}

/**
 * Get daily challenge puzzle (deterministic based on date)
 * @returns {Promise<Object|null>} - Daily puzzle or null
 */
async function getDailyChallengePuzzle() {
    // Load all puzzles
    await PuzzleLoader.preloadAll();
    const allPuzzles = PuzzleLoader.getAllLoadedPuzzles();

    if (allPuzzles.length === 0) return null;

    // Generate seed from today's date
    const today = new Date().toDateString();
    const seed = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const index = seed % allPuzzles.length;

    return allPuzzles[index];
}

// Make globally accessible
window.PuzzleLoader = PuzzleLoader;
window.getPuzzlesByFilter = getPuzzlesByFilter;
window.getRandomPuzzle = getRandomPuzzle;
window.getDailyChallengePuzzle = getDailyChallengePuzzle;

// Export for module systems (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        PuzzleLoader,
        getPuzzlesByFilter,
        getRandomPuzzle,
        getDailyChallengePuzzle
    };
}

console.log('✅ PuzzleLoader initialized');
