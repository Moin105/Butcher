import React from 'react'
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import logo from '../public/logo.png';
// import arrow from '../public/arrow.png';
import Link from 'next/link'


function Footer() {
  return (
    <>
       <div className={styles.footer}>
        <div className={styles.wrapper}>
 <div className={styles.foots}>
 <div className={styles.foot1}>
                <figure className={styles.figure}>
                <Image priority src={logo} alt="banner" layout="fill"  objectFit="contain"/>
                </figure>
                <p className={styles.p} style={{maxWidth:"420px"}}>
                Pearl meat is one of the best quality meat providers in Pakistan. It is a brand of MHM foods and Beverages. Products includes fresh Goat meat, fresh Beef meat, poultry, special meat, frozen mutton parts, vale parts and beef parts. 
                </p>
            </div>

            <div className={styles.foote}>
                <div className={styles.foot3}>
                    <ul className={styles.ul}>
                        <li className={styles.li}><h3 className={styles.h3}>COMPANY LINKS</h3>            </li>
                 <Link href="/"><li className={styles.li}><p className={styles.p}>Home</p>      </li></Link>
                 <Link href="/"><li className={styles.li}><p className={styles.p}>Products</p></li></Link>
                 <Link href="/"><li className={styles.li}><p className={styles.p}>Why Prealmeat</p>        </li></Link>
                 <Link href="/"><li className={styles.li}><p className={styles.p}>About Us</p>            </li></Link>
                 <Link href="/"><li className={styles.li}><p className={styles.p}>Contact Us</p>        </li></Link>
                    </ul>
                </div>
                <div className={styles.foot2}>
                <ul className={styles.ul}>
                    <li className={styles.li}><h3 className={styles.h3}>Support</h3></li>
                    <li className={styles.li}><h5 className={styles.p}>Head office:</h5> <p className={styles.info}>F-11/1, Major Road opposite PTCL Exchange
office, Islamabad.</p></li>
                    <li className={styles.li}><h5 className={styles.p}>Reigional: <br></br> office:</h5> <p className={styles.info}>F-11/1, Major Road opposite PTCL Exchange
office, Islamabad.</p></li>
                    <li className={styles.li}><h5 className={styles.p}>Phone: </h5> <p className={styles.info}>+92 51 5461 356  | +91 334 999 1414</p></li>
                    <li className={styles.li}><h5 className={styles.p}>Email:</h5><p className={styles.info}>aliabbas@pearlmeat.com</p></li>
                </ul>
                </div>
            </div>
 </div>
        </div>
       </div>
    </>
  )
}

export default Footer