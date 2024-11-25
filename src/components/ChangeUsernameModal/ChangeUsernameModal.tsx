import { FC } from "react";
import { Modal } from "../ui/Modal";
import { TextInput } from "../ui/TextInput";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const ChangeUsernameModal: FC<Props> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <TextInput label="Enter first name" placeholder="Enter first name" />
          <TextInput label="Enter last name" placeholder="Enter last name" />

          <div className="h-[55px] p-2.5 bg-[#f8dfc1] rounded-[10px] justify-center items-center gap-2.5 inline-flex">
            <p className="text-center text-[#373737] text-2xl max-lg:text-xl font-normal">
              Save
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};
