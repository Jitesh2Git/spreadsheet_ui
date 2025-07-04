import { IconCurrencyRupee } from "@tabler/icons-react";
import { useState, useEffect, useRef } from "react";
import type { TableRow } from "./TableGrid";

type TableBodyProps = {
  mockData: TableRow[];
};

const TableBody = ({ mockData }: TableBodyProps) => {
  const [selectedCell, setSelectedCell] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const tableRef = useRef<HTMLTableSectionElement>(null);

  const totalColumns = 11;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedCell) return;

      e.preventDefault();

      const { row, col } = selectedCell;
      let newRow = row;
      let newCol = col;

      switch (e.key) {
        case "ArrowUp":
          newRow = Math.max(0, row - 1);
          break;
        case "ArrowDown":
          newRow = Math.min(mockData.length - 1, row + 1);
          break;
        case "ArrowLeft":
          newCol = Math.max(0, col - 1);
          break;
        case "ArrowRight":
          newCol = Math.min(totalColumns - 1, col + 1);
          break;
        case "Escape":
          setSelectedCell(null);
          return;
        default:
          return;
      }

      setSelectedCell({ row: newRow, col: newCol });
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCell, mockData.length]);

  const handleCellClick = (rowIndex: number, colIndex: number) => {
    setSelectedCell({ row: rowIndex, col: colIndex });
  };

  const getCellClassName = (
    rowIndex: number,
    colIndex: number,
    baseClassName: string
  ) => {
    const isSelected =
      selectedCell?.row === rowIndex && selectedCell?.col === colIndex;
    return `${baseClassName} ${
      isSelected ? "border border-blue-500 bg-blue-50 relative" : ""
    } cursor-pointer hover:bg-gray-50`;
  };

  return (
    <tbody ref={tableRef}>
      {mockData.map((row, rowIndex) => (
        <tr key={row.id} className="border-b border-[#f6f6f6]">
          <td
            className={getCellClassName(
              rowIndex,
              0,
              "px-2 border-r border-b border-[#f6f6f6] text-[#757575] font-normal text-center"
            )}
            onClick={() => handleCellClick(rowIndex, 0)}
          >
            {row.id}
          </td>
          <td
            className={getCellClassName(
              rowIndex,
              1,
              "px-2 border-r border-b border-[#f6f6f6] text-[#121212] font-normal w-[230px]"
            )}
            onClick={() => handleCellClick(rowIndex, 1)}
          >
            {row.jobRequest}
            {row.id === 1 || row.id === 3 ? "..." : ""}
          </td>
          <td
            className={getCellClassName(
              rowIndex,
              2,
              "px-2 border-r border-b border-[#f6f6f6] text-[#121212] text-end font-normal"
            )}
            onClick={() => handleCellClick(rowIndex, 2)}
          >
            {row.submitted}
          </td>
          <td
            className={getCellClassName(
              rowIndex,
              3,
              "px-2 border-r border-b border-[#f6f6f6] text-center font-normal"
            )}
            onClick={() => handleCellClick(rowIndex, 3)}
          >
            {row.status && (
              <span
                className={`px-3 py-1.5 rounded-full font-medium w-fit
                ${
                  row.status === "In-process"
                    ? "bg-[#fff3d6] text-[#85640a]"
                    : row.status === "Need to start"
                    ? "bg-[#e2e8f0] text-[#485469]"
                    : row.status === "Complete"
                    ? "bg-[#d3f2e3] text-[#0d6e3e]"
                    : row.status === "Blocked"
                    ? "bg-[#ffe1de] text-[#c22219]"
                    : "bg-gray-100 text-gray-700"
                }
                `}
              >
                {row.status}
              </span>
            )}
          </td>
          <td
            className={getCellClassName(
              rowIndex,
              4,
              "px-2 border-r border-b border-[#f6f6f6] text-[#121212] font-normal"
            )}
            onClick={() => handleCellClick(rowIndex, 4)}
          >
            {row.submitter}
          </td>
          <td
            className={getCellClassName(
              rowIndex,
              5,
              "border-r border-b border-[#f6f6f6] text-[#121212] text-center font-normal w-32"
            )}
            onClick={() => handleCellClick(rowIndex, 5)}
          >
            {row.url && (
              <p>
                <span className="underline">{row.url}</span>...
              </p>
            )}
          </td>
          <td
            className={getCellClassName(
              rowIndex,
              6,
              "px-2 border-r border-b border-[#f6f6f6] text-[#121212] text-center font-normal"
            )}
            onClick={() => handleCellClick(rowIndex, 6)}
          >
            {row.assigned}
          </td>
          <td
            className={getCellClassName(
              rowIndex,
              7,
              `px-2 border-r border-b border-[#f6f6f6] text-center font-medium w-30
            ${
              row.priority === "High"
                ? "text-[#ef4d44]"
                : row.priority === "Medium"
                ? "text-[#c2920f]"
                : row.priority === "Low"
                ? "text-[#198cff]"
                : "text-[#121212]"
            }
            `
            )}
            onClick={() => handleCellClick(rowIndex, 7)}
          >
            {row.priority}
          </td>
          <td
            className={getCellClassName(
              rowIndex,
              8,
              "px-2 border-r border-b border-[#f6f6f6] text-[#121212] text-end font-normal"
            )}
            onClick={() => handleCellClick(rowIndex, 8)}
          >
            {row.dueDate}
          </td>
          <td
            className={getCellClassName(
              rowIndex,
              9,
              "px-2 border-r border-b border-[#f6f6f6] text-[#121212] font-normal"
            )}
            onClick={() => handleCellClick(rowIndex, 9)}
          >
            {row.estimatedValue && (
              <div className="flex items-center gap-1 justify-end">
                {row.estimatedValue}
                <IconCurrencyRupee className="text-[#afafaf] size-4" />
              </div>
            )}
          </td>
          <td
            className={getCellClassName(
              rowIndex,
              10,
              "px-2 py-4.5 border-x border-dashed border-[#cbcbcb]"
            )}
            onClick={() => handleCellClick(rowIndex, 10)}
          ></td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
