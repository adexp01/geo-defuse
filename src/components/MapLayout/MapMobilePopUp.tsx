import classNames from "classnames";
import { Dispatch, FC, SetStateAction } from "react";
import Language from "../../assets/languages/uk.png";
import { ChildRoutes } from "../../assets/sidebar/ChildRoute";
import { Drone } from "../../assets/sidebar/Drone";
import { MyRoute } from "../../assets/sidebar/MyRoute";
import Burger from "../../assets/sidebar/options.svg";
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

const optionsConfig: Array<{
  icon: () => JSX.Element;
  settingKey: keyof MapSettings;
}> = [
  { icon: Drone, settingKey: "droneRoutes" },
  { icon: Routes, settingKey: "userRoutes" },
  { icon: MyRoute, settingKey: "myRoute" },
  { icon: ChildRoutes, settingKey: "childRoutes" }
];

const bottomOptionsConfig: Array<{
  icon: string;
  settingKey: keyof MapSettings | null;
}> = [
  { icon: Settings, settingKey: "filter" },
  { icon: Search, settingKey: "search" },
  { icon: Ruler, settingKey: null }
];

export const MapMobilePopUp: FC<Props> = ({
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
        <p className="text-[#373737] text-lg font-normal">Hello, Andriy!</p>
        <img src={Burger} alt="menu" />
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
          {bottomOptionsConfig.map((option, index) => (
            <img
              key={index}
              src={option.icon}
              onClick={() =>
                option.settingKey && handleOptionClick(option.settingKey)
              }
              alt="option"
              className="w-[30px] h-[30px] cursor-pointer"
            />
          ))}
          <img src={Language} alt="language" className="w-[30px] h-[30px]" />
        </div>
        <div className="flex h-20 items-center justify-between px-[30px] py-5 w-full text-[#383838]">
          {optionsConfig.map((option, index) => (
            <div
              key={index}
              className={classNames("cursor-pointer", {
                "text-[#C1272D]":
                  mapSettings[option.settingKey as keyof MapSettings]
              })}
              onClick={() =>
                handleOptionClick(option.settingKey as keyof MapSettings)
              }
            >
              <option.icon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
