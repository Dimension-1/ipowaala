"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

const mainboardData = [
  {
    name: "Vishal Mega Mart",
    listingDate: "Dec 18, 2024",
    issuePrice: "78",
    listingPrice: "104.00",
    gainLoss: "33.33",
  },
  {
    name: "Mobikwik",
    listingDate: "Dec 18, 2024",
    issuePrice: "279",
    listingPrice: "440",
    gainLoss: "57.71",
  },
  {
    name: "Suraksha Diagnostic",
    listingDate: "Dec 06, 2024",
    issuePrice: "441",
    listingPrice: "437",
    gainLoss: "-0.90",
  },
  // Add more data...
]

const smeData = [
  // Add SME IPO data here
]

export default function IPOListingAnalysisPage() {
  const [activeTab, setActiveTab] = useState("mainboard")

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        IPO Performance Analysis 2024 – IPO Listing Details NSE – BSE
      </h1>

      <div className="prose max-w-none">
        <p>
          Find here Mainboard and SME IPO Listing Performance Data taken from NSE BSE 2024 that data can be helpful for many purpose. The IPO performance statics of data is useful for analysis purposes.
        </p>
        <p>
          There are four columns in the below table like IPO Name, IPO Price, IPO Opening Price and IPO Listing Gain. It is easy to understand data. We have provided two tabs 1) Mainboard IPO Performance data 2) SME IPO Performance Data. You can filter data as per the your need and that may useful for analysis future IPO forecasting.
        </p>
      </div>

      <Tabs defaultValue="mainboard" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-[400px]">
          <TabsTrigger value="mainboard">Main IPO Performance</TabsTrigger>
          <TabsTrigger value="sme">SME IPO Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="mainboard">
          <Table>
            <TableHeader>
              <TableRow className="bg-brand-primary hover:bg-brand-primary">
                <TableHead className="text-white">IPO Name</TableHead>
                <TableHead className="text-white border-l">Listing Date</TableHead>
                <TableHead className="text-white border-l">Issue Price</TableHead>
                <TableHead className="text-white border-l">Listing Price</TableHead>
                <TableHead className="text-white border-l">Gain/Loss %</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mainboardData.map((ipo, index) => (
                <TableRow
                  key={ipo.name}
                  className={cn(
                    index % 2 === 0 ? "bg-[hsl(var(--table-row-even))]" : "",
                    parseFloat(ipo.gainLoss) < 0 ? "bg-negative" : ""
                  )}
                >
                  <TableCell className="font-medium text-base text-[hsl(var(--table-link))]">
                    {ipo.name}
                  </TableCell>
                  <TableCell className="border-l">{ipo.listingDate}</TableCell>
                  <TableCell className="border-l">{ipo.issuePrice}</TableCell>
                  <TableCell className="border-l">{ipo.listingPrice}</TableCell>
                  <TableCell className="border-l">{ipo.gainLoss}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

        <TabsContent value="sme">
          <Table>
            <TableHeader>
              <TableRow className="bg-brand-primary hover:bg-brand-primary">
                <TableHead className="text-white">IPO Name</TableHead>
                <TableHead className="text-white border-l">Listing Date</TableHead>
                <TableHead className="text-white border-l">Issue Price</TableHead>
                <TableHead className="text-white border-l">Listing Price</TableHead>
                <TableHead className="text-white border-l">Gain/Loss %</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {smeData.map((ipo, index) => (
                <TableRow
                  key={ipo.name}
                  className={cn(
                    index % 2 === 0 ? "bg-[hsl(var(--table-row-even))]" : "",
                    parseFloat(ipo.gainLoss) < 0 ? "bg-negative" : ""
                  )}
                >
                  <TableCell className="font-medium text-base text-[hsl(var(--table-link))]">
                    {ipo.name}
                  </TableCell>
                  <TableCell className="boreder-l">{ipo.listingDate}</TableCell>
                  <TableCell className="boreder-l">{ipo.issuePrice}</TableCell>
                  <TableCell className="boreder-l">{ipo.listingPrice}</TableCell>
                  <TableCell className="boreder-l">{ipo.gainLoss}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

      </Tabs>
    </div>
  )
}

