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
        <section className="flex flex-col-reverse md:flex-row gap-8 justify-between mx-auto">
          {/* home info */}
          <div className="w-full md:w-2/5 p-6 bg-white rounded-lg shadow-lg space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">{estate_title}</h1>

            <p className="text-lg text-gray-700">{description}</p>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-800">Location</h3>
              <p className="text-gray-600">{location}</p>
            </div>

            <div className="space-y-2 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Price</h3>
                <p className="text-2xl font-bold text-green-500">{price}</p>
              </div>

              <div>
                <span
                  className={`inline-block px-4 py-2 mt-4 text-sm font-semibold text-white rounded-full ${
                    status === "Available" ? "bg-green-500" : "bg-orange-500"
                  }`}
                >
                  {status}
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">Area</h3>
                <p className="text-gray-600">{area} sqft</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">Segment</h3>
                <p className="text-gray-600">{segment_name}</p>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-800">
                Facilities
              </h3>
              <ul className="list-disc list-inside ml-4 space-y-1 text-gray-600">
                {facilities?.map((facility, index) => (
                  <li key={index}>{facility}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* images */}
          <div className="md:w-3/5 p-4 md:p-12">
            <img
              className="w-full h-full rounded-lg border shadow-lg"
              src={image}
              alt={`${estate_title} Image`}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeDetails;
