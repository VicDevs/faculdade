import Menu from "./../../components/geral/Menu";

import { Form } from "../../styled";
import { useState } from "react";

export default function Suporte() {

  const [suporte, setSuporte] = useState({
    'nome' : '',
    'email' : '',
    'assunto' : ''
  })

  function lerSuporte(e) {
    setSuporte({...suporte, [e.target.name] : e.target.value})
  }

  return (
    <>
      <Menu />
      <Form action="Suporte" method="get">
        <fieldset>
          <label htmlFor="idNome">Nome Completo</label>
          <input id="idNome" type="text" name="nome" value={suporte.nome} onChange={lerSuporte}/>
          
          <label htmlFor="idEmail">E-Mail</label>
          <input id="idEmail" type="email" name="email" value={suporte.email} onChange={lerSuporte}/>
      
          <label htmlFor="idAssunto">Assunto</label>
          <input id="idAssunto" type="text" name="assunto" value={suporte.assunto} onChange={lerSuporte}/>
          
          <textarea name="sobre" id="idSobre" cols="50" rows="7" />
          
          <input type="submit" value="Enviar" />
        </fieldset>
      </Form>
    </>
  );
}
