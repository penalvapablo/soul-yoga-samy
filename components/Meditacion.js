import Image from "next/image"
import Samy from '../public/Med.jpeg'
import styles from '../styles/Meditacion.module.scss'

const Meditacion = () => {
  return (
    <section>
      <h1 className={styles.title}>Meditacion</h1>
      <p className={styles.text}>Mi Espacio Online Reconecta con tu Escencia ofrezco diferentes meditaciones para cada momento en el que te encuentres. Te guiaré, te daré técnicas de respiraciones para calmar tu mente, ansiedad y estrés. Son sesiones privadas entre tu y yo. Precios y horarios adaptados a tu agenda Te espero, y recuerda el momento para empezar es Aquí y Ahora 🤍</p>
      <div className={styles.img}>
        <Image src={Samy} alt='Samy Quien Soy' layout='responsive' />
      </div>
    </section>
  )
}

export default Meditacion