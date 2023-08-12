import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.text};
    overflow-x: hidden;
  }
  
  *{
     font-family: Montserrat;
     color: ${(props) => props.theme.text}
  }

  select, input:focus {
    outline: none;
    border: none;}

  
  .disabled{
    box-shadow: none;
    border: 1px solid ${(props) => props.theme.textDisabled};
    color: ${(props) => props.theme.textDisabled} ;
    cursor: default;
    pointer-events: none;


  }
  
  h1{
    font-size: 4rem;
font-style: normal;
font-weight: 400;
line-height: normal;
  
  }

  h2{
    font-size: 2.5rem;
font-style: normal;
font-weight: 700;
line-height: normal;
  }
  
  h4{
    margin-bottom: 0;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: start;
  }
  
  h5{
    font-size: 1.5em;
    margin: 0 ;
    font-weight: 600;
  
  }
  h6{
    font-size: 1.5em;
    margin: 1rem 0 0 0;
  
  }
  
  p{
    font-size: 1.5rem;
  
  }
  
  
  .hidden{
    display: none
  }`;

export default GlobalStyle;
