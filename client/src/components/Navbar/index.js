import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  ThemeToggleButton,
  RightActionContainer
} from './styles';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(AppContext);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo href="#" onClick={() => handleScrollTo('hero')}>
          Mubarak <span>Shaik</span>
        </NavLogo>
        
        <RightActionContainer>
          <ThemeToggleButton onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </ThemeToggleButton>
          <MobileIcon onClick={toggle}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MobileIcon>
        </RightActionContainer>

        <NavMenu isOpen={isOpen}>
          <NavItem>
            <NavLinks onClick={() => handleScrollTo('hero')}>HOME</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks onClick={() => handleScrollTo('about')}>ABOUT</NavLinks>
          </NavItem>
          {/* Add the new Skills link */}
          <NavItem>
            <NavLinks onClick={() => handleScrollTo('skills')}>SKILLS</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks onClick={() => handleScrollTo('experience')}>EXPERIENCE</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks onClick={() => handleScrollTo('contact')}>CONTACT</NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
