import React from 'react';
import { NavLink } from "react-router"; 
import logo from '../assets/utfprLogo.png';

const LoginBiblio = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-500 via-orange-400 to-white font-sans">
      <div className="bg-white p-10 rounded-xl shadow-lg w-1/3">
        <div className="h-12 w-full flex justify-center items-center mb-6">
          <img src={logo} alt="Logo UTFPR" className="h-10 w-20" />
        </div>
        <p className="text-center text-gray-700 text-xl mb-8">Entrar como</p>
        <div className="flex flex-col gap-5 w-full">
          <NavLink className="w-full h-14 flex justify-center items-center bg-yellow-400 text-white rounded hover:opacity-80 transition">
            Professor
          </NavLink>
          <NavLink className="w-full h-14 flex justify-center items-center bg-yellow-400 text-white rounded hover:opacity-80 transition">
            Aluno
          </NavLink>
          <NavLink to="/loginBiblio" className="w-full h-14 flex justify-center items-center bg-black text-white rounded hover:opacity-80 transition mt-8">
            Bibliotecário
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default LoginBiblio;
