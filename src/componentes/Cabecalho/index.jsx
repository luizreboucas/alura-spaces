import logo from './logo.png'
import search from './search.png'
import styles from './Cabecalho.module.scss'

export default function Cabecalho(){
    return (
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo da Alura Space" />
            <div className={styles.cabecalho__container}>
                <input type="text" 
                    className={styles.cabecalho__input}
                    placeholder="O que você procura?"/>
                <img src={search}alt="icone de busca" />
            </div>
        </header>
    )
}