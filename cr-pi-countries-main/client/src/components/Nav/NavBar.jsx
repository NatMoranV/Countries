import { styled } from "styled-components";
import { LogoText } from "../Logo/LogoText";
import { TextButton } from "../TextButton/TextButton";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { CircleButton } from "../CircleButton/CircleButton";

const StyledNavBarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${(props) =>
    props.$isOpen
      ? "15vh"
      : "7vh"}; 
  box-sizing: border-box;
  padding: 1rem 1.5rem;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  border-radius: 0rem 0rem 2rem 2rem;
  background: ${(props) => props.theme.primary};
  box-shadow: ${(props) => props.theme.largeShadow};
  transition: height 0.3s; 

  a {
    text-decoration: none;
  }

  @media (min-width: 768px) {
    flex-direction: initial;
  }
`;

const NavLinks = styled.div`
  display: none;
  @media (min-width: 769px) {
    display: flex;
    gap: 1rem;
  }
`;

const HamburgerButton = styled.div`
  display: none;
  position: absolute;
  top: .4rem;
  right: 1.4rem;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  pointer-events: ${(props) => (props.$isOpen ? "" : "none")};
  top: ${(props) => (props.$isOpen ? "3rem" : "0")};
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  transition: all ease-in-out 0.3s;
  margin: auto;
  width: auto;
  display: flex;
  padding: 1rem;
  gap: 1rem;
`;

export const NavBar = () => {
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
      <LogoText />
      <NavLinks>
        <NavLink to="/home">
          <TextButton text="Home" isActive={location.pathname === "/home"} />
        </NavLink>
        <NavLink to="/setActivity">
          <TextButton
            text="Crear Actividad"
            isActive={location.pathname === "/setActivity"}
          />
        </NavLink>

      </NavLinks>
      <HamburgerButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <CircleButton
          icon={faEllipsisVertical}
          className={`small ${isMenuOpen ? "active" : ""}`}
        />
      </HamburgerButton>
      <MobileMenu $isOpen={isMenuOpen}>
        <NavLink to="/home" onClick={() => setIsMenuOpen(false)}>
          <TextButton text="Home" isActive={location.pathname === "/home"} />
        </NavLink>
        <NavLink to="/setActivity" onClick={() => setIsMenuOpen(false)}>
          <TextButton
            text="Crear Actividad"
            isActive={location.pathname === "/setActivity"}
          />
        </NavLink>
      </MobileMenu>
    </StyledNavBarContainer>
  );
};
