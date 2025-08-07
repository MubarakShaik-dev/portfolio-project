import React from 'react';
import {
  AboutContainer,
  AboutWrapper,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
  DecorativeBracket,
  Button
} from './styles';
import AboutImage from '../../assets/about-image.jpg'; // Make sure to add an image to src/assets

const About = () => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AboutContainer id="about">
      <AboutWrapper>
        <Column1>
          <ImgWrap>
            <DecorativeBracket />
            <Img src={AboutImage} alt="Developer at work" />
          </ImgWrap>
        </Column1>
        <Column2>
          <TextWrapper>
            <TopLine>About Me</TopLine>
            <Heading>A Developer Who Thrives on Challenges</Heading>
            <Subtitle>
              I'm a software developer who thrives on challenges. Whether it's optimizing database performance or architecting a new feature, I combine my analytical skills with a creative approach to deliver robust and efficient solutions.
            </Subtitle>
            <Button onClick={() => handleScrollTo('contact')}>Contact Me</Button>
          </TextWrapper>
        </Column2>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;
