import Link from "next/link"
import { GMPTable } from "@/components/gmp-table"
import { FAQSection } from "@/components/faq-section"
import { gmpFaqs } from "@/data/gmp-faqs"

const gmpData = [
  {
    name: "Carraro India",
    date: "20-24 Dec",
    gmp: "0",
    price: "704",
    expectedGain: "0.00",
  },
  {
    name: "Senores Pharmaceuticals",
    date: "20-24 Dec",
    gmp: "150",
    price: "391",
    expectedGain: "38.36",
  },
  {
    name: "Ventive Hospitality",
    date: "20-24 Dec",
    gmp: "67",
    price: "643",
    expectedGain: "10.42",
  },
  {
    name: "Concord Enviro Systems",
    date: "19-23 Dec",
    gmp: "70",
    price: "701",
    expectedGain: "9.99",
  },
  {
    name: "Sanathan Textiles",
    date: "19-23 Dec",
    gmp: "70",
    price: "321",
    expectedGain: "21.81",
  },
  {
    name: "Transrail Lighting",
    date: "19-23 Dec",
    gmp: "185",
    price: "432",
    expectedGain: "42.82",
  },
]

const currentIPOs = [
  "Purple United Sales",
  "Vishal Mega Mart",
  "Inventurus Knowledge Solutions",
  "Sai Life Sciences",
  "Mobikwik",
  "Yash Highvoltage",
  "International Gemmological Institute",
]


export default function IPOGMPPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">IPO Grey Market Premium & Live IPO GMP</h1>
      
      <div className="prose max-w-none space-y-4">
        <p>
          <strong>IPO GMP ( IPO Grey Market Premium )</strong> means The estimated IPO Price analysis or price that grey market participants are prepared to pay for an IPO's shares prior to listing.{" "}
          <strong>IPO Grey market premium / IPO GMP</strong> and Kostak rate may change every day.
        </p>

        <p>
          The <strong>GMP</strong> rates are decided in the secondary market in India. Basically,{" "}
          <strong>IPO GMP</strong> fluctuated based on market situation and{" "}
          <Link href="/subscription-status" className="text-brand-primary hover:underline">
            IPO Subscription Status
          </Link>
          .
        </p>

        <p>
          The <strong>IPO Demand</strong> is higher means{" "}
          <strong>IPO listing price</strong> may be open at a higher price.
        </p>

        <p>
          Here you can find <strong>IPO GMP Live Today</strong> of{" "}
          <span className="bg-yellow-100 px-1">
            {currentIPOs.join(", ")}
          </span>{" "}
          IPOs.
        </p>
      </div>

      <GMPTable
        title="Mainline IPO Grey Market Premium Live"
        lastUpdated="Updated as on 20-Dec-2024 | 10:42 AM"
        data={gmpData}
      />

      <FAQSection faqs={gmpFaqs} />
    </div>
  )
}

