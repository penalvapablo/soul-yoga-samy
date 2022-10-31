import styles from '../styles/Horarios.module.scss'

const Horarios = () => {
  return (
    <section id='Horarios'>
      <h1 className={styles.title}>Horarios</h1>
      <h2 className={styles.subTitle}>Clases presenciales en <br /> El Carmen, Valencia</h2>
      <div className={styles.horarios__mobile}>


        <h3 className={styles.horarios__mobile__dia}>Lunes</h3>
        <p className={styles.horarios__mobile__yoga}>Vinyasa suave - 12:00</p>
        <p className={styles.horarios__mobile__yoga}>Yin yoga - 14:00</p>
        <div className={styles.horarios__mobile__division}></div>
        <h3 className={styles.horarios__mobile__dia}>Martes</h3>
        <p className={styles.horarios__mobile__yoga}>Yin yoga - 14:30</p>
        <div className={styles.horarios__mobile__division}></div>
        <h3 className={styles.horarios__mobile__dia}>Miércoles</h3>
        <p className={styles.horarios__mobile__yoga}>Vinyasa suave - 12:00</p>
        <p className={styles.horarios__mobile__yoga}>Yin yoga - 14:00</p>
        <div className={styles.horarios__mobile__division}></div>
        <h3 className={styles.horarios__mobile__dia}>Jueves</h3>
        <p className={styles.horarios__mobile__yoga}>Yin yoga - 14:30</p>
        <div className={styles.horarios__mobile__division}></div>
        <h3 className={styles.horarios__mobile__dia}>Viernes</h3>
        <p className={styles.horarios__mobile__yoga}>Yin yoga - 14:00  </p>
        <p className={styles.horarios__mobile__yoga}>Vinyasa suave - 16:00</p>
        <div className={styles.horarios__mobile__division}></div>
        <h3 className={styles.horarios__mobile__dia}>Sábados</h3>
        <p className={styles.horarios__mobile__yoga}>Vinyasa suave - 12:00</p>
        <p className={styles.horarios__mobile__yoga}>Yin yoga - 14:00  </p>
      </div>
      <div className={styles.horarios__desktop__container}>
        <table className={styles.horarios__desktop}>
          <thead>
            <tr>
              <th className={styles.horarios__desktop__th} scope="col">Lunes</th>
              <th className={styles.horarios__desktop__th} scope="col">Martes</th>
              <th className={styles.horarios__desktop__th} scope="col">Miércoles</th>
              <th className={styles.horarios__desktop__th} scope="col">Jueves</th>
              <th className={styles.horarios__desktop__th} scope="col">Viernes</th>
              <th className={styles.horarios__desktop__th} scope="col">Sábados</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.horarios__desktop__box}><span className={styles.span}>Vinyasa suave</span><br />12:00</td>
              <td className={styles.horarios__desktop__box}></td>
              <td className={styles.horarios__desktop__box}><span className={styles.span}>Vinyasa suave</span><br />12:00</td>
              <td className={styles.horarios__desktop__box}></td>
              <td className={styles.horarios__desktop__box}></td>
              <td className={styles.horarios__desktop__box}><span className={styles.span}>Vinyasa suave</span><br />12:00</td>
            </tr>
            <tr>

              <td className={styles.horarios__desktop__box}></td>
              <td className={styles.horarios__desktop__box}></td>
              <td className={styles.horarios__desktop__box}></td>
              <td className={styles.horarios__desktop__box}></td>
              <td className={styles.horarios__desktop__box}></td>
              <td className={styles.horarios__desktop__box}><span className={styles.span}>Yin yoga</span><br />14:00</td>

            </tr>
            <tr>

              <td className={styles.horarios__desktop__box}><span className={styles.span}>Yin yoga</span><br />14:00</td>
              <td className={styles.horarios__desktop__box}></td>
              <td className={styles.horarios__desktop__box}><span className={styles.span}>Yin yoga</span><br />14:00</td>
              <td className={styles.horarios__desktop__box}></td>
              <td className={styles.horarios__desktop__box}><span className={styles.span}>Yin yoga</span><br />14:00</td>
              <td className={styles.horarios__desktop__box}></td>
            </tr>
            <tr>
              <td className={styles.horarios__desktop__box}></td>
              <td className={styles.horarios__desktop__box}><span className={styles.span}>Yin yoga</span><br />14:30</td>
              <td className={styles.horarios__desktop__box}></td>
              <td className={styles.horarios__desktop__box}><span className={styles.span}>Yin yoga</span><br />14:30</td>
              <td className={styles.horarios__desktop__box}></td>
              <td className={styles.horarios__desktop__box}></td>

            </tr>
            <tr>
              <td className={styles.horarios__desktop__box}></td>
              <td className={styles.horarios__desktop__box}></td>
              <td className={styles.horarios__desktop__box}></td>
              <td className={styles.horarios__desktop__box}></td>
              <td className={styles.horarios__desktop__box}><span className={styles.span}>Vinyasa suave</span><br />16:00</td>
              <td className={styles.horarios__desktop__box}></td>

            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.horarios__info}>
        <div className={styles.horarios__info__bullet}></div>
        <p className={styles.horarios__info__text}>Grupos recidos  hasta 4 personas</p>
      </div>
      <div className={styles.horarios__info}>
        <div className={styles.horarios__info__bullet}></div>
        <p className={styles.horarios__info__text}>Duración de la clase 1 hora</p>
      </div>

    </section >
  )
}

export default Horarios