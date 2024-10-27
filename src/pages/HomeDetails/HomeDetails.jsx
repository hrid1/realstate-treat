import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HomeDetails = () => {
  // get home d
  const { hid } = useParams();

  // loading all homes
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    fetch("/state.json")
      .then((res) => res.json())
      .then((data) => setHomes(data));
  }, [hid]);

  //   finding home
  const currentHome = homes.find((home) => home.id == hid);

  console.log(currentHome);

  const {
    id,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
  } = currentHome || {};

  console.log(facilities);

  return (
    <>
      <div className="container mx-auto my-10">
        <section className="flex gap-6 justify-between  mx-auto">
          {/* home info */}
          <div className=" w-2/5 p-2 space-y-3.5">
            <h1 className="text-4xl font-bold ">{estate_title}</h1>
            <p>
              <span className="text-lg font-semibold">Description: </span>{" "}
              {description}
            </p>
            <ul>
              {facilities?.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>

            <h3 className="text-xl">Location: {location}</h3>
            <h3 className="text-3xl">Price: {price}</h3>
            <h3 className="text-3xl">Area: {area}</h3>
            <h3 className="text-3xl">Area: {segment_name}</h3>

            <h3 className="text-2xl btn btn-sm bg-teal-400">{status}</h3>
          </div>

          {/* images */}

          <img className="w-3/5 rounded-md" src={image} alt="" />
        </section>
      </div>
    </>
  );
};

export default HomeDetails;
