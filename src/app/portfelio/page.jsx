import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

function Portfolio() {
  return (
    <div className={styles.container}>
      <h1 className={styles.sectTitle}>Choose Gallery</h1>
      <div className={styles.items}>
        <Link href={'/portfelio/ilustration'} className={styles.item}>
        <span className={styles.title}>illustration</span>
        </Link>
        <Link href={'/portfelio/Websites'} className={styles.item}>
        <span className={styles.title}>Websites</span>
        </Link>
        <Link href={'/portfelio/Application'} className={styles.item}>
        <span className={styles.title}>Application</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio

 /*hello*/