import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

export default function FullLayout() {
  return (
    <>
      <main className="relative  min-h-screen bg-auth bg-no-repeat bg-cover bg-[center_top] bg-silverTree py-12 dark:bg-nileBlue mb-[340px]">
        <div className="flex justify-center"></div>
        <div className="flex flex-col justify-center max-w-3xl w-full mx-auto">
          <img
            className="w-[460px] h-[249px] mx-auto"
            alt="secret santa logo"
            src="/logo__secret-santa.svg"
          />
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
