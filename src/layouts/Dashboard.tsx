import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Checkbox from "../components/Checkbox/Checkbox";
import InviteCard from "../components/InviteCard/InviteCard";
import AvatarWithStatus from "../components/Avatar/AvatarWithStatus";

export default function Dashboard() {
  return (
    <div className="relative  min-h-screen bg-dashboard  bg-no-repeat bg-left-top bg-silverTree pt-6 mb-[340px]">
      <Header />
      <main className="flex justify-between border-2 border-red-500 mt-4 pl-3 pr-12">
        <Link to="/">
          <img
            className=" w-80  h-44"
            src="/logo__secret-santa.svg"
            alt="Secret Santa"
          />
        </Link>
        {/* <Checkbox>Send out a remainder before event</Checkbox> */}
        <InviteCard
          name="Alan Ibarra"
          email="alanjibarradev@gmail.com"
          isCloseShowing={true}
        >
          <AvatarWithStatus
            status="invited"
            src="/avatars/avatar-01.png"
            size={"md"}
          />
        </InviteCard>
        {/* <Outlet /> */}
      </main>
      <Footer />
    </div>
  );
}
