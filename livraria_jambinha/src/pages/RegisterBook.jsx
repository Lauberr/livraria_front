import React, { useState } from 'react';

export default function RegisterBook() {
    const [formData, setFormData] = useState({
        titulo: '',
        autores: '',
        isbn: '',
        edicao: '',
        editora: '',
        categoria: '',
        subcategoria: '',
        unidades: 1
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Livro registrado:', formData);
    };

    return (
        <div className="p-17  w-full h-full bg-gray-200">
            <div className="bg-gray-100 p-8 rounded-lg max-w-6xl mx-auto mt-10">
                <h2 className="text-2xl font-semibold mb-6">Registrar Livro</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-4">
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
                                required
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
                                className="border rounded px-4 py-2 w-24"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800"
                        >
                            Registrar
                        </button>
                    </div>

                    {/* Coluna da Imagem */}
                    <div className="bg-gray-300 flex items-center justify-center rounded">
                        <div className="text-center">
                            <div className="w-28 h-28 bg-yellow-100 border rounded flex items-center justify-center mx-auto">
                                <img src="https://via.placeholder.com/60" alt="Imagem" className="object-cover" />
                            </div>
                            <p className="text-gray-600 mt-2">Capa do Livro</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
