import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ListaPostagens from '../paginas/ListaPostagens';
import DetalhesPostagem from '../paginas/DetalhesPostagem';

const RotasAplicacao = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/postagens" />} />
      <Route path="/postagens" element={<ListaPostagens />} />
      <Route path="/dados/:id" element={<DetalhesPostagem />} />
    </Routes>
  );
};

export default RotasAplicacao;
