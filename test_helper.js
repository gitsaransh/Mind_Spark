// ============================================
// MindSpark v2.0 - Testing Helper Script
// ============================================
// Copy and paste this entire file into browser console (F12 → Console)

console.log('🧪 MindSpark v2.0 Testing Helper');
console.log('================================\n');

// Test Helper Functions
const TestHelper = {
    // Setup test data for all scenarios
    setupAllTests() {
        console.log('📋 Setting up test scenarios...\n');

        const progress = ProgressManager.getProgress();

        // Setup for milestone reward test (streak 6 → next correct triggers 7)
        progress.currentStreak = 6;
        console.log('✅ Set streak to 6 (next correct answer triggers Lucky 7!)');

        // Setup for ad cooldown test
        progress.adEconomy = {
            adsWatchedToday: 2,           // Shows "Ads today: 2/6"
            puzzlesSinceLastAd: 2,        // Shows "Solve 3 more puzzles"
            lastAdDate: new Date().toDateString(),
            totalAdsWatched: 2
        };
        console.log('✅ Set ad cooldown to 2/5 puzzles');

        // Setup for streak freeze display
        progress.streakProtection = {
            freezesAvailable: 2,          // Shows 2/3 freezes
            freezesUsed: 1,
            lastFreezeEarned: new Date().toISOString()
        };
        console.log('✅ Set streak freezes to 2/3');

        ProgressManager.saveProgress(progress);

        console.log('\n🎯 Test setup complete!');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
        console.log('📊 Current Status:');
        console.log('   • Streak: 6 (solve 1 more for milestone)');
        console.log('   • Puzzles since last ad: 2/5');
        console.log('   • Ads watched today: 2/6');
        console.log('   • Streak freezes: 2/3\n');
        console.log('🚀 Next Steps:');
        console.log('   1. Reload page (F5 or Ctrl+R)');
        console.log('   2. Start a puzzle');
        console.log('   3. Answer correctly → See milestone!');
        console.log('   4. Try to use hint → See ad cooldown!\n');
    },

    // Test 1: Trigger milestone reward immediately
    testMilestoneReward() {
        console.log('🍀 Testing Milestone Reward...');
        App.showMilestoneReward(7, 2);
        console.log('✅ Milestone notification triggered!');
        console.log('   Check for: Confetti + "Lucky 7!" message\n');
    },

    // Test 2: Trigger session starter bonus
    testSessionStarter() {
        console.log('🎉 Testing Session Starter Bonus...');
        App.showSessionStarterBonus(2, 5);
        console.log('✅ Session starter triggered!');
        console.log('   Check for: "Welcome Back!" + confetti\n');
    },

    // Test 3: Trigger soft reset notification
    testSoftReset() {
        console.log('💪 Testing Soft Reset Notification...');
        App.showSoftResetNotification(15, 9);
        console.log('✅ Soft reset notification triggered!');
        console.log('   Check for: "Streak Reduced" message\n');
    },

    // Test 4: Show ad cooldown UI
    testAdCooldown() {
        console.log('📊 Testing Ad Cooldown UI...');

        // Set points to 0
        const progress = ProgressManager.getProgress();
        progress.currentStreak = 0;
        progress.adEconomy = {
            adsWatchedToday: 2,
            puzzlesSinceLastAd: 2,
            lastAdDate: new Date().toDateString(),
            totalAdsWatched: 2
        };
        ProgressManager.saveProgress(progress);

        console.log('✅ Set points to 0 and cooldown to 2/5');
        console.log('   Now try to use a hint in the game!');
        console.log('   You should see the progress bar\n');
    },

    // Test all notifications at once
    testAllNotifications() {
        console.log('🎨 Testing All Notifications...\n');

        setTimeout(() => {
            console.log('1️⃣ Session Starter...');
            App.showSessionStarterBonus(2, 5);
        }, 500);

        setTimeout(() => {
            console.log('2️⃣ Milestone Reward...');
            App.showMilestoneReward(7, 2);
        }, 2000);

        setTimeout(() => {
            console.log('3️⃣ Soft Reset...');
            App.showSoftResetNotification(15, 9);
        }, 4000);

        setTimeout(() => {
            console.log('4️⃣ Streak Freeze Earned...');
            App.showStreakFreezeReward();
        }, 6000);

        console.log('✅ All notifications will appear in sequence!');
        console.log('   Watch for 4 notifications over 8 seconds\n');
    },

    // Reset everything to start fresh
    reset() {
        console.log('🔄 Resetting all data...');
        localStorage.clear();
        console.log('✅ All data cleared!');
        console.log('   Reload page (F5) to start fresh\n');
    },

    // Show current status
    status() {
        const progress = ProgressManager.getProgress();
        console.log('📊 Current Status:');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log(`   Streak Points: ${progress.currentStreak || 0}`);
        console.log(`   Total Puzzles: ${progress.totalPuzzlesSolved || 0}`);

        if (progress.adEconomy) {
            console.log(`   Puzzles Since Ad: ${progress.adEconomy.puzzlesSinceLastAd || 0}/5`);
            console.log(`   Ads Today: ${progress.adEconomy.adsWatchedToday || 0}/6`);
        }

        if (progress.streakProtection) {
            console.log(`   Streak Freezes: ${progress.streakProtection.freezesAvailable || 0}/3`);
        }
        console.log('');
    },

    // Show help menu
    help() {
        console.log('🎯 MindSpark Testing Helper - Commands:');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('');
        console.log('📋 Setup & Status:');
        console.log('   TestHelper.setupAllTests()     - Setup all test scenarios');
        console.log('   TestHelper.status()            - Show current status');
        console.log('   TestHelper.reset()             - Clear all data');
        console.log('');
        console.log('🧪 Individual Tests:');
        console.log('   TestHelper.testMilestoneReward()  - Show milestone notification');
        console.log('   TestHelper.testSessionStarter()   - Show session starter');
        console.log('   TestHelper.testSoftReset()        - Show soft reset notification');
        console.log('   TestHelper.testAdCooldown()       - Setup ad cooldown test');
        console.log('');
        console.log('🎨 Quick Tests:');
        console.log('   TestHelper.testAllNotifications() - Show all notifications');
        console.log('');
        console.log('💡 Quick Start:');
        console.log('   1. TestHelper.setupAllTests()  - Setup test data');
        console.log('   2. Reload page (F5)');
        console.log('   3. Play the game to see features!');
        console.log('');
    }
};

// Make it globally accessible
window.TestHelper = TestHelper;

// Show help on load
console.log('✅ Testing Helper Loaded!\n');
console.log('Type: TestHelper.help() for commands\n');
console.log('Quick Start: TestHelper.setupAllTests()\n');
