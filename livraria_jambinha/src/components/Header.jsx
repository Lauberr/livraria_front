import { useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import FotoPerfil from "../assets/foto-perfil.jpeg";

export default function Header() {
  const [filtro, setFiltro] = useState("todos");
  const [pesquisa, setPesquisa] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!pesquisa.trim()) return;

    try {
      let url = "";

      if (filtro === "titulo" || filtro === "todos") {
        url = `http://localhost:3000/livros/titulo/${encodeURIComponent(pesquisa)}`;
      } else if (filtro === "autor") {
        url = `http://localhost:3000/autor-livro/autor/nome/${encodeURIComponent(pesquisa)}`;
      } else if (filtro === "genero" || filtro === "categoria") {
        // Aqui depende de como você implementou busca por categoria
        alert("Filtro por gênero ainda não implementado.");
        return;
      }

      const response = await fetch(url);
      if (!response.ok) throw new Error("Nenhum resultado encontrado.");

      const data = await response.json();
      navigate("/resultado-busca", {
        state: { livros: data, termo: pesquisa, filtro },
      });
    } catch (err) {
      alert("Erro na busca: " + err.message);
    }
  };

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
          onChange={(e) => setPesquisa(e.target.value)}
          className="px-4 w-80 search-input border border-gray-300 bg-white"
        />
        <button onClick={handleSearch} className="px-3 border border-gray-300 bg-white rounded-r-full">
          <Icon icon="ic:search" className="w-5 h-5 text-yellow-400" />
        </button>
      </div>

      <div className="h-full">
        <img className="h-full rounded-full" src={FotoPerfil} alt="FotoPerfil" />
      </div>
    </header>
  );
}
