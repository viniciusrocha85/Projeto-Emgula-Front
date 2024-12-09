import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

import Cardapio from "./pages/Cardapio";
import Contato from "./pages/Contato";
import Erro404 from "./pages/Erro404";
import Inicio from "./pages/Inicio";
import Sobre from "./pages/Sobre";

import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import "./style.css";

function App() {
  const [dark, alterarDark] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  function trocarTema() {
    alterarDark(!dark);
  }

  function addToCart(item) {
    setCartItems((prevItems) => [...prevItems, item]);
  }

  return (
    <div
      className={
        dark
          ? "bg-gray-800 text-white"
          : "bg-white text-gray-800 min-h-screen transition-colors duration-300"
      }
    >
      <button
        onClick={trocarTema}
        className="fixed bottom-4 right-4 bg-[#81D8D0] text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-[#81BEF0] transition duration-300"
      >
        {dark ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
      <div className="flex flex-col min-h-screen">
        <Header dark={dark} cartItems={cartItems} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Main dark={dark} addToCart={addToCart} />} />
            <Route path="/cadastro" element={<Cadastro dark={dark} />} />
            <Route path="/login" element={<Login dark={dark} />} />
            <Route path="/contato" element={<Contato dark={dark} />} />
            <Route path="/cardapio" element={<Cardapio dark={dark} />} />
            <Route path="/erro404" element={<Erro404 dark={dark} />} />
            <Route path="/sobre" element={<Sobre dark={dark} />} />
            <Route path="/inicio" element={<Inicio dark={dark} />} />
          </Routes>
        </main>
        <Footer dark={dark} />
      </div>
    </div>
  );
}

export default App;