import { Location } from '../models/index'

export const getLocations = (): Promise<Location[]> => {
  const url = 'https://rickandmortyapi.com/api/location'
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.results)
}
