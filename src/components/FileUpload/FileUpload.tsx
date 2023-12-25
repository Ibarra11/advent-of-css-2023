type Props = React.ComponentProps<"input">;
import { twMerge } from "tailwind-merge";
import Icon from "../Icon/Icon";
export default function FileUpload({
  className,
  placeholder = "Drag and Drop an Image",
  label,
}: Props & { label: string }) {
  return (
    <div className="relative h-24 flex justify-between items-center px-8 border-dashed border-2 border-white">
      <input
        aria-label={`file upload for ${label}`}
        className={twMerge(
          "block inset-0   cursor-pointer opacity-0 absolute",
          className
        )}
        placeholder={placeholder}
        type="file"
        accept="image/png, image/jpeg"
      />
      <span className="text-white   uppercase font-bold font-handwriting text-3xl pointer-events-none">
        {label}
      </span>
      <span className=" text-2xl text-turquoiseGreen pointer-events-none">
        {placeholder}
      </span>
      <button type="button" className="  text-white">
        <Icon id="upload" size={32} />
      </button>
    </div>
  );
}
