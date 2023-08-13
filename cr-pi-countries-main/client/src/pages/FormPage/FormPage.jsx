import { styled } from "styled-components";
import CreateActivityForm from "./CreateActivityForm";

const StyledFormPage = styled.div`
  margin: 8rem 8vw;
display: flex;
align-items: center;
flex-direction: column;
gap: 1.5rem;
`;

export const FormPage = () => {
  return (
    <StyledFormPage>
      <h4>Crear actividad</h4>
      <p>
        Aquí podrás guardar una actividad que conozcas que se puede realizar en algún país con este sencillo formulario.
      </p>
      <CreateActivityForm />
    </StyledFormPage>
  );
};
