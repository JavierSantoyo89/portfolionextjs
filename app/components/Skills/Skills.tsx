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
  JiraIcon,
  AsanaIcon,
} from "../index";
function Skills() {
  return (
    <article className="cardGlass">

      <h2 className="grid place-content-center mt-3 ">Skills</h2>
    <div className="grid sm:grid-cols-3 lg:grid-cols-5 pl-5 ">
        {/*FrontEnd section*/}
        <div className="cardGlass mr-5 ml-1 mb-5">
        <h3 className="grid place-content-center mb-5 ">FrontEnd</h3>
        <div className="grid grid-cols-2 gap-4 mb-5">

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
      
      {/*Backend section*/}
          <section className="cardGlass mr-5 mb-5">
          <h3 className="grid place-content-center mb-5">BackEnd</h3>
          <div className="grid grid-cols-2 gap-4 ">
            <span className="grid place-items-center">
              <JavaScriptIcon widthSkillIcon={60} heightSkillIcon={60} />
              JavaScript
            </span>

            <span className="grid place-items-center">
              <NodeJsIcon widthSkillIcon={60} heightSkillIcon={60} />
              node JS
            </span>

            <span className="grid place-items-center ">
              <Express widthSkillIcon={60} heightSkillIcon={60} />
              Express JS
            </span>

            <span className="grid place-items-center">
              <EjsIcon widthSkillIcon={60} heightSkillIcon={60} />
              Ejs
            </span>

            <span className="grid place-items-center">
              <TypescriptIcon widthSkillIcon={60} heightSkillIcon={60} />
              TypeScript
            </span>
          </div>
          </section>
      
      {/*Database section*/}
          <section className="cardGlass mr-5 mb-5">
          <h3 className="grid place-content-center mb-5">Base de datos</h3>
          <div className=" grid grid-flow-col lg:grid-cols-2  gap-4">
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

{/*UI/UX section*/}
        <section className="cardGlass mr-5 mb-5">
        <h3 className="grid place-content-center mb-5">UI/UX</h3>
        <div className=" grid grid-flow-col  gap-4">
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

{/*Administrtion section*/}
<section className="cardGlass mr-5 mb-5">
        <h3  className="grid place-content-center mb-5">Administrativas</h3>
        <div className=" grid grid-flow-col  gap-4">

          <span className="grid place-items-center">
            <TrelloIcon widthSkillIcon={50} heightSkillIcon={50} />
            Trello
          </span>
          <span className="grid place-items-center">
            <JiraIcon widthSkillIcon={50} heightSkillIcon={50} />
            Jira
          </span>
          <span className="grid place-items-center">
            <AsanaIcon widthSkillIcon={50} heightSkillIcon={50} />
            Asana
          </span>
        </div>
</section>
    </div>
    </article>
  );
}

export default Skills;
