import { FC, ReactNode } from "react";
import Cells from "../../assets/cells.png";
import { Header } from "../Header/Header";

interface Props {
  children: ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <main className="h-screen w-screen">
      <Header />
      <div className="relative z-[1] py-[98px] max-lg:pb-0 h-full">{children}</div>
      <img
        src={Cells}
        alt="cells"
        className="fixed bottom-[-80px] right-[-200px] w-[650px] object-cover max-lg:hidden"
      />
      <div className="fixed bottom-0 left-0 bg-[#C8A67D4D] w-screen h-[98px] max-lg:hidden" />
    </main>
  );
};
