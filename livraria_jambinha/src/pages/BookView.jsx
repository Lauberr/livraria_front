import React from "react";
import BookDetailsCard from "../components/Book/BookDetailsCard";

export default function BookView() {
  const livro = {
    capa: "https://m.media-amazon.com/images/I/71UypkUjStL.jpg",
    titulo: "Don’t Make Me Think",
    autor: "Steve Krug",
    ano: "2000",
    edicao: "Second Edition",
    status: "disponível",
    lidos: 25,
  };

  const detalhes = {
    edicao: "Second Edition",
    dataPublicacao: "22/02/2002",
    editora: "Vagalume",
    idLivro: "1",
    isbn: "216",
    titulo: "A Ilha Perdida",
    autor: "Maria José Dupré",
    qtdDisponivel: 3,
    categoria: "Aventura",
    subcategoria: "Naufrágio",
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Voltar */}
      <button className="mb-6 text-gray-600 hover:text-black text-sm flex items-center">
        ← Voltar
      </button>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Capa */}
        <div className="bg-white rounded p-6 shadow w-full md:w-1/3 flex justify-center">
          <img
            src={livro.capa}
            alt={livro.titulo}
            className="w-full max-w-xs object-contain"
          />
        </div>

        {/* Informações do livro */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-gray-800">
            {livro.titulo}
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            By <span className="underline">{livro.autor}</span>, {livro.ano}
          </p>
          <p className="text-sm text-gray-400 mt-1">{livro.edicao}</p>
          <p className="text-sm text-gray-400 mt-1">{livro.lidos} Pessoas leram</p>

          {/* Status */}
          <div className="mt-4">
            <p className="text-sm font-semibold text-gray-600">Status</p>
            <span className="inline-block mt-1 px-3 py-1 rounded-full text-white bg-green-500 text-sm">
              Disponível
            </span>
          </div>

          {/* Ações */}
          <div className="flex space-x-4 mt-6">
            <button className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700">
              Editar
            </button>
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
              Reservar
            </button>
          </div>

          {/* Detalhes técnicos */}
          <BookDetailsCard detalhes={detalhes} />
        </div>
      </div>
    </div>
  );
}
