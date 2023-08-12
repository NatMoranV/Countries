import { styled } from "styled-components"
import CreateActivityForm from "./CreateActivityForm"



const StyledFormPage = styled.div`

margin-top: 10rem;

`

export const FormPage = () =>{

    return(
        <StyledFormPage>
            <CreateActivityForm/>
        </StyledFormPage>
    )
}