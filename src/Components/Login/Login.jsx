import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import "./Login.css";
const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e) =>{
       e.preventDefault();

       alert("Enviando os dados:" + username + " - " + password)
    }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sitema</h1>
        <div>
          <input 
          type="email" 
          placeholder="E-mail" 
          onChange={(e)=> setUsername(e.target.value)}
          />
          <FaUser className="Icon" />
        </div>
        <div>
          <input 
          type="password" 
          placeholder="Senha" 
          onChange={(e)=> setPassword(e.target.value)}
          />
          <FaLock className="Icon" />
        </div>
        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembrar de mim?
            <a href="#">Esqueceu a senha?</a>:
          </label>
        </div>
        <button>Entrar</button>
        <div className="signup-link">
          <p>
            Não tem conta?
            <a href="#">Registrar</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
