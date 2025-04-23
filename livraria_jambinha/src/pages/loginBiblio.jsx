import React from 'react';
import '../css/global.css';  
import '../css/loginBiblio.css';  
import logo from '../assets/utfprLogo.png';


const LoginForm = () => {
  return (
    <div className="bodyLoginBiblio">
      <div className="container">
        <div className="form-box">
          <div className="imagemDiv">
          <img src={logo} alt="Logo UTFPR" />
          </div>
          <p className="titulo">Bem-vindo!</p>
          <p className="subtitulo">Efetue o login para continuar</p>
          <form>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="Digite seu email" required />

            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Digite sua senha" required />

            <div className="lembrar">
              <label>
                <input type="checkbox" /> Lembrar login
              </label>
              <a className="recuperar" href="#">Esqueceu a senha?</a>
            </div>

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
