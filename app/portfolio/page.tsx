"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import cards from "./portfolioRutes";
import "./portfolio.css";

function Portfolio() {
  const [active, setActive] = useState(0);
  const handleToggle = (index: number) => setActive(index);
  return (
    <main className="grid place-items-center h-[100svh] ">
      <section id="portfolio-section">
        {cards.map((card, index) => {
          const isActive = active === index ? "active" : "";
          let skill = card.skills;
          return (
            <article
              id="portfolio-article"
              key={card.id}
              className={isActive}
              onClick={() => handleToggle(index)}
            >
              <Image
                src={card.image}
                width={card.width}
                height={card.height}
                alt={card.text}
                className="portfolio-image h-auto"
              />
              <div className="content">
                <div>
                  <h2>
                    <Link href={card.link} passHref>
                      {card.header}
                    </Link>{" "}
                  </h2>
                  <p>{card.text}</p>
                </div>
                <section>
                <div className="grid grid-cols-2 justify-items-center">
                  {card.skills}
                </div>
                </section>
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
