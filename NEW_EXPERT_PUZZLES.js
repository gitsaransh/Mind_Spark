// ============================================
// NEW EXPERT PUZZLES (Added Feb 7 2026)
// Advanced Logic, Math, and Patterns
// ============================================

// EXPERT LOGIC
{
    id: 'logic_expert_new_1',
        type: PUZZLE_TYPES.LOGIC,
            difficulty: DIFFICULTY.EXPERT,
                question: 'If "CAT" = 24 and "DOG" = 26, what is "RAT"?',
                    content: 'CAT=24, DOG=26, RAT=?',
                        options: ['39', '40', '38', '42'],
                            correctAnswer: 0,
                                explanation: 'Letters are numbered: A=1, B=2... C(3)+A(1)+T(20)=24. D(4)+O(15)+G(7)=26. R(18)+A(1)+T(20)=39.',
                                    estimatedTime: 60
},
{
    id: 'logic_expert_new_2',
        type: PUZZLE_TYPES.LOGIC,
            difficulty: DIFFICULTY.EXPERT,
                question: 'Brothers and Sisters I have none, but that man\'s father is my father\'s son. Who is "that man"?',
                    content: 'Who is looking at the photo?',
                        options: ['My Son', 'Me', 'My Father', 'My Uncle'],
                            correctAnswer: 0,
                                explanation: '"My father\'s son" with no siblings must be ME. So "That man\'s father is ME". Therefore, that man is my son.',
                                    estimatedTime: 60
},
{
    id: 'logic_expert_new_3',
        type: PUZZLE_TYPES.LOGIC,
            difficulty: DIFFICULTY.EXPERT,
                question: 'Which day is 3 days before the day after tomorrow?',
                    content: 'Today is Sunday. Target day?',
                        options: ['Friday', 'Saturday', 'Yesterday', 'Thursday'],
                            correctAnswer: 2,
                                explanation: 'Day after tomorrow = Tuesday. 3 days before Tuesday = Saturday (which is Yesterday).',
                                    estimatedTime: 60
},
{
    id: 'logic_expert_new_4',
        type: PUZZLE_TYPES.LOGIC,
            difficulty: DIFFICULTY.EXPERT,
                question: 'Find the odd one out:',
                    content: '81, 64, 49, 35, 25',
                        options: ['64', '35', '49', '81'],
                            correctAnswer: 1,
                                explanation: 'All others are perfect squares: 9², 8², 7², 5². 35 is not a square.',
                                    estimatedTime: 45
},
{
    id: 'logic_expert_new_5',
        type: PUZZLE_TYPES.LOGIC,
            difficulty: DIFFICULTY.EXPERT,
                question: 'If 5 cats catch 5 mice in 5 minutes, how many cats to catch 100 mice in 100 minutes?',
                    content: '5 cats -> 5 mice -> 5 min. Cats for 100 mice in 100 min?',
                        options: ['100', '5', '20', '50'],
                            correctAnswer: 1,
                                explanation: '1 cat catches 1 mouse in 5 minutes. In 100 minutes, 1 cat catches 20 mice. So 5 cats catch 100 mice.',
                                    estimatedTime: 60
},

// EXPERT MATH
{
    id: 'math_expert_new_1',
        type: PUZZLE_TYPES.MATH,
            difficulty: DIFFICULTY.EXPERT,
                question: 'What is 15% of 80 plus 20% of 50?',
                    content: '(15% of 80) + (20% of 50) = ?',
                        options: ['18', '20', '22', '24'],
                            correctAnswer: 2,
                                explanation: '15% of 80 = 12. 20% of 50 = 10. 12 + 10 = 22.',
                                    estimatedTime: 60
},
{
    id: 'math_expert_new_2',
        type: PUZZLE_TYPES.MATH,
            difficulty: DIFFICULTY.EXPERT,
                question: 'Solve for x: 3x + 5 = 2x + 10',
                    content: '3x + 5 = 2x + 10',
                        options: ['x = 4', 'x = 5', 'x = 3', 'x = 6'],
                            correctAnswer: 1,
                                explanation: 'Subtract 2x from both sides: x + 5 = 10. Subtract 5: x = 5.',
                                    estimatedTime: 60
},
{
    id: 'math_expert_new_3',
        type: PUZZLE_TYPES.MATH,
            difficulty: DIFFICULTY.EXPERT,
                question: 'What is the next prime number after 31?',
                    content: 'Primes: 29, 31, ?',
                        options: ['33', '35', '37', '39'],
                            correctAnswer: 2,
                                explanation: '33 (div by 3), 35 (div by 5), 37 is prime.',
                                    estimatedTime: 45
},
{
    id: 'math_expert_new_4',
        type: PUZZLE_TYPES.MATH,
            difficulty: DIFFICULTY.EXPERT,
                question: 'A bat and ball cost $1.10. The bat costs $1.00 more than the ball. How much is the ball?',
                    content: 'Bat + Ball = $1.10. Bat = Ball + $1.00.',
                        options: ['$0.10', '$0.05', '$0.01', '$0.50'],
                            correctAnswer: 1,
                                explanation: 'If Ball = x, Bat = x+1. x + (x+1) = 1.10. 2x = 0.10. x = 0.05.',
                                    estimatedTime: 60
},
{
    id: 'math_expert_new_5',
        type: PUZZLE_TYPES.MATH,
            difficulty: DIFFICULTY.EXPERT,
                question: 'What is half of 2 plus 2?',
                    content: 'Think carefully: 1/2 of 2 + 2',
                        options: ['3', '2', '4', '1'],
                            correctAnswer: 0,
                                explanation: 'Order of operations: Half of 2 is 1. Plus 2 equals 3.',
                                    estimatedTime: 45
},

// EXPERT PATTERNS
{
    id: 'pattern_expert_new_1',
        type: PUZZLE_TYPES.PATTERN,
            difficulty: DIFFICULTY.EXPERT,
                question: 'Find the next number:',
                    content: '2, 3, 5, 8, 12, ?',
                        options: ['15', '16', '17', '18'],
                            correctAnswer: 2,
                                explanation: 'Differences increase by 1: +1, +2, +3, +4. Next is +5. 12 + 5 = 17.',
                                    estimatedTime: 60
},
{
    id: 'pattern_expert_new_2',
        type: PUZZLE_TYPES.PATTERN,
            difficulty: DIFFICULTY.EXPERT,
                question: 'Complete the sequence:',
                    content: '77, 49, 36, 18, ?',
                        options: ['8', '9', '10', '16'],
                            correctAnswer: 0,
                                explanation: 'Multiply the digits: 7×7=49. 4×9=36. 3×6=18. 1×8=8.',
                                    estimatedTime: 60
},
{
    id: 'pattern_expert_new_3',
        type: PUZZLE_TYPES.PATTERN,
            difficulty: DIFFICULTY.EXPERT,
                question: 'What letter is next?',
                    content: 'O, T, T, F, F, S, S, ?',
                        options: ['E', 'N', 'T', 'O'],
                            correctAnswer: 0,
                                explanation: 'First letters of numbers: One, Two, Three, Four, Five, Six, Seven, Eight.',
                                    estimatedTime: 60
},
{
    id: 'pattern_expert_new_4',
        type: PUZZLE_TYPES.PATTERN,
            difficulty: DIFFICULTY.EXPERT,
                question: 'Find the missing number:',
                    content: '3, 7, 16, 35, ?',
                        options: ['70', '72', '74', '75'],
                            correctAnswer: 2,
                                explanation: 'Formula is x2 + 1, x2 + 2, x2 + 3... 3x2+1=7. 7x2+2=16. 16x2+3=35. 35x2+4=74.',
                                    estimatedTime: 60
},
{
    id: 'pattern_expert_new_5',
        type: PUZZLE_TYPES.PATTERN,
            difficulty: DIFFICULTY.EXPERT,
                question: 'Complete the pattern:',
                    content: '1, 11, 21, 1211, ?',
                        options: ['111221', '312211', '1231', '2112'],
                            correctAnswer: 0,
                                explanation: 'Look and Say sequence: 1 is "one 1" (11). 11 is "two 1s" (21). 21 is "one 2, one 1" (1211). Next is "one 1, one 2, two 1s" (111221).',
                                    estimatedTime: 60
},
{
    id: 'pattern_expert_new_6',
        type: PUZZLE_TYPES.PATTERN,
            difficulty: DIFFICULTY.EXPERT,
                question: 'What fits in the sequence?',
                    content: 'J, F, M, A, M, J, ?',
                        options: ['J', 'A', 'S', 'O'],
                            correctAnswer: 0,
                                explanation: 'Months of the year: January, February, March, April, May, June, July.',
                                    estimatedTime: 60
},
{
    id: 'pattern_expert_new_7',
        type: PUZZLE_TYPES.PATTERN,
            difficulty: DIFFICULTY.EXPERT,
                question: 'Find the next term:',
                    content: '4, 9, 25, 49, 121, ?',
                        options: ['144', '169', '196', '225'],
                            correctAnswer: 1,
                                explanation: 'Squares of prime numbers: 2², 3², 5², 7², 11². Next prime is 13, so 13² = 169.',
                                    estimatedTime: 60
},
{
    id: 'pattern_expert_new_8',
        type: PUZZLE_TYPES.PATTERN,
            difficulty: DIFFICULTY.EXPERT,
                question: 'What number logic fits?',
                    content: '5, 11, 23, 47, ?',
                        options: ['90', '94', '95', '96'],
                            correctAnswer: 2,
                                explanation: 'x2 + 1 pattern. 5x2+1=11. 11x2+1=23. 23x2+1=47. 47x2+1=95.',
                                    estimatedTime: 60
},
{
    id: 'pattern_expert_new_9',
        type: PUZZLE_TYPES.PATTERN,
            difficulty: DIFFICULTY.EXPERT,
                question: 'Which is next?',
                    content: '1, 2, 6, 24, 120, ?',
                        options: ['500', '720', '600', '700'],
                            correctAnswer: 1,
                                explanation: 'Factorials: 1!, 2!, 3!, 4!, 5!. Next is 6! = 720.',
                                    estimatedTime: 60
},
{
    id: 'pattern_expert_new_10',
        type: PUZZLE_TYPES.PATTERN,
            difficulty: DIFFICULTY.EXPERT,
                question: 'Complete the alphabetical math:',
                    content: 'A, C, F, J, O, ?',
                        options: ['S', 'T', 'U', 'V'],
                            correctAnswer: 2,
                                explanation: 'Letter gaps increase: A(+2)C, C(+3)F, F(+4)J, J(+5)O. Next is O(+6) = U.',
                                    estimatedTime: 60
}
