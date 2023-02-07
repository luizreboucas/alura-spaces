import React from 'react'
import Tags from '../Tags'
import fotos from './fotos.json'
import styles from './Galeria.module.scss'
import open from './open.png'
import favorito from './favorito.png'
import Cards from './Cards'
import { useState } from 'react'
import Modal from './Cards/Modal'

function Galeria() {
  const [itens, setItens ] = useState(fotos)
 
  

  const [showModal, setShowModal] = useState(false)
  const [modalImage,setModalImage] = useState()

  const filtrarFotos = (tag) =>{
    
    const novasFotos = fotos.filter((item) => item.tag === tag)

    setItens(novasFotos)
  }
  return (
    <section className={styles.galeria}>
        <h2>Navegue por nossa galeria</h2>
        <Tags 
          fotos={fotos}
          filtrarFotos={filtrarFotos}
        />
        
        <ul className={styles.galeria__cards}>
          {itens.map((foto)=>{
            return(
             <Cards
             key={foto.id}
              setShowModal={setShowModal} 
              foto={foto}
              styles={styles}
              favorito={favorito}
              open={open}
              setModalImage={setModalImage}
              imagem={modalImage}
              
             
             />
            )
          })}
        </ul>
    </section>
  )
}

export default Galeria