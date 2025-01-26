import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaCartPlus, FaEye } from "react-icons/fa6";


const SpecialForYou = () => {
    return (
        <div className=" py-14">
            <div className="w-11/12 mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-bold lg:text-4xl md:text-3xl text-2xl">Specially For You</h2>
            <p className="text-base mt-2 text-slate-700"> </p>
          </div>
    
          <div className=" grid lg:grid-cols-4 grid-cols-2 gap-6">
           
              
                <div className="discount-card relative p-5 rounded-md bg-gradient-to-br from-[#fcfbff] to-[#b398ff] rounded-tr-[50px]">
                  <h4 className="uppercase font-medium text-xs md:text-base">Upto</h4>
                  <h3 className="uppercase font-bold md:text-xl text-base my-1">10% Off</h3>
                  <p className="font-medium md:text-xl text-base">+ Cashback</p>
                  <Link to={'tel:01672119007'} className="btn bg-white md:text-base text-xs grid place-items-center mt-7">
                   Call Now
                  </Link>
                  <div className="absolute bg-white p-2 rounded-full top-0 right-0">
                    <img src="https://cdn.breathewellbeing.in/images/home/symptoms/Banner-Image.webp" className="rounded-full w-14 h-14 " alt="" />
                  </div>
                </div>
             
                <div className="discount-card relative p-5 rounded-md bg-gradient-to-br from-[#fcfbff] to-[#b398ff] rounded-tr-[50px]">
                  <h4 className="uppercase font-medium text-xs md:text-base">Upto</h4>
                  <h3 className="uppercase font-bold md:text-xl text-base my-1">14% Off</h3>
                  <p className="font-medium md:text-xl text-base">+ Cashback</p>
                  <Link className="btn bg-white md:text-base text-xs grid place-items-center mt-7">
                   Upload Prescription
                  </Link>
                  <div className="absolute bg-white p-2 rounded-full top-0 right-0">
                    <img src="https://cdn.breathewellbeing.in/images/home/symptoms/Banner-Image.webp" className="rounded-full w-14 h-14 " alt="" />
                  </div>
                </div>
             
                <div className="discount-card relative p-5 rounded-md bg-gradient-to-br from-[#fcfbff] to-[#b398ff] rounded-tr-[50px]">
                  <h4 className="uppercase font-medium text-xs md:text-base">Upto</h4>
                  <h3 className="uppercase font-bold md:text-xl text-base my-1">15% Off</h3>
                  <p className="font-medium md:text-xl text-base">+ Cashback</p>
                  <Link className="btn bg-white md:text-base text-xs grid place-items-center mt-7">
                    Registered Pharmacy
                  </Link>
                  <div className="absolute bg-white p-2 rounded-full top-0 right-0">
                    <img src="https://cdn.breathewellbeing.in/images/home/symptoms/Banner-Image.webp" className="rounded-full w-14 h-14 " alt="" />
                  </div>
                </div>
              
                <div className="discount-card relative p-5 rounded-md bg-gradient-to-br from-[#fcfbff] to-[#b398ff] rounded-tr-[50px]">
                  <h4 className="uppercase font-medium text-xs md:text-base">Upto</h4>
                  <h3 className="uppercase font-bold md:text-xl text-base my-1">12% Off</h3>
                  <p className="font-medium md:text-xl text-base">+ Cashback</p>
                  <Link to={'tel:01672119007'} className="btn bg-white md:text-base text-xs grid place-items-center mt-7">
                    Call to Order
                  </Link>
                  <div className="absolute bg-white p-2 rounded-full top-0 right-0">
                    <img src="https://cdn.breathewellbeing.in/images/home/symptoms/Banner-Image.webp" className="rounded-full w-14 h-14 " alt="" />
                  </div>
                </div>
              
          </div>
          
        </div>
        </div>
      );
};

export default SpecialForYou;