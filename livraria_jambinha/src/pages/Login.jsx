import React from 'react';
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
                <button>Professor</button>
                <button>Aluno</button>
                <button className='btnBiblio'>Bibliotecário</button>
            </div>

        </div>
      </div>
    </div>
  );
}

export default LoginBiblio;
