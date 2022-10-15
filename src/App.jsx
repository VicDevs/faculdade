import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/geral/Home";
import Login from "./components/candidato/Login";
import Suporte from "./components/geral/Suporte";
import Sobre from "./components/geral/Sobre";
import Vagas from "./components/geral/Vagas";
import Empresas from "./components/empresa/Empresas";
import CadastroPessoa from "./components/candidato/CadastroPessoa";
import CadastroEmpresa from "./components/empresa/CadastroEmpresa";
import InicialCandidato from "./components/candidato/ambienteCandidato/InicialCandidato";
import Jogos from "./components/candidato/ambienteCandidato/Jogos";
import Testes from "./components/candidato/ambienteCandidato/Testes";
import VagasCandidato from "./components/candidato/ambienteCandidato/VagasCandidato";
import PerfilCandidato from "./components/candidato/ambienteCandidato/PerfilCandidato";
import InicialEmpresa from "./components/empresa/ambienteEmpresa/InicialEmpresa";
import CriacaoVagas from "./components/empresa/ambienteEmpresa/CriacaoVagas";
import GerenciadorVagas from "./components/empresa/ambienteEmpresa/GerenciadorVagas";
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/suporte' element={<Suporte/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
        <Route path='/vagas' element={<Vagas/>}/>

        <Route path='/login' element={<Login/>}/>
        <Route path='/cadastroPessoa' element={<CadastroPessoa/>}/>
        <Route path='/inicialCandidato' element={<InicialCandidato/>}/>
        <Route path='/jogos' element={<Jogos/>}/>
        <Route path='/testes' element={<Testes/>}/>
        <Route path='/vagasCandidato' element={<VagasCandidato/>}/>
        <Route path='/perfilCandidato' element={<PerfilCandidato/>}/>
        
        <Route path='/empresas' element={<Empresas/>}/>
        <Route path='/cadastroEmpresa' element={<CadastroEmpresa/>}/>
        <Route path='/inicialEmpresa' element={<InicialEmpresa/>}/>
        <Route path='/criacaoVagas' element={<CriacaoVagas/>}/>
        <Route path='/gerenciadorVagas' element={<GerenciadorVagas/>}/>

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;