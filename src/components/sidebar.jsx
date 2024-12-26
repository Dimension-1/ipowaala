import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Sidebar() {
  const categories = [
    "IPO Anchor Investor",
    "IPO Prospectus",
    "NCD Issue",
    "Right Issue",
    "Sovereign Gold Bonds",
  ]

  return (
    <div className="space-y-6">
      <div className="p-4 border rounded-none">
        <Input type="search" placeholder="Search..." className="mb-2 rounded-none" />
        <Button className="w-full bg-[#2B547E] rounded-none">Search</Button>
      </div>
      <div className="border rounded-none">
        <h2 className="bg-[#2B547E] text-white p-3">Categories</h2>
        <ul className="p-4 justify-centerspace-y-2">
          {categories.map((category) => (
            <li key={category}>
              <a
                href="#"
                className="text-blue-800 hover:underline block"
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

