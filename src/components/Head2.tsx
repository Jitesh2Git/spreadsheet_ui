import { IconChevronDown, IconHash } from "@tabler/icons-react";
import briefcase from "../assets/icons/briefcase.png";
import calendar from "../assets/icons/calendar.png";
import chevronCircle from "../assets/icons/chevron-circle.png";
import person from "../assets/icons/person.png";
import emoji from "../assets/icons/emoji.png";
import globe from "../assets/icons/globe.png";

const Head2 = () => {
  return (
    <tr>
      <th className="px-1 py-2 border-r border-[#f6f6f6] bg-[#eeeeee] text-[#bcbcbc]">
        <div className="flex justify-center">
          <IconHash className="stroke-[1.5]" />
        </div>
      </th>

      <th className="p-2 border-r border-[#f6f6f6] bg-[#eeeeee] text-[#757575] font-medium">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              className="size-5 rounded-full"
              src={briefcase}
              alt="Job Request"
            />
            Job Request
          </div>
          <IconChevronDown
            className="text-[#afafaf] size-5 cursor-pointer"
            onClick={() => console.log("Job Request menu clicked")}
          />
        </div>
      </th>

      <th className="p-2 border-r border-[#f6f6f6] bg-[#eeeeee] text-[#757575] font-medium w-36">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              className="size-5 rounded-full"
              src={calendar}
              alt="Submitted"
            />
            Submitted
          </div>
          <IconChevronDown
            className="text-[#afafaf] size-5 cursor-pointer"
            onClick={() => console.log("Submitted menu clicked")}
          />
        </div>
      </th>

      <th className="p-2 border-r border-[#f6f6f6] bg-[#eeeeee] text-[#757575] font-medium w-32">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              className="size-5 rounded-full"
              src={chevronCircle}
              alt="Status"
            />
            Status
          </div>
          <IconChevronDown
            className="text-[#afafaf] size-5 cursor-pointer"
            onClick={() => console.log("Status menu clicked")}
          />
        </div>
      </th>

      <th className="p-2 border-r border-[#f6f6f6] bg-[#eeeeee] text-[#757575] font-medium w-34">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img className="size-5 rounded-full" src={person} alt="Submitter" />
            Submitter
          </div>
          <IconChevronDown
            className="text-[#afafaf] size-5 cursor-pointer"
            onClick={() => console.log("Submitter menu clicked")}
          />
        </div>
      </th>

      <th className="p-2 border-r border-[#f6f6f6] bg-[#eeeeee] text-[#757575] font-medium">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img className="size-5 rounded-full" src={globe} alt="URL" />
            URL
          </div>
          <IconChevronDown
            className="text-[#afafaf] size-5 cursor-pointer"
            onClick={() => console.log("URL menu clicked")}
          />
        </div>
      </th>

      <th className="p-2 border-r border-[#f6f6f6] bg-[#e7f0e8] text-[#757575] font-medium">
        <div className="flex items-center gap-2">
          <img className="size-5 rounded-full" src={emoji} alt="Assigned" />
          Assigned
        </div>
      </th>

      <th className="p-2 border-r border-[#f6f6f6] bg-[#eae3fc] text-[#645d81] text-left font-medium">
        Priority
      </th>

      <th className="p-2 border-r border-[#f6f6f6] bg-[#eae3fc] text-[#645d81] text-left font-medium">
        Due Date
      </th>

      <th className="p-2 border-r border-[#f6f6f6] bg-[#ffe9e0] text-[#8c6c62] text-left font-medium">
        Est. Value
      </th>

      <th className="p-2 text-[#757575] font-normal border-x border-dashed border-[#cbcbcb]"></th>
    </tr>
  );
};

export default Head2;
