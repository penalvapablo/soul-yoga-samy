import styles from '../styles/Horarios.module.scss'

const Horarios = () => {
  return (
    <section>
      <h1 className={styles.title}>Horarios</h1>
      <h2 className={styles.subTitle}>Clases presenciales en <br /> El Carmen, Valencia</h2>
      <div className={styles.horarios__mobile}>
        <h3 className={styles.horarios__mobile__dia}>Lunes</h3>
        <p className={styles.horarios__mobile__yoga}>Vinyasa suave - 10:30</p>
        <p className={styles.horarios__mobile__yoga}>Yin yoga 19:30</p>
        <div className={styles.horarios__mobile__division}></div>
        <h3 className={styles.horarios__mobile__dia}>Martes</h3>
        <p className={styles.horarios__mobile__yoga}>Vinyasa suave - 14:00</p>
        <div className={styles.horarios__mobile__division}></div>
        <h3 className={styles.horarios__mobile__dia}>Miércoles</h3>
        <p className={styles.horarios__mobile__yoga}>Yin yoga 10:30</p>
        <p className={styles.horarios__mobile__yoga}>Yin yoga 19:30</p>
        <div className={styles.horarios__mobile__division}></div>
        <h3 className={styles.horarios__mobile__dia}>Jueves</h3>
        <p className={styles.horarios__mobile__yoga}>Vinyasa suave - 14:00</p>
        <div className={styles.horarios__mobile__division}></div>
        <h3 className={styles.horarios__mobile__dia}>Viernes</h3>
        <p className={styles.horarios__mobile__yoga}>Vinyasa suave - 10:30</p>
        <p className={styles.horarios__mobile__yoga}>Yin yoga 18:30  </p>
      </div>
      <div className={styles.horarios__info}>
        <div className={styles.horarios__info__bullet}></div>
        <p className={styles.horarios__info__text}>Grupos recidos  hasta 4 personas</p>
      </div>
      <div className={styles.horarios__info}>
        <div className={styles.horarios__info__bullet}></div>
        <p className={styles.horarios__info__text}>Duración de la clase 1 hora</p>
      </div>

    </section>
  )
}

export default Horarios