import { FAQSection } from "@/components/faq-section"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { buybackFaqs } from "@/data/buyback-faqs"
import Link from "next/link"

const upcomingBuybacks = [
  {
    company: "Matrimony.com",
    price: "1025 Rs",
    startDate: "2024",
    endDate: "2024",
  },
]

const pastBuybacks = [
  {
    company: "Insecticides (India)",
    price: "1000 Rs",
    startDate: "17-Sep-2024",
    endDate: "24-Sep-2024",
  },
  {
    company: "Suprajit Engineering",
    price: "750 Rs",
    startDate: "02-Sep-2024",
    endDate: "06-Sep-2024",
  },
  // Add more past buybacks...
]

export default function BuybackPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Upcoming Buyback 2024 | Buyback 2024 NSE, BSE</h1>
      
      <div className="prose max-w-none">
        <p>
          A buyback is a corporate action where a company offers to buy back its shares from the existing shareholders usually at a higher price than the market price.{" "}
          <Link href="#" className="text-brand-primary hover:underline">
            Click here
          </Link>{" "}
          to learn more about a buy-back.
        </p>

        <h2 className="text-xl font-semibold mt-6">Types of Buyback</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">1) Open Market Buyback:</h3>
            <p>
              The Open market buyback is the process where a company buys back its share from the open market or current market NSE-BSE Stock exchange.
            </p>
            <p className="italic">
              Example: The Infosys share price is ₹ 1450 and they had announced a share buyback through the open market route The buyback size is ₹ 9300 Crore and a maximum offer price of ₹ 1,850 means they will buy shares worth of ₹ 9300 Crores from open market.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">2) Tender Offer Buyback:</h3>
            <p>
              The Company sends emails to eligible shareholders for tendering shares from fixed or higher prices.
            </p>
            <p className="italic">
              Example: The Wipro share's current price is 380 Rs, The Wipro management has fixed a buyback price of 450 Rs and decided on one record date, which means having shares on that date are eligible shareholders and they will be eligible for applying buyback during buyback period.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl text-center font-semibold">Upcoming & Live Buyback 2024</h2>
        <Table className="border">
          <TableHeader>
            <TableRow className="bg-brand-primary hover:bg-brand-primary ">
              <TableHead className="text-white text-center border-r border-gray-50">Company</TableHead>
              <TableHead className="text-white text-center border-r border-gray-50">Price</TableHead>
              <TableHead className="text-white text-center border-r border-gray-50">Start Date</TableHead>
              <TableHead className="text-white text-center">End Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {upcomingBuybacks.map((buyback, index) => (
              <TableRow
                key={buyback.company}
                className={index % 2 === 0 ? "bg-[hsl(var(--table-row-even))] text-base" : "text-base"}
              >
                <TableCell className="font-medium text-[hsl(var(--table-link))] text-center border-r border-gray-200">
                  {buyback.company}
                </TableCell>
                <TableCell className="text-center border-r border-gray-200">{buyback.price}</TableCell>
                <TableCell className="text-center border-r border-gray-200">{buyback.startDate}</TableCell>
                <TableCell className="text-center">{buyback.endDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <h2 className="text-xl text-center font-semibold">Past Buyback</h2>
        <Table className="border">
          <TableHeader>
            <TableRow className="bg-brand-primary hover:bg-brand-primary ">
              <TableHead className="text-white text-center border-r border-gray-50">Price</TableHead>
              <TableHead className="text-white text-center border-r border-gray-50">Company</TableHead>
              <TableHead className="text-white text-center border-r border-gray-50">Start Date</TableHead>
              <TableHead className="text-white text-center ">End Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pastBuybacks.map((buyback, index) => (
              <TableRow
                key={buyback.company}
                className={index % 2 === 0 ? "bg-[hsl(var(--table-row-even))]" : ""}
              >
                <TableCell className="font-medium text-center text-base border-r border-gray-200 text-[hsl(var(--table-link))]">
                  {buyback.company}
                </TableCell>
                <TableCell className="text-center text-base border-r border-gray-200">{buyback.price}</TableCell>
                <TableCell className="text-center text-base border-r border-gray-200">{buyback.startDate}</TableCell>
                <TableCell className="text-center text-base ">{buyback.endDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <FAQSection faqs={buybackFaqs} />

      </div>
    </div>
  )
}

