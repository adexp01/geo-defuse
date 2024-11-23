export const MapSearch = () => {
  return (
    <div className="fixed z-[100] top-[20%] left-0 right-0  mx-auto max-w-[550px] w-full px-10 ">
      <div className="bg-[#fff7eb] rounded-[30px] h-[50px] px-5 flex shadow-xl items-center">
        <input
          className="text-[#7b7b7b] text-xs font-normal bg-transparent outline-none w-full"
          placeholder="Введіть назву міста"
        />
      </div>
    </div>
  );
};
