import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { Icon } from "@iconify/react";

export default function Sidebar() {
  const linkClasses = ({ isActive }) =>
    `block p-4 pl-8 rounded hover:bg-yellow-400 flex  gap-2 text-gray-500 items-center justify-start ${
      isActive ? "text-gray-900 font-bold " : "text-black"
    }`;

  return (
    <aside className="font-sans bg-white w-60 p-4 flex flex-col gap-2 rounded-l-xl">
      <div className="flex  justify-center"><img className="p-5 pb-14 w-3/4" src={Logo} alt="Logo UTFPR" /></div>
      <NavLink to="/formAutor" className={linkClasses}><Icon icon="lineicons:home-2" className="text-2xl"/>Form Autor Teste</NavLink>
      <NavLink to="/home" className={linkClasses}><Icon icon="lineicons:home-2" className="text-2xl"/>Início</NavLink>
      <NavLink to="/search" className={linkClasses}><Icon icon="heroicons-outline:search" className="text-xl"/> Pesquisar</NavLink>
      <NavLink to="/history" className={linkClasses}><Icon icon="fluent:history-28-filled" className="text-xl"/>Histórico</NavLink>
      <NavLink to="/registerBook" className={linkClasses}><Icon icon="bx:book-add" className="text-xl"/>Registrar Livro </NavLink>
      <NavLink to="/users" className={linkClasses}><Icon icon="mynaui:book-user" className="text-2xl"/>Locatários</NavLink>
    </aside>
  );
}
