import { getLocations } from './services'
import { Card, Navbar } from '@/app/components'
import { Routes } from '@/app/models'

async function fetchLocations() {
  return await getLocations()
}

async function Locations() {
  const locations = await fetchLocations()
  return (
    <>
      <Navbar pathNames={[Routes.RICKANDMORTY, Routes.CHARACTERS]} />
      {locations.map((Locations) => (
        <Card key={Locations.id} data={Locations} />
      ))}
    </>
  )
}

export default Locations
