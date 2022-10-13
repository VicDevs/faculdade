import { Link } from "react-router-dom";
import { MenuCandidato } from "../../../styled";

export default function menuCandidato() {

    return (
        <>
        <MenuCandidato>
            <ul>
                <li><Link to='/InicialCandidato'>Home</Link></li>
                <li><Link to='/jogos'>Jogos</Link></li>
                <li><Link to='/testes'>Testes</Link></li>
                <li><Link to='/vagasCandidato'>Vagas</Link></li>
                <li><Link to='/perfilCandidato'>Perfil</Link></li>
            </ul>
        </MenuCandidato>
        </>
    )
}