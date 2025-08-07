import React from 'react';
import {
  HeroContainer,
  HeroContent,
  HeroWelcome,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  Button,
  ImageWrapper,
  Img
} from './styles';
import HeroImage from '../../assets/hero-image.jpg'; // Make sure to add an image to src/assets

const Hero = () => {
  
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer id="hero">
      <HeroContent>
        <HeroWelcome>Hello, Welcome</HeroWelcome>
        <HeroH1>I'm Mubarak Shaik</HeroH1>
        <HeroP>
          As a MERN FullStack-developer, I love the entire process of bringing an idea to life—from the initial concept to a fully functional, polished application. I'm driven by a passion for clean code and user-centric design.
        </HeroP>
        <HeroBtnWrapper>
          <Button onClick={() => handleScrollTo('contact')}>Contact Me</Button>
        </HeroBtnWrapper>
      </HeroContent>
      <ImageWrapper>
        <Img src={HeroImage} alt="Mubarak Shaik" />
      </ImageWrapper>
    </HeroContainer>
  );
};

export default Hero;
