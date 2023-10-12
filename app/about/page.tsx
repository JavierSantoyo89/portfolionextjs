import type { Metadata } from "next"
const Page = () => {
  return (
    <main className="tailwindcss-animated absolute h-full w-full text-sm
    
    bg-black p-3 bg-no-repeat bg-cover bg-fixed bg-center bg-dia dark:bg-night box-content ">
      <section className="cardGlass animate-fade-down  gap-2 p-3">
        <h1>Sobre mi</h1>
        <p>
          Soy desarrollador web fullstack, especializado en backend al igual en
          frontend y tester. soy una persona feliz con discapacidad motriz que
          busca desarrollarse de forma remota.
        </p>
      </section>
      <div className="grid grid-row-2 grid-flow-col gap-5 p-6 ">
      <section className="cardGlass p-8 animate-fade-right">
        <h2>Academico</h2>
        <br></br>
        <ol>
        <li><h3>Software testing(Manual)</h3>
          <ul>          
            <li>Universidad Tecnologica Nacional de Buenos Aires</li>
          <li>Octubre 2022 (Certificado)</li>    
          </ul></li>
        <li><h3>Desarrollo Web Full Stack</h3></li>
          <ul>
          <li>Digital House</li>
          <li>Octubre 2021 - Abril 2022 (Certificado)</li>
          </ul>
        <li><h3>LTI: Licenciado en Tecnologias de Informacion</h3></li>
          <ul>
          <li>Universidad Autonoma de Nuevo Leon</li>
          <li>Junio 2008 - Diciembre 2013 (Titulado)</li> 
          </ul>
        </ol>
        
      </section>
      <section className="cardGlass p-8 animate-fade-left">
        <h2>Laboral</h2>
        <br></br>
        <ol>
          <li><h3>CURAME ac Mexico</h3></li>
            <ul>
              <li>IT / Secretario administrativo</li>
              <li>Junio 2017 - Septiembre 2022</li>
              <li>Control de documentos.</li>
              <li>Primer contacto pacientes (WhatsApp).</li>
              <li>Control de base datos de pacientes (ReNAME).</li>
              <li>Asistente en finanzas.</li>
              <li>Representante legal. </li>
              <li>Técnico en streaming para congresos.</li>
              <li>Contacto de Médicos/Laboratorios. </li>
              <li>Soporte Tecnico.</li>
            </ul>
          <li><h3>Blacksteel S.A. de C.V.</h3></li>
          <ul>
          <li>Control de produccion</li>
          <li>Marzo 2016 - Febrero 2017</li>
          <li>Control de materia prima (Inventario).</li>
          <li>Control de producción (Procesos y asignación de personal).</li>
          <li>Asignación de trasporte de salida.</li>
          <li>Facturación (Contpaq i).</li>
          <li>Control de herramientas(inventario).</li>
          </ul>
        </ol>
      </section>
      </div>
    </main>
  )
}

export default Page
//*  ------------------------ Seccion de metadata en la vista general para los buscadores ------------------------
export const metadata: Metadata = {
  title: "About",
  description: "Descripcion general sobre mi, academicos y laborales",
}
//* ===============================================================================================================
