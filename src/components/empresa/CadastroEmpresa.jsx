import Menu from "./../../components/geral/Menu";

import { Form } from "../../styled";
import { useState } from "react";

export default function CadastroEmpresa() {

  const [listaEmpresa, setListaEmpresa] = useState([])

  const [empresa, setEmpresa] = useState({
    'nome' : '',
    'cnpj' : '',
    'email' : '',
    'telefone' : ''
  })

  function lerEmpresa(e) {
    setEmpresa({...empresa, [e.target.name] : e.target.value})
  }

  function inserirEmpresa(e) {
    e.preventDefault()
    setListaEmpresa([...listaEmpresa, empresa])
  }
    
  return (

      <>
      <Menu/>
        <Form action="cadastroPessoa" method="get" onSubmit={inserirEmpresa}>
          <fieldset>
            <label htmlFor="idNomeEmpresa">Nome da empresa</label>
            <input id="idNomeEmpresa" name="nome" type="text" value={empresa.nome} onChange={lerEmpresa}/>
           
            <label htmlFor="idCnpj">CNPJ</label>
            <input id="idCnpj" name="cnpj" type="text" value={empresa.cnpj} onChange={lerEmpresa}/>
           
            <label htmlFor="idEmail">Email</label>
            <input id="idEmail" name="email" type="email" value={empresa.email} onChange={lerEmpresa}/>
           
            <label htmlFor="idTelefoneEmpresa">Telefone</label>
            <input id="idTelefoneEmpresa" name="telefone" type="tel" value={empresa.telefone} onChange={lerEmpresa}/>
         
            <label htmlFor="idTermo">Aceito os termos de uso</label>
            <input id="idTermo" type="checkbox"/>
       
            <input type="submit" value="Cadastrar" />
          </fieldset>
        </Form>
      </>
  );
}
