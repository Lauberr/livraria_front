import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import BookDetailsCard from "../components/Book/BookDetailsCard";
import ReservaModal from "../components/Book/ReservaModal";

export default function BookView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [livro, setLivro] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    async function fetchLivro() {
      try {
        const response = await fetch(`http://localhost:3000/livros/detalhes/${id}`);
        if (!response.ok) throw new Error("Erro ao buscar livro");
        const data = await response.json();
        setLivro(data);
      } catch (err) {
        console.error("Erro ao carregar livro:", err);
      }
    }

    fetchLivro();
  }, [id]);

  if (!livro) return <div className="p-6">Carregando...</div>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <button onClick={() => navigate(-1)} className="mb-6 text-gray-600 hover:text-black text-sm flex items-center">
        ← Voltar
      </button>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Capa */}
        <div className="bg-white rounded p-6 shadow w-full md:w-1/3 flex justify-center">
          <img
            src={`http://localhost:3000${livro.capa}`}
            alt={livro.titulo}
            className="w-full max-w-xs object-contain"
          />
        </div>

        {/* Informações */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-gray-800">{livro.titulo}</h1>
          <p className="text-sm text-gray-600 mt-1">ISBN: {livro.isbn}</p>
          <p className="text-sm text-gray-400 mt-1">Edição: {livro.edicao || "N/A"}</p>

          <div className="mt-4">
            <p className="text-sm font-semibold text-gray-600">Status</p>
            <span className={`inline-block mt-1 px-3 py-1 rounded-full text-white ${
              livro.disponivel ? "bg-green-500" : "bg-red-500"
            } text-sm`}>
              {livro.disponivel ? "Disponível" : "Indisponível"}
            </span>
          </div>

          {/* <div className="mt-6 text-sm text-gray-600 space-y-1">
            <p><strong>Autores:</strong> {livro.autores?.map(a => a.nome_autor).join(', ') || "Não informado"}</p>
            <p><strong>Editora:</strong> {livro.editora?.nome_editora || "Não informada"}</p>
            <p><strong>Categoria:</strong> {livro.categorias?.map(c => c.nome_cat).join(', ') || "Não informada"}</p>
            <p><strong>Subcategoria:</strong> {livro.categorias?.map(c => c.nome_subcat).join(', ') || "Não informada"}</p>
          </div> */}

          <div className="flex space-x-4 mt-30">
            <button onClick={() => navigate(`/editar-livro/${livro.id_livro}`)} className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700">Editar</button>
            <button onClick={() => setMostrarModal(true)} className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">Reservar</button>
          </div>

          {/* Card de detalhes */}
          <BookDetailsCard detalhes={{
            edicao: livro.edicao,
            editora: livro.editora?.nome_editora,
            idLivro: livro.id_livro,
            isbn: livro.isbn,
            titulo: livro.titulo,
            autor: livro.autores?.map(a => a.nome_autor).join(', '),
            qtdDisponivel: livro.qt_disponivel,
            categoria: livro.categorias?.map(c => c.nome_cat).join(', '),
            subcategoria: livro.categorias?.map(c => c.nome_subcat).join(', ')
          }} />
        </div>
      </div>

      {mostrarModal && <ReservaModal livroISBN={livro.isbn} onClose={() => setMostrarModal(false)} />}
    </div>
  );
}
