"use client"
//* =========== Cuando no encuentra el sitio solicitado se abre "Not Found" ======== *//
import Image from "next/image"
import space404 from "../public/404Error.png" //* === Imagen de fondo === *//

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
    <body
      onClick={back}
      // // 
      // className="flex flex-auto w-screen h-screen overflow-y-scroll  bg-black flex-col justify-center items-center  bg-404Error  bg-no-repeat bg-contain"
    
      className="flex w-screen h-screen overflow-y-scroll  bg-black  justify-center items-center  bg-404Error bg-center bg-no-repeat bg-contain"
    >
      {/* <Image  
      src={space404} 
      alt="background image error 404"
      className="relative"
      sizes="(max-width: 768px) 100vw"
      quality={20} /> */}
      <section>
        <p className="bg-[#dcdf34] px-2 text-sm rounded rotate-12  ">
          404 Error, Page Not Found
        </p>
        <p className="bg-[#dcdf34] px-2 text-sm rounded rotate-12 absolute  text-center  mt-2                ">
          User, we have a problem!!
        </p>
      </section>
    </body>
  )
}

export default NotFound
