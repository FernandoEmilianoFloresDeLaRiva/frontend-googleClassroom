import React from 'react'
import styles from "./Card.module.css"

function CardClass() {
  return (
    <article className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titles}>
          <h3>Matematicas</h3>
          <p>Fernando Emiliano Flores DE LA Riva</p>
        </div>
        <div className={styles.profile}>
          <span>F</span>
        </div>
      </div>
      <div className={styles.footer}></div>
    </article>
  )
}

export default CardClass