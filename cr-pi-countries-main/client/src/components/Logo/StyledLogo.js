import { styled } from "styled-components";

export const StyledLogo = styled.svg`
width: 32px;
  height: 32px;
  /* Accediendo a la propiedad 'text' del tema y usándola como valor de 'fill' */
  path {
    fill: ${(props) => props.theme.text};
  }
`