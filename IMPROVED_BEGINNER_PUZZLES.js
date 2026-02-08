// ============================================
// IMPROVED BEGINNER PUZZLES - BALANCED DIFFICULTY
// Not too easy, not too hard - just right!
// ============================================

// Replace the current beginner puzzles with these:

// MATH - BEGINNER (Improved)
{
    id: 'math_beginner_1',
        type: PUZZLE_TYPES.MATH,
            difficulty: DIFFICULTY.BEGINNER,
                question: 'If 2 chocolates cost ₹10, how much do 5 chocolates cost?',
                    content: '2 chocolates = ₹10, 5 chocolates = ?',
                        options: ['₹20', '₹25', '₹30', '₹15'],
                            correctAnswer: 1,
                                explanation: 'Each chocolate costs ₹5 (10÷2). So 5 chocolates cost ₹25 (5×5).',
                                    estimatedTime: 30
},
{
    id: 'math_beginner_2',
        type: PUZZLE_TYPES.MATH,
            difficulty: DIFFICULTY.BEGINNER,
                question: 'What is 15 + 23?',
                    content: '15 + 23 = ?',
                        options: ['36', '38', '40', '42'],
                            correctAnswer: 1,
                                explanation: '15 + 23 = 38',
                                    estimatedTime: 30
},
{
    id: 'math_beginner_3',
        type: PUZZLE_TYPES.MATH,
            difficulty: DIFFICULTY.BEGINNER,
                question: 'How many minutes are in 2 hours?',
                    content: '2 hours = ? minutes',
                        options: ['100', '120', '140', '60'],
                            correctAnswer: 1,
                                explanation: '1 hour = 60 minutes, so 2 hours = 120 minutes.',
                                    estimatedTime: 30
},
{
    id: 'math_beginner_4',
        type: PUZZLE_TYPES.MATH,
            difficulty: DIFFICULTY.BEGINNER,
                question: 'What is 8 × 7?',
                    content: '8 × 7 = ?',
                        options: ['54', '56', '58', '64'],
                            correctAnswer: 1,
                                explanation: '8 × 7 = 56',
                                    estimatedTime: 30
},
{
    id: 'math_beginner_5',
        type: PUZZLE_TYPES.MATH,
            difficulty: DIFFICULTY.BEGINNER,
                question: 'If you have ₹100 and spend ₹35, how much is left?',
                    content: '₹100 - ₹35 = ?',
                        options: ['₹55', '₹65', '₹75', '₹85'],
                            correctAnswer: 1,
                                explanation: '100 - 35 = 65',
                                    estimatedTime: 30
},

// LOGIC - BEGINNER (Improved)
{
    id: 'logic_beginner_1',
        type: PUZZLE_TYPES.LOGIC,
            difficulty: DIFFICULTY.BEGINNER,
                question: 'Which one is different?',
                    content: 'Dog, Cat, Parrot, Table',
                        options: ['Dog', 'Cat', 'Parrot', 'Table'],
                            correctAnswer: 3,
                                explanation: 'Dog, Cat, and Parrot are animals. Table is furniture.',
                                    estimatedTime: 30
},
{
    id: 'logic_beginner_2',
        type: PUZZLE_TYPES.LOGIC,
            difficulty: DIFFICULTY.BEGINNER,
                question: 'If all roses are flowers, and this is a rose, then:',
                    content: 'All roses are flowers. This is a rose.',
                        options: ['This is not a flower', 'This is a flower', 'Cannot tell', 'This is a tree'],
                            correctAnswer: 1,
                                explanation: 'If all roses are flowers, and this is a rose, then this must be a flower.',
                                    estimatedTime: 30
},
{
    id: 'logic_beginner_3',
        type: PUZZLE_TYPES.LOGIC,
            difficulty: DIFFICULTY.BEGINNER,
                question: 'Ravi is older than Amit. Amit is older than Priya. Who is youngest?',
                    content: 'Ravi > Amit > Priya',
                        options: ['Ravi', 'Amit', 'Priya', 'All same age'],
                            correctAnswer: 2,
                                explanation: 'Priya is younger than both Amit and Ravi, so she is the youngest.',
                                    estimatedTime: 30
},
{
    id: 'logic_beginner_4',
        type: PUZZLE_TYPES.LOGIC,
            difficulty: DIFFICULTY.BEGINNER,
                question: 'Which doesn\'t belong?',
                    content: 'Monday, January, Wednesday, Friday',
                        options: ['Monday', 'January', 'Wednesday', 'Friday'],
                            correctAnswer: 1,
                                explanation: 'Monday, Wednesday, and Friday are days of the week. January is a month.',
                                    estimatedTime: 30
},
{
    id: 'logic_beginner_5',
        type: PUZZLE_TYPES.LOGIC,
            difficulty: DIFFICULTY.BEGINNER,
                question: 'If today is Tuesday, what day was it 3 days ago?',
                    content: 'Today = Tuesday, 3 days ago = ?',
                        options: ['Friday', 'Saturday', 'Sunday', 'Monday'],
                            correctAnswer: 1,
                                explanation: 'Counting back: Tuesday → Monday → Sunday → Saturday.',
                                    estimatedTime: 30
},

// PATTERN - BEGINNER (Improved)
{
    id: 'pattern_beginner_1',
        type: PUZZLE_TYPES.PATTERN,
            difficulty: DIFFICULTY.BEGINNER,
                question: 'What comes next?',
                    content: '3, 6, 9, 12, ?',
                        options: ['13', '14', '15', '16'],
                            correctAnswer: 2,
                                explanation: 'The pattern adds 3 each time: 3, 6, 9, 12, then 15.',
                                    estimatedTime: 30
},
{
    id: 'pattern_beginner_2',
        type: PUZZLE_TYPES.PATTERN,
            difficulty: DIFFICULTY.BEGINNER,
                question: 'Complete the pattern:',
                    content: 'A, C, E, G, ?',
                        options: ['H', 'I', 'J', 'K'],
                            correctAnswer: 1,
                                explanation: 'Skip one letter each time: A, C (skip B), E (skip D), G (skip F), I (skip H).',
                                    estimatedTime: 30
},
{
    id: 'pattern_beginner_3',
        type: PUZZLE_TYPES.PATTERN,
            difficulty: DIFFICULTY.BEGINNER,
                question: 'What number comes next?',
                    content: '5, 10, 20, 40, ?',
                        options: ['60', '70', '80', '90'],
                            correctAnswer: 2,
                                explanation: 'Each number is doubled: 5×2=10, 10×2=20, 20×2=40, so 40×2=80.',
                                    estimatedTime: 30
},
{
    id: 'pattern_beginner_4',
        type: PUZZLE_TYPES.PATTERN,
            difficulty: DIFFICULTY.BEGINNER,
                question: 'Find the pattern:',
                    content: '1, 4, 7, 10, ?',
                        options: ['11', '12', '13', '14'],
                            correctAnswer: 2,
                                explanation: 'The pattern adds 3 each time: 1+3=4, 4+3=7, 7+3=10, so 10+3=13.',
                                    estimatedTime: 30
},
{
    id: 'pattern_beginner_5',
        type: PUZZLE_TYPES.PATTERN,
            difficulty: DIFFICULTY.BEGINNER,
                question: 'What comes next?',
                    content: '100, 90, 80, 70, ?',
                        options: ['65', '60', '55', '50'],
                            correctAnswer: 1,
                                explanation: 'Each number decreases by 10: 100-10=90, 90-10=80, so 70-10=60.',
                                    estimatedTime: 30
},
{
    id: 'pattern_beginner_6',
        type: PUZZLE_TYPES.PATTERN,
            difficulty: DIFFICULTY.BEGINNER,
                question: 'Complete the sequence:',
                    content: 'Monday, Wednesday, Friday, ?',
                        options: ['Saturday', 'Sunday', 'Monday', 'Tuesday'],
                            correctAnswer: 1,
                                explanation: 'Skip one day each time: Mon, Wed (skip Tue), Fri (skip Thu), Sun (skip Sat).',
                                    estimatedTime: 30
},
{
    id: 'pattern_beginner_7',
        type: PUZZLE_TYPES.PATTERN,
            difficulty: DIFFICULTY.BEGINNER,
                question: 'What number replaces the question mark?',
                    content: '2, 4, 8, 16, ?',
                        options: ['20', '24', '28', '32'],
                            correctAnswer: 3,
                                explanation: 'Each number is doubled: 2×2=4, 4×2=8, 8×2=16, so 16×2=32.',
                                    estimatedTime: 30
},
{
    id: 'pattern_beginner_8',
        type: PUZZLE_TYPES.PATTERN,
            difficulty: DIFFICULTY.BEGINNER,
                question: 'Find the next letter:',
                    content: 'B, D, F, H, ?',
                        options: ['I', 'J', 'K', 'L'],
                            correctAnswer: 1,
                                explanation: 'Skip one letter each time: B, D (skip C), F (skip E), H (skip G), J (skip I).',
                                    estimatedTime: 30
},
{
    id: 'pattern_beginner_9',
        type: PUZZLE_TYPES.PATTERN,
            difficulty: DIFFICULTY.BEGINNER,
                question: 'What comes next?',
                    content: '50, 45, 40, 35, ?',
                        options: ['32', '30', '28', '25'],
                            correctAnswer: 1,
                                explanation: 'Each number decreases by 5: 50-5=45, 45-5=40, so 35-5=30.',
                                    estimatedTime: 30
},
{
    id: 'pattern_beginner_10',
        type: PUZZLE_TYPES.PATTERN,
            difficulty: DIFFICULTY.BEGINNER,
                question: 'Complete the pattern:',
                    content: '7, 14, 21, 28, ?',
                        options: ['32', '33', '35', '36'],
                            correctAnswer: 2,
                                explanation: 'Multiples of 7: 7×1, 7×2, 7×3, 7×4, so next is 7×5=35.',
                                    estimatedTime: 30
}

// Total: 20 improved beginner puzzles
// Difficulty: Moderate - requires thinking but not too hard
// Suitable for: Ages 12+ (your primary audience)
