import classNames from "classnames";
import { useState } from "react";
import Cells from "../../assets/cells.png";
import Dia from "../../assets/dia.png";
import Favicon from "../../assets/favicon.png";
import { Toggle } from "../../components/ui/Toggle";
import { LoginForm } from "./LoginForm";

const getClassNamesWithOpacity = (
  className: string,
  agreementAccepted: boolean
) => {
  return classNames(className + " transition-all duration-200", {
    "opacity-10": !agreementAccepted,
    "opacity-100": agreementAccepted
  });
};

export const Login = () => {
  const [agreementAccepted, setAgreementAccepted] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="w-full h-screen flex items-center justify-center px-5">
      <img
        src={Cells}
        alt="cells"
        className="fixed top-[-220px] left-[-150px] w-[650px] object-cover"
      />
      <img
        src={Cells}
        alt="cells"
        className="fixed bottom-[-220px] right-[-150px] w-[650px] object-cover"
      />
      <div className="flex flex-col justify-center items-center gap-2.5 bg-primary rounded-[50px] pt-2.5 pb-[100px] px-[70px] max-lg:px-5 max-lg:py-[40px] relative z-1 max-lg:rounded-[10px] w-full max-w-[670px]">
        <img src={Favicon} alt="geo defuse" className="max-w-[100px]" />

        {formOpen ? (
          <LoginForm />
        ) : (
          <div className="flex flex-col gap-[30px] max-w-[430px] w-full">
            <p className="text-center text-black text-2xl max-lg:text-xl font-normal">
              Please login to proceed
            </p>
            <div className="flex flex-col gap-5 max-w-[530px] w-full">
              <button
                onClick={() => {
                  if (agreementAccepted) {
                    setFormOpen(true);
                  }
                }}
                className="p-2.5 bg-[#fff7eb] rounded-[20px] justify-center items-center gap-2.5 inline-flex h-[80px]"
              >
                <p
                  className={getClassNamesWithOpacity(
                    "text-center text-[#373737] text-2xl max-lg:text-xl font-normal",
                    agreementAccepted
                  )}
                >
                  Login with your credentails
                </p>
              </button>
              <button className="p-2.5 bg-[#fff7eb] rounded-[20px] justify-center items-center gap-2.5 inline-flex h-[80px]">
                <p
                  className={getClassNamesWithOpacity(
                    "text-center text-[#373737] text-2xl max-lg:text-xl font-normal",
                    agreementAccepted
                  )}
                >
                  Log in with GovID
                </p>
              </button>
              <button className="p-2.5 bg-[#fff7eb] flex items-center justify-center rounded-[20px] h-[80px]">
                <div
                  className={getClassNamesWithOpacity(
                    "inline-flex justify-center items-center gap-2.5",
                    agreementAccepted
                  )}
                >
                  <img src={Dia} alt="Дія" className="max-h-[50px]" />
                  <p className="text-center text-[#373737] text-2xl max-lg:text-xl font-normal">
                    Підпис
                  </p>
                </div>
              </button>

              <div
                className="flex gap-2.5 cursor-pointer items-center"
                onClick={() => setAgreementAccepted(prev => !prev)}
              >
                <Toggle checked={agreementAccepted} onChange={() => {}} />
                <div className="">
                  <p className="text-black text-xs font-normal">
                    I have read and agree to the{" "}
                    <span className="text-[#c1272d] text-xs font-normal">
                      public offer
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
