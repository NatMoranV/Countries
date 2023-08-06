import { styled } from "styled-components";

export const StyledCard = styled.div`
display: flex;
width: auto;
height: auto;
padding: 1.5rem 1rem;
flex-direction: column;
align-items: center;
gap: 1rem;


border-radius: 1rem;
background: #FFF;
box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.10);

a {
    text-decoration: none;
}

img{
    display: flex;
    width: 13rem;
    height: 13rem;
flex-shrink: 0;
object-fit: cover;
border-radius: 6.5rem;
}
`