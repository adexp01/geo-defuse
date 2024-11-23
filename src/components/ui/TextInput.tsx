import classNames from "classnames";
import React, { FC } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

//<div className="text-center  font-['Roboto']">loginexample@gmai.com</div>

export const TextInput: FC<Props> = ({ label, className, ...props }) => {
  return (
    <div className="flex flex-col gap-2.5">
      {label && (
        <p className="text-[#373737] text-2xl max-lg:text-xl font-normal">
          {label}
        </p>
      )}
      <input
        className={classNames(
          "h-12 p-2.5 rounded-[10px] border border-[#373737] justify-start items-center inline-flex bg-transparent focus:outline-none text-[#373737] font-normal",
          className
        )}
        {...props}
      />
    </div>
  );
};
