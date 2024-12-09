import { useState } from "react";

function Product({ item, dark, addToCart }) {
  const [count, alterarCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function incrementar() {
    alterarCount(count + 1);
  }

  function decrementar() {
    if (count === 0) {
      return;
    }
    alterarCount(count - 1);
  }

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  // Adiciona o produto ao carrinho, com a quantidade selecionada
  function handleAddToCart() {
    if (count > 0) {
      addToCart({ ...item, quantity: count }); // Adiciona o produto com a quantidade ao carrinho
      alterarCount(0); // Reseta o contador após adicionar ao carrinho
    }
  }

  return (
    <div className={`max-w-sm rounded-lg border ${dark ? "border-gray-600" : "border-gray-300"} shadow-xl overflow-hidden p-4 ${dark ? "bg-gray-800" : "bg-white"}`}>
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover mb-4"
      />

      <div className="py-2">
        <h3 className={`text-xl font-semibold ${dark ? "text-gray-200" : "text-gray-800"}`}>{item.name}</h3>
        <p className={`text-lg font-bold ${dark ? "text-gray-300" : "text-gray-800"}`}>{item.caloriesPerServing} calories</p>
      </div>

      <div className="flex items-center mt-4">
        <button
          onClick={decrementar}
          disabled={count === 0}
          className="bg-red-500 text-white font-bold py-1 px-2 rounded-l hover:bg-red-600"
        >
          -
        </button>
        <span className="mx-2 text-lg font-semibold">{count}</span>
        <button
          onClick={incrementar}
          className="bg-green-500 text-white font-bold py-1 px-2 rounded-r hover:bg-green-600"
        >
          +
        </button>
      </div>

      <button
        onClick={handleAddToCart}
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        disabled={count === 0}
      >
        Adicionar ao Carrinho
      </button>

      <button
        onClick={toggleModal}
        className="mt-4 bg-[#81D8D0] text-black py-2 px-4 rounded hover:bg-blue-600"
      >
        Mostrar Detalhes
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className={`rounded-lg p-4 w-11/12 md:w-1/3 relative ${dark ? "bg-gray-800" : "bg-white"}`}>
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-[#81D8D0] font-bold"
            >
              X
            </button>
            <h3 className={`text-xl font-semibold ${dark ? "text-gray-200" : "text-gray-800"}`}>{item.name}</h3>
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover my-2" />
            <h4 className="font-semibold">Ingredientes:</h4>
            <ul className="list-disc list-inside mb-4">
              {item.ingredients.map((ingredient, index) => (
                <li key={index} className={`text-gray-${dark ? "300" : "700"}`}>{ingredient}</li>
              ))}
            </ul>
            <h4 className="font-semibold">Instruções:</h4>
            <p className={`text-gray-${dark ? "300" : "700"}`}>{item.instructions.join(" ")}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
