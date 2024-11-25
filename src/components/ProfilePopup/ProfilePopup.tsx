import classNames from "classnames";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Close from "../../assets/close.svg";
import { DropdownArrow } from "../../assets/DropdownArrow";
import Edit from "../../assets/edit.svg";
import Logout from "../../assets/logout.svg";
import { Policy } from "../../assets/Policy";
import { UsageAgreement } from "../../assets/UsageAgreement";
import { useClickOutside } from "../../hooks/useClickOutside";
import { ChangeUsernameModal } from "../ChangeUsernameModal/ChangeUsernameModal";

export const ProfilePopup = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const { ref } = useClickOutside(() => {
    setIsPopupOpen(false);
  });

  const handleLogOut = () => {
    localStorage.removeItem("logedIn");
    navigate("/login");
  };

  return (
    <div className="relative" ref={ref}>
      <div className="flex gap-2.5 items-center cursor-pointer">
        <p className="text-[#373737] text-2xl max-lg:text-lg font-normal">
          Hello, Andriy!
        </p>

        <button
          className="max-md:hidden"
          onClick={() => setIsPopupOpen(prev => !prev)}
        >
          <DropdownArrow />
        </button>
      </div>

      <div
        className={classNames(
          "absolute top-12 right-0 h-[385px] w-[424px] px-[30px] py-10 flex flex-col justify-between bg-[#FFF8EB] rounded-[20px] shadow-lg",
          { hidden: !isPopupOpen }
        )}
      >
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <div className="flex gap-4">
              <p className="text-[#373737] text-2xl font-normal">
                Hello, Andriy!
              </p>
              <img src={Edit} alt="edit" onClick={() => setModalOpen(true)} />
            </div>
            <p className="text-[#373737] text-xl font-normal">ID 2356847</p>
          </div>
          <img
            src={Close}
            alt="close"
            className="cursor-pointer"
            onClick={() => setIsPopupOpen(false)}
          />
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex gap-[15px] items-center text-black">
            <UsageAgreement />
            <p className="text-[#373737] text-xl font-normal">
              Terms of use agreement
            </p>
          </div>
          <div className="flex gap-[15px] items-center text-black">
            <Policy />
            <p className="text-[#373737] text-xl font-normal">Privacy policy</p>
          </div>
        </div>

        <div
          className="flex items-center gap-[15px] w-fit cursor-pointer"
          onClick={handleLogOut}
        >
          <img src={Logout} alt="logout" />
          <p className="text-[#c1272d] text-xl font-normal">Logout</p>
        </div>
      </div>
      <ChangeUsernameModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};
