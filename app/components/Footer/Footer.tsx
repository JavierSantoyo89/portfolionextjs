import Image from "next/image"
import Link from "next/link"
import React from "react"
import linkedin from "../../../public/Socials/linkedin.svg"
import github from "../../../public/Socials/github.svg"
import twitter from "../../../public/Socials/twitter.svg"
function Footer() {
  return (
    <footer className="bg-white">
      <div className="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <nav
          className="flex flex-wrap justify-center -mx-5 -my-2"
          aria-label="Footer"
        >
          <div className="px-5 py-2">
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Next.js
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Partners
            </a>
          </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <span className="inline-flex justify-center w-full gap-3 m-auto md:justify-start md:w-auto">
            <a className="w-6 h-6 transition fill-black hover:text-blue-500">
              <span className="sr-only">github</span>
              {/* <ion-icon class="w-5 h-5 md hydrated" name="logo-github" role="img" aria-label="logo github"></ion-icon> */}
            </a>
            <a className="w-6 h-6 transition fill-black hover:text-blue-500">
              <span className="sr-only">twitter</span>
              {/* <ion-icon class="w-5 h-5 md hydrated" name="logo-twitter" role="img" aria-label="logo twitter"></ion-icon> */}
            </a>
            <a className="w-6 h-6 transition fill-black hover:text-blue-500">
              <span className="sr-only">Instagram</span>
              {/* <ion-icon class="w-5 h-5 md hydrated" name="logo-instagram" role="img" aria-label="logo instagram"></ion-icon> */}
            </a>

            <Link
              href={"https://github.com/JavierSantoyo89"}
              className="w-6 h-6 transition fill-black hover:text-blue-500"
            >
              <span className="sr-only">Github</span>
              <Image
                src={github}
                alt="Github logo"
                className="w-5 h-5 md hydrated"
                role="img"
                aria-label="logo github"
              ></Image>
            </Link>
          </span>
        </div>
        <p className="mt-8 text-center">
          <span className="mx-auto mt-2 text-sm text-gray-500">
            Copyright © 2023
          </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
