"use client"

import React from "react"
import Link from "next/link"
// import Image from "next/image";
// import "swiper/css"
// import { Swiper, SwiperSlide } from "swiper/react";

// import image1 from '../../../public/Errors404.png'
// import image2 from '../../../public/rickAndMortyAPI.jpeg'
// import image3 from '../../../public/Errors404.png'
// import image4 from '../../../public/rickAndMortyAPI.jpeg'
// const slides = [image1, image2, image3, image4]

import { getCharacters } from "./characters/services"
// import  Card  from "../../components/Card/Card"

async function fetchCharacters() {
  return await getCharacters()
}


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
