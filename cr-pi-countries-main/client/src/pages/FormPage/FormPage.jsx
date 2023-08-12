import { styled } from "styled-components"
import CreateActivityForm from "./CreateActivityForm"



const StyledFormPage = styled.div`


`

export const FormPage = () =>{

    return(
        <StyledFormPage>
            <CreateActivityForm/>
        </StyledFormPage>
    )
}