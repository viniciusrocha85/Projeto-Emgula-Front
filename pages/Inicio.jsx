import { Link } from "react-router-dom";
import food from "../assets/images/foodBlue.svg";

function Inicio({ dark }) {
  return (
    <section className={`flex flex-col md:flex-row items-center justify-between px-4 py-12 md:px-16 ${dark ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img
          src={food}
          alt="Comida deliciosa"
          className="w-full max-w-md object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
        />
      </div>

      <div className="md:w-1/2">
        <h1 className={`text-4xl font-bold mb-6 ${dark ? "text-[#81D8D0]" : "text-[#81D8D0]"} md:text-5xl`}>
          Bem-vindo ao Emgula!
        </h1>

        <p className={`mb-4 text-lg sm:text-xl ${dark ? "text-gray-300" : "text-gray-700"}`}>
          Onde você vai saborear pratos irresistíveis... e quem sabe engolir um
          pouco mais do que esperava!
        </p>

        <p className={`mb-6 text-lg sm:text-xl ${dark ? "text-gray-300" : "text-gray-700"}`}>
          Prepare-se para uma experiência gastronômica que vai deixar você
          querendo "engolir" cada momento.
        </p>

        <Link to="/contato">
          <button
            className="bg-[#81D8D0] hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Fale Conosco
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Inicio;
