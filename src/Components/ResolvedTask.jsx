const ResolvedTask = ({ tasks }) => {
  return (
    <div className=" py-5">
      <h2 className="text-lg font-bold mb-4">Resolved Tickets</h2>

      {tasks && tasks.length === 0 ? (
        <p className="text-gray-500 ">No resolved tickets yet.</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="bg-white px-5 py-2 my-3 rounded shadow">
            <p className="font-medium">{task.title}</p>
            <span className="text-green-600 text-sm">✅ Complete</span>
          </div>
        ))
      )}
    </div>
  );
};

export default ResolvedTask;
