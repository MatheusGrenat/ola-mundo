import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';



export default function Banner(){
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Matheus Grenat, estudante de Front-end da Alura. 
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt='Imagem de um circulo colorido'
                />
                <img
                    className={styles.minhaFoto}
                    src="https://github.com/MatheusGrenat.png"
                    alt="Foto de Matheus Grenat"
                />
 
            </div>
        </div>
    )
}