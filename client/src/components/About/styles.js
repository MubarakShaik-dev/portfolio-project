import styled from 'styled-components';

export const AboutContainer = styled.section`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 100px 0;
`;

export const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 48px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  position: relative;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: ${({ theme }) => theme.accent};
  font-size: 1rem;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h2`
  margin-bottom: 24px;
  font-size: 2.5rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ theme }) => theme.text};

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 1.1rem;
  line-height: 24px;
  color: ${({ theme }) => theme.text};
  opacity: 0.9;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius: 20px;
`;

export const DecorativeBracket = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 10px solid ${({ theme }) => theme.accent};
  border-radius: 20px;
  top: -20px;
  left: -20px;
  z-index: -1;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Button = styled.a`
  border-radius: 50px;
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.background === '#0f172a' ? '#0f172a' : '#ffffff'};
  white-space: nowrap;
  padding: 14px 48px;
  font-size: 1rem;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
    transition: all 0.2s ease-in-out;
  }
`;
