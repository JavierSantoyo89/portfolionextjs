import Image from "next/image"
import Link from "next/link"
import linkedin from "../../../public/Socials/linkedin.svg"
import github from "../../../public/Socials/github.svg"
import twitter from "../../../public/Socials/twitter.svg"
function Footer() {
  return (
    <footer className="w-screen h-auto bg-white  ">
      <div className="px- py-1 mx-auto overflow-hidden sm:px-6 lg:px-8">
        <div className="flex justify-center mt-8 space-x-6">
          <span className="inline-flex justify-center w-full gap-3 m-auto md:justify-start md:w-auto">
            <a
              href={"https://www.linkedin.com/in/javiersantoyor/"}
              className="w-6 h-6 transition fill-black hover:text-blue-500"
            >
              <span className="sr-only">LinkedIn</span>
              <Image
                src={linkedin}
                alt="LinkedIn logo"
                className="w-5 h-5 md hydrated"
                role="img"
                aria-label="logo linkedin"
              ></Image>
            </a>
            <a
              href={"https://github.com/JavierSantoyo89"}
              className="w-6 h-6 transition fill-black hover:text-blue-500"
            >
              <span className="sr-only">Github</span>
              <Image
                src={github}
                alt="Github logo"
                className="w-5 h-5 md hydrated"
                role="img"
                aria-label="logo github"
              ></Image>
            </a>
            <a
              href={"https://twitter.com/FcoSantoyoRios"}
              className="w-6 h-6 transition fill-black hover:text-blue-500"
            >
              <span className="sr-only">Twitter</span>
              <Image
                src={twitter}
                alt="Twitter logo"
                className="w-5 h-5 md hydrated"
                role="img"
                aria-label="logo twitter"
              ></Image>
            </a>
          </span>
        </div>
        <p className="mt-1 text-center">
          <span className="mx-auto mt-0 text-sm text-gray-500">
            Copyright © 2023
          </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
