import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { InputPostagens } from "../../postagens/components/inputPostagens";
import { InputPost } from "./components/inputTextArea";


export const Postagens = () => {
    const inputPostagensRef = useRef<HTMLInputElement>(null);
    const inputPostRef = useRef<HTMLTextAreaElement>(null);

    const [autor, setAutor] = useState('');
    const [post, setPost] = useState('');

    const autorLength = useMemo(() => {
        return autor.length * 1000;
    }, [autor.length]);

    const handleEntrar = useCallback(() => {
        console.log(autor)
        console.log(post)
    }, [autor, post])



    useEffect(() => {
        console.log(autor);
        console.log(post);
    }, [autor, post]);




    return (
        <div>
            <div id="link">
                <h1>Postagens</h1>
                <Link to="/">Home</Link> |{" "}

                <Link to="/home/about">About</Link>
                <h2>Area de postagens</h2>
            </div>

            <div id="formulario-postagens">
                <form>
                    <div id="autor">
                        <h1>{autor}</h1>
                    </div>
                  
                    <div id='comments'>
                        <InputPost
                            label={""}
                            value={post}
                            type="text" 
                            placeholder={""} 
                            onChange={newValue => setPost(newValue)}                    />

                    </div>

                    {/* <label>
                        <input
                            value={password}
                            ref={inputPasswordRef}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                        /> {" "}
                    </label> */}

                    <div id="entrar">
                        <button type="button" onClick={handleEntrar}>Enviar</button>
                    </div>

                </form>
            </div>
        </div>
    );
}