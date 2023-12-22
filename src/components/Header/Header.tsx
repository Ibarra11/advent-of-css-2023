import React from "react";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Nav from "../Nav/Nav";
import LoggedIn from "../LoggedIn/LoggedIn";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);
  return (
    <header className="px-7 pr-12">
      <Nav isOpen={isOpen} />
      <div className="flex   items-center ">
        <div className="fixed top-7">
          <HamburgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
        </div>

        <div className="flex-1"></div>
        <LoggedIn />
      </div>
    </header>
  );
}
