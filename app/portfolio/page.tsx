import { Navbar } from '../components'
import { Routes } from '../models'

function Portfolio() {
  return (
    <div>
      <Navbar
        pathNames={[
          Routes.HOME,
          Routes.RICKANDMORTY,
          Routes.ABOUT,
          Routes.CONTACTO,
          Routes.PRUEBAS
        ]}
      />
      Aqui va a ir el portafolio!!!
    </div>
  )
}

export default Portfolio

export const metadata = {
  title: 'Portfolio',
  description: 'Descripcion de proyectos realizados'
}
