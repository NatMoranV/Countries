import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  position: relative;
  width: 90%;
  box-sizing: border-box;
`;

const Label = styled.label`
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const InputField = styled.input`
  display: flex;
  width: 100%;
  height: 4.5rem;
  padding: 0rem 1.5rem;
  justify-content: space-between;
  border-radius: 3rem;
  background-color: ${(props) => props.theme.primary};
  box-shadow: ${(props) => props.theme.pressedShadow};
  border: none;
`;

const Helper = styled.span`
  font-size: .8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Button = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  top: 4.5rem;
  right: -1.5rem;
  cursor: pointer;
  font-size: 1.1rem;
`;

export const StyledInput = ({
  label,
  placeholder,
  type,
  icono,
  helper,
  actionButton,
  onChange,
  value,
  onKeyDown,
}) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputField
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onKeyDown={onKeyDown}
      />
      <Button onClick={actionButton}>
        <FontAwesomeIcon icon={icono} />
      </Button>
      <Helper>{helper}</Helper>
    </InputContainer>
  );
};
