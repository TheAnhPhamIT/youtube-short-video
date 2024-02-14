import SideBar from "./SideBar";
import VideoWrapper from "./VideoWrapper";
import "./VideoContainer.css";
import { getVideo } from "../data/video";
import { getUser } from "../data/user";
import { getComments } from "../data/comment";
import CommentContainer from "./CommentContainer";
import { SyntheticEvent, useState } from "react";

const video = getVideo(1);
const user = getUser(video?.ownerId || 1);
const comments = getComments({}).map((comment) => ({
  ...comment,
  user: getUser(comment.userId),
}));

function VideoContainer() {
  const [sideBarActive, setSideBarActive] = useState(false);

  const onCommentClick = (e: SyntheticEvent) => {
    e.stopPropagation();
    setSideBarActive((prev) => !prev);
  };
  return (
    <div className="video-container">
      <div className={`item-wrap video-wrap ${sideBarActive ? "active" : ""}`}>
        <VideoWrapper video={video!} user={user!} />
      </div>
      <div
        className={`item-wrap sidebar-wrap ${sideBarActive ? "active" : ""}`}
      >
        <SideBar active={sideBarActive} onCommentClick={onCommentClick} />
      </div>
      <div
        className={`item-wrap comment-wrap ${sideBarActive ? "active" : ""}`}
      >
        <CommentContainer comments={comments} />
      </div>
    </div>
  );
}

export default VideoContainer;
