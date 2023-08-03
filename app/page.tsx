import Image from "next/image"
import Link from "next/link"
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
} from "./components"
import Illustrator from "./components/icons/Illustrator/Illustrator"
// import BootstrapIcon from "./components/icons/Bootstrap/BootstrapIcon"
// import TailwindIcon from "./components/icons/TailwindIcon/Tailwindicon"
// import WordPressIcon from "./components/icons/WordPress/WordPressIcon"

export default function Home() {
  const size = 70
  let sizeStadistics = 400
  return (
    <main className="     flex flex-col p-5 w-screen h-screen bg-center bg-no-repeat bg-cover justify-center items-center bg-dia dark:bg-night ">
      <section className="  ">
        <p className=" cardGlass">
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
      </section>
      <section className="">
      <p>Estadisticas en Github</p>
        <Image
          className=""
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=JavierSantoyo89&theme=buefy&layout=compact"
          alt="Ni idea"
          height={sizeStadistics}
          width={sizeStadistics}
        ></Image>

        <Image
          className=""
          src="https://github-readme-stats.vercel.app/api?username=JavierSantoyo89&theme=buefy&show_icons=true"
          alt="Ni idea"
          height={sizeStadistics}
          width={sizeStadistics}
        ></Image>
      </section>
      <div className="cardGlass">
        <p>Skills tech.</p>
        <section className=" flex flex-row-row ">
          FrontEnd
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
          UI/UX
          <PhotoShopIcon widthSkillIcon={60} heightSkillIcon={60} />
          <Illustrator widthSkillIcon={60} heightSkillIcon={60} />
        </section>
        <section className="flex flex-col">
          Administrativas
          <TrelloIcon widthSkillIcon={60} heightSkillIcon={60} />
        </section>
      </div>
    </main>
  )
}
