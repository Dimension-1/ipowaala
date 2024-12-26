import { Inter } from "next/font/google"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const inter = Inter({ subsets: ["latin"] })

export function IPOTable({ title, data, showPlatform = false }) {
  return (
    <div className={`rounded border w-full`}>
      <h2 className="p-3 text-center text-xl font-semibold">
        {title}
      </h2>
      <Table>
        <TableHeader>
          <TableRow className="bg-brand-primary hover:bg-brand-primary">
            <TableHead className="text-white border-r">IPO Name</TableHead>
            <TableHead className="text-white border-r text-center">Open Date</TableHead>
            <TableHead className="text-white border-r text-center">Close Date</TableHead>
            <TableHead className="text-white text-center border-r">Price</TableHead>
            {showPlatform && <TableHead className="text-white text-center">Platform</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((ipo, index) => (
            <TableRow
              key={ipo.name}
              className={
                ipo.status === "active" 
                  ? "bg-green-200" 
                  : index % 2 === 0 
                  ? "bg-[#f8fafc]" 
                  : "bg-white"
              }
            >
              <TableCell className="font-medium text-base text-[hsl(var(--table-link))] border-r border-gray-400">
                {ipo.name}
              </TableCell>
              <TableCell className="text-center border-r border-gray-400">{ipo.openDate}</TableCell>
              <TableCell className="text-center border-r border-gray-400">{ipo.closeDate}</TableCell>
              <TableCell className="text-center border-r border-gray-400">{ipo.price}</TableCell>
              {showPlatform && (
                <TableCell className="text-center">{ipo.platform}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}