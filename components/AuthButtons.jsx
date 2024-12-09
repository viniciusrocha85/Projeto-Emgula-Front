import { Link } from "react-router-dom";

function AuthButtons() {
  return (
    <div className="flex space-x-4">
      <Link to="login" className="hover:text-gray-300 transition duration-300 transform hover:scale-110">
        Login
      </Link>
      <Link to="cadastro" className="hover:text-gray-300 transition duration-300 transform hover:scale-110">
        Cadastro
      </Link>
    </div>
  );
}

export default AuthButtons;
