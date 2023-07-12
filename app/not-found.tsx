"use client"
//* === Cuando no encuentra el sitio solicitado se abre "N ot Found" === *//
import Image from "next/image"
import imgRandom from "../public/imgrandom.jpg"

//* === Imagen de fondo === *//
function notFound() {
  return (
    <div>
      <p>not-found the component animal</p>
      <Image src={imgRandom} alt="Ni idea" />
    </div>
  )
}

export default notFound
//* ==================================================================== *//
