import CountUp from "react-countup";
import { FaGlobe, FaHandshake, FaHome } from "react-icons/fa";

const Success = () => {
  return (
    <section className=" my-8  md:my-12 mx-auto max-w-5xl ">
      <div className="my-6">
        <h2 className="text-center font-bold text-3xl ">Our Success</h2>
        <p className="text-center font-light">
          We made this between couple of years.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-around gap-6 md:gap-10">
        <div className="bg-teal-50  rounded-md space-y-4 text-center p-6 w-5/6 md:w-auto">
          <FaHandshake className="mx-auto text-3xl" />
          <h2 className="text-3xl font-bold">
            <CountUp delay={2} end={3758} />
          </h2>
          <p>Lorem ipsum dolor sit. hi obss</p>
        </div>
        <div className="bg-teal-50  rounded-md space-y-4 text-center p-6 w-5/6 md:w-auto">
          <FaHome className="mx-auto text-3xl" />
          <h2 className="text-3xl font-bold">  <CountUp delay={2} end={13758} /></h2>
          <p>Lorem ipsum dolor sit. hi obss</p>
        </div>
        <div className="bg-teal-50  rounded-md space-y-4 text-center p-6 w-5/6 md:w-auto">
          <FaGlobe className="mx-auto text-3xl" />
          <h2 className="text-3xl font-bold">  <CountUp delay={2} end={518} /></h2>
          <p>Lorem ipsum dolor sit. hi obss</p>
        </div>
      </div>
    </section>
  );
};

export default Success;
