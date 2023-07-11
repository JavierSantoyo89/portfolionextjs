"use client"
import React from "react"
import Image from "next/image"
import menu from "../../../public/menu.svg"
function Header() {
  return <div>============= Header =============
  <Image src={menu} alt="menu" width={40} style={{ color: "blue" }}></Image></div>
}

export default Header
