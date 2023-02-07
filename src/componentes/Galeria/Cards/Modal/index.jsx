
import styles from './Modal.module.scss'
import {FaWindowClose} from 'react-icons/fa'
import {useRef} from 'react'

const Modal = ({imagem, setShowModal}) => {
    return(
        <div className={styles.modal}>
            <FaWindowClose 
                fill='white' 
                size={25} 
                className={styles.modal__icone}
                onClick={()=>setShowModal(false)}
            />
            <img src={imagem} alt="" className={styles.modal__imagem}/>
        </div>
        
    )
}

export default Modal