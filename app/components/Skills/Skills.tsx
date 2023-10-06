import React from "react"
import {
  Css3,
  HtmlIcon,
  JavaScriptIcon,
  NextIcon,
  BootstrapIcon,
  TailwindIcon,
  WordPressIcon,
  PhotoShopIcon,
  TrelloIcon,
  Illustrator,
} from "../index"
function Skills() {
  return (
    <article className="cardGlass flex-wrap p-3 sm:text-xs">
      {/*Skills contentr*/}
      <h2>Skills tech.</h2>
      <h3>FrontEnd</h3>
      <section className=" flex flex-row flex-wrap   ">
        <div className="p-2 grid justify-items-center">
          <HtmlIcon widthSkillIcon={60} heightSkillIcon={60} />
          <span>HTML</span>
        </div>
        <div className="p-2 grid justify-items-center">
          <Css3 widthSkillIcon={60} heightSkillIcon={60} />
          <span>CSS3</span>
        </div>
        <div className="p-2 grid justify-items-center">
          <JavaScriptIcon widthSkillIcon={60} heightSkillIcon={60} />
          <span>JavaScript</span>
        </div>
        <div className="p-2 grid justify-items-center">
          <BootstrapIcon widthSkillIcon={60} heightSkillIcon={60} />
          <span>Bootstrap</span>
        </div>
        <div className="p-2 grid justify-items-center">
          <NextIcon widthSkillIcon={60} heightSkillIcon={60} />
          <span>NextJS 13</span>
        </div>
        <div className="p-2 grid justify-items-center">
          <TailwindIcon widthSkillIcon={60} heightSkillIcon={60} />
          <span>Tailwind</span>
        </div>
        <div className="p-2 grid justify-items-center">
          <WordPressIcon widthSkillIcon={60} heightSkillIcon={60} />
          <span>WordPress</span>
        </div>
      </section>

      <section className="">BackEnd</section>

      <h2>UI/UX</h2>
      <section className="flex flex-row flex-wrap">
        <div className="p-2 grid justify-items-center">
          <PhotoShopIcon widthSkillIcon={60} heightSkillIcon={60} />
          <span>PhotoShop</span>
        </div>
        <div className="p-2 grid justify-items-center">
          <Illustrator widthSkillIcon={60} heightSkillIcon={60} />
          <span>Illustrator</span>
        </div>
      </section>

      <h2 className="text-[20px] lg:text-xl">Administrativas</h2>
      <section className="flex flex-row flex-wrap">
        <div className="p-2 grid justify-items-center">
          <TrelloIcon widthSkillIcon={50} heightSkillIcon={50} />
          <span>Trello</span>
        </div>
      </section>
    </article>
  )
}

export default Skills
