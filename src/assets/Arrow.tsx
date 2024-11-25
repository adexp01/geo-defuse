import { FC } from "react";

interface ArrowProps {
  rotate?: string;
}

export const Arrow: FC<ArrowProps> = ({ rotate = "0" }) => {
  return (
    <svg
      width="46"
      height="16"
      viewBox="0 0 46 16"
      fill="none"
      style={{ transform: `rotate(${rotate}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.72925 8H44.0595M37.2825 15L44.2705 8L37.2825 1"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
