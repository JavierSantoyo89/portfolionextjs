export const Routes = {
  HOME: {
    path: '/',
    name: 'Home'
  },
  PORTFOLIO: {
    path: '/portfolio',
    name: 'Portafolio'
  },
  RICKANDMORTY: {
    path: '/portfolio/rickandmorty',
    name: 'Rick & Morty'
  },
  CHARACTERS: {
    path: 'portfolio/rickandmorty/characters',
    name: 'Characters'
  },
  LOCATIONS: {
    path: 'portfolio/rickandmorty/locations',
    name: 'Locations'
  },
  ABOUT: {
    path: './about',
    name: 'About'
  },
  CONTACTO: {
    path: '/contact',
    name: 'Contacto'
  },
  PRUEBAS: {
    path: '/prueba',
    name: 'Prueba'
  }
}

export const Socials = {
  TWITTER: {
    path: 'https://twitter.com/FcoSantoyoRios',
    name: 'Twitter',
    icon: 'IconBrandTwitter'
  },
  LINKEDIN: {
    path: 'https://www.linkedin.com/in/javiersantoyor/',
    name: 'LinkedIn',
    icon: 'IconBrandLinkedin'
  },
  GITHUB: {
    path: 'https://github.com/JavierSantoyo89',
    name: 'Github',
    icon: 'IconBrandGithub'
  }
}

export interface Route {
  path: string
  name: string
}

export interface Social {
  path: string
  name: string
  icon: string
}
