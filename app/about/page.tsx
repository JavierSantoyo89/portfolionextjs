import { Routes } from '../models/index'

//  *? About, donde puedes poner sobre tu historial academico, laboral y hobbie's

import { Navbar } from '../components' // *? aplicando barrel's
function aboutMe() {
  return (
    <div>
      <Navbar
        pathNames={[
          Routes.HOME,
          Routes.PORTFOLIO,
          Routes.CONTACTO,
          Routes.PRUEBAS
        ]}
      />
      About me!!
    </div>
  ) //
}

export default aboutMe

export const metadata = {
  title: 'About',
  description: 'Descripcion general de mis estudios academicos y laborales'
}
