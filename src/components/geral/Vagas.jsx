import { CardVaga, DescricaoVaga, RequisitosVaga, TituloVaga } from "../../styled";
import Menu from "./../../components/geral/Menu";

export default function Vagas() {
  return (
    <>
      <Menu />
      <CardVaga>
        <TituloVaga>titulo</TituloVaga>
        <DescricaoVaga>sadasa</DescricaoVaga>
        <RequisitosVaga>sadasd</RequisitosVaga>
      </CardVaga>
    </>
  );
}
