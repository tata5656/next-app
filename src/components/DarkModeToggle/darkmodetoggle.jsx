'use client';
import React from 'react'
import styles from './darkmodetoggle.module.css'

function Darkmodetoggle() {
    console.log('rendered')
  return (
    <div className={styles.container}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div className={styles.ball} />
    </div>
  )
}

export default Darkmodetoggle