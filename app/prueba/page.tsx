import { Routes } from '../models/index'
import { Navbar } from '../components/index.ts'
import Head from 'next/head'

export const metadata = {
  title: 'Prueba jala?',
  description: 'pagina de pruebas en general'
}

function page() {
  return (
    <div>
      <Head>
        <title>Prueba de javier santoyo</title>
        <meta name="description" content="Prueba de de pruebas"></meta>
      </Head>
      <Navbar
        pathNames={[
          Routes.HOME,
          Routes.PORTFOLIO,
          Routes.CONTACTO,
          Routes.PRUEBAS
        ]}
      />
      <h1>page</h1>
    </div>
  )
}

export default page
