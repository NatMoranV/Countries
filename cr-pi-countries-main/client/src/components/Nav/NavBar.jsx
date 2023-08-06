
import { styled } from "styled-components";
import { LogoText } from "../Logo/LogoText";
import { TextButton } from "../TextButton/TextButton";
import { NavLink, useLocation } from "react-router-dom";


const StyledNavBarContainer = styled.nav`
display: flex;
width: 100%;
height: 7vh;
box-sizing: border-box;
padding: 0rem 1.5rem;
justify-content: space-between;
align-items: center;
  position: fixed;
  top: 0;
  left: 0;
z-index: 1;
border-radius: 0rem 0rem 2rem 2rem;
background: ${(props) => props.theme.primary};
box-shadow: ${(props) => props.theme.largeShadow};

a{
  text-decoration: none;
}


`;

export const NavBar = () => {

  return (


      <StyledNavBarContainer>

          <LogoText/>
          <NavLink to={`/home`}><TextButton text="Home" isActive={location.pathname === "/home"}/></NavLink>
          <NavLink to={`/activities`}><TextButton text="Crear Actividad" isActive={location.pathname === "/activities"}/></NavLink>

      </StyledNavBarContainer>

  );
}