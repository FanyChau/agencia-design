
import estilos from "./Topo.module.css";
import Logo from '../../../../public/logo.png';
import sun from '../../../../public/sun.png';
import moon from '../../../../public/moon.png';

import Image from "next/image";

export default function Topo(props) {
    return(
        <header className={`${estilos.topo} ${props.ehTemaEscuro ? estilos.topo_escuro : estilos.topo_claro}`}>
           <Image className={estilos.imagem_logo} src={Logo} alt="logomarca"/>
           <button onClick={props.acao_onclick} className={`${estilos.botao} ${props.ehTemaEscuro ? estilos.botao_escuro : estilos.topo_claro}`}> 
              <Image className={estilos.imagem_icon} src={props.ehTemaEscuro ? sun : moon} alt="ícone"/>
           </button>
        </header>
    )
 }