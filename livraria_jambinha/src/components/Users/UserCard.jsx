import React from 'react';

export default function LocatarioCard({ locatario }) {
  return (
    <div className="grid grid-cols-12 bg-white px-6 py-4 border-t border-gray-200 items-center rounded">
      {/* Nome e ID */}
      <div className="col-span-3">
        <div className="font-medium">{locatario.nome}</div>
        <div className="text-sm text-gray-500">ID {locatario.id}</div>
      </div>

      {/* Curso e nascimento */}
      <div className="col-span-3">
        <div>{locatario.curso}</div>
        <div className="text-sm text-gray-500">Nascido em {locatario.nascimento}</div>
      </div>

      {/* Email e telefone */}
      <div className="col-span-3">
        <div>{locatario.email}</div>
        <div className="text-sm text-gray-500">{locatario.telefone}</div>
      </div>

      {/* Status + tipo + ações */}
      <div className="col-span-3 flex flex-col items-end gap-2">
        <div className="flex flex-col items-end">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
            locatario.status === 'ativo'
              ? 'bg-yellow-400 text-white'
              : 'bg-gray-400 text-white'
          }`}>
            {locatario.status === 'ativo' ? 'Ativo' : 'Inativo'}
          </span>
          <span className="text-sm text-gray-600 flex items-center mt-1">👤 {locatario.tipo}</span>
        </div>
        <div className="flex gap-2">
          <button className="border border-red-400 text-red-400 hover:bg-red-100 px-3 py-1 rounded">
            Excluir
          </button>
          <button className="border border-red-400 text-red-400 hover:bg-red-100 px-3 py-1 rounded">
            Editar
          </button>
        </div>
      </div>
    </div>
  );
}
