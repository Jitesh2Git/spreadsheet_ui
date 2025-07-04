import chevronDouble from "../assets/icons/chevron-double.png";
import arrowAutofit from "../assets/icons/arrow-autofit.png";
import arrowSort from "../assets/icons/arrow-sort.png";
import eyeOff from "../assets/icons/eye-off.png";
import filter from "../assets/icons/filter.png";
import arrowDownload from "../assets/icons/arrow-download.png";
import arrowSplit from "../assets/icons/arrow-split.png";
import arrowUpload from "../assets/icons/arrow-upload.png";
import share from "../assets/icons/share.png";

const ToolBar = () => {
  return (
    <div className="flex items-center justify-between py-2 border-b border-[#eeeeee] bg-white">
      {/* Left Section */}
      <div className="flex items-center divide-x divide-[#eeeeee] text-[#121212] pl-6">
        <button
          className="flex items-center gap-2 pr-4 text-[#121212] cursor-pointer"
          onClick={() => console.log("Toolbar toggled")}
        >
          Tool bar
          <img className="size-5" src={chevronDouble} alt="Chevron Double" />
        </button>

        <div className="flex items-center gap-5 pl-4">
          <button
            className="flex items-center gap-2 text-[#121212] cursor-pointer"
            onClick={() => console.log("Hide fields clicked")}
          >
            <img className="size-5" src={eyeOff} alt="Hide Fields" />
            Hide fields
          </button>
          <button
            className="flex items-center gap-2 text-[#121212] cursor-pointer"
            onClick={() => console.log("Sort clicked")}
          >
            <img className="size-5" src={arrowSort} alt="Sort" />
            Sort
          </button>
          <button
            className="flex items-center gap-2 text-[#121212] cursor-pointer"
            onClick={() => console.log("Filter clicked")}
          >
            <img className="size-5" src={filter} alt="Filter" />
            Filter
          </button>
          <button
            className="flex items-center gap-2 text-[#121212] cursor-pointer"
            onClick={() => console.log("Cell view clicked")}
          >
            <img className="size-5" src={arrowAutofit} alt="Cell View" />
            Cell view
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 pr-3">
        <button
          className="flex items-center gap-2 text-[#545454] border border-[#eeeeee] 
          px-3 py-2 rounded-md cursor-pointer"
          onClick={() => console.log("Import clicked")}
        >
          <img className="size-5" src={arrowDownload} alt="Import" />
          Import
        </button>
        <button
          className="flex items-center gap-2 text-[#545454] border border-[#eeeeee] 
          px-3 py-2 rounded-md cursor-pointer"
          onClick={() => console.log("Export clicked")}
        >
          <img className="size-5" src={arrowUpload} alt="Export" />
          Export
        </button>
        <button
          className="flex items-center gap-2 text-[#545454] border border-[#eeeeee] 
          px-3 py-2 rounded-md cursor-pointer"
          onClick={() => console.log("Share clicked")}
        >
          <img className="size-5" src={share} alt="Share" />
          Share
        </button>
        <button
          className="flex items-center gap-2 text-white bg-[#4c6a4f] rounded-md 
          px-8 py-2 cursor-pointer"
          onClick={() => console.log("New Action clicked")}
        >
          <img className="size-5" src={arrowSplit} alt="New Action" />
          New Action
        </button>
      </div>
    </div>
  );
};

export default ToolBar;
