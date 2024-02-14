import "./CommentInput.css";

type CommentInputProps = {
  onClick: () => void;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
};

function CommentInput({ onClick, onChange, value = "" }: CommentInputProps) {
  return (
    <input
      className="comment-input"
      onClick={onClick}
      type="text"
      placeholder="Add a comment..."
      value={value}
      onChange={onChange}
    />
  );
}

export default CommentInput;
