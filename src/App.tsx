import Footer from "./components/Footer";
import Header from "./components/Header";
import TableGrid from "./components/TableGrid";
import ToolBar from "./components/ToolBar";

const App = () => {
  return (
    <div className="flex flex-col h-screen text-[11px]">
      <Header />
      <ToolBar />
      <div className="flex-1 overflow-hidden">
        <TableGrid />
      </div>
      <Footer />
    </div>
  );
};
export default App;
