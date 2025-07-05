import React from "react";

const statusClasses = {
  disponível: "bg-green-500 text-white",
  reservado: "bg-gray-400 text-white",
  indisponível: "bg-red-700 text-white",
};

export default function BookCard({ livro }) {
  return (
    <div className="grid grid-cols-12 bg-white px-6 py-4 border-t border-gray-200 items-center rounded">
      {/* Título + capa */}
      <div className="col-span-5 flex items-center space-x-4">
        <img src={livro.capa} alt={livro.titulo} className="w-12 h-16 object-cover rounded" />
        <div>
          <div className="font-medium">{livro.titulo}</div>
          <div className="text-sm text-gray-500">
            {livro.autor}, {livro.ano}
          </div>
          {livro.edicao && (
            <div className="text-sm text-gray-400">{livro.edicao}</div>
          )}
        </div>
      </div>

      {/* Categorias */}
      <div className="col-span-4">
        <div>{livro.categoria1}</div>
        <div className="text-sm text-gray-400">{livro.categoria2}</div>
      </div>

      {/* Status + Tipo + Ação */}
      <div className="col-span-3 flex justify-end items-center space-x-3">
        <div className="flex flex-col items-end">
          <span className={`px-3 py-1 text-sm rounded-full font-medium ${statusClasses[livro.status]}`}>
            {livro.status.charAt(0).toUpperCase() + livro.status.slice(1)}
          </span>
          {livro.tipoUsuario && (
            <span className="text-sm text-gray-600 flex items-center mt-1">
              👤 {livro.tipoUsuario}
            </span>
          )}
        </div>
        <button className="border border-red-400 text-red-400 hover:bg-red-100 px-3 py-1 rounded">
          Ver
        </button>
      </div>
    </div>
  );
}
