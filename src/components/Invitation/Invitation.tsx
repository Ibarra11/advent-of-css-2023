import LayoutTitle from "../LayoutTitle/LayoutTitle";
import InvitationButton from "./InvitationButton";

export default function Invitation({
  event,
  date,
}: {
  event: string;
  date: string;
}) {
  return (
    <div className="mt-20 text-white">
      <LayoutTitle>You're Invited To</LayoutTitle>
      <h1 className="font-condensed text-8xl mb-4 text-center">{event}</h1>
      <time className="font-handwriting font-bold text-3xl text-center block mb-16">
        {date}
      </time>
      <div className="flex justify-between">
        <InvitationButton action="decline">
          Regretfully Decline
        </InvitationButton>
        <InvitationButton action="accept">I'll Be There!</InvitationButton>
      </div>
    </div>
  );
}
