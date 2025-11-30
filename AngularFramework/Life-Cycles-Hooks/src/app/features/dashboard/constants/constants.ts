interface ImagesInfo {
  id: number;
  src: string;
  alt: string;
}

interface ChildrenSelection {
  name: string;
  image: ImagesInfo;
}

interface ItemSelection {
  id: number;
  title: string;
  children: ChildrenSelection[];
}

export const images: ImagesInfo[] = [
  {
    id: 1,
    src: 'assets/icons/mail-send.png',
    alt: 'mail icon',
  },
  {
    id: 2,
    src: 'assets/icons/notification.png',
    alt: 'notification icon',
  },
  {
    id: 3,
    src: 'assets/icons/user-circle.png',
    alt: 'user icon',
  },
];

export const ItemSelection: ItemSelection[] = [
  {
    id: 1,
    title: 'Menu',
    children: [
      {
        name: 'Dashboard',
        image: {
          id: 1,
          src: 'assets/icons/grid-alt.png',
          alt: 'dashboard icon',
        },
      },
      {
        name: 'Task',
        image: {
          id: 2,
          src: 'assets/icons/task.png',
          alt: 'task icon',
        },
      },
      {
        name: 'Calendar',
        image: {
          id: 3,
          src: 'assets/icons/calendar-alt.png',
          alt: 'calendar icon',
        },
      },
      {
        name: 'Analytics',
        image: {
          id: 3,
          src: 'assets/icons/bar-chart-alt-2.png',
          alt: 'bar icon',
        },
      },
      {
        name: 'Team',
        image: {
          id: 3,
          src: 'assets/icons/group.png',
          alt: 'calendar icon',
        },
      },
    ],
  },
  {
    id: 2,
    title: 'General',
    children: [
      {
        name: 'Settings',
        image: {
          id: 1,
          src: 'assets/icons/brightness.png',
          alt: 'config icon',
        },
      },
      {
        name: 'Settings',
        image: {
          id: 2,
          src: 'assets/icons/user-circle.png',
          alt: 'help icon',
        },
      },
      {
        name: '',
        image: {
          id: 3,
          src: 'assets/icons/log-out.png',
          alt: 'logout icon',
        },
      },
    ],
  },
];
