import { useEffect, useState } from "react";
import Product from "../components/Product";
import Section from "../components/Section";

function Cardapio({ dark }) {
  const [produtos, alterarProdutos] = useState([]);
  const [cartItems, setCartItems] = useState([]); 
  
  useEffect(() => {
    buscarProdutos();
  }, []);

  async function buscarProdutos() {
    const resposta = await fetch("https://dummyjson.com/recipes");
    const dados = await resposta.json();
    alterarProdutos(dados.recipes);
  }

  function addToCart(produto) {
    setCartItems((prevItems) => [...prevItems, produto]);
  }

  function transformarEmJsx(produto) {
    return (
      <Product
        key={produto.id}
        item={{
          id: produto.id,
          name: produto.name,
          image: produto.image,
          ingredients: produto.ingredients,
          instructions: produto.instructions,
          prepTimeMinutes: produto.prepTimeMinutes,
          cookTimeMinutes: produto.cookTimeMinutes,
          servings: produto.servings,
          caloriesPerServing: produto.caloriesPerServing,
          rating: produto.rating,
          reviewCount: produto.reviewCount,
        }}
        dark={dark}
        addToCart={() => addToCart(produto)}
      />
    );
  }

  return (
    <Section className={dark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}>
      <h2 className="text-2xl font-bold mb-4">Cardápio</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {produtos.map(transformarEmJsx)}
      </div>

    </Section>
  );
}

export default Cardapio;
