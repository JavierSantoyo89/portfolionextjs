"use client"

//* =========== Cuando no encuentra el sitio solicitado se abre "Not Found" ======== *//
import Image from "next/image"
import space404 from "../public/Error404.png" //* === Imagen de fondo === *//

{
  /* <Image src={space404} alt="background image" fill /> */
}
function NotFound() {
  //* --------- Funcion para regresar un paso en el historial de navegacion mediante el "onClick" --------- */
  function back() {
    window.history.back()
  }
  //* ============================================================================== *//
  return (
    <div className="w-full h-full fixed" onClick={back}>
      <Image src={space404} alt="background image" fill />
    </div>
  )
}

export default NotFound