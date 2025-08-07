import styled from 'styled-components';

export const ContactContainer = styled.section`
  background: ${({ theme }) => theme.background};
  padding: 100px 0;
`;

export const ContactWrapper = styled.div`
  display: grid;
  /* Give more space to the info/map column */
  grid-template-columns: 1.2fr 1fr;
  grid-gap: 48px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoColumn = styled.div`
  color: ${({ theme }) => theme.text};
`;

export const FormColumn = styled.div``;

export const ContactH2 = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 24px;
`;

export const ContactP = styled.p`
  font-size: 1.1rem;
  margin-bottom: 40px;
  opacity: 0.9;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 1.1rem;
  position: relative; /* For positioning the copy button */

  svg {
    margin-right: 16px;
    color: ${({ theme }) => theme.accent};
    font-size: 1.5rem;
  }
`;

// New style for the copy button
export const CopyButton = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.accent};
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 16px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.accent};
    color: ${({ theme }) => (theme.background === '#0f172a' ? '#0f172a' : '#ffffff')};
  }
`;

// New style for the social icons wrapper
export const SocialIconsWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  gap: 24px;
`;

export const SocialIconLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.accent};
    transform: scale(1.2);
  }
`;

// New style for the map
export const MapWrapper = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.accent};
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.text};
  background: transparent;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 0.7;
  }
`;

export const TextArea = styled.textarea`
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.text};
  background: transparent;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  height: 150px;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.text};
    opacity: 0.7;
  }
`;

export const SubmitButton = styled.button`
  padding: 15px 30px;
  border-radius: 50px;
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => (theme.background === '#0f172a' ? '#0f172a' : '#ffffff')};
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const FormMessage = styled.p`
  font-size: 1rem;
  margin-top: 15px;
  color: ${({ success, theme }) => (success ? 'green' : theme.accent)};
`;

// New style for the "Thank You" message
export const ThankYouMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px;
  border: 2px solid ${({ theme }) => theme.accent};
  border-radius: 10px;
  height: 100%;

  svg {
    font-size: 4rem;
    color: ${({ theme }) => theme.accent};
    margin-bottom: 24px;
  }
`;
