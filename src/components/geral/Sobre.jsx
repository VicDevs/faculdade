import { SobreComp } from "../../styled";
import Menu from "./../../components/geral/Menu";
import imgLogo from "./../../img/Helpcd_logo_hover.png"

export default function Sobre() {
  return (
    <>
      <Menu />
      <h1>sobre</h1>
        <SobreComp>
          <h2>Quem somos:</h2>
          <p>No início desse ano foi proposto um desafio IBM e FIAP para recursos humanos: </p>
          <p>"Criar uma solução tecnológica onde estudantes e candidatos a vagas no geral possam ter um “termômetro” do seu perfil em relação ao mercado, com base em um “match” entre suas soft e hard-skills e informações de banco de dados de agências de recrutamento.Desta forma, os candidatos terão uma maior visibilidade de vagas com potencial de aprovação e as empresas otimizarão seu processo de contratação, melhorando a experiência para ambos os públicos." - IBM </p>
          <p>Deste modo tentamos inovar e pensar em uma solução diferente para nos destacarmos no mercado:</p>
          <p>"Criar uma plataforma onde pessoas que estão iniciando no mercado consigam se destacar por suas softskills exaltando  atividades dentro do site com um diferencial em gamificação, ranqueando os 'jogadores' e apresentando para as empresas suas habilidades em forma de conquistas  no currículo"-Equipe HelpCD</p>
          <p>Produto:</p>
          <p>E assim criamos o HelpCD uma plataforma de gamificação que busca integrar o candidato ao site de recursos humanos mais otimizado e autêntico voltado para gamificação</p>
          <img src={imgLogo} alt="ImagemLogo" />
        </SobreComp>


    </>
  );
}
