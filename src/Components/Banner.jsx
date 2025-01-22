// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import slide1 from '../../src/assets/images/slider1.webp';
// import slide2 from '../../src/assets/images/slider2.webp';
// import slide3 from '../../src/assets/images/slider3.webp';



// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import useAuth from '../Hooks/useAuth';

export default function Banner() {

  const {activeAds} = useAuth();
 // console.log(activeAds.length);

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

        {
          activeAds.map((item, index) => 
          <SwiperSlide>
            <img src={item.ad_photo} className='object-cover w-full' alt="" />
          </SwiperSlide>
          )
        }

        
        {/* <SwiperSlide>

              <img src={slide2} className='object-cover w-full' alt="" />
           
        </SwiperSlide>
        <SwiperSlide>

              <img src={slide3} className='object-cover w-full' alt="" />

        </SwiperSlide> */}
       
        
      </Swiper>
    </div>
  );
}
