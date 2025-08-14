import estilos from "./SecaoBanner.module.css";
import Image from "next/image";

export default function SecaoBanner() {
    return (
        <section className={estilos.secaoBanner}>
            
    <div className={estilos.imagem_Banner}>
            </div>
            <div className={estilos.conteudo_Banner}>
              <p>BRANDING / UI / UX / TECNOLOGIA</p> 
              <h2>Agência de Branding</h2> 
              <span>e design digital</span>
            </div>
          
        </section>
    )
}