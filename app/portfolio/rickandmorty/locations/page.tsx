/* eslint-disable @next/next/no-async-client-component */

import Card from "../../../components/Card/Card.tsx"
import { getLocations } from "./services"
async function fetchLocations() {
  return await getLocations()
}
async function Locations() {
  const locations = await fetchLocations()
  return (
    <>
      {locations.map((Locations) => (
        <Card key={Locations.id} data={Locations} />
      ))}
    </>
  )
}

export default Locations
