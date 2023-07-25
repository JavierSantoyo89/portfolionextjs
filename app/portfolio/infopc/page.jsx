import os from "node:os"
// console.log("Informacion del equipo")
// console.log("----------------------")
// console.log("Nombre del sistema operativo", os.platform())
// console.log("Version del sistema operativo", os.release())
// console.log("Arquitectura", os.arch())
// console.log("Memoria libre", os.freemem() / 1024 / 1024)
// console.log("Memoria total", os.totalmem() / 1024 / 1024)

function page() {
  const SO = os.platform()
  const vSO = os.release()
  const Arch = os.arch()
  const memFree = Math.trunc(os.freemem() / 1024 / 1024).toFixed(0)
  const memTot = Math.round(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)
  const porcentFree = Math.trunc((memFree / 1024 / memTot) * 100)
  const upTime = os.uptime()
  const tipoOS = os.type()
  const ethernetData = os.networkInterfaces()

  //* VAriables para sacar la dia, hora y minuto del sistema (Ctrl+Alt+Delete view 'Process')
  let horasGlobales = Math.trunc(upTime / 3600)
  let minutosglobales = Math.trunc(upTime / 60)
  let dias = Math.trunc(horasGlobales / 24)
  let horas = Math.trunc(horasGlobales - dias * 24)
  let minutos = Math.floor(minutosglobales % 60)
  //* =================================================================================== //
  // const arrayInfo = [SO, vSO, dias, horas, minutos, Arch, memFree, memTot] // Array de practica

  //* --------------------- console.log para revisar en la terminal -------------------- *//
  // console.log("El arrey nuevo es: ", Array)
  // console.log("Horas globales: ", horasGlobales)
  // console.log("Minutos globales", minutosglobales)
  // console.log("Los dias son:", dias)
  // console.log("Horas sin reiniciar:", horas)
  // console.log("Minutos sin reiniciar:", minutos)
  // console.log("Free space", porcentFree)
  // console.log("Tipo de sistema operativo es: : ", tipoOS)
  // console.log("Your IP: ", ethernetData["Ethernet"][3]["address"])
  // console.log("Mac address: ", ethernetData["Ethernet"][0]["mac"])

  //---------- Si quieres correrlo con array's  ponlo en el main ---------- */
  //   <p>Sistema operativo: {arrayInfo[0]}</p>
  //   <p>Version: {arrayInfo[1]}</p>
  //   <p>Arquitectura: {arrayInfo[5]}</p>
  //   <p>
  //     Tiempo sin reiniciar el equipo: {arrayInfo[2]}:{arrayInfo[3]}:
  //     {arrayInfo[4]} (dd/hh/mm)
  //   </p>
  //   <p>Memoria libre: {arrayInfo[6]}mb o {porcentFree}% aprox.</p>
  // <p>Total de memoria: {arrayInfo[7]} gb disponible</p>
  //* =================================================================================== *//

  return (
    <main className=" flex flex-col w-screen h-screen overflow-y-scroll bg-center bg-no-repeat bg-cover justify-center items-center bg-dia dark:bg-night ">
      <h1>Estadisticas de tu equipo</h1>
      <section>
        <p>Sistema operativo: {SO}</p>
        <p>Tipo de sistema operativo: {tipoOS}</p>
        <p>Version: {vSO}</p>
        <p>Arquitectura: {Arch}</p>
        <p>MAC Address: {ethernetData["Ethernet"][0]["mac"]}</p>
        <p>Tu IP: {ethernetData["Ethernet"][3]["address"]}</p>
        <p>
          Tiempo sin reiniciar el equipo: {dias}:{horas}:{minutos} (dd/hh/mm)
        </p>
        <p>
          Memoria libre: {memFree}mb o {porcentFree}% aprox.
        </p>
        <p>Total de memoria: {memTot} gb disponible</p>
      </section>

      <section>
        El contenido es con fines educativos y/o para mostrar habilidades, de
        ninguna manera se almacena informacion personal
      </section>
    </main>
  )
}

export default page
