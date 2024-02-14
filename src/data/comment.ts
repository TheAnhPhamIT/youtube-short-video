export type Comment = {
  videoId: number;
  userId: number;
  id: number;
  content: string;
  dateCreated: string;
};

type getCommentsQuery = {
  userId?: number;
  id?: number;
  videoId?: number;
};

const comments: Comment[] = [
  {
    id: 1,
    userId: 1,
    videoId: 1,
    content:
      "your time is limited, so don't waste it living somone else's life",
    dateCreated: "2024/02/03, 15:12:26",
  },
  {
    id: 2,
    userId: 2,
    videoId: 1,
    content:
      "your time is limited, so don't waste it living somone else's life",
    dateCreated: "2024/01/03, 15:12:26",
  },
  {
    id: 3,
    userId: 3,
    videoId: 1,
    content:
      "your time is limited, so don't waste it living somone else's life",
    dateCreated: "2022/02/03, 15:12:26",
  },
  {
    id: 4,
    userId: 4,
    videoId: 1,
    content:
      "your time is limited, so don't waste it living somone else's life. your time is limited, so don't waste it living somone else's life. your time is limited, so don't waste it living somone else's life",
    dateCreated: "2024/02/04, 15:12:26",
  },
  {
    id: 5,
    userId: 5,
    videoId: 1,
    content:
      "your time is limited, so don't waste it living somone else's life",
    dateCreated: "2024/02/04, 12:12:26",
  },
];

export function getComments(query: getCommentsQuery): Comment[] {
  return comments.filter((comment) =>
    Object.keys(query).every(
      (key) =>
        comment[key as keyof Comment] === query[key as keyof getCommentsQuery]
    )
  );
}
