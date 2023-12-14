import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link';
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";


function Navbar() {
  const links=[
    {
      id:1,
      title:'home',
      route:'/'
    },
    {
      id:2,
      title:'portfolio',
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
        <Link href="/" className={styles.logo}>
          Lamamia
        </Link>
        <div className={styles.links}>
          <DarkModeToggle />
          {links.map((link) => (
            <Link href='link.url'>{link.title}</Link>
          ))}
          <button className={styles.logout}>Logout</button>
        </div>
      </div>
    );
  }
  
  


export default Navbar
