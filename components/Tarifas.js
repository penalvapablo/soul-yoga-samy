import styles from '../styles/Tarifas.module.scss'
import Link from 'next/link'

const Tarifas = () => {
  return (
    <section id='Tarifas'>
      <h1 className={styles.title}>Tarifas</h1>
      <div className={styles.tarifas__box}>
        <h2 className={styles.tarifas__box__title}>Bono Mensual</h2>
        <p className={styles.tarifas__box__subTitle}>(válido un mes)</p>
        <p className={styles.tarifas__box__clases}>4 clases</p>
        <p className={styles.tarifas__box__precio}>32 € (8/clase)</p>
        <p className={styles.tarifas__box__clases}>8 clases</p>
        <p className={styles.tarifas__box__precio}>48 € (6/clase)</p>
        <p className={styles.tarifas__box__clases}>Ilimitado</p>
        <p className={styles.tarifas__box__precio}>60 €</p>
        <div className={styles.tarifas__box__division}></div>
        <p className={styles.tarifas__box__clases}>Clase suelta</p>
        <p className={styles.tarifas__box__precio__last}>10 €</p>
      </div>
      <div className={styles.tarifas__box}>
        <h2 className={styles.tarifas__box__title}>Clases Privadas</h2>
        <p className={styles.tarifas__box__subTitle}>(válido un mes)</p>
        <p className={styles.tarifas__box__clases}>1 clase</p>
        <p className={styles.tarifas__box__precio}>30 €</p>
        <p className={styles.tarifas__box__clases}>4 clases</p>
        <p className={styles.tarifas__box__precio__last}>160 €</p>
      </div>
      <div className={styles.tarifas__box}>
        <h2 className={styles.tarifas__box__title}>Bono Flexible</h2>
        <p className={styles.tarifas__box__subTitle}>(válido tres meses)</p>
        <p className={styles.tarifas__box__clases}>4 clase</p>
        <p className={styles.tarifas__box__precio}>40 € (10/clase)</p>
        <p className={styles.tarifas__box__clases}>8 clases</p>
        <p className={styles.tarifas__box__precio__last}>64€ (8/clase)</p>
      </div>
      <button className={styles.tarifas__button}>
        <a href=''>Reserva tu plaza por whatsapp</a>
      </button>
      <div className={styles.tarifas__importante}>
        <h4 className={styles.tarifas__importante__title}>Importante:</h4>
        <div className={styles.tarifas__importante__item}>
          <div className={styles.tarifas__importante__item__bullet}></div>
          <p className={styles.tarifas__importante__item__text}>Empieza tu clase el día que quieras, tienes un mes desde la fecha de pago para consumir tu bono</p>
        </div>
        <div className={styles.tarifas__importante__item}>
          <div className={styles.tarifas__importante__item__bullet}></div>
          <p className={styles.tarifas__importante__item__text}>Cancelación clase: avisar con 4 horas de antelación </p>
        </div>
      </div>

    </section>
  )
}

export default Tarifas