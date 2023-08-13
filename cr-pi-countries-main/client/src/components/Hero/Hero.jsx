import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledHero = styled.svg`
  width: 82.5rem;
  height: 41.438rem;
  transform: scale(${props => props.scale});
  transform-origin: top center;
  margin-bottom: ${props => props.marginBottom};
  

`


function calculateScale(screenWidth) {
  const minScale = 0.1;
  const maxScale = 1.0;
  
  const scaleFactor = (maxScale - minScale) * (screenWidth / 1920) + minScale;

  return scaleFactor;
}

function calculateMargin(screenWidth) {

  const maxMargin = 3; 
  const minMargin = -33;  


  const margin = (maxMargin - minMargin) * (screenWidth / 1920) + minMargin;

  return margin;
}

export const Hero = () => {
  const [scale, setScale] = useState(calculateScale(window.innerWidth));
  const [marginBottom, setMarginBottom] = useState(
    calculateMargin(window.innerWidth)
  );

  const updateScaleAndMargin = () => {
    const screenWidth = window.innerWidth;
    const newScale = calculateScale(screenWidth);
    const newMarginBottom = calculateMargin(screenWidth) + 'rem';

    setScale(newScale);
    setMarginBottom(newMarginBottom);
    console.log(marginBottom);
  };

  useEffect(() => {
    updateScaleAndMargin();
    window.addEventListener('resize', updateScaleAndMargin);

    return () => {
      window.removeEventListener('resize', updateScaleAndMargin);
    };
  }, []);

  return (
    <StyledHero xmlns="http://www.w3.org/2000/svg" scale={scale} marginBottom={marginBottom}>
<path
      d=
"M481.131 3.2c-9.695 2.578-14.027 3.093-29.91 3.712-20.627.825-22.69 1.444-27.228 8.87-3.61 5.879-6.91 6.497-18.462 3.713-11.551-2.785-18.152-2.372-25.681 1.34-5.26 2.682-11.964 9.386-14.955 14.956-1.547 2.99-8.044 6.91-14.439 8.87-2.784.824-2.269 4.537 1.032 7.838 3.713 3.713 11.448 5.363 20.73 4.538 8.148-.825 13.821.722 16.09 4.125.825 1.238 4.125 10.83 7.322 21.35 6.498 21.246 7.529 23.721 12.067 28.465 6.91 7.323 13.821 6.704 25.681-2.372 12.171-9.282 16.709-11.242 40.739-17.43 14.852-3.92 25.991-8.354 29.91-12.067 1.547-1.444 2.579-3.92 2.991-7.013l.619-4.848 6.085-.619c10.829-.928 13.717-4.744 11.242-15.16-2.475-11.036-2.475-12.068.309-14.852 1.341-1.341 4.538-3.094 7.014-3.816 2.475-.722 4.847-1.857 5.26-2.476 1.65-2.269.825-9.488-1.341-12.273-2.682-3.404-6.188-3.507-13.614-.103-7.735 3.61-9.798 2.681-14.233-6.188-4.126-8.251-8.045-11.861-12.583-11.758-1.856.103-8.354 1.547-14.645 3.197Zm20.111 3.609c1.135 1.444 2.991 4.744 4.126 7.22 4.125 9.488 10.107 11.86 18.565 7.529 5.26-2.682 8.869-2.682 10.313.103 1.96 3.61.516 6.6-3.919 7.941-5.569 1.65-9.076 4.745-10.52 8.973-1.031 3.094-.825 4.848 1.135 11.345 2.062 7.22 2.165 7.839.515 10.314-1.444 2.269-2.372 2.578-7.632 2.578-7.735 0-9.695 1.444-10.417 7.839-.515 4.228-1.134 5.363-4.022 7.323-4.951 3.3-12.892 6.085-30.632 10.726-18.358 4.847-26.403 8.457-36.098 15.883-11.242 8.56-15.676 9.592-21.143 5.054-4.435-3.817-6.188-7.736-12.376-28.26-6.291-21.04-7.22-23.103-11.655-25.784-2.784-1.754-5.26-2.063-15.161-2.063-9.282 0-12.686-.413-15.367-1.856-4.744-2.373-4.951-3.61-.825-5.157 5.775-2.063 13.098-7.426 13.098-9.592 0-3.094 7.22-10.314 12.892-12.892 6.085-2.888 13.718-3.197 22.175-.928 11.551 3.094 18.564 1.547 22.69-5.157 4.125-6.704 5.569-7.117 26.712-7.839 15.883-.618 20.834-1.134 28.466-3.3 12.686-3.507 16.296-3.507 19.08 0ZM945.866 50.952c-3.61.825-11.551 3.094-17.74 5.156-6.085 2.063-17.739 4.848-25.887 6.189-16.605 2.784-24.34 5.156-30.735 9.385-3.61 2.372-4.538 2.681-4.95 1.444-.929-2.888-7.117-7.839-11.242-9.076-10.211-3.094-17.121-.928-31.251 9.695-14.026 10.52-16.192 11.242-51.568 15.367-12.17 1.34-24.134 2.785-26.507 3.094l-4.228.62.103-3.61c.103-5.054-2.888-8.767-9.592-12.17-11.757-5.88-30.528-5.983-50.124-.31-15.368 4.538-40.842 16.09-50.125 22.896-11.551 8.354-12.583 19.802-2.372 26.094l3.404 2.062-3.817 3.92c-2.062 2.166-5.363 5.879-7.425 8.251-6.189 7.322-10.83 5.878-21.247-6.498-7.632-9.076-11.654-11.861-17.327-11.861-6.291 0-7.116 1.444-6.497 11.655.619 9.591 2.991 15.47 7.838 19.389l2.991 2.476-3.919 3.713c-4.538 4.125-5.054 7.013-2.372 12.686 2.681 5.466 1.444 7.941-7.323 13.923-8.56 5.982-10.829 9.179-10.829 15.78 0 5.673 2.991 10.623 7.838 12.892l3.61 1.753-3.404 1.238c-2.372.825-3.3 1.753-3.197 3.094.31 3.094-5.054 12.892-14.026 25.578-14.955 21.04-19.287 34.035-18.359 54.766.825 19.596 6.601 34.551 18.462 47.443 12.273 13.408 19.802 14.439 40.326 5.569 4.023-1.753 10.004-3.403 13.202-3.713 5.466-.515 5.982-.412 7.632 2.166 2.475 3.713 7.013 5.982 12.479 6.085 4.126 0 4.538.207 3.92 2.063-1.238 3.816-.516 21.04 1.031 27.228.928 3.301 3.094 9.592 4.847 13.82 4.642 10.727 4.642 20.318 0 38.058-4.331 16.399-5.053 26.712-2.784 38.161 2.991 14.645 8.457 24.753 20.937 38.47 4.538 5.053 8.044 10.417 11.138 16.811 6.601 13.82 12.686 17.74 22.897 14.955 10.107-2.682 16.295-8.973 22.69-22.793 6.188-13.511 8.663-17.843 15.264-26.3 8.56-11.036 9.798-13.717 11.448-24.753 1.547-10.211 2.372-11.551 11.964-17.121 8.767-5.157 10.933-16.399 5.982-31.869-5.363-16.811-2.991-25.269 12.995-46.927 5.054-6.911 10.933-15.677 12.996-19.7 4.744-8.973 9.901-24.237 10.313-30.322l.31-4.641-9.283.309c-8.354.31-9.591.104-12.892-2.062-1.959-1.341-5.157-4.642-7.219-7.22-4.023-5.363-15.883-26.506-15.265-27.125.207-.206 3.61 4.744 7.529 11.139 9.077 14.645 10.624 16.192 15.987 16.192 7.529 0 34.86-12.067 45.071-19.802 9.591-7.323 13.51-20.318 8.56-28.466-2.475-4.022-2.475-4.022 11.242-.722 27.537 6.704 37.645 18.152 44.452 50.228 2.372 11.139 4.125 14.645 8.148 16.296 3.919 1.547 7.219.825 11.345-2.579 4.022-3.403 5.157-7.323 6.188-20.524 1.031-12.067 3.3-17.533 9.592-22.793 7.322-6.189 17.636-7.632 25.371-3.713 5.57 2.888 11.242 9.798 12.377 14.955l.825 4.228 4.641-.206 4.641-.206 5.982 10.21c3.197 5.673 6.395 10.623 7.013 10.933.619.412 1.754-.103 2.579-1.238 1.341-1.856 1.547-1.753 3.919 1.238 2.888 3.713 9.179 6.601 14.542 6.601 6.499 0 12.269-4.435 15.369-11.552 2.16-5.363 1.96-8.973-.93-14.542-1.65-3.301-1.96-4.848-1.13-4.848 2.27 0 6.6-6.085 7.22-10.107 1.44-8.663 3.71-11.448 16.08-20.112 8.26-5.672 11.76-9.695 15.06-17.017 6.6-14.233 4.44-32.179-5.36-44.143-4.23-5.054-4.33-5.569-1.55-5.569 5.06 0 8.05 2.991 12.28 11.654 5.98 12.686 12.58 17.224 19.59 13.614 5.26-2.681 6.4-6.291 6.19-19.493-.31-14.645.21-15.573 12.27-21.658 10.21-5.157 14.65-9.283 17.74-16.399 4.54-10.108 3.72-21.865-2.06-31.044l-2.99-4.642 2.78-2.062c4.34-3.094 13.82-5.879 28.57-8.354 7.33-1.238 15.16-2.991 17.33-3.713 2.27-.825 4.43-1.444 4.85-1.444.41 0-.83 3.094-2.79 6.807-8.04 15.161-4.43 29.91 8.87 35.788 5.47 2.373 10.11 1.754 14.54-2.062 4.34-3.61 5.78-6.704 7.84-16.915 3.61-17.946 7.12-21.04 27.85-24.65 13.92-2.372 21.87-5.775 25.68-10.726 7.22-9.592 2.79-21.968-10-27.434-5.06-2.166-6.09-2.27-26.51-1.547-17.53.618-22.79.412-30.01-.928-15.78-2.992-40.33-9.799-61.99-17.121-11.75-4.023-22.69-7.22-24.54-7.22-4.85 0-7.33 3.094-7.33 9.282 0 5.054 0 5.054-3.71 5.776-8.56 1.547-29.81-1.444-59.2-8.354-10.52-2.475-23-5.26-27.847-6.188-12.273-2.475-36.82-2.991-45.277-1.031Zm41.667 4.228c5.157.928 19.077 3.92 31.047 6.704 26.92 6.291 39.09 8.148 52.8 8.148 12.9 0 14.65-1.135 14.65-9.282 0-3.817.41-5.364 1.65-5.88.93-.309 12.17 2.992 24.96 7.323 26.3 8.767 55.8 16.605 70.03 18.359 7.32.928 12.48.928 23.31-.103 14.85-1.444 20.62-1.032 26.5 1.96 7.84 4.022 11.04 10.21 8.67 17.12-2.48 7.323-8.77 10.52-26.2 13.408-10.42 1.65-17.64 4.332-21.45 7.941-3.82 3.507-5.88 8.561-8.46 19.803-1.96 8.56-2.89 10.829-5.67 13.614-3.82 3.816-7.94 4.435-12.69 1.959-12.99-6.807-12.89-22.38.31-40.636 4.85-6.807 3.82-8.973-2.16-4.95-5.88 3.816-11.66 5.569-27.95 8.354-20.32 3.506-26 5.569-32.49 11.654l-2.79 2.579 2.68 3.197c7.02 8.251 8.67 21.246 4.03 31.044-3.1 6.704-5.99 9.179-16.81 14.852-12.69 6.704-13.21 7.735-13.21 23.206 0 14.542-1.34 18.152-6.7 18.152-4.44 0-8.04-3.713-12.79-13.408-4.64-9.592-8.15-12.583-14.64-12.583-3.31 0-7.64 2.476-7.64 4.332 0 .413 1.86 2.682 4.13 5.054 11.65 12.17 13.61 30.941 4.85 45.586-2.48 4.126-5.99 7.529-13.62 13.305-11.45 8.663-14.54 12.48-15.57 19.183-.72 5.26-3.82 9.695-6.6 9.695-2.48 0-6.19-6.085-6.19-10.21 0-4.126-2.68-4.332-4.229-.413-1.857 4.848-.31 9.179 4.849 13.305 5.57 4.641 7.63 8.251 7.63 13.511 0 7.735-6.08 14.026-13.511 13.923-5.466-.103-10.313-2.991-12.582-7.735-2.063-4.229-2.888-4.538-4.848-2.269-.722.825-1.65 1.547-1.959 1.547-.413 0-3.301-4.435-6.395-9.798l-5.569-9.901-4.332.619c-3.61.515-4.435.309-4.435-1.032 0-2.578-2.991-7.941-6.601-11.654-9.901-10.623-25.887-11.036-37.129-1.135-7.22 6.292-9.901 12.893-10.829 26.61-.929 12.17-2.269 15.78-6.807 17.842-3.094 1.341-7.323.413-8.251-1.959-.413-1.032-2.269-7.942-4.126-15.368-4.332-17.43-8.457-25.99-16.502-34.035-9.076-9.179-13.717-11.035-44.452-18.358-13.098-3.094-24.443-7.632-35.169-14.13-4.642-2.785-8.973-5.054-9.489-5.054-1.856 0-3.403 4.332-2.888 7.839.31 1.959 1.547 4.95 2.785 6.601 3.713 5.26 7.426 6.497 21.968 7.322 9.798.516 14.13 1.238 17.018 2.682 4.95 2.578 7.735 7.735 6.91 13.098-1.65 11.345-10.52 18.462-36.923 29.394-13.099 5.466-16.399 6.085-18.977 3.507-2.476-2.475-41.358-64.564-43.215-69.102-1.856-4.332-1.753-9.592.103-12.067.825-1.134 1.547-2.372 1.547-2.785 0-1.237-14.336-9.798-23.102-13.82l-8.045-3.713-5.569 4.229-5.467 4.125-8.56-12.376c-4.744-6.807-9.282-12.377-10.21-12.377-2.785 0-7.22 5.673-7.839 9.902l-.516 4.022-8.044-8.045c-9.901-9.695-18.565-14.233-27.125-14.233-8.973 0-12.892 2.269-24.341 14.13-10.623 11.139-14.851 13.82-21.246 13.82-4.847 0-7.323-1.444-9.282-5.156-3.404-6.601-1.238-11.139 8.56-17.843 10.314-7.013 12.48-11.139 8.973-17.224-3.61-6.291-.825-10.829 8.251-13.408 5.26-1.444 6.395-4.125 1.65-4.125-4.228 0-9.591-4.023-12.17-9.283-2.991-5.878-3.403-18.255-.619-19.286 2.888-1.135 8.767 2.991 15.471 11.035 12.583 15.058 19.596 15.78 29.703 3.095 4.745-5.982 6.292-7.22 8.767-7.22 2.269 0 3.403.825 5.26 3.816 3.61 6.188 7.22 9.489 10.932 10.211 6.601 1.237 14.852-3.404 22.381-12.893 6.188-7.735 10.314-10.623 15.368-11.035 7.735-.722 7.838-4.744.206-4.435-8.251.516-14.542-6.291-13.511-14.439.928-7.014-2.166-9.076-8.664-5.776-4.744 2.475-6.188 6.395-6.188 16.502 0 10.829-1.547 14.439-6.704 15.883-6.6 1.753-20.421-3.3-27.022-9.798-4.538-4.538-1.856-12.273 6.189-17.843 10.21-7.013 35.479-18.049 50.537-22.277 22.071-6.085 46.102-3.713 51.981 5.26 2.578 4.022.825 7.941-3.816 8.663-5.363.722-4.848 3.61.515 3.507 6.704-.31 65.492-7.632 70.546-8.87 6.601-1.547 12.583-4.847 23.309-12.582 11.036-8.045 17.224-10.314 23.928-8.87 2.475.618 5.672 1.856 7.116 2.784 3.301 2.063 5.879 7.014 5.054 9.592-1.032 3.404 1.753 3.61 4.538.413 6.188-7.22 14.336-10.52 32.385-13.408 12.686-1.96 18.358-3.3 33.21-8.148 18.049-5.879 31.869-6.6 53.631-2.99Zm-314.361 47.443c-.825 4.229 1.134 9.489 5.157 13.924l3.713 4.125-3.198 2.785c-1.753 1.547-5.053 5.053-7.322 7.838-8.251 10.211-17.74 13.82-22.484 8.561-1.135-1.238-2.579-3.198-3.197-4.435-1.135-2.063-.929-2.166 3.919-1.651 6.291.619 10.623-1.134 13.717-5.363 1.96-2.784 2.269-4.331 2.063-12.376-.31-11.448 1.547-15.677 6.807-15.986.928-.103 1.237.722.825 2.578Zm-38.78 87.563c3.507 1.754 8.973 6.189 14.646 12.067 7.426 7.529 9.179 8.87 9.695 7.323.412-1.031 1.134-2.166 1.753-2.578.619-.413 1.134-2.166 1.238-4.023.103-1.753 1.134-4.125 2.269-5.26 1.959-2.062 2.062-1.959 10.623 10.417 4.744 6.807 9.282 12.48 10.107 12.48.722 0 3.61-1.96 6.395-4.229l5.156-4.229 10.52 5.26c14.646 7.323 15.471 8.045 14.027 12.274-.619 1.856-.825 4.641-.412 6.188.618 2.785.618 2.785-3.301-1.031-5.569-5.467-11.964-7.839-23.515-9.076-11.036-1.135-13.305-.826-20.215 2.784-5.776 2.991-6.704 2.785-21.04-3.403-10.21-4.435-10.314-4.641-13.408-10.417-5.982-11.551-15.676-13.408-36.51-7.117-6.291 1.857-11.448 3.404-11.448 3.301 0-.103 4.331-4.744 9.591-10.417 5.364-5.776 11.242-10.932 13.615-12.067 5.466-2.578 12.892-1.856 20.214 1.753Zm-5.569 19.081c3.507 1.547 4.951 3.094 7.426 8.044l3.094 6.085 11.139 4.951c14.336 6.291 18.977 6.91 25.578 3.094 4.641-2.785 5.26-2.888 14.233-2.269 19.389 1.341 25.578 5.569 30.631 20.937 1.857 5.363 3.713 8.251 9.386 14.336 5.878 6.394 8.354 10.314 14.336 22.381 16.708 34.344 24.546 42.286 40.017 40.739 2.888-.31 5.363-.207 5.363.103 0 .412-.928 4.228-2.063 8.457-3.3 11.964-10.21 25.062-20.73 39.192-16.708 22.69-19.081 30.941-13.924 49.712 4.641 17.121 3.197 24.959-5.775 29.704-9.283 5.053-10.624 7.219-12.171 19.286-1.134 8.561-3.197 13.099-9.488 21.04-7.117 8.767-10.417 14.13-15.264 24.856-2.476 5.466-6.086 12.067-7.942 14.646-6.291 8.766-19.183 12.685-25.475 7.735-1.444-1.135-4.744-6.395-7.219-11.552-3.198-6.703-6.807-11.963-12.171-17.945-14.542-16.193-19.389-27.332-20.111-45.69-.516-11.036-.31-12.892 3.197-26.712 5.157-20.628 5.157-27.538-.309-41.668-6.292-16.399-7.529-25.475-5.157-38.264 1.237-7.013.412-8.56-3.507-6.703-4.229 1.959-9.489.309-14.233-4.435-4.022-4.126-4.228-4.229-9.695-3.507-2.991.309-10.829 2.682-17.327 5.26-18.049 7.013-23.309 6.188-34.035-5.673-11.654-12.892-17.43-28.672-17.533-47.958-.103-19.081 3.713-29.497 18.049-49.815 4.538-6.292 9.592-14.44 11.242-18.049 1.753-3.507 3.506-7.117 3.919-7.942.412-.825 5.157-2.785 10.52-4.435 37.645-11.242 38.47-11.345 45.999-7.941Zm167.185 43.523 10.004 5.054-8.354-.412c-12.067-.722-17.946-4.435-17.946-11.345v-2.888l3.198 2.269c1.753 1.237 7.632 4.538 13.098 7.322Zm-66.833 1.651c4.641 7.219 5.157 8.663 2.063 5.878-2.579-2.372-5.673-7.322-6.704-10.829-1.031-3.403-.309-2.681 4.641 4.951ZM158.312 59.1c-2.784 1.34-6.291 3.61-7.632 5.053-3.197 3.507-2.269 4.744 7.529 9.592l7.323 3.61-14.955-.516c-8.251-.31-27.434-.825-42.802-1.238-23.721-.515-29.085-.928-36.614-2.784-12.067-3.094-31.972-2.991-43.73.206C12.064 77.148-1.962 85.296 3.401 87.05c.618.206 5.363 1.65 10.52 3.094 10.52 3.197 10.313 3.919-2.063 5.466-12.79 1.753-14.955 5.982-7.839 15.883 2.682 3.713 3.92 6.395 3.61 7.735-.515 1.754.413 2.269 6.395 4.126l6.91 2.063-8.87 7.632c-4.95 4.228-8.973 7.941-8.973 8.457 0 1.753 6.188 2.991 13.717 2.578 7.633-.515 8.767-.928 26.816-9.901 10.314-5.157 20.524-9.901 22.587-10.52 6.498-1.959 17.224-1.444 24.65 1.238 16.914 6.188 38.676 25.99 47.236 42.802 1.96 4.022 4.745 12.995 7.426 24.649 5.054 21.865 9.386 34.964 17.018 50.95 7.838 16.399 17.946 33.107 19.905 32.798 2.166-.413 3.404-7.22 2.888-15.058-.309-3.507-.309-6.395-.206-6.395.206 0 1.65 3.816 3.197 8.457 8.664 26.61 14.13 32.282 41.152 43.112 26.093 10.52 30.528 13.614 38.057 26.609 6.601 11.551 10.52 14.645 18.359 14.645 2.475 0 5.156-.412 5.982-1.031 2.062-1.238 3.094.516 3.094 5.466 0 4.538-.516 5.57-7.736 16.708-7.529 11.449-9.901 18.359-10.52 30.941-.928 16.915 2.682 27.435 14.646 43.318 9.798 13.098 12.067 18.255 12.686 29.807.515 11.448-1.135 20.421-8.251 43.42-18.359 59.613-26.197 110.666-19.596 127.374 2.991 7.632 7.529 12.892 14.026 16.296 7.22 3.816 19.39 3.919 26.403.309 5.054-2.578 9.283-6.085 9.283-7.632 0-.516-1.65-2.785-3.713-5.054-4.641-5.156-6.498-9.488-7.323-17.327-.825-8.25.928-16.501 6.91-31.972 2.785-7.116 5.673-15.471 6.395-18.461 1.444-5.57 1.444-5.57 6.807-6.911 10.107-2.578 21.143-9.901 28.466-18.874 2.372-2.784 6.394-6.704 8.972-8.766 10.417-7.942 18.771-20.215 23.619-34.654 2.991-8.973 5.776-11.655 16.914-15.987 19.493-7.632 25.372-15.161 27.95-35.994 1.754-14.233 2.682-16.709 10.314-25.888 7.117-8.663 8.56-11.448 9.386-17.327 1.237-8.766-5.879-18.771-17.121-24.34-3.094-1.547-10.211-4.641-15.883-6.807-12.377-4.848-16.812-8.664-26.197-22.587-8.457-12.583-13.098-16.089-31.663-23.412-17.018-6.704-18.049-7.22-27.022-14.027-5.879-4.538-8.457-5.879-12.273-6.291-2.682-.31-5.673-1.341-6.704-2.372-3.507-3.507-8.767-1.754-17.533 5.982-7.117 6.291-11.036 8.044-16.09 7.013-5.672-1.031-9.282-5.466-10.21-12.686-1.032-8.457-1.857-10.107-8.664-16.914-5.157-5.054-6.188-6.704-6.188-9.592 0-2.475.619-3.816 2.063-4.641 4.331-2.269 1.34-7.632-4.951-8.87-2.269-.413-5.363.103-9.488 1.547-8.458 3.094-13.202 2.578-16.09-1.65-3.3-4.951-5.054-15.368-3.506-20.937 2.269-8.56 10.829-12.995 20.008-10.417 9.076 2.476 15.161 10.417 20.318 26.403 2.578 8.045 4.126 11.139 7.116 14.13 4.332 4.435 9.695 5.879 14.027 3.713 4.744-2.269 5.26-4.332 2.269-7.942-6.394-7.529-6.497-18.152-.516-30.219 3.92-7.941 40.327-55.797 46.309-60.954 4.229-3.609 8.663-3.609 17.739-.206 9.18 3.404 13.099 3.404 17.327-.412 2.888-2.579 3.301-3.61 3.301-8.045 0-9.076-6.498-15.78-16.811-17.43-2.991-.516-3.92-1.032-2.991-1.547 1.753-1.238 8.56-3.094 14.026-4.023 4.332-.722 4.538-.618 6.395 2.991 3.713 7.323 10.417 11.449 18.667 11.449 9.18 0 15.884-6.189 13.408-12.48-1.65-4.538-13.304-19.184-20.524-25.784-5.673-5.26-17.636-13.821-26.609-19.081-1.65-.928-1.032-1.34 4.125-2.991 6.085-1.959 16.502-8.044 19.081-11.138 1.856-2.373.721-3.61-9.592-10.417-11.345-7.53-23.515-13.408-35.995-17.637-17.74-5.878-26.094-7.22-45.071-7.22-16.192 0-17.327.104-22.69 2.682-3.094 1.444-9.179 5.26-13.614 8.355-8.251 5.981-15.471 8.663-20.524 7.528-2.682-.618-2.991-1.134-2.991-4.538 0-3.816-2.269-7.941-6.188-11.242-3.61-3.094-9.283-4.537-20.525-5.363-6.601-.515-16.914-2.062-22.999-3.506-14.543-3.507-24.237-3.507-31.251-.206Zm33.004 4.228c5.673 1.34 14.749 2.785 20.112 3.094 13.201.928 16.502 1.857 20.627 6.188 2.785 2.888 3.507 4.538 3.61 7.839.103 5.466 2.372 7.116 9.385 7.116 6.601 0 12.274-2.372 21.04-8.766 3.61-2.785 9.18-6.189 12.377-7.633 5.363-2.475 6.497-2.681 20.627-2.578 22.381.206 42.08 4.95 62.398 15.058 8.87 4.435 24.237 14.233 24.237 15.367 0 1.341-10.004 7.117-15.986 9.18-7.942 2.784-10.417 2.578-21.865-1.032-5.26-1.753-10.52-3.094-11.655-3.094-3.197 0-10.829-7.735-13.82-13.923-2.888-6.292-5.26-7.22-8.87-3.61-1.65 1.65-2.062 3.197-1.856 7.323.206 4.64-.103 5.569-2.579 7.735-4.022 3.403-8.869 4.022-20.421 2.475-11.964-1.547-16.605-.722-21.452 4.126-4.229 4.228-4.848 8.147-2.269 13.201 5.879 11.655 22.793 18.359 36.407 14.646 10.004-2.785 18.977-12.48 22.175-23.928 1.444-5.157 2.062-5.982 4.125-5.982 1.444 0 4.538 1.238 7.117 2.681 5.156 2.991 13.717 5.57 18.874 5.57 4.847 0 20.008 8.148 29.909 16.192 9.076 7.22 15.677 14.233 22.484 23.825 5.466 7.529 5.363 10.314-.103 12.995-4.538 2.166-7.323 2.063-12.583-.309-4.847-2.166-8.251-6.085-9.179-10.623l-.722-3.198-6.394.619c-10.52.825-28.672 8.251-27.022 10.933.309.412 3.919 1.134 8.044 1.547 12.583 1.134 19.39 6.085 19.39 13.923 0 3.301-3.816 8.354-6.188 8.354-.722 0-5.363-1.443-10.52-3.197-10.314-3.61-14.233-3.506-19.39.103-5.569 3.92-43.936 54.25-48.783 63.842-3.92 7.942-4.332 9.282-4.229 16.502 0 5.982.516 8.87 2.269 12.17 1.238 2.372 2.681 4.641 3.3 4.951 1.96 1.237-.103 2.578-3.609 2.578-6.086 0-9.283-4.022-13.821-17.224-4.435-12.892-8.87-19.905-15.47-24.546-4.023-2.785-5.157-3.094-12.789-3.094-7.323 0-8.973.309-11.964 2.475-4.538 3.3-7.323 9.488-7.323 16.708 0 12.892 6.188 23.618 13.82 23.618 1.96 0 5.982-.928 8.87-2.062 2.888-1.135 6.807-2.063 8.767-2.063 3.61 0 5.569 1.444 3.61 2.578-1.96 1.238-3.198 5.776-2.476 9.489.516 2.578 2.579 5.569 7.117 10.004 6.291 6.395 7.735 9.386 7.735 15.78 0 7.426 7.632 14.749 15.677 15.058 5.054.206 10.107-2.475 19.183-10.107 6.292-5.363 8.973-6.085 7.426-2.063-1.031 2.785.206 7.735 2.063 7.735.619 0 1.547-1.134 2.063-2.578 1.134-2.991 5.466-4.951 8.663-4.022 1.135.309 5.466 3.094 9.386 6.085 8.766 6.497 10.004 7.219 26.815 13.923 20.009 7.942 24.237 11.242 33.004 25.578 6.291 10.211 13.202 15.883 24.959 20.421 14.233 5.466 19.802 8.354 24.34 12.686 5.157 4.847 6.911 8.251 6.911 13.717 0 5.054-1.857 8.457-9.489 17.637-7.116 8.56-8.767 12.685-10.004 25.371-2.166 20.834-8.045 27.95-29.394 35.686-7.839 2.888-12.48 7.632-15.161 15.78-3.61 11.345-9.076 20.627-15.883 27.434-22.897 22.69-28.054 27.228-34.551 30.322-3.713 1.754-8.354 3.404-10.417 3.816-5.157.929-5.466 1.341-7.529 8.767-.928 3.713-3.816 12.067-6.292 18.668-5.569 14.645-6.807 19.905-6.807 28.981 0 9.283 2.269 16.915 6.704 22.175 4.126 4.744 4.023 5.053-3.609 8.457-2.888 1.341-6.704 2.166-10.727 2.166-12.17 0-21.246-6.91-24.753-18.874-5.053-17.121 3.817-70.546 20.628-123.455 6.188-19.699 8.148-29.497 8.148-40.739 0-14.852-1.96-19.596-16.812-40.12-6.188-8.355-9.076-15.677-10.623-26.3-1.856-13.718 2.372-29.291 11.139-40.739 7.22-9.489 8.973-16.09 6.085-22.794-1.753-4.435-3.816-5.363-6.91-3.197-5.982 4.229-12.583.413-19.699-11.242-2.785-4.538-6.704-10.004-8.767-12.067-4.332-4.538-15.78-10.726-28.156-15.264-26.61-9.798-33.417-16.193-40.636-38.161-3.816-11.654-7.942-19.802-12.377-24.237-3.403-3.404-6.704-4.744-6.704-2.785 0 .516 1.444 3.816 3.301 7.426 2.681 5.363 3.3 8.148 3.61 14.852l.412 8.354-2.063-2.578c-3.506-4.229-19.286-36.924-22.69-46.928-3.094-9.385-6.704-23.102-9.901-37.954-3.403-15.677-13.717-31.56-28.878-44.246-14.646-12.376-25.578-17.946-37.233-19.08-10.416-.928-17.533 1.134-35.994 10.623-9.076 4.641-19.08 9.179-22.175 10.107-6.085 1.857-12.376 2.166-12.376.722 0-.515 3.713-4.125 8.25-7.941 4.539-3.816 8.148-7.426 7.942-8.045-.206-.619-3.61-2.063-7.529-3.3-5.053-1.651-7.22-2.785-7.529-4.126-.206-1.134-1.96-4.125-3.919-6.807-2.166-2.991-3.403-5.776-3.197-7.219.31-2.476 1.856-2.992 14.542-4.435 3.61-.516 5.26-1.238 6.498-3.198.928-1.34 1.444-3.094 1.134-3.816-.31-.722-4.228-2.475-8.87-3.919-4.537-1.34-8.354-2.785-8.354-3.197 0-1.34 15.265-6.91 23.619-8.664 10.52-2.062 29.703-1.547 37.748 1.032 4.228 1.444 15.058 1.96 59.304 3.197 29.806.928 54.765 1.34 55.487 1.031 3.198-1.237.103-2.99-8.148-4.64-9.591-1.96-23.927-7.942-23.309-9.696.516-1.65 6.704-5.053 10.933-5.879 5.157-1.134 14.233-.206 26.403 2.682Zm127.477 28.053c.619 1.65 2.166 4.332 3.61 6.189 2.991 3.919 2.991 4.022.413 4.744-1.651.412-2.063 1.444-2.063 4.538 0 5.157-5.157 15.78-9.489 19.39-11.448 9.694-26.918 9.488-38.16-.413-7.014-6.188-7.632-12.686-1.444-16.502 3.919-2.475 9.076-2.681 20.524-1.031 9.489 1.444 15.161.103 20.009-4.745 2.991-2.99 3.403-4.022 3.403-9.179 0-6.188 1.444-7.529 3.197-2.99Z"
    />
    <path
      d= 
      "M1125.12 139.753c-1.14 1.34-1.45 6.497-1.55 23.515-.21 28.466-2.37 43.008-7.43 48.371-1.85 1.96-5.46 3.713-11.13 5.466-4.65 1.341-10.01 3.61-11.86 4.848-10.22 6.807-10.52 24.134-.42 26.093 7.74 1.444 26.41-11.035 31.67-21.143 2.47-4.641 2.88-6.704 2.88-13.407 0-10.108 1.24-11.964 8.98-13.511 7.63-1.651 10.62-4.642 10.62-10.52-.1-5.776-1.65-7.632-8.87-10.417-4.54-1.753-6.19-2.991-6.39-4.641-.21-1.444.2-2.269 1.13-2.269.82 0 2.27-.929 3.3-2.063 1.55-1.65 1.75-3.094 1.24-8.457-.93-9.283-2.37-13.614-5.88-17.327-1.65-1.754-2.89-3.713-2.79-4.332.42-1.857-1.96-1.96-3.5-.206Zm7.22 14.542c.62 2.372 1.13 6.394 1.13 8.973 0 4.022-.31 4.744-2.99 6.085l-2.89 1.444-.72-11.655c-.41-6.497-.41-12.273 0-12.892 1.03-1.753 4.23 2.785 5.47 8.045Zm3.71 28.053c10.93 2.991 10.21 12.274-1.03 14.027-3.51.516-5.88 1.65-7.94 3.713l-3.1 2.991.62-2.785c1.34-6.704 2.68-16.605 2.68-20.112v-3.816l2.48 2.476c1.34 1.34 4.12 2.887 6.29 3.506Zm-12.58 32.282c-.41 9.592-3.41 14.749-11.97 21.143-15.47 11.345-22.38 11.551-22.38.619 0-4.847 2.99-10.004 7.12-12.17 1.75-.825 6.7-2.682 11.14-4.126 8.04-2.475 13.51-6.497 15.06-11.138 1.13-3.198 1.44-1.857 1.03 5.672ZM1043.95 340.766c-7.74 5.879-12.48 11.655-10.42 12.996 1.03.722 2.37-.104 4.54-2.579 3.92-4.538 10.83-10.004 11.86-9.385.41.206 1.03 1.753 1.34 3.3.31 1.65 2.27 5.569 4.23 8.973 4.13 6.704 4.44 8.56 2.06 13.098-1.23 2.373-1.44 4.745-.93 9.489.62 5.982.52 6.601-1.95 8.87-1.76 1.65-4.23 2.578-7.84 2.991-13.41 1.237-26.72-10.52-26.82-23.619v-4.847l4.64-.619c2.89-.516 4.64-1.238 4.64-2.166 0-2.166-1.03-2.372-7.22-1.134l-5.67 1.134-.31 4.435c-.51 6.807 2.27 14.646 7.12 20.215 9.49 10.726 25.27 13.82 33.52 6.601 3.92-3.507 5.05-7.426 3.61-12.686-.83-2.991-.62-4.538 1.13-8.354 2.37-5.57 2.07-7.323-2.68-15.264-1.96-3.198-4.12-8.148-4.74-10.933-.73-2.888-1.86-5.157-2.58-5.157s-4.13 2.063-7.53 4.641ZM964.121 346.026c-1.341 1.341-.928 7.529.722 10.727.825 1.65 4.744 5.569 8.766 8.766 6.292 5.054 7.633 6.704 11.346 14.646 4.434 9.179 13.923 20.627 19.805 23.618 7.01 3.61 14.23.206 14.23-6.91 0-5.363-5.47-15.78-10.93-20.731-2.58-2.475-9.491-9.076-15.267-14.851-6.291-6.189-12.377-11.242-15.367-12.686-5.26-2.579-12.067-3.92-13.305-2.579Zm11.448 5.776c2.785 1.341 9.076 6.601 15.161 12.583 5.776 5.775 12.38 12.17 14.65 14.233 4.43 4.022 8.76 11.345 9.9 16.914.51 2.372.2 3.507-1.34 4.951-3.1 2.887-6.71 1.34-14.134-5.776-5.053-4.848-7.735-8.56-11.448-16.089-4.332-8.664-5.879-10.624-11.964-15.574-12.995-10.52-13.408-17.327-.825-11.242ZM1113.88 369.335c-9.6 4.951-9.18 15.265.82 19.493 13.41 5.673 15.47 7.014 22.48 13.821 11.14 10.932 17.33 24.856 16.71 37.851l-.31 6.497-3.09-4.434c-7.94-11.346-9.59-13.202-13.92-15.471-9.39-4.847-16.51-1.856-44.56 18.462-24.44 17.842-29.7 22.793-34.65 32.797-3.72 7.632-3.82 7.942-3.82 19.596.1 11.861.1 12.067 4.95 24.031 4.13 10.314 4.85 12.995 4.85 19.183 0 8.355 1.03 9.695 8.56 11.655 6.29 1.547 15.57.722 21.45-1.857 2.58-1.134 7.84-4.95 11.76-8.457 10.21-9.076 13.82-10.829 22.9-10.829 6.49.103 8.56.619 15.47 4.022 6.91 3.301 10 5.879 21.65 17.533 15.58 15.677 17.02 16.502 29.6 15.78 8.87-.515 16.61-3.197 21.04-7.322 5.88-5.467 8.87-16.193 8.77-31.663-.2-13.511-2.68-23.722-9.18-37.13-4.54-9.282-5.67-10.623-21.97-26.815-9.48-9.386-18.66-18.977-20.52-21.35-4.74-6.085-8.56-14.851-9.18-21.349l-.62-5.672 5.98-.31c3.72-.206 6.19-.825 6.5-1.65.21-.825-.72-1.238-2.89-1.238-1.85 0-2.99-.412-2.57-1.031 1.44-2.269 4.43-.722 9.9 5.26 5.46 5.776 6.08 6.188 9.79 5.879 4.85-.413 7.33-3.919 6.19-8.664-1.44-5.982-27.95-28.466-45.48-38.47-10.73-6.188-18.87-9.282-25.99-10.004-4.95-.516-6.71-.206-10.62 1.856Zm25.47 6.395c10.52 5.054 25.17 14.852 37.54 25.268 12.48 10.417 15.58 14.027 15.16 17.534-.51 4.435-4.53 2.991-11.03-4.023-3.2-3.403-6.71-6.188-7.63-6.188-2.38 0-6.19 1.96-7.22 3.713-.42.825-1.76 1.444-2.89 1.444-7.22 0-3.2 20.834 6.5 33.313 1.75 2.372 11.03 11.964 20.52 21.349 16.4 16.193 17.43 17.534 21.97 26.816 6.7 13.924 8.35 20.627 8.35 36.098 0 19.596-3.4 27.331-14.13 31.972-6.6 2.888-20.93 3.301-24.75.826-1.34-.929-8.25-7.426-15.26-14.44-10.94-11.035-14.13-13.511-21.04-16.914-7.74-3.816-8.87-4.022-17.54-4.022-11.45 0-14.33 1.237-24.23 10.416-9.29 8.664-13.93 10.727-23.83 10.727-4.33 0-8.87-.619-10.31-1.341-2.27-1.135-2.58-1.96-2.27-5.879.41-6.085-1.34-12.789-6.09-24.134-6.39-15.471-6.39-27.434.31-39.914 4.23-7.941 9.7-12.995 32.49-29.6 23.41-17.121 27.54-19.287 35.48-19.287 6.91 0 8.66 1.238 14.13 9.798 4.64 7.323 9.38 12.377 11.65 12.377 2.69 0 3.61-7.942 2.17-17.946-2.99-20.834-18.36-39.708-38.26-46.928-6.91-2.475-9.08-5.156-7.95-9.798 1.76-7.013 14.75-7.632 28.16-1.237ZM787.963 430.186c-2.682 1.341-5.776 4.126-7.323 6.498-1.547 2.269-3.919 4.435-5.26 4.744-1.237.31-2.269 1.135-2.062 1.857.103.722-1.238 2.475-2.991 4.022-5.673 4.744-6.292 7.529-5.57 27.434.722 21.968 1.032 23.516 4.229 27.435 5.466 6.394 14.852 2.888 19.183-7.117 1.135-2.578 3.61-11.035 5.673-18.667 2.785-11.139 3.713-16.606 4.125-27.332.825-20.73-.722-23.618-10.004-18.874Zm6.395 7.735c1.443 19.596-6.601 55.591-13.718 61.573-4.022 3.404-6.394 3.404-9.076 0-1.856-2.372-2.166-4.228-2.166-11.964 0-5.053-.515-13.511-1.134-18.771-1.135-8.766-1.031-10.004.722-13.614 1.031-2.166 3.713-5.157 5.879-6.6 2.166-1.548 5.569-5.054 7.529-8.045 3.403-4.951 7.529-8.354 10.416-8.457.722 0 1.341 2.372 1.548 5.878ZM1306.43 570.349c-1.54 1.135-3.19 3.919-3.92 6.395-.62 2.372-2.58 5.982-4.43 7.941-5.47 5.879-9.9 12.583-9.9 15.058 0 3.301 4.64 6.601 9.18 6.601 11.03-.103 20.83-10.933 22.48-24.753 1.34-11.036-5.98-17.121-13.41-11.242Zm7.94 2.579c3.51 3.403 1.24 15.78-4.12 22.793-3.3 4.332-7.53 6.498-12.79 6.498-7.74 0-6.7-4.023 3.71-15.368 5.26-5.672 6.29-7.426 5.88-9.592-.41-1.959.1-3.094 1.86-4.331 2.99-2.063 3.5-2.063 5.46 0Z"
    />
        </StyledHero>
    )
}