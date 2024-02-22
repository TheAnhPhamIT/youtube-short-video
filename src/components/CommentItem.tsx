import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Comment } from "../data/comment";
import { User } from "../data/user";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import "./CommentItem.css";
import { dateToLabel } from "../utilities/dateTime";
import TextExpander from "./TextExpander";
import { useState } from "react";
import { randomNum } from "../utilities/number";

export type CommentItemProps = {
  user: User | null;
} & Comment;

enum LikeState {
  Like = "LIKE",
  Dislike = "DISLIKE",
  NoReaction = "NO_REACTiON",
}

function CommentItem({ dateCreated, content, user }: CommentItemProps) {
  //for testing only
  const [likeState, setLikeState] = useState<LikeState>(LikeState.NoReaction);
  const [likedCount, setLikedCount] = useState(randomNum(1, 100));

  const onLikeClick = () => {
    if (likeState === LikeState.Like) {
      setLikeState(LikeState.NoReaction);
      setLikedCount((prev) => prev - 1);
    } else {
      setLikeState(LikeState.Like);
      setLikedCount((prev) => prev + 1);
    }
  };

  const onDislikeClick = () => {
    if (likeState === LikeState.Dislike) {
      setLikeState(LikeState.NoReaction);
    } else {
      if (likeState === LikeState.Like) {
        setLikedCount((prev) => prev - 1);
      }
      setLikeState(LikeState.Dislike);
    }
  };

  return (
    <div className="comment-item">
      <div className="left">
        <img className="avatar" src={user?.avatar} alt={user?.name} />
      </div>
      <div className="right">
        <div className="info-group">
          <span className="user-name">@{user?.name}</span>
          <span className="date-created">{dateToLabel(dateCreated)}</span>
        </div>
        <TextExpander text={content} />
        <div className="comment-reacts">
          <div className="btn-group">
            <button
              className={`btn like-btn ${
                likeState === LikeState.Like ? "active" : null
              }`}
              onClick={onLikeClick}
            >
              <FontAwesomeIcon icon={faThumbsUp} />
            </button>
            <span className="likes">{likedCount}</span>
          </div>
          <button
            className={`btn dislike-btn ${
              likeState === LikeState.Dislike ? "active" : null
            }`}
            onClick={onDislikeClick}
          >
            <FontAwesomeIcon icon={faThumbsDown} />
          </button>
          <button className="btn trans-btn">Reply</button>
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
