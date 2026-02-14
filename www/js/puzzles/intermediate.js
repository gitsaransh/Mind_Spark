// ============================================
// MindSpark - Intermediate Puzzles
// Auto-generated from puzzles.js split
// Total: 133 puzzles
// ============================================

// ============================================
// MindSpark - Puzzle Database
// Copyright (c) 2026 Enso Studio. All Rights Reserved.
// Unauthorized copying or distribution is prohibited.
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

const INTERMEDIATE_PUZZLES = [
  {
    id: 'odd_intermediate_1',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Which city does NOT belong?',
    content: 'Paris, London, Berlin, Germany',
    options: ['Paris', 'London', 'Berlin', 'Germany'],
    correctAnswer: 3,
    explanation: 'Paris, London, and Berlin are cities. Germany is a country.',
    estimatedTime: 30
  },

  {
    id: 'odd_intermediate_3',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Which word is the odd one?',
    content: 'See, Hear, Smell, Think',
    options: ['See', 'Hear', 'Smell', 'Think'],
    correctAnswer: 3,
    explanation: 'See, Hear, and Smell are physical senses. Think is a cognitive process.',
    estimatedTime: 30
  },

  {
    id: 'odd_intermediate_4',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Identify the intruder:',
    content: 'Venus, Mars, Jupiter, Sun',
    options: ['Venus', 'Mars', 'Jupiter', 'Sun'],
    correctAnswer: 3,
    explanation: 'Venus, Mars, and Jupiter are planets. The Sun is a star.',
    estimatedTime: 30
  },

  {
    id: 'odd_intermediate_5',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Select the different concept:',
    content: 'Length, Weight, Time, Kilometer',
    options: ['Length', 'Weight', 'Time', 'Kilometer'],
    correctAnswer: 3,
    explanation: 'Length, Weight, and Time are physical quantities (dimensions). Kilometer is a unit of measurement.',
    estimatedTime: 30
  },

  {
    id: 'odd_intermediate_6',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Which word doesn\'t fit?',
    content: 'Guitar, Violin, Cello, Trumpet',
    options: ['Guitar', 'Violin', 'Cello', 'Trumpet'],
    correctAnswer: 3,
    explanation: 'Guitar, Violin, and Cello are string instruments. Trumpet is a brass instrument.',
    estimatedTime: 30
  },

  {
    id: 'odd_intermediate_7',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Find the odd geometric shape:',
    content: 'Cube, Sphere, Pyramid, Square',
    options: ['Cube', 'Sphere', 'Pyramid', 'Square'],
    correctAnswer: 3,
    explanation: 'Cube, Sphere, and Pyramid are 3D shapes. Square is a 2D shape.',
    estimatedTime: 30
  },

  {
    id: 'odd_intermediate_8',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Which material is different?',
    content: 'Gold, Silver, Iron, Wood',
    options: ['Gold', 'Silver', 'Iron', 'Wood'],
    correctAnswer: 3,
    explanation: 'Gold, Silver, and Iron are metals. Wood is an organic material.',
    estimatedTime: 30
  },

  {
    id: 'odd_intermediate_9',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Identify the odd one:',
    content: 'Shark, Whale, Dolphin, Porpoise',
    options: ['Shark', 'Whale', 'Dolphin', 'Porpoise'],
    correctAnswer: 0,
    explanation: 'Whale, Dolphin, and Porpoise are mammals. Shark is a fish.',
    estimatedTime: 35
  },

  {
    id: 'odd_intermediate_10',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Which does not belong?',
    content: 'Google, Microsoft, Apple, Wikipedia',
    options: ['Google', 'Microsoft', 'Apple', 'Wikipedia'],
    correctAnswer: 3,
    explanation: 'Google, Microsoft, and Apple are for-profit tech corporations. Wikipedia is a non-profit organization.',
    estimatedTime: 30
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

  {
    id: 'odd_intermediate_1_v2',
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
    id: 'odd_intermediate_2_v2',
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
    id: 'odd_intermediate_3_v2',
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
    id: 'odd_intermediate_4_v2',
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
    id: 'odd_intermediate_5_v2',
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
    id: 'odd_intermediate_6_v2',
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
    id: 'odd_intermediate_7_v2',
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
    id: 'odd_intermediate_8_v2',
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
    id: 'odd_intermediate_9_v2',
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
    id: 'odd_intermediate_10_v2',
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

  {
    id: 'pattern_intermediate_21_v2',
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
    id: 'pattern_intermediate_22_v2',
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
    id: 'pattern_intermediate_23_v2',
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
    id: 'pattern_intermediate_24_v2',
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
    id: 'pattern_intermediate_25_v2',
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
    id: 'pattern_intermediate_26_v2',
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
    id: 'pattern_intermediate_27_v2',
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
    id: 'pattern_intermediate_28_v2',
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
    id: 'pattern_intermediate_29_v2',
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
    id: 'pattern_intermediate_30_v2',
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
    id: 'pattern_intermediate_31_v2',
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
    id: 'pattern_intermediate_32_v2',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.INTERMEDIATE,
    question: 'Find the logic:',
    content: '2, 4, 8, 14, 22, ?',
    options: ['30', '32', '34', '36'],
    correctAnswer: 1,
    explanation: 'Differences are +2, +4, +6, +8. Next is +10. 22+10=32.',
    estimatedTime: 60
  },

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
  }
];

// Export for module systems (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = INTERMEDIATE_PUZZLES;
}

// Make globally accessible
if (typeof window !== 'undefined') {
  if (typeof window !== 'undefined') {
    window.INTERMEDIATE_PUZZLES = INTERMEDIATE_PUZZLES;
  }
}
