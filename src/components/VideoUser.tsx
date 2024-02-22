import { SyntheticEvent } from "react";
import { User } from "../data/user";
import "./VideoUser.css";

type VideoUserProps = {
  user: User;
  subscribed?: boolean;
  onSubscribeClick?: (e: SyntheticEvent) => void;
};

function VideoUser({
  user,
  subscribed = false,
  onSubscribeClick,
}: VideoUserProps) {
  return (
    <div className="user-info">
      <img src={user.avatar} alt={user.name} className="avatar" />
      <span className="user-name">@{user.name}</span>
      <button
        className={`btn sub-btn ${subscribed ? null : "active"}`}
        onClick={onSubscribeClick}
      >
        {subscribed ? "Subscribed" : "Subscribe"}
      </button>
    </div>
  );
}

export default VideoUser;
