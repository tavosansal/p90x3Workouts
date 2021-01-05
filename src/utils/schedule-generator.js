import workoutList from '../data/workouts';

const allWorkouts = workoutList;

const classicList = [
  {
    times: 3,
    workouts: [
      'totalSynergistics',
      'agilityX',
      'x3Yoga',
      'theChallenge',
      'cvx',
      'theWarrior',
      'restOrDynamix',
    ],
  },
  {
    times: 1,
    workouts: [
      'isometrix',
      'dynamix',
      'accelerator',
      'pilatesX',
      'cvx',
      'x3Yoga',
      'restOrDynamix',
    ]
  },
  {
    times: 3,
    workouts: [
      'eccentricUpper',
      'triometrics',
      'x3Yoga',
      'eccentricLower',
      'incinerator',
      'mmx',
      'restOrDynamix',
    ],
  },
  {
    times: 1,
    workouts: [
      'isometrix',
      'dynamix',
      'accelerator',
      'pilatesX',
      'cvx',
      'x3Yoga',
      'restOrDynamix',
    ],
  },
  {
    times: 2,
    workouts: [
      'decelerator',
      'agilityX',
      'theChallengeOrComplexUpper', // todo
      'x3Yoga',
      'triometrics',
      'totalSynergisticsOrComplexLower', //todo
      'restOrDynamix',
      'decelerator',
      'mmx',
      'eccentricUpper',
      'triometrics',
      'pilatesX',
      'eccentricLower',
      'restOrDynamix',
    ],
  },
  {
    times: 1,
    workouts: [
      'isometrix',
      'accelerator',
      'pilatesX',
      'x3Yoga',
      'dynamix',
      'restOrDynamix',
      'finalFitTest',
    ],
  },
];

function generateSchedule(type, selectedDate) {
  const newCalendar = {
    allDays: [],
  };
  let currentDate = new Date(selectedDate);
  let currentDay = 1;

  const addWorkouts = (workouts) => {
    workouts.forEach((workoutId) => {
      const workout = allWorkouts.find((workout) => workout.id === workoutId);
      newCalendar.allDays.push({
        date: currentDate.toLocaleDateString(),
        workout,
        day: currentDay,
      });

      const newDate = new Date(currentDate.getTime());
      newDate.setDate(currentDate.getDate() + 1);

      currentDate = newDate;
      currentDay++;
    });
  };

  const createBlock = (block) => {
    const { times, workouts } = block;

    for (let index = 0; index < times; index++) {
      addWorkouts(workouts);
    }
  }

  if (type === 'Classic') {
    classicList.forEach(createBlock);
    localStorage.setItem('calendar', JSON.stringify(newCalendar));
  }


}

export default generateSchedule;