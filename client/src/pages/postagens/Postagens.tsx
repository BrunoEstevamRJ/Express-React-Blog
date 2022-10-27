import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { InputPostagens } from "../../postagens/components/inputPostagens";
import { InputPost } from "./components/inputTextArea";


export const Postagens = () => {
    //const inputPostagensRef = useRef<HTMLInputElement>(null);
    //const inputPostRef = useRef<HTMLTextAreaElement>(null);
    const [autor, setAutor] = useState('');
    const [post, setPost] = useState('');

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
                        
                    </div>

                    <div id='comments'>
                        <InputPost
                            label={""}
                            value={post}
                            type="text" 
                            placeholder={""} 
                            onChange={newValue => setPost(newValue)}                       />
                    </div>

                    <div id="enviar">
                        <button type="submit" >Enviar</button>
                    </div>
                </form>
            </div>            
        </div>
    );
}