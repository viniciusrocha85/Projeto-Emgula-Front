import Section from "../components/Section";
import contact from "../assets/images/contactBlue.svg";


function Contato({ dark }) {
  return (
    <Section className={`relative ${dark ? "bg-gray-900" : "bg-gray-100"} p-8 rounded-lg shadow-lg`}>
      <h2 className={`text-3xl font-bold mb-6 text-center ${dark ? "text-[#81D8D0]" : "text-[#81D8D0]"}`}>Contato</h2>
      
      <p className={`text-${dark ? "gray-300" : "gray-700"} mb-4 text-center`}>
        Para reservas, entre em contato pelo telefone <strong>(XX) XXXX-XXXX</strong> ou preencha o formulário abaixo.
      </p>

      <div className="flex justify-center mb-6">
        <img
          src={contact}
          alt="Contato"
          className="rounded-lg shadow-md"
        />
      </div>

      <form className={`p-6 rounded-lg shadow-md ${dark ? "bg-gray-800" : "bg-white"}`}>
        <div className="mb-4">
          <label htmlFor="nome" className={`block ${dark ? "text-gray-300" : "text-gray-700"} mb-2`}>
            Nome
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            className={`w-full p-2 border ${dark ? "border-gray-600" : "border-gray-300"} rounded-md ${dark ? "bg-gray-700 text-gray-300" : "bg-white text-gray-800"}`}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className={`block ${dark ? "text-gray-300" : "text-gray-700"} mb-2`}>
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={`w-full p-2 border ${dark ? "border-gray-600" : "border-gray-300"} rounded-md ${dark ? "bg-gray-700 text-gray-300" : "bg-white text-gray-800"}`}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mensagem" className={`block ${dark ? "text-gray-300" : "text-gray-700"} mb-2`}>
            Mensagem
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows="4"
            required
            className={`w-full p-2 border ${dark ? "border-gray-600" : "border-gray-300"} rounded-md ${dark ? "bg-gray-700 text-gray-300" : "bg-white text-gray-800"}`}
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#81D8D0] text-black font-bold py-2 px-4 rounded-md hover:bg-[#81BEF0] transition duration-300"
        >
          Enviar
        </button>
      </form>
    </Section>
  );
}

export default Contato;
