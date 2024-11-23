import classNames from "classnames";
import { FC } from "react";
import { Checkbox } from "../../ui/Checkbox";

const RouteFilters = [{ name: "Людиною" }, { name: "Дроном" }];

const SectionFilters = [
  { name: "розвідано" },
  { name: "непідтверджено" },
  { name: "нерозвідано" }
];

interface Props {
  sidebarExpanded: boolean;
}

export const MapFilter: FC<Props> = ({ sidebarExpanded }) => {
  return (
    <div
      className={classNames(
        "fixed bottom-5 z-[100] left-[120px] max-md:left-5 max-md:bottom-[100px] bg-[#FFF8EB] flex flex-col rounded-[20px] px-7 py-10 max-w-[233px] w-full gap-[30px]",
        {
          "left-[320px] max-md:!bottom-[300px]": sidebarExpanded
        }
      )}
    >
      <div className="flex flex-col gap-4">
        <p className="text-[#373737] text-sm font-normal uppercase">маршрут</p>

        <div className="flex flex-col gap-2.5">
          {RouteFilters.map((filter, index) => (
            <div key={index} className="flex gap-[5px] items-center">
              <Checkbox />
              <p className="text-[#373737] text-xs font-normal capitalize">
                {filter.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-[#373737] text-sm font-normal uppercase">секції</p>

        <div className="flex flex-col gap-2.5">
          {SectionFilters.map((filter, index) => (
            <div key={index} className="flex gap-[5px] items-center">
              <Checkbox />
              <p className="text-[#373737] text-xs font-normal capitalize">
                {filter.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
