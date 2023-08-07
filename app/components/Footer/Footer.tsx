import Link from "next/link"
import { GithubIcon, LinkendinIcon, TwitterIcon } from "../index"

export default function Footer() {
  return (
    //? En el <footer> le asignas el color de la letra y SVG's para light y dark

    <footer className=" bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
      <div className="flex justify-center mt-1 space-x-6  ">
        <span className="inline-flex justify-center w-full gap-3 m-1 md:justify-start md:w-auto">
          <Link
            href={"https://www.linkedin.com/in/javiersantoyor/"}
            className="w-6 h-6 transition fill-black hover:text-blue-500  "
          >
            <LinkendinIcon width={30} height={30} />
          </Link>

          {/* <Link
            href={"https://github.com/JavierSantoyo89"}
            className="w-6 h-6 transition fill-black hover:text-blue-500"
          >
            
          </Link>  */}

          <Link
            href={"https://twitter.com/FcoSantoyoRios"}
            className="w-6 h-6 transition fill-black hover:text-blue-500 "
          >
            <TwitterIcon width={30} height={30} />
          </Link>
        </span>
      </div>
      <div className="p-1 text-center text-neutral-700 dark:text-neutral-200">
        Copyright © 2023
      </div>
    </footer>
  )
}
