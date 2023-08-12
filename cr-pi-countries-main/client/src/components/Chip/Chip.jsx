import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes} from "@fortawesome/free-solid-svg-icons";




const StyledChip = styled.div`
width: auto;
display: inline-flex;
padding: 1rem 1.5rem;
align-items: center;
justify-content: space-between;
gap: 0.625rem;
border: none;
cursor: pointer;
margin: 1vh 0;

border-radius: 3rem;
background: ${(props) => props.theme.primary};


box-shadow: ${(props) => props.theme.pressedShadow};

`
const Label = styled.label`
display: flex;
width: auto;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Button = styled.button`

display: flex;
  width: 1.5rem;
  height: 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-shrink: 0;
  border: none;
  border-radius: 7rem;
  background: ${(props) => props.theme.primary};
  box-shadow: ${(props) => props.theme.shortShadow};
  font-size: 1rem;
  font-weight: 700;
  line-height: 3rem;
  cursor: pointer;

  &:active {
    box-shadow: ${(props) => props.theme.pressedShadow};
  }

`



export const Chip = ({text, onClick}) =>{
return(

    <StyledChip>

        <Label>{text}</Label>
        <Button onClick={onClick}>
          <FontAwesomeIcon icon={faTimes} />
        </Button>

    </StyledChip>
)

}