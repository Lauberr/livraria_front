import React, { useState } from 'react';

export default function CadAutor({ onAutorCadastrado }) {
  const [nomeAutor, setNomeAutor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resposta = await fetch('http://localhost:3000/api/autores', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome_autor: nomeAutor })
    });

    if (resposta.ok) {
      const novoAutor = await resposta.json();
      alert('Autor cadastrado com sucesso!');
      setNomeAutor('');
      onAutorCadastrado(novoAutor);
    } else {
      const erro = await resposta.json();
      alert('Erro: ' + erro.detalhe);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Cadastrar Autor</h2>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <label className="text-sm font-medium text-gray-700">Nome do autor</label>

        <input
          type="text"
          value={nomeAutor}
          onChange={(e) => setNomeAutor(e.target.value)}
          placeholder="Ex: Clarice Lispector"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          required
        />

        <button
          type="submit"
          className="bg-gray-400 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
