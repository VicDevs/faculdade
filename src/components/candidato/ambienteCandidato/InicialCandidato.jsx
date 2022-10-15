import MenuCandidato from "./../../candidato/ambienteCandidato/MenuCandidato";
import {HomeCandidato1,HomeCandidato2,HomeCandidato3} from "./../../../styled"
import { Link } from "react-router-dom"
export default function InicialCandidato() {
  
  const estiloLink = {
    textDecoration : "none",
    backgroundColor : 'blue',
    color : "white",
    display : "block",
    width : "30%",
    margin : "10vh auto",
    textAlign : "center"
  }
  
  return (

    <>
      <MenuCandidato />
      <HomeCandidato1><p>Seja Bem-Vindo ao seu futuro🤞</p></HomeCandidato1>
      <HomeCandidato2><p>Está preparado para jogar pensando no seu futuro?</p></HomeCandidato2>
      <Link style={estiloLink} to="/jogos">Vamos Nessa!!!</Link>
      
    </>
  );
}
