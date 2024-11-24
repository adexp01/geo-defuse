import { FC } from "react";
import Delete from "../../assets/delete.svg";
import Roflan from "../../assets/roflan.svg";
import { Modal } from "../ui/Modal";
import { TextInput } from "../ui/TextInput";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const AddChildrenModal: FC<Props> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <TextInput label="Enter child name" placeholder="Enter name" />
          <TextInput label="Enter email" placeholder="loginexample@gmai.com" />
          <TextInput
            label="Enter password"
            placeholder="Enter password"
            type="password"
          />
          <div className="h-[55px] p-2.5 bg-[#f8dfc1] rounded-[10px] justify-center items-center gap-2.5 inline-flex">
            <p className="text-center text-[#373737] text-2xl max-lg:text-xl font-normal">
              Add
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col">
          <ChildrenListItem />
          <ChildrenListItem />
          <ChildrenListItem />
          <ChildrenListItem />
          <ChildrenListItem />
          <ChildrenListItem />
          <ChildrenListItem />
          <ChildrenListItem />
          <ChildrenListItem />
          <ChildrenListItem />
          <ChildrenListItem />
          <ChildrenListItem />
        </div>
      </div>
    </Modal>
  );
};

const ChildrenListItem = () => {
  return (
    <div className="py-2.5 border-b-[1px] border-[#C8A67D] flex items-center justify-between w-full">
      <div className="flex gap-5 items-center">
        <img src={Roflan} />
        <p className="text-xl max-lg:text-lg text-[#373737]">Viktoria</p>
      </div>
      <img src={Delete} />
    </div>
  );
};
