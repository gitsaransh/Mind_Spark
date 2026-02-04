// ============================================
// MindSpark - Social Sharing Manager
// ============================================

const ShareManager = {
    // Generate shareable text for achievements
    generateShareText(stats) {
        const { streak, accuracy, totalPuzzles } = stats;

        const messages = [
            `🧠 Just solved ${totalPuzzles} puzzles on MindSpark with ${accuracy}% accuracy! 🔥 ${streak}-day streak!`,
            `💡 Training my analytical thinking on MindSpark! ${streak} days strong with ${accuracy}% accuracy! 🚀`,
            `🎯 ${totalPuzzles} puzzles conquered on MindSpark! ${accuracy}% accuracy and a ${streak}-day streak! 🔥`,
            `🧩 Sharpening my mind with MindSpark! ${streak}-day streak, ${accuracy}% accuracy, ${totalPuzzles} puzzles solved! 💪`
        ];

        return messages[Math.floor(Math.random() * messages.length)];
    },

    // Share achievement using Web Share API
    async shareAchievement(stats) {
        const shareText = this.generateShareText(stats);
        const shareData = {
            title: 'MindSpark Achievement',
            text: shareText,
            url: window.location.href
        };

        // Check if Web Share API is supported
        if (navigator.share) {
            try {
                await navigator.share(shareData);
                SoundManager.playSuccess();
                return true;
            } catch (err) {
                if (err.name !== 'AbortError') {
                    console.warn('Share failed:', err);
                    this.fallbackShare(shareText);
                }
            }
        } else {
            this.fallbackShare(shareText);
        }
    },

    // Fallback: Copy to clipboard
    fallbackShare(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                this.showCopyNotification();
                SoundManager.playSuccess();
            }).catch(err => {
                console.error('Copy failed:', err);
                this.showShareDialog(text);
            });
        } else {
            this.showShareDialog(text);
        }
    },

    // Show copy notification
    showCopyNotification() {
        const notification = document.createElement('div');
        notification.className = 'share-notification';
        notification.innerHTML = `
            <span>✓</span>
            <span>Copied to clipboard!</span>
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    },

    // Show share dialog with text
    showShareDialog(text) {
        const dialog = document.createElement('div');
        dialog.className = 'share-dialog-overlay';
        dialog.innerHTML = `
            <div class="share-dialog">
                <h3>Share Your Achievement</h3>
                <textarea readonly>${text}</textarea>
                <div class="share-dialog-actions">
                    <button class="btn btn-secondary" onclick="this.closest('.share-dialog-overlay').remove()">Close</button>
                    <button class="btn btn-primary" onclick="ShareManager.copyFromDialog(this)">Copy Text</button>
                </div>
            </div>
        `;

        document.body.appendChild(dialog);

        // Select text
        const textarea = dialog.querySelector('textarea');
        textarea.select();
    },

    // Copy text from dialog
    copyFromDialog(button) {
        const textarea = button.closest('.share-dialog').querySelector('textarea');
        textarea.select();
        document.execCommand('copy');

        button.textContent = '✓ Copied!';
        button.disabled = true;

        SoundManager.playSuccess();

        setTimeout(() => {
            button.closest('.share-dialog-overlay').remove();
        }, 1000);
    },

    // Generate achievement image (canvas-based)
    generateAchievementImage(stats) {
        const canvas = document.createElement('canvas');
        canvas.width = 1200;
        canvas.height = 630;
        const ctx = canvas.getContext('2d');

        // Background gradient
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#5856D6');
        gradient.addColorStop(1, '#7B68EE');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Title
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 72px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('MindSpark', canvas.width / 2, 120);

        // Stats
        ctx.font = 'bold 96px Inter, sans-serif';
        ctx.fillText(`🔥 ${stats.streak}`, canvas.width / 2, 280);

        ctx.font = '48px Inter, sans-serif';
        ctx.fillText('Day Streak', canvas.width / 2, 340);

        // Additional stats
        ctx.font = 'bold 36px Inter, sans-serif';
        ctx.fillText(`${stats.accuracy}% Accuracy • ${stats.totalPuzzles} Puzzles Solved`, canvas.width / 2, 450);

        // Footer
        ctx.font = '32px Inter, sans-serif';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fillText('Train your thinking, not your memory', canvas.width / 2, 550);

        return canvas.toDataURL('image/png');
    },

    // Download achievement image
    downloadAchievementImage(stats) {
        const imageData = this.generateAchievementImage(stats);
        const link = document.createElement('a');
        link.download = `mindspark-achievement-${Date.now()}.png`;
        link.href = imageData;
        link.click();

        SoundManager.playSuccess();
    }
};

// Make globally accessible
window.ShareManager = ShareManager;
