import styled from 'styled-components';

export const SkillsContainer = styled.section`
  background: ${({ theme }) => theme.background};
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SkillsH1 = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const SkillsSubheading = styled.p`
  font-size: 1.1rem;
  text-align: center;
  max-width: 600px;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
`;

export const FlexWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  gap: 24px;
  padding: 0 50px;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    padding: 0;
  }
`;


export const CategoryWrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;
  
  /* Adjust padding for standalone vs flex items */
  padding: ${({ standalone }) => (standalone ? '0 50px' : '0')};
  
  border: 2px solid ${({ theme }) => theme.cardBg};
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);


  @media screen and (max-width: 992px) {
    padding: 24px 20px;
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 24px;
  text-align: center;
  border-bottom: 2px solid ${({ theme }) => theme.text};
  padding-bottom: 10px;
  display: inline-block;
`;

export const SkillsWrapper = styled.div`
  display: grid;
  /* FIX: Adjusted grid to fit smaller cards */
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  align-items: stretch;
  /* FIX: Reduced gap for a tighter layout */
  grid-gap: 20px; 
`;

export const SkillCard = styled.div`
  background: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  /* FIX: Added border to each skill card */
  border: 1px solid ${({ theme }) => theme.cardBg}; 
  /* FIX: Reduced padding and height for a smaller card */
  padding: 15px;
  min-height: 180px; 
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  text-align: center;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    border-color: ${({ theme }) => theme.accent}; /* Highlight border on hover */
  }
`;

export const SkillIcon = styled.div`
  /* FIX: Reduced font size and margin */
  font-size: 2.5rem; 
  margin-bottom: 0.7rem; 
  color: ${({ theme }) => theme.accent};
`;

export const SkillName = styled.p`
  /* FIX: Reduced font size */
  font-size: 0.9rem; 
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const SkillDescription = styled.p`
  /* FIX: Reduced font size */
  font-size: 0.8rem; 
  opacity: 0.8;
  flex-grow: 1;
  margin-bottom: 1rem;
`;

export const CertificateButton = styled.a`
  background: transparent;
  border: 2px solid ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.accent};
  /* FIX: Reduced padding and font size for smaller card */
  padding: 6px 12px;
  font-size: 0.85rem; 
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  width: 100%;

  &:hover {
    background: ${({ theme }) => theme.accent};
    color: ${({ theme }) => (theme.background === '#0f172a' ? '#0f172a' : '#ffffff')};
  }
`;
