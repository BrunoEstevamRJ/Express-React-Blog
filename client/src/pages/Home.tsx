import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h2>Página Inicial</h2>
      <nav>

        <Link to="/login">Login</Link> |{" "}
        <Link to="/home/about">About</Link>

        <div id="texto">
          <h2>
            Texto de exemplo

          </h2>
          <h3>aqui eu vou editar alguma coisa para demonstrar um texto na pagina</h3>
        </div>
      </nav>
    </div>
  );
}
