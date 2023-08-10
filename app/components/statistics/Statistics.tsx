import Image from "next/image"
import "../../globals.css"
interface Props {
  sizeStadistics?: number
}

function Statistics({ sizeStadistics = 400 }: Props) {
  return (
    <article className="cardGlass flex flex-row p-3  ">
      <section className="justify-items-center">
        <p>Estadisticas en Github</p>
        <div className="flex items-center m-1 justify-center">
          <Image
            className="w-fit h-fit  "
            height={sizeStadistics}
            width={sizeStadistics}
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=JavierSantoyo89&theme=buefy&layout=compact"
            alt="Most used languages"
          ></Image>
        </div>

        <div className="flex items-center justify-center ">
          <Image
            className="w-fit h-fit"
            height={sizeStadistics}
            width={sizeStadistics}
            src="https://github-readme-stats.vercel.app/api?username=JavierSantoyo89&theme=buefy&show_icons=true"
            alt="Stars on Github"
          ></Image>
        </div>
      </section>
    </article>
  )
}

export default Statistics
