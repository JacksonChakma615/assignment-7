import "./App.css";
import Customer from "./assets/Components/Customer";
import Footer from "./assets/Components/Footer";
import Nav from "./assets/Components/Nav";
import Progress from "./assets/Components/Progress";
import ResolvedTask from "./assets/Components/ResolvedTask";
import TaskStatus from "./assets/Components/TaskStatus";

function App() {
  return (
    <>
      <Nav></Nav>
      <div className="min-h-screen bg-[#F5F5F5]">
        <Progress></Progress>
        <div className="md:grid grid-cols-12">
          <div className="col-span-9"><Customer></Customer></div>
          <div className="col-span-3 mt-20">
            <TaskStatus></TaskStatus>
            <ResolvedTask></ResolvedTask>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
