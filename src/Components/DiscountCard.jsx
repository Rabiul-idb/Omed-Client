import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaCartPlus, FaEye } from "react-icons/fa6";
import ProductCard from "./ProductCard";

// import { Pagination, Navigation, Autoplay } from 'swiper/modules';
const DiscountCard = () => {
  return (
    <div className="bg-clr-1 py-14">
      <div className="w-11/12 mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-bold text-4xl">Flash Sale</h2>
          <p className="text-base mt-2 text-slate-700">
            Get 20% off on your first purchase
          </p>
        </div>

        <div className="">
          <Swiper
            // pagination={{
            //   type: 'fraction',
            // }}
            // autoplay={true}
            loop={true}
            slidesPerView={4}
            spaceBetween={24}
            // navigation={true}
            // modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="discount-card p-4 relative bg-white rounded-md hover:shadow-xl duration-300">
                <ProductCard></ProductCard>
                <p className="absolute bg-red-600 text-white  p-2 rounded-md top-2 right-2">
                  10% Off
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="discount-card p-4 relative bg-white rounded-md">
                <div>
                  <img
                    src="https://cdn.breathewellbeing.in/images/home/symptoms/Banner-Image.webp"
                    className="w-full object-cover"
                    alt=""
                  />
                </div>
                <h2 className="font-bold text-xl leading-tight my-2">
                  Paracetamol tablet
                </h2>
                <hr></hr>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-base font-bold text-black">
                    $ <span>20</span>
                  </p>
                  <Link className="btn">
                    <FaCartPlus />
                  </Link>
                  <button className="btn">
                    <FaEye />
                  </button>
                </div>

                <p className="absolute bg-red-600 text-white  p-2 rounded-md top-2 right-2">
                  10% Off
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="discount-card p-4 relative bg-white rounded-md">
                <div>
                  <img
                    src="https://cdn.breathewellbeing.in/images/home/symptoms/Banner-Image.webp"
                    className="w-full object-cover"
                    alt=""
                  />
                </div>
                <h2 className="font-bold text-xl leading-tight my-2">
                  Paracetamol tablet
                </h2>
                <hr></hr>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-base font-bold text-black">
                    $ <span>20</span>
                  </p>
                  <Link className="btn">
                    <FaCartPlus />
                  </Link>
                  <button className="btn">
                    <FaEye />
                  </button>
                </div>

                <p className="absolute bg-red-600 text-white  p-2 rounded-md top-2 right-2">
                  10% Off
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="discount-card p-4 relative bg-white rounded-md">
                <div>
                  <img
                    src="https://cdn.breathewellbeing.in/images/home/symptoms/Banner-Image.webp"
                    className="w-full object-cover"
                    alt=""
                  />
                </div>
                <h2 className="font-bold text-xl leading-tight my-2">
                  Paracetamol tablet
                </h2>
                <hr></hr>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-base font-bold text-black">
                    $ <span>20</span>
                  </p>
                  <Link className="btn">
                    <FaCartPlus />
                  </Link>
                  <button className="btn">
                    <FaEye />
                  </button>
                </div>

                <p className="absolute bg-red-600 text-white  p-2 rounded-md top-2 right-2">
                  10% Off
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="discount-card p-4 relative bg-white rounded-md">
                <div>
                  <img
                    src="https://cdn.breathewellbeing.in/images/home/symptoms/Banner-Image.webp"
                    className="w-full object-cover"
                    alt=""
                  />
                </div>
                <h2 className="font-bold text-xl leading-tight my-2">
                  Paracetamol tablet
                </h2>
                <hr></hr>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-base font-bold text-black">
                    $ <span>20</span>
                  </p>
                  <Link className="btn">
                    <FaCartPlus />
                  </Link>
                  <button className="btn">
                    <FaEye />
                  </button>
                </div>

                <p className="absolute bg-red-600 text-white  p-2 rounded-md top-2 right-2">
                  10% Off
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="discount-card p-4 relative bg-white rounded-md">
                <div>
                  <img
                    src="https://cdn.breathewellbeing.in/images/home/symptoms/Banner-Image.webp"
                    className="w-full object-cover"
                    alt=""
                  />
                </div>
                <h2 className="font-bold text-xl leading-tight my-2">
                  Paracetamol tablet
                </h2>
                <hr></hr>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-base font-bold text-black">
                    $ <span>20</span>
                  </p>
                  <Link className="btn">
                    <FaCartPlus />
                  </Link>
                  <button className="btn">
                    <FaEye />
                  </button>
                </div>

                <p className="absolute bg-red-600 text-white  p-2 rounded-md top-2 right-2">
                  10% Off
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="discount-card p-4 relative bg-white rounded-md">
                <div>
                  <img
                    src="https://cdn.breathewellbeing.in/images/home/symptoms/Banner-Image.webp"
                    className="w-full object-cover"
                    alt=""
                  />
                </div>
                <h2 className="font-bold text-xl leading-tight my-2">
                  Paracetamol tablet
                </h2>
                <hr></hr>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-base font-bold text-black">
                    $ <span>20</span>
                  </p>
                  <Link className="btn">
                    <FaCartPlus />
                  </Link>
                  <button className="btn">
                    <FaEye />
                  </button>
                </div>

                <p className="absolute bg-red-600 text-white  p-2 rounded-md top-2 right-2">
                  10% Off
                </p>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
            <div className="discount-card relative p-5 rounded-md bg-gradient-to-br from-[#fcfbff] to-[#b398ff] rounded-tr-[50px]">
              <h4 className="uppercase font-medium">Upto</h4>
              <h3 className="uppercase font-bold text-xl my-1">10% Off</h3>
              <p className="font-medium text-xl">+ Cashback</p>
              <Link className="btn bg-white text-base grid place-items-center mt-7">
                Shop Now
              </Link>
              <div className="absolute bg-white p-2 rounded-full top-0 right-0">
                <img src="https://cdn.breathewellbeing.in/images/home/symptoms/Banner-Image.webp" className="rounded-full w-14 h-14 " alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="discount-card relative p-5 rounded-md bg-gradient-to-br from-[#fcfbff] to-[#b398ff] rounded-tr-[50px]">
              <h4 className="uppercase font-medium">Upto</h4>
              <h3 className="uppercase font-bold text-xl my-1">10% Off</h3>
              <p className="font-medium text-xl">+ Cashback</p>
              <Link className="btn bg-white text-base grid place-items-center mt-7">
                Shop Now
              </Link>
              <div className="absolute bg-white p-2 rounded-full top-0 right-0">
                <img src="https://cdn.breathewellbeing.in/images/home/symptoms/Banner-Image.webp" className="rounded-full w-14 h-14 " alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="discount-card relative p-5 rounded-md bg-gradient-to-br from-[#fcfbff] to-[#b398ff] rounded-tr-[50px]">
              <h4 className="uppercase font-medium">Upto</h4>
              <h3 className="uppercase font-bold text-xl my-1">10% Off</h3>
              <p className="font-medium text-xl">+ Cashback</p>
              <Link className="btn bg-white text-base grid place-items-center mt-7">
                Shop Now
              </Link>
              <div className="absolute bg-white p-2 rounded-full top-0 right-0">
                <img src="https://cdn.breathewellbeing.in/images/home/symptoms/Banner-Image.webp" className="rounded-full w-14 h-14 " alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="discount-card relative p-5 rounded-md bg-gradient-to-br from-[#fcfbff] to-[#b398ff] rounded-tr-[50px]">
              <h4 className="uppercase font-medium">Upto</h4>
              <h3 className="uppercase font-bold text-xl my-1">10% Off</h3>
              <p className="font-medium text-xl">+ Cashback</p>
              <Link className="btn bg-white text-base grid place-items-center mt-7">
                Shop Now
              </Link>
              <div className="absolute bg-white p-2 rounded-full top-0 right-0">
                <img src="https://cdn.breathewellbeing.in/images/home/symptoms/Banner-Image.webp" className="rounded-full w-14 h-14 " alt="" />
              </div>
            </div>
          </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default DiscountCard;
