// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

// import images
import slide1 from "../assets/carosol/slide1.jpg";
// import slide2 from "../assets/carosol/slide2.jpg";
// import slide3 from "../assets/carosol/slide3.jpg";
const Carosol = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      autoplay={{ delay: 3000 }}
    >
      {/* <SwiperSlide>
        <img className="md:h-[560px] w-full px-2 mx-auto" src={slide1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="md:h-[600px] w-full px-2 mx-auto" src={slide2} alt="" />
      </SwiperSlide> */}

      <SwiperSlide>
        <div
          className="h-80 md:h-[600px] bg-cover bg-center rounded-md"
          style={{ backgroundImage: `url(${slide1})` }}
        >
          <div className="h-full bg-black bg-opacity-60 rounded-md">
            <div className="flex flex-col gap-4 justify-center items-start  h-full px-8 md:px-20 lg:ml-20">
              <h1 className="text-5xl md:text-6xl font-bold text-white md:w-2/3">
                Discover the art of luxury accommodation
              </h1>
              <p className="text-gray-300">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                aperiam sed molestias, cum placeat tempore!
              </p>

              <div className="flex items-center justify-center">
                <input className="p-2 md:p-3 rounded-l outline-none" type="text" />
                <button className="p-2 md:p-3 bg-teal-600 text-white  rounded-r">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carosol;
