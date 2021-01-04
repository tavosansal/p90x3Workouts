import sortBy from 'lodash/sortBy';

const workoutList = [
  {
    id: 'cvx',
    title: 'CVX',
    description: 'Now resistance is combined with intervals to give you that full-body burn and power-up your core.',
    duration: '35',
    equipment: [
      'Medicine ball and/or dumbbell',
    ],
  },
  {
    id: 'totalSynergistics',
    title: 'Total Synergistics',
    description: 'A full-body workout that triggers fast, powerful changes to your body\'s composition.',
    duration: '30',
    equipment: [
      'Dumbbells or resistance bands.',
      'Chin-up bar or resistance bands.'
    ],
    recommendedEquipment: [
      'Chin-up Max',
    ],
  },
  {
    id: 'agilityX',
    title: 'Agility X',
    description: 'This fusion of aerobic and anaerobic energy improves your precision, flexibility, balance, and strength.',
    duration: '30',
  },
  {
    id: 'triometrics',
    title: 'Triometrics',
    description: 'Increase your speed and power in a fraction of the time with this explosive next-generation plyo workout.',
    duration: '30',
  },
  {
    id: 'x3Yoga',
    title: 'X3 Yoga',
    description: 'A flow-style practice that improves your musculouskeletal flexibility, balance, stamina, and core strength.',
    duration: '30',
    equipment: [
      'Yoga Mat',
    ],
    recommendedEquipment: [
      'Yoga Block',
    ],
  },
  {
    id: 'pilatesX',
    title: 'Pilates X',
    description: 'Power your core, gain muscle elasticity, and stabilize your joints, as Pilates fundamentals meet modern science.',
    duration: '30',
    equipment: [
      'Yoga Mat',
    ],
  },
  {
    id: 'theChallenge',
    title: 'The Challenge',
    description: 'Strengthen your entire upper body by stacking push-ups and pull-ups in ways you\'ve probably never seen.',
    duration: '30',
    equipment: [
      'Chin-up bar or resistance bands.',
    ],
    recommendedEquipment: [
      'Chin-up Max',
      'Powerstands',
    ],
  },
  {
    id: 'incinerator',
    title: 'Incinerator',
    description: 'Bring it \'til there\'s nothing left to bring. A full burnout session that pushes you past your limits.',
    duration: '30',
    equipment: [
      'Dumbbells or resistance bands',
      'Chin-up bar or resistance bands',
    ],
    recommendedEquipment: [
      'Chin-up Max',
      'Powerstands',
    ],
  },
  {
    id: 'mmx',
    title: 'MMX',
    description: 'Burn fat by taxing your strength, endurance, and flexibility with this martial arts-based cardio workout.',
    duration: '30',
  },
  {
    id: 'theWarrior',
    title: 'The Warrior',
    description: 'When you need a one-size-fits-all workout that can be done anytime, anywhere, this is your drill.',
    duration: '30',
    recommendedEquipment: [
      'Powerstands',
    ],
  },
  {
    id: 'isometrix',
    title: 'Isometrix',
    description: 'Isometric contraction combined with instability - this workout gives you an unshakable platform to work from.',
    duration: '30',
    recommendedEquipment: [
      'Yoga Mat',
    ],
  },
  {
    id: 'dynamix',
    title: 'Dynamix',
    description: 'Increase your range of motion, flexibility, and stabilization to help maximize the results you get from every routine.',
    duration: '30',
    recommendedEquipment: [
      'Yoga Mat',
    ],
  },
  {
    id: 'restOrDynamix',
    title: 'Rest or Dynamix',
    description: 'Increase your range of motion, flexibility, and stabilization to help maximize the results you get from every routine.',
    duration: '30',
    recommendedEquipment: [
      'Yoga Mat',
    ],
  },
  {
    id: 'decelerator',
    title: 'Decelerator',
    description: 'Balance your ability to go up strong and come down safe with multi-angle deceleration trainig.',
    duration: '30',
    equipment: [
      'Chin-up bar or resistance bands.',
    ],
    recommendedEquipment: [
      'Chin-up Max',
      'Dumbbell',
    ],
  },
  {
    id: 'accelerator',
    title: 'Accelerator',
    description: 'Increase your cardiovascular and muscular efficiency, resulting in more bang for your fat-burning buck.',
    duration: '30',
  },
  {
    id: 'eccentricUpper',
    title: 'Eccentric Upper',
    description: 'Time under tension is the key to creating lean-muscle growth fast. This upper-body blast will have you begging for mercy.',
    duration: '30',
    equipment: [
      'Dumbbells or resistance bands',
      'Chin-up bar or resistance bands',
    ],
    recommendedEquipment: [
      'Chin-up Max',
      'Powerstands',
    ],
  },
  {
    id: 'eccentricLower',
    title: 'Eccentric Lower',
    description: 'You\'ll be showing down the eccentric (or negative) half of each movement to carve a ripped lower body - faster.',
    duration: '30',
    equipment: [
      'Dumbbells or resistance bands',
    ],
    recommendedEquipment: [
      'Powerstands',
    ],
  }
];

const sortedList = sortBy(workoutList, 'title');

export default sortedList;