'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';

export default function SamanthaJohnsonProfile() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSpecialtiesOpen, setIsSpecialtiesOpen] = useState(false);
  const [isModalitiesOpen, setIsModalitiesOpen] = useState(false);

  const specialtiesList = [
    "Trauma",
    "Relationships",
    "Young adults",
    "Women",
    "Dating & breakups",
    "Anxiety & depression",
    "Teens",
    "Couples"
  ];

  const modalitiesList = [
    "EMDR",
    "Emotionally Focused Therapy (EFT)",
    "Attachment-based therapy",
    "Psychodynamic/Psychoanalytic",
    "Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)",
    "Polyvagal Theory",
    "Gottman Level 1"
  ];

  const faqs = [
    {
      question: "What led you to be a therapist?",
      answer: "My path to therapy was driven by a deep reverence for human resilience and the desire to cultivate safe spaces where people can explore what lies underneath their perfectionism, anxiety, and historic relationship patterns without judgment."
    },
    {
      question: "What do you enjoy doing when you are not working?",
      answer: "When I am away from my clinical practice, I prioritize intentional stillness, grounding outdoor spaces, and quiet, reflective moments to recharge my nervous system."
    },
    {
      question: "What is a book that has been inspiring to you as a therapist?",
      answer: "Books centering around polyvagal theory, somatic integration paths, and attachment-based relationship dynamics stay active within my continuous reference library."
    },
    {
      question: "What's your favorite way to recharge after a busy week?",
      answer: "Unplugging from life's fast pace, tracking natural patterns, and protecting a space of calm to reset my system completely."
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
                alt="Samantha Johnson Profile Presentation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight">
                Samantha Johnson
              </h1>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#5e5a57] font-semibold tracking-widest pt-1">
                Associate Marriage & Family Therapist #147424. Supervised by Jennifer Anderson, LMFT #46111
              </p>
            </div>

            <h2 className="text-2xl md:text-[32px] font-serif font-light leading-[1.3] text-[#2c2a29] max-w-xl">
              It&rsquo;s possible to feel grounded, connected, and truly at ease with yourself&mdash;<span className="italic font-serif text-[#5f8d8a] font-normal">even if it doesn&rsquo;t feel that way right now.</span>
            </h2>

            <div className="space-y-6 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed max-w-2xl">
              <p>
                I specialize in supporting young adults, women, and couples who feel stuck&mdash;whether in burnout, anxiety, boundary-setting, unresolved trauma, or painful relationship patterns. You may look like you have it all together on the outside, but inside, you&rsquo;re exhausted from constantly carrying everyone else&rsquo;s expectations (and your own heavy self-criticism). You might feel like you&rsquo;re always &ldquo;on,&rdquo; overthinking every decision, or second-guessing your worth in relationships and at work. Sometimes it shows up physically, too&mdash;tension in your shoulders, stomach issues, migraines.
              </p>
              <p>
                Often, these struggles are rooted in past trauma or pain that hasn&rsquo;t had a place to be seen and healed. Beneath it all, you&rsquo;re left wondering what&rsquo;s wrong with you, frustrated that everyone else seems to be doing &ldquo;okay&rdquo; except you.
              </p>
              <p>
                This is a safe space where you can finally explore what&rsquo;s underneath the perfectionism, the people-pleasing, and the old stories you&rsquo;ve carried for years. Therapy isn&rsquo;t about &ldquo;fixing&rdquo; you, it&rsquo;s about understanding and accepting all the parts of you, so you can move forward with a clear head, confidence, and permission to be exactly who you are.
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
          <h2 className="text-3xl md:text-4xl text-[#2c2a29] font-serif font-light leading-tight max-w-4xl">
            When we work together, I&rsquo;ll let you lead in regard to what feels <span className="italic font-serif text-[#5f8d8a] font-normal">most</span> important to explore.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed">
            <div className="space-y-6">
              <p>
                This is your experience, so we&rsquo;ll always go at your pace, and I&rsquo;ll be there, gently inviting you to stretch, reflect, and practice new ways of looking at things. We&rsquo;ll always tie things back to your bigger goals, so you can see how each piece connects to the life you want to create. I&rsquo;ll help you find practical skills and strategies to move forward, and I might suggest homework, a book, or a podcast to deepen your growth between sessions. I also often weave in EMDR for trauma processing, mindfulness for grounding, somatic and polyvagal work to support nervous system regulation, and experiential exercises for couples to encourage real change beyond therapy.
              </p>
            </div>

            <div className="space-y-6 flex flex-col justify-between">
              <p>
                With experience spanning foster care, adoption, and intensive trauma treatment settings, I bring both clinical expertise and a deep understanding of human resilience. I value the trust it takes to show up in therapy, and I honor that courage by how I show up: with commitment, curiosity, and warmth.
              </p>
              <p>
                Here, you can feel deeply seen, validated in all your feelings, and more yourself than you ever thought possible. Together, we&rsquo;ll work toward the kind of self-trust and authentic connection that can transform every area of your life.
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
