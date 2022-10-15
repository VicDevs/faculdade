import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../../components/geral/Menu";
import { Form } from "../../styled";

export default function Empresas() {

  const [loginEm, setLogin] = useState({
    'nome' : '',
    'senha' : ''
  })
  
  function lerLogin(e){
    setLogin({...loginEm, [e.target.name] : e.target.value})
   }

  return (
    <>
      <Menu />
      <Form action="./inicialEmpresa" method="Get">
        <fieldset>

          <label htmlFor="idLogin">Nome de Usuário</label>
          <input type="text" name="nome" id="idLogin" value={loginEm.nome} onChange={lerLogin}/>
          
          <label htmlFor="idSenha">Senha</label>
          <input type="password" name="senha" id="idSenha" value={loginEm.senha}  onChange={lerLogin}/>
          
          <Link to="/cadastroEmpresa">Cadastre-se</Link>
          
          <input type="submit" value="Enviar" />
        </fieldset>

      
      </Form>
    </>
  );
}
