import {
  platform,
  release,
  arch,
  freemem,
  totalmem,
  uptime,
  type,
  networkInterfaces,
} from "node:os"

// console.log("Informacion del equipo")
// console.log("----------------------")
// console.log("Nombre del sistema operativo", os.platform())
// console.log("Version del sistema operativo", os.release())
// console.log("Arquitectura", os.arch())
// console.log("Memoria libre", os.freemem() / 1024 / 1024)
// console.log("Memoria total", os.totalmem() / 1024 / 1024)

function page() {
  const SO: String = platform()
  const vSO: String = release()
  const Arch: String = arch()
  const memoryTot = totalmem()
  const freememory = freemem()
  const memFree = Math.floor(freememory / 1024 / 1024).toFixed(0)
  const memTot: string = Math.round(memoryTot / 1024 / 1024 / 1024).toFixed(2)
  const porcentFree = Math.trunc(
    (Math.floor(parseInt(memFree)) / 1024 / parseInt(memTot)) * 100
  )
  const upTime = uptime()
  const tipoOS = type()
  const ethernetData = networkInterfaces()

  //* VAriables para sacar la dia, hora y minuto del sistema (Ctrl+Alt+Delete view 'Process')
  const horasGlobales = Math.trunc(upTime / 3600)
  const minutosglobales = Math.trunc(upTime / 60)
  const dias = Math.trunc(horasGlobales / 24)
  const horas = Math.trunc(horasGlobales - dias * 24)
  const minutos = Math.floor(minutosglobales % 60)
  //* =================================================================================== //
  // const arrayInfo = [SO, vSO, dias, horas, minutos, Arch, memFree, memTot] // Array de practica

  // let MAC:string = ethernetData["Ethernet"]?[0]?["mac"]
  // const IP:string = ethernetData["Ethernet"]?[3]?["address"]

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
      <h1>Estadisticas del server</h1>
      <section>
        <p>Sistema operativo: {SO}</p>
        <p>Tipo de sistema operativo: {tipoOS}</p>
        <p>Version: {vSO}</p>
        <p>Arquitectura: {Arch}</p>
        {/* <p>MAC Address: {MAC}</p> */}
        {/* <p>Tu IP: {IP}</p> */}
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
