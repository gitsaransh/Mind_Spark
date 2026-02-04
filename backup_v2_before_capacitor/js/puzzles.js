// ============================================
// MindSpark - Puzzle Database
// ============================================

const PUZZLE_TYPES = {
  PATTERN: 'pattern',
  ODD_ONE_OUT: 'odd_one_out',
  CAUSE_EFFECT: 'cause_effect',
  ERROR_DETECTION: 'error_detection',
  BEST_CHOICE: 'best_choice'
};

const DIFFICULTY = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  EXPERT: 'expert'
};

// Puzzle Database
const PUZZLES = [
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
  }
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
