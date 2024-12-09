import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api, { setAuthToken } from "../services/api";

function LoginCadastro({ dark }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/login", { email, senha });
      const { token } = response.data;

      localStorage.setItem("token", token);
      setAuthToken(token);

      alert("Login bem-sucedido!");
      setEmail("");
      setSenha("");

      navigate("/inicio");
    } catch (error) {
      console.error("Erro no login:", error.response?.data?.error || error.message);
      alert("Erro no login: " + (error.response?.data?.error || "Erro desconhecido"));
    }
  };

  return (
    <section
      className={`flex items-center justify-center min-h-screen p-4 ${
        dark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div
        className={`p-8 rounded-lg shadow-md w-full max-w-md ${
          dark ? "bg-gray-800" : "bg-[#81D8D0]"
        }`}
      >
        <h2
          className={`text-3xl font-bold mb-6 text-center ${
            dark ? "text-[#81D8D0]" : "text-black"
          }`}
        >
          Login
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-4">
            <label
              htmlFor="email"
              className={`block mb-2 ${
                dark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`w-full p-2 border rounded-md ${
                dark
                  ? "border-gray-600 text-gray-200 bg-gray-700"
                  : "border-gray-300 text-black"
              }`}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="senha"
              className={`block mb-2 ${
                dark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Senha
            </label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              className={`w-full p-2 border rounded-md ${
                dark
                  ? "border-gray-600 text-gray-200 bg-gray-700"
                  : "border-gray-300 text-black"
              }`}
            />
          </div>
          <button
            type="submit"
            className={` ${
              dark
                ? "bg-[#81D8D0] text-black font-bold"
                : "bg-gray-800 text-white font-bold"
            } py-2 rounded-md hover:bg-[#81BEF0] transition duration-300`}
          >
            Entrar
          </button>
          <div className="mt-4 text-center">
            <p>
              Não tem uma conta?{" "}
              <Link
                to="/cadastro"
                className={` ${
                  dark
                    ? "text-white font-bold hover:underline"
                    : "text-black font-bold hover:underline"
                }`}
              >
                Cadastre-se
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default LoginCadastro;