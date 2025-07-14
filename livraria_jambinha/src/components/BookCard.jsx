import { Link } from "react-router-dom";

export default function BookCard({ livro }) {
  return (

    <Link to={`/livro/${livro.id_livro}`}>

      <div className="bg-white shadow-md rounded-lg overflow-hidden w-64">
        <img
          src={`http://localhost:3000${livro.capa}`}
          alt={`Capa do livro ${livro.titulo}`}
          className="w-full h-80 object-cover p-5"
        />
        <div className="p-5 pt-0">
          <h2 className="text-lg font-semibold text-gray-800">{livro.titulo}</h2>
          {/* Você pode adaptar essa parte para mostrar o autor se tiver essa info */}
          <p className="text-gray-600">Disponível: {livro.qt_disponivel}</p>
        </div>
      </div>
      
    </Link>
  );
}
