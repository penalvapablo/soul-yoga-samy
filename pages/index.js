import Head from 'next/head'
import Header from '../components/Header'
import QuienSoy from '../components/QuienSoy'
import Yoga from '../components/Yoga'
// import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Soul Yoga Samy</title>
        <meta name="description" content="clases de yoga presenciales y online para principiantes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <QuienSoy />
      <Yoga />



    </div>
  )
}
