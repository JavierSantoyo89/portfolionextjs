"use client"
//* === Cuando no encuentra el sitio solicitado se abre "N ot Found" === *//
import Image from "next/image"
import imgRandom from "../public/imgrandom.jpg"

//* === Imagen de fondo === *//
function notFound() {
  return (
    <>
      <p>not-found the component animal</p>
      <Image src={imgRandom} alt="Ni idea" className="bg-none" />
    </>
  )
}

export default notFound
//* ==================================================================== *//
