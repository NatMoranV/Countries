import { NavLink } from "react-router-dom";
export const LandingPage = () =>{

    return(
        <div>
            <h1>Esta es la landing</h1>
            <NavLink to="/home"><button>Este botón manda al home</button></NavLink>
        </div>
    )
}