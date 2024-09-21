import { useEffect, useState } from "react";
import styles from "@/styles/exibicaoJogos.module.css";


const teste = () => {

    interface Jogo {
        id: number;
        nome: string;
        descricao: string;
    }


    const [jogos, setJogos] = useState([] as Jogo[]);


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/jogos");
      const data = await res.json();
        setJogos(data);
    };

    fetchData();
  }, []);

  return (
    <main className={styles.telaJogos}>
            <h1 className={styles.tituloPagina}>Jogos</h1>
            <ul className={styles.listaJogos}>
            {jogos.map((jogo) => (
                <li className={styles.itemLista} key={jogo.id}>
                    <p className={styles.nomeJogo}>{jogo.nome}</p>
                    <p className={styles.descricaoJogo}>{jogo.descricao}</p>
                </li>
            ))}
            </ul>
    </main>
  );
};

export default teste;
