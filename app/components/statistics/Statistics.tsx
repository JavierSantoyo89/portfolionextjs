import Image from "next/image"

function Statistics() {
    let sizeStadistics = 400
  return (
    <div className="flex flex-row">
    <section className="">
      <p>Estadisticas en Github</p>
      <Image
        className=""
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=JavierSantoyo89&theme=buefy&layout=compact"
        alt="Ni idea"
        height={sizeStadistics}
        width={sizeStadistics}
      ></Image>
      
  <Image
    className=""
    src="https://github-readme-stats.vercel.app/api?username=JavierSantoyo89&theme=buefy&show_icons=true"
    alt="Ni idea"
    height={sizeStadistics}
    width={sizeStadistics}
  ></Image> 
    </section>
  
  </div>
  )
}

export default Statistics