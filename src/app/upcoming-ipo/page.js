"use client"
import { useState, useEffect } from "react"
import { IPOTable } from "@/components/ipo-table"
import { FAQSection } from "@/components/faq-section"
import { upcomingIpoFaqs } from "@/data/upcoming-ipo-faqs"
import axios from "axios"


const upcomingIPOData = [
  {
    name: "Carraro India",
    openDate: "20-December-2024",
    closeDate: "24-December-2024",
    price: "668-704 Rs",
    status: "active"
  },
  {
    name: "Senores Pharmaceuticals",
    openDate: "20-December-2024",
    closeDate: "24-December-2024",
    price: "372-391 Rs",
    status: "active"
  },
  {
    name: "Ventive Hospitality",
    openDate: "20-December-2024",
    closeDate: "24-December-2024",
    price: "610-643 Rs",
    status: "active"
  },
  {
    name: "PharmEasy (API Holding) IPO",
    openDate: "2024",
    closeDate: "2024",
    price: "-",
    status: "upcoming"
  },
  {
    name: "GO Air IPO",
    openDate: "2024",
    closeDate: "2024",
    price: "-",
    status: "upcoming"
  }
]

const previousIPOData = [
  {
    name: "Inventurus Knowledge Solutions",
    openDate: "12-December-2024",
    closeDate: "16-December-2024",
    price: "1295-1329 Rs",
    status: "previous"
  },
  {
    name: "International Gemmological",
    openDate: "13-December-2024",
    closeDate: "17-December-2024",
    price: "417 Rs",
    status: "previous"
  }
]

export default function UpcomingIPOPage() {
  const [upcomingIPOData, setUpcomingIPOData] = useState([])
  const [previousIPOData, setPreviousIPOData] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchIPOData = async () => {
      try {
        const response = await axios.get('/api/ipo');
        const response2 = await axios.get('/api/pastIpo');
        
        if (response.data) {
          setUpcomingIPOData(response.data);
        }
        
        if (response2.data?.data) {
          setPreviousIPOData(response2.data.data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching IPO data:', error);
        setUpcomingIPOData([]);
        setPreviousIPOData([]);
      }
    }

    fetchIPOData();
  }, []);



  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Upcoming IPOs 2024 | Latest, Recent & New IPO in 2024</h1>
      
      <div className="prose max-w-none">
        <p>
          The Below list of <strong>Upcoming IPOs 2024</strong> in India <strong>IPO Watch</strong> that may be listed this year. The firms on the list have previously submitted DRHPs with SEBI, and a handful of them have received clearance from the regulator.
        </p>
        <p>
          There are lots of <strong>Upcoming IPOs 2024</strong> Coming this year like <strong>P N Gadgil Jewellers, Swiggy, Ather, JK Files Engineering, Hexagon Nutrition IPO, Waaree Energies IPO</strong> and so on. Please stay with us for more updates.
        </p>
      </div>

      <IPOTable
        title="List of Upcoming IPOs 2024"
        data={upcomingIPOData}
        loading={loading}
      />

      <IPOTable
        title="List of Previous IPO"
        data={previousIPOData}
        loading={loading}
      />
      
      <FAQSection faqs={upcomingIpoFaqs} />
    </div>
  )
}

