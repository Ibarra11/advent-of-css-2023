import { Avatar } from "../Avatar/Avatar";
import Icon from "../Icon/Icon";
import Dropdown from "../Dropdown/Dropdown";
import React from "react";

export default function LoggedIn() {
  const [isOpen, setIsOpen] = React.useState(false);
  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div className="relative flex gap-3 items-center ">
      <Icon
        className={`transform transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
        id="chevron"
        size={24}
      />
      <button
        className="flex items-center gap-3"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        <Avatar alt="user avatar" size={"md"} src="/avatars/avatar-05.png" />
        <div>
          <p className=" font-sans text-sm">Logged in as</p>
          <p className=" font-sans text-lg font-bold">Cody Fisher</p>
        </div>
      </button>
      {isOpen && <Dropdown handleClose={handleClose} />}
    </div>
  );
}
