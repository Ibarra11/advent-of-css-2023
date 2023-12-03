import { Avatar } from "./Avatar";
import { AvatarProps } from "./Avatar";
export default function AvatarWithSantaHat({
  src,
  size,
  className,
  ...props
}: React.PropsWithChildren<AvatarProps>) {
  return (
    <Avatar size={size} src={src} className={className} {...props}>
      <img
        className="absolute top-0 right-0 w-12 h-12 -translate-y-4 translate-x-2"
        src="/santa-hat.png"
      />
    </Avatar>
  );
}
