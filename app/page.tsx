import Image from "next/image"
import "./globals.css"
import {
  Css3,
  HtmlIcon,
  JavaScriptIcon,
  NextIcon,
  BootstrapIcon,
  TailwindIcon,
  WordPressIcon,
  PhotoShopIcon,
  TrelloIcon,
  Illustrator,
} from "./components"
import Statistics from "./components/statistics/Statistics"

export default function Home() {
  let sizeStadistics = 400
  return (
    <main className="max-w-max h-screen bg-center bg-no-repeat bg-cover bg-dia dark:bg-night ">
      <div className="flex flex-col ">
        {/*Es el contenerdor padre */}
        <section>
          <span className=" p-3 m-4">
            {/* Card de bienvenida */}
            <p className=" cardGlass">
              Desarrrollo sitios web enfocados tanto al cliente final como
              empresas, usando tecnologias que varian entre el FrontEnd(Lo
              visual para el usuario), HTML5, CSS, Javascript como el
              Backend(Modelo de negocio y funcionalidad) Soy desarrollador web
              Fullstack especializado en Backend y funciones administrativas
              enfocado en el proyecto y/o cliente. En mi portafolio encontraras
              algunos proyectos personales y otros en producción desde
              aplicaciones básicas como complejas enfocadas a un rubro en
              específico. Si quieres saber mas de mi entra al apartado “sobre
              mi” y si deseas contáctame
            </p>
          </span>
        </section>
        <div className="flex flex-row">
          <Statistics />
          <section className="cardGlass flex flex-col">
            {/*Skills contentr*/}
            <h2>Skills tech.</h2>
            <section className=" flex flex-row ">
              <h3>FrontEnd</h3>
              <HtmlIcon widthSkillIcon={60} heightSkillIcon={60} />
              <Css3 widthSkillIcon={60} heightSkillIcon={60} />
              <JavaScriptIcon widthSkillIcon={60} heightSkillIcon={60} />
              <BootstrapIcon widthSkillIcon={60} heightSkillIcon={60} />
              <NextIcon widthSkillIcon={60} heightSkillIcon={60} />
              <TailwindIcon widthSkillIcon={60} heightSkillIcon={60} />
              <WordPressIcon widthSkillIcon={60} heightSkillIcon={60} />
            </section>
            <section className="flex flex-col">BackEnd</section>
            <section className="flex flex-col">
              <h3>UI/UX</h3>
              <PhotoShopIcon widthSkillIcon={60} heightSkillIcon={60} />
              <Illustrator widthSkillIcon={60} heightSkillIcon={60} />
            </section>
            <section className="flex flex-col">
              <h3>Administrativas</h3>
              <TrelloIcon widthSkillIcon={60} heightSkillIcon={60} />
            </section>
          </section>
        </div>
      </div>
    </main>
  )
}
