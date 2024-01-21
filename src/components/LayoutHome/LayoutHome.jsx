import React from 'react'
import styles from "./LayoutHome.module.css"
import Nav from "../Nav/Nav"

function LayoutHome() {
  return (
    <div className={styles.container}>
        <Nav />
    </div>
  )
}

export default LayoutHome