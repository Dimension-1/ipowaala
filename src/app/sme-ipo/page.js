import { IPOTable } from "@/components/ipo-table"
import { FAQSection } from "@/components/faq-section"
import { smeIpoFaqs } from "@/data/sme-ipo-faqs"

const smeIPOData = [
  {
    name: "Newmalayalam Steel",
    openDate: "19-December-2024",
    closeDate: "23-December-2024",
    price: "90 Rs",
    platform: "NSE",
    status: "active"
  },
  {
    name: "Identical Brains Studios",
    openDate: "18-December-2024",
    closeDate: "20-December-2024",
    price: "54 Rs",
    platform: "NSE",
    status: "active"
  },
  {
    name: "NACDAC Infrastructure",
    openDate: "17-December-2024",
    closeDate: "19-December-2024",
    price: "35 Rs",
    platform: "BSE",
    status: "active"
  },
  {
    name: "Hamps Bio",
    openDate: "15-December-2024",
    closeDate: "17-December-2024",
    price: "51 Rs",
    platform: "BSE",
    status: "active"
  },
  {
    name: "Yash Highvoltage",
    openDate: "12-December-2024",
    closeDate: "16-December-2024",
    price: "136-146 Rs",
    platform: "BSE",
    status: "upcoming"
  }
]

export default function SMEIPOPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Upcoming SME IPO, SME IPO Calendar 2024 NSE & BSE</h1>
      
      <div className="prose max-w-none">
        <p>
          The <strong>Freshara Agro Exports, Premium Plant, Lakshya Powertech, Danish Power, OBSC Perfection</strong> SME IPOs coming this week.
        </p>
      </div>

      <IPOTable
        title="List of Upcoming SME IPO 2024"
        data={smeIPOData}
        showPlatform={true}
      />
      
      <FAQSection faqs={smeIpoFaqs} />
    </div>
  )
}

