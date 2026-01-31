import Image from "next/image";
import "../../globals.css";
interface Props {
  sizeStadistics?: number;
}

function Statistics({ sizeStadistics = 800 }: Props) {
  return (
    <div className="cardGlass p-3">
      <h2>Estadisticas en Github</h2>

      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-3   ">
        {/* <section className="m-5">
        <iframe src= "https://github-readme-stats.vercel.app/api/top-langs/?username=javiersantoyo89&layout=compact&theme=algolia&hide_border=true&text_color=ffffff"
height='165px'
width='300px'
></iframe>
        </section> */}

        {/* <section className="m-5">
        <iframe src="https://github-readme-stats.vercel.app/api?username=JavierSantoyo89&show_icons=true&theme=algolia&hide_border=true&text_color=ffffff"
        height="195px"
        width="468px" ></iframe>
        </section> */}
      </div>
    </div>
  );
}

export default Statistics;
