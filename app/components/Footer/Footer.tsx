import Image from "next/image"
import Link from "next/link"
import linkedin from "../../../public/Socials/linkedin.svg"
import github from "../../../public/Socials/github.svg"
import twitter from "../../../public/Socials/twitter.svg"

export default function Footer() {
  return (
    <footer className="w-screen h-auto bg-white absolute bottom-0 ">
      <div className="px-1 py-1 mx-auto overflow-hidden sm:px-6 lg:px-8">
        <div className="flex justify-center mt-3 space-x-6">
          <span className="inline-flex justify-center w-full gap-3 m-auto md:justify-start md:w-auto">
            <Link
              href={"https://www.linkedin.com/in/javiersantoyor/"}
              className="w-6 h-6 transition fill-black hover:text-blue-500"
            >
              <Image
                src={linkedin}
                alt="LinkedIn logo"
                className="w-5 h-5 md hydrated"
                role="img"
                aria-label="logo linkedin"
              ></Image>
            </Link>

            <Link
              href={"https://github.com/JavierSantoyo89"}
              className="w-6 h-6 transition fill-black hover:text-blue-500"
            >
              {" "}
              <Image
                src={github}
                alt="Github logo"
                className="w-5 h-5 md hydrated"
                role="img"
                aria-label="logo github"
              ></Image>
            </Link>

            <Link
              href={"https://twitter.com/FcoSantoyoRios"}
              className="w-6 h-6 transition fill-black hover:text-blue-500"
            >
              <Image
                src={twitter}
                alt="Twitter logo"
                className="w-5 h-5 md hydrated"
                role="img"
                aria-label="logo twitter"
              ></Image>
            </Link>
          </span>
        </div>
        <div className="mt-1 text-center">
          <p className="mx-auto mt-0 text-sm text-gray-500">Copyright © 2023</p>
        </div>
      </div>
    </footer>
  )
}
