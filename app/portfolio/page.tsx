"use client"
import Link from "next/link"
import Image from "next/Image"
import CurAME from "/public/curame.webp"
import RickAndMort from "../public/rickAndMortyAPI.jpeg"

function Portfolio() {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={RickAndMort}
              width={150}
              height={150}
            ></Image>
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={CurAME}
              width={150}
              height={150}
            ></Image>
          </div>
          <div className="w-full p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              width={150}
              height={150}
            ></Image>
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
              width={150}
              height={150}
            ></Image>
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
              width={150}
              height={150}
            ></Image>
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
              width={150}
              height={150}
            ></Image>
          </div>
        </div>
      </div>
    </div>

    // <div>
    //   {/* <!-- component --> */}
    //   <div className="h-screen flex items-center justify-center">
    //     <div className="grid grid-cols-12 gap-2 gap-y-4 max-w-6xl">
    //       {/* <!-- Video 1 --> */}
    //       <div className="col-span-12 sm:col-span-6 md:col-span-3">
    //         <div className="w-full flex flex-col">
    //           <div className="relative">
    //             {/* <!-- Image Video --> */}
    //             <Link href="https://www.curame.org.mx/">
    //               <Image
    //                 src={CurAME}
    //                 alt="Logo CurAME Mexico"
    //                 className="w-96 h-auto"
    //               />
    //             </Link>
    //             <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
    //               Wordpress
    //             </p>
    //           </div>

    //           <div className="flex flex-row mt-2 gap-2">
    //             {/* <!-- Profile Picture --> */}
    //             <Link href="https://www.curame.org.mx/">
    //               <Image
    //                 src={CurAME}
    //                 alt="Lgo CurAME Mexico"
    //                 width={40}
    //                 height={40}
    //                 className="rounded-full max-h-10 max-w-10"
    //               />
    //             </Link>

    //             {/* <!-- Description --> */}
    //             <div className="flex flex-col">
    //               <Link href="#">
    //                 <p className="text-gray-100 text-sm font-semibold">
    //                   CurAME Mexico A.C.
    //                 </p>
    //               </Link>
    //               <Link
    //                 className="text-gray-400 text-xs mt-2 hover:text-gray-100"
    //                 href="#"
    //               >
    //                 Web diseñada para la organizacion civil `Atrofia Muscular
    //                 Espinal en Mexico`
    //               </Link>
    //               <p className="text-gray-400 text-xs mt-1">
    //                 241K views . 3 years ago
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* <!-- Video 2 --> */}
    //       <div className="col-span-12 sm:col-span-6 md:col-span-3">
    //         <div className="w-full flex flex-col">
    //           <div className="relative">
    //             {/* <!-- Image Video --> */}
    //             <Link href="/portfolio/rickandmorty">
    //               <Image
    //                 src={CurAME}
    //                 alt="Sitio random"
    //                 width={40}
    //                 height={40}
    //                 className="w-96 h-auto"
    //               />
    //             </Link>

    //             <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
    //               1:15
    //             </p>
    //           </div>

    //           <div className="flex flex-row mt-2 gap-2">
    //             {/* <!-- Profile Picture --> */}
    //             <Link href="/portfolio/rickandmorty">
    //               <Image
    //                 src={CurAME}
    //                 alt="Sitio random 2"
    //                 width={40}
    //                 height={40}
    //                 className="rounded-full max-h-10 max-w-10"
    //               />
    //             </Link>

    //             {/* <!-- Description --> */}
    //             <div className="flex flex-col">
    //               <Link href="/portfolio/rickandmorty">
    //                 <p className="text-gray-100 text-sm font-semibold">
    //                   Learn CSS Box Model in 8 Minutes
    //                 </p>
    //               </Link>
    //               <Link
    //                 className="text-gray-400 text-xs mt-2 hover:text-gray-100"
    //                 href="#"
    //               >
    //                 Web Dev Simplified
    //               </Link>
    //               <p className="text-gray-400 text-xs mt-1">
    //                 241K views . 3 years ago
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* <!-- Video 3 --> */}
    //       <div className="col-span-12 sm:col-span-6 md:col-span-3">
    //         <div className="w-full flex flex-col">
    //           <div className="relative">
    //             {/* <!-- Image Video --> */}
    //             <Link href="/portfolio/infopc">
    //               <Image
    //                 src={CurAME}
    //                 alt="Sitio random3"
    //                 width={40}
    //                 height={40}
    //                 className="w-96 h-auto"
    //               />
    //             </Link>

    //             <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
    //               1:15
    //             </p>
    //           </div>

    //           <div className="flex flex-row mt-2 gap-2">
    //             {/* <!-- Profile Picture --> */}
    //             <Link href="/portfolio/infopc">
    //               <Image
    //                 src={CurAME}
    //                 alt="Sitio random 3"
    //                 width={40}
    //                 height={40}
    //                 className="rounded-full max-h-10 max-w-10"
    //               />
    //             </Link>

    //             {/* <!-- Description --> */}
    //             <div className="flex flex-col">
    //               <Link href="#">
    //                 <p className="text-gray-100 text-sm font-semibold">
    //                   Sitio donde veras estadisticas de tu equipo.
    //                 </p>
    //               </Link>
    //               <Link
    //                 className="text-gray-400 text-xs mt-2 hover:text-gray-100"
    //                 href="#"
    //               >
    //                 {" "}
    //                 Web Dev Simplified{" "}
    //               </Link>
    //               <p className="text-gray-400 text-xs mt-1">
    //                 241K views . 3 years ago
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       {/* <!-- Video 4 --> */}
    //       <div className="col-span-12 sm:col-span-6 md:col-span-3">
    //         <div className="w-full flex flex-col">
    //           <div className="relative">
    //             {/* <!-- Image Video --> */}
    //             <Link href="/portfolio/frankys">
    //               <Image
    //                 src={CurAME}
    //                 alt="Sitio random3"
    //                 width={40}
    //                 height={40}
    //                 className="w-96 h-auto"
    //               />
    //             </Link>

    //             <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
    //               1:15
    //             </p>
    //           </div>

    //           <div className="flex flex-row mt-2 gap-2">
    //             {/* <!-- Profile Picture --> */}
    //             <Link href="/portfolio/frankys">
    //               <Image
    //                 src={CurAME}
    //                 alt="Sitio random 3"
    //                 width={40}
    //                 height={40}
    //                 className="rounded-full max-h-10 max-w-10"
    //               />
    //             </Link>

    //             {/* <!-- Description --> */}
    //             <div className="flex flex-col">
    //               <Link href="/portfolio/frankys">
    //                 <p className="text-gray-100 text-sm font-semibold">
    //                   Sitio usando Backend y frontend para una cafeteria, bar y
    //                   restaurent.
    //                 </p>
    //               </Link>
    //               <Link
    //                 className="text-gray-400 text-xs mt-2 hover:text-gray-100"
    //                 href="#"
    //               >
    //                 {" "}
    //                 Web Dev Simplified{" "}
    //               </Link>
    //               <p className="text-gray-400 text-xs mt-1">
    //                 241K views . 3 years ago
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Portfolio

export const metadata = {
  title: "Portfolio",
  description: "Descripcion de proyectos realizados",
}
