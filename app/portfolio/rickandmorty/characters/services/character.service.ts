
import { Character } from "../models/index"

export const getCharacters = (): Promise<Character[]> => {
  const url = "https://rickandmortyapi.com/api/character"
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.results)
    .catch(error=>{
      console.log('Feching error');
    }
      
    )

  }
