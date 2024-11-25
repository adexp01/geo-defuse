import { useNavigate } from "react-router-dom";
import { TextInput } from "../../components/ui/TextInput";

export const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("logedIn", "true");
    navigate("/");
  };

  return (
    <div className="flex flex-col gap-[30px] max-lg:gap-5 max-w-[430px] w-full">
      <div className="flex flex-col gap-5">
        <TextInput label="Enter login" />
        <TextInput label="Enter password" type="password" />
      </div>
      <button
        onClick={handleLogin}
        className="h-[55px] p-2.5 bg-[#fff7eb] rounded-[10px] justify-center items-center gap-2.5 inline-flex max-lg:h-[45px]"
      >
        <div className="text-center text-[#373737] text-2xl max-lg:text-xl font-normal">
          Login
        </div>
      </button>
    </div>
  );
};
