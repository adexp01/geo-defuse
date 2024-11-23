import { useNavigate } from "react-router-dom";
import Favicon from "../../assets/favicon.png";
import Burger from "../../assets/sidebar/options.svg";
import { ProfilePopup } from "../ProfilePopup/ProfilePopup";

const tabs = [
  { label: "Про проект", link: "/about" },
  { label: "FAQ", link: "/faq" },
  { label: "Контакти", link: "/contacts" }
];

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed z-10 top-0 left-0 w-screen h-[98px] flex justify-between items-center bg-[#C8A67D4D] max-md:bg-transparent px-[50px] max-lg:px-[30px] max-md:px-5">
      <img
        src={Favicon}
        alt="favicon"
        onClick={() => navigate("/")}
        className="w-[75px] rounded-full max-lg:w-[50px] max-lg:h-[50px] cursor-pointer"
      />
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
      <div className='flex gap-4 items-center'>
        <ProfilePopup />
        <button className="hidden max-md:block">
          <img src={Burger} />
        </button>
      </div>
    </header>
  );
};
