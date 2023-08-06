import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledCircleButton = styled.button`
  display: flex;
  width: 4.5rem;
  height: 4.5rem;
  margin-top: 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-shrink: 0;
  border: none;
  border-radius: 7rem;
  background: ${(props) => props.theme.primary};
  box-shadow: ${(props) => props.theme.shortShadow};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 3rem;
  cursor: pointer;

  &:active {
    box-shadow: ${(props) => props.theme.pressedShadow};
  }

  &.active{
      box-shadow: ${(props) => props.theme.pressedShadow};
    }
`;

export const CircleButton = ({icon, onClick, className, content}) => {
  return (
    <StyledCircleButton onClick={onClick} className={className}>
      {icon !== undefined ? <FontAwesomeIcon icon={icon} /> : content}
    </StyledCircleButton>
  );
};
