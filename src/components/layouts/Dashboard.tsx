import React from "react";
import Footer from "../Footer/Footer";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { Link } from "react-router-dom";
import LoggedIn from "../LoggedIn/LoggedIn";

export default function Dashboard() {
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
    <>
      <main className="relative  min-h-screen  bg-no-repeat  bg-cover  bg-left bg-silverTree py-12  mb-[340px]">
        <nav
          className={`w-[460px] bg-supernova flex flex-col justify-between absolute top-0 bottom-0 left-0 transition-transform pt-40 px-12 pb-12 ${
            isOpen ? "" : "-translate-x-full"
          }`}
        >
          <ul className=" list-none space-y-8">
            <li>
              <Link
                className="text-black text-7xl font-condensed uppercase"
                to=""
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                className="text-black text-7xl font-condensed uppercase"
                to=""
              >
                Our Group
              </Link>
            </li>
            <li>
              <Link
                className="text-black text-7xl font-condensed uppercase"
                to=""
              >
                My Wish List
              </Link>
            </li>
          </ul>
          <div className="space-y-4">
            <h4 className="font-condensed text-5xl text-spanishGreen">
              Past Events
            </h4>
            <ul>
              <li>
                <h5 className=" font-sans font-bold text-3xl">
                  Bathis Christmas
                </h5>
                <time className=" font-sans text-base">December 12, 2023</time>
              </li>
            </ul>
          </div>
        </nav>
        <div className="relative flex justify-between items-center px-7">
          <HamburgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
          <LoggedIn />
        </div>
      </main>
      <Footer />
    </>
  );
}
