import Image from "next/image"
import "../../globals.css"
interface Props {
  sizeStadistics?: number
}

function Statistics({ sizeStadistics = 800 }: Props) {
  return (
    <div className="cardGlass flex flex-wrap p-3 justify-center  ">
        <section className="m-5 flex flex-col ">
          <Image
            // className="w-fit h-1/2  "
            className="w-[22vw] "
            height={sizeStadistics}
            width={sizeStadistics}
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=JavierSantoyo89&theme=buefy&layout=compact"
            alt="Most used languages"
          ></Image>
        </section>

        <section className="m-5 grid grid-rows-1 ">
          <Image
            className="w-[29vw]"
            height={sizeStadistics}
            width={sizeStadistics}
            src="https://github-readme-stats.vercel.app/api?username=JavierSantoyo89&theme=buefy&show_icons=true"
            alt="Stars on Github"
          ></Image>
        </section>
    
    </div>
  )
}

export default Statistics
