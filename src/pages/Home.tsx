import AccordionDemo from '../components/Accordion';
import AspectRatioDemo from '../components/AspectRatio';
import { Card } from '../components/Card';
import { Header } from '../components/Header';
import { NavigationMenuDemo } from '../components/NavigationMenu';
import { Swiper } from '../components/Swiper';
import { StyledSwiperSlider } from '../components/Swiper/Swiper.styled';
import {
  DiscordLogoIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  StitchesLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';

import { ReactComponent as IconCreate } from '../assets/images/icons/iconCreate.svg';
import { ReactComponent as IconCss } from '../assets/images/icons/iconCss.svg';
import { ReactComponent as IconEslint } from '../assets/images/icons/iconEslint.svg';
import { ReactComponent as IconFirebase } from '../assets/images/icons/iconFirebase.svg';
import { ReactComponent as IconHtml } from '../assets/images/icons/iconHtml.svg';
import { ReactComponent as IconJavascript } from '../assets/images/icons/iconJavascript.svg';
import { ReactComponent as IconPrettier } from '../assets/images/icons/iconPrettier.svg';
import { ReactComponent as IconReact } from '../assets/images/icons/iconReact.svg';
import { ReactComponent as IconStorybook } from '../assets/images/icons/iconStorybook.svg';
import { ReactComponent as IconStyled } from '../assets/images/icons/iconStyled.svg';
import { ReactComponent as IconTypescript } from '../assets/images/icons/iconTypescript.svg';
import { ReactComponent as IconVite } from '../assets/images/icons/iconVite.svg';
import { Footer } from '../components/Footer';

function Home() {
  return (
    <>
      <Header>Olá, eu sou o Matheus.</Header>
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
          >
            <IconReact />
            <IconCreate />
            <IconJavascript />
            <IconFirebase />
            <IconStyled />
          </Card>
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
      <AccordionDemo></AccordionDemo>
      <Footer>
        <LinkedInLogoIcon />
        <TwitterLogoIcon />
        <DiscordLogoIcon />
        <EnvelopeClosedIcon />
      </Footer>
    </>
  );
}

export default Home;
