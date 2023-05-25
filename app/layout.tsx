import { Footer } from './components'
import { Socials } from './models/index'

interface Props {
  children: React.ReactNode
}

function principalLayout({ children }: Props) {
  return (
    <div>
      {children}
      <Footer pathNames={[Socials.TWITTER, Socials.LINKEDIN, Socials.GITHUB]} />
    </div>
  )
}

export default principalLayout

//*  ------------------------ Seccion de metadata en la vista general para los buscadores ------------------------
export const metadata = {
  title: 'Javier Santoyo site',
  description: 'Portafolio profesional de javier Santoyo',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1
  },
  generator: 'Next.js',
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'portafolio web',
    'desarrollo web',
    'desarrollador web',
    'frontend',
    'backend'
  ],
  authors: [
    {
      name: 'Javier Santoyo',
      url: 'https://www.linkedin.com/in/javiersantoyor/'
    }
  ],
  colorScheme: 'dark',
  creator: 'Javier Santoyo'
}
//* ===============================================================================================================
