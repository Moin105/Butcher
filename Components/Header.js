import React from 'react'
import styles from './../styles/Home.module.css'
import Image from 'next/image'
import logo from '../public/logo.png'
import Link from 'next/link'
import has from '../public/hos.png'
import has2 from '../public/hos2.png'
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
      <div className={styles.boxer}>

      <button className={styles.uan}>
       UAN No: 0330 222 9 222
      </button><Link href="#contact"><button className={styles.connect}>
       Lets Connect
      </button></Link>
      </div>
    

      <div className={styles.sigma}>
        <figure className={styles.sig}>
                            <Image 
                            src={has2}
                            alt="logo"
                            layout="fill"
                            objectFit="contain"
                        /> 
                        </figure>
                        <figure className={styles.sig}>
                            <Image 
                            src={has}
                            alt="logo"
                            layout="fill"
                            objectFit="contain"
                        /> 
                        </figure>
        </div>
    </header>
    </>
  )
}

export default Header