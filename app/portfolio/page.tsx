
import Link from "next/link"
import Image from "next/Image"
import CurAME from "../public/curame.webp"
import RickAndMort from "../public/rickAndMortyAPI.jpeg"

function Portfolio() {
  return (
    <div>
       {/* <!-- component --> */}
       <div className="h-screen flex items-center justify-center">
         <div className="grid grid-cols-12 gap-2 gap-y-4 max-w-6xl">
           {/* <!-- Video 1 --> */}
           <div className="col-span-12 sm:col-span-6 md:col-span-3">
             <div className="w-full flex flex-col">
               <div className="relative">
                 {/* <!-- Image Video --> */}
                 <Link href="https://www.curame.org.mx/">
                   <Image
                     src={CurAME}
                     alt="Logo CurAME Mexico"
                    className="w-96 h-auto"
                   />
                 </Link>
                 <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                   Wordpress
                 </p>
               </div>

               <div className="flex flex-row mt-2 gap-2">
                 {/* <!-- Profile Picture --> */}
                 <Link href="https://www.curame.org.mx/">
                   <Image
                     src={CurAME}
                     alt="Lgo CurAME Mexico"
                     width={40}
                     height={40}
                     className="rounded-full max-h-10 max-w-10"
                   />
                 </Link>

                 {/* <!-- Description --> */}
                 <div className="flex flex-col">
                  <Link href="#">
                     <p className="text-gray-100 text-sm font-semibold">
                       CurAME Mexico A.C.
                     </p>
                   </Link>
                   <Link
                     className="text-gray-400 text-xs mt-2 hover:text-gray-100"
                     href="#"
                   >
                     Web diseñada para la organizacion civil `Atrofia Muscular
                     Espinal en Mexico`
                   </Link>
                   <p className="text-gray-400 text-xs mt-1">
                     241K views . 3 years ago
                   </p>
                 </div>
               </div>
             </div>
           </div>

           {/* <!-- Video 2 --> */}
           <div className="col-span-12 sm:col-span-6 md:col-span-3">
             <div className="w-full flex flex-col">
               <div className="relative">
                 {/* <!-- Image Video --> */}
                 <Link href="/portfolio/rickandmorty">
                   <Image
                     src={RickAndMort}
                     alt="Sitio de rick and morty"
                     width={90}
                     height={40}
                     className="w-96 h-auto"
                   />
                 </Link>

                               </div>

               <div className="flex flex-row mt-2 gap-2">
                 {/* <!-- Profile Picture --> */}
                 <Link href="/portfolio/rickandmorty">
                   <Image
                     src={RickAndMort}
                     alt="Sitio random 2"
                     width={40}
                     height={40}
                     className="rounded-full max-h-10 max-w-10"
                   />
                 </Link>

                 {/* <!-- Description --> */}
                 <div className="flex flex-col">
                   <Link href="/portfolio/rickandmorty">
                     <p className="text-gray-100 text-sm font-semibold">
                       Rick & morty practica
                     </p>
                   </Link>
                   <Link
                    className="text-gray-400 text-xs mt-2 hover:text-gray-100"
                    href="#"
                  >
                  Practica de conexion con un servicio externo
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>

           {/* <!-- Video 3 --> */}
           <div className="col-span-12 sm:col-span-6 md:col-span-3">
             <div className="w-full flex flex-col">
               <div className="relative">
               {/* <!-- Image Video --> */}
                <Link href="/portfolio/infopc">
    <Image
                    src={CurAME}
                    alt="Sitio donde se muestran estadisticas del servicio de frontend y backend"
                    width={40}
                    height={40}
                    className="w-96 h-auto"
                  />
                </Link>

              </div>

              <div className="flex flex-row mt-2 gap-2">
                {/* <!-- Profile Picture --> */}
                <Link href="/portfolio/infopc">
                  <Image
                    src={CurAME}
                    alt="Sitio estadisticas del servicio de frontend y backend"
                    width={40}
                    height={40}
                    className="rounded-full max-h-10 max-w-10"
                  />
                </Link>

                {/* <!-- Description --> */}
                <div className="flex flex-col">
                  <Link href="#">
                    <p className="text-gray-100 text-sm font-semibold">
                    Estadisticas del servicio de frontend y backend
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Video 4 --> */}
          <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <div className="w-full flex flex-col">
              <div className="relative">
                {/* <!-- Image Video --> */}
                <Link href="/portfolio/frankys">
                  <Image
                    src={CurAME}
                    alt="Sitio del restaurant"
                    width={40}
                    height={40}
                    className="w-96 h-auto"
                  />
                </Link>

                <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                  1:15
                </p>
              </div>

              <div className="flex flex-row mt-2 gap-2">
                {/* <!-- Profile Picture --> */}
                <Link href="/portfolio/frankys">
                  <Image
                    src={CurAME}
                    alt="Sitio del restaurant"
                    width={40}
                    height={40}
                    className="rounded-full max-h-10 max-w-10"
                  />
                </Link>

                {/* <!-- Description --> */}
                <div className="flex flex-col">
                  <Link href="/portfolio/frankys">
                    <p className="text-gray-100 text-sm font-semibold">
                      Sitio usando Backend y frontend para una cafeteria, bar y
                      restaurent.
                    </p>
                  </Link>
                  <Link
                    className="text-gray-400 text-xs mt-2 hover:text-gray-100"
                    href="#"
                  >
                    {" "}
                    Web Dev Simplified{" "}
                  </Link>
                  <p className="text-gray-400 text-xs mt-1">
                    241K views . 3 years ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio

export const metadata = {
  title: "Portfolio",
  description: "Descripcion de proyectos realizados",
}
