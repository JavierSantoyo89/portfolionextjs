"use client"
import { Suspense } from "react"
import { getCharacters } from "./services"
import  Card  from "../../../components/Card/Card.tsx"
import styles from "./Characters.module.css"
async function fetchCharacters() {
  return await getCharacters()
}

// eslint-disable-next-line @next/next/no-async-client-component
async function Characters() {
  const characters = await fetchCharacters()
  return (
    <section className={styles.sectionContainer}>
      <>
        {characters.map((character) => (
          <Card key={character.id} data={character} />
        ))}
      </>
    </section>
  )
}

export default Characters
