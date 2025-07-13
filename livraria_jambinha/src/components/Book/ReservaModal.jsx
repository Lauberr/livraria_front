import React, { useEffect, useState } from "react";

export default function ReservaModal({ livroISBN, onClose }) {
  const [locatarioRA, setLocatarioRA] = useState("");
  const [dataDevolucao, setDataDevolucao] = useState("");
  const [cargoLocatario, setCargoLocatario] = useState("");
  const [mensagemCargo, setMensagemCargo] = useState("");
  const [idLocatario, setIdLocatario] = useState(null);

  useEffect(() => {
    const buscarCargo = async () => {
      if (locatarioRA.trim().length === 0) {
        setCargoLocatario("");
        setMensagemCargo("");
        setDataDevolucao("");
        return;
      }

      try {
        const resposta = await fetch(`http://localhost:3000/locatarios/ra/${locatarioRA}`);
        if (!resposta.ok) {
          setMensagemCargo("Locatário não encontrado.");
          setCargoLocatario("");
          setDataDevolucao("");
          return;
        }

        const data = await resposta.json();
        setCargoLocatario(data.nome_cargo);
        setIdLocatario(data.id_locatario);

        setMensagemCargo(`Locatário encontrado: ${data.nome_locatario} (${data.nome_cargo})`);

        const hoje = new Date();
        const dias = (data.id_cargo === 2 || data.id_cargo === 3) ? 30 : 14;
        const dataDevolucaoCalc = new Date(hoje.setDate(hoje.getDate() + dias));
        setDataDevolucao(dataDevolucaoCalc.toISOString().split("T")[0]);

      } catch (erro) {
        console.error("Erro ao buscar locatário:", erro);
        setMensagemCargo("Erro ao buscar locatário.");
        setCargoLocatario("");
        setDataDevolucao("");
      }
    };

    buscarCargo();
  }, [locatarioRA]);

  const handleReservar = async () => {
    if (!idLocatario) return alert("Locatário inválido.");

    try {
      const resposta = await fetch("http://localhost:3000/emprestimos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id_locatario: idLocatario,
          id_livro: livroISBN,
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Reservar Livro</h2>

        <label className="block mb-2">
          RA do Locatário:
          <input
            type="text"
            value={locatarioRA}
            onChange={(e) => setLocatarioRA(e.target.value)}
            className="w-full mt-1 border rounded p-2"
          />
        </label>

        {mensagemCargo && (
          <p className={`text-sm mb-3 ${cargoLocatario ? "text-green-600" : "text-red-500"}`}>
            {mensagemCargo}
          </p>
        )}

        <label className="block mb-2">
          ISBN do Livro:
          <input
            type="text"
            value={livroISBN}
            disabled
            className="w-full mt-1 border rounded p-2 bg-gray-100"
          />
        </label>

        <label className="block mb-4">
          Data de Devolução:
          <input
            type="date"
            value={dataDevolucao}
            disabled
            className="w-full mt-1 border rounded p-2 bg-gray-100"
          />
        </label>

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
            Cancelar
          </button>
          <button
            onClick={handleReservar}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            disabled={!idLocatario}
          >
            Reservar
          </button>
        </div>
      </div>
    </div>
  );
}
