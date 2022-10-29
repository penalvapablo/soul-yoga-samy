import styles from '../styles/MobileNav.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'


const MobileNav = ({ mobileNavFn, mobileNavState }) => {
  return (
    <>

      <nav className={`${styles.nav} ${mobileNavState && styles.nav__active}`}>
        <FontAwesomeIcon icon={faXmark} onClick={mobileNavFn} className={styles.nav__close} />
        <ul className={styles.nav__list}>
          <li><Link href={'#Home'}><a onClick={mobileNavFn}>Home</a></Link></li>
          <li><Link href={'#QuienSoy'}><a onClick={mobileNavFn}>Quien Soy</a></Link></li>
          <li><Link href={'#Yoga'}><a onClick={mobileNavFn}>Yoga</a></Link></li>
          <li><Link href={'#Horarios'}><a onClick={mobileNavFn}>Horarios</a></Link></li>
          <li><Link href={'#Tarifas'}><a onClick={mobileNavFn}>Tarifas</a></Link></li>
          <li><Link href={'#Meditacion'}><a onClick={mobileNavFn}>Meditación</a></Link></li>
          <li><Link href={'#Contacto'}><a onClick={mobileNavFn}>Contacto</a></Link></li>
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
    </>
  )
}


export default MobileNav
