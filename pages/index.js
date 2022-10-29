import Head from 'next/head'
import Header from '../components/Header'
import Horarios from '../components/Horarios'
import QuienSoy from '../components/QuienSoy'
import Yoga from '../components/Yoga'
import Tarifas from '../components/Tarifas'
import Meditacion from '../components/Meditacion'
import Contacto from '../components/Contacto'
import Nav from '../components/Nav'
import { useState } from 'react'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div onS >
      <Head>
        <title>Soul Yoga Samy</title>
        <meta name="description" content="clases de yoga presenciales y online para principiantes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />

      <QuienSoy />
      <Yoga />
      <Horarios />
      <Tarifas />
      <Meditacion />
      <Contacto />

    </div>
  )
}
