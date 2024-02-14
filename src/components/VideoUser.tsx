import { User } from "../data/user";
import "./VideoUser.css";

type VideoUserProps = {
  user: User;
};

function VideoUser({ user }: VideoUserProps) {
  return (
    <div className="user-info">
      <img src={user.avatar} alt={user.name} className="avatar" />
      <span className="user-name">@{user.name}</span>
      {/* <button className="btn sub-btn">Subscribe</button> */}
    </div>
  );
}

export default VideoUser;
