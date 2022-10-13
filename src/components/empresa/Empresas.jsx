import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../../components/geral/Menu";
import { Form } from "../../styled";

export default function Empresas() {

  const [login, setLogin] = useState({
    'nome' : '',
    'senha' : ''
  })
  
  function lerLogin(e){
    setLogin({...login, [e.target.name] : e.target.value})
   }

  return (
    <>
      <Menu />
      <Form action="./inicialEmpresa" method="Get">
        <fieldset>

          <label htmlFor="idLogin">Nome de Usuário</label>
          <input type="text" name="nome" id="idLogin" value={login.nome} onChange={lerLogin}/>
          
          <label htmlFor="idSenha">Senha</label>
          <input type="password" name="senha" id="idSenha" value={login.senha}  onChange={lerLogin}/>
          
          <Link to="/cadastroEmpresa">Cadastre-se</Link>
          
          <input type="submit" value="Enviar" />
        </fieldset>

      
      </Form>
    </>
  );
}
