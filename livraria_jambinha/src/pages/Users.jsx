import React from "react";
import LocatarioCard from "../components/Users/UserCard";

const mockLocatarios = [
  {
    id: '00000',
    nome: 'Maria Silva',
    curso: 'Ciência da Computação',
    nascimento: '22/02/2002',
    email: 'mariazin@utfpr.edu.br',
    telefone: '44 99999-9999',
    status: 'ativo',
    tipo: 'Aluno',
  },
  {
    id: '00001',
    nome: 'Maria Silva',
    curso: 'Ciência da Computação',
    nascimento: '22/02/2002',
    email: 'mariazin@utfpr.edu.br',
    telefone: '44 99999-9999',
    status: 'inativo',
    tipo: 'Aluno',
  },
];

export default function Users() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-4">
      {/* Cabeçalho */}
      <div className="flex justify-between items-center mb-6">
        <button className="bg-white px-4 py-2 rounded shadow border text-gray-700 hover:bg-gray-50">
          Filtrar <span className="ml-1">▾</span>
        </button>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded shadow">
          Cadastrar novo
        </button>
      </div>

      <h2 className="text-lg font-semibold mb-4">Locatários</h2>

      {/* Cabeçalho da tabela */}
      <div className="grid grid-cols-12 bg-white rounded-t-md px-6 py-3 font-medium text-gray-600">
        <div className="col-span-3">Nome <div className="text-sm text-gray-400">ID</div></div>
        <div className="col-span-3">Curso <div className="text-sm text-gray-400">Data de Nascimento</div></div>
        <div className="col-span-3">Email <div className="text-sm text-gray-400">Telefone</div></div>
        <div className="col-span-3 text-right">Status / Ações</div>
      </div>

      {/* Lista de Locatários */}
      {mockLocatarios.map((loc, i) => (
        <LocatarioCard key={i} locatario={loc} />
      ))}
    </div>
  );
}
