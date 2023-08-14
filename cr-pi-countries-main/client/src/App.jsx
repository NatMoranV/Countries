import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import GlobalStyle from "./assets/GlobalStyles";
import themes from "./assets/themes";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { DetailPage } from "./pages/DetailPage/DetailPage";
import { FormPage } from "./pages/FormPage/FormPage";
import { NavBar } from "./components/Nav/NavBar";
import { Footer } from "./components/Footer/Footer";



export default function App() {
  const { pathname } = useLocation();
  const isLandingPage = pathname === "/";
  const [theme, setTheme] = useState("light")

  const themeToggler = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }

  return (
    <ThemeProvider theme={theme === "dark" ? themes.dark : themes.light}>
      <GlobalStyle />
      <div className="App">
        {!isLandingPage && <NavBar themeToggler={themeToggler} currentTheme={theme} className="hidden" />}
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
