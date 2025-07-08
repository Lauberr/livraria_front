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
      const response = await fetch(`http://localhost:3000/livros/${id}`);
      const data = await response.json();
      setLivro(data);
    }
    fetchLivro();
  }, [id]);

  if (!livro) return <div className="p-6">Carregando...</div>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <button onClick={() => navigate(-1)} className="mb-6 text-gray-600 hover:text-black text-sm flex items-center">← Voltar</button>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="bg-white rounded p-6 shadow w-full md:w-1/3 flex justify-center">
          <img src={`http://localhost:3000${livro.capa}`} alt={livro.titulo} className="w-full max-w-xs object-contain" />
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-gray-800">{livro.titulo}</h1>
          <p className="text-sm text-gray-600 mt-1">ISBN: {livro.isbn}</p>
          <p className="text-sm text-gray-400 mt-1">Edição: {livro.edicao}</p>
          <p className="text-sm text-gray-400 mt-1">Disponíveis: {livro.qt_disponivel}</p>

          <div className="mt-4">
            <p className="text-sm font-semibold text-gray-600">Status</p>
            <span className={`inline-block mt-1 px-3 py-1 rounded-full text-white ${livro.disponivel ? "bg-green-500" : "bg-red-500"} text-sm`}>
              {livro.disponivel ? "Disponível" : "Indisponível"}
            </span>
          </div>

          <div className="mt-6 text-sm text-gray-600">
            <p><strong>Autores:</strong> {livro.autor?.join(', ')}</p>
            <p><strong>Editora:</strong> {livro.editora?.nome_editora || 'Não cadastrada'}</p>
            <p><strong>Data de Publicação:</strong> {livro.editora?.data_publicacao?.split('T')[0] || 'Não definida'}</p>
            <p><strong>Categoria:</strong> {livro.categoria?.join(', ')}</p>
          </div>

          <div className="flex space-x-4 mt-6">
            <button onClick={() => navigate(`/editar-livro/${livro.id_livro}`)} className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700">Editar</button>
            <button onClick={() => setMostrarModal(true)} className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">Reservar</button>
          </div>

          <BookDetailsCard detalhes={{
            edicao: livro.edicao,
            dataPublicacao: livro.editora?.data_publicacao,
            editora: livro.editora?.nome_editora,
            idLivro: livro.id_livro,
            isbn: livro.isbn,
            titulo: livro.titulo,
            autor: livro.autor?.join(', '),
            qtdDisponivel: livro.qt_disponivel,
            categoria: livro.categoria?.join(', '),
            subcategoria: livro.subcategoria
          }} />
        </div>
      </div>

      {mostrarModal && <ReservaModal livroId={livro.id_livro} onClose={() => setMostrarModal(false)} />}
    </div>
  );
}
