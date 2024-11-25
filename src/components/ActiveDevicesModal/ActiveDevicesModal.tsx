import { FC } from "react";
import Deactivate from "../../assets/block.svg";
import Delete from "../../assets/delete.svg";
import { Modal } from "../ui/Modal";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const ActiveDevicesModal: FC<Props> = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      modalWrapperClassName="max-lg:!justify-start max-lg:!items-start"
      contentClassName="max-lg:min-h-full flex flex-col"
    >
      <div className="h-full flex flex-col justify-between flex-1 gap-7">
        <div className="flex flex-col gap-5">
          <ActiveDeiceItem />
          <ActiveDeiceItem />
          <ActiveDeiceItem />
        </div>

        <button className="h-6 justify-center items-center gap-[15px] flex">
          <img src={Deactivate} alt="Deactivate" className="max-h-[27px]" />
          <p className="text-[#c1272d] text-xl font-normal">
            Deactivate all devices
          </p>
        </button>
      </div>
    </Modal>
  );
};

const ActiveDeiceItem = () => {
  return (
    <div className="bg-[#F8DFC1] rounded-[10px] w-full px-2.5 py-[5px] flex flex-col gap-[5px]">
      <div className="flex items-end justify-between">
        <div className="text-[#373737] text-xl font-normal">Name 1</div>
        <img src={Delete} alt="Delete" className="cursor-pointer" />
      </div>
      <div>
        <div className="text-[#373737] text-xs font-normal">IP293920</div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-[#373737] text-xs font-normal">
          Ivano-Frankivsk, Ukraine
        </div>
        <div className="text-[#373737] text-xs font-normal">30 min ago</div>
      </div>
    </div>
  );
};
