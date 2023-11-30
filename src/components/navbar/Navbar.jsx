import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link';
function Navbar() {
  const links=[
    {
      id:1,
      title:'home',
      route:'/'
    },
    {
      id:2,
      title:'portfelio',
      route:'/portfelio'
    },
    {
      id:3,
      title:'contact',
      route:'/contact'
    },
    {
      id:4,
      title:'blog',
      route:'/blog'
    },
    {
      id:5,
      title:'about',
      route:'/about'
    }

  ];
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>lamamia</Link>
        <div className={styles.links}>
{links.map((link)=>(
  <Link href={link.route}>{link.title}</Link>
))}
<button className={styles.logout}>logout</button>

        </div>
        
        </div>
  )
}

export default Navbar