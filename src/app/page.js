"use client"

import { IPOTable } from "@/components/ipo-table"
import { RecentPosts } from "@/components/recent-posts"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const mainboardData = [
  {
    name: "Sanathan Textiles",
    openDate: "19-Dec-2024",
    closeDate: "23-Dec-2024",
    price: "321 Rs",
    status: "active"
  },
  {
    name: "Mamata Machinery",
    openDate: "19-Dec-2024",
    closeDate: "23-Dec-2024",
    price: "243 Rs",
    status: "active"
  },
  {
    name: "DAM Capital Advisors",
    openDate: "19-Dec-2024",
    closeDate: "23-Dec-2024",
    price: "283 Rs",
    status: "active"
  },
  {
    name: "Transrail Lighting",
    openDate: "19-Dec-2024",
    closeDate: "23-Dec-2024",
    price: "432 Rs",
    status: "active"
  },
  {
    name: "International Gemmological",
    openDate: "19-Dec-2024",
    closeDate: "23-Dec-2024",
    price: "417 Rs",
    status: "active"
  }
]

const smeData = [
  {
    name: "Yash Highvoltage",
    openDate: "12-Dec-2024",
    closeDate: "16-Dec-2024",
    price: "146 Rs",
    status: "active"
  },
  {
    name: "Purple United Sales",
    openDate: "11-Dec-2024",
    closeDate: "13-Dec-2024",
    price: "126 Rs",
    status: "active"
  },
  {
    name: "Supreme Facility",
    openDate: "11-Dec-2024",
    closeDate: "13-Dec-2024",
    price: "76 Rs",
    status: "active"
  },
  {
    name: "Jungle Camps India",
    openDate: "10-Dec-2024",
    closeDate: "12-Dec-2024",
    price: "72 Rs",
    status: "active"
  },
  {
    name: "Toss The Coin",
    openDate: "10-Dec-2024",
    closeDate: "12-Dec-2024",
    price: "182 Rs",
    status: "active"
  }
]

const recentPosts = [
  {
    title: "Senores Pharmaceuticals IPO Date, Price, GMP, Review, Details",
    href: "#"
  },
  {
    title: "Concord Enviro IPO Date, Price, GMP, Review, Details",
    href: "#"
  },
  {
    title: "Sanathan Textiles IPO Date, Price, GMP, Review, Details",
    href: "#"
  },
  {
    title: "Mamata Machinery IPO Date, Price, GMP, Review, Details",
    href: "#"
  },
  {
    title: "Identical Brains Studios IPO Date, GMP, Review, Price, Details",
    href: "#"
  }
]

export default function Home() {

  const router = useRouter()

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-medium">
        Upcoming IPOs 2024, Latest SME IPOs, IPO Allotment Status
      </h1>
      
      <div className="flex md:flex-row flex-col w-full justify-center space-y-4 md:space-y-0 md:space-x-3">
        <div className="space-y-4 w-full md:w-1/2 border p-2">
          <IPOTable title="Upcoming Mainboard IPO 2024" data={mainboardData} />
          <div className="text-center">
            <Button onClick={() => {router.push('/upcoming-ipo')}} variant="default" className="bg-brand-primary rounded-none">
              Read...
            </Button>
          </div>
        </div>

        <div className="space-y-4 w-full md:w-1/2 border p-2">
          <IPOTable title="Upcoming SME IPO 2024" data={smeData} />
          <div className="text-center">
            <Button onClick={() => {router.push('/sme-ipo')}} variant="default" className="bg-brand-primary rounded-none">
              Read...
            </Button>
          </div>
        </div>
      </div>
      <div>
        <RecentPosts posts={recentPosts} />
      </div>
    </div>
  )
}

