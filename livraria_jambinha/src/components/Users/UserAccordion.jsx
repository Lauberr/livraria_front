import React, { useState, useEffect } from 'react';
import { Icon } from "@iconify/react";

export default function LocatarioCard({ locatario, aoEditar, aoDesativar }) {
  const [mostrarAccordion, setMostrarAccordion] = useState(false);
  const [dividas, setDividas] = useState([]);

  const toggleAccordion = async () => {
    setMostrarAccordion(!mostrarAccordion);
    if (!mostrarAccordion) {
      const res = await fetch("http://localhost:3000/dividas/nao-quitadas");
      const todas = await res.json();
      const minhas = todas.filter((d) => d.id_locatario === locatario.id_locatario);
      setDividas(minhas);
    }
  };

  const quitarDivida = async (id) => {
    await fetch(`http://localhost:3000/dividas/${id}/quitar`, { method: 'PUT' });
    toggleAccordion(); // Atualiza lista
  };

  return (
    <div className="bg-white px-6 py-4 border-t border-gray-200 rounded">
      <div className="grid grid-cols-15 items-center">
        <div className="col-span-3">
          <div className="font-medium">{locatario.nome_locatario}</div>
          <div className="text-sm text-gray-500">ID {locatario.id_locatario}</div>
        </div>

        <div className="col-span-3">
          <span className="text-sm font-semibold flex items-center mt-1">
            <Icon icon="mynaui:user" className="text-xl" /> {locatario.tipo || 'Aluno'}
          </span>
          <div className="text-sm text-gray-500">
            Nascido em {new Date(locatario.data_nascimento).toLocaleDateString()}
          </div>
        </div>

        <div className="col-span-3">
          <div>{locatario.email_locatario}</div>
          <div className="text-sm text-gray-500">{locatario.telefone_locatario}</div>
        </div>

        <div className="col-span-2">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${locatario.status ? 'bg-yellow-400 text-white' : 'bg-gray-400 text-white'}`}>
            {locatario.status ? 'Ativo' : 'Inativo'}
          </span>
        </div>

        <div className="col-span-4 flex flex-col items-end gap-2">
          <div className="flex gap-2">
            <button onClick={aoDesativar} className="border border-red-400 text-red-400 hover:bg-red-100 px-3 py-1 rounded">Excluir</button>
            <button onClick={aoEditar} className="border border-red-400 text-red-400 hover:bg-red-100 px-3 py-1 rounded">Editar</button>
            <button onClick={toggleAccordion} className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded">Ver dívidas</button>
          </div>
        </div>
      </div>

      {mostrarAccordion && (
        <div className="mt-4 bg-gray-50 border p-4 rounded">
          <h4 className="font-semibold mb-2">Dívidas</h4>
          {dividas.length === 0 ? (
            <p className="text-sm text-gray-500">Sem dívidas.</p>
          ) : (
            dividas.map((d) => (
              <div key={d.id_divida} className="flex justify-between items-center py-1">
                <span>{d.titulo} - R$ {d.valor.toFixed(2)}</span>
                <button
                  onClick={() => quitarDivida(d.id_divida)}
                  className="text-sm px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Quitar
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}