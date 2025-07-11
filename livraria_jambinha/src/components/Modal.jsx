import React from 'react';

export default function Modal({ tipo = 'sucesso', mensagem }) {
  const estilo = tipo === 'erro'
    ? 'bg-red-100 text-red-800 border-red-400'
    : 'bg-green-100 text-green-800 border-green-400';

  return (
    <div className={`border p-4 rounded mb-6 ${estilo}`}>
      <strong>{tipo === 'erro' ? 'Erro: ' : 'Sucesso: '}</strong> {mensagem}
    </div>
  );
}
