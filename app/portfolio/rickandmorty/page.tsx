"use client"

import React from "react"
import Link from "next/link"
function page() {
  return (
    <div>
      <h1> Welcome to Rick and Morty app </h1>
      <h2> Whats do you want to see?</h2>
      <Link href='/portfolio/rickandmorty/characters' className="text-red-900">Characters</Link>
      <Link href='/portfolio/rickandmorty/locations' className="text-red-900">Locations</Link>
    </div>
  )
}

export default page
