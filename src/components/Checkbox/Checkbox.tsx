import React from "react";
import Icon from "../Icon/Icon";
type InputProps = React.ComponentProps<"input">;

export default function Checkbox({
  children,
  ...props
}: React.PropsWithChildren<InputProps>) {
  const id = React.useId();
  const checkBoxId = `checkbox-${id}`;
  return (
    <div className="flex items-center gap-4">
      <div className="grid place-content-center relative size-10 bg-white ">
        <input
          {...props}
          id={checkBoxId}
          className="peer absolute inset-0 opacity-0"
          type="checkbox"
        />
        <Icon
          className="opacity-0 peer-checked:text-spanishGreen peer-checked:opacity-100 transition-all pointer-events-none"
          size={32}
          id="check"
        />
      </div>
      <label
        htmlFor={checkBoxId}
        className="text-3xl font-bold font-handwriting uppercase"
      >
        {children}
      </label>
    </div>
  );
}
