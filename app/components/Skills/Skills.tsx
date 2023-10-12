import React from "react";
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
  NodeJsIcon,
  TypescriptIcon,
  EjsIcon,
  Express,
  SqlServerIcon,
  MySqlIcon,
} from "../index";
function Skills() {
  return (
    <div className="cardGlass p-3 ">
      <h2>Skills tech.</h2>
      <article className=" grid grid-cols-5 p-3 sm:text-xs">
        {/*Skills contentr*/}
        <h3>FrontEnd</h3>
        <section className=" grid grid-cols-2 p-2 gap-5 ">
          <span>
            <HtmlIcon widthSkillIcon={60} heightSkillIcon={60} />
            HTML
          </span>

          <span>
            <Css3 widthSkillIcon={60} heightSkillIcon={60} />
            CSS3
          </span>

          <span>
            <JavaScriptIcon widthSkillIcon={60} heightSkillIcon={60} />
            JavaScript
          </span>

          <span>
            <BootstrapIcon widthSkillIcon={60} heightSkillIcon={60} />
            Bootstrap
          </span>

          <span>
            <NextIcon widthSkillIcon={60} heightSkillIcon={60} />
            NextJS 13
          </span>

          <span>
            <TailwindIcon widthSkillIcon={60} heightSkillIcon={60} />
            Tailwind
          </span>

          <span>
            <WordPressIcon widthSkillIcon={60} heightSkillIcon={60} />
            WordPress
          </span>
        </section>

        <section className="">
          <h3>BackEnd</h3>
          <section className=" grid grid-cols-2  p-2 ">
            <span>
              <JavaScriptIcon widthSkillIcon={60} heightSkillIcon={60} />
              JavaScript
            </span>

            <span>
              <NodeJsIcon widthSkillIcon={60} heightSkillIcon={60} />
              node JS
            </span>

            <span>
              <TypescriptIcon widthSkillIcon={60} heightSkillIcon={60} />
              TypeScript
            </span>

            <span>
              <Express widthSkillIcon={60} heightSkillIcon={60} />
              Express JS
            </span>

            <span>
              <EjsIcon widthSkillIcon={60} heightSkillIcon={60} />
              Ejs
            </span>
          </section>
        </section>

        <section className="grid grid-cols-2 ">
          <h3>Base de datos</h3>{" "}
          <section className=" flex flex-row flex-wrap  p-2 gap-5 ">
            <span>
              <SqlServerIcon widthSkillIcon={60} heightSkillIcon={60} />
              SQL Server
            </span>

            <span>
              <MySqlIcon widthSkillIcon={60} heightSkillIcon={60} />
              MySQL
            </span>
          </section>
        </section>

        <h3>UI/UX</h3>
        <section className="flex flex-row flex-wrap p-2 gap-5">
          <span>
            <PhotoShopIcon widthSkillIcon={60} heightSkillIcon={60} />
            PhotoShop
          </span>

          <span>
            <Illustrator widthSkillIcon={60} heightSkillIcon={60} />
            Illustrator
          </span>
        </section>

        <h3 className="text-[20px] lg:text-xl">Administrativas</h3>
        <section className="flex flex-row flex-wrap">
          <span>
            <TrelloIcon widthSkillIcon={50} heightSkillIcon={50} />
            Trello
          </span>
        </section>
      </article>
    </div>
  );
}

export default Skills;
