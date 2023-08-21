import styled from "styled-components";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { CircleButton } from "../CircleButton/CircleButton";
import { NavLink } from "react-router-dom";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const StyledFooter = styled.footer`
  align-self: stretch;
  display: flex;
  width: 100%;
  height: 7vh;
  overflow: hidden;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem 1rem 0 0;
  background: ${(props) => props.theme.primary};
  box-shadow: ${(props) => props.theme.footerShadow};
  margin-top: auto;
  box-sizing: border-box;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <span> Natanael Morán | 2023 </span>
      <ButtonsContainer>
        <NavLink to={"https://github.com/NatMoranV/Countries"} target="_blank">
          <CircleButton className={"small"} icon={faGithub} />
        </NavLink>
        <NavLink
          to={"https://www.linkedin.com/in/natmor%C3%A1n/"}
          target="_blank"
        >
          <CircleButton className={"small"} icon={faLinkedinIn} />
        </NavLink>
        {/* <NavLink to={"#"} target="_blank"><CircleButton className={"small"} icon={faBriefcase}/></NavLink> */}
      </ButtonsContainer>
    </StyledFooter>
  );
};
