import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


export function Sidebar() {
  const categories = [
    "IPO Anchor Investor",
    "IPO Prospectus",
    "NCD Issue",
    "Right Issue",
    "Sovereign Gold Bonds",
  ]

  const mainlineIPOs = [
    { name: "Indo Farm Equipment", date: "31-Dec-02 Jan", isNew: true },
    { name: "Unimech Aerospace", date: "23-26 Dec" },
    { name: "Carraro India", date: "20-24 Dec" },
    { name: "Senores Pharmaceuticals", date: "20-24 Dec" },
    { name: "Ventive Hospitality", date: "20-24 Dec" },
    { name: "Transrail Lighting", date: "19-23 Dec" },
  ]

  const smeIPOs = [
    { name: "Citichemi India", date: "27-31 Dec", isNew: true },
    { name: "Arya Polytech", date: "26-30 Dec", isNew: true },
    { name: "Newmalayalam Steel", date: "19-23 Dec" },
    { name: "Identical Brains Studios", date: "18-20 Dec" },
    { name: "NACDAC Infrastructure", date: "17-19 Dec" },
    { name: "Hamps Bio", date: "13-17 Dec" },
  ]

  const latestPosts = [
    "Citichemi India IPO Date, GMP, Review, Price, Details",
    "Arya Polytech & Fertilizers IPO Date, GMP Review, Price, Details",
    "Unimech Aerospace IPO Date, Price, GMP, Review, Details",
    "Ventive Hospitality IPO Date, Price, GMP, Review, Details",
    "Carraro India IPO Date, Price, GMP, Review, Details",
    "Senores Pharmaceuticals IPO Date, Price, GMP, Review, Details",
    "Concord Enviro IPO Date, Price, GMP Review, Details",
    "Sanathan Textiles IPO Date, Price, GMP Review, Details",
  ]

  return (
    <div className="space-y-6">
      {/* Search Box */}
      <div className="p-4 border rounded">
        <Input type="search" placeholder="Search..." className="mb-2" />
        <Button className="w-full bg-[#2B547E]">Search</Button>
      </div>

      {/* Categories */}
      <div className="border rounded">
        <h2 className="bg-[#2B547E] text-white p-3">Categories</h2>
        <ul className="p-4 space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <Link
                href="#"
                className="text-blue-800 hover:underline block"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mainline IPO */}
      <div className="border rounded">
        <h2 className="bg-[#2B547E] text-white p-3">Mainline IPO</h2>
        <ul className="p-4 space-y-2">
          {mainlineIPOs.map((ipo) => (
            <li key={ipo.name}>
              <Link href="#" className="text-blue-800 hover:underline block">
                {ipo.name}
                {ipo.date && (
                  <span className="text-red-500 ml-2">
                    ( {ipo.date} )
                  </span>
                )}
                {ipo.isNew && (
                  <span className="ml-2 text-xs bg-red-500 text-white px-1 rounded">
                    New
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
        <div className="px-4 pb-4">
          <Link href="#" className="text-red-500 hover:underline">
            More IPOs...
          </Link>
        </div>
      </div>

      {/* SME IPO */}
      <div className="border rounded">
        <h2 className="bg-[#2B547E] text-white p-3">SME IPO</h2>
        <ul className="p-4 space-y-2">
          {smeIPOs.map((ipo) => (
            <li key={ipo.name}>
              <Link href="#" className="text-blue-800 hover:underline block">
                {ipo.name}
                {ipo.date && (
                  <span className="text-red-500 ml-2">
                    ( {ipo.date} )
                  </span>
                )}
                {ipo.isNew && (
                  <span className="ml-2 text-xs bg-red-500 text-white px-1 rounded">
                    New
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
        <div className="px-4 pb-4">
          <Link href="#" className="text-red-500 hover:underline">
            More IPOs...
          </Link>
        </div>
      </div>

      {/* Latest Posts */}
      <div className="border rounded">
        <h2 className="bg-[#2B547E] text-white p-3">Latest Post</h2>
        <ul className="p-4 space-y-2">
          {latestPosts.map((post) => (
            <li key={post}>
              <Link
                href="#"
                className="text-blue-800 hover:underline block text-sm"
              >
                {post}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
