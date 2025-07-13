// src/components/Users/UserHeader.jsx
import React from 'react';

export default function UserHeader() {
  return (
    <div className="grid items-center grid-cols-15 bg-white rounded-t-md px-6 py-3 font-medium text-gray-600">
      <div className="col-span-3">Nome <div className="text-sm text-gray-400">RA<div className="text-sm text-gray-400">ID</div></div></div>
      <div className="col-span-3">Tipo<div className="text-sm text-gray-400">Data de Nascimento</div></div>
      <div className="col-span-3">Email <div className="text-sm text-gray-400">Telefone</div></div>
      <div className="col-span-3 text-end">Status</div>
      <div className="col-span-3 text-center">Ações</div>
    </div>
  );
}
