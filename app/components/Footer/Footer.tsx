import Link from "next/link"
import { LinkendinIcon, GithubIcon, TwitterIcon } from "../index"

export default function Footer() {
  return (
    //? En el <footer> le asignas el color de la letra y SVG's para light y dark

    <footer className=" bg-neutral-200 dark:bg-neutral-700 
    flex flex-col justify-center overflow-hidden mx-auto ">
 
        <div className="flex flex-row text-center justify-center gap-2">
          <Link
            href={"https://www.linkedin.com/in/javiersantoyor/"}
            className="w-6 h-6 transition fill-black hover:text-blue-500  "
            >
            <LinkendinIcon width={30} height={30} />
          </Link>
          <Link
            href={"https://github.com/JavierSantoyo89"}
            className="w-6 h-6 transition fill-black hover:text-blue-500"
            >
            <GithubIcon width={30} height={30} />
          </Link>
          <Link
            href={"https://twitter.com/FcoSantoyoRios"}
            className="w-6 h-6 transition fill-black hover:text-blue-500 "
            >
            <TwitterIcon width={30} height={30} />
          </Link>
        </div>
      <div className="p-1 text-center text-neutral-700 dark:text-neutral-200">
        Copyright © 2023
      </div>
    </footer>
  )
}
