import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Checkbox from "../components/Checkbox/Checkbox";
import InviteCard from "../components/InviteCard/InviteCard";
import AvatarWithStatus from "../components/Avatar/AvatarWithStatus";
import InviteForm from "../components/InviteForm/InviteForm";
import FriendList from "../components/FriendList/FriendList";

export default function Dashboard() {
  return (
    <div className="relative  min-h-screen bg-dashboard  bg-no-repeat bg-left-top bg-silverTree pt-6 mb-[340px]">
      <Header />
      <main className="flex justify-between mt-4 pl-3 pr-12">
        <Link to="/">
          <img
            className=" w-80  h-44"
            src="/logo__secret-santa.svg"
            alt="Secret Santa"
          />
        </Link>
        {/* <Checkbox>Send out a remainder before event</Checkbox> */}
        <div className="flex justify-center flex-1 w-full ">
          <div className="max-w-4xl w-full  space-y-14">
            <InviteForm />
            <FriendList
              friends={new Array(8).fill({
                name: "Alan Ibarra",
                email: "alanjibarradev@gmail.com",
                status: "accepted",
                avatarSrc: "/avatars/avatar-01.png",
              })}
            />
          </div>
        </div>
        {/* <Outlet /> */}
      </main>
      <Footer />
    </div>
  );
}
