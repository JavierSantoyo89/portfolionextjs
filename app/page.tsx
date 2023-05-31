'use client'

import './globals.css'
import { Navbar } from './components'
import { Routes } from './models'
import { Button, Badge } from 'react-bootstrap'
import Head from 'next/head'
import Layout from './layout'
import * as React from 'react'

export default function Home() {
  return (
    // <html lang="en">
    <main>
      {/* <Layout>

      pagina = 'Index JS'
      </Layout> */}

      {/* title:'Javier Santoyo',
//   description: 'Portafolio profesional de javier Santoyo',
//   viewport: {
//     width: 'device-width',
//     initialScale: 1,
//     maximumScale: 1 */}

      <Navbar
        pathNames={[
          Routes.PORTFOLIO,
          Routes.ABOUT,
          Routes.CONTACTO,
          Routes.PRUEBAS
        ]}
      />

      <h1 className="text-7xl font-bold underline">Hello world!</h1>
      {/* <h1>Desarrollador web</h1> */}
      <h2>Javier Santoyo</h2>

      <section className="cardHome">
        <p>
          Desarrrollo sitios web enfocados tanto al cliente final como empresas,
          usando tecnologias que varian entre el FrontEnd(Lo visual para el
          usuario), HTML5, CSS, Javascript como el Backend(Modelo de negocio y
          funcionalidad)
        </p>
      </section>
      {/* <div>
        <Button variant="contained">Hello World</Button>
      </div> */}
      <div>
        <h1>
          Example heading{' '}
          <Badge bg="secondary" as={Button}>
            New
          </Badge>
        </h1>
      </div>
    </main>
    // </html>
  )
}
