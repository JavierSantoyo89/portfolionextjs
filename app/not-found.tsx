"use client"

//* =========== Cuando no encuentra el sitio solicitado se abre "Not Found" ======== *//
import Image from "next/image"
import space404 from "../public/Error404.png" //* === Imagen de fondo === *//

function notFound() {
  //* --------- Funcion para regresar un paso en el historial de navegacion mediante el "onClick" --------- */
  function back() {
    window.history.back()
  }
  //* ============================================================================== *//
  return (
    <div className="relative h-screen" onClick={back}>
      <div className="absolute inset-0">
        <Image src={space404} alt="background image" fill />
      </div>
    </div>
  )
}

export default notFound
