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
            // src="https://camo.githubusercontent.com/12630deac8365e4e6d0aaa33b9bc2cbd58d5c6ed68e334b4b32685229804aebb/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d4a617669657253616e746f796f3839267468656d653d62756566792673686f775f69636f6e733d74727565"
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
