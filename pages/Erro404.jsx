import { Link } from "react-router-dom";
import notFoundImage from "../assets/images/not-foundBlue.svg";

function NotFound({ dark }) {
  return (
    <div className={`flex flex-col md:flex-row items-center justify-between px-4 py-8 md:px-16 min-h-screen ${dark ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-6" style={{ color: dark ? "#81D8D0" : "#81D8D0" }}>
          Oops! Página não encontrada.
        </h1>

        <p className={`mb-4 text-lg sm:text-xl ${dark ? "text-gray-300" : "text-gray-700"}`}>
          Parece que você tentou engolir algo que não existe!
        </p>
        <p className={`mb-6 text-lg sm:text-xl ${dark ? "text-gray-300" : "text-gray-700"}`}>
          Mas calma, ainda dá pra "engolir" o orgulho e voltar para o menu
          principal. Lá a gente garante que tem coisa boa para saborear!
        </p>

        <Link to="/inicio">
          <button
            className="bg-red-500 hover:bg-red-700 text-black font-bold py-2 px-6 rounded transition duration-300 ease-in-out transform hover:scale-105"
            style={{ backgroundColor: "#81D8D0" }}
          >
            Voltar para o Início
          </button>
        </Link>
      </div>

      <div className="md:w-1/2">
        <img
          src={notFoundImage}
          alt="Página não encontrada"
          className="w-full max-w-md object-cover"
        />
      </div>
    </div>
  );
}

export default NotFound;
