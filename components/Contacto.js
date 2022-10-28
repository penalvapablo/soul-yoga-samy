import styles from '../styles/Contacto.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const Contacto = () => {

  const { } = useLoadScript({ googleMapsApiKey: "" })


  return (
    <>
      <footer id='Contacto'>
        <div className={styles.contacto__container}>
          <div className={styles.mapouter}><div className={styles.gmap_canvas}><iframe width="325" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=concordia%204,%20valencia&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginWidth="0"></iframe><a href="https://123movies-to.org">123movies</a><br />
            <a href="https://www.embedgooglemap.net"></a></div></div>

          <div className={styles.contacto__info__container}>
            <h3 className={styles.text}>Reservá tu clase a través de<br /> mi  instagram o mi whatsapp</h3>
            <div className={styles.icons__container}>
              <a href='https://wa.link/ugftpv' rel='noreferrer' target="_blank">  <FontAwesomeIcon icon={faWhatsapp} /></a>
              <a href='https://www.instagram.com/soulyogasamy' rel='noreferrer' target={'_blank'}><FontAwesomeIcon icon={faInstagram} /></a>

            </div>
            <h3 className={styles.text}>Para colaboraciones y eventos <br /> escribime a samantaconti@gmail.com</h3>
          </div>
        </div>
        <p className={styles.copyright}>Todos los derechos reservados Soul Yoga Samy 2022</p>

      </footer>
    </>

  )
}

export default Contacto