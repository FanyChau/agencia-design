import logo from '../../../../public/logo.png';
import Image from 'next/image';
import estilos from './Rodape.module.css';
import facebook from '../../../../public/facebook.png';
import twitter from '../../../../public/twitter.png';
import linkedin from '../../../../public/linkedin.png';
import dribble from '../../../../public/dribble.png';
import behance from '../../../../public/behance.png';
import google from '../../../../public/google.png';
export default function Rodape(props){
    return(
        <footer className={`${estilos.Rodape} ${props.ehTemaEscuro ? estilos.Rodape_modo_escuro : estilos.Rodape_modo_claro}`}>
            <div className={estilos.Rodape_texto_imagens}>
                <div className={estilos.Rodape_conteudo}>
                    <Image src={logo} alt="Logo" />
                    <p> Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.</p>
                </div>
                <div className={estilos.Rodape_imagens}>
                    <Image src={facebook} alt="Facebook" />
                    <Image src={twitter} alt="Twitter" />
                    <Image src={linkedin} alt="LinkedIn" />
                    <Image src={dribble} alt="Dribbble" />
                    <Image src={behance} alt="Behance" />
                    <Image src={google} alt="Google" />
                </div>
                </div>
                <div className={`${estilos.Rodape_direitos} ${props.ehTemaEscuro ? estilos.Rodape_modo_escuro : estilos.Rodape_modo_claro}`}>
                    <p>Copyright 2025 &copy; <span>chauwbservices</span></p>
                </div>
            
        </footer>    
    )
}