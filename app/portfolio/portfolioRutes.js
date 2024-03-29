import {
  Css3,
  HtmlIcon,
  JavaScriptIcon,
  NextIcon,
  BootstrapIcon,
  TailwindIcon,
  WordPressIcon,
  PhotoShopIcon,
  Illustrator,
  NodeJsIcon,
  TypescriptIcon,
  EjsIcon,
  Express,
  MySqlIcon,
} from "../components/index";
import img1 from "../../public/curame.webp";
import img2 from "../../public/loginHtml.png";
import img3 from "../../public/rickAndMortyAPI.jpeg";

const cards = [
  {
    id: 1,
    header: "CurAME",
    image: img1,
    width: 425,
    height: 100,
    link: "https://www.curame.org.mx",
    text: "Diseño creado para una ONG",
    skills: <WordPressIcon key={1} widthSkillIcon={60} heightSkillIcon={60} />,
  },
  {
    id: 2,
    header: "Rick&Morty",
    image: img3,
    width: 525,
    height: 100,
    link: "portfolio/rickandmorty",
    text: "Practica usando llamado a API's externas",
    skills: [<JavaScriptIcon key={1} widthSkillIcon={60} heightSkillIcon={60} />],
  },
  {
    id: 3,
    header: "Login",
    image: img2,
    width: 525,
    height: 100,
    link: "https://javiersantoyo89.github.io/Login/",
    text: "Practica de diseño usando typescript y CSS puro",
    skills: [
      <HtmlIcon key={1} widthSkillIcon={60} heightSkillIcon={60} />,
      <Css3 key={2} widthSkillIcon={60} heightSkillIcon={60} />,
      <JavaScriptIcon key={3} widthSkillIcon={60} heightSkillIcon={60} />,
    ],
  },
  {
    id: 4,
    header: "Infopc",
    image: img2,
    width: 525,
    height: 100,
    link: "portfolio/infopc",
    text: "Muestra estadisticas del servidor frontend",
    skills: [
      <HtmlIcon key={1} widthSkillIcon={60} heightSkillIcon={60} />,
      <Css3 key={2} widthSkillIcon={60} heightSkillIcon={60} />,
      <NodeJsIcon key={3} widthSkillIcon={60} heightSkillIcon={60} />,
    ],
  },
  {
    id: 5,
    header: "Metal-mecanica",
    image: img3,
    width: 525,
    height: 100,
    link: "portfolio/metalmecanica",
    text: "Servicio backend enfocado a la industria metal-mecanica",
    skills: [
      <HtmlIcon key={1} widthSkillIcon={50} heightSkillIcon={50} />,
      <Css3 key={2} widthSkillIcon={50} heightSkillIcon={50} />,
      <EjsIcon key={3} widthSkillIcon={50} heightSkillIcon={50} />,
      <NodeJsIcon key={4} widthSkillIcon={50} heightSkillIcon={50} />,
      <Express key={5} widthSkillIcon={50} heightSkillIcon={50} />,
      <MySqlIcon key={6} widthSkillIcon={50} heightSkillIcon={50} />,
      <TypescriptIcon key={7} widthSkillIcon={50} heightSkillIcon={50} />,
    ],
  },
  // {
  //   id: 6,
  //   header: "Franky's coffe",
  //   image: img3,
  //   width: 525,
  //   height: 100,
  //   link: "portfolio/frankys",
  //   text: "Sueño de tener una cafeteria propio",
  //   skills: "WordPressIcon",
  // },
  // {
  //   id: 7,
  //   header: "ONG",
  //   image: img2,
  //   width: 525,
  //   height: 100,
  //   link: "portfolio/ong",
  //   text: "Servicio social para organizaciones civiles",
  //   skills: [
  //     <WordPressIcon key={1} widthSkillIcon={60} heightSkillIcon={60} />,
  //     <JavaScriptIcon key={2} widthSkillIcon={60} heightSkillIcon={60} />,
  //   ],
  // },
];

export default cards;
