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
    <div className="relative flex items-center gap-3">
      <Icon id="chevron" size={24} />
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        <Avatar size={"md"} src="/avatars/avatar-05.png" />
        <span className="sr-only">User avatar</span>
      </button>
      <div>
        <p className=" font-sans text-sm">Logged in as</p>
        <p className=" font-sans text-lg font-bold">Cody Fisher</p>
      </div>
      {isOpen && <Dropdown handleClose={handleClose} />}
    </div>
  );
}
