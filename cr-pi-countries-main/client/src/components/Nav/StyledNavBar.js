import styled from "styled-components";

export const StyledNavBarContainer = styled.nav`
  display: flex;
  height: 7vh;
  width: 99.15%;
  position: fixed;
  top: 0;
  z-index: 10;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  box-shadow: 20px 20px 50px ${props => props.theme.shadow};
  background-color: ${props => props.theme.background};
  backdrop-filter: blur(10px);

& div{
  display: flex;
gap: 16px;

}

  &.hidden{
    display: none;
  }
`;