import React from "react";
import BookCard from "../components/History/BookCard";

const mockHistorico = [
  {
    id: 1,
    capa: "https://m.media-amazon.com/images/I/71UypkUjStL.jpg",
    titulo: "Don’t Make Me Think",
    autor: "Steve Krug",
    ano: "2000",
    edicao: "Segunda Edição",
    categoria1: "Ciência da Computação",
    categoria2: "UX Design",
    status: "disponível",
    tipoUsuario: null,
  },
  {
    id: 2,
    capa: "https://m.media-amazon.com/images/I/71HMyqG6MRL.jpg",
    titulo: "The Design of Everyday Things",
    autor: "Don Norman",
    ano: "1988",
    edicao: "",
    categoria1: "Ciência da Computação",
    categoria2: "UX Design",
    status: "reservado",
    tipoUsuario: "Aluno",
  },
  {
    id: 3,
    capa: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
    titulo: "Rich Dad Poor Dad",
    autor: "Robert T. Kiyosaki",
    ano: "1997",
    edicao: "",
    categoria1: "Gestão Financeira",
    categoria2: "",
    status: "disponível",
    tipoUsuario: null,
  },
  {
    id: 4,
    capa: "https://m.media-amazon.com/images/I/71UypkUjStL.jpg",
    titulo: "Don’t Make Me Think",
    autor: "Steve Krug",
    ano: "2000",
    edicao: "Segunda Edição",
    categoria1: "Ciência da Computação",
    categoria2: "UX Design",
    status: "indisponível",
    tipoUsuario: null,
  },
  {
    id: 5,
    capa: "https://m.media-amazon.com/images/I/71HMyqG6MRL.jpg",
    titulo: "The Design of Everyday Things",
    autor: "Don Norman",
    ano: "1988",
    edicao: "",
    categoria1: "Ciência da Computação",
    categoria2: "UX Design",
    status: "reservado",
    tipoUsuario: "Professor",
  },
];

export default function History() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-4">
      {/* Cabeçalho */}
      <div className="flex justify-between items-center mb-6">
        <button className="bg-white px-4 py-2 rounded shadow border text-gray-700 hover:bg-gray-50">
          Filtrar <span className="ml-1">▾</span>
        </button>
      </div>

      <h2 className="text-lg font-semibold mb-4">Histórico</h2>

      {/* Cabeçalho da tabela */}
      <div className="grid grid-cols-12 bg-white rounded-t-md px-6 py-3 font-medium text-gray-600">
        <div className="col-span-5">Título</div>
        <div className="col-span-4">Categoria</div>
        <div className="col-span-3 text-right">Status</div>
      </div>

      {/* Lista */}
      {mockHistorico.map((livro) => (
        <BookCard key={livro.id} livro={livro} />
      ))}
    </div>
  );
}
