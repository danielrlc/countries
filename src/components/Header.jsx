/* eslint-disable react/prop-types */
import Moon from "./icons/Moon";
import Sun from "./icons/Sun";

export default function Header({ setView, mode, flipMode }) {
  return (
    <header className="flex justify-center dark:bg-darkBlue shadow-md shadow-gray-200 dark:shadow-none relative px-4">
      <div className="w-full lg:max-w-[1284px] flex items-center justify-between h-20">
        <h1 onClick={() => setView('home')} className="cursor-pointer font-extrabold lg:text-2xl">Where in the world?</h1>
        <button onClick={flipMode} className="flex items-center cursor-pointer p-1">
          {mode === "light" ? <Moon /> : <Sun />}
          <span className="font-semibold text-sm lg:text-md ml-2">
            {mode === "light" ? "Dark Mode" : "Light Mode"}
          </span>
        </button>
      </div>
    </header>
  );
}
