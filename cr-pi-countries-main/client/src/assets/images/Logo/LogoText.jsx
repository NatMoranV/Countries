import { Logo } from "./Logo"

import { styled } from "styled-components";

const StyledLogoText = styled.div`

display: flex;
align-items: center;
gap: .5rem;

&& h6{
    margin: 0;
    padding: 0;
}

`


export const LogoText = () =>{
return (
    <StyledLogoText className="LogoText">
        <Logo/>
        <h6>
            DiscoverLands
        </h6>

    </StyledLogoText>
)

}