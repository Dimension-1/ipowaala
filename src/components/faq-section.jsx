export function FAQSection({ title = "Frequently Asked Questions (FAQs)", faqs }) {
  return (
    <div className="mt-8 border rounded-none p-6 bg-white">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
            <h3 className="font-semibold text-xl text-[#2B547E] mb-2">Q. {faq.question}</h3>
            <div className="text-gray-900 space-y-2">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

