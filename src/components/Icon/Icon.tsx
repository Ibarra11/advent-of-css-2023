export default function Icon({
  id,
  size = 24,
  ...props
}: {
  id: string;
  size: number;
}) {
  return (
    <svg width={size} height={size} {...props}>
      <use href={`#icon-${id}`} />
    </svg>
  );
}
