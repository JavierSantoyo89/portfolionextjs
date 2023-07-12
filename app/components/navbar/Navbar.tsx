"use client"
import React from "react"
import Image from "next/image"
import "./navbar.module.css"
import "@theme-toggles/react/css/Within.css"
import menu from "../../../public/menu.svg"
import { Within } from "@theme-toggles/react"
import next from "next/types"
{
  /* <Within duration={900} title="Toggle theme" style={{ fontSize: 60 }} /> */
}
function Navbar() {
  document.addEventListener("DOMContentLoaded", () => {
    const navbar: any = document.getElementById("navbar")
    const sidebar: any = document.getElementById("sidebar")
    const btnSidebarToggler: any = document.getElementById("btnSidebarToggler")
    const navClosed: any = document.getElementById("navClosed")
    const navOpen: any = document.getElementById("navOpen")

    btnSidebarToggler.addEventListener("click", (e: any) => {
      e.preventDefault()
      sidebar.classList.toggle("show")
      navClosed.classList.toggle("hidden")
      navOpen.classList.toggle("hidden")
    })

    sidebar.style.top = parseInt(navbar.clientHeight) - 1 + "px"
  })

  return (
    <div>
      {/* <!-- component -->
<!--
Change class "fixed" to "sticky" in "navbar" (l. 33) so the navbar doesn't hide any of your page content!
--> */}

      {/* <!-- Navbar start --> */}
      <nav
        id="navbar"
        className="fixed top-0 z-40 flex w-full flex-row justify-end bg-gray-700 px-4 sm:justify-between"
      >
        <ul className="breadcrumb hidden flex-row items-center py-4 text-lg text-white sm:flex">
          <li className="inline">
            <a href="#">Main</a>
          </li>
          <li className="inline">
            <span>Homepage</span>
          </li>
        </ul>
        <button
          id="btnSidebarToggler"
          type="button"
          className="py-4 text-2xl text-white hover:text-gray-200"
        >
          <svg
            id="navClosed"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <svg
            id="navOpen"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="hidden h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </nav>
      {/* <!-- Navbar end --> */}

      {/* <!-- Sidebar start--> */}
      <div id="containerSidebar" className="z-40">
        <div className="navbar-menu relative z-40">
          <nav
            id="sidebar"
            className="fixed left-0 bottom-0 flex w-3/4 -translate-x-full flex-col overflow-y-auto bg-gray-700 pt-6 pb-8 sm:max-w-xs lg:w-80"
          >
            {/* <!-- one category / navigation group --> */}
            <div className="px-4 pb-6">
              <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">
                Main
              </h3>
              <ul className="mb-8 text-sm font-medium">
                <li>
                  <a
                    className="active flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                    href="#homepage"
                  >
                    <span className="select-none">Homepage</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                    href="#link1"
                  >
                    <span className="select-none">link1</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- navigation group end--> */}

            {/* <!-- example copies start --> */}
            <div className="px-4 pb-6">
              <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">
                Legal
              </h3>
              <ul className="mb-8 text-sm font-medium">
                <li>
                  <a
                    className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                    href="#tc"
                  >
                    <span className="select-none">Terms and Condition</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                    href="#privacy"
                  >
                    <span className="select-none">Privacy policy</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                    href="#imprint"
                  >
                    <span className="select-none">Imprint</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="px-4 pb-6">
              <h3 className="mb-2 text-xs font-medium uppercase text-gray-500">
                Others
              </h3>
              <ul className="mb-8 text-sm font-medium">
                <li>
                  <a
                    className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                    href="#ex1"
                  >
                    <span className="select-none">...</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center rounded py-3 pl-3 pr-4 text-gray-50 hover:bg-gray-600"
                    href="#ex2"
                  >
                    <span className="select-none">...</span>
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- example copies end --> */}
          </nav>
        </div>
        <div className="mx-auto lg:ml-80"></div>
      </div>
      {/* <!-- Sidebar end --> */}

      <main>{/* <!-- your content goes here --> */}</main>
    </div>
  )
}
export default Navbar
