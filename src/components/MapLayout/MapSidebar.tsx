import classNames from "classnames";
import { Dispatch, FC, SetStateAction } from "react";
import Favicon from "../../assets/favicon.png";
import Language from "../../assets/languages/en.svg";
import { ChildRoutes } from "../../assets/sidebar/ChildRoute";
import { Drone } from "../../assets/sidebar/Drone";
import { MyRoute } from "../../assets/sidebar/MyRoute";
import { Routes } from "../../assets/sidebar/Routes";
import Ruler from "../../assets/sidebar/ruler.svg";
import Search from "../../assets/sidebar/search.svg";
import Settings from "../../assets/sidebar/settings.svg";
import { SidebarArrow } from "../../assets/SidebarArrow";
import { useMapStore } from "../../store/mapStore";
import { MapSettings } from "./MapLayout";

interface Props {
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
  mapSettings: MapSettings;
  setMapSettings: Dispatch<SetStateAction<MapSettings>>;
}

const optionsConfig = [
  { icon: Drone, label: "Drone routes", settingKey: "droneRoutes" },
  { icon: Routes, label: "User routes", settingKey: "userRoutes" },
  { icon: MyRoute, label: "My route", settingKey: "myRoute" },
  { icon: ChildRoutes, label: "My kids routes", settingKey: "childRoutes" }
];

const bottomOptionsConfig = [
  { icon: Settings, label: "Filter", settingKey: "filter" },
  { icon: Search, label: "Search", settingKey: "search" },
  { icon: Ruler, label: "Scale", settingKey: null }
];

export const MapSidebar: FC<Props> = ({
  expanded,
  setExpanded,
  mapSettings,
  setMapSettings
}) => {
  const setShowRoute = useMapStore(state => state.setShowRoute);
  const handleOptionClick = (settingKey: keyof MapSettings) => {
    if (settingKey === null) return;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    setShowRoute(settingKey, !mapSettings[settingKey]);

    setMapSettings(prev => ({
      ...prev,
      [settingKey]: !prev[settingKey]
    }));
  };

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

      <div className="h-[20%]"></div>
      <div className="absolute left-0 right-0">
        <div className="flex items-center justify-center">
          <img src={Favicon} alt="Favicon" className="w-[70px]" />
        </div>

        {expanded && (
          <div className="flex flex-col pl-[25px]">
            <p className="text-[#373737] text-2xl font-normal">Hello, Andriy!</p>
            <div className="text-[#373737] text-xl font-normal">ID 2356847</div>
          </div>
        )}
      </div>

      <div>
        {expanded && (
          <div className="text-[#7b7b7b] text-xl font-normal mb-5">
            Show / Hide:
          </div>
        )}
        <div className="flex flex-col gap-[30px]">
          {optionsConfig.map((option, index) => (
            <div
              key={index}
              onClick={() =>
                handleOptionClick(option.settingKey as keyof MapSettings)
              }
              className={classNames(
                "flex gap-[10px] items-center cursor-pointer text-[#383838]",
                {
                  "text-[#C1272D]":
                    mapSettings[option.settingKey as keyof MapSettings]
                }
              )}
            >
              <option.icon />
              {expanded && (
                <p className="text-xl font-normal mt-0.5">{option.label}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-[30px]">
        {bottomOptionsConfig.map((option, index) => (
          <div
            key={index}
            onClick={() =>
              option.settingKey &&
              handleOptionClick(option.settingKey as keyof MapSettings)
            }
            className="flex gap-2.5 items-center cursor-pointer"
          >
            <img
              src={option.icon}
              className="h-[32px] w-[32px]"
              alt={option.label}
            />
            {expanded && (
              <p className="text-[#373737] text-xl font-normal">
                {option.label}
              </p>
            )}
          </div>
        ))}

        <div className="flex gap-2.5 items-center">
          <img src={Language} className="w-[35px]" alt="Language" />
          {expanded && (
            <p className="text-[#373737] text-xl font-normal">Language</p>
          )}
        </div>
      </div>
    </div>
  );
};
