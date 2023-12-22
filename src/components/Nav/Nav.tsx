import { Link } from "react-router-dom";

export default function Nav({ isOpen }: { isOpen: boolean }) {
  return (
    <aside
      className={`w-[460px] bg-supernova flex flex-col justify-between fixed top-0 bottom-0 left-0 transition-transform pt-40 px-12 pb-12 ${
        isOpen ? "" : "-translate-x-full"
      }`}
    >
      <nav>
        <ul className=" list-none space-y-8">
          <li>
            <Link
              className="text-black text-7xl font-condensed uppercase  hover:text-orangeRed"
              to=""
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              className="text-black text-7xl font-condensed uppercase  hover:text-orangeRed"
              to=""
            >
              Our Group
            </Link>
          </li>
          <li>
            <Link
              className="text-black text-7xl font-condensed uppercase  hover:text-orangeRed"
              to=""
            >
              My Wish List
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="space-y-4">
        <h4 className="font-condensed text-5xl text-spanishGreen">
          Past Events
        </h4>
        <ul className="list-none space-y-4">
          <li className=" hover:text-orangeRed">
            <h5 className=" font-sans font-bold text-3xl">Bathis Christmas</h5>
            <time className="font-sans text-base">December 12, 2023</time>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
