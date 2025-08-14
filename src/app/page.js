'use client';
import { useState } from "react";
import estilos from "./page.module.css";
import Topo from "./componentes/Topo";
import SecaoBanner from "./componentes/SecaoBanner";
import SecaoExperienciaTrabalho from "./componentes/SecaoExperienciaTrabalho";
import Rodape from "./componentes/Rodape";
export default function Home() {
  const [ehTemaEscuro, setEhTemaEscuro] = useState(false)
   function alternarTema() {
    setEhTemaEscuro(!ehTemaEscuro);
     }
  return (
      <main className={estilos.main}>
        <Topo acao_onclick={alternarTema} ehTemaEscuro={ehTemaEscuro}/>
        <SecaoBanner />
        <SecaoExperienciaTrabalho ehTemaEscuro={ehTemaEscuro}/>
        <Rodape ehTemaEscuro={ehTemaEscuro}/>
      </main>
    
  );
}
