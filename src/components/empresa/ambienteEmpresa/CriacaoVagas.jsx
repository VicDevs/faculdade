import { useState } from "react";
import { FormVagas } from "../../../styled";
import MenuEmpresa from "./../../empresa/ambienteEmpresa/MenuEmpresa";

export default function CriacaoVagas() {
  
  const [vaga, setVaga] = useState({
    'nome': '',
    'descricao' : '',
    'requisitos' : ''
  })

  function preenncherVaga(e) {
    setVaga({...vaga, [e.target.name] : e.target.value})
  }

  return (
    <>
      <MenuEmpresa/>
     <FormVagas action="">
        <label htmlFor="idNomeVaga">Nome da vaga:</label>
        <input id="idNomeVaga" name="nome" type="text" value={vaga.nome} onChange={preenncherVaga}/>
      
        <label htmlFor="idDescricao">Descrição da Vaga</label>
        <input id="idDescricao" name="descricao" type="text" value={vaga.descricao} onChange={preenncherVaga}/>
      
        <label htmlFor="idResquisitos">Requisitos da vaga:</label>
        <input id="idRequisitos" name="requisitos" type="text" value={vaga.requisitos} onChange={preenncherVaga}/>
     </FormVagas>
    </>
  );
}