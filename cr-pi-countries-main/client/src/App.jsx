import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { DetailPage } from "./pages/DetailPage/DetailPage";
import { FormPage } from "./pages/FormPage/FormPage";
import { ThemeProvider } from "styled-components";
import { NavBar } from "./components/Nav/NavBar";
import { Footer } from "./components/Footer/Footer";
import GlobalStyle from "./assets/GlobalStyles";
import themes from "./assets/themes";

function App() {
  const { pathname } = useLocation();
  const isLandingPage = pathname === "/";

  return (
    <ThemeProvider theme={themes.light}>
      <GlobalStyle />
      <div className="App">
        {!isLandingPage && <NavBar className="hidden" />}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/setActivity" element={<FormPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
