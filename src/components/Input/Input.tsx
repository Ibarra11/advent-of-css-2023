import React from "react";
import { cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import Icon from "../Icon/Icon";

interface Props extends React.ComponentProps<"input"> {
  label: string;
}

export default function Input({
  label,
  className,
  type = "text",
  ...props
}: Props) {
  const id = React.useId();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [status, setStatus] = React.useState<"idle" | "active" | "error">(
    "idle"
  );
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [value, setValue] = React.useState("");

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
        id={id}
        ref={inputRef}
        aria-label={label}
        className={twMerge(
          "peer h-24 w-full px-7 font-sans text-2xl",
          className,
          status === "error" && "bg-fireEngineRed text-white"
        )}
        onChange={(e) => {
          if (status === "error" && inputRef.current?.validity.valid) {
            setStatus("active");
          }
          setValue(e.target.value);
        }}
        type={type !== "password" ? type : isPasswordVisible ? "text" : type}
        {...props}
      />
      <label
        htmlFor={id}
        className={cx(
          "absolute font-bold font-handwriting transition-all pointer-events-none",
          status === "active" && "top-1 left-2 text-base text-spanishGreen",
          status === "idle" && "text-3xl top-1/2 left-7 -translate-y-1/2",
          status === "error" && "top-1 left-2 text-base text-white"
        )}
      >
        {label}
      </label>
      {type === "password" && status !== "idle" && value.length > 0 && (
        <button
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          className="absolute top-1/2 -translate-y-1/2 right-4 text-blackPearl"
          type="button"
        >
          {
            <Icon
              size={32}
              id={isPasswordVisible ? "eyeClosed" : "eyeOpened"}
            />
          }
          <span className="sr-only">
            {isPasswordVisible ? "hide password" : "show password"}
          </span>
        </button>
      )}
    </div>
  );
}
