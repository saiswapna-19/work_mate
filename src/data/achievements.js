
export const achievements = [
  {
    id: 1,
    title: "Probation Slayer",
    description: "Completed your work profile",
    icon: "award",
    condition: (user) => user?.profileCompleted === true,
  },
  {
    id: 2,
    title: "Junior Of The Month",
    description: "Completed 5 tasks",
    icon: "medal",
    condition: (user) => (user?.completedTasks || 0) >= 5,
  },
  {
    id: 3,
    title: "Top Performer",
    description: "Completed 10 tasks",
    icon: "trophy",
    condition: (user) => (user?.completedTasks || 0) >= 10,
  },
  {
    id: 4,
    title: "Employee Of The Year",
    description: "Completed 20 tasks",
    icon: "crown",
    condition: (user) => (user?.completedTasks || 0) >= 20,
  },
];
