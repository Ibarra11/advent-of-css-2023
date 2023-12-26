import AvatarWithStatus, { AvatarStatus } from "../Avatar/AvatarWithStatus";
import InviteCard from "../InviteCard/InviteCard";

interface Friend {
  name: string;
  email: string;
  status: AvatarStatus;
  avatarSrc: string;
}

export default function FriendList({ friends }: { friends: Friend[] }) {
  return (
    <div className="grid grid-cols-2 gap-y-8  [&>:nth-child(even)]:justify-self-end">
      {friends.map(({ name, email, status, avatarSrc }) => (
        <InviteCard name={name} email={email} isCloseShowing={true}>
          <AvatarWithStatus status={status} src={avatarSrc} size={"md"} />
        </InviteCard>
      ))}
    </div>
  );
}
