import vector1 from "/image/vector1.png";

const Progress = ({ inProgress, resolved }) => {
  return (
    <section className="px-4 md:px-10 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* image 1 */}
        <div className="relative rounded-2xl overflow-hidden min-h-[220px] flex items-center justify-center shadow-lg">
          <div className=" inset-0 bg-center bg-cover" aria-hidden="true" />

          <div className="absolute inset-0 bg-gradient-to-tr from-[#632EE3] to-[#9F62F2]" />

          <img className="absolute top-0 bottom-0 left-0" src={vector1} />
          <img
            className="absolute left-72 transform -scale-x-100"
            src={vector1}
          />

          <div className="relative z-10 text-white text-center p-6">
            <h3 className="text-base md:text-lg font-medium tracking-wide">
              In-Progress
            </h3>
            <p className="text-5xl md:text-6xl font-bold mt-2">
              {inProgress.length}
            </p>
          </div>
        </div>

        {/* image 2 */}
        <div className="relative rounded-2xl overflow-hidden min-h-[220px] flex items-center justify-center shadow-lg">
          <div className=" inset-0 bg-center bg-cover" aria-hidden="true" />

          <div className="absolute inset-0 bg-gradient-to-tr from-[#54CF68] to-[#00827A]" />

          <img className="absolute top-0 bottom-0 left-0" src={vector1} />
          <img
            className="absolute left-72 transform -scale-x-100"
            src={vector1}
          />

          <div className="relative z-10 text-white text-center p-6">
            <h3 className="text-base md:text-lg font-medium tracking-wide">
              Resolved
            </h3>
            <p className="text-5xl md:text-6xl font-bold mt-2">
              {resolved.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
