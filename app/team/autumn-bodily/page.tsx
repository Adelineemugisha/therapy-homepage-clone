'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';

export default function AutumnBodilyProfile() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSpecialtiesOpen, setIsSpecialtiesOpen] = useState(false);
  const [isModalitiesOpen, setIsModalitiesOpen] = useState(false);

  const specialtiesList = [
    "Trauma & PTSD",
    "Complex PTSD (CPTSD)",
    "Dissociative Disorders (DID)",
    "Kids & Families",
    "Adults",
    "Couples",
    "Grief & Loss",
    "LGBTQIA+"
  ];

  const modalitiesList = [
    "EMDR",
    "Parts Work",
    "Narrative Therapy",
    "Somatic Therapy",
    "Structural Family Therapy",
    "Strategic Therapy",
    "Gottman Method",
    "Family Systems",
    "Strengths-Based"
  ];

  const faqs = [
    {
      question: "What led you to be a therapist?",
      answer: "My decision to become a therapist stems from a deep belief in human transformation and my own lived experience as a trauma survivor. I know firsthand what it's like to feel broken down by the past, but I also know that healing and profound personal growth are entirely possible at any stage of life."
    },
    {
      question: "What do you enjoy doing when you are not working?",
      answer: "When I am out of the therapy room, I focus on resting my nervous system, connecting intentionally with loved ones, and seeking quiet, judgment-free spaces to cultivate mindful presence."
    },
    {
      question: "What is a book that has been inspiring to you as a therapist?",
      answer: "Books detailing generational wounds, family systems dynamics, and uncovering the unspoken pain passed down through family tracking histories are constants on my desk."
    },
    {
      question: "What's your favorite way to recharge after a busy week?",
      answer: "Slowing down, processing my own internal boundaries, stepping away from the daily routine, and finding deep comfort in simple, grounded moments of peace."
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
                alt="Autumn Bodily Profile Presentation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight">
                Autumn Bodily
              </h1>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#5e5a57] font-semibold tracking-widest pt-1">
                Associate Marriage & Family Therapist #156897 <br />
                Supervised by Jennifer Anderson, LMFT #46111
              </p>
            </div>

            <h2 className="text-2xl md:text-[32px] font-serif font-light leading-[1.3] text-[#2c2a29] max-w-xl">
              My goal is never to keep you in therapy forever, but to help you reach the point where you can move forward&mdash;stronger, braver, and more at peace.
            </h2>

            <div className="space-y-6 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed max-w-2xl">
              <p>
                You&rsquo;ve likely carried the weight of your past for a long time&mdash;in silent, survival mode. You&rsquo;ve learned how to push through, to protect yourself, and to keep going for everyone else. But now, whether it&rsquo;s your child struggling with big feelings, your relationship feeling stretched thin, or your own memories surfacing in painful ways, you know something needs to shift.
              </p>
              <p>
                I work with kids, families, couples, and adults who have been through trauma in its many forms&mdash;childhood neglect, abuse, generational wounds, medical trauma, grief, or identity struggles. Many are ready to unpack the &ldquo;box under the bed&rdquo; they&rsquo;ve been avoiding for years. Others are parents worried about their child&rsquo;s behavior, noticing clinginess, perfectionism, or sudden changes in mood. Families come to me when old patterns and unspoken pain are passed down through generations.
              </p>
              <p>
                This is a judgment-free space&mdash;whatever you bring, you will be met with understanding, compassion, and zero shame.
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
            In the beginning, we&rsquo;ll just talk&mdash;I&rsquo;ll ask what brought you here, what you&rsquo;re hoping will be different, and how you&rsquo;ll know if therapy is working.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed">
            <div className="space-y-6">
              <p>
                Therapy is about connection, honesty, and change, and that starts with the relationship between us. You can always speak freely, sharing the unfiltered truth and knowing I can handle it. Nothing is &ldquo;too much&rdquo; here. I&rsquo;ll help you name the problems you&rsquo;re facing, understand the role trauma has played, and discover new ways of coping, connecting, and healing. My style is warm and real&mdash;I may use metaphors, I may even curse! (not with kids!). And I&rsquo;ll always remind you that The Problem is the problem, not you.
              </p>
            </div>

            <div className="space-y-6 flex flex-col justify-between">
              <p>
                I bring my own lived experience as a trauma survivor into the room&mdash;not to make therapy about me, but to assure you that I truly understand how painful and isolating trauma can feel. I know what it&rsquo;s like to feel broken down by the past, and I also know that healing and growth are possible at any stage of life. It&rsquo;s never too late to find out who you are, to reconnect with yourself and your loved ones, and to build a life that feels whole again.
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
