import "./globals.css";
import Statistics from "./components/statistics/Statistics";
import { SoftSkills, Skills } from "./components";

export default function Home() {
  return (
    /*Es el contenerdor padre */
    <main
      className="h-full w-full
      bg-black p-3 bg-no-repeat bg-cover bg-fixed bg-center bg-dia dark:bg-night box-content "
    >
        {/* Card de bienvenida */}
        <p className=" cardGlass p-3 ml-3 mr-9" >
          Desarrrollo sitios web enfocados tanto al cliente final como empresas,
          usando tecnologias que varian entre el FrontEnd(Lo visual para el
          usuario), HTML5, CSS, Javascript como el Backend(Modelo de negocio y
          funcionalidad) Soy desarrollador web Fullstack especializado en
          Backend y funciones administrativas enfocado en el proyecto y/o
          cliente. En mi portafolio encontraras algunos proyectos personales y
          otros en producción desde aplicaciones básicas como complejas
          enfocadas a un rubro en específico. Si quieres saber mas de mi entra
          al apartado “sobre mi” y si deseas contáctame
        </p>
      
      <div className="  grid grid-cols-2 p-4 ml-3 mr-9 gap-5 ">
        {/*contenedor estadistica y skills*/}
        <Skills />
        <SoftSkills />
      </div>
      <h2>Estadisticas en Github</h2>
        <Statistics  />
      
    </main>
  );
}
