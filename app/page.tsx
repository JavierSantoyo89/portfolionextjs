import "./globals.css"

import Statistics from "./components/statistics/Statistics"
import Skills from "./components/Skills/Skills"

export default function Home() {
  return (
    <main
      className="sm:max-w-max sm:h-screen 
     md:max-w-max md:h-screen 
     lg:max-w-max lg:h-screen 
     xl:max-w-max xl:h-screen
     2xl:max-w-max 2xl:h-screen
     bg-bottom bg-black p-3 bg-no-repeat bg-cover bg-dia dark:bg-night box-content "
    >
      <div className="divPrincipal flex flex-col ">
        {/*Es el contenerdor padre */}
        <section className=" ">
          {/* Card de bienvenida */}
          <p className=" cardGlass p-3">
            Desarrrollo sitios web enfocados tanto al cliente final como
            empresas, usando tecnologias que varian entre el FrontEnd(Lo visual
            para el usuario), HTML5, CSS, Javascript como el Backend(Modelo de
            negocio y funcionalidad) Soy desarrollador web Fullstack
            especializado en Backend y funciones administrativas enfocado en el
            proyecto y/o cliente. En mi portafolio encontraras algunos proyectos
            personales y otros en producción desde aplicaciones básicas como
            complejas enfocadas a un rubro en específico. Si quieres saber mas
            de mi entra al apartado “sobre mi” y si deseas contáctame
          </p>
        </section>
      </div>

      {/* 
      <div className="  grid lg:grid-cols-2 m-6 items-center justify-items-center text-center sm:grid-cols-1 -bottom-14"> */}

      <div className="  flex flex-wrap items-center justify-center m-3 gap-3">
        {/* <div className="  grid lg:grid-cols-2 m-1  justify-items-center sm:grid-cols-1">  */}

        {/*contenedor estadistica y skills*/}

        <Skills />

        <Statistics sizeStadistics={180} />
      </div>
    </main>
  )
}
