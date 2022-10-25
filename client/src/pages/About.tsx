import { Link } from "react-router-dom";

export function About() {
  return (
    <div>
      <h1>About</h1>
      <h2>Aqui é a pagina sobre o autor</h2>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}
