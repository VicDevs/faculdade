import Menu from "./../../components/geral/Menu";
import { Form } from "../../styled";
import { useState } from "react";

export default function CadastroPessoa() {
  
  
  const [candidato, setCandidato] = useState({'nome' : '','sobrenome' : '','email' : '','senha' : '','telefone' : ''})

  const [listaCandidatos, setListaCandidato] = useState([])

  function cadastraCandidato(e) {
    setCandidato({...candidato, [e.target.name] : e.target.value})
  }

  function inserirCandidato(e) {
    e.preventDefault()
    setListaCandidato([...listaCandidatos, candidato])
  }

  return (
    <>
    <Menu/>
      <Form action="cadastroPessoa" method="get" onSubmit={inserirCandidato}>
        <fieldset>
          <label htmlFor="idNome" >Nome</label>
          <input type="text" name="nome" id="idNome" onChange={cadastraCandidato} value={candidato.nome} />


          <label htmlFor="idSobrenome" >Sobrenome</label>
          <input type="text" name="sobrenome" id="idSobrenome" onChange={cadastraCandidato} value={candidato.sobrenome}/>
    
          <label htmlFor="idEmail" >Email</label>
          <input type="email" name="email" id="idEmail" onChange={cadastraCandidato} value={candidato.email}/>
          

          <label htmlFor="idConfEmail" >confirme seu Email</label>
          <input type="email" id="idConfEmail"/>

          <label htmlFor="idSenha" >Senha</label>
          <input type="password" name="senha" id="idSenha" value={candidato.senha}/>

          <label htmlFor="idConfSenha" >Confirme sua Senha</label>
          <input type="password" id="idConfSenha"/>
          
          
          <label htmlFor="idTel" >Telefone</label>
          <input type="tel" id="idTel"/>

          <label> Aceito os termos de uso</label>
          <input type="checkbox" />

          <input type="submit" value="cadastrar" />
        </fieldset>
      </Form>
    </>
  );
}
