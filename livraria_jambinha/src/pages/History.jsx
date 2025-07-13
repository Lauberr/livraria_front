import React, { useEffect, useState } from "react";
import HistoryCard  from "../components/History/HistoryCard";

export default function History() {
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    async function carregarHistorico() {
      try {
        const resposta = await fetch("http://localhost:3000/emprestimos"); 
        const dados = await resposta.json();

        const formatado = dados.map((item) => ({
          id: `${item.id_locatario}-${item.id_livro}-${item.data_hora_emprestimo}`,
          capa: "/imagens/DomCasmurro",
          titulo: item.titulo || "Livro Exemplo",
          autor: item.autor || "Autor Exemplo",
          ano: new Date(item.data_hora_emprestimo).getFullYear(),
          edicao: item.edicao || "",
          categoria1: item.categoria1 || "Categoria Exemplo",
          categoria2: item.categoria2 || "",
          status: "reservado", // Ex: alterar baseado em data_devolucao
          tipoUsuario: item.tipo_usuario || "Aluno",
        }));

        setHistorico(formatado);
      } catch (erro) {
        console.error("Erro ao carregar histórico:", erro);
      }
    }

    carregarHistorico();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-4">
      <div className="flex justify-between items-center mb-6">
        <button className="bg-white px-4 py-2 rounded shadow border text-gray-700 hover:bg-gray-50">
          Filtrar <span className="ml-1">▾</span>
        </button>
      </div>

      <h2 className="text-lg font-semibold mb-4">Histórico</h2>

      <div className="grid grid-cols-12 bg-white rounded-t-md px-6 py-3 font-medium text-gray-600">
        <div className="col-span-5">Título</div>
        <div className="col-span-4">Categoria</div>
        <div className="col-span-3 text-right">Status</div>
      </div>

      {historico.map((livro) => (
        <HistoryCard key={livro.id} livro={livro} />
      ))}
    </div>
  );
}
