import React, { useState } from "react";
import HistoryCard from "../components/History/HistoryCard";

export default function History() {
  const [historico, setHistorico] = useState([]);
  const [ra, setRa] = useState("");
  const [erro, setErro] = useState("");
  const formatarDataUTC = (dataString) => {
    const data = new Date(dataString);
    const ano = data.getUTCFullYear();
    const mes = String(data.getUTCMonth() + 1).padStart(2, "0");
    const dia = String(data.getUTCDate()).padStart(2, "0");
    const hora = String(data.getUTCHours()).padStart(2, "0");
    const minuto = String(data.getUTCMinutes()).padStart(2, "0");
    const segundo = String(data.getUTCSeconds()).padStart(2, "0");
    return `${ano}-${mes}-${dia}T${hora}:${minuto}:${segundo}Z`;
  };


  const buscarHistorico = async () => {
    if (!ra.trim()) return;

    try {
      const res = await fetch(`http://localhost:3000/emprestimos/historico/${ra}`);
      if (!res.ok) {
        setErro("RA não encontrado ou sem empréstimos.");
        setHistorico([]);
        return;
      }

      const dados = await res.json();

      const hoje = new Date();

      const formatado = dados.map((item) => {
        const dataEmprestimo = new Date(item.data_hora_emprestimo);
        const dataDevolucao = new Date(item.data_devolucao);

        let status;
        if (dataDevolucao < hoje && dataDevolucao.toDateString() !== dataEmprestimo.toDateString()) {
          status = "devolvido";
        } else if (dataDevolucao < hoje) {
          status = "atrasado";
        } else {
          status = "reservado";
        }

        return {
          ...item,
          id: `${item.id_locatario}-${item.id_livro}-${item.data_hora_emprestimo}`,
          status,
          titulo: item.titulo,
          autor: item.nome_autor,
          capa: item.capa,
          edicao: item.edicao,
          categoria1: item.categoria1,
        };
      });



      setHistorico(formatado);
      setErro("");
    } catch (err) {
      console.error("Erro ao buscar histórico:", err);
      setErro("Erro ao buscar dados.");
    }
  };

  const devolverLivro = async (livro) => {
    try {
      const now = new Date().toISOString();
      await fetch(`http://localhost:3000/emprestimos/${livro.id_locatario}/${livro.id_livro}/${livro.data_hora_emprestimo}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data_devolucao: now }),
      });

      await fetch(`http://localhost:3000/livros/${livro.id_livro}/incrementar`, {
        method: "PUT",
      });

      alert("Livro devolvido com sucesso!");
      carregarHistorico();
    } catch (erro) {
      console.error("Erro ao devolver livro:", erro);
      alert("Erro ao devolver livro.");
    }
  };



  const handleDevolver = async (livro) => {
    try {
      const dataEmprestimoFormatada = formatarDataUTC(livro.data_hora_emprestimo);

      const res = await fetch(
        `http://localhost:3000/emprestimos/${livro.id_locatario}/${livro.id_livro}/${dataEmprestimoFormatada}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            data_devolucao: new Date().toISOString(),
          }),
        }
      );

      if (!res.ok) throw new Error("Erro ao devolver livro.");

      alert("Livro devolvido com sucesso.");

      carregarHistorico();
    } catch (err) {
      console.error(err);
      alert("Erro ao processar devolução.");
    }
  };




  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-4">
      <h2 className="text-2xl font-bold mb-4">Histórico de Empréstimos</h2>

      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          value={ra}
          onChange={(e) => setRa(e.target.value)}
          placeholder="Digite o RA do locatário"
          className="p-2 border rounded w-72"
        />
        <button
          onClick={buscarHistorico}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Buscar
        </button>
      </div>

      {erro && <p className="text-red-500">{erro}</p>}

      {historico.length > 0 && (
        <>
          <div className="w-3/4 grid grid-cols-12 bg-white rounded-t-md px-6 py-3 font-medium text-gray-600">
            <div className="col-span-5">Título</div>
            <div className="col-span-4">Categoria</div>
            <div className="col-span-3 text-center pl-15">Status</div>
          </div>

          {historico.map((livro) => (
            <HistoryCard key={livro.id} livro={livro} aoDevolver={() => handleDevolver(livro)} />
          ))}
        </>
      )}
    </div>
  );
}
