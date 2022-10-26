import styles from '../styles/Nav.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'


const MobileNav = () => {
  return (
    <>

      <nav className={styles.nav}>
        <ul>
          <li><a>Home</a></li>
          <li><a>Quién Soy</a></li>
          <li><a>Yoga</a></li>
          <li><a>Meditación</a></li>
          <li><a>Contacto</a></li>
        </ul>
        <div>
          <FontAwesomeIcon icon={faWhatsapp} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>


      </nav>
    </>
  )
}


export default MobileNav
