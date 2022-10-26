import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import styles from '../styles/Header.module.scss'
import MobileNav from './Nav'
import logo from '../public/logo-mobile.png'
import bg from '../public/hero2.png'
import Image from 'next/image'


const Header = () => {
  const [mobileNav, setMobileNav] = useState('off')
  return (

    <header className={styles.header}>
      <div className={styles.bg_image_container}>
        <Image src={bg} alt='Samy Yoga' layout='fill' objectFit='cover' objectPosition='45% 55%' quality={100} />
      </div>
      <div className={styles.top}>
        <FontAwesomeIcon icon={faBars} className={styles.burger} />
        <Image src={logo} alt='logo' width={215} height={71} />
      </div>
      <div className={styles.text_container}>
        <p className={styles.text}>
          Bienvenida
        </p>
        <h1 className={styles.text}>
          Clase de yoga presenciales y online
        </h1>
      </div>

    </header>

  )
}

export default Header