
import vector from "../../../public/image/vector1.png";

const Progress = () => {
  return (
    <section className="px-4 md:px-10 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative rounded-2xl overflow-hidden min-h-[220px] flex items-center justify-center shadow-lg">
          {/* background pattern */}
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${'/public/image/vector1.png'})` }}
            aria-hidden="true"
          />
          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/90 to-violet-600/90" />
          {/* content */}
          <div className="relative z-10 text-white text-center p-6">
            <h3 className="text-base md:text-lg font-medium tracking-wide">
              In-Progress
            </h3>
            <p className="text-5xl md:text-6xl font-bold mt-2">0</p>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden min-h-[220px] flex items-center justify-center shadow-lg">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${'/public/image/vector1.png'})` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/90 to-teal-600/90" />
          <div className="relative z-10 text-white text-center p-6">
            <h3 className="text-base md:text-lg font-medium tracking-wide">
              Resolved
            </h3>
            <p className="text-5xl md:text-6xl font-bold mt-2">0</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
