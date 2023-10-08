import Moon from "./icons/Moon";

export default function Header() {
  return (
    <header className="flex justify-center bg-white shadow-md shadow-gray-200 relative px-4">
      <div className="w-full lg:max-w-[1210px] flex items-center justify-between h-20">
        <h1 className="font-extrabold">Where in the world?</h1>
        <div className="flex">
          <Moon />
          <div className="font-semibold text-xs">Dark Mode</div>
        </div>
      </div>
    </header>
  );
}
