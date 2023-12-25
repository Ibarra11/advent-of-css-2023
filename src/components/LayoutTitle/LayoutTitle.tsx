export default function LayoutTitle({ children }: React.PropsWithChildren) {
  return (
    <div className="flex justify-center  items-center gap-4">
      <span className="inline-block h-1 bg-white w-[74px]"></span>
      <p className="text-white font-condensed text-6xl text-center">
        {children}
      </p>
      <span className="inline-block h-1 bg-white w-[74px]"></span>
    </div>
  );
}
