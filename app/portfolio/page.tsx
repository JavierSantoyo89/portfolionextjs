"use client";
import Image from "next/image";
import "./portfolio.css";
import img1 from "../public/CurAMEMexico.png";
import img2 from "../../public/loginHtml.png";
import img3 from "../public/rickAndMortyAPI.jpeg";
import { useState } from "react";
import Link from "next/link";

const cards = [
  {
    id: 1,
    header: "CurAME",
    image: img1,
    link:"www.curame.org.mx",
    text: "Diseño creado para una ONG",
    Description:"Primer proyecto usando wordpress, revisando el contenido necesario para mostrar con el cliente y editando algunas imágenes para poder ser ilustrativas para la ONG junto con la creación de 'política de privacidad' y de diseño básico de base de datos.",
  },
  {
    id: 2,
    header: "Rick&Morty",
    image: img3,
    link:"portfolio/rickandmorty",  
    text: "Practica usando llamado a API's externas",
    Description: "Practica de cómo usar información mediante API’s externas(get) y manipulando la información a mostrar al usuario."
  },
  {
    id: 3,
    header: "Login",
    image: img2,
    link:"portfolio/login",
    text: "Practica de diseño usando typescript y CSS puro",
    description:"Prueba de diseño en cuanto interfas de usuario usando HTML, CSS , Javascript"
  },
];

function Portfolio() {
  const [active, setActive] = useState(0);
  const handleToggle = (index: number) => setActive(index);
  return (
    <main className="grid place-items-center ">
      <section>
        {cards.map((card, index) => {
          const isActive = active === index ? "active" : "";
         
          return (
            <article
              key={card.id}
              className={isActive}
              onClick={() => handleToggle(index)}
            >
              <Image src={card.image} alt={card.text} className="h-auto" />
              <div className="content">
                <div>
                  <h2><Link href={card.link}>{card.header}</Link> </h2>
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
