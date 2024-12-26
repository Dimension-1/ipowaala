import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link"


export function AllotmentTable({ title, data }) {
  return (
    <div className="rounded border">
      <h2 className="p-3 text-center text-lg font-semibold">
        {title}
      </h2>
      <Table className="">
        <TableHeader>
          <TableRow className="bg-brand-primary hover:bg-brand-primary">
            <TableHead className="text-white w-1/3">Name</TableHead>
            <TableHead className="text-white w-1/3 border-l">IPO Allotment Date</TableHead>
            <TableHead className="text-white w-1/3 border-l">IPO Allotment Status</TableHead>
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
                  {item.tag && (
                    <span className="text-red-500 text-sm">[ {item.tag} ]</span>
                  )}
                </div>
              </TableCell>
              <TableCell className="border-l " >{item.date}</TableCell>
              <TableCell className="border-l " >
                <Link 
                  href={item.statusLink.href}
                  className="text-[hsl(var(--table-link))] hover:underline"
                >
                  {item.statusLink.text}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

