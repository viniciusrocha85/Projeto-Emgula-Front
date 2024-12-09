function Cart({ cartItems = [] }) {
  function removeItem(itemId) {
    console.log(`Removendo item com ID: ${itemId}`);
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price || 0);
    }, 0);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl text-black font-bold mb-4">Carrinho de Compras</h2>

      {cartItems.length === 0 ? (
        <p className="text-black">Seu carrinho está vazio.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between my-2">
              <div>
                <p className="font-semibold text-black">{item.name}</p>
                <p className="text-black">{(item.price || 0).toFixed(2)} R$</p>
              </div>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => removeItem(item.id)}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4">
        <h3 className="text-lg text-black font-bold">
          Total: {calculateTotal().toFixed(2)} R$
        </h3>
        <button
          className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded mt-4"
          disabled={cartItems.length === 0}
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}

export default Cart;
