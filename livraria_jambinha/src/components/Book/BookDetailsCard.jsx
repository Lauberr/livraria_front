import React from "react";

export default function BookDetailsCard({ detalhes }) {
  return (
    <div className="bg-white shadow rounded p-6 grid grid-cols-2 gap-6 mt-6 max-w-3xl">
      {/* Coluna 1 - Detalhes técnicos */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-3">Detalhes do livro</h3>
        <div className="text-sm text-gray-500">
          <div className="mb-1"><span className="font-medium text-gray-700">Edição:</span> {detalhes.edicao}</div>
          {/* <div className="mb-1"><span className="font-medium text-gray-700">Data da Publicação:</span> {detalhes.dataPublicacao}</div> */}
          <div className="mb-1"><span className="font-medium text-gray-700">Editora:</span> {detalhes.editora}</div>
          <div className="mt-4 font-medium text-gray-700">ID Numbers</div>
          <div className="mb-1">ID do Livro: {detalhes.idLivro}</div>
          <div className="mb-1">ISBN: {detalhes.isbn}</div>
        </div>
      </div>

      {/* Coluna 2 - Informações Gerais */}
      <div>
        <h3 className="invisible mb-3">Informações Gerais</h3>
        <div className="text-sm text-gray-500">
          <div className="mb-1"><span className="font-medium text-gray-700">Título:</span> {detalhes.titulo}</div>
          <div className="mb-1"><span className="font-medium text-gray-700">Autor:</span> {detalhes.autor}</div>
          <div className="mb-1"><span className="font-medium text-gray-700">QT Disponível:</span> {detalhes.qtdDisponivel}</div>
          <div className="mb-1"><span className="font-medium text-gray-700">Categoria:</span> {detalhes.categoria}</div>
          <div className="mb-1"><span className="font-medium text-gray-700">Subcategoria:</span> {detalhes.subcategoria}</div>
        </div>
      </div>
    </div>
  );
}
