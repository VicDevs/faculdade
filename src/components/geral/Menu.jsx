import { Link } from "react-router-dom";
import { MenuInicial, MenuHamburguer } from '../../styled';

export default function menu() {

    function voltarTopo () {

        let link = document.getElementsByTagName("Link")

        link.addEventListener('click', ()=>{
            window.scrollTo(0,0)
        })
    }

    return (
        <MenuInicial>
            <MenuHamburguer></MenuHamburguer>
            <MenuHamburguer></MenuHamburguer>
            <MenuHamburguer></MenuHamburguer>
            <ul>
                <li>HELP<span>CD</span></li>
                <li><Link onClick={voltarTopo} to='/'>Home</Link></li>
                <li><Link onClick={voltarTopo} to='/login'>Login</Link></li>
                <li><Link onClick={voltarTopo} to='/suporte'>Suporte</Link></li>
                <li><Link onClick={voltarTopo} to='/sobre'>Sobre</Link></li>
                <li><Link onClick={voltarTopo} to='/vagas'>Vagas</Link></li>
                <li><Link onClick={voltarTopo} to='/empresas'>Para empresas</Link></li>
            </ul>
        </MenuInicial>
    )
}
