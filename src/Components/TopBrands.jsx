// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import square from '../assets/images/square.png';
import beximco from '../assets/images/beximco.webp';
import incepta from '../assets/images/incepta.webp';
import aristopharma from '../assets/images/aristopharma.png';
import skf from '../assets/images/skf.png';
import opsonin from '../assets/images/opsonin.webp';
import drag from '../assets/images/drag.webp';
import healthcare from '../assets/images/healthcare.png';
import ranata from '../assets/images/ranata.png';
import { Autoplay, Navigation, Pagination } from "swiper/modules";


const TopBrands = () => {
    return (
        <div className=" pb-14">
      <div className="w-11/12 mx-auto">
        <div className=" mb-2">
          <h2 className="font-bold lg:text-4xl md:text-3xl text-2xl">Top Brands</h2>
        </div>

        <div className="brands">
          <Swiper
            // pagination={{
            //   type: 'fraction',
            // }}
             autoplay={{
                delay: 0,
             }}
            loop={true}
            slidesPerView={6}
            spaceBetween={24}
            speed={2000}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 24,
              },
              1440: {
                slidesPerView: 7,
                spaceBetween: 32,
              },
            }}
            // navigation={true}
             modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="Brand-card p-2 bg-white rounded-3xl shadow-xl h-[180px] grid place-items-center">
                <img src={square} className="object-cover" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Brand-card p-2 bg-white rounded-3xl shadow-xl h-[180px] grid place-items-center">
                <img src={beximco} className="object-cover" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Brand-card p-2 bg-white rounded-3xl shadow-xl h-[180px] grid place-items-center">
                <img src={incepta} className="object-cover" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Brand-card p-2 bg-white rounded-3xl shadow-xl h-[180px] grid place-items-center">
                <img src={aristopharma} className="object-cover" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Brand-card p-2 bg-white rounded-3xl shadow-xl h-[180px] grid place-items-center">
                <img src={skf} className="object-cover" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Brand-card p-2 bg-white rounded-3xl h-[180px] grid place-items-center shadow-xl">
                <img src={opsonin} className="object-cover" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Brand-card p-2 bg-white rounded-3xl shadow-xl h-[180px] grid place-items-center">
                <img src={drag} className="object-cover" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Brand-card p-2 bg-white rounded-3xl shadow-xl h-[180px] grid place-items-center">
                <img src={healthcare} className="object-cover" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="Brand-card p-2 bg-white rounded-3xl shadow-xl h-[180px] grid place-items-center">
                <img src={ranata} className="object-cover" alt="" />
              </div>
            </SwiperSlide>
          
          </Swiper>
        </div>
      </div>
    </div>
    );
};

export default TopBrands;