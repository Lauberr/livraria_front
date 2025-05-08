import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginBiblio from './pages/LoginBiblio.jsx';  
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Layout from './pages/Layout.jsx'; // Importa o novo Layout

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Página de login sem sidebar */}
        {<Route path="login" element={<Login />} /> }
        {<Route path="loginBiblio" element={<LoginBiblio />} /> }

        {/* Rotas internas com sidebar */}
        {/* <Route path="/" element={<Layout showSidebar={true} />}> */}
        <Route path="/" element={<Layout />} >
          <Route path="home" element={<Home />} />
        </Route>

        {/* Página 404 (opcional) */}
        {/* <Route path="*" element={<Pagina404 />} /> */}
      </Routes>
    </Router>
  );
}
