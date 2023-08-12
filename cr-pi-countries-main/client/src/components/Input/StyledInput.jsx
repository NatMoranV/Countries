import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  min-width: 20rem;
`;

const Label = styled.label`
  font-size: 1rem;
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
  box-sizing: border-box;
`;

const Helper = styled.span`
  font-size: 0.8rem;
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
  name,
  id,
  label,
  placeholder,
  type,
  icono,
  helper,
  onClick,
  onChange,
  onBlur,
  value,
  onKeyDown,
}) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputField
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
      />
      {onClick && (
        <Button onClick={onClick}>
          <FontAwesomeIcon icon={icono} />
        </Button>
      )}
      <Helper>{helper}</Helper>
    </InputContainer>
  );
};
