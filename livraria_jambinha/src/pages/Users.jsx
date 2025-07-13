import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import LocatarioCard from "../components/Users/UserCard";
import UserHeader from "../components/Users/UserHeader";
import UserForm from "../components/Users/UserForm";

export default function Users() {
  const [locatarios, setLocatarios] = useState([]);
  const [filtro, setFiltro] = useState({ tipo: "", status: "" });
  const [modalAberto, setModalAberto] = useState(false);
  const [modoEdicao, setModoEdicao] = useState(null);

  useEffect(() => {
    fetchLocatarios();
  }, []);

  const fetchLocatarios = async () => {
    const res = await fetch("http://localhost:3000/locatarios");
    const data = await res.json();
    console.log("Resposta da API de locatarios:", data);
    setLocatarios(Array.isArray(data) ? data : data.locatarios || []);
  };

  const aplicarFiltro = (lista) => {
    if (!Array.isArray(lista)) return [];

    return lista.filter((loc) => {
      const tipoDoLoc = loc.id_cargo === 3 ? "aluno" : loc.id_cargo === 2 ? "professor" : "";

      const statusDoLoc = loc.status ? "ativo" : "inativo";

      const tipoMatch = filtro.tipo ? tipoDoLoc === filtro.tipo : true;
      const statusMatch = filtro.status ? statusDoLoc === filtro.status : true;

      return tipoMatch && statusMatch;
    });
  };



  const handleCadastrar = () => {
    setModoEdicao(null);
    setModalAberto(true);
  };

  const handleEditar = (locatario) => {
    setModoEdicao(locatario);
    setModalAberto(true);
  };

  const handleDesativar = async (id) => {
    await fetch(`http://localhost:3000/locatarios/${id}`, { method: "DELETE" });
    fetchLocatarios();
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-4">
      <div className="flex justify-between items-center mb-6">

        <div className="flex gap-4 items-center">
          <select
            onChange={(e) => setFiltro((f) => ({ ...f, tipo: e.target.value }))}
            value={filtro.tipo}
            className="bg-white px-4 py-2 rounded shadow border-gray-700 text-gray-700"
          >
            <option value="">Filtrar por tipo</option>
            <option value="aluno">Aluno</option>
            <option value="professor">Professor</option>
          </select>

          <select
            onChange={(e) => setFiltro((f) => ({ ...f, status: e.target.value }))}
            value={filtro.status}
            className="bg-white px-4 py-2 rounded shadow border-gray-700 text-gray-700"
          >
            <option value="">Filtrar por status</option>
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
          </select>

          <button
            onClick={() => setFiltro({ tipo: "", status: "" })}
            className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded shadow"
          >
            Limpar filtros
          </button>
        </div>


        <button onClick={handleCadastrar} className="flex items-center bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded shadow gap-3">
          Cadastrar novo <Icon icon="heroicons:plus-circle" className="text-xl" />
        </button>
      </div>

      <h2 className="text-lg font-semibold mb-4">Locatários</h2>
      <UserHeader />
      {aplicarFiltro(locatarios).map((loc, i) => (
        <LocatarioCard
          key={i}
          locatario={loc}
          aoEditar={() => handleEditar(loc)}
          aoDesativar={() => handleDesativar(loc.id_locatario)}
        />
      ))}
      {modalAberto && (
        <UserForm
          fechar={() => setModalAberto(false)}
          atualizarLista={fetchLocatarios}
          locatarioEdicao={modoEdicao}
        />
      )}
    </div>
  );
}
