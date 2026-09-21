'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';

export default function HeatherWilliamsProfile() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSpecialtiesOpen, setIsSpecialtiesOpen] = useState(false);
  const [isModalitiesOpen, setIsModalitiesOpen] = useState(false);

  const specialtiesList = [
    "Dissociation & DID",
    "CPTSD and Trauma",
    "Attachment",
    "Adults",
    "Couples",
    "Teens",
    "LGBTQIA+",
    "Identity"
  ];

  const modalitiesList = [
    "Brainspotting",
    "EMDR",
    "IFS Informed Parts Work",
    "Somatic Therapy",
    "Mindfulness",
    "Gestalt",
    "Psychodynamic",
    "Art Therapy"
  ];

  const faqs = [
    {
      question: "What led you to be a therapist?",
      answer: "My path to therapy began in art and fashion, where I spent over a decade exploring how clothing impacts self-esteem. While I enjoyed the creativity, I felt drawn to helping people more directly, which led me to shift toward psychology, blending my passion for art with a focus on personal growth and empowerment. I earned my Master's in Marriage & Family Therapy from Phillips Graduate Institute. Before that, I graduated from California State University Channel Islands with a Bachelor's in Sociology, which really fueled my interest in understanding how society shapes our relationships and behavior."
    },
    {
      question: "What do you enjoy doing when you are not working?",
      answer: "When I'm not in the therapy room, I embrace creative expressions, dive into art mediums, spend slow moments grounded in nature, and focus on mindful presence away from life's fast pace."
    },
    {
      question: "What is a book that has been inspiring to you as a therapist?",
      answer: "Books exploring the intersections of deep creative expression, somatic body tracking, and the reclamation of a person's authentic identity guide much of my integration work."
    },
    {
      question: "What's your favorite way to recharge after a busy week?",
      answer: "Taking an intentional deep breath, unplugging entirely from life's constant noise, and cultivating a safe, quiet space to reset my mind, body, soul, and emotions."
    }
  ];

  return (
    <div className="w-full bg-[#f7f5f0] text-[#2c2a29] font-sans antialiased">
      <Navbar />

      <main className="w-full max-w-7xl mx-auto px-8 py-20 md:px-16 space-y-24">

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8">
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-start">
            <div className="w-full max-w-[400px] aspect-[4/5] bg-neutral-200 overflow-hidden relative shadow-sm rounded-xs">
              <img
                src="https://unsplash.com"
                alt="Heather Williams-Baumgart Profile Presentation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight">
                Heather Williams-Baumgart
              </h1>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#5e5a57] font-semibold tracking-widest pt-1">
                Associate Marriage & Family Therapist #144457 <br />
                Supervised by Jennifer Anderson, LMFT #46111
              </p>
            </div>

            <h2 className="text-2xl md:text-[32px] font-serif font-light leading-[1.3] text-[#2c2a29] max-w-xl">
              A space to deepen self-trust, experience lasting healing, and empower yourself through mindful presence and intentional <span className="italic font-serif text-[#5f8d8a] font-normal">choices.</span>
            </h2>

            <div className="space-y-6 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed max-w-2xl">
              <p>
                You might be here because you&rsquo;re feeling disconnected&mdash;from yourself, from your partner, or from the people and world around you. The loneliness and uncertainty can feel overwhelming, especially when you&rsquo;ve already tried so many things to find relief. Maybe you&rsquo;ve tried handling it on your own or even been to therapy before, but you left feeling misunderstood or like nothing really &ldquo;clicked.&rdquo; You&rsquo;re ready to start experiencing and moving through life differently.
              </p>
              <p>
                If you&rsquo;re an individual or part of a couple struggling with the weight of past trauma, you may feel a deep disconnection&mdash;from yourself, from others, or from the life you once enjoyed. Watching yourself or a loved one navigate these challenges can feel overwhelming. You&rsquo;re here looking for support, for someone who can meet you where you are and help you find a path toward healing and wholeness.
              </p>
              <p>
                I work with adults, couples, and teens seeking to restore a sense of connection to themselves and a place to rediscover greater stability and confidence in who they are and where they&rsquo;re headed.
              </p>
            </div>

            <div className="w-full max-w-xl border-t border-neutral-300 pt-1 mt-8">

              <div className="border-b border-neutral-200 w-full">
                <button
                  onClick={() => {
                    setIsSpecialtiesOpen(!isSpecialtiesOpen);
                    setIsModalitiesOpen(false);
                  }}
                  className="w-full flex items-center justify-between py-4 text-xs uppercase tracking-[0.2em] text-[#2c2a29] font-medium hover:text-[#5f8d8a] cursor-pointer focus:outline-none group"
                >
                  <span className="group-hover:text-[#5f8d8a] transition-colors">Specialties</span>
                  <span className="text-lg font-light text-neutral-400 group-hover:text-[#5f8d8a] transition-colors">
                    {isSpecialtiesOpen ? '+' : '+'}
                  </span>
                </button>

                {isSpecialtiesOpen && (
                  <div className="pb-6 pt-2 animate-in fade-in slide-in-from-top-1 duration-200">
                    <ul className="space-y-3 text-sm text-[#5e5a57] font-light list-disc pl-5 marker:text-[#5f8d8a]">
                      {specialtiesList.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="border-b border-neutral-200 w-full">
                <button
                  onClick={() => {
                    setIsModalitiesOpen(!isModalitiesOpen);
                    setIsSpecialtiesOpen(false);
                  }}
                  className="w-full flex items-center justify-between py-4 text-xs uppercase tracking-[0.2em] text-[#2c2a29] font-medium hover:text-[#5f8d8a] cursor-pointer focus:outline-none group"
                >
                  <span className="group-hover:text-[#5f8d8a] transition-colors">Modalities</span>
                  <span className="text-lg font-light text-neutral-400 group-hover:text-[#5f8d8a] transition-colors">
                    {isModalitiesOpen ? '+' : '+'}
                  </span>
                </button>

                {isModalitiesOpen && (
                  <div className="pb-6 pt-2 animate-in fade-in slide-in-from-top-1 duration-200">
                    <ul className="space-y-3 text-sm text-[#5e5a57] font-light list-disc pl-5 marker:text-[#5f8d8a]">
                      {modalitiesList.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

            </div>
          </div>
        </section>

        <section className="w-full pt-16 border-t border-neutral-200/60 space-y-12">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29] leading-tight max-w-4xl">
            I believe we&rsquo;re not just brains in jars, and feeling better means going deeper than looking at just your mental health.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed">
            <div className="space-y-6">
              <p>
                That&rsquo;s why, in our work together, we&rsquo;ll reconnect you with your whole self&mdash;mind, body, soul, and emotions.
              </p>
              <p>
                For adults, this means moving beyond &lsquo;getting by&rsquo; to feeling fully present, forming healthy relationships, processing past experiences, and living from a place of authenticity. I help parents and teens improve their connection and build stability, meeting teens where they are to create a sense of self-confidence and better communication. For couples, we&rsquo;ll focus on deepening connection and navigating life&rsquo;s transitions, paying attention not just to words, but to body language as well.
              </p>
            </div>

            <div className="space-y-6 flex flex-col justify-between">
              <p>
                My approach includes body-based methods that go beyond just talking&mdash;to get the most out of this work, we both have to be actively engaged and committed. I&rsquo;m committed to listening deeply, being honest with you, and cultivating a safe, supportive space for real change.
              </p>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-block text-xs uppercase tracking-[0.25em] text-[#2c2a29] font-semibold border-b border-[#2c2a29] pb-0.5 hover:text-[#5f8d8a] hover:border-[#5f8d8a] transition tracking-widest"
                >
                  Schedule an Appointment
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-3">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#5e5a57] font-semibold tracking-widest">
              FAQs
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29]">
              A little bit more <br />
              <span className="italic font-serif text-[#5f8d8a] font-normal">about me...</span>
            </h2>
          </div>

          <div className="lg:col-span-7 border-t border-neutral-200 divide-y divide-neutral-200/70 w-full">
            {faqs.map((faq, index) => (
              <div key={index} className="py-4 w-full transition-all duration-200">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between text-left py-2 font-sans text-xs md:text-sm tracking-wide text-[#2c2a29] hover:text-[#5f8d8a] cursor-pointer focus:outline-none group"
                >
                  <span className="font-medium text-[#2c2a29] group-hover:text-[#5f8d8a] transition-colors">{faq.question}</span>
                  <span className="text-lg font-light text-neutral-400 group-hover:text-[#5f8d8a] transition-colors">
                    {openFaq === index ? '+' : '+'}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="pt-2 pb-4 text-sm text-[#5e5a57] font-light leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200 max-w-xl">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
