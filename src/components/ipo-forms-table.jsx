import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link"


export function IPOFormsTable({ title, data }) {
  return (
    <div className="rounded border">
      <h2 className="p-3 text-center text-xl font-bold">
        {title}
      </h2>
      <Table>
        <TableHeader>
          <TableRow className="bg-brand-primary hover:bg-brand-primary">
            <TableHead className="text-white w-1/3">IPO</TableHead>
            <TableHead className="text-white w-1/3 border-l">NSE</TableHead>
            <TableHead className="text-white w-1/3 border-l">BSE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow
              key={item.name}
              className={index % 2 === 0 ? "bg-[hsl(var(--table-row-even))]" : ""}
            >
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-medium text-base text-[hsl(var(--table-link))]">{item.name}</span>
                  <span className="text-red-500 text-sm">( {item.date} )</span>
                </div>
              </TableCell>
              <TableCell className="border-l">
                <Link 
                  href={item.nseLink}
                  className="text-[hsl(var(--table-link))] hover:underline"
                >
                  Download
                </Link>
              </TableCell>
              <TableCell className="border-l">
                <Link 
                  href={item.bseLink}
                  className="text-[hsl(var(--table-link))] hover:underline"
                >
                  Download
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

