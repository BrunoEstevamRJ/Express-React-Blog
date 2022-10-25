import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { InputLogin } from "./components/inputLogin";


export const Login = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailLength = useMemo(() => {
        return email.length * 1000;
    }, [email.length]);

    const handleEntrar = useCallback(() => {
        console.log(email)
        console.log(password)
    }, [email, password])



    useEffect(() => {
        console.log(email);
        console.log(password);
    }, [email, password]);




    return (
        <div>
            <div id="link">
                <h1>Login</h1>
                <Link to="/">Home</Link> |{" "}

                <Link to="/home/about">About</Link>
                <h2>Area de login</h2>
            </div>

            <div id="formulario-login">
                <form>
                    <div id="email">
                        <InputLogin
                            label={"Email "}
                            value={email}
                            placeholder={"Login"}
                            onChange={newValue => setEmail(newValue)}
                            onPressEnter={() => inputPasswordRef.current?.focus()} />
                    </div>

                    <div id="senha">
                        <InputLogin
                            label="Senha "
                            type="password"
                            value={password}
                            placeholder="password"
                            onChange={newValue => setPassword(newValue)}
                        />
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
                    <button type="button" onClick={handleEntrar}>Entrar</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}