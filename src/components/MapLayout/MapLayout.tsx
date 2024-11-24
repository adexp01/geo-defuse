import classNames from "classnames";
import { FC, ReactNode, useState } from "react";
import Explored from "../../assets/map/explored.svg";
import Unconfirmed from "../../assets/map/unconfirmed.svg";
import Unexplored from "../../assets/map/unexplored.svg";
import { MapFilter } from "../Map/components/MapFilter";
import { MapSearch } from "../Map/components/MapSearch";
import { MapMobilePopUp } from "./MapMobilePopUp";
import { MapSidebar } from "./MapSidebar";

export interface MapSettings {
  search: boolean;
  filter: boolean;

  droneRoutes: boolean;
  myRoute: boolean;
  userRoutes: boolean;
  childRoutes: boolean;
}

interface Props {
  children: ReactNode;
}

export const MapLayout: FC<Props> = ({ children }) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const [mapSettings, setMapSettings] = useState<MapSettings>({
    search: false,
    filter: false,

    droneRoutes: false,
    myRoute: false,
    userRoutes: false,
    childRoutes: false
  });

  return (
    <main className="h-screen">
      <MapSidebar
        expanded={sidebarExpanded}
        setExpanded={setSidebarExpanded}
        mapSettings={mapSettings}
        setMapSettings={setMapSettings}
      />
      <MapMobilePopUp
        expanded={sidebarExpanded}
        setExpanded={setSidebarExpanded}
        mapSettings={mapSettings}
        setMapSettings={setMapSettings}
      />

      {mapSettings.search && <MapSearch />}
      {mapSettings.filter && <MapFilter sidebarExpanded={sidebarExpanded} />}

      <div
        className={classNames(
          "pl-[100px] pb-0 max-md:pl-0 max-md:pb-20 h-full relative z-0",
          {
            "pl-[300px] max-md:pb-[280px]": sidebarExpanded
          }
        )}
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
