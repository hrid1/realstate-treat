
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const HomeCard = ({ home }) => {
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
    button,
  } = home;
  return (
    <div className="card card-compact bg-base-100  shadow-xl p-2">
      <figure>
        <img className="rounded hover:scale-110 duration-500" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <p className="flex items-center gap-1"> <IoLocationOutline/> {location}</p>
        <h2 className="card-title">{estate_title}</h2>
        {/* <p className="text-lg font-semibold">{price}</p> */}
        <p>{description}</p>
        <div className="card-actions justify-between items-center ">
          <Link to={`home/${id}`} className="btn bg-teal-600 hover:bg-teal-200 text-white hover:text-black">
            Check Availability
          </Link>
          <h3 className="font-semibold">Price: {price} </h3>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
