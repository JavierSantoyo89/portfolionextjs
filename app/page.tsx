import './globals.css'
import { Navbar } from './components'
import { Routes } from './models'
import Head from 'next/head'
import Layout from './layout'

export default function Home() {
  return (
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

      <h1>Desarrollador web</h1>
      <h2>Javier Santoyo</h2>

      <section className="cardHome">
        <p>
          Desarrrollo sitios web enfocados tanto al cliente final como empresas,
          usando tecnologias que varian entre el FrontEnd(Lo visual para el
          usuario), HTML5, CSS, Javascript como el Backend(Modelo de negocio y
          funcionalidad)
        </p>
      </section>
    </main>
  )
}
