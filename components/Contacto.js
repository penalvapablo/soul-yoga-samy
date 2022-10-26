import styles from '../styles/Contacto.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Contacto = () => {
  return (
    <>
      <footer>
        <h3 className={styles.text}>Reservá tu clase a través de<br /> mi  instagram o mi whatsapp</h3>
        <div className={styles.icons__container}>
          <FontAwesomeIcon icon={faWhatsapp} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <h3 className={styles.text}>Para colaboraciones y eventos escribime a samantaconti@gmail.com</h3>
        <p className={styles.copyright}>Todos los derechos reservados Soul Yoga Samy 2022</p>
      </footer>
    </>

  )
}

export default Contacto