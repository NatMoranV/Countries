import React from "react";
import { Componente } from "./Componente";
import { StyledGridComponentes } from "./StyledGridComponentes";

import img1 from "../../assets/images/servidor.png";
import img2 from "../../assets/images/liza.png";
import img3 from "../../assets/images/opinion.png";
import img4 from "../../assets/images/sitio.png";

const title1 = "Amplia base de datos";
const title2 = "Información verificada";
const title3 = "Opiniones y calificaciones";
const title4 = "Fácil navegación";

const desc1 =
  "Nuestro catálogo cuenta con una extensa lista de países de todo el mundo, desde los más grandes y conocidos hasta aquellos más pequeños y menos explorados.";
const desc2 =
  "Nos comprometemos a ofrecerte datos confiables y actualizados. Nuestro equipo se asegura de que la información sobre población, banderas, cultura, historia y más, esté siempre verificada.";
const desc3 =
  "Creemos en el poder de las experiencias compartidas. Los usuarios pueden dejar sus comentarios y calificar los países que han visitado o conocido. Esto brinda a otros usuarios referencias valiosas para su propia exploración.";
const desc4 =
  "Nuestra intuitiva interfaz te permite buscar y filtrar países según tus preferencias. Puedes seleccionar por continente, idioma, tamaño de población y más, para encontrar los países que más te interesen.";

export const GridComponentes = () => {
  return (
    <StyledGridComponentes>
      <Componente img={img1} title={title1} description={desc1} />
      <Componente img={img2} title={title2} description={desc2} />
      <Componente img={img3} title={title3} description={desc3} />
      <Componente img={img4} title={title4} description={desc4} />
    </StyledGridComponentes>
  );
};
