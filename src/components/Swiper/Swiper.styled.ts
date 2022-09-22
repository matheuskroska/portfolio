import { Swiper, SwiperSlide } from 'swiper/react';
import { createStyled, createPrefix } from '../../../stitches.config';

const componentRef = 'Swiper';

export const StyledSwiper = createStyled(
  createPrefix(componentRef, 'StyledSwiper')
).styled(Swiper, {
  width: '100%',
  height: '100%',
  maxWidth: '920px',
  margin: '0 auto',
  marginTop: '50px',
  boxShadow: '0 2px 10px $blackA7',
  borderRadius: '6px',
  backgroundColor: 'White',

  '& .swiper-button-next:after, .swiper-button-prev:after': {
    content: '',
  },

  '& .swiper-pagination-bullet-active': {
    background: '$violet11',
  },
});

export const StyledSwiperSlider = createStyled(
  createPrefix(componentRef, 'StyledSwiperSlider')
).styled(SwiperSlide, {
  fontSize: '18px',
  color: '#000',
  boxSizing: 'border-box',
  padding: '40px 60px',
});
