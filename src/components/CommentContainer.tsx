import CommentItem, { CommentItemProps } from "./CommentItem";
import "./CommentContainer.css";
import AddCommentBox from "./AddCommentBox";

type CommentContainerProps = {
  comments: CommentItemProps[];
};

function CommentContainer({ comments }: CommentContainerProps) {
  return (
    <div className="comment-container">
      <h3 className="title">
        comments <span className="comments-count">{comments.length}</span>
      </h3>
      <div className="comments">
        {comments.map((comment) => (
          <CommentItem key={comment.id} {...comment} />
        ))}
      </div>
      <div className="add-comment-wrapper">
        <AddCommentBox />
      </div>
    </div>
  );
}

export default CommentContainer;
