import Image from "next/image"
import Link from "next/link"
import linkedin from "../../../public/Socials/linkedin.svg"
import github from "../../../public/Socials/github.svg"
import twitter from "../../../public/Socials/twitter.svg"
function Footer() {
  return (
    <footer className="w-screen h-auto bg-white">
      <div className="px-4 py-1 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-center mt-8 space-x-6">
          <span className="inline-flex justify-center w-full gap-3 m-auto md:justify-start md:w-auto">
            <Link
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
            </Link>
            <Link
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
            </Link>
            <Link
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
            </Link>
          </span>
        </div>
        <p className="mt-8 text-center">
          <span className="mx-auto mt-2 text-sm text-gray-500">
            Copyright © 2023
          </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
