import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import Edit from "../../assets/edit.svg";
import Logout from "../../assets/logout.svg";
import { Policy } from "../../assets/Policy";
import { UsageAgreement } from "../../assets/UsageAgreement";

const navigateOptions = [
  { label: "About", link: "/about" },
  { label: "FAQ", link: "/faq" },
  { label: "Contacts", link: "/contacts" },
  { label: "Terms of use agreement", link: "#", Icon: UsageAgreement },
  { label: "Privacy policy", link: "#", Icon: Policy }
];

export const MobileSidebar = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("logedIn");
    navigate("/login");
  };

  const sidebarContent = (
    <div className="bg-[#FFF8EB] fixed top-[98px] z-50 left-0 right-0 bottom-0 px-5 pb-[50px] flex flex-col items-center justify-between">
      <div className="flex flex-col w-full">
        <div className="flex gap-4 w-full justify-between items-center">
          <p className="text-[#373737] text-2xl font-normal">Hello, Andriy!</p>
          <img src={Edit} alt="edit" />
        </div>
        <p className="text-[#373737] text-xl font-normal">ID 2356847</p>
      </div>

      <div className="flex flex-col gap-2 w-full">
        {navigateOptions.map(({ label, link, Icon }, index) => (
          <button
            key={index}
            onClick={() => navigate(link)}
            className="h-[50px] px-2.5 py-[5px] bg-[#c7a67d] rounded-[5px] justify-start items-center gap-[15px] inline-flex"
          >
            <div className="flex gap-4 items-center !text-white">
              {Icon && <Icon />}
              <p className="text-[#fff7eb] text-lg font-normal">{label}</p>
            </div>
          </button>
        ))}
      </div>

      <div>
        <div
          className="flex items-center gap-[15px] w-fit cursor-pointer"
          onClick={handleLogOut}
        >
          <img src={Logout} alt="logout" />
          <p className="text-[#c1272d] text-xl font-normal">Logout</p>
        </div>
      </div>
    </div>
  );

  return createPortal(
    sidebarContent,
    document.getElementById("sidebar-root") ?? document.body
  );
};
