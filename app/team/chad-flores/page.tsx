'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';

export default function ChadFloresProfile() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSpecialtiesOpen, setIsSpecialtiesOpen] = useState(false);
  const [isModalitiesOpen, setIsModalitiesOpen] = useState(false);

  const specialtiesList = [
    "Addiction",
    "Trauma",
    "Anxiety and depression",
    "Somatic work",
    "Couples",
    "Teens",
    "Culturally-informed therapy",
    "Burnout"
  ];

  const modalitiesList = [
    "EMDR",
    "Cognitive Behavioral Therapy (CBT)",
    "Dialectical Behavior Therapy (DBT)",
    "Person-Centered Therapy",
    "Narrative Therapy",
    "Attachment-based therapy",
    "Mindfulness and nervous system regulation"
  ];

  const faqs = [
    {
      question: "What led you to be a therapist?",
      answer: "I moved out on my own at 16 and took on raising my younger sister shortly after. Years later, when I went back to school, I found myself drawn to psychology courses without fully knowing why. I spent years bartending in the meantime, and people confided in me constantly. Somewhere in there, I realized I wanted to do that work on purpose.\n\nI also spent 10 years in my own therapy, where I intellectualized everything at first. Then physical symptoms started showing up, and somatic work spoke to me in a way talk therapy alone hadn't. It's a goal of mine to make sure none of my clients leave therapy without addressing the somatic side of healing."
    },
    {
      question: "What do you enjoy doing when you are not working?",
      answer: "Away from clinical sessions, I prioritize completely offline routines, grounding natural paths, and finding slow spaces to support structural personal balance."
    },
    {
      question: "What is a book that has been inspiring to you as a therapist?",
      answer: "Books breaking down modern somatic nervous system regulation tracks, addiction recovery structures, and trauma-informed cognitive models are regular references on my shelf."
    },
    {
      question: "What's your favorite way to recharge after a busy week?",
      answer: "Stepping completely back from the constant daily rat race, connecting with family, and dedicating quiet moments to reset my body and mind safely."
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
                alt="Chad Flores Profile View"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight">
                Chad Flores
              </h1>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#5e5a57] font-semibold tracking-widest pt-1">
                Associate Marriage & Family Therapist #157563, Supervised by Amie Deitel, LMFT #145328
              </p>
            </div>

            <h2 className="text-2xl md:text-[32px] font-serif font-light leading-[1.3] text-[#2c2a29] max-w-xl">
              It&rsquo;s okay to feel stuck or unsure of where to begin&mdash;there&rsquo;s a version of you who knows the way forward. We&rsquo;ll uncover that person together.
            </h2>

            <div className="space-y-6 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed max-w-2xl">
              <p>
                I work with teens and adults who are motivated for change but need help figuring out where to go from here.
              </p>
              <p>
                On the outside, you may be earning promotions at work or getting good grades in school. But on the inside, you wonder if you&rsquo;re even good enough. It might be hard to fall asleep at night because your mind is racing with worry. So you try to distract yourself with doomscrolling or drinking, only to end up more anxious, aggravated, or ashamed. Maybe you have a hard time making friends or maintaining relationships.
              </p>
              <p>
                Many of my clients come to me on the heels of a major life transition, like a graduation, career change, or a big move. Others are recovering from work-related stressors in the healthcare field or from things they&rsquo;ve seen as first responders. Sometimes, they&rsquo;re living with addiction or struggling to move beyond something from their past.
              </p>
              <p>
                One thing they all have in common is a feeling of overwhelm, exhaustion, and a readiness to not be in this place anymore. They often understand, intellectually, why they&rsquo;re having a particular experience, but have a hard time making lasting changes on their own. We work together to develop practical tools that create meaningful, sustainable personal growth.
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
                  <span className="transition-colors">Specialties</span>
                  <span className="text-lg font-light text-neutral-400 transition-colors">
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
                  <span className="transition-colors">Modalities</span>
                  <span className="text-lg font-light text-neutral-400 transition-colors">
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
            I believe everyone has the capacity for growth, and I strive to create a space where clients feel safe, understood, and <span className="italic font-serif text-[#5f8d8a] font-normal">empowered.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed">
            <div className="space-y-6">
              <p>
                My approach is compassionate, trauma-informed, and collaborative. I want to help you feel better, but I&rsquo;m also here to challenge you and hold you accountable to your own goals and desire for change. I&rsquo;ll encourage you to take meaningful action that gets you out of your comfort zone. That&rsquo;s where you build a life that feels more authentic, connected, and fulfilling.
              </p>
              <p>
                I have extensive experience working in residential and intensive outpatient programs (IOP), supporting those navigating substance use disorders and co-occurring mental health concerns. I&rsquo;ve found that addiction itself is rarely the core issue. More often, it&rsquo;s a behavior that people use to cope with pain, trauma, anxiety, shame, or overwhelming emotions.
              </p>
            </div>

            <div className="space-y-6 flex flex-col justify-between">
              <p>
                If addiction is part of your story, we&rsquo;ll work together to understand what it&rsquo;s been doing for you and develop healthier ways of meeting those needs. My goal is to help you build a meaningful life you no longer feel the need to escape from.
              </p>
              <p>
                My sessions focus on building coping skills like breathing exercises and progressive muscle relaxation or providing nervous system education. I draw from CBT, DBT, Person-Centered Therapy, and Narrative Therapy to help you better understand yourself and create lasting change.
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
                  <div className="pt-2 pb-4 text-sm text-[#5e5a57] font-light leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200 max-w-xl whitespace-pre-line">
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
