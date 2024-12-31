import { FAQSection } from "@/components/faq-section"
import { IPOFormsTable } from "@/components/ipo-forms-table"
import { ipoFormsFaqs } from "@/data/ipo-forms-faqs"

const formsData = [
  {
    name: "Carraro India",
    date: "20-24 Dec",
    nseLink: "#",
    bseLink: "#"
  },
  {
    name: "Senores Pharmaceuticals",
    date: "20-24 Dec",
    nseLink: "#",
    bseLink: "#"
  },
  {
    name: "Ventive Hospitality",
    date: "20-24 Dec",
    nseLink: "#",
    bseLink: "#"
  },
  {
    name: "Transrail Lighting",
    date: "19-23 Dec",
    nseLink: "#",
    bseLink: "#"
  },
  {
    name: "DAM Capital Advisors",
    date: "19-23 Dec",
    nseLink: "#",
    bseLink: "#"
  },
  {
    name: "Mamata Machinery",
    date: "19-23 Dec",
    nseLink: "#",
    bseLink: "#"
  }
]

export default function IPOFormsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        Download IPO Application ASBA IPO Forms Online from NSE & BSE
      </h1>
      
      <div className="prose max-w-none">
        <p>
          Here, The user can download the <span className="bg-yellow-100">IPO Application form</span>. Generally, There are two ways to <span className="bg-yellow-100">download ipo form</span>
        </p>
        <ol>
          <li>Download the IPO Form online from NSE Website or</li>
          <li>Download the IPO Form online from BSE Website.</li>
        </ol>
        <p>We have shared both ways here kindly check Download IPO Form FAQ.</p>
        <p className="text-red-500">* Users can fill IPO Forms and give it directly to the banks.</p>
      </div>

      <IPOFormsTable
        title="IPO Forms Download NSE- BSE"
        data={formsData}
      />

      <FAQSection faqs={ipoFormsFaqs} />

    </div>
  )
}

