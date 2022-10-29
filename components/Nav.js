import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/Nav.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import logo from '../public/Logo-Black.png'
import { useState } from 'react'

const Nav = () => {
  const [nav, setNav] = useState(false)
  const [navContainer, setNavContainer] = useState(false)

  if (typeof window !== "undefined") {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 650) {
        setNavContainer(true)
      } else {
        setNavContainer(false)
      }
    })

    window.addEventListener('scroll', () => {
      if (window.scrollY > 800) {
        setNav(true)
      } else {
        setNav(false)
      }
    })
  }
  return (
    <div className={`${styles.fixedNav} ${navContainer && styles.fixedNav__display} ${nav && styles.fixedNav__active}`}>
      {/* <div className={styles.logoContainer}>
        <Image src={logo} alt='logo' layout='responsive' priority />
      </div> */}
      <nav className={`${styles.nav} ${nav && styles.nav__active}`}>
        <ul className={styles.nav__list}>
          <li><Link href={'/'}><a >Home</a></Link></li>
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
  )
}

export default Nav