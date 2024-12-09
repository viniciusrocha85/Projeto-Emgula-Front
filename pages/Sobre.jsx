import Section from "../components/Section";
import aboutImage from "../assets/images/aboutBlue.svg";

function Sobre({ dark }) {
  return (
    <Section className="py-12 bg-gray-50">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className={`text-4xl font-bold mb-6 ${dark ? 'text-white' : '#DC2626'}`}>Sobre Nós</h2>
          <p className={`mb-4 text-lg ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
            No EmGula, oferecemos pratos preparados com ingredientes frescos e
            um toque especial. Cada refeição é cuidadosamente planejada para
            garantir uma experiência gastronômica única.
          </p>
          <p className={`mb-6 text-lg ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
            Nossa missão é trazer sabores autênticos e proporcionar momentos
            inesquecíveis à mesa. Venha experimentar nossas especialidades e
            descubra por que somos referência em sabor e qualidade.
          </p>
        </div>

        <div className="md:w-1/2">
          <img
            src={aboutImage}
            alt="Equipe do EmGula"
            className="w-full max-w-md object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
          />
        </div>
      </div>
    </Section>
  );
}

export default Sobre;
