import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/Button';



function Category({ params }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1></h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate
            ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet
            fugiat tenetur?
          </p>
          <Button title={"see more"} url={"/"} />
        </div>
        <div className={styles.imgContainer}></div>
      </div>
    </div>
  );
}
export default Category

 /*hello*/