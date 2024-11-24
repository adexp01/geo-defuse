import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Arrow } from "../../assets/Arrow";
import Favicon from "../../assets/favicon.png";
import BurgerClose from "../../assets/sidebar/closeOptions.svg";
import Burger from "../../assets/sidebar/options.svg";
import { useGlobalStore } from "../../store";
import { ProfilePopup } from "../ProfilePopup/ProfilePopup";
import { MobileSidebar } from "./MobileSidebar";

const tabs = [
  { label: "About", link: "/about" },
  { label: "FAQ", link: "/faq" },
  { label: "Contacts", link: "/contacts" }
];

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { modalOpen, setModalOpen } = useGlobalStore();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleBackClick = () => {
    if (modalOpen) {
      setModalOpen(false);
      setSidebarOpen(false);
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      return;
    }
  };

  return (
    <header className="fixed z-10 top-0 left-0 w-screen h-[98px] flex justify-between items-center bg-[#C8A67D4D] max-md:bg-transparent px-[50px] max-lg:px-[30px] max-md:px-5">
      {modalOpen || location.pathname !== "/" ? (
        <button
          onClick={handleBackClick}
          className="w-[62.54px] h-[34px] p-2.5 bg-[#c7a67d]/30 rounded-[10px] flex-col justify-center items-center gap-2.5 inline-flex text-[#383838] cursor-pointer"
        >
          <Arrow rotate="180" />
        </button>
      ) : (
        <img
          src={Favicon}
          alt="favicon"
          onClick={() => navigate("/")}
          className="w-[75px] rounded-full max-lg:w-[50px] max-lg:h-[50px] cursor-pointer"
        />
      )}
      <div className="flex gap-[50px] max-lg:gap-[30px] max-md:hidden">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => navigate(tab.link)}
            className="text-[#373737] text-2xl max-lg:text-xl font-normal"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="flex gap-4 items-center">
        {!sidebarOpen && <ProfilePopup />}

        <button
          className="hidden max-md:block"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <img src={sidebarOpen ? BurgerClose : Burger} />
        </button>
      </div>

      {sidebarOpen && <MobileSidebar />}
    </header>
  );
};
