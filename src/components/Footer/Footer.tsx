export default function Footer() {
  return (
    <footer className="fixed -z-10 bottom-0 w-full h-[340px] bg-acadia dark:bg-blackPearl pt-20 pb-12 grid place-content-center gap-14">
      <img
        className="mx-auto"
        src="/logo__secret-santa--small.svg "
        alt="secret santa logo"
      />
      <div className="flex flex-col items-center font-sans text-base font-medium  text-scotchMist space-y-4">
        <h5 className=" ">
          Copyright ©2023.
          <span className=" underline underline-offset-2">
            Ah Ha Creative, LLC.
          </span>{" "}
          All Rights Reserved.
        </h5>
        <ul className="flex items-baseline list-none gap-1 ">
          <li>
            <a className="underline">Terms & Conditions</a>
          </li>
          <span className="w-1 h-1 rounded-full block bg-scotchMist"></span>
          <li>
            <a className="underline">Privacy Policy</a>
          </li>
          <span className="w-1 h-1 rounded-full inline-block bg-scotchMist"></span>
          <li>
            <a className="underline">Disclaimers</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
