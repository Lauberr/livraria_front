import { NavLink } from "react-router-dom";

export function Sidebar() {
  const getEstilo = (props) => {
    let estilo = `
      p-4
      flex items-center
      gap-3 py-2 px-4 w-full
      rounded
      text-lg text-black 
      hover:bg-orange-200	
    `;
    let ativo = "bg-amber-500";
    let final = props.isActive ? estilo + ativo : estilo;

    return final;
  };

  return (
    <aside className="flex flex-col gap-5 bg-orange-100	 min-w-72 w-2/12 items-center">

      {/* Cabeçalho da Sidebar */}
      <div className={`flex justify-center items-center gap-2 bg-orange-100	 text-black px-1 py-5 h-16 text-2xl font-black`}>
        <span className="border-l-amber-300	 border-l-8 px-2">CRUD OPERATIONS</span>
      </div>

      {/* Navegação da Sidebar */}
      <nav className={`flex flex-col justify-between items-center gap-2 w-3/4 h-full`}>
        <div className="flex flex-col justify-start items-center gap-2 w-3/4 h-full">

          {/* Início */}
          <NavLink to="home" className={getEstilo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
            </svg>

            <div>Início</div>
          </NavLink>

          {/* Pesquisa */}
          <NavLink to="search" className={getEstilo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path d="M444-200h70v-50q50-9 86-39t36-89q0-42-24-77t-96-61q-60-20-83-35t-23-41q0-26 18.5-41t53.5-15q32 0 50 15.5t26 38.5l64-26q-11-35-40.5-61T516-710v-50h-70v50q-50 11-78 44t-28 74q0 47 27.5 76t86.5 50q63 23 87.5 41t24.5 47q0 33-23.5 48.5T486-314q-33 0-58.5-20.5T390-396l-66 26q14 48 43.5 77.5T444-252v52Zm36 120q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>

            <div>Pesquisar</div>
          </NavLink>

          {/* Histórico */}
          <NavLink to="history" className={getEstilo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000">
              <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
            </svg>

            <div>Histórico</div>
          </NavLink>
          
          {/* Registrar Livro */}
          <NavLink to="bookregistrer" className={getEstilo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000">
              <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
            </svg>

            <div>Registrar Livro</div>
          </NavLink>
          
          {/* Locatários */}
          <NavLink to="users" className={getEstilo}>
            
            <div>Locatários</div>
          </NavLink>
        </div>

        {/* Link para sair */}

        <div>
          <NavLink to="/" className="mb-8 flex items-center justify-center p-2 w-full rounded text-lg text-black hover:bg-yellow-500 ">
            <div className="pr-2">Sair</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
            </svg>
          </NavLink>
        </div>

      </nav>

    </aside>
  );
}