import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import Close from "../../assets/close.svg";
import { useClickOutside } from "../../hooks/useClickOutside";

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: FC<Props> = ({ children, open, onClose }) => {
  const { ref } = useClickOutside(() => onClose());

  if (!open) return null;

  return createPortal(
    <div className="fixed top-0 left-0 z-20 w-screen h-screen bg-black/50 flex items-center justify-center p-5">
      <div
        ref={ref}
        className="relative w-[825px] py-[50px] px-[130px] max-lg:px-5 bg-[#FFF8EB] rounded-[20px] max-h-[90vh] overflow-y-auto"
      >
        <button className="absolute top-5 right-[30px]">
          <img src={Close} alt="close" onClick={onClose} />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};
