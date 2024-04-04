"use client"
import Link from "next/link"
import "flowbite"
import ThemeSwitcher from "./ThemeButton/ThemeSwitcher"

export default function Head() {
  return (
    <header>
      {/* <!-- component --> */}
      <nav className="bg-white shadow dark:bg-gray-800 w-[100]">
        <div className="container flex items-center justify-center p-2 mx-auto text-gray-600 capitalize dark:text-gray-300">
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
            href="/ong"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            ONG`s
          </Link>
          <Link
            href="/contact"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            Contacto
          </Link>

          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  )
}
