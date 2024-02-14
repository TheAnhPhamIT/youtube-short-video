type VideoHashtagsProps = {
  hashtags: string[];
};

function VideoHashtags({ hashtags }: VideoHashtagsProps) {
  return (
    <ul className="hashtags inline-list">
      {hashtags.map((hashtag) => (
        <li>
          <a>#{hashtag}</a>
        </li>
      ))}
    </ul>
  );
}

export default VideoHashtags;
