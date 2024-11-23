import classNames from "classnames";
import { FC, HTMLProps } from "react";

export const Checkbox: FC<HTMLProps<HTMLInputElement>> = ({
  className = "",
  ...props
}) => {
  return (
    <input
      {...props}
      type="checkbox"
      defaultChecked
      className={classNames(
        "checkbox bg-[#F8DFC1] [--chkbg:#F8DFC1]",
        className
      )}
    />
  );
};
