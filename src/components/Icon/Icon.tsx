export default function Icon({
  id,
  size = 24,
  className,
  ...props
}: {
  id: string;
  size: number;
  className?: string;
}) {
  return (
    <svg width={size} height={size} className={className} {...props}>
      <use href={`#icon-${id}`} />
    </svg>
  );
}
