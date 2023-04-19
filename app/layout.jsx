import "./globals.css"
import Nav from "./auth/Nav"
import { Poppins } from 'next/font/google'
import QueryWrapper from "./auth/QueryWrapper"
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className={`mx-4 md:mx-48 xl:mx-96 ${poppins.variable} font-sans bg-gray-200`}
      >
        <QueryWrapper>
          <Nav />
          {children}
        </QueryWrapper>
      </body>
    </html>
  )
}
