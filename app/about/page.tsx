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
        <span>
          
        <li><h3>Software testing(Manual)</h3></li>
      
          <p className="mr-3 ml-6">Universidad Tecnologica Nacional de Buenos Aires</p>
          <p className="mr-3 ml-6">Octubre 2022 (Certificado)</p>
      
        </span>
        <span>
        <li><h3>Desarrollo Web Full Stack</h3></li>
          <p className="mr-3 ml-6">Digital House</p>
          <p className="mr-3 ml-6">Octubre 2021 - Abril 2022 (Certificado)</p>
        </span>
        <span>
        <li><h3>LTI: Licenciado en Tecnologias de Informacion</h3></li>
          <p className="mr-3 ml-6">Universidad Autonoma de Nuevo Leon</p>
          <p className="mr-3 ml-6">Junio 2008 - Diciembre 2013 (Titulado)</p>
        </span>
        
      </section>
      <section className="cardGlass p-8 animate-fade-left">
        <h2>Laboral</h2>
        <br></br>
        <span>
          <li><h3>CURAME ac Mexico</h3></li>
          <p className="mr-3 ml-2">IT / Secretario administrativo</p>
          <p className="mr-3 ml-2">Junio 2017 - Septiembre 2022</p>
          <p className="mr-3 ml-6">Control de documentos.</p>
          <p className="mr-3 ml-6">Primer contacto pacientes (WhatsApp).</p>
          <p className="mr-3 ml-6">Control de base datos de pacientes (ReNAME).</p>
          <p className="mr-3 ml-6">Asistente en finanzas.</p>
          <p className="mr-3 ml-6">Representante legal. </p>
          <p className="mr-3 ml-6">Técnico en streaming para congresos.</p>
          <p className="mr-3 ml-6">Contacto de Médicos/Laboratorios. </p>
          <p className="mr-3 ml-6">Soporte Tecnico.</p>
        </span>
        <span>
          <li><h3>Blacksteel S.A. de C.V.</h3></li>
          <p className="mr-3 ml-2">Control de produccion</p>
          <p className="mr-3 ml-2">Marzo 2016 - Febrero 2017</p>
          <p className="mr-3 ml-6">Control de materia prima (Inventario).</p>
          <p className="mr-3 ml-6">Control de producción (Procesos y asignación de personal).</p>
          <p className="mr-3 ml-6">Asignación de trasporte de salida.</p>
          <p className="mr-3 ml-6">Facturación (Contpaq i).</p>
          <p className="mr-3 ml-6">Control de herramientas(inventario).</p>
        </span>
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
