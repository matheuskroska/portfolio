import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import { Pagination, Navigation, Autoplay } from 'swiper';
import { StyledSwiper } from './Swiper.styled';

export const Swiper = ({ children }: any) => {
  return (
    <StyledSwiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      speed={600}
      parallax={true}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {children}
    </StyledSwiper>
  );
};
