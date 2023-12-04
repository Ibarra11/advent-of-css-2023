import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const avatarVariants = cva(["block, rounded-full"], {
  variants: {
    size: {
      sm: "w-12 h-12",
      md: "w-16 h-16",
    },
  },
});

const avatarContianerVariants = cva(["relative bg-white w-fit rounded-full"], {
  variants: {
    size: {
      sm: "p-0.5",
      md: "p-1",
    },
  },
});

export interface AvatarProps extends VariantProps<typeof avatarVariants> {
  src: string;
  className?: string;
}

export const Avatar: React.FC<React.PropsWithChildren<AvatarProps>> = ({
  src,
  size,
  className,
  children,
}) => {
  return (
    <div className={avatarContianerVariants({ size })}>
      <img src={src} className={twMerge(className, avatarVariants({ size }))} />
      {children}
    </div>
  );
};
