import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

function About() {
  return (
    <div className={styles.container}>
        <div className={styles.imgcontainer}>
            <Image
        src={
            "https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        fill={true}
        all="group photo"
        className={styles.img}
        
            />
            <div className={styles.imgtext}>
          <h1 className={styles.imgtitle}>Digital Storytellers</h1>
          <h2 className={styles.imgdesc}>
            Handcrafting award winning digital experiences
          </h2>
            </div>
        </div>
        <section className={styles.textcontainer}>
          <div className={styles.item}>
            <h1>Who are we</h1>
            <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
            </p>
          </div>
          <div className={styles.item}>
            <h1>What we do?</h1>
            <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br /> <br />
            - Dynamic Websites
            <br />
            <br />
            - Fast and Handy
            <br />
            <br />
            - Mobile Apps
            </p>
           <Button text={'contact'} url={'/contact'}/>
          </div>
        </section>

    </div>
  )
}

export default About
