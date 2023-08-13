import React from "react";
import { Componente } from "./Componente";

import { styled } from "styled-components";

const StyledGridComponentes = styled.div`
  margin-top: 2vh;
  margin-bottom: 8vh;
  display: grid;
  gap: 5rem;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
`;

import { StyledChecklistSVG, StyledDatabaseSVG, StyledRatingSVG, StyledResponsivenesSVG } from "../../assets/images/SVGImages";

const componentData = [
  {
    SVG: StyledDatabaseSVG,
    title: "Amplia base de datos",
    description:
      "Nuestro catálogo cuenta con una extensa lista de países de todo el mundo, desde los más grandes y conocidos hasta aquellos más pequeños y menos explorados.",
  },
  {
    SVG: StyledChecklistSVG,
    title: "Información verificada",
    description:
      "Nos comprometemos a ofrecerte datos confiables y actualizados. Nuestro equipo se asegura de que la información sobre población, banderas, cultura, historia y más, esté siempre verificada.",
  },
  {
    SVG: StyledRatingSVG,
    title: "Opiniones y calificaciones",
    description:
      "Creemos en el poder de las experiencias compartidas. Los usuarios pueden dejar sus comentarios y calificar los países que han visitado o conocido. Esto brinda a otros usuarios referencias valiosas para su propia exploración.",
  },
  {
    SVG: StyledResponsivenesSVG,
    title: "Fácil navegación desde donde te encuentres",
    description:
      "Nuestra intuitiva interfaz te permite buscar y filtrar países según tus preferencias. Puedes seleccionar por continente, idioma, tamaño de población y más, para encontrar los países que más te interesen. Además, nuestro sitio es completamente responsivo y se puede disfrutar desde cualquier dispositivo.",
  },
];

export const GridComponentes = () => {
  return (
    <StyledGridComponentes>
      {componentData.map((component, index) => (
        <Componente
          key={index}
          SVG = {component.SVG}
          title={component.title}
          description={component.description}
        />
      ))}
    </StyledGridComponentes>
  );
};
