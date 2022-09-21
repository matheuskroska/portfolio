import AspectRatioDemo from '../components/AspectRatio';
import { Card } from '../components/Card';
import { Header } from '../components/Header';
import { NavigationMenuDemo } from '../components/NavigationMenu';
import { Swiper } from '../components/Swiper';
import { StyledSwiperSlider } from '../components/Swiper/Swiper.styled';

function Home() {
  return (
    <>
      <Header></Header>
      <NavigationMenuDemo></NavigationMenuDemo>
      <Swiper>
        <StyledSwiperSlider>
          <Card
            image={<AspectRatioDemo />}
            title={'Title'}
            subtitle={'Sub'}
            text={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, doloribus voluptatum, et deleniti nulla odit maxime, officiis eos maiores magnam qui assumenda? Ab illum adipisci expedita dolorum laboriosam quaerat nam!'
            }
          ></Card>
        </StyledSwiperSlider>
        <StyledSwiperSlider>
          <Card
            image={<AspectRatioDemo />}
            title={'Title'}
            subtitle={'Sub'}
            text={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, doloribus voluptatum, et deleniti nulla odit maxime, officiis eos maiores magnam qui assumenda? Ab illum adipisci expedita dolorum laboriosam quaerat nam!'
            }
          ></Card>
        </StyledSwiperSlider>
        <StyledSwiperSlider>
          <Card
            image={<AspectRatioDemo />}
            title={'Title'}
            subtitle={'Sub'}
            text={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, doloribus voluptatum, et deleniti nulla odit maxime, officiis eos maiores magnam qui assumenda? Ab illum adipisci expedita dolorum laboriosam quaerat nam!'
            }
          ></Card>
        </StyledSwiperSlider>
      </Swiper>
    </>
  );
}

export default Home;
