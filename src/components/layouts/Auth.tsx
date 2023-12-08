import { Outlet } from "react-router-dom";
import { useMatches } from "react-router-dom";
import Footer from "../Footer/Footer";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
export default function AuthLayout() {
  const matchData = useMatches();
  return (
    <>
      <main className="relative  min-h-screen bg-auth bg-no-repeat bg-cover bg-[center_top] bg-silverTree py-12 dark:bg-nileBlue mb-[340px]">
        <div className="flex justify-center">
          <HamburgerMenu />
        </div>

        {/* <div className="flex flex-col justify-center max-w-xl w-full mx-auto">
          <img
            className="w-[460px] h-[249px] mx-auto"
            alt="secret santa logo"
            src="/logo__secret-santa.svg"
          />
          <div className="flex justify-center  items-center gap-4 mb-9 mt-14">
            <span className="inline-block h-1 bg-white w-[74px]"></span>
            <h1 className="text-white font-condensed text-6xl text-center">
              {matchData.at(-1)?.id}
            </h1>
            <span className="inline-block h-1 bg-white w-[74px]"></span>
          </div>
          <Outlet />
        </div> */}
      </main>
      <Footer />
    </>
  );
}