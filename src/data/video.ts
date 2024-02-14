export type Video = {
  id: number;
  src: string;
  hashtags: string[];
  title: string;
  ownerId: number;
};

const videos: Video[] = [
  {
    id: 1,
    src: "./src/assets/videos/youtube_01.mp4",
    hashtags: ["aespa", "snow", "winter"],
    title: "Let's enjoy the winter with me",
    ownerId: 1,
  },
  {
    id: 1,
    src: "./src/assets/videos/youtube_02.mp4",
    hashtags: ["aespa", "snow", "winter"],
    title: "Let's enjoy the winter with me",
    ownerId: 1,
  },
  {
    id: 2,
    src: "./src/assets/videos/youtube_03.mp4",
    hashtags: ["aespa", "snow", "winter"],
    title: "Let's enjoy the winter with me",
    ownerId: 1,
  },
];

export function getAllVideos(): Video[] {
  return videos;
}

export function getVideo(id: number): Video | null {
  const videoFound = videos.find((v) => v.id === id);
  return videoFound || null;
}
