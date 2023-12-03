import { cva, type VariantProps } from "class-variance-authority";
import { Avatar } from "./Avatar";
import { AvatarProps } from "./Avatar";
import Icon from "../Icon/Icon";

const avatarWithStatusVariants = cva(
  ["grid place-content-center rounded-full w-6 h-6"],
  {
    variants: {
      status: {
        invited: "bg-supernova text-blackPearl",
        accepted: "bg-spanishGreen text-white ",
        declined: "bg-fireEngineRed text-white",
      },
    },
  }
);

type AvatarWithStatusVariants = VariantProps<typeof avatarWithStatusVariants>;

type AvatarWithStatusProps = React.PropsWithChildren<
  AvatarWithStatusVariants &
    AvatarProps & { status: "invited" | "declined" | "accepeted" }
>;

const STATUS_ICON_MAP: Record<
  AvatarWithStatusVariants["status"] & string,
  string
> = {
  invited: "question",
  accepted: "check",
  declined: "minus",
};

export default function AvatarWithStatus({
  src,
  size,
  className,
  status,
  ...props
}: AvatarWithStatusProps) {
  const id = STATUS_ICON_MAP[status];
  return (
    <Avatar size={size} src={src} className={className} {...props}>
      <div className="absolute bottom-0 right-0 translate-x-2 p-0.5 w-fit bg-white rounded-full">
        <span className={avatarWithStatusVariants({ status })}>
          <Icon id={id} size={16} />
        </span>
      </div>
    </Avatar>
  );
}
