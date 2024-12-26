import Image from "next/image"
import Link from "next/link"

export function Header() {
  const navItems = [
    {label:"Home", href:"/"},
    {label:"IPO GMP",href:"/ipo-gmp"},
    {label:"Upcoming IPO",href:"/upcoming-ipo"},
    {label:"SME IPO",href:"/sme-ipo"},
    {label:"IPO Subscription Status",href:"/subscription-status"},
    {label:"IPO Allotment Status",href:"/allotment-status"},
    {label:"IPO Forms",href:"/ipo-forms"},
    {label:"IPO Listing Analysis",href:"/ipo-listing-analysis"},
    {label:"Buyback",href:"/buyback"},
    {label:"Join WhatsApp Channel",href:"#"},
  ]

  return (
    <header className="w-full my-4">
      <div className="w-full flex justify-center md:justify-start  pr-4 pt-2">
        <Image src="/logo1.jpeg" alt="IPO Wala" width={500} height={300} />
      </div>
      <nav className="w-full bg-[#2B547E] text-white">
        <div className="w-full">
          <ul className="w-full flex flex-col md:flex-row flex-wrap">
            {navItems.map((item) => (
              <li className="border md:border-r" key={item.label}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 hover:bg-white hover:text-black transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

