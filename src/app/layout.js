import { Inter,Roboto_Condensed } from 'next/font/google'
import "./globals.css"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"
import { PopupProvider } from '@/context/PopupContext'

const inter = Inter({ subsets: ["latin"] })
const roboto = Roboto_Condensed({ subsets: ["latin"] })

export const metadata = {
  title: "IPO Waala - IPO Information Portal",
  description: "Latest IPO Information, GMP, SME IPO, and IPO Status",
}

export default function RootLayout({children,}) {
  return (
    <html lang="en" >
      <body className={`${roboto.className}`}>
        <PopupProvider>
          <div className="max-w-[1400px] bg-white mx-auto pb-6">
            <Header />
            <div className="grid  grid-cols-1 md:grid-cols-[1fr_300px] px-4 gap-6">
              <div className="border border-black p-4">{children}</div>
              <Sidebar />
            </div>
          </div>
        </PopupProvider>
        <Footer />
      </body>
    </html>
  )
}

