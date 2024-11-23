import { FC } from "react";

interface Props {
  rotate?: string;
  width?: string;
  height?: string;
  fill?: string;
}

export const DropdownArrow: FC<Props> = ({
  width = "20",
  height = "12",
  rotate = "0deg",
  fill = "#383838"
}) => {
  return (
    <svg
      fill="none"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ transform: `rotate(${rotate})` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 1.30055C20 1.13074 19.9329 0.956964 19.8025 0.826645C19.5419 0.566008 19.1154 0.566008 18.8548 0.826645L9.93385 9.74756L1.14325 0.956964C0.882614 0.696325 0.456116 0.696325 0.195478 0.956964C-0.0651588 1.2176 -0.0651588 1.6441 0.195478 1.90474L9.45997 11.1732C9.7206 11.4338 10.1471 11.4338 10.4077 11.1732L19.8025 1.77837C19.9368 1.6441 20 1.47431 20 1.30055Z"
        fill={fill}
      />
    </svg>
  );
};
