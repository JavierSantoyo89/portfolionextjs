import "./globals.css";
import { SoftSkills, Skills, Statistics } from "./components";

export default function Home() {
  return (
    /*Es el contenerdor padre */
    <main
      className="h-full w-full
      bg-black p-3 bg-no-repeat bg-cover bg-fixed bg-center bg-dia dark:bg-night box-content animate-fade animate-delay-250"
    >
      {/* Card de bienvenida */}
      <div className=" cardGlass p-4 ml-6 mr-14 gap-5 animate-fade ">
        <p>
          Soy desarrollador web Full Stack especializado en backend, frontend
          y testing. A pesar de tener una discapacidad motriz, busco
          oportunidades de desarrollo remoto. Tengo experiencia en proyectos
          remotos, trabajando con responsabilidad, en equipo y siguiendo las
          políticas de privacidad del cliente/empresa. Estoy comprometido con
          ofrecer soluciones de calidad en el desarrollo web. Si buscas un
          desarrollador remoto con habilidades en backend, frontend y testing,
          ¡contáctame para discutir cómo puedo contribuir a tu proyecto!
        </p>
      </div>

      <div className="  grid m:grid-cols-2 xl:grid-flow-col p-4 ml-3 mr-9 gap-5  animate-fade animate-once animate-delay-500">
        {/*contenedor estadistica y skills*/}
        <Skills />
        <SoftSkills />
      </div>
      <div className="  grid m:grid-cols-2 xl:grid-flow-col p-4 ml-3 mr-9 gap-5  animate-fade animate-once animate-delay-700">
        <Statistics />
      </div>
    </main>
  );
}
