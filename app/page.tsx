import "./globals.css";
import { SoftSkills, Skills, Statistics } from "./components";

export default function Home() {
  return (
    /*Es el contenerdor padre */
    <main
      className="h-full w-full
      bg-black p-3 bg-no-repeat bg-cover bg-fixed bg-center bg-dia dark:bg-night box-content animate-fade"
    >
      {/* Card de bienvenida */}
      <p className=" cardGlass p-4 ml-6 mr-14 gap-5 ">
        Desarrrollo sitios web enfocados tanto al cliente final como empresas,
        usando tecnologias que varian entre el FrontEnd(Lo visual para el
        usuario), HTML5, CSS, Javascript como el Backend(Modelo de negocio y
        funcionalidad) Soy desarrollador web Fullstack especializado en Backend
        y funciones administrativas enfocado en el proyecto y/o cliente. En mi
        portafolio encontraras algunos proyectos personales y otros en
        producción desde aplicaciones básicas como complejas enfocadas a un
        rubro en específico. Si quieres saber mas de mi entra al apartado “sobre
        mi” y si deseas contáctame
      </p>

      <div className="  grid m:grid-cols-2 xl:grid-flow-col p-4 ml-3 mr-9 gap-5 ">
        {/*contenedor estadistica y skills*/}
        <Skills />
        <SoftSkills />
      </div>
      <div className="  grid m:grid-cols-2 xl:grid-flow-col p-4 ml-3 mr-9 gap-5 ">
      <Statistics />
      </div>
    </main>
  );
}
