import { Link } from "react-router-dom"
import Menu from "./../geral/Menu";
import {SpanLogin2 ,SpanLogin1, Form, ParagrafoInicial, TituloLogin, BotaoGoogle, DivTextoLogin} from "../../styled";
import { useState } from "react";


export default function Login() {

  

  const [login, setLogin] = useState({
    'nome' : '',
    'senha' : ''
  })

  function lerLogin(e){
   setLogin({...login, [e.target.name] : e.target.value})
  }

    return (
      <>
        <Menu/>

        <TituloLogin>CONFIRA NOSSAS VAGAS E GAMES, FAÇA LOGIN!</TituloLogin>

        <ParagrafoInicial>Nós da <span>HELPCD</span> acreditamos em você, faça login e venha conferir as vagas disponíveis!</ParagrafoInicial>
        <Form action="./inicialCandidato" method="Get">
          <fieldset>
            <legend>Sign-in</legend>
            <label htmlFor="idUsuario">Nome de Usuário</label>
            <input id="idUsuario" name="nome" type="text" onChange={lerLogin} value={login.nome}/>
            
            <label htmlFor="idSenha">Senha</label>
            <input id="idSenha" name="senha" type="password" onChange={lerLogin} value={login.senha}/>
            
            <Link to="/cadastroPessoa">Cadastre-se</Link>
            
            <input type="submit" value="Enviar"/>
            <p>ou</p>
            <BotaoGoogle type="button">
                Login with Google
            </BotaoGoogle>
        
          </fieldset>
          
          <DivTextoLogin>
            <h2>Aqui as suas <SpanLogin1>Softskills</SpanLogin1> definem em qual <SpanLogin2>Nível</SpanLogin2> você está.</h2>
            
          </DivTextoLogin>
            
        </Form>

      </>
    )
}