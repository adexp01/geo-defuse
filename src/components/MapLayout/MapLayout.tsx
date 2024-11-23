import classNames from "classnames";
import { FC, ReactNode, useState } from "react";
import Explored from "../../assets/map/explored.svg";
import Unconfirmed from "../../assets/map/unconfirmed.svg";
import Unexplored from "../../assets/map/unexplored.svg";
import { MapSidebar } from "./MapSidebar";

interface Props {
  children: ReactNode;
}

export const MapLayout: FC<Props> = ({ children }) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  return (
    <main>
      <MapSidebar expanded={sidebarExpanded} setExpanded={setSidebarExpanded} />
      <div
        className={classNames("pl-[100px] max-md:pl-0", {
          "pl-[300px]": sidebarExpanded
        })}
      >
        {children}
      </div>

      <div className="fixed right-[50px] z-30 lg:bottom-[30px] flex p-2.5 gap-3 bg-[#FFF8EB] rounded-[10px] max-lg:right-5 max-lg:top-5 max-lg:flex-col max-lg:gap-0 max-lg:p-1">
        <div className="flex items-center gap-2.5 px-[5px] py-1 max-lg:flex-row-reverse max-lg:p-0.5">
          <img
            src={Explored}
            className="w-[30px] h-[30px] max-lg:w-[15px] max-lg:h-[15px]"
          />
          <p className="text-[#373737] text-xl max-lg:text-base font-normal capitalize">
            Розвідано
          </p>
        </div>
        <div className="flex items-center gap-2.5 px-[5px] py-1 max-lg:flex-row-reverse max-lg:p-0.5">
          <img
            src={Unconfirmed}
            className="w-[30px] h-[30px] max-lg:w-[15px] max-lg:h-[15px]"
          />
          <p className="text-[#373737] text-xl max-lg:text-base font-normal capitalize">
            Непідтверджено
          </p>
        </div>
        <div className="flex items-center gap-2.5 px-[5px] py-1 max-lg:flex-row-reverse max-lg:p-0.5">
          <img
            src={Unexplored}
            className="w-[30px] h-[30px] max-lg:w-[15px] max-lg:h-[15px]"
          />
          <p className="text-[#373737] text-xl max-lg:text-base font-normal capitalize">
            Нерозвідано
          </p>
        </div>
      </div>
    </main>
  );
};
