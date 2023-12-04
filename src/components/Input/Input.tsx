import React from "react";
import { cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

interface Props extends React.ComponentProps<"input"> {
  label: string;
}

export default function Input({
  label,
  className,
  type = "text",
  ...props
}: Props) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [status, setStatus] = React.useState<"idle" | "active" | "error">(
    "idle"
  );

  React.useEffect(() => {
    if (inputRef.current) {
      function handleFocus() {
        setStatus("active");
      }
      function handleBlur() {
        if (inputRef.current?.value.length === 0) {
          setStatus("idle");
        } else if (inputRef.current?.validity.valid === false) {
          setStatus("active");
        }
      }
      function handleInvalid() {
        setStatus("error");
      }
      inputRef.current.addEventListener("focus", handleFocus);
      inputRef.current.addEventListener("blur", handleBlur);
      inputRef.current.addEventListener("invalid", handleInvalid);
    }
  }, []);

  return (
    <div className="relative">
      <input
        ref={inputRef}
        aria-label={label}
        className={twMerge(
          "peer h-24 w-full px-5 font-sans text-2xl",
          className,
          status === "error" && "bg-fireEngineRed text-white"
        )}
        onChange={() => {
          if (status === "error" && inputRef.current?.validity.valid) {
            setStatus("active");
          }
        }}
        type={type}
        {...props}
      />
      <span
        className={cx(
          "absolute font-bold font-handwriting transition-all pointer-events-none",
          status === "active" && "top-1 left-2 text-base text-spanishGreen",
          status === "idle" && "text-3xl top-1/2 left-5 -translate-y-1/2",
          status === "error" && "top-1 left-2 text-base text-white"
        )}
      >
        {label}
      </span>
    </div>
  );
}
