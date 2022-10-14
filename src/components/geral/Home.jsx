import { SubtituloHome, SubtituloHome2, TituloHome } from "../../styled";
import Menu from "./../../components/geral/Menu";

export default function Home() {
  return (
    <>
      <Menu />
      <TituloHome>Seja Bem Vindo ao nosso time dev!</TituloHome>
      <SubtituloHome>Jogue e suba de Ranking, mostre seu potencial para as empresas!</SubtituloHome>
      <SubtituloHome2>Busque as vagas corretas para o seu perfil, sem dor de cabeça!</SubtituloHome2>
    </>
  );
}
