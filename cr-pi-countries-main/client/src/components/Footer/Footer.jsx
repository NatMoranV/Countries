import styled from "styled-components";


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
  box-shadow: ${(props) => props.theme.footerShadow};
  margin-top: auto;



`;

export const Footer = () => {


  return (
    <StyledFooter >
      <span>Natanael Morán | 2023</span>
    </StyledFooter>
  );
};
