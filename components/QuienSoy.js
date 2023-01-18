import Image from "next/image"
import Samy from '../public/img/About.jpg'
import styles from '../styles/QuienSoy.module.scss'

const QuienSoy = () => {
  return (
    <section id="QuienSoy" className={styles.section}>
      <h1 className={styles.title}>Quién soy</h1>
      <div className={styles.desktop__container}>
        <div className={styles.desktop__container__right}>
          <p className={styles.text}>Soy Samy Conti, tengo 37 años, Soy Argentina y vivo en Valencia hace 10 años.<br /><br /> Soy licenciada en administración de empresas y me he
            dedicado al turismo en España pero un día me di cuenta que mi profesión ya no resonaba más conmigo y que quería una vida en calma y sin
            prisas pero estaba perdida no sabía qué rumbo tomar hasta que un día de verano saliendo de una clase de yoga en la playa encontré la
            respuesta que estaba necesitando.<br /><br /> El sonido de las olas, la brisa que acariciaba mi cara y sintiendo esa energía que transmite el mar es ahí cuando mágicamente sentí que quiero dedicarme al bienestar y poder transmitirlo a las personas... y Así nació  <b className={styles.bold}> Soul Yoga Samy</b>.
            Mi deseo es que sientas la sensación de <b className={styles.bold}> bienestar y calma </b>al finalizar la práctica de yoga conmigo.
          </p>


          <h1 className={styles.title}>Mis Certificaciones</h1>
          <p className={styles.text}>Profe de Vinyasa Flow certificada por Yoga Alliance 200h <br /> Profe de Yin Yoga y Yoga para principiantes certificada por Yoga Alliance <br /> Certificada en Mindfulness e Inteligencia Emocional
          </p>
        </div>
        <div className={styles.img}>
          <Image src={Samy} alt='Samy Quien Soy' layout='responsive' />
        </div>
      </div>
    </section>
  )
}

export default QuienSoy