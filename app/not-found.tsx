"use client"
//* =========== Cuando no encuentra el sitio solicitado se abre "Not Found" ======== *//
function NotFound() {
  //* --------- Funcion para regresar un paso en el historial de navegacion mediante el "onClick" --------- */
  function back() {
    window.history.back()
  }
  //* ============================================================================== *//
  return (
    <main
      onClick={back}
      // className="flex flex-auto w-screen h-screen overflow-y-scroll  bg-black flex-col justify-center items-center  bg-404Error  bg-no-repeat bg-contain"
      className="
      flex flex-col
      w-screen h-[100vh] md:h-[100vh] lg:h-[100vh] xl:h-[100vh] 2xl:h-[100vh]  my-auto
      justify-center items-center overflow-visible
  bg-black     
    bg-404Error 
    bg-center 
    bg-no-repeat 
    bg-contain
    animate-fade"
    >
      <section className=" m-auto ">
        <p className="bg-[#da7024] px-2 text-sm rounded rotate-12  ">
          404 Error, Page Not Found
        </p>
        <p className="bg-[#da7024] px-2 text-sm rounded rotate-12  mt-2  ">
          User, we have a problem!!
        </p>
      </section>
    </main>
  )
}

export default NotFound
