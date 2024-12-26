import Link from "next/link"

const pages = [
  { title: "Advertise With Us", href: "#" },
  { title: "Contact Us", href: "#" },
  { title: "Disclaimer", href: "#" },
  { title: "Download IPO Application ASBA IPO Forms Online from NSE & BSE", href: "/ipo-forms" },
  { title: "IPO Allotment Status", href: "/allotment-status" },
  { title: "IPO Anchor Investor List – Live from BSE and NSE 2024", href: "#" },
  { title: "IPO Performance Analysis 2024 – IPO Listing Details NSE – BSE", href: "/ipo-listing-analysis" },
  { title: "IPO Prospectus PDF – Draft and Red Herring Prospectus India", href: "#" },
  { title: "IPO Subscription Status – Live from BSE and NSE 2024", href: "/subscription-status" },
  { title: "Upcoming Buyback 2024 | Buyback 2024 NSE, BSE", href: "/buyback" },
  { title: "Upcoming IPOs 2024 | Latest, Recent & New IPO in 2024", href: "/upcoming-ipo" },
  { title: "Upcoming SME IPO, SME IPO Calendar 2024 NSE & BSE", href: "/sme-ipo" },
]

const categories= [
  { title: "Angel broking", href: "#", count: 2 },
  { title: "bonus", href: "#", count: 3 },
  { title: "Diwali Muhurat Trading", href: "#", count: 3 },
  { title: "General", href: "#", count: 94 },
  { title: "Gold Bonds", href: "#", count: 2 },
  { title: "Groww", href: "#", count: 2 },
  { title: "Holidays", href: "#", count: 2 },
  { title: "IPO Allotment status", href: "#", count: 403 },
  { title: "IPO Anchor Investor List", href: "#", count: 50 },
  { title: "IPO GMP", href: "#", count: 211 },
  { title: "IPO Listing", href: "#", count: 49 },
  { title: "IPO Registrars", href: "#", count: 3 },
  { title: "IPO Subscription Status", href: "#", count: 301 },
  { title: "NCD Bonds", href: "#", count: 21 },
  { title: "Offer for sale", href: "#", count: 16 },
  { title: "Rights issue", href: "#", count: 44 },
  { title: "Share buyback", href: "#", count: 98 },
  { title: "SME IPO", href: "#", count: 553 },
  { title: "Stock broker", href: "#", count: 16 },
  { title: "Stock market tutorial", href: "#", count: 1 },
  { title: "Upcoming IPO", href: "#", count: 270 },
  { title: "Upstox", href: "#", count: 4 },
  { title: "Zerodha", href: "#", count: 10 },
]

export function Footer() {
  return (
    <>
    <footer className="max-w-[1400px] bg-white mx-auto border-t my-2">
      <div className="mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Pages Section  */}
          <div className="border rounded max-h-fit">
            <h2 className="bg-brand-primary text-white text-lg p-2">Pages</h2>
            <ul className="px-2">
              {pages.map((link) => (
                <div key={link.title}>
                  <li  className="my-[3px]">
                    <Link href={link.href} className="text-[#2B547E] text-[15px] hover:text-blue-500">
                      {link.title}
                    </Link>
                    
                  </li>
                  <hr />
                </div>
              ))}
            </ul>
          </div>
          
          {/* Discalimer Section */}
          <div>
            <div className="bg-red-50 border border-red-100 p-4 rounded">
              <strong className="text-red-600 text-sm">Disclaimer</strong> — All the information on the website is for informational purposes only. Please contact your Financial adviser before making an investment.
            </div>
          </div>
          
          {/* Category Section */}
          <div className="border rounded max-h-fit">
            <h2 className="bg-brand-primary text-lg text-white p-2">Categories</h2>
            <ul className="px-2">
              {categories.map((category) => (
                <div key={category.title}>
                  <li className="my-[3px]">
                    <Link href={category.href} className="text-[#2B547E] text-[15px] hover:text-blue-500">
                      {category.title} ({category.count})
                    </Link>
                  </li>
                  <hr />
                </div>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </footer>
    </>
  )
}

