import styled from "styled-components";

export const StyledFooter = styled.nav`

align-self: stretch;
display: flex;
width: 99.7%;
height: 5vh;
overflow: hidden;

padding: .5rem;
justify-content: center;
align-items: center;
border-radius: 1rem 1rem 0 0;
background: ${(props) => props.theme.primary};


box-shadow: ${(props) => props.theme.largeShadow};

`;

export const Footer =() =>{
    return (


        <StyledFooter>
            <span>Natanael Morán | 2023</span>
        </StyledFooter>
  
    );
}