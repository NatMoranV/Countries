import { styled } from "styled-components";

export const StyledSection = styled.div`

display: flex;
padding: 10rem 7.5625rem;
flex-direction: column;
align-items: flex-start;
gap: 6.5rem;
align-self: stretch;
position: relative;
gap: 0;
left: -10vw;
margin: 5vh 0;
padding: 10vh 10vw ;
width: 98.1%;

background: ${(props) => props.theme.primary};
box-shadow: ${(props) => props.theme.largeShadow};


&& a {
    text-decoration: none;
}

`