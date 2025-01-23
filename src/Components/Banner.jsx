// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Loading from './Loading';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../Hooks/useAxiosSecure';

export default function Banner() {

  const [activeAds, setActiveAds] = useState([]);
  const axiosSecure = useAxiosSecure();

  const { data: all_ads =[], isLoading} = useQuery({
    queryKey: ["all_ads"],
    queryFn: async () =>{
        const response = await axiosSecure.get(`/advertises`)
        return response.data;
    }
  });

  useEffect(() => {
    if (all_ads.length > 0) {
       const activeAd = all_ads.filter((adItem) => adItem.status === "active");
      setActiveAds(activeAd);
    }
  }, [all_ads]);

  

  if(isLoading){
      return <Loading/>
  }

  const hasEnoughSlides = activeAds.length > 1; // for swiper slide looping


  return (
    <div className=''>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        autoplay={true}
        loop={hasEnoughSlides}
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

      </Swiper>
    </div>
  );
}
