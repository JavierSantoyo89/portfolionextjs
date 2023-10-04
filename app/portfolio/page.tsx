"use client";
import Image from "next/image";
import "./portfolio.css";
import img1 from "../public/CurAMEMexico.png";
import img2 from "../../public/loginHtml.png";
import img3 from "../public/rickAndMortyAPI.jpeg";
import { useState } from "react";

const cards = [
  {
    id: 1,
    header: "CurAME",
    image: img1,
    text: "Diseño creado para una ONG",
  },
  {
    id: 2,
    header: "Rick&Morty",
    image: img3,
    text: "Practica usando llamado a API's externas",
  },
  {
    id: 3,
    header: "Login",
    image: img2,
    text: "Practica de diseño usando typescript y CSS puro",
  },
];

function Portfolio() {
  const [active, setActive] = useState(0);
  const handleToggle = (index: number) => setActive(index);
  return (
    <main className=" grid place-items-center ">

     <section >
      {cards.map((card, index) => {
        const isActive = active === index ? "active" : "";
        return (
          <article
          key={card.id}
          className={isActive}
          onClick={() => handleToggle(index)}
          >
            <Image src={card.image} alt={card.text} className="h-auto"/>
            <div className="content">
              <div>
                <h2>{card.header}</h2>
                <p>{card.text}</p>
              </div>
            </div>
          </article>
        );
      })}
    </section> 
</main>
  );
}

export default Portfolio;

// export const metadata = {
//   title: "Portfolio",
//   description: "Descripcion de proyectos realizados",
// };
