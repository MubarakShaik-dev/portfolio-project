import styled from 'styled-components';

export const HeroContainer = styled.section`
  background: ${({ theme }) => theme.background};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 90vh;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 100px 20px;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const HeroWelcome = styled.p`
  color: ${({ theme }) => theme.accent};
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1.4px;
`;

export const HeroH1 = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 16px;

  @media screen and (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const HeroP = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.text};
  opacity: 0.9;
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

export const Button = styled.a`
  border-radius: 50px;
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => (theme.background === '#0f172a' ? '#0f172a' : '#ffffff')};
  white-space: nowrap;
  padding: 14px 48px;
  font-size: 1rem;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
    transition: all 0.2s ease-in-out;
  }
`;


export const ImageWrapper = styled.div`
  max-width: 450px;
  height: auto;
  margin-left: 50px;
  z-index: 2;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 50px;
    max-width: 350px;
  }
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;
