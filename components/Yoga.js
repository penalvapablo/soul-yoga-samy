import Image from "next/image"
import styles from '../styles/Yoga.module.scss'
import Yoga1 from '../public/yoga2.jpeg'
import Yoga2 from '../public/yoga3.jpg'

const Yoga = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Estilos de Yoga que enseño</h1>
      <h3 className={styles.subTitle}>Clases presenciales y online <br /> para principiantes</h3>
      <h1 className={styles.title}>Vinyasa Suave</h1>
      <p className={styles.text}>Es un estilo dinámico suave donde se coordina la respiración y el movimiento para fluir entre una postura de yoga con la otra. El yoga se convierte en una meditación en movimiento.<br /> El ritmo es más lento, se practican menos posturas y se le exige menos al cuerpo para ir lentamente creando espacio, liberando tensiones y relajando.
      </p>
      <div className={`${styles.img} ${styles.img_horizontal}`}>
        <Image src={Yoga1} alt='Yoga imagen 1' layout='responsive' />
      </div>
      <h1 className={styles.title}>Yin Yoga</h1>
      <p className={styles.text}>Es un estilo de yoga de ritmo lento con posturas que se mantienen durante un tiempo suele ser entre uno a cinco minutos. Las posturas del Yin Yoga aplican un estrés moderado a los tejidos conectivos del cuerpo con el objetivo de aumentar la circulación en las articulaciones, mejorar la flexibilidad y armoniza todo el cuerpo energético. Su desafío es mantenerse en la postura teniendo en cuenta la anatomía de cada persona
      </p>
      <div className={styles.img}>
        <Image src={Yoga2} alt='Yoga imagen 2' layout='responsive' />
      </div>
      <h2 className={styles.title}>Modalidades</h2>
      <div className={styles.modalidad}>
        <h3 className={styles.modalidad__title}>Grupales</h3>
        <p className={styles.modalidad__text}>Son grupos reducidos hasta 4 personas para crear un ambiente de práctica con armonía y cuidado</p>
      </div>
    </section>
  )
}

export default Yoga