"use client"
import { IPOTable } from "@/components/ipo-table"
import { FAQSection } from "@/components/faq-section"
import { smeIpoFaqs } from "@/data/sme-ipo-faqs"
import getSmeIPOs from "../../data/IPOs_on_BSE_SME_Segment.json"

// Transform all SME data
const smeIPOData = getSmeIPOs.Table.map(ipo => ({
  companyName: ipo.CompanyName,
  issueStartDate: new Date(ipo.ListedOn).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }),
  issueEndDate: new Date(new Date(ipo.ListedOn).setDate(new Date(ipo.ListedOn).getDate() - 2))
    .toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }),
  issuePrice: `${ipo.IssuePrice} Rs`,
  platform: "BSE",
  status: "upcoming"
}));

export default function SMEIPOPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Upcoming SME IPO, SME IPO Calendar 2024 NSE & BSE</h1>
      
      <div className="prose max-w-none">
        <p>
          Complete list of BSE SME IPOs for 2024.
        </p>
      </div>

      <IPOTable
        title="List of BSE SME IPOs 2024"
        data={smeIPOData}
        showPlatform={true}
      />
      
      <FAQSection faqs={smeIpoFaqs} />
    </div>
  )
}

