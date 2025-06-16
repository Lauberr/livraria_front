import React, { useEffect, useState } from 'react';

export default function ListaAutores() {
  const [autores, setAutores] = useState([]);
  const [buscaId, setBuscaId] = useState('');
  const [autorEncontrado, setAutorEncontrado] = useState(null);

  const carregarAutores = async () => {
    try {
      const resposta = await fetch('http://localhost:3000/api/autores');
      const dados = await resposta.json();
      setAutores(dados);
    } catch (erro) {
      console.error('Erro ao buscar autores:', erro);
    }
  };

  const deletarAutor = async (id) => {
    if (!window.confirm('Deseja realmente deletar este autor?')) return;

    try {
      const resposta = await fetch(`http://localhost:3000/api/autores/${id}`, {
        method: 'DELETE',
      });

      if (resposta.status === 204) {
        alert('Autor deletado com sucesso!');
        carregarAutores();
        setAutorEncontrado(null); // limpa se foi deletado
      } else {
        const erro = await resposta.json();
        alert('Erro ao deletar: ' + erro.detalhe);
      }
    } catch (erro) {
      console.error('Erro ao deletar autor:', erro);
    }
  };

  const buscarAutorPorId = async () => {
    if (!buscaId) return alert('Informe o ID do autor.');

    try {
      const resposta = await fetch(`http://localhost:3000/api/autores/${buscaId}`);
      if (resposta.ok) {
        const autor = await resposta.json();
        setAutorEncontrado(autor);
      } else {
        setAutorEncontrado(null);
        alert('Autor não encontrado.');
      }
    } catch (erro) {
      console.error('Erro ao buscar autor:', erro);
    }
  };

  useEffect(() => {
    carregarAutores();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Lista de Autores</h2>

      {/* Campo de busca por ID */}
      <div className="mb-6">
        <input
          type="number"
          placeholder="Digite o ID do autor"
          value={buscaId}
          onChange={(e) => setBuscaId(e.target.value)}
          className="bg-white px-3 py-2 rounded mr-2"
        />
        <button
          onClick={buscarAutorPorId}
          className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Buscar autor por ID
        </button>
      </div>

      {/* Resultado da busca */}
      {autorEncontrado && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded">
          <strong>Autor encontrado:</strong> {autorEncontrado.nome_autor} (ID: {autorEncontrado.id_autor})
        </div>
      )}

      {/* Lista geral */}
      {autores.length === 0 ? (
        <p>Nenhum autor cadastrado.</p>
      ) : (
        <ul className="space-y-2">
          {autores.map((autor) => (
            <li key={autor.id_autor} className="bg-white p-4 rounded shadow flex justify-between items-center">
              <span>{autor.nome_autor}</span>
              <div className="space-x-2">
                <button
                  className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                  onClick={() => alert('Funcionalidade de edição em construção')}
                >
                  Editar
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  onClick={() => deletarAutor(autor.id_autor)}
                >
                  Deletar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
