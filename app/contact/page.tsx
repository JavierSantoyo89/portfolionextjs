import { Navbar } from '../components'
import { Routes } from '../models'

function Contact() {
  return (
    <>
      <Navbar
        pathNames={[
          Routes.HOME,
          Routes.PORTFOLIO,
          Routes.CONTACTO,
          Routes.PRUEBAS
        ]}
      />
      <div>Contact</div>
    </>
  ) //
}

export default Contact

export const metadata = {
  title: 'Contact',
  description: 'Formulario para contactarme'
}
