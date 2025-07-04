import Head1 from "./Head1";
import Head2 from "./Head2";
import TableBody from "./TableBody";

export type TableRow = {
  id: number;
  jobRequest: string;
  submitted: string;
  status: string;
  submitter: string;
  url: string;
  assigned: string;
  priority: string;
  dueDate: string;
  estimatedValue: string;
};

const mockData: TableRow[] = [
  {
    id: 1,
    jobRequest: "Launch social media campaign for pro",
    submitted: "15-11-2024",
    status: "In-process",
    submitter: "Aisha Patel",
    url: "www.aishapatel",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    dueDate: "20-11-2024",
    estimatedValue: "6,200,000",
  },
  {
    id: 2,
    jobRequest: "Update press kit for company redesign",
    submitted: "28-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "www.irfankhanp",
    assigned: "Tejas Pandey",
    priority: "High",
    dueDate: "30-10-2024",
    estimatedValue: "3,500,000",
  },
  {
    id: 3,
    jobRequest: "Finalize user testing feedback for app",
    submitted: "05-12-2024",
    status: "In-process",
    submitter: "Mark Johnson",
    url: "www.markjohns",
    assigned: "Rachel Lee",
    priority: "Medium",
    dueDate: "10-12-2024",
    estimatedValue: "4,750,000",
  },
  {
    id: 4,
    jobRequest: "Design new features for the website",
    submitted: "10-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "www.emilygreen",
    assigned: "Tom Wright",
    priority: "Low",
    dueDate: "15-01-2025",
    estimatedValue: "5,900,000",
  },
  {
    id: 5,
    jobRequest: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabro",
    assigned: "Kevin Smith",
    priority: "Low",
    dueDate: "30-01-2025",
    estimatedValue: "2,800,000",
  },
];

const TOTAL_ROWS = 24;

const filledRows = mockData;
const emptyRowCount = TOTAL_ROWS - filledRows.length;

const emptyRows: TableRow[] = Array.from({ length: emptyRowCount }, (_, i) => ({
  id: filledRows.length + i + 1,
  jobRequest: "",
  submitted: "",
  status: "",
  submitter: "",
  url: "",
  assigned: "",
  priority: "",
  dueDate: "",
  estimatedValue: "",
}));

const combinedRows = [...filledRows, ...emptyRows];

const TableGrid = () => {
  return (
    <div className="h-full overflow-y-auto">
      <table className="min-w-full border-separate border-spacing-0">
        <thead>
          <Head1 />
          <Head2 />
        </thead>
        <TableBody mockData={combinedRows} />
      </table>
    </div>
  );
};

export default TableGrid;
