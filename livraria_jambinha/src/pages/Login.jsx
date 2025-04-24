import React from 'react';
import { NavLink } from "react-router";
import '../css/global.css';  
import '../css/login.css';  
import logo from '../assets/utfprLogo.png';




const LoginBiblio = () => {
  return (
    <div className="bodyLoginBiblio">
      <div className="container">
        <div className="button-box">
            <div className="imagemDiv">
                <img src={logo} alt="Logo UTFPR" />
            </div>
            <p className="titulo">Entrar como</p>
            <div className='botoes'>
                <NavLink className='NavLink'>Professor</NavLink>
                <NavLink className='NavLink'>Aluno</NavLink>
                <NavLink className='NavLinkPreto' to="loginBiblio" >Bibliotecário</NavLink>
            </div>

        </div>
      </div>
    </div>
  );
}

export default LoginBiblio;
