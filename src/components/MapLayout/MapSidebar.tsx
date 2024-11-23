import { FC } from "react";
import Favicon from "../../assets/favicon.png";
import Language from "../../assets/languages/ukr.png";
import ChildRoutes from "../../assets/sidebar/childRoute.svg";
import Drone from "../../assets/sidebar/drone.svg";
import MyRoute from "../../assets/sidebar/myRoute.svg";
import Routes from "../../assets/sidebar/route.svg";

import classNames from "classnames";
import Ruler from "../../assets/sidebar/ruler.svg";
import Search from "../../assets/sidebar/search.svg";
import Settings from "../../assets/sidebar/settings.svg";
import { SidebarArrow } from "../../assets/SidebarArrow";

const options = [
  { icon: Drone, label: "Маршрути наземних дронів" },
  { icon: Routes, label: "Маршрути користувачів" },
  { icon: MyRoute, label: "Мій маршрут" },
  { icon: ChildRoutes, label: "Маршрути дітей " }
];

const bottomOptions = [
  { icon: Settings, label: "Фільтр" },
  { icon: Search, label: "Пошук" },
  { icon: Ruler, label: "Маштаб" }
];

interface Props {
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
}

export const MapSidebar: FC<Props> = ({ expanded, setExpanded }) => {
  return (
    <div
      className={classNames(
        "fixed left-0 top-0 w-[100px] z-30 h-screen max-h-screen flex flex-col items-start justify-between px-[30px] pb-[30px] bg-[#FFF8EB] max-md:hidden",
        {
          "w-[300px]": expanded
        }
      )}
    >
      <button
        className="absolute z-30 top-[70px] right-[-20px] bg-[#FFF8EB] rounded-full p-1 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <SidebarArrow rotate={expanded ? 180 : 0} />
      </button>

      <div className='h-[20%]'></div>
      <div className="absolute left-0 right-0">
        <div className="flex items-center justify-center">
          <img src={Favicon} alt="Favicon" className="w-[70px]" />
        </div>

        {expanded && (
          <div className="flex flex-col pl-[25px]">
            <p className="text-[#373737] text-2xl font-normal">Вітаю, Андрій</p>
            <div className="text-[#373737] text-xl font-normal">ID 2356847</div>
          </div>
        )}
      </div>

      <div>
        {expanded && (
          <div className="text-[#7b7b7b] text-xl font-normal mb-5">
            Показати / Приховати:
          </div>
        )}
        <div className="flex flex-col gap-[30px]">
          {options.map((option, index) => (
            <div key={index} className="flex gap-[10px] items-center">
              <img src={option.icon} />
              {expanded && (
                <p className="text-[#373737] text-xl font-normal mt-0.5">
                  {option.label}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-[30px]">
        {bottomOptions.map((option, index) => (
          <div key={index} className="flex gap-2.5 items-center">
            <img src={option.icon} className="h-[32px] w-[32px]" />
            {expanded && (
              <p className="text-[#373737] text-xl font-normal">
                {option.label}
              </p>
            )}
          </div>
        ))}

        <div className="flex gap-2.5 items-center">
          <img src={Language} className="w-[35px]" />
          {expanded && (
            <p className="text-[#373737] text-xl font-normal">Мова</p>
          )}
        </div>
      </div>
    </div>
  );
};
