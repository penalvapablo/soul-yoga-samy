import Image from "next/image"
import styles from '../styles/Yoga.module.scss'
import Yoga1 from '../public/yoga2.jpeg'
import Yoga2 from '../public/yoga3.jpg'

const Yoga = () => {
  return (
    <section id="Yoga" className={styles.section}>
      <h1 className={`${styles.title} ${styles.padding}`}>Estilos de Yoga que enseño</h1>
      <h3 className={styles.subTitle}>Clases presenciales y online <br /> para principiantes</h3>
      <div className={styles.desktop__container}>
        <div className={styles.desktop__container__text}>
          <h1 className={styles.title}>Vinyasa Suave</h1>
          <p className={styles.text}>Es un estilo dinámico suave donde se coordina la respiración y el movimiento para fluir entre una postura de yoga con la otra. El yoga se convierte en una meditación en movimiento.<br /> <br /> El ritmo es más lento, se practican menos posturas y se le exige menos al cuerpo para ir lentamente creando espacio, liberando tensiones y relajando.
          </p>
        </div>
        <div className={`${styles.img} ${styles.img_horizontal}`}>
          <Image src={Yoga1} alt='Yoga imagen 1' layout='responsive' />
        </div>
      </div>
      <div className={`${styles.desktop__container} ${styles.container__reverse}`}>
        <div className={styles.desktop__container__text}>
          <h1 className={styles.title}>Yin Yoga</h1>
          <p className={`${styles.text} ${styles.padding_right}`}>Es un estilo de yoga de ritmo lento con posturas que se mantienen durante un tiempo suele ser entre uno a cinco minutos.<br /> <br /> Las posturas del Yin Yoga aplican un estrés moderado a los tejidos conectivos del cuerpo con el objetivo de aumentar la circulación en las articulaciones, mejorar la flexibilidad y armoniza todo el cuerpo energético.<br /> <br /> Su desafío es mantenerse en la postura teniendo en cuenta la anatomía de cada persona.
          </p>
        </div>
        <div className={styles.img}>
          <Image src={Yoga2} alt='Yoga imagen 2' layout='responsive' />
        </div>
      </div>
      <h2 className={styles.title}>Modalidades</h2>
      <div className={styles.modalidad__container}>
        <div className={styles.modalidad}>

          <h3 className={styles.modalidad__title}>Grupales</h3>
          <p className={`${styles.modalidad__text} ${styles.modalidad__text__marginTop}`}>Son grupos reducidos hasta 4 personas para crear un ambiente de práctica con armonía y cuidado.</p>
        </div>
        <div className={styles.modalidad}>
          <h3 className={styles.modalidad__title}>Privadas</h3>
          <p className={`${styles.modalidad__text} ${styles.modalidad__text__marginTop}`}>Entre tu y yo. Ideal para <br /> empezar cuando tu prefieres.</p>
        </div>
        <br />
        <div className={styles.modalidad}>
          <h3 className={styles.modalidad__title}>Online</h3>
          <p className={`${styles.modalidad__text} ${styles.modalidad__text__marginTop}`}> Son clases en vivo privadas <br /> por medio de google meet.</p>
        </div>
        <div className={styles.modalidad}>
          <h3 className={styles.modalidad__title}>Empresas</h3>
          <p className={styles.modalidad__text}>Presencial y online. Ideal para que las personas de tu equipo se sientan más productivas, creativas, con más energías y bienestar.</p>
        </div>
      </div>
      <h3 className={styles.subTitle2}>¿Qué resultados conseguirás <br /> con mis clases?</h3>
      <p className={`${styles.text} ${styles.width}`}>Te sentirás con las <b className={styles.bold}> energías renovadas, conectada</b> contigo misma y en <b className={styles.bold}>calma</b>.<br /><br />A nivel físico tendrás menos rigidez, sentirás menos contracturas musculares en el cuello y espalda al pasar tantas horas sentadas enfrente del ordenador.<br /><br />Además ganarás poco a poco <b className={styles.bold}>flexibilidad</b> y así podrás expandir tu cuerpo y podrás gestionar mejor tus estados de <b className={styles.bold}>ansiedad o estrés</b> incluso tus <b className={styles.bold}>emociones</b>.</p>
    </section >
  )
}

export default Yoga