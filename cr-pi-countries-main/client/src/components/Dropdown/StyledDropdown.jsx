import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  position: relative;
  min-width: 20rem;
`;
const Label = styled.label`
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const StyledDropdown = styled.select`
  appearance: none;
  display: flex;
  height: 4.5rem;
  padding: 1rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border: none;
  cursor: pointer;
  margin: 1rem 0;
  border-radius: 3rem;
  background: ${(props) => props.theme.primary};
  box-shadow: ${(props) => props.theme.shortShadow};
  font-size: 1rem;
  font-weight: 600;
  line-height: 3rem;

  &:active {
    box-shadow: ${(props) => props.theme.pressedShadow};
  }
`;

const DropdownIcon = styled.span`
  position: absolute;
  background: transparent;
  border: none;
  top: 4rem;
  right: 1.5rem;
  font-size: 1.1rem;
`;

const Helper = styled.span`
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Dropdown = ({
  onBlur,
  name,
  option1,
  label,
  array,
  id,
  selectedValue,
  onChange,
  helper,
}) => {
  const isDisabled = !array || array.length === 0;

  return (
    <DropdownContainer>
      <Label htmlFor={id}>{label}</Label>
      <StyledDropdown
        name={name}
        id={id}
        className={isDisabled ? "disabled" : ""}
        value={selectedValue}
        onChange={onChange}
        onBlur={onBlur}
      >
        {option1 && (<option value={option1}>{option1}</option>)}
        {array.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </StyledDropdown>
      <DropdownIcon>
        <FontAwesomeIcon icon={faCaretDown} />
      </DropdownIcon>
      <Helper>{helper}</Helper>
    </DropdownContainer>
  );
};

