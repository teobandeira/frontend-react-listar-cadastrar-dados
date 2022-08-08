import './App.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Profissionais from './Profissionais';
import Tipos from './Tipos';
import CadastrarProfissional from './CadastrarProfissional';
import CadastrarTipo from './CadastrarTipo';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profissionais" element={<Profissionais />} />
        <Route path="/tipos" element={<Tipos />} />
        <Route path="/cadastrar-profissional" element={<CadastrarProfissional />} />
        <Route path="/cadastrar-tipo" element={<CadastrarTipo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;