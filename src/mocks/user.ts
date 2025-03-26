interface User {
  id: number;
  avatar: string;
  userName: string;
}

const users: User[] = [
  {
    id: 1,
    avatar: 'img/avatar-max.jpg',
    userName: 'Max',
  },
  {
    id: 2,
    avatar: 'img/avatar-angelina.jpg',
    userName: 'Angelina',
  },
];

export default users;
