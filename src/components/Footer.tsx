import { useState } from "react";
import { IconPlus } from "@tabler/icons-react";

const tabs = ["All Orders", "Pending", "Reviewed", "Arrived"];

const Footer = () => {
  const [activeTab, setActiveTab] = useState("All Orders");

  return (
    <div className="border-t border-gray-200 pl-10 pt-1 bg-white">
      <div className="flex items-center gap-2">
        {tabs.map((label) => (
          <button
            key={label}
            onClick={() => setActiveTab(label)}
            className={`px-4 py-3 font-medium relative cursor-pointer
              ${
                activeTab === label
                  ? "text-[#3e5741] bg-[#e7f0e8] after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:h-[3px] after:bg-[#4a6a4f]"
                  : "text-gray-500"
              }`}
          >
            {label}
          </button>
        ))}

        <button
          className="cursor-pointer"
          onClick={() => console.log("Create new tab clicked")}
        >
          <IconPlus className="text-[#757575]" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
