import { useState, useRef,useEffect } from 'react'
import Modal from './Modal'


const Cards = ({foto, styles,favorito,open,setShowModal,setModalImage, showModal,modalImage}) => {
  const imagem = useRef()

  

  const [curtiu,setCurtiu] = useState(false)
  
  

  return (
    <li key={foto.id} className={styles.galeria__card}>
<img  
  className={styles.galeria__imagem}
  src={foto.imagem}
  alt={foto.titulo}
  
  
/>
<p className={styles.galeria__descricao}>{foto.titulo}</p>
<div>
  <p>{foto.creditos}</p>
  
  
  
</div>

</li>
   
  )
  
}

export default Cards