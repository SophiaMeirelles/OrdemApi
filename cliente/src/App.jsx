import React, { useState } from "react";
import "./App.css";
import ListaPersonagens from "./components/ListaPersonagens";
import { fetchPersonagens } from "./services/api";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/Login';
import Register from './pages/Register'; // Importando o componente Register

const App = () => {

  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />  {/* Definindo a rota de registro */}

      </Routes>
    </>
  );
};

export default App;