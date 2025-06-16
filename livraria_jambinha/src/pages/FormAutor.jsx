import React, { useState } from 'react';
import CadAutor from '../components/FormAutor/CadAutor';
import ListaAutores from '../components/FormAutor/ListaAutores';

export default function FormAutor() {
  

  return (
    <div className='p-8 bg-gray-300 w-full h-full'>
      <CadAutor/>
      <ListaAutores />
    </div>
  );
};

