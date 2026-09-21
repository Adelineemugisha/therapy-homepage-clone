'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function OfficeFaqs() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqData = [
    { question: "Where are you located?", answer: "Newbury Park, CA, with telehealth video sessions available." },
    { question: "How does online therapy work?", answer: "Secure video platform sessions from a private location." },
    { question: "What are your fees and what insurance do you take?", answer: "Jennifer: $225/session. Other staff: $175/session. Accepts major insurances like Anthem, Cigna, Aetna, etc." },
    { question: "What is a Good Faith Estimate?", answer: "An upfront cost estimate for expected therapy services under the No Surprises Act." },
    { question: "What can I expect during my first appointment?", answer: "An initial consultation to discuss history, goals, and a collaborative care plan." },
    { question: "What if I need to get ahold of my therapist after hours?", answer: "No 24/7 crisis coverage; contact emergency services or a crisis hotline for emergencies." },
    { question: "What is the cancellation/missed appointment policy?", answer: "Strict 24-hour notice policy or full session fee applies." },
    { question: "Is therapy confidential?", answer: "Yes, protected under HIPAA and state laws with standard legal exceptions." }
  ];

  return (
    <section id="faqs" className="w-full bg-[#f7f5f0] text-[#2c2a29] font-sans py-24 px-8 md:px-16 border-t border-b border-neutral-200/40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-8">
          <h2 className="text-4xl md:text-[54px] font-serif font-light leading-tight">Questions?</h2>
          <p className="text-sm md:text-[15px] text-[#5e5a57] font-light">Common questions about working together. <Link href="/contact" className="underline hover:text-[#5f8d8a]">Contact us</Link>.</p>
        </div>
        <div className="lg:col-span-8 border-t border-neutral-200 divide-y divide-neutral-200/70 w-full">
          {faqData.map((faq, index) => (
            <div key={index} className="py-5">
              <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex justify-between text-left text-sm md:text-base font-semibold">
                <span>{faq.question}</span>
                <span>{openFaq === index ? '－' : '＋'}</span>
              </button>
              {openFaq === index && <div className="pt-4 text-sm text-[#5e5a57]">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
