import styled from 'styled-components';

export const Nav = styled.nav`
  background: ${({ theme }) => theme.navBg};
  backdrop-filter: blur(10px);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Vertically align items */
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled.a`
  color: ${({ theme }) => theme.text};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;

  span {
    font-weight: 700;
    color: ${({ theme }) => theme.accent};
  }
`;

// New container for the right-side icons
export const RightActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px; /* Adds space between the icons */
`;


export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block; /* Show on mobile */
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${({ theme }) => theme.background};
    z-index: 99; /* Ensure menu is on top */
  }
`;

export const NavItem = styled.li`
  height: 80px;
  
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const NavLinks = styled.a`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 500;

  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.accent};
  }
  
  &:hover {
    color: ${({ theme }) => theme.accent};
    transition: 0.2s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    padding: 2rem;
    width: 100%;
  }
`;

export const ThemeToggleButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  
  &:hover {
    color: ${({ theme }) => theme.accent};
    transition: 0.2s ease-in-out;
  }
`;
