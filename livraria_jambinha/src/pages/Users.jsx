import React, { useEffect, useState } from "react";
import LocatarioCard from "../components/Users/UserCard";
import UserHeader from "../components/Users/UserHeader";
import UserForm from "../components/Users/UserForm";

export default function Users() {
  const [locatarios, setLocatarios] = useState([]);
  const [filtro, setFiltro] = useState({ tipo: "", status: "" });
  const [modalAberto, setModalAberto] = useState(false);
  const [modoEdicao, setModoEdicao] = useState(null); // null ou objeto locatario

  useEffect(() => {
    fetchLocatarios();
  }, []);

  const fetchLocatarios = async () => {
    const res = await fetch("http://localhost:3000/locatarios");
    const data = await res.json();
    setLocatarios(data);
  };

  const aplicarFiltro = (lista) => {
    return lista.filter((loc) => {
      const tipoMatch = filtro.tipo ? loc.tipo?.toLowerCase() === filtro.tipo : true;
      const statusMatch = filtro.status ? loc.status?.toLowerCase() === filtro.status : true;
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
        <select
          onChange={(e) => setFiltro({ ...filtro, tipo: e.target.value })}
          className="bg-white px-4 py-2 rounded shadow border text-gray-700"
        >
          <option value="">Filtrar por tipo</option>
          <option value="aluno">Aluno</option>
          <option value="professor">Professor</option>
        </select>
        <select
          onChange={(e) => setFiltro({ ...filtro, status: e.target.value })}
          className="bg-white px-4 py-2 rounded shadow border text-gray-700"
        >
          <option value="">Filtrar por status</option>
          <option value="ativo">Ativo</option>
          <option value="inativo">Inativo</option>
        </select>
        <button onClick={handleCadastrar} className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded shadow">
          Cadastrar novo
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
