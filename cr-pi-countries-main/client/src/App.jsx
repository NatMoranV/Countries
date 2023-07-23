import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LandingPage } from './components/LandingPage/LandingPage';
import { HomePage } from './components/HomePage/HomePage';
import { FormPage } from './components/FormPage/FormPage';
import { DetailPage } from './components/DetailPage/DetailPage';
import NavBar from './components/Nav/NavBar';



function App() {
  const { pathname } = useLocation();
  return (
    <div className="App">
      {pathname !== "/" &&<NavBar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/setActivity" element={<FormPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;