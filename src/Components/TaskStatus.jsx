const TaskStatus = ({ tasks, markAsResolved, notify2 }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Task Status</h2>

      {tasks && tasks.length === 0 ? (
        <h1 className="text-gray-600">Select a ticket to add to Task Status</h1>
      ) : (
        tasks.map((task) => (
          <div className="bg-white px-5 py-2 my-3 rounded shadow" key={task.id}>
            <span className="font-semibold">{task.title}</span>
            <br />
            <button
              className="bg-[#02A53B] text-white mt-3 p-2 rounded-lg font-semibold w-full"
              onClick={() => {
                markAsResolved(task.id);
                notify2();
              }}>
              Complete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskStatus;
