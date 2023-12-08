import React from "react";
export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <button
      className="relative h-[58px] w-[68px] flex flex-col items-center justify-center bg-supernova "
      onClick={toggleMenu}
    >
      <div
        className={`bg-black h-[3px] w-12 absolute -translate-y-3 transition-transform ${
          isOpen ? "translate-y-0 rotate-45" : ""
        }`}
      ></div>
      <div
        className={`bg-black h-[3px] w-12 transition-opacity ${
          isOpen ? "opacity-0" : ""
        }`}
      ></div>
      <div
        className={`bg-black h-[3px] w-12 absolute translate-y-3 transition-transform ${
          isOpen ? "translate-y-0 -rotate-45" : ""
        }`}
      ></div>
    </button>
  );
}
