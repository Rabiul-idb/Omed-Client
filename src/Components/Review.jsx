
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
const Review = () => {
    return (
        <div className="w-11/12 mx-auto bg-[#fef5ee] px-14 py-24 rounded-lg mb-20">
            <h2 className="lg:text-3xl md:text-2xl font-bold text-center mb-10">What Our
                Customers Say</h2>


            <Swiper
           
           autoplay={{
            delay: 8000,
         }}
            loop={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
        >
 
          <SwiperSlide>
            <p className='text-lg font-normal text-center'>
            "Fantastic service! The website is easy to navigate, and my medicines arrived on time. <br className='hidden lg:block'></br>The prices are competitive, and I appreciate the prompt customer support. Highly recommended!"
            </p>
            <p className='font-semibold text-xl text-center mt-5'>Jhon Doe</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className='text-lg font-normal text-center'>
            "Convenient and reliable! Ordering medicines online has never been this easy. The delivery was fast, <br className='hidden lg:block'></br>and the packaging was secure. Will definitely order again!"
            </p>
            <p className='font-semibold text-xl text-center mt-5'>Jhon Paul</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className='text-lg font-normal text-center'>
            "Great experience! I found all my prescribed medicines at affordable prices. The checkout process was smooth,<br className='hidden lg:block'></br> and the customer support team was very helpful. 5 stars!"
            </p>
            <p className='font-semibold text-xl text-center mt-5'>Michle Clerk</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className='text-lg font-normal text-center'>
            "Fantastic service! The website is easy to navigate, and my medicines arrived on time. The prices are competitive,<br className='hidden lg:block'></br> and I appreciate the prompt customer support. Highly recommended!"
            </p>
            <p className='font-semibold text-xl text-center mt-5'>Jonathon beck</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className='text-lg font-normal text-center'>
            "Convenient and reliable! Ordering medicines online has never been this easy. The delivery was fast,<br className='hidden lg:block'></br> and the packaging was secure. Will definitely order again!"
            </p>
            <p className='font-semibold text-xl text-center mt-5'>Watson Heavy</p>
          </SwiperSlide>
          <SwiperSlide>
            <p className='text-lg font-normal text-center'>
            "Great experience! I found all my prescribed medicines at affordable prices. The checkout process was smooth, <br className='hidden lg:block'></br>and the customer support team was very helpful. 5 stars!"
            </p>
            <p className='font-semibold text-xl text-center mt-5'>San Francisco</p>
          </SwiperSlide>
         
         

      </Swiper>
        </div>
    );
};

export default Review;