import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import styles from '../styles/Header.module.scss'
import MobileNav from './MobileNav'
import logo from '../public/Logo-mobile.png'
import bgMobile from '../public/hero2.png'
import bgDesktop from '../public/Desktop-bg.png'
import Image from 'next/image'
import Link from 'next/link'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'


const Header = () => {
  const [mobileNav, setMobileNav] = useState(false)
  const mobileNavFn = () => {
    setMobileNav(!mobileNav)
  }
  if (typeof window !== "undefined") {
    mobileNav ? document.body.style.overflow = "hidden" : document.body.style.overflow = 'auto'
  }


  return (

    <header className={styles.header}>
      <div className={`${styles.mobileNav__container} ${mobileNav && styles.mobileNav__container__active}`}>
        <MobileNav mobileNavFn={mobileNavFn} />
      </div>


      <Image src={bgMobile} alt='Samy Yoga' layout='fill' objectFit='cover' objectPosition='45% 55%' quality={100} className={styles.bg_image_mobile_container} />

      <Image src={bgDesktop} alt='Samy Yoga' layout='fill' objectFit='cover' quality={100} className={styles.bg_image_desktop_container} />

      <div className={styles.top}>
        <button className={styles.burgerBtn} onClick={mobileNavFn}>
          <FontAwesomeIcon icon={faBars} className={styles.burger} />
        </button>
        <div className={styles.logoContainer}>
          <Image src={logo} alt='logo' layout='responsive' />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li><Link href={'#Home'}><a >Home</a></Link></li>
            <li><Link href={'#QuienSoy'}><a >Quien Soy</a></Link></li>
            <li><Link href={'#Yoga'}><a >Yoga</a></Link></li>
            <li><Link href={'#Horarios'}><a >Horarios</a></Link></li>
            <li><Link href={'#Tarifas'}><a >Tarifas</a></Link></li>
            <li><Link href={'#Meditacion'}><a >Meditación</a></Link></li>
            <li><Link href={'#Contacto'}><a >Contacto</a></Link></li>
            <div className={styles.nav__socialLinks}>
              <a href='https://wa.link/ugftpv' rel='noreferrer' target="_blank">
                <FontAwesomeIcon icon={faWhatsapp} className={styles.nav__socialLinks__item} />
              </a>
              <a href='https://www.instagram.com/soulyogasamy' rel='noreferrer' target={'_blank'}>
                <FontAwesomeIcon icon={faInstagram} className={styles.nav__socialLinks__item} />
              </a>
            </div>
          </ul>
        </nav>
      </div>
      <div className={styles.text_container}>
        <p className={styles.text}>
          Bienvenida
        </p>
        <h1 className={styles.text}>
          Clase de yoga <br /> presenciales y online
        </h1>
        <p className={styles.text__desktop}>El yoga es la oportunidad perfecta <br /> para ser curioso sobre quien eres</p>
        <p className={styles.text__desktop}>J. Crandell</p>
      </div>
    </header>

  )
}

export default Header