// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slide1 from '../../src/assets/images/slider1.webp';
import slide2 from '../../src/assets/images/slider2.webp';
import slide3 from '../../src/assets/images/slider3.webp';



// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Banner() {
  return (
    <div className=''>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        autoplay={true}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src={slide1} className='object-cover w-full' alt="" />
        </SwiperSlide>
        <SwiperSlide>

              <img src={slide2} className='object-cover w-full' alt="" />
           
        </SwiperSlide>
        <SwiperSlide>

              <img src={slide3} className='object-cover w-full' alt="" />

        </SwiperSlide>
       
        
      </Swiper>
    </div>
  );
}
