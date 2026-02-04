// ============================================
// MindSpark - Tutorial & Onboarding Manager
// ============================================

const TutorialManager = {
    init() {
        // Check if user has completed tutorial
        const tutorialCompleted = localStorage.getItem('tutorialCompleted');

        if (!tutorialCompleted) {
            this.showTutorial();
        }
    },

    showTutorial() {
        // Create tutorial overlay
        const overlay = document.createElement('div');
        overlay.id = 'tutorial-overlay';
        overlay.className = 'tutorial-overlay';
        overlay.innerHTML = `
            <div class="tutorial-content">
                <div class="tutorial-step active" data-step="1">
                    <div class="tutorial-icon">🧠</div>
                    <h2>Welcome to MindSpark!</h2>
                    <p>Train your analytical thinking through fun, engaging puzzles.</p>
                    <p class="tutorial-subtitle">No memorization. Just pure logic and reasoning.</p>
                    <div class="tutorial-actions">
                        <button class="btn btn-secondary" onclick="TutorialManager.skipTutorial()">Skip</button>
                        <button class="btn btn-primary" onclick="TutorialManager.nextStep()">Next →</button>
                    </div>
                </div>
                
                <div class="tutorial-step" data-step="2">
                    <div class="tutorial-icon">🎮</div>
                    <h2>Choose Your Mode</h2>
                    <div class="tutorial-mode-examples">
                        <div class="tutorial-example-card">
                            <h3>⏱️ Timed Mode</h3>
                            <p>Race against the clock for an exciting challenge</p>
                        </div>
                        <div class="tutorial-example-card">
                            <h3>🧘 Relaxed Mode</h3>
                            <p>Take your time and think deeply</p>
                        </div>
                    </div>
                    <div class="tutorial-actions">
                        <button class="btn btn-secondary" onclick="TutorialManager.prevStep()">← Back</button>
                        <button class="btn btn-primary" onclick="TutorialManager.nextStep()">Next →</button>
                    </div>
                </div>
                
                <div class="tutorial-step" data-step="3">
                    <div class="tutorial-icon">📊</div>
                    <h2>Pick Your Difficulty</h2>
                    <div class="tutorial-difficulty-examples">
                        <div class="tutorial-example-card">
                            <h3>🌱 Beginner</h3>
                            <p>Clear logic, perfect for getting started</p>
                        </div>
                        <div class="tutorial-example-card">
                            <h3>🌿 Intermediate</h3>
                            <p>1-2 thinking steps, moderate challenge</p>
                        </div>
                        <div class="tutorial-example-card">
                            <h3>🌳 Expert</h3>
                            <p>Complex reasoning for experienced thinkers</p>
                        </div>
                    </div>
                    <div class="tutorial-actions">
                        <button class="btn btn-secondary" onclick="TutorialManager.prevStep()">← Back</button>
                        <button class="btn btn-primary" onclick="TutorialManager.nextStep()">Next →</button>
                    </div>
                </div>
                
                <div class="tutorial-step" data-step="4">
                    <div class="tutorial-icon">🔥</div>
                    <h2>Build Your Streak!</h2>
                    <p>Solve puzzles daily to maintain your streak and track your progress.</p>
                    <div class="tutorial-streak-example">
                        <span class="flame-icon">🔥</span>
                        <span class="streak-number">7</span>
                        <span>day streak</span>
                    </div>
                    <p class="tutorial-subtitle">The more you practice, the sharper your thinking becomes!</p>
                    <div class="tutorial-actions">
                        <button class="btn btn-secondary" onclick="TutorialManager.prevStep()">← Back</button>
                        <button class="btn btn-primary" onclick="TutorialManager.completeTutorial()">Start Playing! 🚀</button>
                    </div>
                </div>
                
                <div class="tutorial-progress">
                    <div class="tutorial-dot" data-step="1"></div>
                    <div class="tutorial-dot" data-step="2"></div>
                    <div class="tutorial-dot" data-step="3"></div>
                    <div class="tutorial-dot" data-step="4"></div>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);
        this.currentStep = 1;
        this.updateProgress();
    },

    nextStep() {
        const currentStepEl = document.querySelector(`.tutorial-step[data-step="${this.currentStep}"]`);
        currentStepEl.classList.remove('active');

        this.currentStep++;

        const nextStepEl = document.querySelector(`.tutorial-step[data-step="${this.currentStep}"]`);
        nextStepEl.classList.add('active');

        this.updateProgress();
        SoundManager.playClick();
    },

    prevStep() {
        const currentStepEl = document.querySelector(`.tutorial-step[data-step="${this.currentStep}"]`);
        currentStepEl.classList.remove('active');

        this.currentStep--;

        const prevStepEl = document.querySelector(`.tutorial-step[data-step="${this.currentStep}"]`);
        prevStepEl.classList.add('active');

        this.updateProgress();
        SoundManager.playClick();
    },

    updateProgress() {
        document.querySelectorAll('.tutorial-dot').forEach((dot, index) => {
            if (index < this.currentStep) {
                dot.classList.add('completed');
            } else {
                dot.classList.remove('completed');
            }

            if (index === this.currentStep - 1) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    },

    completeTutorial() {
        localStorage.setItem('tutorialCompleted', 'true');
        const overlay = document.getElementById('tutorial-overlay');
        overlay.classList.add('fade-out');

        SoundManager.playMilestone();
        SoundManager.vibrateSuccess();

        setTimeout(() => {
            overlay.remove();
        }, 300);
    },

    skipTutorial() {
        if (confirm('Are you sure you want to skip the tutorial?')) {
            this.completeTutorial();
        }
    },

    // Allow users to replay tutorial from settings
    resetTutorial() {
        localStorage.removeItem('tutorialCompleted');
        this.showTutorial();
    }
};

// Make globally accessible
window.TutorialManager = TutorialManager;
