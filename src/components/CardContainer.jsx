import { useEffect, useState } from "react";
import HomeCard from "./common/HomeCard";

const CardContainer = () => {
  const [homes, setHomes] = useState([]);
  useEffect(() => {
    fetch("state.json")
      .then((res) => res.json())
      .then((data) => setHomes(data));
  }, []);

  return (
    <div>
      <h2 className="text-4xl my-10 font-semibold">
        Our choice of popular{" "}
        <span className="text-bold text-teal-500 font-bold">real estate</span>
      </h2>

      {/* card section */}
      <section className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {homes.map((home) => (
          <HomeCard key={home.id} home={home}></HomeCard>
        ))}
      </section>
    </div>
  );
};

export default CardContainer;
