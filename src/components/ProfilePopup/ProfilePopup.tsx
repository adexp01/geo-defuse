import classNames from "classnames";
import { useState } from "react";
import Close from "../../assets/close.svg";
import { DropdownArrow } from "../../assets/DropdownArrow";
import Edit from "../../assets/edit.svg";
import Logout from "../../assets/logout.svg";
import Policy from "../../assets/policy.svg";
import UsageAgreement from "../../assets/usageAgreement.svg";
import { useClickOutside } from "../../hooks/useClickOutside";

export const ProfilePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { ref } = useClickOutside(() => {
    setIsOpen(false);
  });

  return (
    <div className="relative" ref={ref}>
      <div className="flex gap-2.5 items-center cursor-pointer">
        <p className="text-[#373737] text-2xl max-lg:text-lg font-normal">
          Вітаю, Андрій
        </p>

        <button className='max-md:hidden' onClick={() => setIsOpen(prev => !prev)}>
          <DropdownArrow />
        </button>
      </div>

      <div
        className={classNames(
          "absolute top-12 right-0 h-[385px] w-[424px] px-[30px] py-10 flex flex-col justify-between bg-[#FFF8EB] rounded-[20px] shadow-lg",
          { hidden: !isOpen }
        )}
      >
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <div className="flex gap-4">
              <p className="text-[#373737] text-2xl font-normal">
                Вітаю, Андрій
              </p>
              <img src={Edit} alt="edit" />
            </div>
            <p className="text-[#373737] text-xl font-normal">ID 2356847</p>
          </div>
          <img
            src={Close}
            alt="close"
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex gap-[15px] items-center">
            <img src={UsageAgreement} alt="usage agreement" />
            <p className="text-[#373737] text-xl font-normal">
              Угода про використання
            </p>
          </div>
          <div className="flex gap-[15px] items-center">
            <img src={Policy} alt="policy" />
            <p className="text-[#373737] text-xl font-normal">
              Політика конфіденційності
            </p>
          </div>
        </div>

        <div className="flex items-center gap-[15px]">
          <img src={Logout} alt="logout" />
          <p className="text-[#c1272d] text-xl font-normal">Вийти</p>
        </div>
      </div>
    </div>
  );
};
