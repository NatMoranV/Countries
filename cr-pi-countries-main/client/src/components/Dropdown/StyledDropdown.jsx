import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 14rem;
  position: relative;
  && label {
  }
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

export const Dropdown = ({
  option1,
  label,
  array,
  id,
  selectedValue,
  onChange,
}) => {
  const isDisabled = !array || array.length === 0;

  return (
    <DropdownContainer>
      <label htmlFor="continent">{label}</label>
      <StyledDropdown
        className={isDisabled ? "disabled" : ""}
        value={selectedValue}
        onChange={onChange}
      >
        <option value={option1}>{option1}</option>
        {array.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </StyledDropdown>
      <DropdownIcon>
        <FontAwesomeIcon icon={faCaretDown} />
      </DropdownIcon>
    </DropdownContainer>
  );
};
//     return (<DropdownContainer>
//         <label htmlFor="continent">{text}</label>
//         <StyledDropdown className="disabled" id={id} value={value} onChange={onChange}>
//           <option value="">Todos</option>
//           {array.map((item, index) => (
//             <option key={index} value={item}>
//               {item}
//             </option>
//           ))}
//         </StyledDropdown>
//         <DropdownIcon>
//           <FontAwesomeIcon icon={faCaretDown} className={"disabled" ? "disabled-icon" : ""}/>
//         </DropdownIcon>
//       </DropdownContainer>)
//   }
// const ContinentFilter = ({ continents, selectedContinent, onContinentChange }) => {
//     if (!continents || continents.length === 0) {
//       return null; // Mostrar algún indicador de carga o simplemente no renderizar si no hay datos
//     }

//     return (
//       <div className="filter">

//       </div>
//     );
//   };
