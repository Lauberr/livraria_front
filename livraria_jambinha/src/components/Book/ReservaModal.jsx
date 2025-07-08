import React, { useState } from "react";

export default function ReservaModal({ livroId, onClose }) {
  const [locatarioId, setLocatarioId] = useState("");
  const [dataDevolucao, setDataDevolucao] = useState("");

  const handleReservar = async () => {
    try {
      const resposta = await fetch("http://localhost:3000/emprestimos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id_livro: livroId,
          id_locatario: parseInt(locatarioId),
          data_devolucao: dataDevolucao,
        }),
      });

      if (!resposta.ok) throw new Error("Erro ao reservar livro");

      alert("Livro reservado com sucesso!");
      onClose();
    } catch (error) {
      console.error(error);
      alert("Erro ao reservar livro");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Reservar Livro</h2>

        <label className="block mb-2">
          ID do Locatário:
          <input
            type="text"
            value={locatarioId}
            onChange={(e) => setLocatarioId(e.target.value)}
            className="w-full mt-1 border rounded p-2"
          />
        </label>

        <label className="block mb-4">
          Data de Devolução:
          <input
            type="date"
            value={dataDevolucao}
            onChange={(e) => setDataDevolucao(e.target.value)}
            className="w-full mt-1 border rounded p-2"
          />
        </label>

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
            Cancelar    
          </button>
          <button onClick={handleReservar} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Reservar
          </button>
        </div>
      </div>
    </div>
  );
}
