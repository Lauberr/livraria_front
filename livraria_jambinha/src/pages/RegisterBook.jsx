import React, { useState } from 'react';
import ImageUpload from "../components/RegisterBook/ImageUpload";

export default function RegisterBook() {
    const [formData, setFormData] = useState({
        titulo: '',
        autores: '',
        isbn: '',
        edicao: '',
        editora: '',
        categoria: '',
        subcategoria: '',
        unidades: 1,
        capa: null,
    });

    const [mensagem, setMensagem] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

   const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('titulo', formData.titulo);
    form.append('isbn', formData.isbn);
    form.append('qt_disponivel', formData.unidades);
    form.append('disponivel', '1'); // ou '0' se não estiver disponível
    form.append('edicao', formData.edicao || '');

    if (formData.capa) {
        form.append('capa', formData.capa); // aqui vai a imagem real
    }

    try {
        const res = await fetch('http://localhost:3000/livros', {
            method: 'POST',
            body: form
        });

        if (!res.ok) throw new Error(`Erro: ${res.statusText}`);
        const result = await res.json();
        console.log('Livro registrado com sucesso:', result);
    } catch (err) {
        console.error('Erro ao registrar livro:', err);
    }
};



    return (
        <div className="p-17 w-full h-screen bg-gray-200">
            <div className="bg-gray-100 p-10 rounded-xl">
                <h2 className="text-2xl font-semibold mb-6">Registrar Livro</h2>

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
                            placeholder="Autores"
                            value={formData.autores}
                            onChange={handleChange}
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
                                <option value="">Categoria</option>
                                <option value="Romance">Romance</option>
                                <option value="Ficção">Ficção</option>
                                <option value="Técnico">Técnico</option>
                            </select>
                            <select
                                name="subcategoria"
                                value={formData.subcategoria}
                                onChange={handleChange}
                                className="border rounded px-4 py-2"
                            >
                                <option value="">Subcategoria</option>
                                <option value="Clássico">Clássico</option>
                                <option value="Moderno">Moderno</option>
                                <option value="Acadêmico">Acadêmico</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-4">
                            <label className="text-sm font-medium">Nº unidades</label>
                            <input
                                type="number"
                                name="unidades"
                                min="1"
                                value={formData.unidades}
                                onChange={handleChange}
                                className="border rounded px- py-2 w-24"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-black text-white py-3 px-6 rounded hover:bg-gray-800"
                        >
                            Registrar
                        </button>
                    </div>

                    {/* Imagem */}
                    <div className="bg-gray-300 flex flex-wrap items-center justify-center rounded col-span-2">
                        <ImageUpload onImageSelect={(file) =>
                            setFormData((prev) => ({ ...prev, capa: file }))
                        } />
                    </div>
                </form>
            </div>
        </div>
    );
}
