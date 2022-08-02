import logo from "./images/logo-principal.png";
import { Link } from "react-router-dom";
import Container from "./Styles/Container";

export default function LoginPage(){
  return (
    <Container>
      <img src={logo} alt="trackit" />
      <form>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="senha" />
        <button>Entrar</button>
      </form>
      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </Container>
  );
}
