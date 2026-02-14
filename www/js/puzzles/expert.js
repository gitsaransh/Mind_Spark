// ============================================
// MindSpark - Expert Puzzles
// Auto-generated from puzzles.js split
// Total: 109 puzzles
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

const EXPERT_PUZZLES = [
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
    question: 'Which person does NOT belong?',
    content: 'Leonardo da Vinci, Michelangelo, Raphael, Isaac Newton',
    options: ['Leonardo da Vinci', 'Michelangelo', 'Raphael', 'Isaac Newton'],
    correctAnswer: 3,
    explanation: 'Leonardo da Vinci, Michelangelo, and Raphael were Renaissance artists. Isaac Newton was a scientist and mathematician.',
    estimatedTime: 45
  },

  {
    id: 'pattern_expert_21_v2',
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
    id: 'pattern_expert_22_v2',
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
    id: 'pattern_expert_23_v2',
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
    id: 'pattern_expert_24_v2',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'What comes next?',
    content: '10, 11, 12, 13, 14, 15, 16, ?',
    options: ['20', '17', '21', '100'],
    correctAnswer: 1,
    explanation: 'Just counting numbers. Sometimes the simplest answer is right.',
    estimatedTime: 90
  },

  {
    id: 'pattern_expert_25_v2',
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
    id: 'pattern_expert_26_v2',
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
    id: 'pattern_expert_27_v2',
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
    id: 'pattern_expert_28_v2',
    type: PUZZLE_TYPES.PATTERN,
    difficulty: DIFFICULTY.EXPERT,
    question: 'Find the next letters:',
    content: 'J, F, M, A, M, J, ?',
    options: ['J', 'A', 'S', 'O'],
    correctAnswer: 0,
    explanation: 'Months of the year: Jan, Feb, Mar, Apr, May, Jun, (Jul). J comes next.',
    estimatedTime: 90
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
];

// Export for module systems (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = EXPERT_PUZZLES;
}

// Make globally accessible
if (typeof window !== 'undefined') {
  if (typeof window !== 'undefined') {
    window.EXPERT_PUZZLES = EXPERT_PUZZLES;
  }
}
