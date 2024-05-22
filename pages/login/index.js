import React, { useState } from "react";
import api from "../../config/configApi.js"
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../login/login.css"


export const Login = () => {

    const navigate = useNavigate()
    const [user, setUser] = useState({

        email: '',
        password: ''

    })
    const [status, setStatus] = useState({

        type: '',
        mensagem: ''
    })


    const responseGoogleFailure = (response) => {
        console.log(response);
        // Trate a falha de login, se necessário
    }



    const [loading, setLoading] = useState(false);
    const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value })

    const loginSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        const headers = { 'Content-Type': 'application/json' };


        try {
            await api.post('/user-login', user, { headers });
            .then((response)=>setStatus({
                 type: 'success', 
                 mensagem 
                });
           
                navigate("/dashboard");
            })
        } catch (error) {
            // Tratar erros de login
            setStatus({ type: 'error', mensagem: error.response.data.mensagem || "Erro ao fazer login" });
        } finally {
            setLoading(false);
        }
    };
    const handleGoogleLoginSuccess = (response) => {
        const { tokenId } = response;
        api.post("/users-google-login", { tokenId })
            .then((response) => {
                const { token, mensagem } = response.data;
                setStatus({ type: "success", mensagem });
                localStorage.setItem('token', token); // Armazenar o token no localStorage
                navigate("/dashboard");
            })
            .catch((error) => {
                setStatus({ type: "error", mensagem: error.response.data.mensagem || "Erro ao fazer login com o Google" });
            });
    };


    return (
        <div className="login-body">
            <body>

                <section>

                    <div className="login-content">

                        <form onSubmit={loginSubmit} className="content-login">

                            <div className="login-header">
                                <img src="./img/img_logo.svg" width={80} />
                                <h1>Login</h1>
                            </div>
                            <div className="mb-3 mb-3-login">
                                <label className="alLabel">Email </label>
                                <input type="email" name="email" placeholder="Digite seu email" onChange={valueInput} />
                            </div>
                            <div class="mb-3 mb-3-login">
                                <label className="alLabel">Senha</label>
                                <input type="password" name="password" placeholder="Digite a sua senha" onChange={valueInput} />
                            </div>
                            {status.type === 'success' ? <p className="login-manssage">{status.mensagem}</p> : ""}
                            {status.type === 'error' ? <p className="login-manssage">{status.mensagem}</p> : ""}
                            <div className="more-information">
                                <a className="link-info link-dark" href="/mudar-senha">Esqueci minha senha </a>
                                <a className="link-info link-dark" href="/criarConta">Cadastre-se</a>
                            </div>
                            <div className="nav-icons">
                                <div className="icon-item">
                                    <GoogleLogin
                                        clientId="559622831083-6dumj4843nhfklvmggddjm0tkenedfcs.apps.googleusercontent.com"
                                        onSuccess={handleGoogleLoginSuccess}
                                        onFailure={(response) => console.error(response)}
                                        cookiePolicy={"single_host_origin"}
                                        render={(renderProps) => (
                                            <i className="bx bxl-google" onClick={renderProps.onClick}></i>
                                        )}
                                    />
                                </div>
                                <div className="icon-item i2">
                                    <i class='bx bxl-github'></i>
                                </div>
                                <div className="icon-item i2">
                                    <i class='bx bxs-envelope' ></i>
                                </div>

                            </div>
                            <button type="submit" className="btn buttonDark" disabled={loading}>
                                {loading ? 'Carregando...' : 'Entrar'}
                            </button>

                        </form>
                        <div className="final-login">
                            <img className="login-img" src="login.gif" width={400} />

                        </div>
                        <div className="blackbox"> </div>
                    </div>
                </section>
            </body>
        </div>
    )

}
export default Login