import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginBiblio from './pages/LoginBiblio.jsx';  
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Layout from './pages/Layout.jsx'; // Importa o novo Layout
import RegisterBook from './pages/RegisterBook.jsx';

export default function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
  fetch(`${import.meta.env.VITE_API_URL}/api/test`)  .then(res => res.json())
  .then(data => setMsg(`Banco respondeu: ${data.db_time}`))
  .catch(err => setMsg('Erro ao acessar backend'));
  }, []);

  return (
    <>
    <p>{msg}</p>
    <Router>
      <Routes>
        {/* Página de login sem sidebar */}
        {<Route path="login" element={<Login />} /> }
        {<Route path="loginBiblio" element={<LoginBiblio />} /> }

        {/* Rotas internas com sidebar */}
        {/* <Route path="/" element={<Layout showSidebar={true} />}> */}
        <Route path="/" element={<Layout />} >
          <Route path="home" element={<Home />} />
          <Route path="registerBook" element={<RegisterBook />} />
        </Route>

        {/* Página 404 (opcional) */}
        {/* <Route path="*" element={<Pagina404 />} /> */}
      </Routes>
    </Router>
    </>
  );
}


