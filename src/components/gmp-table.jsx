import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function GMPTable({ title, lastUpdated, data }) {
  return (
    <div className="rounded border">
      <h2 className="p-3 text-center text-xl font-semibold">
        {title} ( {lastUpdated} )
      </h2>
      <Table>
        <TableHeader>
          <TableRow className="bg-brand-primary hover:bg-brand-primary">
            <TableHead className="text-white border-r">IPO Name</TableHead>
            <TableHead className="text-white border-r text-center">GMP (₹)</TableHead>
            <TableHead className="text-white border-r text-center">Price (₹)</TableHead>
            <TableHead className="text-white text-center">Expected Gain</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow
              key={item.name}
              className={index % 2 === 0 ? "bg-[hsl(var(--table-row-even))]" : ""}
            >
              <TableCell className="border-r">
                <div className="font-medium text-base text-[hsl(var(--table-link))]">
                  {item.name}
                </div>
                <div className="text-red-500 font-medium">{item.date}</div>
              </TableCell>
              <TableCell className="text-center border-r">₹ {item.gmp}</TableCell>
              <TableCell className="text-center border-r">₹ {item.price}</TableCell>
              <TableCell className="text-center">{item.expectedGain}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

