import { useState } from "react";
import { Icon } from "@iconify/react";
import FotoPerfil from "../assets/foto-perfil.jpeg";


export default function Header() {
    const [filtro,setFiltro] = useState('todos');
    const [pesquisa, setPesquisa] = useState('');

    const handleSearch = (e) => {
      setPesquisa(e.target.value);
      // a gente pode adicionar uma logica de pesquisa aqui depois
    }

    return (
      <header className="bg-gradient-to-b from-white via-gray-100 to-gray-100 p-6 flex justify-between items-center h-1/10">
        <div className="flex">
          <select
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            className="p-2 border rounded-l-full border-gray-300"
          >
            <option value="todos">Todos</option>
            <option value="titulo">Título</option>
            <option value="autor">Autor</option>
            <option value="genero">Gênero</option>
          </select>

          <input
            type="text"
            placeholder="Pesquisar..."
            value={pesquisa}
            onChange={handleSearch}
            className="px-4 w-80 search-input border border-gray-300 bg-white"
          />
          <button onClick={() => console.log('Pesquisar:', pesquisa)} className="px-3 border border-gray-300  bg-white rounded-r-full">
            <Icon icon="ic:search" className="w-5 h-5 text-yellow-400"/>

          </button>
          </div>
        <div className="h-full">
          <img className="h-full rounded-full" src={FotoPerfil} alt="FotoPerfil" />
        </div>
      </header>
    );
  }
  