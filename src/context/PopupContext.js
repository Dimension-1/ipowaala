"use client"

import { createContext, useContext, useState, useEffect } from 'react'
import SubscriptionPopup from '@/components/SubscriptionPopup'
import emailjs from '@emailjs/browser'

const PopupContext = createContext()

export function PopupProvider({ children }) {
  const [showPopup, setShowPopup] = useState(false)

  const showPopupWithDelay = (delay) => {
    setTimeout(() => {
      setShowPopup(true)
    }, delay)
  }

  useEffect(() => {
    const hasShownPopup = localStorage.getItem('hasShownPopup')
    
    if (!hasShownPopup) {
      showPopupWithDelay(10000)
    }

    return () => {
      localStorage.removeItem('hasShownPopup')
    }
  }, [])

  const handleClose = () => {
    setShowPopup(false)
    showPopupWithDelay(5*60*1000)
  }

  const handleSubmit = async (e, formData, setStatus, setFormData) => {
    e.preventDefault()
    
    try {
      const templateParams = {
        to_name: "Subscriber",
        to_email: formData.email,
        location: formData.location,
        income_range: formData.incomeRange,
        ebook_link: "YOUR_EBOOK_DOWNLOAD_LINK"
      }

      await emailjs.send(
        'service_nn3ml5f',
        'template_p629nac',
        templateParams,
        '5xo6Eu9H1ip2efWId'
      )

      setStatus('Success! Your email has been added to our list.')
      setFormData({ location: '', incomeRange: '', email: '' })
      localStorage.setItem('hasShownPopup', 'true')
      
      setTimeout(() => {
        setShowPopup(false)
      }, 2000)
    } catch (error) {
      setStatus('Failed to send email. Please try again.')
    }
  }

  return (
    <PopupContext.Provider value={{}}>
      {children}
      <SubscriptionPopup 
        isVisible={showPopup}
        onClose={handleClose}
        onSubmit={handleSubmit}
      />
    </PopupContext.Provider>
  )
}

export const usePopup = () => useContext(PopupContext) 