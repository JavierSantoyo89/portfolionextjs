import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "./components/head/head";
import Footer from "./components/Footer/Footer";
import { Providers } from "./providers";
import { Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Javier Santoyo",
  description: "Portafolio personal de javier Santoyo",
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
  // colorScheme: "dark",
  creator: "Javier Santoyo",
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 6,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Providers>
          <Head />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
