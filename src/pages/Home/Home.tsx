import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { ActiveDevices } from "../../assets/ActiveDevices";
import { AddChildren } from "../../assets/AddChildren";
import { Arrow } from "../../assets/Arrow";
import { Devices } from "../../assets/Devices";
import { AddChildrenModal } from "../../components/AddChildrenModal/AddChildrenModal";
import { AddDeviceModal } from "../../components/AddDeviceModal/AddDeviceModal";
import { MainLayout } from "../../components/ui/MainLayout";

const settings = {
  dots: true,
  className: "center",
  centerMode: true,
  infinite: false,
  centerPadding: "0px",
  slidesToShow: 1,
  speed: 500,
  arrows: false
};

export const Home = () => {
  const navigate = useNavigate();
  const [actionModal, setActionModal] = useState<
    "children" | "drone" | "devices" | null
  >(null);

  const onClose = () => {
    setActionModal(null);
  };

  return (
    <MainLayout>
      <div className="flex-1 h-full w-full flex justify-center items-center px-[50px] max-lg:px-0">
        <div className="flex flex-col gap-5 w-full">
          <div className="hidden max-lg:block">
            <div className="slider-container">
              <Slider {...settings}>
                <div className="px-5">
                  <Card
                    onClick={() => setActionModal("children")}
                    label="Add your kids"
                    icon={AddChildren}
                  />
                </div>
                <div className="px-5">
                  <Card
                    onClick={() => setActionModal("drone")}
                    label="Manage your devices"
                    icon={Devices}
                  />
                </div>
                <div className="px-5">
                  <Card
                    onClick={() => setActionModal("devices")}
                    label="Active Devices"
                    icon={ActiveDevices}
                  />
                </div>
              </Slider>
            </div>
          </div>
          <div className="max-lg:px-5 max-lg:pt-3">
            <button
              onClick={() => navigate("/map")}
              className="w-full h-[98px] max-lg:h-[50px] p-2.5 bg-[#c7a67d] rounded-[20px] justify-center items-center gap-2.5 inline-flex text-[#fff7eb] hover:text-[#535353] hover:bg-[#F8DFC1] transition-all duration-200"
            >
              <div className="text-center  text-3xl max-lg:text-xl font-normal">
                Explore the map
              </div>
              <div className="mt-1">
                <Arrow />
              </div>
            </button>
          </div>
          <div className="flex gap-5 max-lg:hidden">
            <Card
              onClick={() => setActionModal("children")}
              label="Add your kids"
              icon={AddChildren}
            />
            <Card
              onClick={() => setActionModal("drone")}
              label="Manage your devices"
              icon={Devices}
            />
            <Card
              onClick={() => setActionModal("devices")}
              label="Active Devices"
              icon={ActiveDevices}
            />
          </div>
        </div>
      </div>

      <AddChildrenModal open={actionModal === "children"} onClose={onClose} />
      <AddDeviceModal open={actionModal === "drone"} onClose={onClose} />
    </MainLayout>
  );
};

interface Props {
  label: string;
  icon: FC<{ fill: string }>;
  onClick?: () => void;
}

const Card: FC<Props> = ({ label, icon: Icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full relative bg-[#f8dfc1] hover:bg-[#C8A67D] rounded-[20px] flex items-center justify-center h-[230px] flex-1 text-[#C8A67D] hover:text-[#FFF8EB] group transition-all duration-300"
    >
      <div className="absolute top-5 left-5 max-w-[80px] object-cover">
        <Icon fill={"currentColor"} />
      </div>
      <p className="text-center text-[#373737] text-2xl max-lg:text-xl font-normal max-w-[60%] group-hover:text-[#FFF8EB] pt-8">
        {label}
      </p>
    </button>
  );
};
