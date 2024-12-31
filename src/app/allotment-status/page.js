import { AllotmentTable } from "@/components/allotment-table"
import { FAQSection } from "@/components/faq-section"
import { allotmentFaqs } from "@/data/allotment-faqs"

const allotmentData = [
  {
    name: "NACDAC Infrastructure",
    tag: "SME",
    date: "20-December-2024",
    statusLink: {
      text: "Maashitla Allotment Status",
      href: "#"
    }
  },
  {
    name: "Identical Brains Studios",
    tag: "SME",
    date: "23-December-2024",
    statusLink: {
      text: "Bigshareonline Allotment Status",
      href: "#"
    }
  },
  {
    name: "International Gemological",
    tag: "OUT",
    date: "18-December-2024",
    statusLink: {
      text: "Kfintech Allotment Status",
      href: "#"
    }
  },
  {
    name: "Hamps Bio",
    tag: "OUT" ,
    date: "18-December-2024",
    statusLink: {
      text: "Bigshareonline Allotment Status",
      href: "#"
    }
  },
  {
    name: "Inventurus Knowledge",
    tag: "OUT",
    date: "17-December-2024",
    statusLink: {
      text: "Linkintime Allotment Status",
      href: "#"
    }
  }
]

export default function AllotmentStatusPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        IPO Allotment Status | Check IPO Allotment Status Online | Allotment Link
      </h1>
      
      <div className="prose max-w-none">
        <p>
          <strong>IPO Allotment Status</strong> – Check the latest IPO Allotment Status of Agarwal Toughened Glass IPO Allotment, Ganesh Infraworld SME IPO Allotment,Suraksha Diagnostic IPO Allotment.
        </p>
        <p>
          These IPOs' subscriptions have live, and the allotment may be coming soon. Keep an eye out for the latest IPO allotment news.
        </p>
      </div>

      <AllotmentTable
        title="Check Past IPO Allotment Status 2024"
        data={allotmentData}
      />

      <FAQSection faqs={allotmentFaqs} />

    </div>
  )
}

