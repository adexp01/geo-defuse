import { FC } from "react";
import Language from "../../assets/languages/ukr.png";
import ChildRoutes from "../../assets/sidebar/childRoute.svg";
import Drone from "../../assets/sidebar/drone.svg";
import MyRoute from "../../assets/sidebar/myRoute.svg";
import Burger from "../../assets/sidebar/options.svg";
import Routes from "../../assets/sidebar/route.svg";

import classNames from "classnames";
import Ruler from "../../assets/sidebar/ruler.svg";
import Search from "../../assets/sidebar/search.svg";
import Settings from "../../assets/sidebar/settings.svg";
import { SidebarArrow } from "../../assets/SidebarArrow";

const options = [Drone, Routes, MyRoute, ChildRoutes];

const bottomOptions = [Settings, Search, Ruler];

interface Props {
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
}

export const MapMobilePopUp: FC<Props> = ({ expanded, setExpanded }) => {
  return (
    <div
      className={classNames(
        "fixed bottom-0 z-[100] left-0 w-screen h-20 bg-[#FFF8EB] max-md:flex hidden flex-col items-center justify-between",
        {
          "h-[280px]": expanded
        }
      )}
    >
      <button
        className="absolute z-[100] top-[-20px] right-0 left-0 w-fit mx-auto bg-[#FFF8EB] rounded-full p-1 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <SidebarArrow rotate={expanded ? 90 : -90} />
      </button>
      <div
        className={classNames(
          "flex items-center justify-between pt-10 px-5 w-full",
          {
            hidden: !expanded
          }
        )}
      >
        <p className="text-[#373737] text-lg font-normal">Вітаю, Андрій</p>
        <img src={Burger} />
      </div>

      <div
        className={classNames("flex flex-col w-full rounded-t-[20px]", {
          "bg-[#C8A67D]/30 shadow-[0px_0px_5px_5px_#00000024]": expanded
        })}
      >
        <div
          className={classNames(
            "flex items-center justify-between px-[30px] py-5 w-full",
            { hidden: !expanded }
          )}
        >
          {bottomOptions.map((option, index) => (
            <img
              key={index}
              src={option}
              alt="option"
              className="w-[30px] h-[30px]"
            />
          ))}
          <img src={Language} alt="language" className="w-[30px] h-[30px]" />
        </div>
        <div className="flex h-20 items-center justify-between px-[30px] py-5 w-full">
          {options.map((option, index) => (
            <img
              key={index}
              src={option}
              alt="option"
              className="w-[30px] h-[30px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
