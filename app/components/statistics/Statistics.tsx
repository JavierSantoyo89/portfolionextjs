import Image from "next/image"
import "../../globals.css"
interface Props {
  sizeStadistics?: number
}

function Statistics({ sizeStadistics = 800 }: Props) {
  return (
    <div className="cardGlass p-3" >
      <h2>Estadisticas en Github</h2>

    <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-3   ">
        <section className="m-5">
          <Image
            className="w-[100vw] md:w-[30vw] lg:w-[30vw]"
            height={sizeStadistics}
            width={sizeStadistics}
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=JavierSantoyo89&theme=buefy&layout=compact"
            alt="Most used languages"
          ></Image>
        </section>

        <section className="m-5">
          <Image
            className="w-[100vw] md:w-[70vw] lg:w-[40vw]"
            height={sizeStadistics}
            width={sizeStadistics}
            src="https://github-readme-stats.vercel.app/api?username=JavierSantoyo89&theme=buefy&show_icons=true"
            alt="Stars on Github"
          ></Image>
        </section>
    </div>
    </div>
  )
}

export default Statistics
