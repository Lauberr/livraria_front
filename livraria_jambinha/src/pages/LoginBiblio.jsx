import React from 'react';
import logo from '../assets/utfprLogo.png';

const LoginBiblio = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-500 via-orange-400 to-white font-sans">
        <div className="bg-white p-10 rounded-xl shadow-lg w-[30%] min-h-[60%] flex flex-col items-center">
          <div className="h-12 flex justify-center items-center mb-4">
            <img src={logo} alt="Logo UTFPR" className="h-10 w-20" />
          </div>
          <p className="text-center text-gray-700 text-lg font-semibold mb-1">Bem-vindo!</p>
          <p className="text-center text-gray-400 text-sm mb-6">Efetue o login para continuar</p>

          <form className="w-full flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Digite seu email"
              className="border border-gray-300 rounded p-2 mb-4"
              required
            />

            <label htmlFor="password" className="text-gray-700 font-semibold mb-1">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha"
              className="border border-gray-300 rounded p-2 mb-4"
              required
            />

            <div className="flex items-center justify-between mb-4 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Lembrar login
              </label>
              <a href="#" className="text-gray-500 hover:underline">Esqueceu a senha?</a>
            </div>

            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 rounded"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginBiblio;
