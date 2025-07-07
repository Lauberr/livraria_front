import { useEffect, useState } from "react";
import { BookCard } from "../components/BookCard";

export default function Home() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    async function fetchLivros() {
      try {
        const response = await fetch("http://localhost:3000/livros"); // ajuste a URL conforme sua API
        const data = await response.json();
        setLivros(data);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    }

    fetchLivros();
  }, []);

  return (
    <div className="p-8 bg-gray-100 w-full h-sreen">
      <div>
        <h1 className="text-3xl font-bold">Bem-vindo à Jambinha!</h1>
        <p className="my-4 text-lg">Explore novas leituras!</p>
      </div>

      <div className="h-full flex">
        <div className="flex flex-wrap gap-10">
          {livros.map((livro) => (
            <BookCard key={livro.id_livro} livro={livro} />
          ))}
        </div>
      </div>
    </div>
  );
}
