import classNames from "classnames";
import { FC, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import Close from "../../assets/close.svg";
import { useResponsive } from "../../hooks/useResponsive";
import { useGlobalStore } from "../../store";

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  modalWrapperClassName?: string;
  contentClassName?: string;
}

export const Modal: FC<Props> = ({
  children,
  open,
  onClose,
  modalWrapperClassName,
  contentClassName
}) => {
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
    <div
      className={classNames(
        "fixed top-0 left-0 z-20 w-screen h-screen bg-black/50 flex justify-center items-center p-5 max-md:bg-[#FFF8EB] max-md:top-[98px] max-md:h-[calc(100vh-98px)] max-md:px-0",
        modalWrapperClassName
      )}
    >
      <div
        // ref={ref}
        className={classNames(
          "relative w-[825px] py-[50px] px-[130px] max-md:px-5 bg-[#FFF8EB] rounded-[20px] max-h-[calc(100vh-98px)] overflow-y-auto",
          contentClassName
        )}
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
