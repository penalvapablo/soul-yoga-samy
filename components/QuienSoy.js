import Image from "next/image"
import Samy from '../public/yoga.jpeg'
import styles from '../styles/QuienSoy.module.scss'

const QuienSoy = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Quién soy</h1>

      <p className={styles.text}>Soy Samy Conti, tengo 37 años, Soy Argentina y vivo en Valencia hace 10 años. Soy licenciada en administración de empresas y me he
        dedicado al turismo en España pero un día me di cuenta que mi profesión ya no resonaba más conmigo y que quería una vida en calma y sin
        prisas pero estaba perdida no sabía qué rumbo tomar hasta que un día de verano saliendo de una clase de yoga en la playa encontré la
        respuesta que estaba necesitando. El sonido de las olas, la brisa que acariciaba mi cara y sintiendo esa energía que transmite el mar
        es ahí cuando mágicamente sentí que quiero dedicarme al bienestar y poder transmitirlo a las personas... y Así nació Soul Yoga Samy.
        Mi deseo es que sientas la sensación de bienestar y calma al finalizar la práctica de yoga conmigo.
      </p>


      <h1 className={styles.title}>Mis Certificaciones</h1>
      <p className={styles.text}>Profe de Vinyasa Flow certificada por Yoga Alliance 200h <br /> Profe de Yin Yoga y Yoga para principiantes certificada por Yoga Alliance <br /> Certificada en Mindfulness e Inteligencia Emocional
      </p>
      <div className={styles.img}>
        <Image src={Samy} alt='Samy Quien Soy' layout='responsive' />
      </div>
    </section>
  )
}

export default QuienSoy