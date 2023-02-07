import React from 'react'
import styles from './Tags.module.scss'

export default function Tags({fotos, filtrarFotos}) {
  
  const tags = [...new Set(fotos.map((foto)=> foto.tag))]
  console.log(tags)
  
  return (
    <div className={styles.tags}>
        <p>Filtre por Tags</p>
        <ul className={styles.tags__lista}>
           {tags.map((tag)=>{
            return (
              <li 
                key={tag} 
                onClick={() => filtrarFotos(tag)}>{tag}</li>
            )
           })}
        </ul>
    </div>
  )
}
