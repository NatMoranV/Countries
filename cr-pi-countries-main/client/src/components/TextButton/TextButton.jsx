import styled from "styled-components"

const StyledTextButton = styled.button`
display: flex;
padding: 0rem 1.5rem;
justify-content: center;
align-items: center;
gap: 0.625rem;
border: none;
cursor: pointer;
margin: 1vh 0;

border-radius: 3rem;
background: ${(props) => props.theme.primary};
box-shadow: ${(props) => props.theme.shortShadow};
font-size: 1.5rem;

font-weight: 700;
line-height: 3rem; 

&:active {

    box-shadow: ${(props) => props.theme.pressedShadow};}

`

export const TextButton = ({text}) =>{
    return(
<StyledTextButton>
    {text}
</StyledTextButton>
    )
}

