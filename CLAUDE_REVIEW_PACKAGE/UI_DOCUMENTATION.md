# MindSpark - UI/UX Documentation

**Date:** February 13, 2026  
**For:** Claude Sonnet Content Review

---

## 🎨 VISUAL DESIGN OVERVIEW

### Design Philosophy:
- **Modern & Premium:** Glassmorphism, gradients, smooth animations
- **Dark Mode First:** Primary theme with vibrant accents
- **Minimalist:** Clean, uncluttered interface
- **Engaging:** Micro-interactions, confetti, haptic feedback
- **Professional:** Not basic or cheap-looking

### Color Palette:
```css
Primary: #6366f1 (Indigo/Purple)
Success: #10b981 (Green)
Warning: #f59e0b (Amber)
Error: #ef4444 (Red)
Background: #0f172a (Dark Navy)
Surface: rgba(255, 255, 255, 0.05) (Glassmorphic)
Text: #f8fafc (Light Gray)
Text Muted: #94a3b8 (Gray)
```

---

## 📱 SCREEN BREAKDOWN

### 1. HOME SCREEN
**Purpose:** Main dashboard, streak tracking, mode selection

**Key Elements:**
- **Header:**
  - App logo "MindSpark" with brain icon
  - Streak counter (🔥 7 Day Streak)
  - Streak points display (⚡ 12 Points)

- **Streak Card (Glassmorphic):**
  - Current streak: Large number with fire emoji
  - Calendar grid showing last 7 days (✓ or ✗)
  - Streak freeze indicator (if active)
  - "Watch Ad for +3 Points" button

- **Mode Selection (3 Cards):**
  1. **Timed Challenge** ⏱️
     - "Race against time"
     - Purple gradient background
     - Play button

  2. **Relaxed Mode** 🧘
     - "No pressure, just fun"
     - Blue gradient background
     - Play button

  3. **Practice Mode** 📚
     - "Review past puzzles"
     - Green gradient background
     - Play button

- **Quick Stats:**
  - Total puzzles solved
  - Accuracy percentage
  - Badges earned

- **Footer:**
  - Settings icon
  - Progress icon
  - Badges icon

**Visual Style:**
- Dark background with subtle gradient
- Glassmorphic cards with blur effect
- Smooth hover/tap animations
- Confetti animation on streak milestones

---

### 2. CATEGORY SELECTION SCREEN
**Purpose:** Choose puzzle category

**Key Elements:**
- **Header:**
  - "Choose Category" title
  - Back button
  - Selected mode indicator

- **Category Cards (4 options):**
  1. **Logic Puzzles** 🧩
     - "Test your reasoning"
     - Icon: Brain/puzzle piece
     - Puzzle count: "80+ puzzles"

  2. **Math Challenges** 🔢
     - "Sharpen your calculations"
     - Icon: Calculator/numbers
     - Puzzle count: "60+ puzzles"

  3. **Pattern Recognition** 🎯
     - "Find the sequence"
     - Icon: Pattern/sequence
     - Puzzle count: "120+ puzzles"

  4. **Mixed Challenge** 🎲
     - "Random from all categories"
     - Icon: Shuffle/dice
     - Puzzle count: "All puzzles"

**Visual Style:**
- Large, tappable cards
- Category icons with gradient backgrounds
- Smooth scale animation on tap
- Disabled state for locked categories (future)

---

### 3. DIFFICULTY SELECTION SCREEN
**Purpose:** Choose difficulty level

**Key Elements:**
- **Header:**
  - "Choose Difficulty" title
  - Back button
  - Category indicator

- **Difficulty Cards (3 options):**
  1. **Beginner** 🌱
     - "Perfect for starters"
     - "20-30 seconds per puzzle"
     - Green color scheme
     - Success rate: 80%+

  2. **Intermediate** ⚡
     - "Ready for a challenge"
     - "30-60 seconds per puzzle"
     - Yellow/orange color scheme
     - Success rate: 60-70%

  3. **Expert** 🔥
     - "For puzzle masters"
     - "60-120 seconds per puzzle"
     - Red/purple color scheme
     - Success rate: 40-50%

**Visual Style:**
- Vertical cards with difficulty indicators
- Progress bars showing completion percentage
- Recommended difficulty highlighted
- Smooth transitions

---

### 4. GAMEPLAY SCREEN
**Purpose:** Main puzzle-solving interface

**Key Elements:**
- **Header:**
  - Timer (if timed mode): "⏱️ 0:45"
  - Puzzle counter: "Puzzle 3/10"
  - Pause button
  - Exit button

- **Puzzle Card (Center):**
  - **Question Section:**
    - Puzzle type badge (e.g., "Pattern")
    - Question text (large, readable)
    - Content/sequence (if applicable)
    - Example: "2, 4, 8, 16, ?"

  - **Options Section (4 buttons):**
    - A) Option 1
    - B) Option 2
    - C) Option 3
    - D) Option 4
    - Large, tappable buttons
    - Hover/tap feedback

- **Bottom Actions:**
  - **Hint Button:** "💡 Hint (3 points)"
    - Shows cost in streak points
    - Disabled if insufficient points
    - Tap to use hint

  - **Skip Button:** "⏭️ Skip"
    - Available in relaxed mode only
    - Counts as incorrect

- **Hint Display (when used):**
  - Appears below question
  - Light bulb icon
  - Helpful tip (not the answer)
  - Subtle yellow background

**Visual Style:**
- Clean, focused layout
- Large, readable text (18-20px)
- High contrast for readability
- Smooth animations on selection
- Haptic feedback on tap

---

### 5. ANSWER FEEDBACK SCREEN
**Purpose:** Show if answer was correct/incorrect

**Correct Answer:**
- **Visual:**
  - Green checkmark animation (✓)
  - Confetti explosion
  - "Correct! 🎉" message
  - Points earned: "+1 Streak Point"

- **Explanation Card:**
  - "Why this is correct:"
  - Detailed explanation
  - Educational content

- **Action Button:**
  - "Next Puzzle" (auto-advances in 3s)

**Incorrect Answer:**
- **Visual:**
  - Red X animation (✗)
  - "Incorrect" message
  - Correct answer highlighted

- **Explanation Card:**
  - "The correct answer is: [B]"
  - Detailed explanation
  - Learning opportunity

- **Action Button:**
  - "Next Puzzle" (auto-advances in 5s)

**Visual Style:**
- Full-screen overlay
- Blur background
- Large, clear feedback
- Smooth fade-in animation
- Sound effects + haptics

---

### 6. SESSION RESULTS SCREEN
**Purpose:** Show performance summary after session

**Key Elements:**
- **Header:**
  - "Session Complete! 🎉"
  - Trophy/medal icon

- **Performance Stats (Cards):**
  1. **Puzzles Solved:**
     - "8/10 Completed"
     - Progress bar (80%)

  2. **Accuracy:**
     - "75% Correct"
     - Pie chart or percentage

  3. **Time Taken:**
     - "12:34 Total Time"
     - Average time per puzzle

  4. **Streak Points:**
     - "+5 Points Earned"
     - New total: "17 Points"

- **Achievements (if any):**
  - Badge unlocked animation
  - "New Badge: Speed Demon!"
  - Badge icon with description

- **Action Buttons:**
  - "Play Again" (same settings)
  - "Change Mode" (back to home)
  - "Share Results" (social media)

**Visual Style:**
- Celebratory feel
- Gradient backgrounds
- Smooth card animations
- Confetti for high scores
- Encouraging messages

---

### 7. PROGRESS SCREEN
**Purpose:** Track overall progress and statistics

**Key Elements:**
- **Header:**
  - "Your Progress" title
  - Back button

- **Overview Cards:**
  1. **Total Puzzles:**
     - "127 Puzzles Solved"
     - Progress bar to next milestone

  2. **Current Streak:**
     - "🔥 7 Day Streak"
     - Best streak: "12 days"

  3. **Accuracy:**
     - "72% Overall Accuracy"
     - Breakdown by difficulty

- **Performance by Category:**
  - Logic: 45 solved, 78% accuracy
  - Math: 32 solved, 65% accuracy
  - Pattern: 50 solved, 80% accuracy

- **Performance by Difficulty:**
  - Beginner: 60 solved, 85% accuracy
  - Intermediate: 50 solved, 68% accuracy
  - Expert: 17 solved, 45% accuracy

- **Recent Sessions (List):**
  - Date, puzzles solved, accuracy
  - Scrollable list

**Visual Style:**
- Data visualization (charts, graphs)
- Color-coded by performance
- Smooth scroll animations
- Interactive elements

---

### 8. BADGES SCREEN
**Purpose:** Show achievements and badges

**Key Elements:**
- **Header:**
  - "Achievements" title
  - "12/25 Unlocked"

- **Badge Grid:**
  - Unlocked badges: Full color, animated
  - Locked badges: Grayscale, silhouette
  - Each badge shows:
    - Icon
    - Name
    - Description
    - Unlock date (if unlocked)

- **Badge Categories:**
  - **Streak Badges:**
    - First Streak (1 day)
    - Week Warrior (7 days)
    - Month Master (30 days)

  - **Puzzle Badges:**
    - First Solve
    - Century Club (100 puzzles)
    - Puzzle Master (500 puzzles)

  - **Accuracy Badges:**
    - Perfect 10 (10 correct in a row)
    - Sharp Mind (90%+ accuracy)

  - **Speed Badges:**
    - Speed Demon (solve in <10s)
    - Lightning Fast (average <20s)

**Visual Style:**
- Grid layout (3-4 columns)
- Unlock animations (confetti, glow)
- Progress indicators for locked badges
- Tap to view details

---

### 9. SETTINGS SCREEN
**Purpose:** App preferences and controls

**Key Elements:**
- **Header:**
  - "Settings" title
  - Back button

- **Settings Groups:**

  1. **Audio:**
     - Sound Effects: Toggle ON/OFF
     - Background Music: Toggle ON/OFF (future)
     - Volume Slider

  2. **Haptics:**
     - Vibration Feedback: Toggle ON/OFF

  3. **Gameplay:**
     - Auto-advance: Toggle ON/OFF
     - Show Hints: Toggle ON/OFF
     - Timer Display: Always/Never/Timed Mode Only

  4. **Data:**
     - Reset Progress: Button (with confirmation)
     - Export Data: Button (future)
     - Clear Cache: Button

  5. **About:**
     - Version: v2.0
     - Privacy Policy: Link
     - Terms of Service: Link
     - Contact Us: Email link

**Visual Style:**
- List layout with sections
- Toggle switches with animations
- Confirmation dialogs for destructive actions
- Clean, organized interface

---

### 10. AD WATCHING SCREEN
**Purpose:** Show rewarded video ad

**Key Elements:**
- **Before Ad:**
  - "Watch Ad to Earn Streak Points"
  - "+3 Points Reward"
  - "Continue" button

- **During Ad (Mock):**
  - "📺 Advertisement"
  - Countdown: "5 seconds remaining"
  - "Thank you for supporting MindSpark! 💜"

- **After Ad:**
  - "Reward Earned! 🎉"
  - "+3 Streak Points"
  - Confetti animation
  - Auto-close after 2s

**Visual Style:**
- Full-screen overlay
- Clear countdown
- Encouraging messages
- Smooth transitions

---

## 🎭 ANIMATIONS & INTERACTIONS

### Micro-Interactions:
- **Button Tap:** Scale down (0.95) + haptic
- **Card Hover:** Lift effect (shadow + translate)
- **Correct Answer:** Confetti + green glow
- **Incorrect Answer:** Shake animation + red flash
- **Badge Unlock:** Scale up + rotate + confetti
- **Streak Milestone:** Fireworks animation

### Transitions:
- **Screen Change:** Fade + slide (300ms)
- **Modal Open:** Scale up + fade (200ms)
- **Modal Close:** Scale down + fade (200ms)
- **List Items:** Stagger animation (50ms delay)

### Loading States:
- **Initial Load:** Splash screen with logo
- **Data Load:** Skeleton screens
- **Ad Load:** Spinner with message

---

## 📐 RESPONSIVE DESIGN

### Mobile (Primary):
- **Portrait:** Optimized layout
- **Landscape:** Adjusted for wider screen
- **Touch Targets:** Minimum 44x44px
- **Font Sizes:** 16-20px for readability

### Tablet:
- **Larger Cards:** More spacing
- **Two-Column Layout:** Where applicable
- **Bigger Touch Targets:** 48x48px

### Desktop:
- **Max Width:** 600px (centered)
- **Keyboard Support:** Arrow keys, Enter
- **Mouse Hover:** Visual feedback
- **Larger Text:** 18-22px

---

## 🎨 UI COMPONENTS LIBRARY

### Buttons:
- **Primary:** Purple gradient, white text
- **Secondary:** Transparent, border, purple text
- **Success:** Green gradient
- **Danger:** Red gradient
- **Disabled:** Gray, 50% opacity

### Cards:
- **Glassmorphic:** Blur, semi-transparent
- **Elevated:** Shadow, solid background
- **Flat:** No shadow, subtle border

### Typography:
- **Headings:** Bold, 24-32px
- **Body:** Regular, 16-18px
- **Small:** 12-14px
- **Font:** System font stack (San Francisco, Roboto)

### Icons:
- **Emojis:** For visual appeal (🔥, ⚡, 🎯)
- **SVG Icons:** For UI elements
- **Consistent Size:** 24x24px or 32x32px

---

## 📸 SCREENSHOT DESCRIPTIONS

### Screenshot 1: Home Screen
- Dark background with purple gradient
- Large streak counter: "🔥 7 Day Streak"
- Three mode cards (Timed, Relaxed, Practice)
- Glassmorphic design
- Bottom navigation

### Screenshot 2: Gameplay Screen
- Clean puzzle display
- Question: "What comes next in the pattern?"
- Four option buttons (A, B, C, D)
- Timer at top
- Hint button at bottom

### Screenshot 3: Correct Answer Feedback
- Green checkmark animation
- Confetti particles
- "Correct! 🎉" message
- Explanation card
- "+1 Streak Point" indicator

### Screenshot 4: Progress Screen
- Statistics cards
- Charts showing performance
- Breakdown by category
- Recent sessions list

### Screenshot 5: Badges Screen
- Grid of achievement badges
- Unlocked badges in color
- Locked badges in grayscale
- Progress indicators

### Screenshot 6: Session Results
- "Session Complete!" header
- Performance stats (8/10, 75%)
- Points earned
- "Play Again" button

### Screenshot 7: Streak Calendar
- 7-day calendar grid
- Checkmarks for completed days
- Streak freeze indicator
- Encouraging message

### Screenshot 8: Settings Screen
- Clean list layout
- Toggle switches
- Privacy Policy link
- Version information

---

## 🎯 UX PRINCIPLES

### 1. **Immediate Feedback:**
- Every action has visual/haptic response
- No waiting without indication
- Clear success/error states

### 2. **Progressive Disclosure:**
- Show only what's needed
- Reveal complexity gradually
- Tutorials for new features

### 3. **Forgiveness:**
- Confirm destructive actions
- Allow undo where possible
- Save progress automatically

### 4. **Consistency:**
- Same patterns throughout
- Predictable behavior
- Familiar UI elements

### 5. **Accessibility:**
- High contrast text
- Large touch targets
- Screen reader support (future)
- Keyboard navigation (web)

---

## 🚀 PERFORMANCE

### Load Times:
- **Initial Load:** <2 seconds
- **Screen Transitions:** <300ms
- **Animation Frame Rate:** 60 FPS
- **Offline Support:** Full functionality

### Optimization:
- Lazy load images
- Minimize JavaScript
- Cache static assets
- Compress resources

---

**For Claude Review:** Please evaluate if the UI/UX supports:
1. Easy puzzle comprehension
2. Clear answer selection
3. Engaging feedback
4. Motivating progress tracking
5. Minimal friction in user flow

---

*Prepared for Claude Sonnet Content Review*  
*Date: February 13, 2026*
