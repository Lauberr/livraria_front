import React, { useEffect, useState } from 'react';

export default function ListaAutores() {
  const [autores, setAutores] = useState([]);
  const [buscaId, setBuscaId] = useState('');
  const [autorEncontrado, setAutorEncontrado] = useState(null);
  const [editandoId, setEditandoId] = useState(null);
  const [novoNome, setNovoNome] = useState('');

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
        setAutorEncontrado(null);
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

  const iniciarEdicao = (autor) => {
    setEditandoId(autor.id_autor);
    setNovoNome(autor.nome_autor);
  };

  const cancelarEdicao = () => {
    setEditandoId(null);
    setNovoNome('');
  };

  const salvarEdicao = async (id) => {
    try {
      const resposta = await fetch(`http://localhost:3000/api/autores/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome_autor: novoNome }),
      });

      if (resposta.ok) {
        alert('Autor atualizado com sucesso!');
        setEditandoId(null);
        setNovoNome('');
        carregarAutores();
      } else {
        const erro = await resposta.json();
        alert('Erro: ' + erro.detalhe);
      }
    } catch (erro) {
      console.error('Erro ao atualizar autor:', erro);
    }
  };

  useEffect(() => {
    carregarAutores();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Lista de Autores</h2>

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

      {autorEncontrado && (
        <div className="mb-6 p-4 bg-gray-300 border border-gray-300 rounded">
          <strong>Autor encontrado:</strong> {autorEncontrado.nome_autor} (ID: {autorEncontrado.id_autor})
        </div>
      )}

      {autores.length === 0 ? (
        <p>Nenhum autor cadastrado.</p>
      ) : (
        <ul className="space-y-2">
          {autores.map((autor) => (
            <li
              key={autor.id_autor}
              className="bg-white p-4 rounded shadow flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2"
            >
              {editandoId === autor.id_autor ? (
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full">
                  <input
                    type="text"
                    value={novoNome}
                    onChange={(e) => setNovoNome(e.target.value)}
                    className="border px-2 py-1 rounded w-full sm:w-auto"
                  />
                  <div className="flex gap-2">
                    <button
                      className="bg-yellow-400 text-white px-3 py-1 rounded"
                      onClick={() => salvarEdicao(autor.id_autor)}
                    >
                      Salvar
                    </button>
                    <button
                      className="bg-gray-400 text-white px-3 py-1 rounded"
                      onClick={cancelarEdicao}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <span>{autor.nome_autor}</span>
                  <div className="space-x-2">
                    <button
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                      onClick={() => iniciarEdicao(autor)}
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
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
