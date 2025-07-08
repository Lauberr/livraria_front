import React from 'react';

export default function LocatarioCard({ locatario, aoEditar, aoDesativar }) {
  return (
    <div className="grid grid-cols-12 bg-white px-6 py-4 border-t border-gray-200 items-center rounded">
      <div className="col-span-3">
        <div className="font-medium">{locatario.nome_locatario}</div>
        <div className="text-sm text-gray-500">ID {locatario.id_locatario}</div>
      </div>

      <div className="col-span-3">
        <div>{locatario.nome_curso || 'Curso'}</div>
        <div className="text-sm text-gray-500">Nascido em {new Date(locatario.data_nascimento).toLocaleDateString()}</div>
      </div>

      <div className="col-span-3">
        <div>{locatario.email_locatario}</div>
        <div className="text-sm text-gray-500">{locatario.telefone_locatario}</div>
      </div>

      <div className="col-span-3 flex flex-col items-end gap-2">
        <div className="flex flex-col items-end">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
            locatario.ativo ? 'bg-yellow-400 text-white' : 'bg-gray-400 text-white'
          }`}>
            {locatario.ativo ? 'Ativo' : 'Inativo'}
          </span>
          <span className="text-sm text-gray-600 flex items-center mt-1">👤 {locatario.tipo || 'Aluno'}</span>
        </div>
        <div className="flex gap-2">
          <button onClick={aoDesativar} className="border border-red-400 text-red-400 hover:bg-red-100 px-3 py-1 rounded">
            Excluir
          </button>
          <button onClick={aoEditar} className="border border-red-400 text-red-400 hover:bg-red-100 px-3 py-1 rounded">
            Editar
          </button>
        </div>
      </div>
    </div>
  );
}
