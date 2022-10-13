import { Link } from "react-router-dom";
import { MenuEmpresa } from "../../../styled";

export default function menuCandidato() {

    return (
        <>
        <MenuEmpresa>
            <ul>
                <li><Link to='/InicialEmpresa'>Home</Link></li>
                <li><Link to='/criacaoVagas'>Criar Vaga</Link></li>
                <li><Link to='/gerenciadorVagas'>Gerenciamento de Vagas</Link></li>
            </ul>
        </MenuEmpresa>
        </>
    )
}