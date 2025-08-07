import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: all 0.3s ease-in-out;
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.cardBg};
  color: ${({ theme }) => theme.text};
  padding: 40px;
  border-radius: 10px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-50px)')};
  transition: all 0.3s ease-in-out;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const ProjectTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const ProjectTech = styled.p`
  font-style: italic;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 20px;
`;

export const ProjectDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 30px;
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => (theme.background === '#0f172a' ? '#0f172a' : '#ffffff')};
  padding: 10px 20px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
  }
`;
