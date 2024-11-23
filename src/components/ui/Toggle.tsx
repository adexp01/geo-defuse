import classNames from "classnames";
import { FC } from "react";

interface Props {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

export const Toggle: FC<Props> = ({ checked, onChange, className }) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={e => onChange(e.target.checked)}
      className={classNames(
        "toggle text-[#F8DFC1] border-white border-[0px] bg-[#F8DFC1] [--tglbg:white] hover:bg-current checked:bg-white checked:[--tglbg:#C8A67D] checked:text-white",
        className
      )}
    />
  );
};
