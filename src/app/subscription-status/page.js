import { FAQSection } from "@/components/faq-section"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { subscriptionFaqs } from "@/data/subscription-faqs"

const subscriptionData = [
  {
    name: "Carraro India",
    qib: "2.5x",
    hni: "3.2x",
    retail: "1.8x",
    total: "2.5x",
  },
  {
    name: "Senores Pharmaceuticals",
    qib: "4.1x",
    hni: "5.6x",
    retail: "2.3x",
    total: "4.0x",
  },
]

export default function SubscriptionStatusPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">IPO Subscription Status</h1>
      <div className="rounded border">
        <h2 className="text-xl text-center font-bold p-3">Current IPO Subscription Status</h2>
        <Table>
          <TableHeader>
            <TableRow className="bg-brand-primary hover:bg-brand-primary text-white">
              <TableHead className="text-center text-white border-r">IPO Name</TableHead>
              <TableHead className="text-center text-white border-r">QIB</TableHead>
              <TableHead className="text-center text-white border-r">HNI</TableHead>
              <TableHead className="text-center text-white border-r">Retail</TableHead>
              <TableHead className="text-center text-white">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subscriptionData.map((item, index) => (
              <TableRow
                key={item.name}
                className={index % 2 === 0 ? "bg-[#E8F5E9]" : "bg-white"}
              >
                <TableCell className="font-medium text-blue-800 text-base text-center border-r">
                  {item.name}
                </TableCell>
                <TableCell className="text-center border-r">{item.qib}</TableCell>
                <TableCell className="text-center border-r">{item.hni}</TableCell>
                <TableCell className="text-center border-r">{item.retail}</TableCell>
                <TableCell className="text-center">{item.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        <FAQSection faqs={subscriptionFaqs} />

      </div>
    </div>
  )
}

