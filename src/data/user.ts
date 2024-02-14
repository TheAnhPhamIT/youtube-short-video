export type User = {
  id: number;
  name: string;
  avatar: string;
};

const users: User[] = [
  {
    id: 1,
    name: "aespa",
    avatar: "./src/assets/images/avatar_01.jpg",
  },
  {
    id: 2,
    name: "babyboo",
    avatar: "./src/assets/images/avatar_02.jpg",
  },
  {
    id: 3,
    name: "tom",
    avatar: "./src/assets/images/avatar_03.jpg",
  },
  {
    id: 4,
    name: "david",
    avatar: "./src/assets/images/avatar_04.jpg",
  },
  {
    id: 5,
    name: "kathy",
    avatar: "./src/assets/images/avatar_05.jpg",
  },
];

export function getUser(id: number): User | null {
  const user = users.find((user) => user.id === id);
  return user || null;
}
