import { IconChevronRight, IconDots } from "@tabler/icons-react";
import avatar from "../assets/avatar.png";
import panel from "../assets/icons/panel.png";
import alert from "../assets/icons/alert.svg";
import search from "../assets/icons/search.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-2 border-b border-[#eeeeee]">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <img
          className="size-7 rounded-full cursor-pointer"
          src={panel}
          alt="Panel"
          onClick={() => console.log("Panel clicked")}
        />

        <ol className="flex items-center space-x-1 text-gray-600">
          <li className="flex items-center">
            <span
              className="text-[#afafaf] cursor-pointer"
              onClick={() => console.log("Workspace clicked")}
            >
              Workspace
            </span>
            <IconChevronRight className="mx-1 h-4 w-4 text-[#b4b4b4] stroke-[1.5]" />
          </li>

          <li className="flex items-center">
            <span
              className="text-[#afafaf] cursor-pointer"
              onClick={() => console.log("Folder 2 clicked")}
            >
              Folder 2
            </span>
            <IconChevronRight className="mx-1 h-4 w-4 text-[#b4b4b4] stroke-[1.5]" />
          </li>

          <li
            className="flex items-center font-medium text-[#121212] cursor-pointer"
            aria-current="page"
            onClick={() => console.log("Spreadsheet 3 clicked")}
          >
            Spreadsheet 3
          </li>
        </ol>

        <IconDots
          className="text-[#afafaf] cursor-pointer"
          onClick={() => console.log("Options menu clicked")}
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 pr-2">
        <div className="relative">
          <img
            className="absolute size-5 left-3 top-1/2 -translate-y-1/2 rounded-md"
            src={search}
            alt="Search"
          />
          <input
            type="text"
            placeholder="Search within sheet"
            className="w-full bg-[#f6f6f6] py-3.5 pl-10 rounded-lg placeholder:text-[#757575] 
            focus:outline-none"
            onChange={(e) => console.log("Search:", e.target.value)}
          />
        </div>

        <div className="relative">
          <img
            className="size-7 rounded-full cursor-pointer"
            src={alert}
            alt="Alert"
            onClick={() => console.log("Notifications clicked")}
          />
          <span
            className="absolute -top-1 -right-1 flex h-4 w-4 p-2 items-center justify-center 
            rounded-full bg-[#4a6a4f] text-[10px] text-white border-2 border-white"
          >
            2
          </span>
        </div>

        <div className="flex items-center gap-2">
          <img
            className="size-9 rounded-full cursor-pointer"
            src={avatar}
            alt="Avatar"
            onClick={() => console.log("Profile Avatar clicked")}
          />
          <div className="flex flex-col">
            <span className="text-[#121212]">John Doe</span>
            <span className="text-[#757575]">john.doe...</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
