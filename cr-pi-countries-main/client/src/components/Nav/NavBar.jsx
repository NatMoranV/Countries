

import { NavLink, useLocation } from "react-router-dom";

import { StyledNavContainer } from "../NavContainer/StyledNavContainer";
import { StyledNavBarContainer } from "./StyledNavBar";



export default function NavBar() {
  const location = useLocation();
  const isHidden = location.pathname === "/";

  return (
    <StyledNavContainer className={isHidden ? "hidden" : ""}>

      <StyledNavBarContainer>
        <NavLink to="/home">
          <button>Home</button>
        </NavLink>
      </StyledNavBarContainer>
    </StyledNavContainer>
  );
}