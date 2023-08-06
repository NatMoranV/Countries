
import { Hero } from "../../components/Hero/Hero";
import { StyledLandingPage } from "./StyledLandingPage";
import { Section } from "../../components/Section/Section";
import { GridComponentes } from "../../components/Componente/GridComponentes";
import { LogoText } from "../../components/Logo/LogoText";



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
      <p>
        Todo esto lo ofrecemos de forma completamente gratuita. Nuestro objetivo
        es compartir el conocimiento y la diversidad de nuestro mundo, para que
        cada usuario tenga una experiencia enriquecedora.
      </p>
    </StyledLandingPage>
  );
};
