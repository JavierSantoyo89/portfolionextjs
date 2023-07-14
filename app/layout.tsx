// import './globals.css'
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
const inter = Inter({ subsets: ["latin"] })

//*  ------------------------ Seccion de metadata en la vista general para los buscadores ------------------------
export const metadata: Metadata = {
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  title: "Javier Santoyo developer",
  description: "Portafolio profesional de Javier Santoyo",
  generator: "Next.js",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "portafolio web",
    "desarrollo web",
    "desarrollador web",
    "frontend",
    "backend",
  ],
  authors: [
    {
      name: "Javier Santoyo",
      url: "https://www.linkedin.com/in/javiersantoyor/",
    },
  ],
  colorScheme: "dark",
  creator: "Javier Santoyo",
}
//* ===============================================================================================================

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
