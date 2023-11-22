import type { Metadata } from "next";
import Link from "next/link";
const Page = () => {
  function handleClickDescargar() {
    <Link
      href="/Francisco_Javier_Santoyo_Rios_tester_CV.pdf"
      download="Francisco_Javier_Santoyo_Rios_tester_CV.pdf"
    ></Link>;
  }
  return (
    <main
      className="h-100 w-auto
    bg-black p-3 bg-no-repeat bg-cover bg-fixed bg-center bg-dia dark:bg-night box-content animate-fade "
    >
      <section className="grid grid-rows-1 cardGlass animate-fade-down  gap-2 p-4 ml-3 mr-3 sm:mb-5">
        <h1>Sobre mi</h1>
        <p>
          Soy un desarrollador web apasionado por aprender y mejorar en el campo
          de TI. Me especializo en backend, pero puedo adaptarme a otras áreas
          según las necesidades del proyecto. Destaco por mi participación en el
          proyecto Mercado Liebre, donde trabajé en el backend, apoyé en
          frontend y obtuve la certificación de Desarrollador Full Stack.
          <br></br>
          También he contribuido en la creación del logo y colores para un
          proyecto de web3 (bitcoin) actualmente en desarrollo. Si buscas un
          desarrollador apasionado y adaptable, ¡contáctame para discutir cómo
          puedo ayudarte en tu proyecto!
        </p>
      </section>

      <section className="grid grid-rows-1 place-content-center animate-fade-down  gap-2 p-4 ml-3 mr-3 sm:mb-5">
        <Link href="/Francisco_Javier_Santoyo_Rios_tester_CV.pdf" className="cardGlass p-3" download>
          Descargar CV
        </Link>
      </section>
      <div className="grid grid-row-1 md:grid grid-row-2 md:grid-flow-col gap-5 p-5 ">
        <section className="cardGlass p-8 mb-5 animate-fade-right  animate-delay-500">
          <h2>Academico</h2>
          <br></br>
          <ol>
            <li>
              <h3>Software testing(Manual)</h3>
              <ul>
                <li>Universidad Tecnologica Nacional de Buenos Aires</li>
                <li>Octubre 2022 (Certificado)</li>
              </ul>
            </li>
            <br />
            <li>
              <h3>Desarrollo Web Full Stack</h3>
            </li>
            <ul>
              <li>Digital House</li>
              <li>Octubre 2021 - Abril 2022 (Certificado)</li>
            </ul>
            <br />
            <li>
              <h3>LTI: Licenciado en Tecnologias de Informacion</h3>
            </li>
            <ul>
              <li>Universidad Autonoma de Nuevo Leon</li>
              <li>Junio 2008 - Diciembre 2013 (Titulado)</li>
            </ul>
          </ol>
        </section>
        <section className="cardGlass p-8 sm:mb-5  animate-fade-left  animate-delay-500">
          <h2>Laboral</h2>
          <br></br>
          <ol>
            <li>
              <h3>CURAME ac Mexico</h3>
            </li>
            <ul>
              <li>IT / Secretario administrativo</li>
              <li>Junio 2017 - Septiembre 2022</li>
              <li>* Control de documentos.</li>
              <li>* Primer contacto pacientes (WhatsApp).</li>
              <li>* Control de base datos de pacientes (ReNAME).</li>
              <li>* Asistente en finanzas.</li>
              <li>* Representante legal. </li>
              <li>* Técnico en streaming para congresos.</li>
              <li>* Contacto de Médicos/Laboratorios. </li>
              <li>* Soporte Tecnico.</li>
            </ul>
            <br />
            <li>
              <h3>Blacksteel S.A. de C.V.</h3>
            </li>
            <ul>
              <li>Control de produccion</li>
              <li>Marzo 2016 - Febrero 2017</li>
              <li>* Control de materia prima (Inventario).</li>
              <li>
                * Control de producción (Procesos y asignación de personal).
              </li>
              <li>* Asignación de trasporte de salida.</li>
              <li>* Facturación (Contpaq i).</li>
              <li>* Control de herramientas(inventario).</li>
            </ul>
          </ol>
        </section>
      </div>
    </main>
  );
};

export default Page;
//*  ------------------------ Seccion de metadata en la vista general para los buscadores ------------------------
export const metadata: Metadata = {
  title: "About",
  description: "Descripcion general sobre mi, academicos y laborales",
};
//* ===============================================================================================================
