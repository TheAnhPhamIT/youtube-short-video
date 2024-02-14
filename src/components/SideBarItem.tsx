import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SideBarItem.css";
import { SyntheticEvent } from "react";

export type SideBarItemProps = {
  name?: string;
  icon: IconProp;
  label?: string;
  active?: boolean;
  description?: string;
  onClick?: (e: SyntheticEvent) => void;
};

function SideBarItem({
  icon,
  label,
  description,
  active,
  onClick,
}: SideBarItemProps) {
  return (
    <div className={`sidebar-item ${active ? "active" : ""}`}>
      <button onClick={onClick} className="btn icon">
        <FontAwesomeIcon icon={icon} />
      </button>
      <span className="label">{label}</span>
      {description && <div className="description">{description}</div>}
    </div>
  );
}

export default SideBarItem;
