
import { getCharacters } from "./services"
import  Card  from "../../../components/Card/Card"
// import styles from "./Characters.module.css"
// import Image from "next/image"
// import { Swiper, SwiperSlide } from "swiper/react"

async function fetchCharacters() {
  return await getCharacters()
}

// eslint-disable-next-line @next/next/no-async-client-component
async function Characters() {
  const characters = await fetchCharacters()
  return (<div>
{/* <Swiper  spaceBetween={10} slidesPerView={3} loop>
      {characters.map((character) => ( 
        <SwiperSlide key={character.id}>
          <Image src={character.image} key={character.id} alt={""}/>
        </SwiperSlide>
      ))}
    </Swiper>
 */}


    <section className=" p-3 ">

      <div className="grid place-items-center sm:grid-cols-1 lg:grid-cols-4 p-3
       ">
        {characters.map((character) => (
          <Card key={character.id} data={character} />
        ))}
      </div>
    </section>


  </div>
  )
}

export default Characters
