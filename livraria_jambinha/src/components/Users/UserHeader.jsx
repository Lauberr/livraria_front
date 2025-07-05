// src/components/Users/UserHeader.jsx
import React from 'react';

export default function UserHeader() {
  return (
    <div className="grid grid-cols-12 bg-white rounded-t-md px-6 py-3 font-medium text-gray-600">
      <div className="col-span-3">Nome <div className="text-sm text-gray-400">ID</div></div>
      <div className="col-span-3">Curso <div className="text-sm text-gray-400">Data de Nascimento</div></div>
      <div className="col-span-3">Email <div className="text-sm text-gray-400">Telefone</div></div>
      <div className="col-span-3 text-right">Status / Ações</div>
    </div>
  );
}
