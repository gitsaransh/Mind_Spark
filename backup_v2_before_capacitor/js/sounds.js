// ============================================
// MindSpark - Sound Effects Manager
// ============================================

const SoundManager = {
    sounds: {},
    enabled: true,

    init() {
        // Check if sound is enabled from localStorage
        const soundEnabled = localStorage.getItem('soundEnabled');
        this.enabled = soundEnabled === null ? true : soundEnabled === 'true';

        // Create audio context
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();

        console.log('🔊 Sound Manager initialized');
    },

    // Generate beep sound using Web Audio API
    playBeep(frequency, duration, type = 'sine') {
        if (!this.enabled) return;

        try {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);

            oscillator.frequency.value = frequency;
            oscillator.type = type;

            gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);

            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + duration);
        } catch (e) {
            console.warn('Sound playback failed:', e);
        }
    },

    // Play success sound (correct answer)
    playSuccess() {
        if (!this.enabled) return;

        // Cheerful ascending notes
        this.playBeep(523.25, 0.1); // C5
        setTimeout(() => this.playBeep(659.25, 0.1), 100); // E5
        setTimeout(() => this.playBeep(783.99, 0.2), 200); // G5
    },

    // Play error sound (wrong answer)
    playError() {
        if (!this.enabled) return;

        // Gentle descending tone
        this.playBeep(392, 0.15, 'triangle'); // G4
        setTimeout(() => this.playBeep(349.23, 0.2, 'triangle'), 150); // F4
    },

    // Play click sound
    playClick() {
        if (!this.enabled) return;

        this.playBeep(800, 0.05, 'square');
    },

    // Play streak milestone sound
    playMilestone() {
        if (!this.enabled) return;

        // Celebration melody
        this.playBeep(523.25, 0.1); // C5
        setTimeout(() => this.playBeep(659.25, 0.1), 100); // E5
        setTimeout(() => this.playBeep(783.99, 0.1), 200); // G5
        setTimeout(() => this.playBeep(1046.50, 0.3), 300); // C6
    },

    // Play timer warning sound
    playTimerWarning() {
        if (!this.enabled) return;

        this.playBeep(880, 0.1, 'sine');
    },

    // Toggle sound on/off
    toggle() {
        this.enabled = !this.enabled;
        localStorage.setItem('soundEnabled', this.enabled);
        return this.enabled;
    },

    // Haptic feedback (vibration)
    vibrate(pattern = [50]) {
        if ('vibrate' in navigator) {
            navigator.vibrate(pattern);
        }
    },

    // Success haptic
    vibrateSuccess() {
        this.vibrate([50, 50, 50]);
    },

    // Error haptic
    vibrateError() {
        this.vibrate([100]);
    },

    // Click haptic
    vibrateClick() {
        this.vibrate([10]);
    }
};

// Initialize on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => SoundManager.init());
} else {
    SoundManager.init();
}
