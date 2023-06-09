import Image from "next/image"
import "./globals.css"
//* ========================= importando logos ========================= */
import javaScriptSVG from "../public/FrontEnd/javascript.svg"
import typesScriptSVG from "../public/FrontEnd/typescript.svg"
import reactSVG from "../public/FrontEnd/react.svg"
import bootstrapSVG from "../public/FrontEnd/bootstrap.svg"
import css3SVG from "../public/FrontEnd/css3.svg"
import htmlSVG from "../public/FrontEnd/html.svg"
import nextSVG from "../public/FrontEnd/next.svg"
import tailwindSVG from "../public/FrontEnd/tailwind.svg"
import wordpressSVG from "../public/FrontEnd/wordpress.svg"
//* ==================================================================== */
export default function Home() {
  const size = 70
  return (
    <main>
      <h1>Hello world!</h1>
      {/* <h1>Desarrollador web</h1> */}
      <h2>Javier Santoyo</h2>
      <section className="cardHome">
        <p className="glass">
          Desarrrollo sitios web enfocados tanto al cliente final como empresas,
          usando tecnologias que varian entre el FrontEnd(Lo visual para el
          usuario), HTML5, CSS, Javascript como el Backend(Modelo de negocio y
          funcionalidad)

          Soy desarrollador web Fullstack especializado en Backend y funciones administrativas enfocado en el proyecto y/o cliente. 

En mi portafolio encontraras algunos proyectos personales y otros en producción desde aplicaciones básicas como complejas enfocadas a un rubro en específico.
Si quieres saber mas de mi entra al apartado “sobre mi” y si deseas contáctame 

        </p>
      </section>
      <section className="glass">
        <p>
          En esta seccion muestro algunas tecnologias con las que tengo
          experiencia.
        </p>
        <div className="frontEndContent">
          FrontEnd
          <Image src={htmlSVG} alt="HTML logo" width={size}></Image>
          <Image src={css3SVG} alt="CSS3 logo" width={size}></Image>
          <Image src={javaScriptSVG} alt="Javascript logo" width={size}></Image>
          <Image
            src={typesScriptSVG}
            alt="Typescript logo"
            width={size}
          ></Image>
          {/* <Image src={reactSVG} alt="React logo" width={size}></Image> */}
          <Image src={bootstrapSVG} alt="Bootstrap logo" width={size}></Image>
          <Image src={nextSVG} alt="NextJS logo" width={size}></Image>
          <Image src={tailwindSVG} alt="Tailwind logo" width={size}></Image>
          <Image src={wordpressSVG} alt="Wordpress logo" width={size}></Image>
        </div>
      </section>
    </main>
  )
}
