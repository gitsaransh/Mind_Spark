// ============================================
// MindSpark - Beginner Puzzles
// Auto-generated from puzzles.js split
// Total: 85 puzzles
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

const BEGINNER_PUZZLES = [
  {
    id: 'odd_beginner_1',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Which word does NOT belong?',
    content: 'Apple, Banana, Carrot, Grape',
    options: ['Apple', 'Banana', 'Carrot', 'Grape'],
    correctAnswer: 2,
    explanation: 'Apple, Banana, and Grape are fruits. Carrot is a vegetable.',
    estimatedTime: 20
  },

  {
    id: 'odd_beginner_2',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Find the odd one out:',
    content: 'Car, Bus, Train, Boat',
    options: ['Car', 'Bus', 'Train', 'Boat'],
    correctAnswer: 3,
    explanation: 'Car, Bus, and Train travel on land/rails. Boat travels on water.',
    estimatedTime: 20
  },

  {
    id: 'odd_beginner_3',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Which word is different?',
    content: 'Circle, Square, Triangle, Red',
    options: ['Circle', 'Square', 'Triangle', 'Red'],
    correctAnswer: 3,
    explanation: 'Circle, Square, and Triangle are shapes. Red is a color.',
    estimatedTime: 20
  },

  {
    id: 'odd_beginner_4',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Identify the odd item:',
    content: 'Dog, Cat, Cow, Shark',
    options: ['Dog', 'Cat', 'Cow', 'Shark'],
    correctAnswer: 3,
    explanation: 'Dog, Cat, and Cow are land mammals. Shark is a sea creature (fish).',
    estimatedTime: 20
  },

  {
    id: 'odd_beginner_5',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Select the odd one out:',
    content: 'January, Friday, March, June',
    options: ['January', 'Friday', 'March', 'June'],
    correctAnswer: 1,
    explanation: 'January, March, and June are months. Friday is a day.',
    estimatedTime: 20
  },

  {
    id: 'odd_beginner_6',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Which number is the intruder?',
    content: '2, 4, 6, 9, 10',
    options: ['2', '4', '9', '10'],
    correctAnswer: 2,
    explanation: '2, 4, 6, 10 are even numbers. 9 is an odd number.',
    estimatedTime: 20
  },

  {
    id: 'odd_beginner_7',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Find the different one:',
    content: 'Chair, Table, Bed, Pizza',
    options: ['Chair', 'Table', 'Bed', 'Pizza'],
    correctAnswer: 3,
    explanation: 'Chair, Table, and Bed are furniture. Pizza is food.',
    estimatedTime: 20
  },

  {
    id: 'odd_beginner_8',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Which does NOT fit?',
    content: 'Eyes, Nose, Ears, Shoes',
    options: ['Eyes', 'Nose', 'Ears', 'Shoes'],
    correctAnswer: 3,
    explanation: 'Eyes, Nose, and Ears are body parts. Shoes are clothing.',
    estimatedTime: 20
  },

  {
    id: 'odd_beginner_9',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Identify the outlier:',
    content: 'Football, Tennis, Basketball, Reading',
    options: ['Football', 'Tennis', 'Basketball', 'Reading'],
    correctAnswer: 3,
    explanation: 'Football, Tennis, and Basketball are sports. Reading is a hobby/activity.',
    estimatedTime: 20
  },

  {
    id: 'odd_beginner_10',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Which one is odd?',
    content: 'Winter, Summer, Autumn, Umbrella',
    options: ['Winter', 'Summer', 'Autumn', 'Umbrella'],
    correctAnswer: 3,
    explanation: 'Winter, Summer, and Autumn are seasons. Umbrella is an object.',
    estimatedTime: 20
  },

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

  {
    id: 'odd_beginner_1_v2',
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
    id: 'odd_beginner_2_v2',
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
    id: 'odd_beginner_3_v2',
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
    id: 'odd_beginner_4_v2',
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
    id: 'odd_beginner_5_v2',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Find the different one:',
    content: 'Car, Bus, Train, Book',
    options: ['Car', 'Bus', 'Train', 'Book'],
    correctAnswer: 3,
    explanation: 'Book is not a vehicle. Car, Bus, and Train are all vehicles.',
    estimatedTime: 30
  },

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

  {
    id: 'odd_beginner_6_v2',
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
    id: 'odd_beginner_7_v2',
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
    id: 'odd_beginner_8_v2',
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
    id: 'odd_beginner_9_v2',
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
    id: 'odd_beginner_10_v2',
    type: PUZZLE_TYPES.ODD_ONE_OUT,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Find the intruder:',
    content: 'Car, Bike, Truck, Boat',
    options: ['Car', 'Bike', 'Truck', 'Boat'],
    correctAnswer: 3,
    explanation: 'Boat moves on water. Car, Bike, and Truck move on land.',
    estimatedTime: 30
  },

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

  // LOGIC
  {
    id: 'logic_beginner_1',
    type: PUZZLE_TYPES.LOGIC,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Simple Riddle',
    content: 'What has to be broken before you can use it?',
    options: ['A glass', 'An egg', 'A chair', 'A pencil'],
    correctAnswer: 1,
    explanation: 'An egg must be cracked (broken) to be cooked or used in baking.',
    estimatedTime: 30
  },
  {
    id: 'logic_beginner_2',
    type: PUZZLE_TYPES.LOGIC,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'What am I?',
    content: 'I have keys but no locks. I have a space but no room. You can enter but never go inside.',
    options: ['A house', 'A car', 'A keyboard', 'A map'],
    correctAnswer: 2,
    explanation: 'A computer keyboard has keys, a space bar, and an Enter key.',
    estimatedTime: 30
  },
  {
    id: 'logic_beginner_3',
    type: PUZZLE_TYPES.LOGIC,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Think carefully',
    content: 'What month of the year has 28 days?',
    options: ['February', 'December', 'June', 'All of them'],
    correctAnswer: 3,
    explanation: 'Every month has at least 28 days.',
    estimatedTime: 30
  },
  {
    id: 'logic_beginner_4',
    type: PUZZLE_TYPES.LOGIC,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Riddle Me This',
    content: 'I’m tall when I’m young, and I’m short when I’m old. What am I?',
    options: ['A tree', 'A person', 'A candle', 'A building'],
    correctAnswer: 2,
    explanation: 'A candle burns down and gets shorter as it is used ("ages").',
    estimatedTime: 30
  },
  {
    id: 'logic_beginner_5',
    type: PUZZLE_TYPES.LOGIC,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Object Logic',
    content: 'What is full of holes but still holds water?',
    options: ['A bucket', 'A sponge', 'A net', 'A cup'],
    correctAnswer: 1,
    explanation: 'A sponge is porous (full of holes) but absorbs and holds water.',
    estimatedTime: 30
  },

  // MATH
  {
    id: 'math_beginner_1',
    type: PUZZLE_TYPES.MATH,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Simple Math',
    content: 'What is 5 + 5 + 5 - 5?',
    options: ['15', '20', '10', '5'],
    correctAnswer: 2,
    explanation: '5 + 5 + 5 = 15. Then 15 - 5 = 10.',
    estimatedTime: 30
  },
  {
    id: 'math_beginner_2',
    type: PUZZLE_TYPES.MATH,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Geometry Basics',
    content: 'How many sides does a square have?',
    options: ['3', '4', '5', '6'],
    correctAnswer: 1,
    explanation: 'A square has 4 equal sides.',
    estimatedTime: 30
  },
  {
    id: 'math_beginner_3',
    type: PUZZLE_TYPES.MATH,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Counting Trick',
    content: 'If you have 3 apples and you take away 2, how many do you have?',
    options: ['1', '2', '3', '0'],
    correctAnswer: 1,
    explanation: 'You took 2 apples, so you have 2 apples.',
    estimatedTime: 30
  },
  {
    id: 'math_beginner_4',
    type: PUZZLE_TYPES.MATH,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Number Comparison',
    content: 'Which number is the biggest?',
    options: ['99', '100', '9', '10'],
    correctAnswer: 1,
    explanation: '100 is the largest number in the list.',
    estimatedTime: 30
  },
  {
    id: 'math_beginner_5',
    type: PUZZLE_TYPES.MATH,
    difficulty: DIFFICULTY.BEGINNER,
    question: 'Arithmetic',
    content: 'What is half of 10?',
    options: ['2', '4', '5', '6'],
    correctAnswer: 2,
    explanation: '10 divided by 2 is 5.',
    estimatedTime: 30
  }
];

// Export for module systems (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BEGINNER_PUZZLES;
}

// Make globally accessible
if (typeof window !== 'undefined') {
  window.BEGINNER_PUZZLES = BEGINNER_PUZZLES;
}
