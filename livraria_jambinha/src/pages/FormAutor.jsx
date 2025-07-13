import React, { useState } from 'react';
import CadAutor from '../components/FormAutor/CadAutor';
import ListaAutores from '../components/FormAutor/ListaAutores';

export default function FormAutor() {
  const [autorAdicionado, setAutorAdicionado] = useState(null);

  return (
    <div className='p-17 bg-gray-100 w-full min-h-full'>
      <h1 className='text-2xl w-full text-center pb-5'><i>Gerenciar Autores</i></h1> 
      
      <CadAutor onAutorCadastrado={setAutorAdicionado} />
      <ListaAutores autorAdicionado={autorAdicionado} />
    </div>
  );
}
