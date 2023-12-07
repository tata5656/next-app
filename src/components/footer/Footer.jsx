import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'


function Footer() {
  return (
    <div className={styles.container}>
      {/*hihi*/}
      <div>@all right reserved</div>
      <div className={styles.socialnetworks}>
        <Link href='https://www.facebook.com/'>
        <Image
         src='/1.png'
          width={20} 
          className={styles.icon} 
          height={20} 
          alt='facebook'
          />
          </Link>
          <Link href='https://www.instagram.com/'>
        <Image
         src='/2.png'
          width={20} 
          className={styles.icon} 
          height={20} 
          alt='instagram
          '/>
          </Link>
          <Link href='https:/www.twitter.com/'>
        <Image
         src='/3.png'
          width={20} 
          className={styles.icon} 
          height={20} 
          alt='x'/>
          </Link>
         <Link href='https://www.youtube.com/'>
        <Image
         src='/4.png'
          width={20} 
          className={styles.icon} 
          height={20} 
          alt='youtube'
         />
        </Link>
       
        </div>
        {/*buy buy*/}
        
      </div>
  )
}

export default Footer