"use client"

import { IPOTable } from "@/components/ipo-table"
import { RecentPosts } from "@/components/recent-posts"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
// import { getMainboardIPOs } from "@/data/IPOs_on_BSE_Main_Board"
import getSmeIPOs from "../data/IPOs_on_BSE_SME_Segment.json"
import mainboardIPOs from "../data/IPOs_on_BSE_Main_Board.json"

// Transform mainboard data
const mainboardData = mainboardIPOs
  .map(ipo => ({
    companyName: ipo.CompanyName,
    issueStartDate: new Date(ipo.ListedOn).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }),
    issueEndDate: "Coming Soon",
    issuePrice: `${ipo.IssuePrice} Rs`,
    
  }))
  

// Transform SME data without date filtering
const smeIPOsData = getSmeIPOs.Table
  .map(ipo => ({
    companyName: ipo.CompanyName,
    issueStartDate: "Coming Soon", // Since we don't have actual IPO dates
    issueEndDate: "Coming Soon",
    issuePrice: `${ipo.IssuePrice} Rs`,
    // status: "Forthcoming"
  }))
  .slice(0, 5); // Take only first 5 IPOs

console.log('SME IPOs:', smeIPOsData); // For debugging

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
          <IPOTable title="Upcoming SME IPO 2024" data={smeIPOsData} />
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

