import React from 'react'
import { getCharacters } from './services'
import { Card, Navbar } from '@/app/components'
import { Routes } from '@/app/models'

async function fetchCharacters() {
  return await getCharacters()
}

async function Characters() {
  const characters = await fetchCharacters()
  return (
    <>
      <Navbar pathNames={[Routes.RICKANDMORTY, Routes.LOCATIONS]} />
      {characters.map((character) => (
        <Card key={character.id} data={character} />
      ))}
    </>
  )
}

export default Characters
