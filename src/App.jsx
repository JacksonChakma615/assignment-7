import "./App.css";
import { useEffect, useState } from "react";
import Tickets  from "./assets/Components/Tickets";
import Footer from "./assets/Components/Footer";
import Nav from "./assets/Components/Nav";
import Progress from "./assets/Components/Progress";
import ResolvedTask from "./assets/Components/ResolvedTask";
import TaskStatus from "./assets/Components/TaskStatus";

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
    }
  };

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-[#F5F5F5]">
        <Progress inProgress={inProgress} resolved={resolved} />
        <div className="md:grid grid-cols-12">
          <div className="col-span-9">
            <Tickets  tickets={tickets} addToProgress={addToProgress} />
          </div>

          <div className="col-span-3 mt-20 space-y-6">
            <TaskStatus tasks={inProgress} markAsResolved={markAsResolved} />

  
            <ResolvedTask tasks={resolved} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
