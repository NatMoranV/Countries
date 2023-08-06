import { styled } from "styled-components";

export const StyledComponente = styled.div`

display: flex;
flex-direction: column;
align-items: center;
margin: 0 0;

& img{
    width: 4rem;
    height: 4rem;
}

.title{

text-align: center;

font-size: 1.5rem;
font-style: normal;
font-weight: 600;
line-height: normal;
}

.description{

text-align: center;

font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 2rem;
}

`