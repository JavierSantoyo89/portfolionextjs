"use client"
import React from "react"
import Image from "next/image"
import "./navbar.module.css"
import "@theme-toggles/react/css/Within.css"
import menu from "../../../public/menu.svg"
import { Within } from "@theme-toggles/react"
import next from "next/types"
function Navbar() {
  return (
    <div>
      <Within duration={900} title="Toggle theme" style={{ fontSize: 60 }} />
    </div>
  )
}
export default Navbar
