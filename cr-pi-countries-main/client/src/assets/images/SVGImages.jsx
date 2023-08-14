import React from "react";
import { styled } from "styled-components";

const StyledSVG = styled.svg`
  path {
    fill: ${(props) => props.theme.text};
    color: ${(props) => props.theme.text}; // Cambia esto por tu color deseado
    fill: ${(props) => props.theme.text}; // Cambia esto por tu color deseado
    fill-rule: evenodd;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 4.1;
  }
`;

export const StyledChecklistSVG = () => {
  return (
    <StyledSVG
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.04832 2.48826C8.33094 2.79108 8.31458 3.26567 8.01176 3.54829L3.72605 7.54829C3.57393 7.69027 3.36967 7.76267 3.1621 7.74818C2.95453 7.7337 2.7623 7.63363 2.63138 7.4719L1.41709 5.9719C1.15647 5.64996 1.20618 5.17769 1.52813 4.91707C1.85007 4.65645 2.32234 4.70616 2.58296 5.0281L3.29089 5.90261L6.98829 2.45171C7.2911 2.16909 7.76569 2.18545 8.04832 2.48826ZM11.25 5C11.25 4.58579 11.5858 4.25 12 4.25H22C22.4142 4.25 22.75 4.58579 22.75 5C22.75 5.41422 22.4142 5.75 22 5.75H12C11.5858 5.75 11.25 5.41422 11.25 5ZM8.04832 9.48826C8.33094 9.79108 8.31458 10.2657 8.01176 10.5483L3.72605 14.5483C3.57393 14.6903 3.36967 14.7627 3.1621 14.7482C2.95453 14.7337 2.7623 14.6336 2.63138 14.4719L1.41709 12.9719C1.15647 12.65 1.20618 12.1777 1.52813 11.9171C1.85007 11.6564 2.32234 11.7062 2.58296 12.0281L3.29089 12.9026L6.98829 9.45171C7.2911 9.16909 7.76569 9.18545 8.04832 9.48826ZM11.25 12C11.25 11.5858 11.5858 11.25 12 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H12C11.5858 12.75 11.25 12.4142 11.25 12ZM8.04832 16.4883C8.33094 16.7911 8.31458 17.2657 8.01176 17.5483L3.72605 21.5483C3.57393 21.6903 3.36967 21.7627 3.1621 21.7482C2.95453 21.7337 2.7623 21.6336 2.63138 21.4719L1.41709 19.9719C1.15647 19.65 1.20618 19.1777 1.52813 18.9171C1.85007 18.6564 2.32234 18.7062 2.58296 19.0281L3.29089 19.9026L6.98829 16.4517C7.2911 16.1691 7.76569 16.1855 8.04832 16.4883ZM11.25 19C11.25 18.5858 11.5858 18.25 12 18.25H22C22.4142 18.25 22.75 18.5858 22.75 19C22.75 19.4142 22.4142 19.75 22 19.75H12C11.5858 19.75 11.25 19.4142 11.25 19Z"
      />
    </StyledSVG>
  );
};

export const StyledDatabaseSVG = () => {
  return (
    <StyledSVG
      width="800px"
      height="800px"
      viewBox="0 0 32 32"
      id="svg5"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(-348,-436)">
        <path d="m 371,455.01367 a 1,1 0 0 0 -1,1 v 3.58594 l -0.29297,-0.29297 A 1,1 0 0 0 369,459.01367 a 1,1 0 0 0 -0.70703,0.29297 1,1 0 0 0 0,1.41406 l 2,2 a 1.0001,1.0001 0 0 0 0.0469,0.0371 1,1 0 0 0 0.0859,0.0684 1.0001,1.0001 0 0 0 0.0898,0.0566 1,1 0 0 0 0.10547,0.0508 1.0001,1.0001 0 0 0 0.10352,0.0352 1,1 0 0 0 0.10547,0.0254 1.0001,1.0001 0 0 0 0.11914,0.0137 1,1 0 0 0 0.0508,0.006 1,1 0 0 0 0.0508,-0.006 1.0001,1.0001 0 0 0 0.11914,-0.0137 1,1 0 0 0 0.10547,-0.0254 1.0001,1.0001 0 0 0 0.10352,-0.0352 1,1 0 0 0 0.10547,-0.0508 1.0001,1.0001 0 0 0 0.0898,-0.0566 1,1 0 0 0 0.0859,-0.0684 1.0001,1.0001 0 0 0 0.0469,-0.0371 l 2,-2 a 1,1 0 0 0 0,-1.41406 1,1 0 0 0 -1.41406,0 L 372,459.59961 v -3.58594 a 1,1 0 0 0 -1,-1 z" />

        <path d="m 355,450.01367 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 4 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" />
        <path d="m 355,442.01367 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 4 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" />

        <path
          d="m 353,438.01367 c -1.6447,0 -3,1.3553 -3,3 v 4 c 0,0.76628 0.29675,1.46716 0.77734,2 -0.48059,0.53284 -0.77734,1.23372 -0.77734,2 v 4 c 0,0.76628 0.29675,1.46716 0.77734,2 -0.48059,0.53284 -0.77734,1.23372 -0.77734,2 v 4 c 0,1.6447 1.3553,3 3,3 h 13.11133 c 1.26351,1.23579 2.98973,2 4.88867,2 3.85414,0 7,-3.14585 7,-7 0,-2.78161 -1.63913,-5.19487 -4,-6.32226 v -3.67774 c 0,-0.76628 -0.29675,-1.46716 -0.77734,-2 0.48059,-0.53284 0.77734,-1.23372 0.77734,-2 v -4 c 0,-1.6447 -1.3553,-3 -3,-3 z m 0,2 h 18 c 0.5713,0 1,0.42871 1,1 v 4 c 0,0.5713 -0.4287,1 -1,1 h -18 c -0.5713,0 -1,-0.4287 -1,-1 v -4 c 0,-0.57129 0.4287,-1 1,-1 z m 0,8 h 18 c 0.5713,0 1,0.42871 1,1 v 3.07227 c -0.32711,-0.0472 -0.66021,-0.0723 -1,-0.0723 -1.89894,0 -3.62516,0.76421 -4.88867,2 H 353 c -0.5713,0 -1,-0.4287 -1,-1 v -4 c 0,-0.57129 0.4287,-1 1,-1 z m 18,6 c 2.77327,0 5,2.22674 5,5 0,2.77327 -2.22673,5 -5,5 -1.44074,0 -2.73243,-0.602 -3.64258,-1.56836 a 1,1 0 0 0 -0.16797,-0.18554 C 366.44728,461.38795 366,460.25556 366,459.01367 c 0,-1.25636 0.45901,-2.39958 1.2168,-3.27539 a 1,1 0 0 0 0.0645,-0.0762 c 0.91337,-1.01394 2.23794,-1.64844 3.71875,-1.64844 z m -18,2 h 11.67773 c -0.43469,0.9103 -0.67773,1.92747 -0.67773,3 0,1.07253 0.24304,2.0897 0.67773,3 H 353 c -0.5713,0 -1,-0.4287 -1,-1 v -4 c 0,-0.57129 0.4287,-1 1,-1 z"
          id="path453609"
          //style="color:#000000;fill:#000000;fill-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4.1;-inkscape-stroke:none"
        />
      </g>
    </StyledSVG>
  );
};

export const StyledRatingSVG = () => {
  return (
    <StyledSVG
      height="800px"
      width="800px"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 496"

    >
 <path d="M496,112C496,50.24,445.76,0,384,0H112C50.24,0,0,50.24,0,112s50.24,112,112,112h21.984 C104.56,253.784,88,293.552,88,336c0,88.224,71.776,160,160,160s160-71.776,160-160c0-42.448-16.56-82.216-45.984-112H384 C445.76,224,496,173.76,496,112z M320,460.512C298.792,472.832,274.24,480,248,480s-50.792-7.168-72-19.488V440 c0-39.696,32.296-72,72-72s72,32.304,72,72V460.512z M392,336c0,46.248-22.008,87.36-56,113.728V440c0-48.52-39.48-88-88-88 c-48.52,0-88,39.48-88,88v9.728c-33.992-26.368-56-67.48-56-113.728c0-43.8,19.592-84.448,53.8-112h45.048 C186.496,237.208,176,257.392,176,280c0,39.696,32.296,72,72,72s72-32.304,72-72c0-22.608-10.496-42.792-26.848-56H338.2 C372.408,251.552,392,292.2,392,336z M248,224c30.872,0,56,25.12,56,56s-25.128,56-56,56s-56-25.12-56-56S217.128,224,248,224z M112,208c-52.936,0-96-43.064-96-96s43.064-96,96-96h272c52.936,0,96,43.064,96,96c0,52.936-43.064,96-96,96H112z"></path> <path d="M392,149.88l44.528,23.416l-8.504-49.592l36.04-35.12l-49.8-7.232L392,36.232l-22.264,45.12L320,88.576l-49.736-7.224 L248,36.232l-22.264,45.12L176,88.576l-49.736-7.224L104,36.232l-22.264,45.12l-49.8,7.232l36.04,35.12l-8.504,49.592L104,149.88 l44.528,23.416l-8.504-49.592L176,88.648l35.976,35.064l-8.504,49.592L248,149.88l44.528,23.416l-8.504-49.592L320,88.648 l35.976,35.064l-8.504,49.592L392,149.88z M122.832,118.12l4.448,25.928L104,131.808l-23.28,12.24l4.448-25.928l-18.84-18.36 l26.032-3.784L104,72.392l11.64,23.584l26.032,3.784L122.832,118.12z M266.84,118.12l4.448,25.928L248,131.808l-23.28,12.24 l4.448-25.928l-18.84-18.36l26.032-3.784L248,72.392l11.64,23.584l26.032,3.784L266.84,118.12z M354.336,99.76l26.024-3.784 L392,72.392l11.64,23.584l26.032,3.784l-18.832,18.36l4.448,25.928L392,131.808l-23.28,12.24l4.448-25.928L354.336,99.76z"></path>
    </StyledSVG>
  );
};

export const StyledResponsivenesSVG = () =>{

  return (

<StyledSVG fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 480 480" >

<g>
	<g>
		<path d="M456,232V56c0-22.056-17.944-40-40-40H64c-22.056,0-40,17.944-40,40v120c-13.232,0-24,10.768-24,24v240
			c0,13.232,10.768,24,24,24h176c13.232,0,24-10.768,24-24h67.048c7.544,0,14.496-3.44,19.072-9.432s6.064-13.608,4.08-20.88
			L298.472,352H344v88c0,13.232,10.768,24,24,24h88c13.232,0,24-10.768,24-24V256C480,242.768,469.232,232,456,232z M208,440
			c0,4.408-3.592,8-8,8H24c-4.408,0-8-3.592-8-8v-16h192V440z M208,408H16V232h192V408z M208,216H16v-16c0-4.408,3.592-8,8-8h176
			c4.408,0,8,3.592,8,8V216z M298.768,413.896c0.664,2.424,0.168,4.96-1.36,6.96s-3.84,3.144-6.36,3.144H224v-16h73.16
			L298.768,413.896z M224,392v-40h57.888l10.912,40H224z M344,336H224v-48h120V336z M344,256v16H224v-72c0-13.232-10.768-24-24-24
			H40V56c0-13.232,10.768-24,24-24h352c13.232,0,24,10.768,24,24v176h-72C354.768,232,344,242.768,344,256z M464,440
			c0,4.408-3.592,8-8,8h-88c-4.408,0-8-3.592-8-8v-16h104V440z M464,408H360V288h104V408z M464,272H360v-16c0-4.408,3.592-8,8-8h88
			c4.408,0,8,3.592,8,8V272z"/>
	</g>
</g>
<g>
	<g>
		<rect x="41.372" y="327.994" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -218.8385 143.6649)" width="45.256" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="60.114" y="319.995" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -194.4378 186.5751)" width="135.767" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="86.054" y="272.005" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -162.8477 166.8601)" width="67.879" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="375.705" y="324.008" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -116.4408 382.9028)" width="56.559" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="391.702" y="356.042" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -134.4066 403.5971)" width="56.559" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="206.052" y="128.002" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -25.876 209.5337)" width="67.879" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="278.057" y="112.001" transform="matrix(0.7071 -0.7071 0.7071 0.7071 6.5281 255.7627)" width="67.879" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="233.364" y="168.01" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -49.4797 232.5655)" width="45.256" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="273.302" y="72.062" transform="matrix(0.7071 -0.7071 0.7071 0.7071 30.0796 232.7427)" width="45.368" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="56" y="48" width="16" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="88" y="48" width="16" height="16"/>
	</g>
</g>
<g>
	<g>
		<rect x="120" y="48" width="16" height="16"/>
	</g>
</g>

</StyledSVG>

  )
}