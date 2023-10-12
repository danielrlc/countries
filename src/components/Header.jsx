import Moon from "./icons/Moon";
import Sun from "./icons/Sun";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="flex justify-center dark:bg-darkBlue shadow-md shadow-gray-200 dark:shadow-none relative px-4">
      <div className="w-full lg:max-w-[1210px] flex items-center justify-between h-20">
        <h1 className="font-extrabold xl:text-xl">Where in the world?</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex cursor-pointer"
        >
          {darkMode ? <Sun /> : <Moon />}
          <span className="font-semibold text-xs">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </span>
        </button>
      </div>
    </header>
  );
}
