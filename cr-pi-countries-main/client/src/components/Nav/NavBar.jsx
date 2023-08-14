import { styled } from "styled-components";

import { TextButton } from "../TextButton/TextButton";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { CircleButton } from "../CircleButton/CircleButton";
import { LogoText } from "../../assets/images/Logo/LogoText";



const StyledNavBarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${(props) => (props.$isOpen ? "15vh" : "7vh")};
  box-sizing: border-box;
  padding: 1rem 1.5rem 2rem 1.5rem;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  border-radius: 0rem 0rem 2rem 2rem;
  background: ${(props) => props.theme.primary};
  box-shadow: ${(props) => props.theme.largeShadow};
  transition: height 0.3s ease-in-out;

  a {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    flex-direction: initial;
    padding-top: 2rem;
    .logo {
      margin-top: -1rem;
    }
  }
`;

const NavLinks = styled.div`
  pointer-events: ${(props) => (props.$isOpen ? "" : "none")};
  top: ${(props) => (props.$isOpen ? "3rem" : "0")};
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  transition: all ease-in-out 0.2s;
  display: flex;
  gap: 1rem;
  align-self: center;

  @media (min-width: 769px) {
    gap: 1rem;
    opacity: 1;
    pointer-events: all;
  }
`;

const HamburgerButton = styled.div`
  display: none;
  position: absolute;
  top: 0.75rem;
  right: 1.4rem;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const NavBar = ({ themeToggler, currentTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Obtener la ubicación actual

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <StyledNavBarContainer $isOpen={isMenuOpen}>
      <NavLink className={"logo"} to="/">
        <LogoText />
      </NavLink>
      <HamburgerButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <CircleButton
          icon={faEllipsisVertical}
          className={`small ${isMenuOpen ? "active" : ""}`}
        />
      </HamburgerButton>
      <NavLinks $isOpen={isMenuOpen}>
        <NavLink to="/home" onClick={() => setIsMenuOpen(false)}>
          <TextButton text="Home" isActive={location.pathname === "/home"} />
        </NavLink>
        <NavLink to="/setActivity" onClick={() => setIsMenuOpen(false)}>
          <TextButton
            text="Crear Actividad"
            isActive={location.pathname === "/setActivity"}
          />
        </NavLink>
        <CircleButton
          className={`small ${
            currentTheme === "dark" ? "dark-theme" : "light-theme"
          }`}
          onClick={themeToggler}
          icon={currentTheme === "dark" ? faSun : faMoon}
        ></CircleButton>
      </NavLinks>
    </StyledNavBarContainer>
  );
};
