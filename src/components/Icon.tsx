export default function Icon({ id, ...props }: { id: string }) {
  return (
    <svg {...props}>
      <use href={`#${"icon-calendar"}`} />
    </svg>
  );
}
