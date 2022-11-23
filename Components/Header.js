import React from 'react'
import styles from './../styles/Home.module.css'
import Image from 'next/image'
import logo from '../public/logo.png'

function Header() {
  return (
    <>
    <header className={styles.header}>
      <figure className={styles.logo}>
        <Image 
         src={logo}
         alt="logo"
         layout="fill"
         objectFit="contain"
        />
      </figure>
      <button className={styles.connect}>
       Lets Connect
      </button>
    </header>
    </>
  )
}

export default Header