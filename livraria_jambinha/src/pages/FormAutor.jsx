import React, { useState } from 'react';
import CadAutor from '../components/FormAutor/CadAutor';
import ListaAutores from '../components/FormAutor/ListaAutores';

export default function FormAutor() {
  

  return (
    <div className='p-17 bg-gray-200 w-full min-h-full'>
      <h1 className='text-2xl w-full text-center pb-5'><i>Teste de conexão com tabela Autores...</i></h1> 
      <CadAutor/>
      <ListaAutores />
    </div>
  );
};

