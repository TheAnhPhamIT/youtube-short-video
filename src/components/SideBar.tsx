import {
  faComment,
  faEllipsisVertical,
  faShare,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import SideBarItem, { SideBarItemProps } from "./SideBarItem";
import "./SideBar.css";
import { SyntheticEvent } from "react";

const sideBarItems: SideBarItemProps[] = [
  {
    name: "like",
    icon: faThumbsUp,
    label: "92K",
    description: "I like this",
  },
  {
    name: "dislike",
    icon: faThumbsDown,
    label: "dislike",
    description: "I dislkie this",
  },
  {
    name: "comments",
    icon: faComment,
    label: "1.7K",
    description: "Comments",
  },
  {
    name: "share",
    icon: faShare,
    description: "Share",
  },
  {
    name: "more",
    icon: faEllipsisVertical,
  },
];

type SideBarProps = {
  active?: boolean;
  onCommentClick: (e: SyntheticEvent) => void;
};

function SideBar({ active = false, onCommentClick }: SideBarProps) {
  return (
    <div className="side-bar">
      {sideBarItems.map((item) => (
        <SideBarItem
          onClick={item.name === "comments" ? onCommentClick : undefined}
          key={item.name}
          {...item}
          active={active}
        />
      ))}
    </div>
  );
}

export default SideBar;
