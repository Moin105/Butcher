import React from 'react'
import styles from './../styles/Home.module.css'
import Image from 'next/image'
import logo from '../public/logo.png'
import Link from 'next/link'
function Header() {
  return (
    <>
    <header className={styles.header}>
      <Link href="/"><figure className={styles.logo}>
        <Image 
         src={logo}
         alt="logo"
         layout="fill"
         objectFit="contain"
        />
      </figure></Link>
    <Link href="#contact"><button className={styles.connect}>
       Lets Connect
      </button></Link>
    </header>
    </>
  )
}

export default Header