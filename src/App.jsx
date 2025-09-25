import "./App.css";
import { useEffect, useState } from "react";
import Tickets from "./Components/Tickets";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Progress from "./Components/Progress";
import ResolvedTask from "./Components/ResolvedTask";
import TaskStatus from "./Components/TaskStatus";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const [tickets, setTickets] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  useEffect(() => {
    fetch("/Tickets.json")
      .then((res) => res.json())
      .then((data) => setTickets(data))
      .catch((err) => console.error("Error loading tickets:", err));
  }, []);

  const addToProgress = (ticket) => {
    if (!inProgress.find((t) => t.id === ticket.id)) {
      setInProgress([...inProgress, ticket]);
    }
  };

  const markAsResolved = (ticketId) => {
    const ticket = inProgress.find((t) => t.id === ticketId);
    if (ticket) {
      setInProgress(inProgress.filter((t) => t.id !== ticketId));
      setResolved([...resolved, ticket]);
      setTickets(tickets.filter((t) => t.id !== ticketId));
    }
  };

  // react tostify
  const notify = () => {
    toast.success("In Progress", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const notify2 = () => {
    toast.success("Completed!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-[#F5F5F5]">
        <Progress inProgress={inProgress} resolved={resolved} />
        <div className="md:grid grid-cols-12">
          <div className="col-span-9">
            <Tickets
              notify={notify}
              tickets={tickets}
              addToProgress={addToProgress}
            />
          </div>

          <div className="col-span-3 mt-20 space-y-6">
            <TaskStatus
              notify2={notify2}
              tasks={inProgress}
              markAsResolved={markAsResolved}
            />

            <ResolvedTask tasks={resolved} />
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
