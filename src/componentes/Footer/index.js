import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import styles from './Footer.module.scss'

const Footer = () => {
    return(
        <footer className={styles.container}>
            <div className={styles.icones}>
                <img src={instagram}/>
                <img src={facebook}/>
                <img src={twitter}/>
            </div>
            <div className={styles.descricao}>Desenvolvido por Alura</div>
        </footer>
    )
}

export default Footer