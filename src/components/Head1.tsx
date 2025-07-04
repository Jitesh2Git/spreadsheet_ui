import arrowSync from "../assets/icons/arrow-sync.png";
import link from "../assets/icons/link.png";
import arrowSplit from "../assets/icons/arrow-split.png";
import arrowSplitGray from "../assets/icons/arrow-split-gray.png";
import { IconDots, IconPlus } from "@tabler/icons-react";

const Head1 = () => {
  return (
    <tr>
      <th className="px-4 py-2 border-r border-[#f6f6f6]"></th>

      <th
        colSpan={4}
        className="px-3 py-1.5 border-r border-[#f6f6f6] bg-[#e2e2e2]"
      >
        <div className="flex items-center gap-2 w-fit">
          <div className="flex items-center gap-2 text-[#545454] bg-[#eeeeee] px-1.5 py-1 rounded-md font-normal">
            <img
              className="size-5 rounded-full cursor-pointer"
              src={link}
              alt="Link"
              onClick={() => console.log("Q3 Financial Overview Link clicked")}
            />
            Q3 Financial Overview
          </div>
          <img
            className="size-5 rounded-full cursor-pointer"
            src={arrowSync}
            alt="Arrow Sync"
            onClick={() => console.log("Sync Icon clicked")}
          />
        </div>
      </th>

      <th className="py-2 border-r border-[#f6f6f6]"></th>

      <th className="py-2 border-r border-[#f6f6f6] text-[#4f5450] font-medium bg-[#d3dfd4] w-32">
        <div className="flex items-center justify-center gap-2">
          <img className="size-5" src={arrowSplitGray} alt="ABC" />
          ABC
          <IconDots
            className="text-[#afafaf] cursor-pointer"
            onClick={() => console.log("ABC section menu clicked")}
          />
        </div>
      </th>

      <th
        colSpan={2}
        className="px-4 py-2 border-r border-[#f6f6f6] text-[#545454] font-medium bg-[#dccffc] w-32"
      >
        <div className="flex items-center justify-center gap-2">
          <img className="size-5" src={arrowSplit} alt="Answer a question" />
          Answer a question
          <IconDots
            className="text-[#afafaf] cursor-pointer"
            onClick={() => console.log("Answer a question menu clicked")}
          />
        </div>
      </th>

      <th className="py-2 border-r border-[#f6f6f6] text-[#4f5450] font-medium bg-[#fac2af]">
        <div className="flex items-center justify-center gap-2">
          <img className="size-5" src={arrowSplit} alt="Extract" />
          Extract
          <IconDots
            className="text-[#afafaf] cursor-pointer"
            onClick={() => console.log("Extract menu clicked")}
          />
        </div>
      </th>

      <th className="px-4 py-2 border-x border-dashed border-[#cbcbcb] bg-[#eeeeee] text-[#05071d] w-30">
        <div
          className="flex justify-center cursor-pointer"
          onClick={() => console.log("Add column button clicked")}
        >
          <IconPlus className="stroke-1.5" />
        </div>
      </th>
    </tr>
  );
};

export default Head1;
