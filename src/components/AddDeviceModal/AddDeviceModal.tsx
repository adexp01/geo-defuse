import { FC } from "react";
import { Modal } from "../ui/Modal";
import { TextInput } from "../ui/TextInput";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const AddDeviceModal: FC<Props> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col gap-5">
        <TextInput label="Name" placeholder="Enter name" />
        <TextInput label="Name" placeholder="Enter name" />
        <TextInput label="IP 1" placeholder="Password" />
        <TextInput label="IP 2" placeholder="Password" />

        <div className="h-[55px] p-2.5 bg-[#f8dfc1] rounded-[10px] justify-center items-center gap-2.5 inline-flex">
          <p className="text-center text-[#373737] text-2xl max-lg:text-xl font-normal">
            Add Device
          </p>
        </div>
      </div>
    </Modal>
  );
};
