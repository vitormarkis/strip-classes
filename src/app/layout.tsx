import "./globals.css"
import { Inter, JetBrains_Mono } from "next/font/google"
import clsx from "clsx"
import LayoutProvider from "@/providers/layout/provider"
import { Header } from "@/components/organisms/Header"

const inter = Inter({ subsets: ["latin"] })
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--jetbrains" })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, jetbrains.variable)}>
        <LayoutProvider>
          <Header />
          {children}
          <div id="modal" />
          <div id="toasts" />
        </LayoutProvider>
      </body>
    </html>
  )
}
