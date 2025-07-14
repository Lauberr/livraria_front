import React from "react";
import { Link } from "react-router-dom";


const statusClasses = {
  reservado: "bg-gray-400 text-white",
  atrasado: "bg-red-600 text-white",
  devolvido: "bg-green-600 text-white",
};


export default function HistoryCard({ livro, aoDevolver }) {
  const statusClasses = {
    reservado: "bg-gray-400 text-white",
    atrasado: "bg-red-600 text-white",
    devolvido: "bg-green-500 text-white",
  };

  return (
    <div className="grid grid-cols-12 bg-white px-6 py-4 border-t border-gray-200 items-center rounded">
      <div className="col-span-1 flex items-center justify-center w-full h-full"><img src={livro.capa} alt={livro.titulo} className="w-12 h-16 object-cover rounded" /></div>
      <div className="col-span-4 flex items-center space-x-4">
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

      <div className="col-span-4">
        <div>{livro.categoria1}</div>
        <div className="text-sm text-gray-400">{livro.categoria2}</div>
      </div>

      <div className="col-span-3 flex justify-end items-center space-x-3">
        <div className="flex flex-col items-end">
          <span className={`px-3 py-1 text-sm rounded-full font-medium ${statusClasses[livro.status]}`}>
            {livro.status.charAt(0).toUpperCase() + livro.status.slice(1)}
          </span>
        </div>

        <button
          className="border border-green-500 text-green-600 hover:bg-green-100 px-3 py-1 rounded"
          onClick={aoDevolver}
        >
          Devolver
        </button>
      </div>
    </div>
  );
}

