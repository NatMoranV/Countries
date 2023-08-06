import { NavLink } from "react-router-dom"
import { TextButton } from "../TextButton/TextButton"


import { styled } from "styled-components";

const StyledSection = styled.div`

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

p{
    margin-bottom: 10vh;
}

 a {
    text-decoration: none;
}
`

export const Section = () =>{

    return (
        <StyledSection>
        <h1>
            ¡Únete a nuestra comunidad global y empieza tu aventura de descubrimiento! 
        </h1>
        <p>Haz clic en el botón para explorar nuestro catálogo de países.</p>
        <NavLink to="/home" >
          <TextButton text="Explorar"/>
        </NavLink>

        </StyledSection>
    )
}