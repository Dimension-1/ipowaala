import { Button } from "@/components/ui/button"
import { useState } from 'react'

export default function SubscriptionPopup({ isVisible, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    location: '',
    incomeRange: '',
    email: ''
  })
  const [status, setStatus] = useState('')

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4 relative">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 p-2"
          aria-label="Close popup"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">Get Your Free IPO eBook</h2>
        <form onSubmit={(e) => onSubmit(e, formData, setStatus, setFormData)} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-brand-primary"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Income Range</label>
            <select
              name="incomeRange"
              value={formData.incomeRange}
              onChange={(e) => setFormData({...formData, incomeRange: e.target.value})}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-brand-primary"
              required
            >
              <option value="">Select Income Range</option>
              <option value="0-25000">₹0 - ₹25,000</option>
              <option value="25001-50000">₹25,001 - ₹50,000</option>
              <option value="50001-75000">₹50,001 - ₹75,000</option>
              <option value="75001+">₹75,001+</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-brand-primary"
              required
            />
          </div>

          <Button 
            type="submit"
            variant="default" 
            className="w-full bg-brand-primary rounded-none"
          >
            Get Free eBook
          </Button>
        </form>

        {status && (
          <p className={`mt-4 text-center ${
            status.includes('Success') ? 'text-green-600' : 'text-red-600'
          }`}>
            {status}
          </p>
        )}
      </div>
    </div>
  )
} 