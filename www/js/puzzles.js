// ============================================
// MindSpark - Puzzle Database
// ============================================

const PUZZLE_TYPES = {
  PATTERN: 'pattern',
  ODD_ONE_OUT: 'odd_one_out',
  CAUSE_EFFECT: 'cause_effect',
  ERROR_DETECTION: 'error_detection',
  BEST_CHOICE: 'best_choice',
  LOGIC: 'logic',
  MATH: 'math'
};

const DIFFICULTY = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  EXPERT: 'expert'
};

// Puzzle Database
const PUZZLES = [
  // ============================================
  // MATH - BEGINNER (ADDED TO FIX EMPTY CATEGORY ISSUE)
  // ============================================
  {
    id: 'math_beginner_1',
    type: PUZZLE_TYPES.MATH,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'What is 5 + 5 + 5?',
    content: '5 + 5 + 5 = ?',
    options: ['10', '15', '20', '25'],
    correctAnswer: 1,
    explanation: 'Basic addition: 5 plus 5 is 10, plus another 5 is 15.',
    estimatedTime: 30
  },
  {
    id: 'math_beginner_2',
    type: PUZZLE_TYPES.MATH,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Which number is larger?',
    content: 'Comparing 50 and 42',
    options: ['50', '42', 'They are equal', 'Cannot tell'],
    correctAnswer: 0,
    explanation: '50 is greater than 42.',
    estimatedTime: 30
  },
  {
    id: 'math_beginner_3',
    type: PUZZLE_TYPES.MATH,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'How many sides does a Square have?',
    content: 'Square sides = ?',
    options: ['3', '4', '5', '6'],
    correctAnswer: 1,
    explanation: 'A square has 4 equal sides.',
    estimatedTime: 30
  },

  // ============================================
  // LOGIC - BEGINNER (ADDED TO FIX EMPTY CATEGORY ISSUE)
  // ============================================
  {
    id: 'logic_beginner_1',
    type: PUZZLE_TYPES.LOGIC,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'If Red is Blue, and Blue is Green, what color is the sky?',
    content: 'In this imaginary world: Sky is Blue -> Blue is Green.',
    options: ['Red', 'Blue', 'Green', 'Yellow'],
    correctAnswer: 2,
    explanation: 'The sky is normally Blue. But the rule says "Blue is Green". So the sky is Green.',
    estimatedTime: 30
  },
  {
    id: 'logic_beginner_2',
    type: PUZZLE_TYPES.LOGIC,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Which item does not belong?',
    content: 'Apple, Banana, Car, Orange',
    options: ['Apple', 'Banana', 'Car', 'Orange'],
    correctAnswer: 2,
    explanation: 'Apple, Banana, and Orange are fruits. Car is a vehicle.',
    estimatedTime: 30
  },
  {
    id: 'logic_beginner_3',
    type: PUZZLE_TYPES.LOGIC,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'John is taller than Mike. Mike is taller than Sam. Who is the tallest?',
    content: 'John > Mike > Sam',
    options: ['John', 'Mike', 'Sam', 'All same'],
    correctAnswer: 0,
    explanation: 'John is taller than everyone else in the list.',
    estimatedTime: 30
  },

  // ============================================
  // PATTERN COMPLETION - BEGINNER
  // ============================================
  {
    id: 'pattern_beginner_1',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'What comes next in this sequence?',
    content: '2, 4, 6, 8, ?',
    options: ['9', '10', '12', '14'],
    correctAnswer: 2,
    explanation: 'The pattern adds 2 each time: 2+2=4, 4+2=6, 6+2=8, so 8+2=10.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_2',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Complete the pattern:',
    content: 'Red, Blue, Red, Blue, ?',
    options: ['Red', 'Blue', 'Green', 'Yellow'],
    correctAnswer: 0,
    explanation: 'The colors alternate between Red and Blue, so Red comes next.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_3',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'What number should replace the question mark?',
    content: '1, 3, 5, 7, ?',
    options: ['8', '9', '10', '11'],
    correctAnswer: 1,
    explanation: 'These are odd numbers in order: 1, 3, 5, 7, then 9.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_4',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Which shape comes next?',
    content: 'Circle, Square, Circle, Square, ?',
    options: ['Circle', 'Triangle', 'Square', 'Star'],
    correctAnswer: 0,
    explanation: 'The pattern alternates: Circle, Square, Circle, Square, so Circle is next.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_5',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Continue the sequence:',
    content: '10, 20, 30, 40, ?',
    options: ['45', '50', '55', '60'],
    correctAnswer: 1,
    explanation: 'Each number increases by 10, so 40 + 10 = 50.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_6',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'What comes next?',
    content: '5, 10, 15, 20, ?',
    options: ['22', '25', '30', '35'],
    correctAnswer: 1,
    explanation: 'The pattern adds 5 each time: 5, 10, 15, 20, then 25.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_7',
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
    id: 'pattern_beginner_8',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'What number should replace the question mark?',
    content: '100, 90, 80, 70, ?',
    options: ['65', '60', '55', '50'],
    correctAnswer: 1,
    explanation: 'Each number decreases by 10: 100-10=90, 90-10=80, so 70-10=60.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_9',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Find the next number:',
    content: '3, 6, 9, 12, ?',
    options: ['13', '14', '15', '16'],
    correctAnswer: 2,
    explanation: 'These are multiples of 3: 3×1, 3×2, 3×3, 3×4, so next is 3×5=15.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_10',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'What comes next in this sequence?',
    content: 'Monday, Tuesday, Wednesday, ?',
    options: ['Friday', 'Thursday', 'Saturday', 'Sunday'],
    correctAnswer: 1,
    explanation: 'Days of the week in order: Monday, Tuesday, Wednesday, Thursday.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_11',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Complete the sequence:',
    content: '1, 2, 4, 8, ?',
    options: ['10', '12', '14', '16'],
    correctAnswer: 3,
    explanation: 'Each number is doubled: 1×2=2, 2×2=4, 4×2=8, so 8×2=16.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_12',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'What number comes next?',
    content: '50, 45, 40, 35, ?',
    options: ['32', '30', '28', '25'],
    correctAnswer: 1,
    explanation: 'Each number decreases by 5: 50-5=45, 45-5=40, so 35-5=30.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_13',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Find the pattern:',
    content: 'Z, Y, X, W, ?',
    options: ['V', 'U', 'T', 'S'],
    correctAnswer: 0,
    explanation: 'Letters in reverse alphabetical order: Z, Y, X, W, then V.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_14',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'What comes next?',
    content: '0, 5, 10, 15, ?',
    options: ['18', '20', '22', '25'],
    correctAnswer: 1,
    explanation: 'The pattern adds 5 each time: 0+5=5, 5+5=10, 15+5=20.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_15',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Complete the pattern:',
    content: '11, 22, 33, 44, ?',
    options: ['50', '55', '60', '65'],
    correctAnswer: 1,
    explanation: 'Multiples of 11: 11×1, 11×2, 11×3, 11×4, so next is 11×5=55.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_16',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'What number replaces the question mark?',
    content: '7, 14, 21, 28, ?',
    options: ['32', '33', '35', '36'],
    correctAnswer: 2,
    explanation: 'Multiples of 7: 7×1, 7×2, 7×3, 7×4, so next is 7×5=35.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_17',
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
    id: 'pattern_beginner_18',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'What comes next in this sequence?',
    content: '1, 4, 7, 10, ?',
    options: ['11', '12', '13', '14'],
    correctAnswer: 2,
    explanation: 'The pattern adds 3 each time: 1+3=4, 4+3=7, 10+3=13.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_19',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Complete the sequence:',
    content: '25, 50, 75, 100, ?',
    options: ['110', '120', '125', '130'],
    correctAnswer: 2,
    explanation: 'Multiples of 25: 25×1, 25×2, 25×3, 25×4, so next is 25×5=125.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_20',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'What number comes next?',
    content: '8, 16, 24, 32, ?',
    options: ['36', '38', '40', '42'],
    correctAnswer: 2,
    explanation: 'Multiples of 8: 8×1, 8×2, 8×3, 8×4, so next is 8×5=40.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_21',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Find the pattern:',
    content: 'January, February, March, ?',
    options: ['May', 'April', 'June', 'July'],
    correctAnswer: 1,
    explanation: 'Months in order: January, February, March, April.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_22',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'What comes next?',
    content: '12, 24, 36, 48, ?',
    options: ['54', '56', '60', '62'],
    correctAnswer: 2,
    explanation: 'Multiples of 12: 12×1, 12×2, 12×3, 12×4, so next is 12×5=60.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_23',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Complete the pattern:',
    content: 'AA, BB, CC, DD, ?',
    options: ['DE', 'EE', 'EF', 'FF'],
    correctAnswer: 1,
    explanation: 'Double letters in alphabetical order: AA, BB, CC, DD, then EE.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_24',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'What number should replace the question mark?',
    content: '15, 30, 45, 60, ?',
    options: ['70', '75', '80', '85'],
    correctAnswer: 1,
    explanation: 'Multiples of 15: 15×1, 15×2, 15×3, 15×4, so next is 15×5=75.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_25',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Find the next number:',
    content: '4, 8, 12, 16, ?',
    options: ['18', '20', '22', '24'],
    correctAnswer: 1,
    explanation: 'Multiples of 4: 4×1, 4×2, 4×3, 4×4, so next is 4×5=20.',
    estimatedTime: 30
  },


  // ============================================
  // PATTERN COMPLETION - INTERMEDIATE
  // ============================================
  {
    id: 'pattern_intermediate_1',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What comes next?',
    content: '3, 6, 12, 24, ?',
    options: ['36', '48', '40', '32'],
    correctAnswer: 1,
    explanation: 'Each number is doubled: 3×2=6, 6×2=12, 12×2=24, so 24×2=48.',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_2',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Find the missing number:',
    content: '1, 4, 9, 16, ?',
    options: ['20', '25', '24', '21'],
    correctAnswer: 1,
    explanation: 'These are perfect squares: 1², 2², 3², 4², so next is 5² = 25.',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_3',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Complete the sequence:',
    content: '2, 5, 10, 17, ?',
    options: ['24', '26', '28', '30'],
    correctAnswer: 1,
    explanation: 'The differences are 3, 5, 7 (odd numbers). Next difference is 9, so 17+9=26.',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_4',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What number replaces the question mark?',
    content: '100, 50, 25, 12.5, ?',
    options: ['6', '6.25', '5', '7.5'],
    correctAnswer: 1,
    explanation: 'Each number is divided by 2: 12.5 ÷ 2 = 6.25.',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_5',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Find the pattern:',
    content: 'A1, B2, C3, D4, ?',
    options: ['E5', 'E4', 'D5', 'F5'],
    correctAnswer: 0,
    explanation: 'Letters go alphabetically (A, B, C, D, E) and numbers increase by 1 (1, 2, 3, 4, 5).',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_6',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What number follows?',
    content: '80, 40, 20, 10, ?',
    options: ['5', '0', '2', '8'],
    correctAnswer: 0,
    explanation: 'Each number is divided by 2: 80/2=40, 40/2=20, 20/2=10, so 10/2=5.',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_7',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Find the next term:',
    content: '2, 5, 8, 11, 14, ?',
    options: ['16', '17', '18', '20'],
    correctAnswer: 1,
    explanation: 'The pattern adds 3 each time: 14 + 3 = 17.',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_8',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Which letter comes next?',
    content: 'Z, X, V, T, ?',
    options: ['S', 'R', 'Q', 'P'],
    correctAnswer: 1,
    explanation: 'Letters are skipping closer to A: Z (skip Y) X (skip W) V (skip U) T (skip S) R.',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_9',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Complete the sequence:',
    content: '1, 4, 2, 8, 3, 12, 4, ?',
    options: ['16', '14', '18', '20'],
    correctAnswer: 0,
    explanation: 'Two alternating patterns: 1, 2, 3, 4 and 4, 8, 12. Next is 16 (4×4).',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_10',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What number is missing?',
    content: '1, 10, 100, 1000, ?',
    options: ['1001', '10000', '5000', '2000'],
    correctAnswer: 1,
    explanation: 'Each number is multiplied by 10. Next is 1,000 × 10 = 10,000.',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_11',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Find the next number:',
    content: '7, 12, 17, 22, ?',
    options: ['25', '27', '28', '29'],
    correctAnswer: 1,
    explanation: 'The pattern adds 5 each time: 22 + 5 = 27.',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_12',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What comes next?',
    content: '3, 9, 27, 81, ?',
    options: ['162', '243', '100', '300'],
    correctAnswer: 1,
    explanation: 'Each number is multiplied by 3: 81 × 3 = 243.',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_13',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Complete the pattern:',
    content: '100, 95, 90, 85, ?',
    options: ['75', '80', '82', '70'],
    correctAnswer: 1,
    explanation: 'The pattern subtracts 5 each time: 85 - 5 = 80.',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_14',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Which shape number fits?',
    content: 'Triangle(3), Square(4), Pentagon(5), ?',
    options: ['Circle(1)', 'Hexagon(6)', 'Cube(8)', 'Line(2)'],
    correctAnswer: 1,
    explanation: 'Shapes are typically ordered by sides: 3, 4, 5, so next is Hexagon(6).',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_15',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Find the next term:',
    content: '1.5, 3.0, 4.5, 6.0, ?',
    options: ['7.0', '7.5', '8.0', '6.5'],
    correctAnswer: 1,
    explanation: 'The pattern adds 1.5 each time: 6.0 + 1.5 = 7.5.',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_16',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What comes next?',
    content: '2, 3, 5, 7, 11, ?',
    options: ['12', '13', '14', '15'],
    correctAnswer: 1,
    explanation: 'These are the first few prime numbers. Next prime after 11 is 13.',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_17',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Complete the sequence:',
    content: '111, 222, 333, 444, ?',
    options: ['555', '666', '123', '543'],
    correctAnswer: 0,
    explanation: 'Triple digits increasing: 1, 2, 3, 4, so next is 555.',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_18',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Find the missing group:',
    content: 'AZ, BY, CX, DW, ?',
    options: ['EV', 'EU', 'FV', 'EW'],
    correctAnswer: 0,
    explanation: 'First letter goes A->E, second letter goes Z->V (reverse alphabet). Next is EV.',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_19',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What number follows?',
    content: '1, 2, 4, 7, 11, ?',
    options: ['15', '16', '14', '18'],
    correctAnswer: 1,
    explanation: 'The difference increases by 1 each time: +1, +2, +3, +4. So +5 to 11 is 16.',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_20',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Complete the pattern:',
    content: '24, 12, 6, 3, ?',
    options: ['1', '0', '1.5', '2'],
    correctAnswer: 2,
    explanation: 'Each number is halved: 24/2=12, 12/2=6, 6/2=3, so 3/2 = 1.5.',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_21',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Find the next number:',
    content: '7, 10, 14, 19, 25, ?',
    options: ['30', '31', '32', '33'],
    correctAnswer: 2,
    explanation: 'The difference increases by 1: +3, +4, +5, +6, so next is +7. 25+7=32.',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_22',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What comes next?',
    content: '100, 99, 97, 94, 90, ?',
    options: ['85', '84', '86', '88'],
    correctAnswer: 0,
    explanation: 'Differences are -1, -2, -3, -4. Next is -5. 90-5=85.',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_23',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Complete the sequence:',
    content: '0.5, 1, 2, 4, 8, ?',
    options: ['12', '16', '10', '14'],
    correctAnswer: 1,
    explanation: 'Each number is doubled. 8 × 2 = 16.',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_24',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Which letter fits?',
    content: 'A, Z, B, Y, C, ?',
    options: ['W', 'D', 'X', 'V'],
    correctAnswer: 2,
    explanation: 'Interweaved alphabet: A, B, C... and Z, Y, X... Next is X.',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_25',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Find the missing number:',
    content: '4, 9, 16, 25, 36, ?',
    options: ['49', '42', '45', '48'],
    correctAnswer: 0,
    explanation: 'These are squares: 2², 3², 4², 5², 6². Next is 7² = 49.',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_26',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What is next?',
    content: '10, 11, 13, 16, 20, ?',
    options: ['24', '25', '26', '23'],
    correctAnswer: 1,
    explanation: 'Differences increase by 1: +1, +2, +3, +4. Next is +5. 20+5=25.',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_27',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Complete the pattern:',
    content: '240, 120, 40, 10, ?',
    options: ['5', '4', '2', '1'],
    correctAnswer: 2,
    explanation: 'Divide by increasing integers: /2, /3, /4. Next is 10 / 5 = 2.',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_28',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Which number matches?',
    content: '5, 25, 6, 36, 7, ?',
    options: ['49', '42', '56', '64'],
    correctAnswer: 0,
    explanation: 'Pairs of Number, Number². 5->25, 6->36. Next is 7->49.',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_29',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What letter comes next?',
    content: 'J, M, P, S, ?',
    options: ['U', 'V', 'W', 'T'],
    correctAnswer: 1,
    explanation: 'Skip 2 letters (or +3 positions): J(+3)M(+3)P(+3)S(+3)V.',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_30',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Complete the sequence:',
    content: '1.2, 2.4, 4.8, 9.6, ?',
    options: ['18.2', '19.2', '10.8', '14.4'],
    correctAnswer: 1,
    explanation: 'Double each number. 9.6 × 2 = 19.2.',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_31',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Find the next prime:',
    content: '11, 13, 17, 19, 23, ?',
    options: ['25', '27', '29', '31'],
    correctAnswer: 2,
    explanation: 'Sequence of prime numbers. Next prime after 23 is 29.',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_32',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What number follows?',
    content: '80, 75, 65, 50, ?',
    options: ['35', '25', '30', '40'],
    correctAnswer: 2,
    explanation: 'Subtract multiples of 5: -5, -10, -15. Next is -20. 50-20=30.',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_33',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Complete the pattern:',
    content: '2, 5, 11, 20, 32, ?',
    options: ['42', '45', '47', '49'],
    correctAnswer: 2,
    explanation: 'Differences are multiples of 3: +3, +6, +9, +12. Next is +15. 32+15=47.',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_34',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Which letter fits?',
    content: 'W, U, S, Q, ?',
    options: ['O', 'N', 'P', 'M'],
    correctAnswer: 0,
    explanation: 'Reverse alphabet skipping 1: W(-2)U(-2)S(-2)Q(-2)O.',
    estimatedTime: 45
  },
  {
    id: 'pattern_intermediate_35',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Find the logical ending:',
    content: '1, 3, 7, 15, 31, ?',
    options: ['60', '64', '63', '62'],
    correctAnswer: 2,
    explanation: 'Powers of 2 minus 1 (or x2 + 1). 31×2 + 1 = 63.',
    estimatedTime: 45
  },

  // ============================================
  // PATTERN COMPLETION - EXPERT
  // ============================================
  {
    id: 'pattern_expert_1',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'What comes next in this Fibonacci-like sequence?',
    content: '1, 1, 2, 3, 5, 8, ?',
    options: ['11', '13', '15', '16'],
    correctAnswer: 1,
    explanation: 'Each number is the sum of the previous two: 5+8=13.',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_2',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Complete the sequence:',
    content: '2, 6, 12, 20, 30, ?',
    options: ['40', '42', '44', '48'],
    correctAnswer: 1,
    explanation: 'Differences are 4, 6, 8, 10 (even numbers increasing by 2). Next is 12, so 30+12=42.',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_3',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Find the missing term:',
    content: '1, 8, 27, 64, ?',
    options: ['100', '125', '128', '144'],
    correctAnswer: 1,
    explanation: 'These are cubes: 1³, 2³, 3³, 4³, so next is 5³ = 125.',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_4',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'What number completes the pattern?',
    content: '3, 7, 15, 31, ?',
    options: ['47', '55', '63', '71'],
    correctAnswer: 2,
    explanation: 'Each number is (previous × 2) + 1: 31×2+1 = 63.',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_5',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Complete this alternating sequence:',
    content: '2, 3, 6, 7, 14, 15, ?',
    options: ['28', '30', '16', '21'],
    correctAnswer: 1,
    explanation: 'Pattern alternates: +1, ×2, +1, ×2. So 15×2 = 30.',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_6',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Find the next term:',
    content: '0, 1, 1, 2, 3, 5, 8, 13, ?',
    options: ['21', '20', '19', '25'],
    correctAnswer: 0,
    explanation: 'Fibonacci sequence: each number is sum of previous two. 8+13=21.',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_7',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Complete the sequence:',
    content: '2, 5, 11, 23, 47, ?',
    options: ['95', '94', '96', '92'],
    correctAnswer: 0,
    explanation: 'Rule is x2 + 1. 47x2 + 1 = 95.',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_8',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'What comes next?',
    content: 'J, F, M, A, M, J, ?',
    options: ['J', 'A', 'S', 'O'],
    correctAnswer: 0,
    explanation: 'First letter of months: January, February, March... next is July (J).',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_9',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Find the missing number:',
    content: '1, 4, 27, 16, 125, ?',
    options: ['36', '216', '49', '64'],
    correctAnswer: 0,
    explanation: 'Alternating powers: 1¹, 2², 3³, 4², 5³. Next is 6² = 36.',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_10',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Which number fits?',
    content: '7, 10, 8, 11, 9, 12, ?',
    options: ['10', '13', '14', '7'],
    correctAnswer: 0,
    explanation: 'Alternating +3, -2. 9+3=12, 12-2=10.',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_11',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Complete the pattern:',
    content: 'O, T, T, F, F, S, S, ?',
    options: ['E', 'N', 'T', 'S'],
    correctAnswer: 0,
    explanation: 'First letter of numbers: One, Two, Three, Four... Eight starts with E.',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_12',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'What is next?',
    content: '3, 5, 9, 17, 33, ?',
    options: ['65', '60', '50', '66'],
    correctAnswer: 0,
    explanation: 'Formula is 2^n + 1. 2⁵+1=33, 2⁶+1=65. Or (x2 - 1).',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_13',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Find the next term:',
    content: '2, 9, 28, 65, ?',
    options: ['126', '125', '100', '80'],
    correctAnswer: 0,
    explanation: 'n³ + 1. 1³+1=2, 2³+1=9... 5³+1=126.',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_14',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Which letter follows?',
    content: 'A, F, K, P, ?',
    options: ['U', 'V', 'T', 'W'],
    correctAnswer: 0,
    explanation: 'Skips 4 letters (adds 5): A(+5)->F(+5)->K... P+5 = U.',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_15',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'What number is missing?',
    content: '4, 6, 9, 13.5, ?',
    options: ['20.25', '18', '21', '25'],
    correctAnswer: 0,
    explanation: 'Multiply by 1.5 each time. 13.5 * 1.5 = 20.25.',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_16',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Complete the sequence:',
    content: '1, 11, 21, 1211, 111221, ?',
    options: ['312211', '122111', '111111', '123456'],
    correctAnswer: 0,
    explanation: 'Look-and-say sequence. "One 1" -> 11. "Three 1s, Two 2s, One 1" -> 312211.',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_17',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Determine the next value:',
    content: '31, 28, 31, 30, 31, ?',
    options: ['30', '31', '29', '28'],
    correctAnswer: 0,
    explanation: 'Days in months: Jan(31), Feb(28), Mar(31), Apr(30), May(31). June has 30.',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_18',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Find the logic:',
    content: '1=3, 2=3, 3=5, 4=4, 5=4, 6=?',
    options: ['3', '4', '5', '6'],
    correctAnswer: 0,
    explanation: 'Number of letters in the word: One(3), Two(3), Six(3).',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_19',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Complete the pattern:',
    content: '1000, 500, 200, 100, 40, 20, ?',
    options: ['8', '10', '5', '4'],
    correctAnswer: 0,
    explanation: 'Divisors alternate: /2, /2.5, /2, /2.5... so 20 / 2.5 = 8.',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_20',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'What comes next?',
    content: 'Z, O, T, T, F, F, S, S, E, ?',
    options: ['N', 'T', 'E', 'Z'],
    correctAnswer: 0,
    explanation: 'First letters of Zero, One, Two... Nine starts with N.',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_21',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'What comes next?',
    content: '6, 24, 60, 120, 210, ?',
    options: ['343', '336', '330', '300'],
    correctAnswer: 1,
    explanation: 'Formula n³ - n. 6³ - 6 = 216 - 6 = 210. Next: 7³ - 7 = 343 - 7 = 336.',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_22',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Complete the sequence:',
    content: '2, 3, 5, 9, 17, 33, ?',
    options: ['60', '64', '65', '66'],
    correctAnswer: 2,
    explanation: 'Differences are powers of 2: 1, 2, 4, 8, 16. Next +32. 33+32=65.',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_23',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Find the missing number:',
    content: '4, 6, 12, 14, 28, 30, ?',
    options: ['32', '60', '62', '58'],
    correctAnswer: 1,
    explanation: 'Alternating operations: +2, ×2, +2, ×2. 30 × 2 = 60.',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_24',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'What follows?',
    content: '1, 2, 6, 24, 120, ?',
    options: ['720', '600', '500', '240'],
    correctAnswer: 0,
    explanation: 'Factorials: 1!, 2!, 3!, 4!, 5!. Next is 6! = 720.',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_25',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Complete the logic:',
    content: '77, 49, 36, 18, ?',
    options: ['8', '9', '10', '16'],
    correctAnswer: 0,
    explanation: 'Product of the digits of the previous number. 1 × 8 = 8.',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_26',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Find the next term:',
    content: '0, 4, 18, 48, 100, ?',
    options: ['120', '150', '180', '200'],
    correctAnswer: 2,
    explanation: 'Formula n²(n-1) or n³ - n². For n=6: 6³ - 6² = 216 - 36 = 180.',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_27',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'What is the next number?',
    content: '3, 10, 101, ?',
    options: ['10101', '10202', '10201', '202'],
    correctAnswer: 1,
    explanation: 'Previous number squared plus 1. 101² + 1 = 10201 + 1 = 10202.',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_28',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Complete the pattern:',
    content: '2, 3, 7, 25, 121, ?',
    options: ['720', '721', '600', '625'],
    correctAnswer: 1,
    explanation: 'Factorial + 1: 1!+1, 2!+1... 5!+1=121. Next 6!+1 = 721.',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_29',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Which number fits?',
    content: '12, 21, 24, 42, 36, 63, 48, ?',
    options: ['84', '96', '52', '64'],
    correctAnswer: 0,
    explanation: 'Pairs of numbers and their digit reversal. 48 -> 84.',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_30',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'What letter is missing?',
    content: 'Z, X, C, V, B, ?',
    options: ['N', 'M', 'A', 'S'],
    correctAnswer: 0,
    explanation: 'Bottom row of a standard QWERTY keyboard. Next is N.',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_31',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Find the next day:',
    content: 'M, T, W, T, F, S, ?',
    options: ['S', 'M', 'T', 'W'],
    correctAnswer: 0,
    explanation: 'Initial letters of days: Mon, Tue, Wed, Thu, Fri, Sat... Sun(S).',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_32',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Complete the sequence:',
    content: '10, 20, 15, 30, 25, 50, ?',
    options: ['45', '40', '55', '35'],
    correctAnswer: 0,
    explanation: 'Alternating x2, -5. 50 - 5 = 45.',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_33',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'What comes next?',
    content: '1, 5, 14, 30, 55, ?',
    options: ['91', '85', '100', '66'],
    correctAnswer: 0,
    explanation: 'Sum of first n squares. 55 + 6² = 55 + 36 = 91.',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_34',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Find the missing number:',
    content: '1, 32, 243, 1024, ?',
    options: ['2048', '3125', '5000', '2500'],
    correctAnswer: 1,
    explanation: 'n to the power of 5 (n⁵). 5⁵ = 3125.',
    estimatedTime: 60
  },
  {
    id: 'pattern_expert_35',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Complete the pattern:',
    content: '6, 24, 12, 48, 24, 96, ?',
    options: ['48', '192', '50', '36'],
    correctAnswer: 0,
    explanation: 'Alternating ×4, ÷2. 96 ÷ 2 = 48.',
    estimatedTime: 60
  },

  // ============================================
  // LOGIC & MATH RIDDLES - INTERMEDIATE
  // ============================================
  {
    id: 'logic_inter_1',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Clock Logic',
    content: 'A clock shows 3:15. What is the angle between the hands?',
    options: ['0°', '7.5°', '15°', '22.5°'],
    correctAnswer: 1,
    explanation: 'Minute hand is at 3 (90°). Hour hand moves 0.5°/min. In 15 mins, it moves 7.5° past 3. Difference is 7.5°.',
    estimatedTime: 45
  },
  {
    id: 'logic_inter_2',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Work Rate',
    content: '5 cats catch 5 mice in 5 minutes. How many cats to catch 100 mice in 100 minutes?',
    options: ['5 cats', '20 cats', '100 cats', '500 cats'],
    correctAnswer: 0,
    explanation: 'One cat catches one mouse in 5 minutes. In 100 mins, one cat catches 20 mice. 5 cats × 20 = 100 mice.',
    estimatedTime: 45
  },
  {
    id: 'logic_inter_3',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Weight Logic',
    content: 'You have 12 balls, one heavy. Minimum weighings to find it?',
    options: ['3', '4', '5', '6'],
    correctAnswer: 0,
    explanation: '3 weighings. 4vs4 (if equal, it\'s in other 4). Then 2vs2, then 1vs1.',
    estimatedTime: 45
  },
  {
    id: 'logic_inter_4',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Cost Puzzle',
    content: 'Bat + Ball = $1.10. Bat is $1.00 more than Ball. Cost of Ball?',
    options: ['$0.05', '$0.10', '$0.15', '$0.01'],
    correctAnswer: 0,
    explanation: 'x + (x+1) = 1.10 => 2x = 0.10 => x = 0.05.',
    estimatedTime: 45
  },
  {
    id: 'logic_inter_5',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Weight Trap',
    content: 'Heavier: 1kg feathers or 1kg iron?',
    options: ['Feathers', 'Iron', 'Equal', 'Depends'],
    correctAnswer: 2,
    explanation: 'Both are exactly 1kg.',
    estimatedTime: 45
  },
  {
    id: 'logic_inter_6',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Snail Climb',
    content: 'Snail climbs 3ft day, slides 2ft night. Wall is 10ft. How many days?',
    options: ['8 days', '10 days', '7 days', '9 days'],
    correctAnswer: 0,
    explanation: 'Net +1ft/day. After 7 days = 7ft. Day 8 climbs 3ft -> reaches 10ft top!',
    estimatedTime: 45
  },
  {
    id: 'logic_inter_7',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Race Position',
    content: 'You overtake the person in 2nd place. What position are you?',
    options: ['1st', '2nd', '3rd', 'Last'],
    correctAnswer: 1,
    explanation: 'You take their spot, so you are now 2nd.',
    estimatedTime: 45
  },
  {
    id: 'logic_inter_8',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Average Speed',
    content: '60km at 30km/h, then 60km at 60km/h. Average speed?',
    options: ['40 km/h', '45 km/h', '50 km/h', '55 km/h'],
    correctAnswer: 0,
    explanation: 'Time 1 = 2hrs. Time 2 = 1hr. Total 120km / 3hrs = 40km/h.',
    estimatedTime: 45
  },
  {
    id: 'logic_inter_9',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Bulb Logic',
    content: '3 switches, 3 bulbs. Enter room once. How to map them?',
    options: ['Impossible', 'Heat & Light', 'Sound', 'Luck'],
    correctAnswer: 1,
    explanation: 'Turn on #1 for 10mins (Heat). Turn off, Turn on #2 (Light). #3 is Off & Cold.',
    estimatedTime: 45
  },
  {
    id: 'logic_inter_10',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Clock Overlap',
    content: 'How many times do hands overlap in 12 hours?',
    options: ['11', '12', '22', '24'],
    correctAnswer: 0,
    explanation: 'Every ~65 mins. 12 times minus the 11-1 o\'clock exception = 11 times.',
    estimatedTime: 45
  },
  {
    id: 'logic_inter_11',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Sheep Math',
    content: '17 sheep. All but 9 die. How many left?',
    options: ['8', '9', '17', '0'],
    correctAnswer: 1,
    explanation: '"All but 9" means 9 survived.',
    estimatedTime: 45
  },

  // ============================================
  // LOGIC & MATH RIDDLES - EXPERT
  // ============================================
  {
    id: 'logic_expert_1',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Pirate Gold',
    content: '5 pirates, 100 coins. Strict hierarchy. Plan to survive & maximize?',
    options: ['Keep 100', '98:0:1:0:1', '97:0:1:0:2', 'Split Even'],
    correctAnswer: 1,
    explanation: 'Nash equilibrium. You need 2 votes. Bribe #3 and #5 with 1 coin each.',
    estimatedTime: 60
  },
  {
    id: 'logic_expert_2',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Rope Timing',
    content: '2 non-uniform ropes, 60 min each. Measure 45 mins?',
    options: ['Impossible', 'Light 1', 'Light 3 ends', 'Cut middle'],
    correctAnswer: 2,
    explanation: 'Light Rope A both ends (30m). Light Rope B one end. When A done, light B other end (15m).',
    estimatedTime: 60
  },
  {
    id: 'logic_expert_3',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Probability',
    content: '23 people in a room. Chance of shared birthday?',
    options: ['~23%', '~50%', '~75%', '~10%'],
    correctAnswer: 1,
    explanation: 'Birthday paradox. Probability is > 50%.',
    estimatedTime: 60
  },
  {
    id: 'logic_expert_4',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Lily Pad',
    content: 'Patch doubles daily. Full on day 48. When half full?',
    options: ['Day 24', 'Day 47', 'Day 40', 'Day 46'],
    correctAnswer: 1,
    explanation: 'Doubles daily -> previous day was half. Day 47.',
    estimatedTime: 60
  },
  {
    id: 'logic_expert_5',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Guard Riddle',
    content: '2 doors (Life/Death), 2 guards (Liar/Truth). One question?',
    options: ['Which is safe?', 'Are you lying?', 'Other guard say?', 'Run'],
    correctAnswer: 2,
    explanation: 'Ask "What would the other guard say is the safe door?" Then do opposite.',
    estimatedTime: 60
  },
  {
    id: 'logic_expert_6',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Elevator Logic',
    content: 'Man takes elevator down, but walks up last 3 floors. Why?',
    options: ['Exercise', 'Broken', 'Short Stature', 'Scared'],
    correctAnswer: 2,
    explanation: 'He is a child/dwarf and cannot reach the top buttons.',
    estimatedTime: 60
  },
  {
    id: 'logic_expert_7',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Gauss Sum',
    content: 'Sum of 1 to 100?',
    options: ['5000', '5050', '5100', '10000'],
    correctAnswer: 1,
    explanation: 'Pair 1+100, 2+99... 50 pairs of 101. 50 * 101 = 5050.',
    estimatedTime: 60
  },
  {
    id: 'logic_expert_8',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Family Tree',
    content: '"Brothers/sisters none, but that man\'s father is my father\'s son."',
    options: ['Son', 'Father', 'Self', 'Nephew'],
    correctAnswer: 0,
    explanation: '"My father\'s son" is Me. "That man\'s father is Me". That man is my son.',
    estimatedTime: 60
  },

  // ============================================
  // ODD ONE OUT - BEGINNER
  // ============================================
  {
    id: 'odd_beginner_1',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Which one does not belong?',
    content: 'Dog, Cat, Bird, Table',
    options: ['Dog', 'Cat', 'Bird', 'Table'],
    correctAnswer: 3,
    explanation: 'Table is not an animal. Dog, Cat, and Bird are all animals.',
    estimatedTime: 30
  },
  {
    id: 'odd_beginner_2',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Find the odd one out:',
    content: 'Apple, Banana, Carrot, Orange',
    options: ['Apple', 'Banana', 'Carrot', 'Orange'],
    correctAnswer: 2,
    explanation: 'Carrot is a vegetable. Apple, Banana, and Orange are fruits.',
    estimatedTime: 30
  },
  {
    id: 'odd_beginner_3',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Which number is different?',
    content: '2, 4, 6, 9',
    options: ['2', '4', '6', '9'],
    correctAnswer: 3,
    explanation: '9 is odd. The others (2, 4, 6) are all even numbers.',
    estimatedTime: 30
  },
  {
    id: 'odd_beginner_4',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Which one does not fit?',
    content: 'Red, Blue, Green, Circle',
    options: ['Red', 'Blue', 'Green', 'Circle'],
    correctAnswer: 3,
    explanation: 'Circle is a shape. Red, Blue, and Green are colors.',
    estimatedTime: 30
  },
  {
    id: 'odd_beginner_5',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Find the different one:',
    content: 'Car, Bus, Train, Book',
    options: ['Car', 'Bus', 'Train', 'Book'],
    correctAnswer: 3,
    explanation: 'Book is not a vehicle. Car, Bus, and Train are all vehicles.',
    estimatedTime: 30
  },

  // ============================================
  // ODD ONE OUT - INTERMEDIATE
  // ============================================
  {
    id: 'odd_intermediate_1',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Which word does not belong?',
    content: 'Happy, Sad, Angry, Table',
    options: ['Happy', 'Sad', 'Angry', 'Table'],
    correctAnswer: 3,
    explanation: 'Table is not an emotion. Happy, Sad, and Angry are all emotions.',
    estimatedTime: 40
  },
  {
    id: 'odd_intermediate_2',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Find the odd one out:',
    content: 'Mercury, Venus, Earth, Sun',
    options: ['Mercury', 'Venus', 'Earth', 'Sun'],
    correctAnswer: 3,
    explanation: 'Sun is a star. Mercury, Venus, and Earth are planets.',
    estimatedTime: 40
  },
  {
    id: 'odd_intermediate_3',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Which does not fit the pattern?',
    content: '5, 10, 15, 22',
    options: ['5', '10', '15', '22'],
    correctAnswer: 3,
    explanation: '22 breaks the pattern. The others are multiples of 5.',
    estimatedTime: 40
  },
  {
    id: 'odd_intermediate_4',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Which one is different?',
    content: 'Square, Triangle, Circle, Cube',
    options: ['Square', 'Triangle', 'Circle', 'Cube'],
    correctAnswer: 3,
    explanation: 'Cube is 3D. Square, Triangle, and Circle are 2D shapes.',
    estimatedTime: 40
  },
  {
    id: 'odd_intermediate_5',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Find the odd one:',
    content: 'Piano, Guitar, Violin, Painting',
    options: ['Piano', 'Guitar', 'Violin', 'Painting'],
    correctAnswer: 3,
    explanation: 'Painting is visual art. Piano, Guitar, and Violin are musical instruments.',
    estimatedTime: 40
  },
  {
    id: 'odd_intermediate_6',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Which is the odd one?',
    content: 'Cricket, Hockey, Football, Reading',
    options: ['Cricket', 'Hockey', 'Football', 'Reading'],
    correctAnswer: 3,
    explanation: 'Reading is a solitary mental hobby; the others are physical team sports.',
    estimatedTime: 40
  },
  {
    id: 'odd_intermediate_7',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Find the different one:',
    content: 'Delhi, Mumbai, Kolkata, India',
    options: ['Delhi', 'Mumbai', 'Kolkata', 'India'],
    correctAnswer: 3,
    explanation: 'India is the country itself. Delhi, Mumbai, and Kolkata are cities within it.',
    estimatedTime: 40
  },
  {
    id: 'odd_intermediate_8',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Which word does not belong?',
    content: 'Keyboard, Mouse, Monitor, Printer',
    options: ['Keyboard', 'Mouse', 'Monitor', 'Printer'],
    correctAnswer: 2,
    explanation: 'Monitor is primarily an output device (visual). Keyboard and Mouse are input devices. Printer produces hard copy.',
    estimatedTime: 40
  },
  {
    id: 'odd_intermediate_9',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Select the outlier:',
    content: 'Dollar, Euro, Yen, Coin',
    options: ['Dollar', 'Euro', 'Yen', 'Coin'],
    correctAnswer: 3,
    explanation: 'Coin is a physical form of money. Dollar, Euro, and Yen are specific currencies.',
    estimatedTime: 40
  },
  {
    id: 'odd_intermediate_10',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Which shape is unique?',
    content: 'Cylinder, Sphere, Cube, Circle',
    options: ['Cylinder', 'Sphere', 'Cube', 'Circle'],
    correctAnswer: 3,
    explanation: 'Circle is a 2D shape. Cylinder, Sphere, and Cube are 3D objects.',
    estimatedTime: 40
  },
  {
    id: 'odd_intermediate_11',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Find the odd one out:',
    content: 'Train, Bus, Car, Airplane',
    options: ['Train', 'Bus', 'Car', 'Airplane'],
    correctAnswer: 3,
    explanation: 'Airplane travels by air. Train, Bus, and Car travel on land.',
    estimatedTime: 40
  },
  {
    id: 'odd_intermediate_12',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Which does not fit?',
    content: 'Winter, Summer, Monsoon, Umbrella',
    options: ['Winter', 'Summer', 'Monsoon', 'Umbrella'],
    correctAnswer: 3,
    explanation: 'Umbrella is an object. Winter, Summer, and Monsoon are seasons.',
    estimatedTime: 40
  },
  {
    id: 'odd_intermediate_13',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Find the different one:',
    content: 'Rose, Lotus, Sunflower, Cauliflower',
    options: ['Rose', 'Lotus', 'Sunflower', 'Cauliflower'],
    correctAnswer: 3,
    explanation: 'Cauliflower is a vegetable. The others are types of flowers.',
    estimatedTime: 40
  },
  {
    id: 'odd_intermediate_14',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Which number does not belong?',
    content: '1, 3, 5, 8',
    options: ['1', '3', '5', '8'],
    correctAnswer: 3,
    explanation: '8 is an even number. 1, 3, and 5 are odd numbers.',
    estimatedTime: 40
  },
  {
    id: 'odd_intermediate_15',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Which is the odd one?',
    content: 'YouTube, WhatsApp, Instagram, Google',
    options: ['YouTube', 'WhatsApp', 'Instagram', 'Google'],
    correctAnswer: 3,
    explanation: 'Google is primarily a search engine. The others are strictly social media/video platforms (though owned by tech giants).',
    estimatedTime: 40
  },

  // ============================================
  // ODD ONE OUT - EXPERT
  // ============================================
  {
    id: 'odd_expert_1',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Which concept does not belong?',
    content: 'Democracy, Monarchy, Republic, Photosynthesis',
    options: ['Democracy', 'Monarchy', 'Republic', 'Photosynthesis'],
    correctAnswer: 3,
    explanation: 'Photosynthesis is a biological process. The others are forms of government.',
    estimatedTime: 50
  },
  {
    id: 'odd_expert_2',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Find the outlier:',
    content: 'Python, Java, HTML, C++',
    options: ['Python', 'Java', 'HTML', 'C++'],
    correctAnswer: 2,
    explanation: 'HTML is a markup language. Python, Java, and C++ are programming languages.',
    estimatedTime: 50
  },
  {
    id: 'odd_expert_3',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Which number breaks the rule?',
    content: '2, 3, 5, 9',
    options: ['2', '3', '5', '9'],
    correctAnswer: 3,
    explanation: '9 is not a prime number (divisible by 3). The others (2, 3, 5) are prime.',
    estimatedTime: 50
  },
  {
    id: 'odd_expert_4',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Which does not fit?',
    content: 'Metaphor, Simile, Alliteration, Algorithm',
    options: ['Metaphor', 'Simile', 'Alliteration', 'Algorithm'],
    correctAnswer: 3,
    explanation: 'Algorithm is a computational concept. The others are literary devices.',
    estimatedTime: 50
  },
  {
    id: 'odd_expert_5',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Find the exception:',
    content: 'Oxygen, Hydrogen, Carbon, Gravity',
    options: ['Oxygen', 'Hydrogen', 'Carbon', 'Gravity'],
    correctAnswer: 3,
    explanation: 'Gravity is a force. Oxygen, Hydrogen, and Carbon are chemical elements.',
    estimatedTime: 50
  },

  // ============================================
  // CAUSE → EFFECT - BEGINNER
  // ============================================
  {
    id: 'cause_beginner_1',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'What happens if you water a plant regularly?',
    content: 'A plant is watered every day.',
    options: ['It grows healthy', 'It dies', 'It turns blue', 'Nothing happens'],
    correctAnswer: 0,
    explanation: 'Plants need water to grow. Regular watering helps them stay healthy.',
    estimatedTime: 30
  },
  {
    id: 'cause_beginner_2',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'What happens when ice is left in the sun?',
    content: 'An ice cube is placed in direct sunlight.',
    options: ['It freezes more', 'It melts', 'It gets bigger', 'It changes color'],
    correctAnswer: 1,
    explanation: 'Heat from the sun melts ice, turning it into water.',
    estimatedTime: 30
  },
  {
    id: 'cause_beginner_3',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'What happens if you study for a test?',
    content: 'A student studies hard for their exam.',
    options: ['They likely do well', 'They forget everything', 'They fail', 'Nothing changes'],
    correctAnswer: 0,
    explanation: 'Studying helps you learn and remember, which improves test performance.',
    estimatedTime: 30
  },
  {
    id: 'cause_beginner_4',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'What happens when you drop a ball?',
    content: 'You let go of a ball while holding it in the air.',
    options: ['It floats', 'It falls down', 'It flies up', 'It disappears'],
    correctAnswer: 1,
    explanation: 'Gravity pulls objects down, so the ball falls to the ground.',
    estimatedTime: 30
  },
  {
    id: 'cause_beginner_5',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'What happens if you practice a skill?',
    content: 'Someone practices drawing every day.',
    options: ['They get better', 'They get worse', 'Nothing changes', 'They forget how'],
    correctAnswer: 0,
    explanation: 'Practice improves skills over time through repetition and learning.',
    estimatedTime: 30
  },

  // ============================================
  // CAUSE → EFFECT - INTERMEDIATE
  // ============================================
  {
    id: 'cause_intermediate_1',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What is the most likely outcome?',
    content: 'A person skips breakfast and lunch, then exercises heavily.',
    options: ['They feel energized', 'They feel weak and tired', 'They become stronger', 'Nothing happens'],
    correctAnswer: 1,
    explanation: 'Without food, the body lacks energy. Heavy exercise without fuel causes weakness.',
    estimatedTime: 45
  },
  {
    id: 'cause_intermediate_2',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What will likely happen?',
    content: 'A student ignores homework all semester, then studies one night before finals.',
    options: ['They ace the exam', 'They struggle with the exam', 'They remember everything', 'They become experts'],
    correctAnswer: 1,
    explanation: 'Learning takes time. Cramming one night cannot replace months of practice.',
    estimatedTime: 45
  },
  {
    id: 'cause_intermediate_3',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What is the expected result?',
    content: 'A phone battery is at 5% and used for video calls without charging.',
    options: ['Battery lasts all day', 'Phone shuts down soon', 'Battery charges itself', 'Nothing changes'],
    correctAnswer: 1,
    explanation: 'Video calls drain battery quickly. At 5%, the phone will shut down soon.',
    estimatedTime: 45
  },
  {
    id: 'cause_intermediate_4',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What will most likely occur?',
    content: 'Someone saves 10% of their income every month for a year.',
    options: ['They have savings', 'They go broke', 'Nothing changes', 'They lose money'],
    correctAnswer: 0,
    explanation: 'Consistent saving accumulates money over time, building financial reserves.',
    estimatedTime: 45
  },
  {
    id: 'cause_intermediate_5',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What is the probable outcome?',
    content: 'A garden is left unwatered for three weeks in summer.',
    options: ['Plants thrive', 'Plants wilt and die', 'Plants grow faster', 'Nothing happens'],
    correctAnswer: 1,
    explanation: 'Plants need water to survive. Three weeks without water in summer is fatal.',
    estimatedTime: 45
  },
  {
    id: 'cause_intermediate_6',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What is the likely result?',
    content: 'A chef adds too much salt to the curry while cooking.',
    options: ['It becomes sweet', 'It becomes inedible', 'It changes color', 'It cooks faster'],
    correctAnswer: 1,
    explanation: 'Excessive salt overpowers other flavors, making the dish too salty to eat.',
    estimatedTime: 45
  },
  {
    id: 'cause_intermediate_7',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What happens next?',
    content: 'You leave a glass of cold water outside on a hot summer afternoon.',
    options: ['It freezes', 'Water droplets form outside', 'It turns into milk', 'The glass breaks'],
    correctAnswer: 1,
    explanation: 'Condensation occurs when warm air touches the cold surface of the glass.',
    estimatedTime: 45
  },
  {
    id: 'cause_intermediate_8',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What is the consequence?',
    content: 'A driver ignores the red traffic light at a busy junction.',
    options: ['They save time safely', 'High risk of accident', 'Traffic stops for them', 'Nothing happens'],
    correctAnswer: 1,
    explanation: 'Ignoring traffic signals disrupts the flow and creates a high danger collision risk.',
    estimatedTime: 45
  },
  {
    id: 'cause_intermediate_9',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What is the outcome?',
    content: 'A student writes an exam with a pen that is running out of ink.',
    options: ['Handwriting improves', 'The paper tears', 'Writing becomes faint/illegible', 'The pen refills itself'],
    correctAnswer: 2,
    explanation: 'Low ink causes skipping and faint lines, making the text hard to read.',
    estimatedTime: 45
  },
  {
    id: 'cause_intermediate_10',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What will likely happen?',
    content: 'You wear thick woolen clothes on a sunny beach day.',
    options: ['You feel cold', 'You overheat and sweat', 'You get a tan faster', 'You feel comfortable'],
    correctAnswer: 1,
    explanation: 'Wool insulates heat. Wearing it in hot weather traps body heat.',
    estimatedTime: 45
  },
  {
    id: 'cause_intermediate_11',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What is the result?',
    content: 'A phone is dropped into a bucket of water.',
    options: ['Battery charges', 'Screen gets brighter', 'Internal damage likely', 'It becomes waterproof'],
    correctAnswer: 2,
    explanation: 'Water damages electronic circuits unless the device is specifically waterproof.',
    estimatedTime: 45
  },
  {
    id: 'cause_intermediate_12',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What happens if?',
    content: 'You over-inflate a balloon beyond its limit.',
    options: ['It floats higher', 'It bursts', 'It becomes heavy', 'It shrinks'],
    correctAnswer: 1,
    explanation: 'Rubber has an elastic limit. Exceeding it causes the material to fail (pop).',
    estimatedTime: 45
  },
  {
    id: 'cause_intermediate_13',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What is the consequence?',
    content: 'A person eats sugary sweets every day without brushing teeth.',
    options: ['Teeth become stronger', 'Cavities and decay form', 'Breath smells like mint', 'Nothing happens'],
    correctAnswer: 1,
    explanation: 'Sugar feeds bacteria that produce acid, leading to tooth decay.',
    estimatedTime: 45
  },
  {
    id: 'cause_intermediate_14',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What is the likely outcome?',
    content: 'Heavy rains continue for days without drainage.',
    options: ['Drought', 'Flooding/Waterlogging', 'Plants die of thirst', 'Dust storms'],
    correctAnswer: 1,
    explanation: 'Excess water that cannot drain away accumulates, causing floods.',
    estimatedTime: 45
  },
  {
    id: 'cause_intermediate_15',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What happens when?',
    content: 'You mix blue paint with yellow paint.',
    options: ['It turns Red', 'It turns Green', 'It turns Purple', 'It stays Blue'],
    correctAnswer: 1,
    explanation: 'Blue and Yellow are primary colors that mix to create Green.',
    estimatedTime: 45
  },
  {
    id: 'cause_intermediate_16',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What is the result?',
    content: 'A candle is covered with a glass jar.',
    options: ['It burns brighter', 'It changes color', 'It goes out', 'It melts instantly'],
    correctAnswer: 2,
    explanation: 'Fire needs oxygen to burn. The jar limits the oxygen supply.',
    estimatedTime: 45
  },
  {
    id: 'cause_intermediate_17',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What happens if?',
    content: 'You put too much detergent in the washing machine.',
    options: ['Clothes get cleaner', 'Excess foam overflows', 'Machine runs faster', 'Clothes shrink'],
    correctAnswer: 1,
    explanation: 'Too much soap creates excessive suds that can block hoses or overflow.',
    estimatedTime: 45
  },
  {
    id: 'cause_intermediate_18',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What is the consequence?',
    content: 'A laptop fan stops working while running heavy software.',
    options: ['Laptop runs faster', 'Laptop overheats/crashes', 'Battery lasts longer', 'Screen gets clearer'],
    correctAnswer: 1,
    explanation: 'Fans dissipate heat. Without cooling, the processor overheats.',
    estimatedTime: 45
  },
  {
    id: 'cause_intermediate_19',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What is the outcome?',
    content: 'You shout loudly in a large, empty hall.',
    options: ['Silence', 'An echo', 'Sound disappears', 'Walls break'],
    correctAnswer: 1,
    explanation: 'Sound waves bounce off hard, distant surfaces creating an echo.',
    estimatedTime: 45
  },
  {
    id: 'cause_intermediate_20',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What happens when?',
    content: 'Iron is left outside in wet weather for weeks.',
    options: ['It shines brighter', 'It rusts', 'It becomes soft', 'It turns into gold'],
    correctAnswer: 1,
    explanation: 'Iron reacts with oxygen and moisture to form rust (iron oxide).',
    estimatedTime: 45
  },

  // ============================================
  // CAUSE → EFFECT - EXPERT
  // ============================================
  {
    id: 'cause_expert_1',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.EXPERT,
    question: 'What is the most logical consequence?',
    content: 'A company ignores customer feedback and refuses to update its outdated product.',
    options: ['Sales increase', 'Competitors gain market share', 'Customers become more loyal', 'Product improves naturally'],
    correctAnswer: 1,
    explanation: 'Ignoring feedback and staying outdated drives customers to better alternatives.',
    estimatedTime: 60
  },
  {
    id: 'cause_expert_2',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.EXPERT,
    question: 'What will likely result?',
    content: 'A team rushes a project without planning, skipping quality checks to meet a deadline.',
    options: ['Perfect execution', 'Errors and rework needed', 'Faster future projects', 'Better quality'],
    correctAnswer: 1,
    explanation: 'Rushing without planning and quality checks leads to mistakes requiring fixes.',
    estimatedTime: 60
  },
  {
    id: 'cause_expert_3',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.EXPERT,
    question: 'What is the expected outcome?',
    content: 'A person consistently sleeps 4 hours per night while working 12-hour days.',
    options: ['Improved productivity', 'Burnout and health issues', 'Better focus', 'Increased energy'],
    correctAnswer: 1,
    explanation: 'Chronic sleep deprivation with long work hours causes physical and mental exhaustion.',
    estimatedTime: 60
  },
  {
    id: 'cause_expert_4',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.EXPERT,
    question: 'What will most likely happen?',
    content: 'An investor puts all money into one volatile stock without research or diversification.',
    options: ['Guaranteed profit', 'High risk of significant loss', 'Stable returns', 'Risk-free investment'],
    correctAnswer: 1,
    explanation: 'Lack of diversification and research in volatile assets creates high loss risk.',
    estimatedTime: 60
  },
  {
    id: 'cause_expert_5',
    type: PUZZLE_TYPES.CAUSE_EFFECT,
    difficulty: DIFFICULTY.EXPERT,
    question: 'What is the probable result?',
    content: 'A city cuts all public transportation funding while population grows rapidly.',
    options: ['Less traffic', 'Severe congestion and pollution', 'Better mobility', 'Improved infrastructure'],
    correctAnswer: 1,
    explanation: 'More people with no public transit means more cars, causing congestion and pollution.',
    estimatedTime: 60
  },

  // ============================================
  // ERROR DETECTION - BEGINNER
  // ============================================
  {
    id: 'error_beginner_1',
    type: PUZZLE_TYPES.ERROR_DETECTION,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Which step is wrong?',
    content: 'Making a sandwich: 1) Get bread 2) Add peanut butter 3) Eat it 4) Add jelly 5) Close sandwich',
    options: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
    correctAnswer: 2,
    explanation: 'You should not eat the sandwich before adding jelly and closing it.',
    estimatedTime: 35
  },
  {
    id: 'error_beginner_2',
    type: PUZZLE_TYPES.ERROR_DETECTION,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Find the mistake:',
    content: 'Getting ready for school: 1) Wake up 2) Go to school 3) Brush teeth 4) Get dressed',
    options: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
    correctAnswer: 1,
    explanation: 'You should brush teeth and get dressed before going to school.',
    estimatedTime: 35
  },
  {
    id: 'error_beginner_3',
    type: PUZZLE_TYPES.ERROR_DETECTION,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Which step is incorrect?',
    content: 'Planting a seed: 1) Dig a hole 2) Water the soil 3) Put seed in hole 4) Cover with soil',
    options: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
    correctAnswer: 1,
    explanation: 'You should put the seed in the hole and cover it before watering.',
    estimatedTime: 35
  },
  {
    id: 'error_beginner_4',
    type: PUZZLE_TYPES.ERROR_DETECTION,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Spot the error:',
    content: 'Washing hands: 1) Turn on water 2) Dry hands 3) Apply soap 4) Rinse hands',
    options: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
    correctAnswer: 1,
    explanation: 'You should apply soap and rinse before drying your hands.',
    estimatedTime: 35
  },
  {
    id: 'error_beginner_5',
    type: PUZZLE_TYPES.ERROR_DETECTION,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Which step is out of order?',
    content: 'Making tea: 1) Boil water 2) Drink tea 3) Add tea bag 4) Let it steep',
    options: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
    correctAnswer: 1,
    explanation: 'You should add the tea bag, let it steep, then drink it.',
    estimatedTime: 35
  },

  // ============================================
  // ERROR DETECTION - INTERMEDIATE
  // ============================================
  {
    id: 'error_intermediate_1',
    type: PUZZLE_TYPES.ERROR_DETECTION,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Find the logical error:',
    content: 'Solving: 5 + 3 × 2 = ? Steps: 1) 5+3=8 2) 8×2=16 Answer: 16',
    options: ['Step 1 is wrong', 'Step 2 is wrong', 'Order is wrong', 'All correct'],
    correctAnswer: 2,
    explanation: 'Multiplication comes before addition. Should be: 3×2=6, then 5+6=11.',
    estimatedTime: 45
  },
  {
    id: 'error_intermediate_2',
    type: PUZZLE_TYPES.ERROR_DETECTION,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Which step has an error?',
    content: 'Baking a cake: 1) Mix ingredients 2) Eat the cake 3) Pour into pan 4) Bake at 350°F',
    options: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
    correctAnswer: 1,
    explanation: 'You cannot eat the cake before baking it. Baking must happen first.',
    estimatedTime: 45
  },
  {
    id: 'error_intermediate_3',
    type: PUZZLE_TYPES.ERROR_DETECTION,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Spot the mistake:',
    content: 'Charging phone: 1) Plug charger into wall 2) Use phone while charging 3) Connect to phone 4) Check battery',
    options: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
    correctAnswer: 2,
    explanation: 'You must connect the charger to the phone before using it while charging.',
    estimatedTime: 45
  },
  {
    id: 'error_intermediate_4',
    type: PUZZLE_TYPES.ERROR_DETECTION,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Find the error:',
    content: 'Writing an essay: 1) Submit essay 2) Research topic 3) Write draft 4) Edit and revise',
    options: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
    correctAnswer: 0,
    explanation: 'You cannot submit before researching, writing, and editing.',
    estimatedTime: 45
  },
  {
    id: 'error_intermediate_5',
    type: PUZZLE_TYPES.ERROR_DETECTION,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Which step is incorrect?',
    content: 'Sending email: 1) Write message 2) Click send 3) Add recipient 4) Add subject',
    options: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
    correctAnswer: 1,
    explanation: 'You must add recipient and subject before clicking send.',
    estimatedTime: 45
  },

  // ============================================
  // ERROR DETECTION - EXPERT
  // ============================================
  {
    id: 'error_expert_1',
    type: PUZZLE_TYPES.ERROR_DETECTION,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Identify the logical flaw:',
    content: 'Argument: "All birds can fly. Penguins are birds. Therefore, penguins can fly."',
    options: ['Premise 1 is false', 'Premise 2 is false', 'Logic is invalid', 'All correct'],
    correctAnswer: 0,
    explanation: 'The first premise is false. Not all birds can fly (e.g., penguins, ostriches).',
    estimatedTime: 60
  },
  {
    id: 'error_expert_2',
    type: PUZZLE_TYPES.ERROR_DETECTION,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Find the error in reasoning:',
    content: 'Analysis: "Sales dropped 20%. We ran ads, so ads caused the drop."',
    options: ['Correlation assumed as causation', 'Math is wrong', 'Timeline is wrong', 'No error'],
    correctAnswer: 0,
    explanation: 'Just because ads and sales drop happened together does not mean ads caused it.',
    estimatedTime: 60
  },
  {
    id: 'error_expert_3',
    type: PUZZLE_TYPES.ERROR_DETECTION,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Spot the mistake:',
    content: 'Project plan: 1) Launch product 2) Build prototype 3) Test with users 4) Fix bugs',
    options: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
    correctAnswer: 0,
    explanation: 'You cannot launch before building, testing, and fixing bugs.',
    estimatedTime: 60
  },
  {
    id: 'error_expert_4',
    type: PUZZLE_TYPES.ERROR_DETECTION,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Find the flawed assumption:',
    content: 'Claim: "This diet worked for me, so it will work for everyone."',
    options: ['Sample size too small', 'Ignores individual differences', 'Both A and B', 'No error'],
    correctAnswer: 2,
    explanation: 'One person\'s experience is not universal. People have different bodies and needs.',
    estimatedTime: 60
  },
  {
    id: 'error_expert_5',
    type: PUZZLE_TYPES.ERROR_DETECTION,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Identify the error:',
    content: 'Conclusion: "Website traffic increased after redesign, so the redesign was successful."',
    options: ['Ignores other factors', 'Defines success narrowly', 'Both A and B', 'No error'],
    correctAnswer: 2,
    explanation: 'Traffic could have increased for other reasons, and success involves more than traffic.',
    estimatedTime: 60
  },

  // ============================================
  // BEST CHOICE - BEGINNER
  // ============================================
  {
    id: 'best_beginner_1',
    type: PUZZLE_TYPES.BEST_CHOICE,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'What is the best choice?',
    content: 'You have $5. A toy costs $6 and a book costs $4. What should you buy?',
    options: ['The toy', 'The book', 'Both', 'Save the money'],
    correctAnswer: 1,
    explanation: 'You only have $5, so you can only afford the $4 book.',
    estimatedTime: 30
  },
  {
    id: 'best_beginner_2',
    type: PUZZLE_TYPES.BEST_CHOICE,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Which is the best option?',
    content: 'It is raining. You need to go outside. What should you do?',
    options: ['Go without anything', 'Take an umbrella', 'Wait for sunshine', 'Get wet'],
    correctAnswer: 1,
    explanation: 'Taking an umbrella keeps you dry while still allowing you to go outside.',
    estimatedTime: 30
  },
  {
    id: 'best_beginner_3',
    type: PUZZLE_TYPES.BEST_CHOICE,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'What is the smartest choice?',
    content: 'You have a test tomorrow. What should you do tonight?',
    options: ['Play video games', 'Study for the test', 'Watch TV', 'Go to a party'],
    correctAnswer: 1,
    explanation: 'Studying prepares you for the test and improves your chances of doing well.',
    estimatedTime: 30
  },
  {
    id: 'best_beginner_4',
    type: PUZZLE_TYPES.BEST_CHOICE,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Which choice makes most sense?',
    content: 'You are hungry and have an apple and candy. Which is healthier?',
    options: ['Candy', 'Apple', 'Both are same', 'Neither'],
    correctAnswer: 1,
    explanation: 'An apple is healthier than candy because it has vitamins and less sugar.',
    estimatedTime: 30
  },
  {
    id: 'best_beginner_5',
    type: PUZZLE_TYPES.BEST_CHOICE,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'What should you choose?',
    content: 'You want to learn to ride a bike. What is the best first step?',
    options: ['Enter a race', 'Practice with training wheels', 'Do tricks', 'Give up'],
    correctAnswer: 1,
    explanation: 'Training wheels help you learn balance safely before riding independently.',
    estimatedTime: 30
  },

  // ============================================
  // BEST CHOICE - INTERMEDIATE
  // ============================================
  {
    id: 'best_intermediate_1',
    type: PUZZLE_TYPES.BEST_CHOICE,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What is the best decision?',
    content: 'You have 2 hours. You can: study (need 3 hours), watch a movie (2 hours), or read (1 hour). You have a test tomorrow.',
    options: ['Study', 'Watch movie', 'Read', 'Do nothing'],
    correctAnswer: 2,
    explanation: 'Reading fits the time and helps your mind. Studying needs more time than you have.',
    estimatedTime: 45
  },
  {
    id: 'best_intermediate_2',
    type: PUZZLE_TYPES.BEST_CHOICE,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Which option is wisest?',
    content: 'Your phone battery is at 10%. You need it for a call in 3 hours. What should you do?',
    options: ['Play games', 'Charge it now', 'Use it normally', 'Turn it off'],
    correctAnswer: 1,
    explanation: 'Charging now ensures you have battery for the important call later.',
    estimatedTime: 45
  },
  {
    id: 'best_intermediate_3',
    type: PUZZLE_TYPES.BEST_CHOICE,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What is the best choice?',
    content: 'You can join: a) soccer team (fun, 5 hours/week), b) coding club (useful, 2 hours/week). You are very busy.',
    options: ['Soccer team', 'Coding club', 'Both', 'Neither'],
    correctAnswer: 1,
    explanation: 'Coding club takes less time and builds useful skills, better for a busy schedule.',
    estimatedTime: 45
  },
  {
    id: 'best_intermediate_4',
    type: PUZZLE_TYPES.BEST_CHOICE,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Which is the smartest option?',
    content: 'You get $50. You can: a) spend it all now, b) save $30 and spend $20, c) save it all.',
    options: ['Spend all', 'Save $30, spend $20', 'Save all', 'Give it away'],
    correctAnswer: 1,
    explanation: 'Balancing saving and spending is wise. You build savings while enjoying some now.',
    estimatedTime: 45
  },
  {
    id: 'best_intermediate_5',
    type: PUZZLE_TYPES.BEST_CHOICE,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What should you prioritize?',
    content: 'You have homework (due tomorrow) and a party (tonight). What should you do?',
    options: ['Go to party', 'Do homework first, then decide', 'Skip both', 'Do homework tomorrow'],
    correctAnswer: 1,
    explanation: 'Doing homework first meets your responsibility, then you can decide about the party.',
    estimatedTime: 45
  },

  // ============================================
  // BEST CHOICE - EXPERT
  // ============================================
  {
    id: 'best_expert_1',
    type: PUZZLE_TYPES.BEST_CHOICE,
    difficulty: DIFFICULTY.EXPERT,
    question: 'What is the optimal decision?',
    content: 'Project deadline in 2 days. Options: a) Work 20 hours straight, b) Work 8 hours, sleep, work 8 more, c) Ask for extension.',
    options: ['Work 20 hours straight', 'Work 8, sleep, work 8', 'Ask for extension', 'Give up'],
    correctAnswer: 1,
    explanation: 'Sleep maintains quality and health. 20 hours straight reduces effectiveness and risks burnout.',
    estimatedTime: 60
  },
  {
    id: 'best_expert_2',
    type: PUZZLE_TYPES.BEST_CHOICE,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Which strategy is best?',
    content: 'Limited budget. Options: a) One expensive marketing channel, b) Three cheaper channels, c) No marketing, save money.',
    options: ['One expensive channel', 'Three cheaper channels', 'No marketing', 'Borrow more money'],
    correctAnswer: 1,
    explanation: 'Diversifying across channels reduces risk and helps identify what works best.',
    estimatedTime: 60
  },
  {
    id: 'best_expert_3',
    type: PUZZLE_TYPES.BEST_CHOICE,
    difficulty: DIFFICULTY.EXPERT,
    question: 'What is the wisest choice?',
    content: 'Job offers: a) High pay, long hours, no growth, b) Medium pay, balanced hours, learning opportunities.',
    options: ['High pay job', 'Medium pay job', 'Reject both', 'Negotiate both'],
    correctAnswer: 1,
    explanation: 'Long-term growth and work-life balance often outweigh short-term higher pay.',
    estimatedTime: 60
  },
  {
    id: 'best_expert_4',
    type: PUZZLE_TYPES.BEST_CHOICE,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Which approach is optimal?',
    content: 'Launching a product: a) Perfect it for 6 months, b) Launch MVP in 1 month, iterate based on feedback.',
    options: ['Perfect for 6 months', 'Launch MVP, iterate', 'Wait for competition', 'Cancel project'],
    correctAnswer: 1,
    explanation: 'MVP gets real user feedback quickly, allowing faster learning and adaptation.',
    estimatedTime: 60
  },
  {
    id: 'best_expert_5',
    type: PUZZLE_TYPES.BEST_CHOICE,
    difficulty: DIFFICULTY.EXPERT,
    question: 'What is the best decision?',
    content: 'Team conflict: a) Ignore it, b) Address it privately with individuals, c) Public confrontation, d) Fire everyone.',
    options: ['Ignore it', 'Address privately', 'Public confrontation', 'Fire everyone'],
    correctAnswer: 1,
    explanation: 'Private conversations respect dignity, allow open dialogue, and preserve team dynamics.',
    estimatedTime: 60
  },
  // ============================================
  // NEW BATCH - DAY 4
  // ============================================
  {
    id: 'odd_beginner_6',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Which one does not belong?',
    content: 'Chair, Sofa, Bed, Apple',
    options: ['Chair', 'Sofa', 'Bed', 'Apple'],
    correctAnswer: 3,
    explanation: 'Apple is a fruit. The others are furniture.',
    estimatedTime: 30
  },
  {
    id: 'odd_beginner_7',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Find the odd one out:',
    content: 'T-shirt, Jeans, Jacket, Laptop',
    options: ['T-shirt', 'Jeans', 'Jacket', 'Laptop'],
    correctAnswer: 3,
    explanation: 'Laptop is an electronic device. The others are clothing.',
    estimatedTime: 30
  },
  {
    id: 'odd_beginner_8',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Which number is different?',
    content: '3, 5, 7, 10',
    options: ['3', '5', '7', '10'],
    correctAnswer: 3,
    explanation: '10 is an even number. 3, 5, and 7 are odd numbers.',
    estimatedTime: 30
  },
  {
    id: 'odd_beginner_9',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Which one is not like the others?',
    content: 'Dog, Cow, Horse, Eagle',
    options: ['Dog', 'Cow', 'Horse', 'Eagle'],
    correctAnswer: 3,
    explanation: 'Eagle is a bird that flies. The others are land animals.',
    estimatedTime: 30
  },
  {
    id: 'odd_beginner_10',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Find the intruder:',
    content: 'Car, Bike, Truck, Boat',
    options: ['Car', 'Bike', 'Truck', 'Boat'],
    correctAnswer: 3,
    explanation: 'Boat moves on water. Car, Bike, and Truck move on land.',
    estimatedTime: 30
  },

  // INTERMEDIATE
  {
    id: 'odd_intermediate_16',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Which one is different?',
    content: 'Mars, Jupiter, Saturn, USA',
    options: ['Mars', 'Jupiter', 'Saturn', 'USA'],
    correctAnswer: 3,
    explanation: 'USA is a country. Mars, Jupiter, and Saturn are planets.',
    estimatedTime: 40
  },
  {
    id: 'odd_intermediate_17',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Find the odd material:',
    content: 'Copper, Iron, Gold, Plastic',
    options: ['Copper', 'Iron', 'Gold', 'Plastic'],
    correctAnswer: 3,
    explanation: 'Plastic is a synthetic polymer. Copper, Iron, and Gold are metals.',
    estimatedTime: 40
  },
  {
    id: 'odd_intermediate_18',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Which number does not fit?',
    content: '21, 35, 49, 50',
    options: ['21', '35', '49', '50'],
    correctAnswer: 3,
    explanation: '50 is not divisible by 7. The others are multiples of 7.',
    estimatedTime: 40
  },
  {
    id: 'odd_intermediate_19',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Which shape is unique?',
    content: 'Triangle, Rectangle, Pentagon, Line',
    options: ['Triangle', 'Rectangle', 'Pentagon', 'Line'],
    correctAnswer: 3,
    explanation: 'Line is 1-dimensional. The others are 2-dimensional shapes.',
    estimatedTime: 40
  },
  {
    id: 'odd_intermediate_20',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Find the different subject:',
    content: 'Biology, Physics, Chemistry, History',
    options: ['Biology', 'Physics', 'Chemistry', 'History'],
    correctAnswer: 3,
    explanation: 'History is a humanities subject. The others are natural sciences.',
    estimatedTime: 40
  },

  // EXPERT
  {
    id: 'odd_expert_6',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Which number stands out?',
    content: '27, 64, 125, 100',
    options: ['27', '64', '125', '100'],
    correctAnswer: 3,
    explanation: '100 is a perfect square (10²), while 27, 64, and 125 are perfect cubes (3³, 4³, 5³).',
    estimatedTime: 60
  },
  {
    id: 'odd_expert_7',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Find the biological outlier:',
    content: 'Spider, Ant, Beetle, Butterfly',
    options: ['Spider', 'Ant', 'Beetle', 'Butterfly'],
    correctAnswer: 0,
    explanation: 'Spider is an arachnid (8 legs). The others are insects (6 legs).',
    estimatedTime: 60
  },
  {
    id: 'odd_expert_8',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Which number is the exception?',
    content: '11, 13, 17, 21',
    options: ['11', '13', '17', '21'],
    correctAnswer: 3,
    explanation: '21 is a composite number (3×7). The others are prime numbers.',
    estimatedTime: 60
  },
  {
    id: 'odd_expert_9',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Which element is different?',
    content: 'Helium, Neon, Argon, Sodium',
    options: ['Helium', 'Neon', 'Argon', 'Sodium'],
    correctAnswer: 3,
    explanation: 'Sodium is a reactive solid metal. The others are inert Noble Gases.',
    estimatedTime: 60
  },
  {
    id: 'odd_expert_10',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Who does not belong?',
    content: 'Shakespeare, Hemingway, Orwell, Einstein',
    options: ['Shakespeare', 'Hemingway', 'Orwell', 'Einstein'],
    correctAnswer: 3,
    explanation: 'Einstein was a physicist. The others were famous writers/authors.',
    estimatedTime: 60
  },
  // ============================================
  // ADDITIONAL PATTERNS - NEW BATCH (Puzzles 166-200)
  // ============================================

  // --- BEGINNER (15 New Puzzles) ---
  {
    id: 'pattern_beginner_26',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'What comes next?',
    content: '1, 2, 3, 4, ?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 0,
    explanation: 'Simple counting numbers: 1, 2, 3, 4, then 5.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_27',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Complete the countdown:',
    content: '10, 9, 8, 7, ?',
    options: ['5', '6', '4', '0'],
    correctAnswer: 1,
    explanation: 'Counting down by ones: 10, 9, 8, 7, so next is 6.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_28',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Find the pattern:',
    content: '2, 2, 4, 4, 6, 6, ?',
    options: ['7', '8', '6', '9'],
    correctAnswer: 1,
    explanation: 'Even numbers repeated twice: 2, 2, 4, 4, 6, 6, next is 8.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_29',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'What letter fits?',
    content: 'A, A, B, B, C, C, ?',
    options: ['C', 'D', 'E', 'F'],
    correctAnswer: 1,
    explanation: 'Two of each letter in order: A, A, B, B, C, C, so next starts D.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_30',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Complete the sequence:',
    content: '10, 12, 14, 16, ?',
    options: ['17', '18', '19', '20'],
    correctAnswer: 1,
    explanation: 'Even numbers starting from 10: 10, 12, 14, 16, then 18.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_31',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'What number is next?',
    content: '5, 5, 10, 10, 15, 15, ?',
    options: ['20', '25', '16', '15'],
    correctAnswer: 0,
    explanation: 'Multiples of 5 repeated twice: 5, 5, 10, 10, 15, 15, next is 20.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_32',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Which word follows?',
    content: 'One, Two, Three, Four, ?',
    options: ['Six', 'Five', 'Ten', 'Zero'],
    correctAnswer: 1,
    explanation: 'Counting numbers as words: One, Two, Three, Four, next is Five.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_33',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Complete the pattern:',
    content: '100, 101, 102, 103, ?',
    options: ['105', '110', '104', '200'],
    correctAnswer: 2,
    explanation: 'Sequential numbers starting from 100: 100, 101, 102, 103, then 104.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_34',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'What comes next?',
    content: '6, 12, 18, 24, ?',
    options: ['28', '30', '32', '36'],
    correctAnswer: 1,
    explanation: 'Multiples of 6: 6, 12, 18, 24, next is 30.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_35',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Find the next number:',
    content: '20, 18, 16, 14, ?',
    options: ['10', '11', '12', '13'],
    correctAnswer: 2,
    explanation: 'Counting down by 2 (even numbers): 20, 18, 16, 14, next is 12.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_36',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Which letter is next?',
    content: 'Z, Z, Y, Y, X, X, ?',
    options: ['V', 'U', 'W', 'T'],
    correctAnswer: 2,
    explanation: 'Repeat letters in reverse alphabet: Z, Z, Y, Y, X, X, next is W.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_37',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Complete the binary pattern:',
    content: '1, 0, 1, 0, ?',
    options: ['0', '1', '2', '10'],
    correctAnswer: 1,
    explanation: 'Alternating 1 and 0. Next is 1.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_38',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'What comes next?',
    content: 'Up, Down, Up, Down, ?',
    options: ['Left', 'Right', 'Down', 'Up'],
    correctAnswer: 3,
    explanation: 'Alternating directions: Up, Down, Up, Down, next is Up.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_39',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Find the missing number:',
    content: '11, 12, 13, 14, ?',
    options: ['15', '16', '10', '20'],
    correctAnswer: 0,
    explanation: 'Sequential numbers: 11, 12, 13, 14, next is 15.',
    estimatedTime: 30
  },
  {
    id: 'pattern_beginner_40',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Complete the sequence:',
    content: '50, 50, 40, 40, 30, ?',
    options: ['30', '20', '10', '60'],
    correctAnswer: 0,
    explanation: 'Numbers decrease by 10 but repeat once: 50, 50, 40, 40, next is 30.',
    estimatedTime: 30
  },

  // --- INTERMEDIATE (12 New Puzzles) ---
  {
    id: 'pattern_intermediate_21',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What comes next?',
    content: '10, 20, 40, 80, ?',
    options: ['100', '120', '160', '200'],
    correctAnswer: 2,
    explanation: 'Each number is doubled: 10x2=20... 80x2=160.',
    estimatedTime: 60
  },
  {
    id: 'pattern_intermediate_22',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Find the next term:',
    content: '1, 5, 25, 125, ?',
    options: ['500', '600', '625', '750'],
    correctAnswer: 2,
    explanation: 'Powers of 5: 5^0, 5^1, 5^2, 5^3. Next is 5^4 = 625.',
    estimatedTime: 60
  },
  {
    id: 'pattern_intermediate_23',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Complete the sequence:',
    content: '48, 24, 12, 6, ?',
    options: ['4', '3', '2', '1'],
    correctAnswer: 1,
    explanation: 'Divide by 2 each time: 48/2=24... 6/2=3.',
    estimatedTime: 60
  },
  {
    id: 'pattern_intermediate_24',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What number fits?',
    content: '2, 3, 5, 8, 12, ?',
    options: ['15', '16', '17', '18'],
    correctAnswer: 2,
    explanation: 'Difference increases by 1: +1, +2, +3, +4. Next is +5. 12+5=17.',
    estimatedTime: 60
  },
  {
    id: 'pattern_intermediate_25',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Find the next number:',
    content: '7, 14, 28, 56, ?',
    options: ['100', '110', '112', '120'],
    correctAnswer: 2,
    explanation: 'Double each time: 7x2=14... 56x2=112.',
    estimatedTime: 60
  },
  {
    id: 'pattern_intermediate_26',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Which letter comes next?',
    content: 'A, C, F, J, ?',
    options: ['M', 'N', 'O', 'P'],
    correctAnswer: 2,
    explanation: 'Wait (+2), +3, +4. A(1)+2=C(3). C(3)+3=F(6). F(6)+4=J(10). J(10)+5=O(15).',
    estimatedTime: 60
  },
  {
    id: 'pattern_intermediate_27',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Complete the factorial sequence:',
    content: '1, 2, 6, 24, ?',
    options: ['100', '120', '48', '96'],
    correctAnswer: 1,
    explanation: 'Factorials: 1!, 2!, 3!, 4!. Next is 5! = 120.',
    estimatedTime: 60
  },
  {
    id: 'pattern_intermediate_28',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What fits the pattern?',
    content: '0, 3, 8, 15, ?',
    options: ['20', '24', '25', '30'],
    correctAnswer: 1,
    explanation: 'Pattern is n^2 - 1. (1^2-1=0, 2^2-1=3...). Next is 5^2 - 1 = 24.',
    estimatedTime: 60
  },
  {
    id: 'pattern_intermediate_29',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Find the next term:',
    content: '81, 27, 9, 3, ?',
    options: ['0', '1', '1.5', '0.5'],
    correctAnswer: 1,
    explanation: 'Divide by 3 each time: 81/3=27... 3/3=1.',
    estimatedTime: 60
  },
  {
    id: 'pattern_intermediate_30',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Complete the sequence:',
    content: '16, 25, 36, 49, ?',
    options: ['60', '64', '81', '50'],
    correctAnswer: 1,
    explanation: 'Consective squares: 4^2, 5^2, 6^2, 7^2. Next is 8^2 = 64.',
    estimatedTime: 60
  },
  {
    id: 'pattern_intermediate_31',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'What number follows?',
    content: '21, 19, 16, 12, ?',
    options: ['6', '7', '8', '9'],
    correctAnswer: 1,
    explanation: 'Subtract increasing amount: -2, -3, -4. Next is -5. 12-5=7.',
    estimatedTime: 60
  },
  {
    id: 'pattern_intermediate_32',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Find the logic:',
    content: '2, 4, 8, 14, 22, ?',
    options: ['30', '32', '34', '36'],
    correctAnswer: 1,
    explanation: 'Differences are +2, +4, +6, +8. Next is +10. 22+10=32.',
    estimatedTime: 60
  },

  // --- EXPERT (8 New Puzzles) ---
  {
    id: 'pattern_expert_21',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'What is the next term?',
    content: '77, 49, 36, 18, ?',
    options: ['6', '8', '10', '12'],
    correctAnswer: 1,
    explanation: 'Multiply the digits of the previous number: 7x7=49, 4x9=36, 3x6=18, 1x8=8.',
    estimatedTime: 90
  },
  {
    id: 'pattern_expert_22',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Find the next number:',
    content: '1, 5, 14, 30, 55, ?',
    options: ['91', '81', '75', '100'],
    correctAnswer: 0,
    explanation: 'Sum of squares (Pyramidal numbers): 1^2=1, 1^2+2^2=5... next adds 6^2=36. 55+36=91.',
    estimatedTime: 90
  },
  {
    id: 'pattern_expert_23',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Complete the sequence:',
    content: '2, 9, 28, 65, 126, ?',
    options: ['215', '216', '217', '218'],
    correctAnswer: 2,
    explanation: 'n^3 + 1: 1^3+1=2... 6^3+1=217.',
    estimatedTime: 90
  },
  {
    id: 'pattern_expert_24',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'What comes next?',
    content: '10, 11, 12, 13, 14, 15, 16, ?',
    options: ['20', '17', '21', '100'],
    correctAnswer: 1,
    explanation: 'Base-n sequence riddle. But could just be simple +1. Trick question? Actually, in base 7: 10(7), 11(8), 12(9)... no. Let\'s stick to simple +1 trick if "17" is answer.',
    correctAnswer: 1,
    explanation: 'Just counting numbers. Sometimes the simplest answer is right.',
    estimatedTime: 90
  },
  {
    id: 'pattern_expert_25',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Find the missing term:',
    content: '2, 3, 5, 9, 17, 33, ?',
    options: ['63', '64', '65', '66'],
    correctAnswer: 2,
    explanation: '2n - 1 relation: 2x2-1=3, 3x2-1=5... 33x2-1=65.',
    estimatedTime: 90
  },
  {
    id: 'pattern_expert_26',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Which number fits?',
    content: '6, 24, 60, 120, 210, ?',
    options: ['330', '336', '340', '350'],
    correctAnswer: 1,
    explanation: 'n^3 - n: 2^3-2=6, 3^3-3=24... 7^3-7=336.',
    estimatedTime: 90
  },
  {
    id: 'pattern_expert_27',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'What follows?',
    content: '0, 1, 10, 11, 100, 101, ?',
    options: ['110', '111', '1000', '1010'],
    correctAnswer: 0,
    explanation: 'Binary numbers counting up: 0, 1, 2, 3, 4, 5. Next is 6, which is 110 in binary.',
    estimatedTime: 90
  },
  {
    id: 'pattern_expert_28',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Find the next letters:',
    content: 'J, F, M, A, M, J, ?',
    options: ['J', 'A', 'S', 'O'],
    correctAnswer: 0,
    explanation: 'Months of the year: Jan, Feb, Mar, Apr, May, Jun, (Jul). J comes next.',
    estimatedTime: 90
  },

  // ============================================
  // EXTRA PUZZLES (IMPORTED)
  // ============================================
  {
    id: 'extra_96',
    type: PUZZLE_TYPES.LOGIC,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: "A clock shows 3:15. What is the angle between the hour and minute hands?",
    content: "A clock shows 3:15. What is the angle between the hour and minute hands?",
    options: ["0°", "7.5°", "15°", "22.5°"],
    correctAnswer: 1,
    explanation: "At 3:15, the minute hand is at 90° (pointing at 3). The hour hand moves 0.5° per minute, so in 15 minutes it moves 7.5° past the 3. The angle between them is 7.5°.",
    hint: "Remember the hour hand moves continuously, not in jumps",
    estimatedTime: 60
  },
  {
    id: 'extra_97',
    type: PUZZLE_TYPES.MATH,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: "If 5 cats can catch 5 mice in 5 minutes, how many cats are needed to catch 100 mice in 100 minutes?",
    content: "If 5 cats can catch 5 mice in 5 minutes, how many cats are needed to catch 100 mice in 100 minutes?",
    options: ["5 cats", "20 cats", "100 cats", "500 cats"],
    correctAnswer: 0,
    explanation: "Each cat catches 1 mouse in 5 minutes, or 20 mice in 100 minutes. So 5 cats can catch 100 mice in 100 minutes.",
    hint: "Calculate the rate per cat first",
    estimatedTime: 60
  },
  {
    id: 'extra_98',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: "What comes next in the sequence: 2, 6, 12, 20, 30, ?",
    content: "What comes next in the sequence: 2, 6, 12, 20, 30, ?",
    options: ["40", "42", "44", "48"],
    correctAnswer: 1,
    explanation: "The differences are 4, 6, 8, 10, 12... (increasing by 2 each time). So 30 + 12 = 42.",
    hint: "Look at the differences between consecutive numbers",
    estimatedTime: 60
  },
  {
    id: 'extra_99',
    type: PUZZLE_TYPES.LOGIC,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: "You have 12 balls, one is slightly heavier. Using a balance scale only 3 times, can you find the heavy ball?",
    content: "You have 12 balls, one is slightly heavier. Using a balance scale only 3 times, can you find the heavy ball?",
    options: ["Yes", "No", "Only with 4 weighings", "Impossible to know"],
    correctAnswer: 0,
    explanation: "Divide into groups of 4. Weigh two groups. If balanced, the heavy ball is in the third group. Continue dividing by 3 or 4 until found in exactly 3 weighings.",
    hint: "Divide the balls into three groups of 4",
    estimatedTime: 60
  },
  {
    id: 'extra_100',
    type: PUZZLE_TYPES.MATH,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: "A bat and ball cost ₹110 in total. The bat costs ₹100 more than the ball. How much does the ball cost?",
    content: "A bat and ball cost ₹110 in total. The bat costs ₹100 more than the ball. How much does the ball cost?",
    options: ["₹5", "₹10", "₹15", "₹20"],
    correctAnswer: 0,
    explanation: "If ball = x, then bat = x + 100. So x + (x + 100) = 110, which gives 2x = 10, so x = 5. The ball costs ₹5.",
    hint: "Set up an equation with the ball's price as x",
    estimatedTime: 60
  },
  {
    id: 'extra_101',
    type: PUZZLE_TYPES.LOGIC,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: "Which is heavier: a kilogram of feathers or a kilogram of iron?",
    content: "Which is heavier: a kilogram of feathers or a kilogram of iron?",
    options: ["Feathers", "Iron", "Both weigh the same", "Depends on density"],
    correctAnswer: 2,
    explanation: "A kilogram is a kilogram, regardless of the material. Both weigh exactly 1 kg.",
    hint: "Focus on the unit of measurement given",
    estimatedTime: 60
  },
  {
    id: 'extra_102',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: "Find the missing number: 3, 7, 15, 31, 63, ?",
    content: "Find the missing number: 3, 7, 15, 31, 63, ?",
    options: ["95", "115", "127", "131"],
    correctAnswer: 2,
    explanation: "Each number is (previous × 2) + 1. So 63 × 2 + 1 = 127.",
    hint: "Look at how each number relates to the previous one",
    estimatedTime: 60
  },
  {
    id: 'extra_103',
    type: PUZZLE_TYPES.MATH,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: "A snail climbs 3 feet up a 10-foot wall each day but slides down 2 feet each night. How many days to reach the top?",
    content: "A snail climbs 3 feet up a 10-foot wall each day but slides down 2 feet each night. How many days to reach the top?",
    options: ["8 days", "10 days", "7 days", "9 days"],
    correctAnswer: 0,
    explanation: "After 7 days, the snail is at 7 feet (net 1 foot per day). On day 8, it climbs 3 feet to reach 10 feet and escapes before sliding down.",
    hint: "Consider what happens on the final day before sliding",
    estimatedTime: 60
  },
  {
    id: 'extra_104',
    type: PUZZLE_TYPES.LOGIC,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: "If you overtake the person in 2nd place in a race, what position are you in?",
    content: "If you overtake the person in 2nd place in a race, what position are you in?",
    options: ["1st place", "2nd place", "3rd place", "Depends on speed"],
    correctAnswer: 1,
    explanation: "If you overtake the person in 2nd place, you take their position (2nd), and they become 3rd.",
    hint: "You take the position of the person you overtake",
    estimatedTime: 60
  },
  {
    id: 'extra_105',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: "What's the next letter: J, F, M, A, M, J, J, ?",
    content: "What's the next letter: J, F, M, A, M, J, J, ?",
    options: ["A", "S", "O", "N"],
    correctAnswer: 0,
    explanation: "These are the first letters of the months: January, February, March, April, May, June, July, August.",
    hint: "Think about the calendar year",
    estimatedTime: 60
  },
  {
    id: 'extra_106',
    type: PUZZLE_TYPES.MATH,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: "A car travels 60 km at 30 km/h, then 60 km at 60 km/h. What's the average speed?",
    content: "A car travels 60 km at 30 km/h, then 60 km at 60 km/h. What's the average speed?",
    options: ["40 km/h", "45 km/h", "50 km/h", "55 km/h"],
    correctAnswer: 0,
    explanation: "Time = distance/speed. First part: 2 hours, second part: 1 hour. Total: 120 km in 3 hours = 40 km/h average.",
    hint: "Calculate total time, not average of speeds",
    estimatedTime: 60
  },
  {
    id: 'extra_107',
    type: PUZZLE_TYPES.LOGIC,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: "Three switches outside a room control three bulbs inside. You can flip switches but enter only once. How to match each switch to each bulb?",
    content: "Three switches outside a room control three bulbs inside. You can flip switches but enter only once. How to match each switch to each bulb?",
    options: ["Impossible", "Use heat and light", "Use sound", "Need 2 entries"],
    correctAnswer: 1,
    explanation: "Turn on switch 1 for 10 minutes, turn it off, turn on switch 2, enter. The hot-off bulb is switch 1, the on bulb is switch 2, the cold-off bulb is switch 3.",
    hint: "Bulbs produce more than just light",
    estimatedTime: 60
  },
  {
    id: 'extra_108',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: "Find the odd one out: 3, 5, 11, 14, 17, 21",
    content: "Find the odd one out: 3, 5, 11, 14, 17, 21",
    options: ["3", "5", "14", "21"],
    correctAnswer: 2,
    explanation: "All numbers except 14 are prime numbers. 14 = 2 × 7, so it's not prime.",
    hint: "Consider which numbers can only be divided by 1 and themselves",
    estimatedTime: 60
  },
  {
    id: 'extra_109',
    type: PUZZLE_TYPES.MATH,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: "How many times do the hour and minute hands overlap in 12 hours?",
    content: "How many times do the hour and minute hands overlap in 12 hours?",
    options: ["11 times", "12 times", "22 times", "24 times"],
    correctAnswer: 0,
    explanation: "The hands overlap every 12/11 hours (approximately 65.45 minutes). In 12 hours: 12 ÷ (12/11) = 11 overlaps.",
    hint: "They don't overlap at exactly every hour",
    estimatedTime: 60
  },
  {
    id: 'extra_110',
    type: PUZZLE_TYPES.LOGIC,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: "A farmer has 17 sheep. All but 9 die. How many are left?",
    content: "A farmer has 17 sheep. All but 9 die. How many are left?",
    options: ["8", "9", "17", "None"],
    correctAnswer: 1,
    explanation: "'All but 9' means all except 9 died, so 9 sheep are left alive.",
    hint: "Read the phrase 'all but 9' carefully",
    estimatedTime: 60
  },
  {
    id: 'extra_111',
    type: PUZZLE_TYPES.LOGIC,
    difficulty: DIFFICULTY.EXPERT,
    question: "Five pirates find 100 gold coins. They vote on splits. If <50% agree, the proposer dies and the next proposes. What should Pirate 1 propose to survive and maximize his coins?",
    content: "Five pirates find 100 gold coins. They vote on splits. If <50% agree, the proposer dies and the next proposes. What should Pirate 1 propose to survive and maximize his coins?",
    options: ["Keep 100", "98-0-1-0-1", "97-0-1-0-2", "96-0-1-0-3"],
    correctAnswer: 1,
    explanation: "Using backward induction: Pirate 1 needs 3 votes (including his own). He gives 1 coin each to Pirates 3 and 5 (who'd get 0 if he dies), keeping 98.",
    hint: "Work backwards from the last pirate's scenario",
    estimatedTime: 60
  },
  {
    id: 'extra_112',
    type: PUZZLE_TYPES.MATH,
    difficulty: DIFFICULTY.EXPERT,
    question: "A monk walks up a mountain starting at 7 AM, reaches the top at 7 PM. Next day at 7 AM he walks down the same path, reaching bottom at 7 PM. Is there a spot he passes at the exact same time both days?",
    content: "A monk walks up a mountain starting at 7 AM, reaches the top at 7 PM. Next day at 7 AM he walks down the same path, reaching bottom at 7 PM. Is there a spot he passes at the exact same time both days?",
    options: ["Yes, always", "No, never", "Only if same speed", "Depends on path"],
    correctAnswer: 0,
    explanation: "Imagine both journeys happening simultaneously on the same day. The two monks must meet at some point, proving there's always such a spot.",
    hint: "Visualize both journeys happening at the same time",
    estimatedTime: 60
  },
  {
    id: 'extra_113',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: "What's next: 1, 11, 21, 1211, 111221, ?",
    content: "What's next: 1, 11, 21, 1211, 111221, ?",
    options: ["211231", "312211", "131221", "312213"],
    correctAnswer: 1,
    explanation: "Each number describes the previous: '1' becomes 'one 1' (11), '11' becomes 'two 1s' (21), '21' becomes 'one 2, one 1' (1211), etc. '111221' = three 1s, two 2s, one 1 = 312211.",
    hint: "Each term describes the count and digit of the previous term",
    estimatedTime: 60
  },
  {
    id: 'extra_114',
    type: PUZZLE_TYPES.LOGIC,
    difficulty: DIFFICULTY.EXPERT,
    question: "You have two ropes. Each burns in exactly 60 minutes but at non-uniform rates. How do you measure exactly 45 minutes?",
    content: "You have two ropes. Each burns in exactly 60 minutes but at non-uniform rates. How do you measure exactly 45 minutes?",
    options: ["Impossible", "Light one end", "Light both ends of one, one end of other", "Cut the ropes"],
    correctAnswer: 2,
    explanation: "Light both ends of rope 1 and one end of rope 2. When rope 1 finishes (30 min), light the other end of rope 2. It will burn for 15 more minutes. Total: 45 minutes.",
    hint: "Lighting both ends makes a rope burn twice as fast",
    estimatedTime: 60
  },
  {
    id: 'extra_115',
    type: PUZZLE_TYPES.MATH,
    difficulty: DIFFICULTY.EXPERT,
    question: "A room has 23 people. What's the approximate probability that two people share the same birthday?",
    content: "A room has 23 people. What's the approximate probability that two people share the same birthday?",
    options: ["23%", "37%", "51%", "63%"],
    correctAnswer: 2,
    explanation: "This is the Birthday Paradox. With 23 people, the probability exceeds 50%. The exact probability is about 50.7%.",
    hint: "This is a famous probability paradox",
    estimatedTime: 60
  },
  {
    id: 'extra_116',
    type: PUZZLE_TYPES.LOGIC,
    difficulty: DIFFICULTY.EXPERT,
    question: "You have 9 coins, one is counterfeit (lighter). Using a balance scale only twice, can you identify the fake?",
    content: "You have 9 coins, one is counterfeit (lighter). Using a balance scale only twice, can you identify the fake?",
    options: ["Yes", "No", "Only with 3 weighings", "Need to know weight difference"],
    correctAnswer: 0,
    explanation: "Divide into 3 groups of 3. Weigh two groups. The lighter group (or the unweighed if balanced) contains the fake. Weigh 2 of those 3 coins to identify the fake.",
    hint: "Divide coins into three equal groups",
    estimatedTime: 60
  },
  {
    id: 'extra_117',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: "Complete: 8, 5, 4, 9, 1, 7, 6, 3, 2, ?",
    content: "Complete: 8, 5, 4, 9, 1, 7, 6, 3, 2, ?",
    options: ["0", "5", "8", "10"],
    correctAnswer: 0,
    explanation: "Numbers are sorted alphabetically by their English names: Eight, Five, Four, Nine, One, Seven, Six, Three, Two, Zero.",
    hint: "Think about how these numbers would be arranged alphabetically",
    estimatedTime: 60
  },
  {
    id: 'extra_118',
    type: PUZZLE_TYPES.MATH,
    difficulty: DIFFICULTY.EXPERT,
    question: "A lily pad patch doubles in size every day. If it takes 48 days to cover a pond, on which day was half the pond covered?",
    content: "A lily pad patch doubles in size every day. If it takes 48 days to cover a pond, on which day was half the pond covered?",
    options: ["Day 24", "Day 40", "Day 47", "Day 46"],
    correctAnswer: 2,
    explanation: "Since the patch doubles each day, it was half the final size the day before it covered the entire pond: day 47.",
    hint: "If it doubles daily, work backwards from day 48",
    estimatedTime: 60
  },
  {
    id: 'extra_119',
    type: PUZZLE_TYPES.LOGIC,
    difficulty: DIFFICULTY.EXPERT,
    question: "Two doors: one to freedom, one to death. Two guards: one always lies, one always tells truth. You can ask one question to one guard. What do you ask?",
    content: "Two doors: one to freedom, one to death. Two guards: one always lies, one always tells truth. You can ask one question to one guard. What do you ask?",
    options: ["Which door is safe?", "Are you truthful?", "What would the other guard say?", "Where does this door lead?"],
    correctAnswer: 2,
    explanation: "Ask either guard: 'Which door would the other guard say leads to freedom?' Then choose the opposite door. Both guards will point to the death door.",
    hint: "Find a question where both guards give the same wrong answer",
    estimatedTime: 60
  },
  {
    id: 'extra_120',
    type: PUZZLE_TYPES.MATH,
    difficulty: DIFFICULTY.EXPERT,
    question: "In a race, you pass the person in 2nd place. Then you pass the person now in 3rd place. What position are you in?",
    content: "In a race, you pass the person in 2nd place. Then you pass the person now in 3rd place. What position are you in?",
    options: ["1st", "2nd", "3rd", "Can't determine"],
    correctAnswer: 1,
    explanation: "After passing the 2nd place person, you're in 2nd. When you then pass the person in 3rd, you're passing someone behind you, so you remain in 2nd place.",
    hint: "After the first overtake, who is in 3rd place?",
    estimatedTime: 60
  },
  {
    id: 'extra_121',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: "Find X: 2 = 6, 3 = 12, 4 = 20, 5 = 30, 6 = X",
    content: "Find X: 2 = 6, 3 = 12, 4 = 20, 5 = 30, 6 = X",
    options: ["36", "40", "42", "48"],
    correctAnswer: 2,
    explanation: "Pattern: n × (n+1). So 2×3=6, 3×4=12, 4×5=20, 5×6=30, 6×7=42.",
    hint: "Multiply each number by its successor",
    estimatedTime: 60
  },
  {
    id: 'extra_122',
    type: PUZZLE_TYPES.LOGIC,
    difficulty: DIFFICULTY.EXPERT,
    question: "A man lives on the 10th floor. Every day he takes the elevator down. Coming back, he takes it to the 7th floor and walks up 3 floors. Why?",
    content: "A man lives on the 10th floor. Every day he takes the elevator down. Coming back, he takes it to the 7th floor and walks up 3 floors. Why?",
    options: ["Exercise", "Elevator broken", "He's short, can't reach button 10", "Saves electricity"],
    correctAnswer: 2,
    explanation: "He's too short to reach the 10th floor button, but can reach the 7th. On rainy days, he uses his umbrella to press the 10th floor button.",
    hint: "It's a physical limitation, not a choice",
    estimatedTime: 60
  },
  {
    id: 'extra_123',
    type: PUZZLE_TYPES.MATH,
    difficulty: DIFFICULTY.EXPERT,
    question: "What's the sum of all numbers from 1 to 100?",
    content: "What's the sum of all numbers from 1 to 100?",
    options: ["5000", "5050", "5100", "10000"],
    correctAnswer: 1,
    explanation: "Using Gauss's formula: n(n+1)/2 = 100×101/2 = 5050. Or pair them: (1+100)+(2+99)+...+(50+51) = 50 pairs of 101 = 5050.",
    hint: "Pair the numbers from opposite ends",
    estimatedTime: 60
  },
  {
    id: 'extra_124',
    type: PUZZLE_TYPES.LOGIC,
    difficulty: DIFFICULTY.EXPERT,
    question: "A man says: 'Brothers and sisters have I none, but that man's father is my father's son.' Who is 'that man'?",
    content: "A man says: 'Brothers and sisters have I none, but that man's father is my father's son.' Who is 'that man'?",
    options: ["His son", "His father", "Himself", "His nephew"],
    correctAnswer: 0,
    explanation: "'My father's son' (with no brothers) = himself. So 'that man's father is myself,' meaning 'that man' is his son.",
    hint: "Work out who 'my father's son' refers to first",
    estimatedTime: 60
  },
  {
    id: 'extra_125',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: "Solve: O T T F F S S E N ?",
    content: "Solve: O T T F F S S E N ?",
    options: ["T", "F", "E", "S"],
    correctAnswer: 0,
    explanation: "These are the first letters of numbers: One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten.",
    hint: "Think of counting from one to ten",
    estimatedTime: 60
  },
];

// Helper function to get puzzles by type and difficulty
function getPuzzlesByFilter(type = null, difficulty = null) {
  return PUZZLES.filter(puzzle => {
    const typeMatch = type === null || puzzle.type === type;
    const difficultyMatch = difficulty === null || puzzle.difficulty === difficulty;
    return typeMatch && difficultyMatch;
  });
}

// Helper function to get a random puzzle
function getRandomPuzzle(type = null, difficulty = null, excludeIds = []) {
  const filtered = getPuzzlesByFilter(type, difficulty).filter(
    puzzle => !excludeIds.includes(puzzle.id)
  );

  if (filtered.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randomIndex];
}

// Helper function to get daily challenge puzzle
function getDailyChallengePuzzle() {
  const today = new Date().toDateString();
  const seed = today.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const index = seed % PUZZLES.length;
  return PUZZLES[index];
}