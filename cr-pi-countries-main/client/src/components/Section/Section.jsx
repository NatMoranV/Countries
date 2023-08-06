import { NavLink } from "react-router-dom"
import { StyledSection } from "./StyledSection"
import { TextButton } from "../TextButton/TextButton"


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