import Icon from "../Icon/Icon";
export default function InviteCard({
  name,
  email,
  children,
  isCloseShowing,
}: React.PropsWithChildren<{
  name: string;
  email: string;
  isCloseShowing: boolean;
}>) {
  return (
    <div className="relative bg-white max-w-[400px] w-full h-24 flex items-center pl-[72px] pr-4">
      <div className="text-black">
        <h2 className="font-sans font-bold text-3xl">{name}</h2>
        <p className="font-sans text-base">{email}</p>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2">
        {children}
      </div>

      {isCloseShowing && (
        <button className="absolute right-1 top-1 ml-auto text-bombay">
          <Icon id="close" size={24} />
        </button>
      )}
    </div>
  );
}
