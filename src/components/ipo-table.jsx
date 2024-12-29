"use client"
import { Inter } from "next/font/google"
import { useState } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const inter = Inter({ subsets: ["latin"] })

export function IPOTable({loading, title, data, showPlatform = false }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  if (loading) {
    return (
      <div className="rounded border w-full p-4">
        <h2 className="text-center text-xl font-semibold">
          {title}
        </h2>
        <div className="text-center py-8">Loading...</div>
      </div>
    );
  }

  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <div className="rounded border w-full p-4">
        <h2 className="text-center text-xl font-semibold text-red-600">
          No IPO data available at the moment
        </h2>
      </div>
    );
  }

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div className={`rounded border w-full`}>
      <h2 className="p-3 text-center text-xl font-semibold">
        {title}
      </h2>
      <Table>
        <TableHeader>
          <TableRow className="bg-brand-primary hover:bg-brand-primary">
            <TableHead className="text-white border-r">Company Name</TableHead>
            <TableHead className="text-white border-r text-center">Start Date</TableHead>
            <TableHead className="text-white border-r text-center">End Date</TableHead>
            <TableHead className="text-white text-center border-r">Issue Price</TableHead>
            {/* <TableHead className="text-white text-center border-r">Status</TableHead> */}
            {showPlatform && <TableHead className="text-white text-center">Series</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.map((ipo, index) => (
            <TableRow
              key={ipo.symbol || index}
              className={
                ipo.status?.toLowerCase() === "active" 
                  ? "bg-green-200" 
                  : ipo.status?.toLowerCase() === "forthcoming"
                  ? "bg-yellow-100"
                  : index % 2 === 0 
                  ? "bg-[#f8fafc]" 
                  : "bg-white"
              }
            >
              <TableCell className="font-medium text-base text-[hsl(var(--table-link))] border-r border-gray-400">
                {ipo.companyName || ipo.company}
              </TableCell>
              <TableCell className="text-center border-r border-gray-400">{ipo.issueStartDate || ipo.ipoStartDate}</TableCell>
              <TableCell className="text-center border-r border-gray-400">{ipo.issueEndDate || ipo.ipoEndDate}</TableCell>
              <TableCell className="text-center border-r border-gray-400">{ipo.issuePrice}</TableCell>
              {/* <TableCell className="text-center border-r border-gray-400">{ipo.status}</TableCell> */}
              {showPlatform && (
                <TableCell className="text-center">{ipo.series}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 p-4">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}