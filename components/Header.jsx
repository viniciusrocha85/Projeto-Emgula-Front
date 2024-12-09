import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import AuthButtons from "./AuthButtons";
import Cart from "./Cart";

function Header({ dark, cartItems }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  function toggleCart() {
    setIsCartOpen(!isCartOpen);
  }

  const classes = `header ${
    dark ? "bg-gray-800 text-white" : "bg-[#81D8D0] text-black"
  } p-6 shadow-lg`;

  return (
    <header className={classes}>
      <div className="flex justify-between items-center mb-6">
        <AuthButtons />

        <h1 className="text-5xl font-extrabold text-center font-sans">EmGula</h1>

        <div className="relative">
          <button onClick={toggleCart} className="text-xl">
            <FaShoppingCart className="text-3xl" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>
        </div>
      </div>

      <nav>
        <ul className="flex justify-center space-x-10 cursor-pointer">
          <li className="hover:text-gray-300 transition duration-300 transform hover:scale-110">
            <Link to="inicio">Início</Link>
          </li>
          <li className="hover:text-gray-300 transition duration-300 transform hover:scale-110">
            <Link to="sobre">Sobre</Link>
          </li>
          <li className="hover:text-gray-300 transition duration-300 transform hover:scale-110">
            <Link to="cardapio">Cardápio</Link>
          </li>
          <li className="hover:text-gray-300 transition duration-300 transform hover:scale-110">
            <Link to="contato">Contato</Link>
          </li>
        </ul>
      </nav>

      {/* Modal do Carrinho */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 relative w-11/12 md:w-1/3">
            <button
              onClick={toggleCart}
              className="absolute top-2 right-2 font-bold text-[#81D8D0]"
            >
              X
            </button>
            <Cart /> {/* Componente do carrinho */}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
