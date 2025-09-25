import { FaCheckCircle, FaHourglassHalf, FaRegCircle } from "react-icons/fa";
import { MdPriorityHigh, MdLowPriority } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { AiOutlineCalendar } from "react-icons/ai";

const Tickets = ({ tickets, addToProgress }) => {
  return (
    <section className="px-4 md:px-8 py-6">
      <h2 className="text-xl md:text-3xl font-bold mb-6  pb-2">
        Customer Tickets
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {tickets.map((ticket) => (
          <div
            onClick={() => addToProgress(ticket)}
            key={ticket.id}
            className="bg-white shadow-md p-5 flex flex-col justify-between border border-gray-200 hover:shadow-lg transition">
            {/* Header */}
            <div className="flex items-start justify-between">
              <h3 className="text-base md:text-lg font-bold text-gray-800">
                {ticket.title}
              </h3>
              <p className="bg-[#b9f8cf] px-4 py-1 rounded-3xl text-[#02A53B]">
                {" "}
                {ticket.status}
              </p>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mt-2 line-clamp-3">
              {ticket.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
              <div className="space-x-3 flex flex-wrap gap-3 items-center">
                <span className="font-semibold text-gray-700">
                  #{ticket.id}
                </span>
                {ticket.priority}
              </div>

              <div className="flex fitems-end gap-2 text-gray-700 text-sm">
                <span className="flex items-center gap-1">
                  <BsPerson /> {ticket.customer}
                </span>
                <span className="flex items-center gap-1">
                  <AiOutlineCalendar />
                  {new Date(ticket.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tickets ;
