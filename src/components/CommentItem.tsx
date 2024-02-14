import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Comment } from "../data/comment";
import { User } from "../data/user";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import "./CommentItem.css";
import { dateToLabel } from "../utilities/dateTime";
import TextExpander from "./TextExpander";

export type CommentItemProps = {
  user: User | null;
} & Comment;

function CommentItem({ dateCreated, content, user }: CommentItemProps) {
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
            <button className="btn like-btn">
              <FontAwesomeIcon icon={faThumbsUp} />
            </button>
            <span className="likes">15</span>
          </div>
          <button className="btn dislike-btn">
            <FontAwesomeIcon icon={faThumbsDown} />
          </button>
          <button className="btn trans-btn">Reply</button>
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
