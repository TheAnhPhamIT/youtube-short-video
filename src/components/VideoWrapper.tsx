import { SyntheticEvent, useRef, useState } from "react";
import "./VideoWrapper.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faVolumeHigh,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import { Video } from "../data/video";
import { User } from "../data/user";
import VideoHashtags from "./VideoHashtags";
import VideoUser from "./VideoUser";

type VideoWrapperProps = {
  video: Video;
  user: User;
};

type videoPlayer = {
  muted: boolean;
  playing: boolean;
};

function VideoWrapper({ video, user }: VideoWrapperProps) {
  const [videoPlayerState, setVideoPlayerState] = useState<videoPlayer>({
    muted: true,
    playing: true,
  });
  const videoRef = useRef<HTMLVideoElement>(null);

  const onVideoClick = () => {
    if (!videoRef?.current) return;
    if (videoRef?.current?.paused) {
      videoRef.current.play();
    } else {
      videoRef.current?.pause();
    }
    setVideoPlayerState({
      ...videoPlayerState,
      playing: !videoRef.current.paused,
    });
  };

  const onMuteClick = (e: SyntheticEvent) => {
    e.stopPropagation();
    if (!videoRef?.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setVideoPlayerState({
      ...videoPlayerState,
      muted: videoRef.current.muted,
    });
  };

  return (
    <div className="video-wrapper">
      <video onClick={onVideoClick} autoPlay={true} muted loop ref={videoRef}>
        <source src={video.src} type="video/mp4" />
      </video>
      <div className="overlay" onClick={onVideoClick}>
        <div className="video-top-controls">
          <button className="btn play-btn">
            <FontAwesomeIcon
              icon={videoPlayerState.playing ? faPause : faPlay}
            />
          </button>
          <button className="btn mute-btn" onClick={onMuteClick}>
            <FontAwesomeIcon
              icon={videoPlayerState.muted ? faVolumeMute : faVolumeHigh}
            />
          </button>
        </div>
        <div className="video-bottom-controls">
          <VideoUser user={user} />
          <div className="infos">
            <div className="video-title">{video.title}</div>
            <VideoHashtags hashtags={video.hashtags} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoWrapper;
