import React, { useState, useEffect } from "react";

export default function UserForm({ fechar, atualizarLista, locatarioEdicao }) {
  const [form, setForm] = useState({
    nome_locatario: "",
    email_locatario: "",
    registro_academico: "",
    telefone_locatario: "",
    data_nascimento: "",
    id_cargo: "",
    status: true
  });

  useEffect(() => {
    if (locatarioEdicao) {
      setForm({
        ...locatarioEdicao,
        status: locatarioEdicao.status ?? true, // garantir que status seja booleano
      });
    }
  }, [locatarioEdicao]);

  const handleSubmit = async (e) => {
  e.preventDefault();

  const body = {
    ...form,
    id_cargo: parseInt(form.id_cargo, 10),
    status: !!form.status,
  };

  console.log("📤 Enviando dados para API:", body); // ← DEBUG

  const url = locatarioEdicao
    ? `http://localhost:3000/locatarios/${locatarioEdicao.id_locatario}`
    : `http://localhost:3000/locatarios`;

  const method = locatarioEdicao ? "PUT" : "POST";

  try {
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const resultado = await res.json();
    console.log("📥 Resposta da API:", resultado); // ← DEBUG

    if (!res.ok) {
      console.error("❌ Erro ao salvar locatário:", resultado);
      alert("Erro ao registrar locatário.");
      return;
    }

    atualizarLista();
    fechar();
  } catch (err) {
    console.error("❌ Erro de requisição:", err);
    alert("Falha ao se comunicar com o servidor.");
  }
};


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded p-6 space-y-4 w-[600px]"
      >
        <h2 className="text-xl font-bold">
          {locatarioEdicao ? "Editar Locatário" : "Cadastrar Locatário"}
        </h2>

        <input
          name="nome_locatario"
          onChange={handleChange}
          value={form.nome_locatario}
          className="w-full p-2 border rounded"
          placeholder="Nome Completo"
        />
        <input
          name="email_locatario"
          onChange={handleChange}
          value={form.email_locatario}
          className="w-full p-2 border rounded"
          placeholder="Email"
        />

        <div className="flex gap-4">
          <input
            name="registro_academico"
            onChange={handleChange}
            value={form.registro_academico}
            className="w-full p-2 border rounded"
            placeholder="RA"
          />
          <input
            name="telefone_locatario"
            onChange={handleChange}
            value={form.telefone_locatario}
            className="w-full p-2 border rounded"
            placeholder="Telefone"
          />
        </div>

        <div className="flex justify-center gap-4">
          <select
            name="id_cargo"
            onChange={handleChange}
            value={form.id_cargo}
            className="w-1/2 p-2 border rounded"
          >
            <option value="">Cargo</option>
            <option value="3">Aluno</option>
            <option value="2">Professor</option>
          </select>

          <div className="flex w-1/2 items-center gap-2">
            <input
              type="checkbox"
              name="status"
              checked={form.status}
              onChange={handleChange}
            />
            <label htmlFor="status">Usuário Ativo</label>
          </div>
        </div>

        <input
          type="date"
          name="data_nascimento"
          onChange={handleChange}
          value={form.data_nascimento?.split("T")[0] || ""}
          className="w-full p-2 border rounded"
        />

        <div className="flex justify-between">
          <button type="submit" className="bg-black text-white px-6 py-2 rounded">
            Registrar
          </button>
          <button type="button" onClick={fechar} className="text-gray-500">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
