import { Link } from "react-router-dom";
import { InputPostagens } from "../postagens/components/inputPostagens";
import { InputPost } from "./postagens/components/inputTextArea";

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h2>Página Inicial</h2>
      <nav>

        <Link to="/login">Login</Link> |{" "}
        <Link to="/postagens">Postagem</Link> |{" "}
        <Link to="/home/about">About</Link>
        

        <div id="texto">
          <h2>
            Texto de exemplo

          </h2>
          <h3>aqui eu vou editar alguma coisa para demonstrar um texto na pagina</h3>

          {/* <InputPost label={""} value={""} placeholder={""} onChange={function (newValue: string): void {
            throw new Error("Function not implemented.");
          } } />          */}

        </div>
        <div>
         
        </div>
      </nav>
    </div>
  );
}
