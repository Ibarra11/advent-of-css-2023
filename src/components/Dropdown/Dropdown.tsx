import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import React from "react";

export default function Dropdown({ handleClose }: { handleClose: () => void }) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      console.log("test");
      if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
        handleClose();
      }
    }

    function handleEscape(e: KeyboardEvent) {
      if (e.code === "Escape") {
        handleClose();
      }
    }
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [handleClose]);
  return (
    <div
      ref={ref}
      className="absolute top-full translate-y-[18px] left-3 right-0 px-4 py-5 bg-white"
    >
      <span className="absolute top-0 left-[48px] rotate-45 -translate-y-2 tranlsate-x-3 block w-6 h-6 bg-white"></span>
      <ul>
        <li className="flex gap-3">
          <Icon className=" text-pastelMagenta" id="user" size={32} />
          <Link className="font-condensed text-3xl" to="">
            My Account
          </Link>
        </li>
        <li className="flex gap-3">
          <Icon className=" text-pastelMagenta" id="calendar" size={32} />
          <Link className="font-condensed text-3xl" to="">
            My Event
          </Link>
        </li>
        <li className="flex gap-3">
          <Icon className=" text-pastelMagenta" id="logout" size={32} />
          <Link className="font-condensed text-3xl" to="">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}
