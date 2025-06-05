import Capa from "../assets/capa-laranjamecanica.jpeg"

export function BookCard() {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-64">
            <img
                src = {Capa}
                alt = "Capa do Livro"
                className = "w-full h-80 object-cover p-5"
            />
            <div className = "p-5 pt-0">
                <h2 className = "text-lg font-semibold text-gray-800">Nome do Livro</h2>
                <p className = "text-gray-600">Autor: Fulano de Tal</p>
            </div>
        </div>
    )
}