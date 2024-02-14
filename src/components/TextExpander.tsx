import { useState } from "react";
import "./TextExpander.css";

type TextExpanderProps = {
  text: string;
  maxLength?: number;
};

function TextExpander({ text, maxLength = 100 }: TextExpanderProps) {
  const [show, setShow] = useState(false);
  return (
    <div className="text-expander">
      <span className="content">
        {show || text.length <= maxLength
          ? text
          : `${text.slice(0, maxLength)}...`}
      </span>
      {text.length > maxLength ? (
        <button
          className="btn expand-btn"
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? "Show less" : "Read more"}
        </button>
      ) : null}
    </div>
  );
}

export default TextExpander;
