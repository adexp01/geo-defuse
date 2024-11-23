import { FC, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import Close from "../../assets/close.svg";
import { useGlobalStore } from "../../globalStore";
import { useResponsive } from "../../hooks/useResponsive";

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: FC<Props> = ({ children, open, onClose }) => {
  const { modalOpen, setModalOpen } = useGlobalStore();
  const isMobile = useResponsive("(max-width: 768px)");

  useEffect(() => {
    if (isMobile && open) {
      setModalOpen(open);
    }
  }, [isMobile, open, setModalOpen]);

  useEffect(() => {
    if (!open) {
      setModalOpen(false);
    }
  }, [open, setModalOpen]);

  useEffect(() => {
    if (!modalOpen && open) {
      onClose();
    }
  }, [modalOpen]);

  if (!open) return null;

  return createPortal(
    <div className="fixed top-0 left-0 z-20 w-screen h-screen bg-black/50 flex items-center justify-center p-5 max-md:bg-transparent max-md:top-[98px] max-md:h-[calc(100vh-98px)] max-md:pr-0">
      <div
        // ref={ref}
        className="relative w-[825px] py-[50px] px-[130px] max-md:px-5 bg-[#FFF8EB] rounded-[20px] max-h-[calc(100vh-98px)] overflow-y-auto max-md:pr-10"
      >
        <button className="absolute top-5 right-[30px] max-md:hidden">
          <img src={Close} alt="close" onClick={onClose} />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};
