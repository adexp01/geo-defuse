import { useNavigate } from "react-router-dom";
import { TextInput } from "../../components/ui/TextInput";

export const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("logedIn", "true");
    navigate("/");
  }

  
  return (
    <div className="flex flex-col gap-[30px] max-w-[430px] w-full">
      <div className="flex flex-col gap-5">
        <TextInput label="Введіть логін" />
        <TextInput label="Введіть пароль" />
      </div>
      <button
        onClick={handleLogin}
        className="h-[55px] p-2.5 bg-[#fff7eb] rounded-[10px] justify-center items-center gap-2.5 inline-flex"
      >
        <div className="text-center text-[#373737] text-2xl font-normal">
          Увійти
        </div>
      </button>
    </div>
  );
};
