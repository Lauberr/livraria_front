import { useLocation } from "react-router-dom";
import BookCard from "../components/BookCard";

export default function SearchResults() {
  const location = useLocation();
  const { livros = [], termo = "", filtro = "todos" } = location.state || {};

  const livrosFiltrados = livros.filter((livro) => {
    if (filtro === "disponiveis") return livro.disponivel;
    if (filtro === "reservados") return !livro.disponivel;
    return true;
  });

  return (
    <div className="p-8 bg-gray-100 w-full min-h-screen h-auto">
      <h2 className="text-xl font-bold mb-4">
        Resultados para: <span className="text-blue-600">{termo}</span>
      </h2>

      {livrosFiltrados.length === 0 ? (
        <p>Nenhum livro encontrado.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {livrosFiltrados.map((livro) => (
            <BookCard key={livro.id_livro} livro={livro} />
          ))}
        </div>
      )}
    </div>
  );
}
