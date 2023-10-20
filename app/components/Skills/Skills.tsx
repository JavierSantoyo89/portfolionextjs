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
    <div className="grid sm:grid-cols-3 lg:grid-cols-5 cardGlass p-3 ">
      {/* <h2>Skills tech.</h2> */}
      
        {/*Skills contentr*/}
        <div className="mr-5">
        <h3 className="grid place-content-center mb-5 mr">FrontEnd</h3>
        <div className="grid grid-cols-2 gap-4">

          <span className="grid place-items-center">
            <HtmlIcon widthSkillIcon={60} heightSkillIcon={60} />
            HTML
          </span>

          <span className="grid place-items-center">
            <Css3 widthSkillIcon={60} heightSkillIcon={60} />
            CSS3
          </span>

          <span className="grid place-items-center">
            <JavaScriptIcon widthSkillIcon={60} heightSkillIcon={60} />
            JavaScript
          </span>

          <span className="grid place-items-center">
            <BootstrapIcon widthSkillIcon={60} heightSkillIcon={60} />
            Bootstrap
          </span>

          <span className="grid place-items-center">
            <NextIcon widthSkillIcon={60} heightSkillIcon={60} />
            NextJS 13
          </span>

          <span className="grid place-items-center">
            <TailwindIcon widthSkillIcon={60} heightSkillIcon={60} />
            Tailwind
          </span>

          <span className="grid place-items-center">
            <WordPressIcon widthSkillIcon={60} heightSkillIcon={60} />
            WordPress
          </span>
        </div>

        </div>
      
          <section className="mr-5">
          <h3 className="grid place-content-center mb-5">BackEnd</h3>
          <div className="grid grid-cols-2 gap-4">
            <span className="grid place-items-center">
              <JavaScriptIcon widthSkillIcon={60} heightSkillIcon={60} />
              JavaScript
            </span>

            <span className="grid place-items-center">
              <NodeJsIcon widthSkillIcon={60} heightSkillIcon={60} />
              node JS
            </span>

            <span className="grid place-items-center">
              <TypescriptIcon widthSkillIcon={60} heightSkillIcon={60} />
              TypeScript
            </span>

            <span className="grid place-items-center">
              <Express widthSkillIcon={60} heightSkillIcon={60} />
              Express JS
            </span>

            <span className="grid place-items-center">
              <EjsIcon widthSkillIcon={60} heightSkillIcon={60} />
              Ejs
            </span>
          </div>
          </section>
      
          <section className="mr-5">
          <h3 className="grid place-content-center mb-5">Base de datos</h3>
          <div className=" grid grid-cols-1  gap-4">
            <span className="grid place-items-center">
              <SqlServerIcon widthSkillIcon={60} heightSkillIcon={60} />
              SQL Server
            </span>

            <span className="grid place-items-center">
              <MySqlIcon widthSkillIcon={60} heightSkillIcon={60} />
              MySQL
            </span>
          </div>
          </section>

        <section className="mr-5">
        <h3 className="grid place-content-center mb-5">UI/UX</h3>
        <div className=" grid grid-cols-1  gap-4">
          <span className="grid place-items-center">
            <PhotoShopIcon widthSkillIcon={60} heightSkillIcon={60} />
            PhotoShop
          </span>

          <span className="grid place-items-center">
            <Illustrator widthSkillIcon={60} heightSkillIcon={60} />
            Illustrator
          </span>
        </div>
        </section>

<section className="mr-5">
        <h3  className="grid place-content-center mb-5">Administrativas</h3>
        <div className=" grid grid-cols-1  gap-4">

          <span className="grid place-items-center">
            <TrelloIcon widthSkillIcon={50} heightSkillIcon={50} />
            Trello
          </span>
        </div>
</section>
    </div>
  );
}

export default Skills;
