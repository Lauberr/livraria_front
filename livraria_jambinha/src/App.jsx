import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import LoginBiblio from './pages/LoginBiblio.jsx';
// import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Layout from './pages/Layout.jsx';
import RegisterBook from './pages/RegisterBook.jsx';
import FormAutor from './pages/FormAutor.jsx';
import SearchResults  from './pages/SearchResults.jsx';
import History  from './pages/History.jsx';
import Users from './pages/Users.jsx';
import BookView from './pages/BookView.jsx';
import BookEdit from './pages/BookEdit.jsx';

export default function App() {
  const [msg, setMsg] = useState('');
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/test`).then(res => res.json())
      .then(data => setMsg(`Banco respondeu: ${data.db_time}`))
      .catch(err => setMsg('Erro ao acessar backend'));
  }, []);

  return (
    <>
      {/* <p>{msg}</p> */}
      <Router>
        <Routes>
          {/* Página de login sem sidebar
        {<Route path="login" element={<Login />} /> }
        {<Route path="loginBiblio" element={<LoginBiblio />} /> } */}

          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="history" element={<History />} />
            <Route path="registerBook" element={<RegisterBook />} />
            <Route path="formAutor" element={<FormAutor />} />
            <Route path="users" element={<Users />} />
            <Route path="/livro/:id" element={<BookView />} />
            <Route path="/resultado-busca" element={<SearchResults />} />
            <Route path="/editar-livro/:id" element={<BookEdit />} />

          </Route>
        </Routes>
      </Router>
    </>
  );
}


