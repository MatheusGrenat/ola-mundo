import styles from './SobreMim.module.css';
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";

const fotoSobreMim = "https://github.com/MatheusGrenat.png"

export default function SobreMim(){
    return(
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre Mim!!!"
        > 
            <h3 className={styles.subtitulo}>
                Olá, Meu nome é Matheus!!!
            </h3>

            <img 
                src={fotoSobreMim}
                alt='Foto do Matheus Grenat'
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                Olá! Meu nome é Matheus Grenat, tenho 24 anos e sou natural de Cruz Machado, Paraná, onde atualmente vivo e trabalho. Sou formado em Sistemas de Informação pela UGV Centro Universitário do Vale do Iguaçu, concluindo minha graduação em 2020.
            </p>
            <p className={styles.paragrafo}>
                Desde então, tenho me dedicado a expandir meus conhecimentos em programação e tecnologia, buscando uma oportunidade para ingressar no mercado de desenvolvimento de software.
            </p>
            <p className={styles.paragrafo}>
                Atualmente, trabalho em uma contabilidade aqui na minha cidade natal, mas minha paixão por tecnologia e inovação continua sendo o que me motiva diariamente. Estou sempre em busca de aprender novas habilidades, encarar desafios e construir soluções criativas para problemas do mundo real.
            </p>
            <p className={styles.paragrafo}>
                Se quiser saber mais sobre mim ou trocar uma ideia sobre tecnologia, será um prazer conversar!
            </p>



        </PostModelo>
    )
}