import styled from 'styled-components';

export const ExperienceContainer = styled.section`
  background: ${({ theme }) => theme.background};
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ExperienceH1 = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 64px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  border: 2px solid ${({ theme }) => theme.accent};
  border-radius: 50px;
  overflow: hidden;
`;

export const TabButton = styled.button`
  background: ${({ isActive, theme }) => (isActive ? theme.accent : 'transparent')};
  color: ${({ isActive, theme }) => (isActive ? (theme.background === '#0f172a' ? '#0f172a' : '#ffffff') : theme.text)};
  border: none;
  padding: 10px 30px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.accent};
    color: ${({ theme }) => (theme.background === '#0f172a' ? '#0f172a' : '#ffffff')};
  }
`;

export const ExperienceWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-gap: 32px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ExperienceCard = styled.div`
  background: ${({ theme }) => theme.cardBg};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 380px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;

export const ExperienceIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
  border-radius: 10px;
  object-fit: cover;
`;

export const ExperienceH2 = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  text-align: center;
`;

export const ExperienceP = styled.p`
  font-size: 1rem;
  text-align: center;
  opacity: 0.8;
`;
