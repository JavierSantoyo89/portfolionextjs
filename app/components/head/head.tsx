"use client"
import Link from "next/link"
import "flowbite"
import ThemeButton from "./ThemeButton/ThemeSwitcher.jsx"
import Image from "next/image.js"

export default function Head() {
  return (
    <header>
      {/* <!-- component --> */}
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <Link
            href="/"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            Portafolio
          </Link>
          <Link
            href="/about"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            Sobre mi
          </Link>
          <Link
            href="/contact"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            Contacto
          </Link>

          

          <ThemeButton />
        </div>
      </nav>
    </header>
  )
}
