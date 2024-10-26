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
        <h2 className="card-title">{estate_title}</h2>
        <p>{location}</p>
        {/* <p className="text-lg font-semibold">{price}</p> */}
        <div className="card-actions justify-between items-center ">
          <button className="btn bg-teal-600 hover:bg-teal-200 text-white hover:text-black">
            Check Availability
          </button>
          <h3 className="font-semibold">Price: {price} </h3>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
