import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ImageUpload from "../components/RegisterBook/ImageUpload";

export default function BookEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    titulo: "",
    isbn: "",
    edicao: "",
    qt_disponivel: 1,
    disponivel: true,
    autores: [],
    editora: "",
    categoria: [],
    subcategoria: [],
    capa: null,
    capaPreview: "",
  });
  const [mensagem, setMensagem] = useState("");
  const [categorias, setCategorias] = useState([]);
  const [subcategorias, setSubcategorias] = useState([]);

  useEffect(() => {
    async function fetchDados() {
      try {
        const [resCat, resSub, resAut, resEdit] = await Promise.all([
          fetch('http://localhost:3000/api/categoria'),
          fetch('http://localhost:3000/api/subcategorias'),
          fetch('http://localhost:3000/api/autores'),
          fetch('http://localhost:3000/api/editoras')
        ]);

        const [dataCat, dataSub, dataAut, dataEdit] = await Promise.all([
          resCat.json(),
          resSub.json(),
          resAut.json(),
          resEdit.json()
        ]);

        setCategorias(dataCat);
        setSubcategorias(dataSub);
        setAutores(dataAut);
        setEditoras(dataEdit);
      } catch (err) {
        console.error('Erro ao carregar dados:', err);
      }
    }

    fetchDados();

    
    async function fetchLivro() {
      try {
        const res = await fetch(`http://localhost:3000/livros/${id}`);
        const data = await res.json();
        setFormData({
          titulo: data.titulo || "",
          isbn: data.isbn || "",
          edicao: data.edicao || "",
          qt_disponivel: data.qt_disponivel || 1,
          disponivel: !!data.disponivel,
          autores: data.autores?.map(a => a.nome_autor) || [],
          editora: data.editora?.nome_editora || "",
          categoria: data.categorias?.map(c => c.nome_cat) || [],
          subcategoria: data.categorias?.map(c => c.nome_subcat) || [],
          capa: null,
          capaPreview: `http://localhost:3000${data.capa}` || "",
        });
      } catch (err) {
        console.error("Erro ao buscar livro:", err);
      }
    }

    fetchLivro();
  }, [id]);


  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData(prev => ({ ...prev, [name]: e.target.checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("titulo", formData.titulo);
    form.append("isbn", formData.isbn);
    form.append("qt_disponivel", formData.qt_disponivel);
    form.append("edicao", formData.edicao);
    form.append("disponivel", formData.disponivel ? 1 : 0);
    form.append("autores", JSON.stringify(formData.autores));
    form.append("editora", formData.editora);
    form.append("categoria", JSON.stringify(formData.categoria));
    form.append("subcategoria", JSON.stringify(formData.subcategoria));
    if (formData.capa) {
      form.append("capa", formData.capa);
    }

    try {
      const res = await fetch(`http://localhost:3000/livros/${id}`, {
        method: "PUT",
        body: form,
      });

      if (!res.ok) throw new Error("Erro ao atualizar livro");

      setMensagem("Livro atualizado com sucesso!");
      setTimeout(() => navigate(`/livro/${id}`), 1500);
    } catch (err) {
      console.error(err);
      setMensagem("Erro ao atualizar livro.");
    }
  };

  return (
    <div className="p-17 w-full h-full bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-xl">
        <h2 className="text-2xl font-semibold mb-6">Editar Livro</h2>

        {mensagem && <div className="mb-4 text-sm text-blue-600">{mensagem}</div>}

        <form onSubmit={handleSubmit} className="grid grid-cols-5 gap-6">
          <div className="flex flex-col space-y-7 col-span-3">
            <input
              type="text"
              name="titulo"
              placeholder="Título"
              value={formData.titulo}
              onChange={handleChange}
              className="border rounded px-4 py-2"
              required
            />
            <input
              type="text"
              name="autores"
              placeholder="Autores (separados por vírgula)"
              value={formData.autores.join(', ')}
              onChange={(e) => {
                setFormData((prev) => ({
                  ...prev,
                  autores: e.target.value.split(",").map(a => a.trim())
                }));
              }}
              className="border rounded px-4 py-2"
              required
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="isbn"
                placeholder="ISBN"
                value={formData.isbn}
                onChange={handleChange}
                className="border rounded px-4 py-2"
              />
              <input
                type="text"
                name="edicao"
                placeholder="Edição"
                value={formData.edicao}
                onChange={handleChange}
                className="border rounded px-4 py-2"
              />
            </div>
            <input
              type="text"
              name="editora"
              placeholder="Editora"
              value={formData.editora}
              onChange={handleChange}
              className="border rounded px-4 py-2"
            />
            <div className="grid grid-cols-2 gap-4">
              <select
                name="categoria"
                value={formData.categoria}
                onChange={handleChange}
                className="border rounded px-4 py-2"
              >
                <option value="">Selecione uma categoria</option>
                {categorias.map(cat => (
                  <option key={cat.id_cat} value={cat.id_cat}>
                    {cat.nome_cat}
                  </option>
                ))}
              </select>

              <select
                name="subcategoria"
                value={formData.subcat}
                onChange={handleChange}
                className="border rounded px-4 py-2"
              >
                <option value="">Selecione uma subcategoria</option>
                {subcategorias.map(sub => (
                  <option key={sub.id_subcat} value={sub.id_subcat}>
                    {sub.nome_subcat}
                  </option>
                ))}
              </select>

            </div>
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium">Nº unidades</label>
              <input
                type="number"
                name="qt_disponivel"
                min="1"
                value={formData.qt_disponivel}
                onChange={handleChange}
                className="border rounded px- py-2 w-24"
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">Disponível</label>
              <input
                type="checkbox"
                name="disponivel"
                checked={formData.disponivel}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white py-3 px-6 rounded hover:bg-gray-700"
            >
              Atualizar
            </button>
          </div>

          <div className="bg-gray-200 flex flex-col items-center justify-center col-span-2 rounded p-4">
            <p className="mb-2 text-sm text-gray-500">Imagem atual:</p>
            <img
              src={formData.capaPreview}
              alt="Capa atual"
              className="w-40 h-56 object-contain mb-4 border"
            />
            <ImageUpload onImageSelect={(file) => setFormData((prev) => ({ ...prev, capa: file }))} />
          </div>
        </form>
      </div>
    </div>
  );
}
