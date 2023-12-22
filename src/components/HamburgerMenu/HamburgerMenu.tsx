export default function HamburgerMenu({
  toggleMenu,
  isOpen,
}: {
  toggleMenu: () => void;
  isOpen: boolean;
}) {
  return (
    <button
      className="h-[58px] w-[68px] flex flex-col items-center justify-center bg-supernova "
      onClick={toggleMenu}
    >
      <div
        className={`bg-black h-[3px] w-12 absolute  transition-transform ${
          isOpen ? "translate-y-0 rotate-45" : "-translate-y-3"
        }`}
      ></div>
      <div
        className={`bg-black h-[3px] w-12 transition-opacity ${
          isOpen ? "opacity-0" : ""
        }`}
      ></div>
      <div
        className={`bg-black h-[3px] w-12 absolute  transition-transform ${
          isOpen ? "translate-y-0 -rotate-45" : " translate-y-3"
        }`}
      ></div>
    </button>
  );
}
