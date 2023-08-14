
import { Hero } from "../../components/Hero/Hero";
import { Section } from "../../components/Section/Section";
import { GridComponentes } from "../../components/Componente/GridComponentes";
import { styled } from "styled-components";
import { LogoText } from "../../assets/images/Logo/LogoText";

const StyledLandingPage = styled.div`
margin: 5vh 8vw;
display: flex;
align-items: center;
flex-direction: column;
gap: 1.5rem;

&& .LogoText{
    margin-bottom: 5rem;
}

& span{
  font-size: 1.5rem;
  font-weight: 500;
}

`



export const LandingPage = () => {
  return (
    <StyledLandingPage>
    <LogoText/>
      <Hero />
      <h2>
        Descubre el fascinante mundo de los países con nuestro catálogo de
        información global.{" "}
      </h2>
      <p>
        En nuestra plataforma, hemos creado una red de información sobre cada
        país, garantizando que obtendrás datos precisos y completos para
        satisfacer tu curiosidad. Nuestra misión es proporcionar la mejor
        experiencia a todos aquellos que desean explorar y conocer más sobre
        distintas naciones.
      </p>
      <Section/>
      <h2>¿Qué hace que nuestra plataforma sea única? </h2>
      <GridComponentes/>
      <span>
        Todo esto lo ofrecemos de manera completamente gratuita. <br/><br/> Nuestro objetivo
        es compartir el conocimiento y la diversidad de nuestro mundo, para que
        cada usuario tenga una experiencia enriquecedora.
      </span>
    </StyledLandingPage>
  );
};
