import React from "react";
import { getCharacters } from "./characters/services";
import Card from "../../components/Card/Card";

async function fetchCharacters() {
  return await getCharacters();
}

// eslint-disable-next-line @next/next/no-async-client-component
async function page() {
  const characters = await fetchCharacters();
  return (
    <main>
      {/* <Swiper  spaceBetween={10} slidesPerView={3} loop>
      {characters.map((character) => ( 
        <SwiperSlide key={character.id}>
          <Image src={character.image} key={character.id} alt={""}/>
        </SwiperSlide>
      ))}
    </Swiper>
 */}

      <section className=" grid justify-around ">
        <h2 className="grid justify-center">Rick and Morty api</h2>

        <div
          className=" grid place-items-center sm:grid-cols-1 lg:grid-cols-5 p-3
       "
        >
          {characters.map((character) => (
            <Card key={character.id} data={character} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default page;
