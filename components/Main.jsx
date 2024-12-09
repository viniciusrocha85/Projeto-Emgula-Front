import Section from './Section';
import Cardapio from '../pages/Cardapio';
import Inicio from '../pages/Inicio';
import Erro404 from '../pages/Erro404';
import Contato from '../pages/Contato';
import Sobre from '../pages/Sobre';
import { Routes, Route } from 'react-router-dom';
import Cadastro from '../pages/Cadastro';
import LoginCadastro from '../pages/Login';

function Main(props) {
  return (
    <main
      className={`p-6 ${
        props.dark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'
      } flex-grow`}
    >
      <Routes>
        <Route path="/inicio" element={<Inicio dark={props.dark} />}></Route>
        <Route path="/sobre" element={<Sobre dark={props.dark} />}></Route>
        <Route path="/contato" element={<Contato dark={props.dark} />}></Route>
        <Route path="/cardapio" element={<Cardapio dark={props.dark} />}></Route>
        <Route path="/login" element={<LoginCadastro dark={props.dark} />}></Route>
        <Route path="/cadastro" element={<Cadastro dark={props.dark} />}></Route>
        

        <Route path="*" element={<Erro404 dark={props.dark} />}></Route>
      </Routes>
    </main>
  );
}

export default Main;
