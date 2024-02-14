import { FormEvent, useState } from "react";
import "./AddCommentBox.css";
import CommentInput from "./CommentInput";

function AddCommentBox() {
  const [showBtns, setShowBtns] = useState(false);
  const [disabledConfirm, setDisabledConfirm] = useState(true);
  const [comment, setComment] = useState<string>("");

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    setComment(e.currentTarget.value);
    if (e.currentTarget.value && disabledConfirm) {
      setDisabledConfirm(false);
    } else if (!e.currentTarget.value && !disabledConfirm) {
      setDisabledConfirm(true);
    }
  };
  return (
    <form className="form add-comment">
      <div className="input-group">
        <img
          className="avatar"
          src="./src/assets/images/avatar_01.jpg"
          alt="avatar"
        />
        <CommentInput
          onChange={handleInputChange}
          value={comment}
          onClick={() => setShowBtns(true)}
        />
      </div>
      {showBtns ? (
        <div className="btns">
          <button className="btn cancel-btn" onClick={() => setShowBtns(false)}>
            Cancel
          </button>
          <button
            className="btn comment-btn"
            type="submit"
            onClick={() => setShowBtns(false)}
            disabled={disabledConfirm}
          >
            Comment
          </button>
        </div>
      ) : null}
    </form>
  );
}

export default AddCommentBox;
