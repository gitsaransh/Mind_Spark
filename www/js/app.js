// ============================================
// MindSpark - Main Application Controller
// ============================================

const App = {
    // Initialize application
    init() {
        console.log('🚀 MindSpark starting...');

        // Initialize game engine
        GameEngine.init();

        // v2.0: Check and award session starter bonus
        this.checkAndAwardSessionBonus();

        // Set up event listeners
        this.setupEventListeners();

        // Load home screen data
        this.loadHomeScreen();

        // Initialize tutorial for first-time users
        TutorialManager.init();
        AdsManager.init(); // v2.0


        // Setup settings panel
        this.setupSettings();

        console.log('✅ MindSpark ready!');
    },

    // v2.0: Check and award session starter bonus
    checkAndAwardSessionBonus() {
        const progress = ProgressManager.getProgress();
        const now = Date.now();
        const lastPuzzleTime = progress.sessionTracking.lastPuzzleTime;
        const fourHours = 4 * 60 * 60 * 1000; // 4 hours in milliseconds

        // Check if this is a new session (4+ hours gap or first time)
        if (!lastPuzzleTime || (now - lastPuzzleTime) > fourHours) {
            const bonus = progress.permanentBonuses.sessionStarterBonus || 2;

            // Award bonus points
            progress.currentStreak += bonus;

            // Calculate hours since last session for notification
            const hoursSince = lastPuzzleTime ?
                Math.floor((now - lastPuzzleTime) / (60 * 60 * 1000)) : 0;

            // Save progress
            ProgressManager.saveProgress(progress);

            // Show welcome notification (only if returning user)
            if (hoursSince > 0) {
                // Delay notification slightly to let UI load
                setTimeout(() => {
                    this.showSessionStarterBonus(bonus, hoursSince);
                }, 1000);
            }

            console.log(`✅ Session bonus awarded: +${bonus} points (${hoursSince}h since last session)`);
        } else {
            const minutesSince = Math.floor((now - lastPuzzleTime) / (60 * 1000));
            console.log(`ℹ️ No session bonus (last played ${minutesSince} minutes ago)`);
        }
    },

    // Setup all event listeners
    setupEventListeners() {
        // Home Screen
        document.getElementById('start-playing-btn').addEventListener('click', () => {
            this.showScreen('mode-screen');
        });

        document.getElementById('daily-challenge-btn').addEventListener('click', () => {
            this.startDailyChallenge();
        });

        document.getElementById('view-progress-btn').addEventListener('click', () => {
            this.showProgressScreen();
        });

        // Mode Screen
        document.querySelectorAll('#mode-screen .option-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const mode = e.currentTarget.dataset.mode;
                this.selectMode(mode);
            });
        });

        document.getElementById('mode-back-btn').addEventListener('click', () => {
            this.showScreen('home-screen');
        });

        // Category Screen
        document.querySelectorAll('#category-screen .option-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.category;
                const value = category === 'null' ? null : category;
                this.selectCategory(value);
            });
        });

        document.getElementById('category-back-btn').addEventListener('click', () => {
            this.showScreen('mode-screen');
        });

        // Difficulty Screen
        document.querySelectorAll('#difficulty-screen .option-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const difficulty = e.currentTarget.dataset.difficulty;
                this.selectDifficulty(difficulty);
            });
        });

        document.getElementById('difficulty-back-btn').addEventListener('click', () => {
            // v2.1: Go back to Category
            this.showScreen('category-screen');
        });

        // Gameplay Screen
        document.getElementById('exit-game-btn').addEventListener('click', () => {
            if (confirm('Are you sure you want to quit this game?')) {
                GameEngine.resetGameState();
                this.showScreen('home-screen');
            }
        });

        document.getElementById('submit-answer-btn').addEventListener('click', () => {
            this.submitAnswer();
        });

        // Result Screen
        document.getElementById('continue-btn').addEventListener('click', () => {
            this.continueToNextPuzzle();
        });

        document.getElementById('result-home-btn').addEventListener('click', () => {
            GameEngine.resetGameState();
            this.showScreen('home-screen');
            this.loadHomeScreen();
        });

        // Progress Screen
        document.getElementById('progress-back-btn').addEventListener('click', () => {
            this.showScreen('home-screen');
        });

        // Share Achievement
        document.getElementById('share-achievement-btn').addEventListener('click', () => {
            this.shareAchievement();
        });

        // Settings Panel
        document.getElementById('settings-button').addEventListener('click', () => {
            this.toggleSettings();
        });

        document.getElementById('settings-close').addEventListener('click', () => {
            this.toggleSettings();
        });

        document.getElementById('replay-tutorial-btn').addEventListener('click', () => {
            this.toggleSettings();
            TutorialManager.resetTutorial();
        });

        // Feedback Button
        document.getElementById('feedback-btn').addEventListener('click', () => {
            // TODO: Replace with your actual Reddit thread or Google Form URL
            const feedbackUrl = "https://www.reddit.com/r/WebGames/";
            window.open(feedbackUrl, '_blank');
        });

        // Add click sound to all buttons
        document.querySelectorAll('.btn, .option-card').forEach(element => {
            element.addEventListener('click', () => {
                SoundManager.playClick();
                SoundManager.vibrateClick();
            });
        });
    },

    // Select Mode
    selectMode(mode) {
        GameEngine.setMode(mode);
        // Note: Screen transition happens in event listener loop
    },

    // Select Category (v2.1)
    selectCategory(category) {
        GameEngine.setCategory(category);
        this.showScreen('difficulty-screen');
    },

    // Select Difficulty
    selectDifficulty(difficulty) {
        GameEngine.setDifficulty(difficulty);
        this.startGame();
    },

    // Show specific screen
    showScreen(screenId) {
        // v2.0: Check for session end (leaving gameplay or result screen)
        // Triggers when moving from Game->Home or Result->Home, but not Game<->Result
        const currentScreen = GameEngine.state.currentScreen;
        if ((currentScreen === 'gameplay-screen' || currentScreen === 'result-screen') &&
            (screenId !== 'gameplay-screen' && screenId !== 'result-screen')) {
            this.showSessionEndModal();
        }

        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // Show target screen
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
            GameEngine.state.currentScreen = screenId;
        }
    },

    // Load home screen data
    loadHomeScreen() {
        const progress = GameEngine.getProgressStats();

        // Update streak
        document.getElementById('streak-number').textContent = progress.currentStreak;

        // Update total puzzles
        document.getElementById('total-puzzles').textContent = progress.totalPuzzlesSolved;

        // Calculate overall accuracy
        let totalCorrect = 0;
        let totalAttempts = 0;
        Object.values(progress.accuracyByDifficulty).forEach(diff => {
            totalCorrect += diff.correct;
            totalAttempts += diff.total;
        });
        const accuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
        document.getElementById('accuracy-stat').textContent = `${accuracy}%`;

        // Check if daily challenge is available
        const dailyChallengeBtn = document.getElementById('daily-challenge-btn');
        if (!GameEngine.isDailyChallengeAvailable()) {
            dailyChallengeBtn.textContent = 'Daily Challenge ✓ Completed';
            dailyChallengeBtn.disabled = true;
            dailyChallengeBtn.style.opacity = '0.6';
        } else {
            dailyChallengeBtn.textContent = 'Daily Challenge ⭐';
            dailyChallengeBtn.disabled = false;
            dailyChallengeBtn.style.opacity = '1';
        }

        // v2.0: Update Freeze Display
        const freezeContainer = document.getElementById('freeze-display');
        const freezeIcons = document.getElementById('freeze-icons');
        const freezeText = document.getElementById('freeze-text');

        if (progress.streakProtection) {
            freezeContainer.classList.remove('hidden');
            const freezes = progress.streakProtection.freezesAvailable || 0;
            const maxFreezes = 3;

            // Generate icons
            let iconsHtml = '';
            for (let i = 0; i < maxFreezes; i++) {
                const isActive = i < freezes;
                iconsHtml += `<span class="freeze-icon ${isActive ? 'active' : ''}">❄️</span>`;
            }
            freezeIcons.innerHTML = iconsHtml;
            freezeText.textContent = `${freezes}/${maxFreezes} available`;
        }

        // v2.0: Update Ad Cooldown Display
        this.updateAdCooldownDisplay();
    },

    // v2.0: Update ad cooldown progress display
    updateAdCooldownDisplay() {
        const adContainer = document.getElementById('ad-cooldown-container');
        const adStatus = document.getElementById('ad-cooldown-status');
        const adProgress = document.getElementById('ad-cooldown-progress');
        const adCount = document.getElementById('ad-count-today');

        if (!adContainer || !adStatus || !adProgress || !adCount) return;

        const progress = ProgressManager.getProgress();

        // Safety check: Initialize adEconomy if it doesn't exist
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
        const maxDailyAds = HintSystem.MAX_DAILY_ADS;
        const puzzlesRequired = HintSystem.PUZZLES_BETWEEN_ADS;
        const puzzlesSolved = adEconomy.puzzlesSinceLastAd || 0;

        // Update ad count
        adCount.textContent = `${adEconomy.adsWatchedToday}/${maxDailyAds} ads today`;

        // Check if daily limit reached
        if (adEconomy.adsWatchedToday >= maxDailyAds) {
            adContainer.classList.remove('hidden', 'ready');
            adContainer.classList.add('limit-reached');
            adStatus.textContent = 'Daily Limit Reached';
            adProgress.style.width = '100%';
            return;
        }

        // Check if cooldown is active
        if (puzzlesSolved < puzzlesRequired) {
            adContainer.classList.remove('hidden', 'ready', 'limit-reached');
            const remaining = puzzlesRequired - puzzlesSolved;
            adStatus.textContent = `Solve ${remaining} more`;
            const progressPercent = (puzzlesSolved / puzzlesRequired) * 100;
            adProgress.style.width = `${progressPercent}%`;
        } else {
            // Ad is ready to watch
            adContainer.classList.remove('hidden', 'limit-reached');
            adContainer.classList.add('ready');
            adStatus.textContent = 'Ready!';
            adProgress.style.width = '100%';
        }
    },

    // Select mode
    selectMode(mode) {
        GameEngine.setMode(mode);

        // Visual feedback
        document.querySelectorAll('#mode-screen .option-card').forEach(card => {
            card.classList.remove('selected');
        });
        document.querySelector(`#mode-screen .option-card[data-mode="${mode}"]`).classList.add('selected');

        // Small delay for visual feedback, then proceed
        setTimeout(() => {
            // v2.1: All modes now go to Category Selection first
            this.showScreen('category-screen');
        }, 300);
    },

    // Select difficulty
    selectDifficulty(difficulty) {
        GameEngine.setDifficulty(difficulty);

        // Visual feedback
        document.querySelectorAll('#difficulty-screen .option-card').forEach(card => {
            card.classList.remove('selected');
        });
        document.querySelector(`#difficulty-screen .option-card[data-difficulty="${difficulty}"]`).classList.add('selected');

        // Small delay for visual feedback, then start puzzle
        setTimeout(() => {
            this.startPuzzle();
        }, 300);
    },

    // Start daily challenge
    startDailyChallenge() {
        if (!GameEngine.isDailyChallengeAvailable()) {
            return;
        }

        const puzzle = GameEngine.startPuzzle(true);
        if (puzzle) {
            this.loadPuzzle(puzzle);
            this.showScreen('gameplay-screen');
        }
    },

    // Start a regular puzzle
    startPuzzle() {
        const puzzle = GameEngine.startPuzzle(false);
        if (puzzle) {
            this.loadPuzzle(puzzle);
            this.showScreen('gameplay-screen');
        }
    },

    // Load puzzle into UI
    loadPuzzle(puzzle) {
        // Reset hints for new puzzle
        HintSystem.resetForNewPuzzle();

        // Update streak points display
        this.updateStreakPointsDisplay();

        // Update badges
        document.getElementById('puzzle-type-badge').textContent = GameEngine.getPuzzleTypeLabel(puzzle.type);
        document.getElementById('puzzle-difficulty-badge').textContent = GameEngine.getDifficultyLabel(puzzle.difficulty);

        // Update question
        document.getElementById('puzzle-question-text').textContent = puzzle.question;
        document.getElementById('puzzle-content-text').textContent = puzzle.content;

        // Load options
        const optionsContainer = document.getElementById('answer-options');
        optionsContainer.innerHTML = '';

        puzzle.options.forEach((option, index) => {
            const optionCard = document.createElement('div');
            optionCard.className = 'option-card';
            optionCard.dataset.index = index;

            const optionText = document.createElement('h3');
            optionText.textContent = option;
            optionCard.appendChild(optionText);

            optionCard.addEventListener('click', () => {
                this.selectAnswer(index);
            });

            optionsContainer.appendChild(optionCard);
        });

        // Show/hide timer
        const timerContainer = document.getElementById('timer-container');
        if (GameEngine.state.selectedMode === 'timed') {
            timerContainer.classList.remove('hidden');
            this.updateTimerDisplay(GameEngine.state.timeRemaining);
        } else {
            timerContainer.classList.add('hidden');
        }

        // Setup hint button
        this.setupHintButton();

        // Clear any previous hints
        document.getElementById('hint-display-container').innerHTML = '';
        document.getElementById('hint-display-container').classList.add('hidden');

        // Reset submit button
        document.getElementById('submit-answer-btn').disabled = true;
    },

    // Select answer
    selectAnswer(index) {
        GameEngine.selectAnswer(index);

        // Visual feedback
        document.querySelectorAll('#answer-options .option-card').forEach(card => {
            card.classList.remove('selected');
        });
        document.querySelector(`#answer-options .option-card[data-index="${index}"]`).classList.add('selected');

        // Enable submit button
        document.getElementById('submit-answer-btn').disabled = false;
    },

    // Submit answer
    submitAnswer() {
        const result = GameEngine.submitAnswer();

        if (result.error) {
            alert(result.error);
            return;
        }

        this.showResult(result);
    },

    // Show result screen
    showResult(result) {
        // Update icon and title
        const resultIcon = document.getElementById('result-icon');
        const resultTitle = document.getElementById('result-title');
        const resultMessage = document.getElementById('result-message-text');

        if (result.isCorrect) {
            resultIcon.textContent = '✅';
            resultTitle.textContent = 'Correct!';
            resultMessage.textContent = GameEngine.getEncouragingMessage(true, result.currentStreak);

            // Play success sound and haptic
            SoundManager.playSuccess();
            SoundManager.vibrateSuccess();

            // Show confetti for milestones
            if (result.currentStreak % 5 === 0 && result.currentStreak > 0) {
                this.showConfetti();
                SoundManager.playMilestone();
            }

            // v2.1: Show New Badges
            if (result.earnedBadges && result.earnedBadges.length > 0) {
                // Show first earned badge (simplicity)
                // Add slight delay so it pops up after result screen 
                setTimeout(() => {
                    this.showBadgePopup(result.earnedBadges[0]);
                }, 500);
            }
        } else {
            resultIcon.textContent = '❌';
            resultTitle.textContent = 'Not Quite';
            resultMessage.textContent = GameEngine.getEncouragingMessage(false, 0);

            // Play error sound and haptic
            SoundManager.playError();
            SoundManager.vibrateError();
        }

        // Update stats
        document.getElementById('result-time').textContent = GameEngine.formatTime(result.timeTaken);
        document.getElementById('result-streak').textContent = result.currentStreak;

        // Update explanation
        document.getElementById('explanation-text').textContent = result.explanation;

        // Show screen
        this.showScreen('result-screen');
    },

    // Continue to next puzzle
    continueToNextPuzzle() {
        GameEngine.resetGameState();
        this.startPuzzle();
    },

    // Show progress screen
    showProgressScreen() {
        const progress = GameEngine.getProgressStats();
        const analytics = GameEngine.getAnalyticsSummary();

        // Update streak
        document.getElementById('progress-streak').textContent = progress.currentStreak;
        document.getElementById('progress-longest-streak').textContent = progress.longestStreak;
        document.getElementById('progress-total-puzzles').textContent = progress.totalPuzzlesSolved;

        // Update accuracy by difficulty
        Object.keys(progress.accuracyByDifficulty).forEach(difficulty => {
            const stats = progress.accuracyByDifficulty[difficulty];
            const accuracy = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;

            let elementId;
            if (difficulty === 'beginner') {
                elementId = 'beginner';
            } else if (difficulty === 'intermediate') {
                elementId = 'intermediate';
            } else {
                elementId = 'expert';
            }

            document.getElementById(`accuracy-${elementId}`).textContent = `${accuracy}%`;
            document.getElementById(`progress-${elementId}`).style.width = `${accuracy}%`;
        });

        // Update performance stats
        document.getElementById('avg-time').textContent = GameEngine.formatTime(analytics.avgTimePerPuzzle);
        document.getElementById('total-time').textContent = `${analytics.totalTimeSpent}m`;

        // Render session stats (v2.0)
        const sessionSummary = AnalyticsManager.getSessionSummary();
        const sessionCard = document.getElementById('session-stats-card');

        if (sessionSummary && sessionSummary.attempted > 0) {
            sessionCard.style.display = 'block';
            document.getElementById('session-attempted').textContent = sessionSummary.attempted;
            document.getElementById('session-cleared').textContent = sessionSummary.cleared;
            document.getElementById('session-failed').textContent = sessionSummary.failed;
            document.getElementById('session-accuracy').textContent = sessionSummary.accuracy + '%';
            document.getElementById('session-duration').textContent = sessionSummary.duration;
            document.getElementById('session-best-streak').textContent = sessionSummary.bestStreak;
        } else {
            sessionCard.style.display = 'none';
        }

        // v2.1: Render Badges
        const badgesGrid = document.getElementById('badges-grid');
        if (progress.permanentBonuses && progress.permanentBonuses.badges && progress.permanentBonuses.badges.length > 0) {
            badgesGrid.innerHTML = '';
            progress.permanentBonuses.badges.forEach(badge => {
                const badgeEl = document.createElement('div');
                badgeEl.className = 'badge-item';
                badgeEl.innerHTML = `
                    <div style="font-size: 2rem;">${badge.icon}</div>
                    <div style="font-size: 0.75rem; font-weight: bold; margin-top: 0.25rem;">${badge.name}</div>
                `;
                badgeEl.title = badge.desc; // Tooltip
                badgesGrid.appendChild(badgeEl);
            });
        }

        this.showScreen('progress-screen');
    },

    // Update timer display (called from game engine)
    updateTimerDisplay(seconds) {
        const timerValue = document.getElementById('timer-value');
        const timerDisplay = document.getElementById('timer-display');

        timerValue.textContent = seconds;

        // Warning state when time is low
        if (seconds <= 10) {
            timerDisplay.classList.add('warning');
        } else {
            timerDisplay.classList.remove('warning');
        }
    },

    // Handle time up
    handleTimeUp() {
        // Auto-submit if time runs out
        if (GameEngine.state.selectedAnswer !== null) {
            this.submitAnswer();
        } else {
            // If no answer selected, show message
            alert('Time\'s up! Please select an answer.');
        }
    },

    // Toggle settings panel
    toggleSettings() {
        const panel = document.getElementById('settings-panel');
        panel.classList.toggle('open');
        SoundManager.playClick();
    },

    // Setup settings panel
    setupSettings() {
        const soundToggle = document.getElementById('sound-toggle');
        const hapticToggle = document.getElementById('haptic-toggle');

        // Initialize toggle states
        if (SoundManager.enabled) {
            soundToggle.classList.add('active');
        } else {
            soundToggle.classList.remove('active');
        }

        // Sound toggle
        soundToggle.addEventListener('click', () => {
            const enabled = SoundManager.toggle();
            if (enabled) {
                soundToggle.classList.add('active');
                SoundManager.playSuccess();
            } else {
                soundToggle.classList.remove('active');
            }
        });

        // Haptic toggle (just visual, actual vibration is controlled by SoundManager)
        hapticToggle.addEventListener('click', () => {
            hapticToggle.classList.toggle('active');
            if (hapticToggle.classList.contains('active')) {
                SoundManager.vibrateSuccess();
            }
        });
    },

    // Show Badge Popup
    showBadgePopup(badge) {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay visible';
        modal.innerHTML = `
            <div class="modal-content" style="text-align: center;">
                <div style="font-size: 4rem; margin-bottom: 1rem; animation: bounce 1s infinite;">${badge.icon}</div>
                <h2 style="color: var(--color-accent);">New Badge Unlocked!</h2>
                <h3 class="mb-md">${badge.name}</h3>
                <p style="color: var(--color-text-muted); margin-bottom: 2rem;">
                    ${badge.desc}
                </p>
                <button class="btn btn-primary btn-block" onclick="this.parentElement.parentElement.remove()">
                    Awesome!
                </button>
            </div>
        `;
        document.body.appendChild(modal);
        SoundManager.playMilestone();
        SoundManager.vibrateSuccess();
    },

    // Share achievement
    shareAchievement() {
        const progress = GameEngine.getProgressStats();
        const stats = {
            streak: progress.currentStreak,
            totalPuzzles: progress.totalPuzzlesSolved,
            accuracy: this.calculateOverallAccuracy(progress)
        };

        ShareManager.shareAchievement(stats);
    },

    // Calculate overall accuracy
    calculateOverallAccuracy(progress) {
        let totalCorrect = 0;
        let totalAttempts = 0;
        Object.values(progress.accuracyByDifficulty).forEach(diff => {
            totalCorrect += diff.correct;
            totalAttempts += diff.total;
        });
        return totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
    },

    // Show confetti celebration
    showConfetti() {
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.animationDelay = Math.random() * 0.5 + 's';
                confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
                document.body.appendChild(confetti);

                setTimeout(() => confetti.remove(), 3000);
            }, i * 30);
        }
    },

    // Update streak points display
    updateStreakPointsDisplay() {
        const points = HintSystem.getStreakPoints();
        document.getElementById('points-value').textContent = points;
    },

    // Setup hint button for current puzzle
    setupHintButton() {
        const puzzle = GameEngine.state.currentPuzzle;
        if (!puzzle) return;

        const hintButton = document.getElementById('hint-button');
        const state = HintSystem.getHintButtonState();

        // Update button state
        hintButton.disabled = !state.enabled;
        hintButton.title = state.message;

        // Remove old event listener by cloning
        const newHintButton = hintButton.cloneNode(true);
        hintButton.parentNode.replaceChild(newHintButton, hintButton);

        // Add new event listener
        newHintButton.addEventListener('click', () => {
            this.useHint();
        });
    },

    // Use a hint
    useHint() {
        const puzzle = GameEngine.state.currentPuzzle;
        if (!puzzle) return;

        const result = HintSystem.useHint(puzzle);

        if (result.success) {
            // Show hint
            this.displayHint(result.hint, HintSystem.currentPuzzleHintsUsed);

            // Update streak points display
            this.updateStreakPointsDisplay();

            // Update hint button state
            this.setupHintButton();

            // Play sound
            SoundManager.playClick();
            SoundManager.vibrateClick();
        } else {
            if (result.showAdOption) {
                // Show insufficient points modal with ad option
                this.showInsufficientPointsModal();
            } else {
                // Show error message
                alert(result.error);
            }
        }
    },

    // Display hint on screen
    displayHint(hintText, hintNumber) {
        const container = document.getElementById('hint-display-container');

        const hintDisplay = document.createElement('div');
        hintDisplay.className = 'hint-display';
        hintDisplay.innerHTML = `
            <div class="hint-number">Hint ${hintNumber}</div>
            <div class="hint-icon">💡</div>
            <p class="hint-text">${hintText}</p>
        `;

        container.appendChild(hintDisplay);
        container.classList.remove('hidden');

        // Scroll to hint
        hintDisplay.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    },

    // Show insufficient points modal
    showInsufficientPointsModal() {
        // Check ad availability
        const adCheck = HintSystem.canWatchAd();
        const progress = ProgressManager.getProgress();
        const adEconomy = progress.adEconomy || { adsWatchedToday: 0, puzzlesSinceLastAd: 0 };

        const modal = document.createElement('div');
        modal.className = 'insufficient-points-modal';

        // Calculate progress for cooldown bar
        const puzzlesNeeded = HintSystem.PUZZLES_BETWEEN_ADS;
        const puzzlesSolved = adEconomy.puzzlesSinceLastAd || 0;
        const progressPercent = Math.min((puzzlesSolved / puzzlesNeeded) * 100, 100);

        modal.innerHTML = `
            <div class="insufficient-points-content">
                <div class="insufficient-points-icon">😔</div>
                <h3>Not Enough Streak Points</h3>
                <p>You need ${HintSystem.HINT_COST} streak points to use a hint.</p>
                
                <div class="insufficient-points-stats">
                    <div class="insufficient-points-stat">
                        <span class="stat-value">${HintSystem.getStreakPoints()}</span>
                        <span class="stat-label">Your Points</span>
                    </div>
                    <div class="insufficient-points-stat">
                        <span class="stat-value">${HintSystem.HINT_COST}</span>
                        <span class="stat-label">Hint Cost</span>
                    </div>
                </div>

                ${!adCheck.can ? `
                    <div class="ad-cooldown-info">
                        ${adEconomy.puzzlesSinceLastAd < puzzlesNeeded ? `
                            <p style="color: var(--color-text-muted); font-size: 0.875rem; margin-bottom: var(--space-sm);">
                                ${adCheck.reason}
                            </p>
                            <div class="ad-cooldown-progress">
                                <div class="ad-progress-bar">
                                    <div class="ad-progress-fill" style="width: ${progressPercent}%"></div>
                                </div>
                                <div class="ad-progress-text">${puzzlesSolved}/${puzzlesNeeded} puzzles</div>
                            </div>
                        ` : ''}
                        ${adEconomy.adsWatchedToday >= HintSystem.MAX_DAILY_ADS ? `
                            <p style="color: var(--color-warning); font-size: 0.875rem;">
                                Daily ad limit reached (${adEconomy.adsWatchedToday}/${HintSystem.MAX_DAILY_ADS})
                            </p>
                        ` : ''}
                    </div>
                ` : `
                    <p style="color: var(--color-text-muted); font-size: 0.875rem;">
                        Watch a short ad to earn ${HintSystem.AD_REWARD} streak points!
                    </p>
                    <p style="color: var(--color-text-muted); font-size: 0.75rem; margin-top: var(--space-xs);">
                        Ads today: ${adEconomy.adsWatchedToday}/${HintSystem.MAX_DAILY_ADS}
                    </p>
                `}

                <div class="insufficient-points-actions">
                    <button class="watch-ad-button ${!adCheck.can ? 'disabled' : ''}" id="watch-ad-btn" ${!adCheck.can ? 'disabled' : ''}>
                        📺 Watch Ad
                        <span class="ad-reward-amount">
                            <span>🔥</span>
                            <span>+${HintSystem.AD_REWARD}</span>
                        </span>
                    </button>
                    <button class="btn btn-secondary btn-block" id="close-insufficient-modal">
                        Maybe Later
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Event listeners
        const watchAdBtn = document.getElementById('watch-ad-btn');
        if (adCheck.can) {
            watchAdBtn.addEventListener('click', () => {
                this.watchAdForPoints(modal);
            });
        } else {
            watchAdBtn.title = adCheck.reason;
        }

        document.getElementById('close-insufficient-modal').addEventListener('click', () => {
            modal.remove();
        });

        // Click outside to close
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    },

    // Watch ad to earn points
    async watchAdForPoints(modal) {
        // Close modal
        modal.remove();

        // Watch ad
        const result = await HintSystem.watchAdForStreaks();

        if (result.success) {
            // Update display
            this.updateStreakPointsDisplay();

            // Update hint button
            this.setupHintButton();
        }
    },

    // v2.0: Show streak freeze reward notification
    showStreakFreezeReward() {
        this.showNotification('❄️ Streak Freeze Earned!', 'You earned 1 streak freeze for your 7-day streak!', 'success');
        SoundManager.playMilestone();
        SoundManager.vibrateSuccess();
    },

    // v2.0: Show streak protected notification
    showStreakProtected(daysMissed) {
        const freezeText = daysMissed === 1 ? '1 freeze' : `${daysMissed} freezes`;
        this.showNotification('🛡️ Streak Protected!', `Used ${freezeText} to protect your streak!`, 'info');
        SoundManager.playClick();
    },

    // v2.0: Show streak reset notification
    showStreakReset() {
        this.showNotification('🔄 Streak Reset', 'Your day streak reset. Start fresh today!', 'warning');
    },

    // v2.0: Generic notification system
    showNotification(title, message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <h4>${title}</h4>
                <p>${message}</p>
            </div>
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => notification.classList.add('show'), 10);

        // Remove after 4 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 4000);
    },

    // v2.0: Show soft reset notification
    showSoftResetNotification(oldStreak, newStreak) {
        let title, message, type;

        if (newStreak === 0) {
            // Full reset (streak was < 5)
            title = '🔄 Streak Reset';
            message = `Your streak reset to 0. Keep going! 🔥`;
            type = 'warning';
        } else {
            // Soft reset (kept some points)
            const percentage = Math.round((newStreak / oldStreak) * 100);
            title = '💪 Streak Reduced';
            message = `You kept ${newStreak} point${newStreak !== 1 ? 's' : ''} (${percentage}% saved)!`;
            type = 'info';

            // Play encouraging sound
            if (SoundManager && SoundManager.playClick) {
                SoundManager.playClick();
            }
        }

        // Show notification
        this.showNotification(title, message, type);

        // Update streak display immediately
        this.updateStreakPointsDisplay();
    },

    // v2.0: Show session starter bonus animation
    showSessionStarterBonus(bonusPoints, hoursSinceLastSession) {
        const title = '🎉 Welcome Back!';
        const timeText = hoursSinceLastSession >= 24
            ? `${Math.floor(hoursSinceLastSession / 24)} day${Math.floor(hoursSinceLastSession / 24) !== 1 ? 's' : ''} ago`
            : `${Math.floor(hoursSinceLastSession)} hour${Math.floor(hoursSinceLastSession) !== 1 ? 's' : ''} ago`;
        const message = `+${bonusPoints} Starter Bonus! Last played ${timeText}`;

        this.showNotification(title, message, 'success');

        // Show confetti for celebration
        this.showConfetti();

        // Play milestone sound
        if (SoundManager && SoundManager.playMilestone) {
            SoundManager.playMilestone();
            SoundManager.vibrateSuccess();
        }
    },

    // v2.0: Show milestone reward notification
    showMilestoneReward(streak, bonusPoints) {
        let title, icon;

        // Different messages for different milestones
        if (streak === 7) {
            title = '🍀 Lucky 7!';
            icon = '🍀';
        } else if (streak === 10) {
            title = '🔥 Streak 10!';
            icon = '🔥';
        } else if (streak === 15) {
            title = '⭐ Streak 15!';
            icon = '⭐';
        } else if (streak === 20) {
            title = '💎 Streak 20!';
            icon = '💎';
        } else {
            title = `🎯 Streak ${streak}!`;
            icon = '🎯';
        }

        const message = `+${bonusPoints} Bonus Points! Keep the streak alive!`;

        this.showNotification(title, message, 'success');

        // Show confetti
        this.showConfetti();

        // Play milestone sound
        if (SoundManager && SoundManager.playMilestone) {
            SoundManager.playMilestone();
            SoundManager.vibrateSuccess();
        }
    },

    // v2.0: Show Session End Modal
    showSessionEndModal() {
        const summary = AnalyticsManager.getSessionSummary();

        // Only show if user actually played some puzzles
        if (!summary || summary.attempted === 0) return;

        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        // Add animation class
        setTimeout(() => modal.classList.add('visible'), 10);

        modal.innerHTML = `
            <div class="modal-content card-glass" style="max-width: 500px; text-align: center; transform: scale(0.9); transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);">
                <h2 style="margin-bottom: 0.5rem;">🎉 Session Complete!</h2>
                <p style="color: var(--color-text-muted); margin-bottom: 2rem;">Here's how you performed</p>
                
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 2rem;">
                    <div class="stat-box">
                        <div style="font-size: 2.5rem; font-weight: bold; line-height: 1;">${summary.attempted}</div>
                        <div style="font-size: 0.875rem; color: var(--color-text-muted); margin-top: 0.5rem;">Puzzles</div>
                    </div>
                    <div class="stat-box">
                        <div style="font-size: 2.5rem; font-weight: bold; line-height: 1; color: var(--color-success);">${summary.cleared}</div>
                        <div style="font-size: 0.875rem; color: var(--color-text-muted); margin-top: 0.5rem;">Cleared ✅</div>
                    </div>
                    <div class="stat-box">
                        <div style="font-size: 2.5rem; font-weight: bold; line-height: 1; color: var(--color-error);">${summary.failed}</div>
                        <div style="font-size: 0.875rem; color: var(--color-text-muted); margin-top: 0.5rem;">Failed ❌</div>
                    </div>
                    <div class="stat-box">
                        <div style="font-size: 2.5rem; font-weight: bold; line-height: 1; color: var(--color-accent);">${summary.accuracy}%</div>
                        <div style="font-size: 0.875rem; color: var(--color-text-muted); margin-top: 0.5rem;">Accuracy</div>
                    </div>
                </div>

                <div style="background: rgba(255,255,255,0.05); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 2rem;">
                    <div style="font-size: 0.875rem; color: var(--color-text-muted);">Session Duration</div>
                    <div style="font-size: 1.25rem; font-weight: bold;">${summary.duration}</div>
                </div>

                <button onclick="App.closeSessionModal()" class="btn btn-primary btn-large btn-block">
                    Awesome!
                </button>
            </div>
        `;

        // Add minimal styles for the modal if not in CSS
        if (!document.getElementById('session-modal-styles')) {
            const style = document.createElement('style');
            style.id = 'session-modal-styles';
            style.textContent = `
                .modal-overlay {
                    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                    background: rgba(0, 0, 0, 0.8); backdrop-filter: blur(5px);
                    z-index: 1000; display: flex; align-items: center; justify-content: center;
                    opacity: 0; transition: opacity 0.3s ease;
                }
                .modal-overlay.visible { opacity: 1; }
                .modal-overlay.visible .modal-content { transform: scale(1) !important; }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(modal);

        // End the session in analytics
        AnalyticsManager.endSession();

        // Sound
        SoundManager.playMilestone();
    },

    closeSessionModal() {
        const modal = document.querySelector('.modal-overlay');
        if (modal) {
            modal.classList.remove('visible');
            setTimeout(() => modal.remove(), 300);
        }
    }
};

// Make functions globally accessible for game engine callbacks
window.updateTimerDisplay = (seconds) => App.updateTimerDisplay(seconds);
window.handleTimeUp = () => App.handleTimeUp();

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => App.init());
} else {
    App.init();
}
