import React from 'react'
import styles from './page.module.css'

function Layout({children}) {
  return (
    <div>
      <h1 className={styles.text}>Our Works</h1>
      {children}
    </div>
  )
}

export default Layout

 /*hello*/