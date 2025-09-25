import { FaCircle } from "react-icons/fa";
const statusColors = {
  Open: "bg-[#b9f8cf] text-[#02A53B]",
  "In- Progress": "bg-[#ffe9b0] text-[#d4a100]",
  Resolved: "bg-[#d7f0ff] text-[#2196f3]",
};

const priorityColors = {
  "High Priority": "text-red-600",
  "Medium Priority": "text-orange-500",
  "Low Priority": "text-green-600",
};

const Tickets = ({ tickets, addToProgress, notify }) => {
  return (
    <section className="px-4 md:px-8 py-6">
      <h2 className="text-xl md:text-3xl font-bold mb-6 pb-2">
        Customer Tickets
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {tickets.map((ticket) => {
          const statusClass =
            statusColors[ticket.status] || "bg-gray-200 text-gray-600";
          const priorityClass =
            priorityColors[ticket.priority] || "text-gray-700";

          return (
            <div
              key={ticket.id}
              onClick={() => {
                addToProgress(ticket);
                notify();
              }}
              className="bg-white shadow-md p-5 flex flex-col justify-between border border-gray-200 rounded-lg hover:shadow-lg transition cursor-pointer">
              {/* Header */}
              <div className="flex items-start justify-between">
                <h3 className="text-base md:text-lg font-bold text-gray-800">
                  {ticket.title}
                </h3>
                <span
                  className={`px-4 py-1 rounded-3xl text-sm font-medium flex items-center gap-2 ${statusClass}`}>
                  <FaCircle /> {ticket.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                {ticket.description}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                <div className="flex flex-wrap gap-3 items-center">
                  <span className="font-semibold text-gray-700">
                    #{ticket.id}
                  </span>
                  <span className={`font-medium ${priorityClass}`}>
                    {ticket.priority}
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 text-gray-700">
                  <span>{ticket.customer}</span>
                  <span>{new Date(ticket.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tickets;
