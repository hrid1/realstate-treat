import house from "../assets/features/house.png";
import idea from "../assets/features/idea.png";
import monitor from "../assets/features/monitor.png";
import paint from "../assets/features/paint.png";

const FeatureSection = () => {
  return (
    <div className="my:10 md:my-16 mx-2">
      <h2 className="text-3xl md:text-4xl my-6 font-semibold">
        How It Works ? <br /> Find a{" "}
        <span className=" font-bold text-teal-500">Perfect </span>
        home
      </h2>
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 ">
        <div className="border p-5 space-y-2.5 rounded-lg shadow-md">
          <img className="w-16" src={house} alt="" />
          <h2 className="text-xl md:text-2xl font-semibold">Find real State</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
          </p>
        </div>
        <div className="border p-5 space-y-2.5 rounded-lg shadow-md">
          <img className="w-16" src={idea} alt="" />
          <h2 className="text-xl md:text-2xl font-semibold ">Take some idea</h2>
          <p>
            Aorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            ideal
          </p>
        </div>
        <div className="border p-5 space-y-2.5 rounded-lg shadow-md">
          <img className="w-16" src={monitor} alt="" />
          <h2 className="text-xl md:text-2xl font-semibold">Meet relator</h2>
          <p>Aorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="border p-5 space-y-2.5 rounded-lg shadow-md">
          <img className="w-16" src={paint} alt="" />
          <h2 className="text-xl md:text-2xl font-semibold">
            Customize Design
          </h2>
          <p>Aorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;
