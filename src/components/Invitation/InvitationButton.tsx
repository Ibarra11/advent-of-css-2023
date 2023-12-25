import Icon from "../Icon/Icon";

export default function InvitationButton({
  action,
  children,
}: React.PropsWithChildren<{
  action: "accept" | "decline";
}>) {
  return (
    <button className="relative bg-white text-black max-w-[300px] h-[113px] pl-[72px] pr-8 font-bold font-sans text-3xl leading-none">
      {children}
      <span
        className={`absolute  grid place-content-center border-4 text-white border-white  rounded-full  -top-2 left-0 -translate-x-1/2 size-32  ${
          action === "accept" ? " bg-spanishGreen" : " bg-fireEngineRed"
        }`}
      >
        <Icon id={action === "accept" ? "thumbsUp" : "thumbsDown"} size={72} />
      </span>
    </button>
  );
}
