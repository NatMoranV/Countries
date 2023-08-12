import styled, { css } from "styled-components";
import { NavLink, useLocation } from "react-router-dom";

const StyledFooter = styled.footer`
  align-self: stretch;
  display: flex;
  width: 99.5%;
  height: 5vh;
  overflow: hidden;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem 1rem 0 0;
  background: ${(props) => props.theme.primary};
  box-shadow: ${(props) => props.theme.largeShadow};
  margin-top: auto;


  &[data-isbottom0="true"] {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const Footer = () => {
  const location = useLocation();
  const isBottom0 = location.pathname === "/setActivity";

  return (
    <StyledFooter data-isbottom0={isBottom0}>
      <span>Natanael Morán | 2023</span>
    </StyledFooter>
  );
};
