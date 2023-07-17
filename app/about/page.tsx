import type { Metadata } from "next"
const Page = () => {
  return (
    <main>
      <section>
        <h1>Sobre mi</h1>
        <p>
          Soy desarrollador web fullstack, especializado en backend al igual en
          frontend y tester. soy una persona feliz con discapacidad motriz que
          busca desarrollarse de forma remota.
        </p>
      </section>
      <section>
        <h2>Academico</h2>
        <span>
          <h3>Software testing(Manual)</h3>
          <p>Universidad Tecnologica Nacional de Buenos Aires</p>
          <p>Octubre 2022 (Certificado)</p>
        </span>
        <span>
          <h3>Bootcamp en desarrollo web Full Stack</h3>
          <p>Digital House</p>
          <p>Octubre 2021 - Abril 2022 (Certificado)</p>
        </span>
        <span>
          <h3>LTI: Licenciado en Tecnologias de Informacion</h3>
          <p>Universidad Autonoma de Nuevo Leon</p>
          <p>Junio 2008 - Diciembre 2013 (Titulado)</p>
        </span>
      </section>
      <section>
        <h2>Laboral</h2>
        <span>
          <h3>CURAME ac Mexico</h3>
          <p>IT / Secretario administrativo</p>
          <p>Junio 2017 - Septiembre 2022</p>
          <ul>Control de documentos.</ul>
          <ul>Primer contacto pacientes (WhatsApp).</ul>
          <ul>Control de base datos de pacientes (ReNAME).</ul>
          <ul>Asistente en finanzas.</ul>
          <ul>Representante legal. </ul>
          <ul>Técnico en streaming para congresos.</ul>
          <ul>Contacto de Médicos/Laboratorios. </ul>
          <ul>Soporte Tecnico.</ul>
        </span>
        <span>
          <h3>Blacksteel S.A. de C.V.</h3>
          <p>Control de produccion</p>
          <p>Marzo 2016 - Febrero 2017</p>
          <ul>Control de materia prima (Inventario).</ul>
          <ul>Control de producción (Procesos y asignación de personal).</ul>
          <ul>Asignación de trasporte de salida.</ul>
          <ul>Facturación (Contpaq i).</ul>
          <ul>Control de herramientas(inventario).</ul>
        </span>
      </section>
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
