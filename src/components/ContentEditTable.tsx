import "./ContentEditTable.css";

type ContentEditTableProps = {
  onClick: () => void;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
};

function ContentEditTable({
  onClick,
  placeholder,
  onChange,
}: ContentEditTableProps) {
  return (
    <div
      onInput={onChange}
      onClick={onClick}
      className="content-edittable"
      contentEditable={true}
    >
      <span className="placeholder">{placeholder}</span>
    </div>
  );
}

export default ContentEditTable;
