'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';

export default function CandaceBletscherProfile() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSpecialtiesOpen, setIsSpecialtiesOpen] = useState(false);
  const [isModalitiesOpen, setIsModalitiesOpen] = useState(false);

  const specialtiesList = [
    "Trauma",
    "Anxiety",
    "Depression",
    "Parenting",
    "Anger",
    "Teens",
    "Adults",
    "Couples"
  ];

  const modalitiesList = [
    "Eye Movement Desensitization and Reprocessing (EMDR)",
    "Gottman Method",
    "Cognitive Behavioral Therapy (CBT)",
    "Solution-Focused",
    "Internal Family Systems (IFS)",
    "Psychodynamic Therapy",
    "Mindfulness Practices"
  ];

  const faqs = [
    {
      question: "What led you to be a therapist?",
      answer: "I’ve always been drawn to helping people understand their struggles, and find a better path. After working as a medical physicist, I became a therapist to support people in a deeper, more personal way."
    },
    {
      question: "What do you enjoy doing when you are not working?",
      answer: "I’m very competitive—I love playing tennis and pickleball. Making music is also a big part of who I am."
    },
    {
      question: "What is a book that has been inspiring to you as a therapist?",
      answer: "Anna Karenina—Tolstoy would've been a great therapist. Also, The Art of Possibility."
    },
    {
      question: "What's your favorite way to recharge after a busy week?",
      answer: "Reading and gardening are my go-to ways to unwind."
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
                alt="Candace Bletscher Profile Presentation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight">
                Candace Bletscher
              </h1>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#5e5a57] font-semibold tracking-widest pt-1">
                Associate Marriage & Family Therapist #152462 <br />
                Supervised by Jennifer Anderson, LMFT #46111
              </p>
            </div>

            <h2 className="text-2xl md:text-[32px] font-serif font-light leading-[1.3] text-[#2c2a29] max-w-xl">
              My goal is to help you fully embrace the adventure of life with confidence, clarity, and contentment.
            </h2>

            <div className="space-y-6 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed max-w-2xl">
              <p>
                Life can sometimes feel like you&rsquo;re running on a treadmill&mdash;working hard, but not getting anywhere, everything on repeat. Maybe you just feel &ldquo;off.&rdquo; Sometimes it&rsquo;s an endless loop of ruminations, thoughts stuck in a negative spiral. Other times, it&rsquo;s feeling torn between pleasing others or meeting your own needs. Or perhaps you&rsquo;re carrying pain from the past that&rsquo;s showing up in your body as tension or unease, and you can&rsquo;t seem to shake it (or understand why).
              </p>
              <p>
                Relationships can start feeling disconnected, like being caught in a competition no one meant to enter. Over time, frustration and resentment build, and it becomes hard to pinpoint how things unraveled&mdash;even with the people you care about most. You don&rsquo;t want to be so angry, so anxious, or so unmotivated, but the way forward isn&rsquo;t always clear. That sense of distance can make it hard to imagine how to reconnect with pleasure, trust, or mutual respect. And sometimes, it&rsquo;s not even obvious what &ldquo;feeling better&rdquo; would look like.
              </p>
              <p>
                Here&rsquo;s the thing: you don&rsquo;t have to stay stuck. Together, we&rsquo;ll open up the boxes in your brain and sort through both your thoughts and your body&rsquo;s responses. The goal is to uncover what&rsquo;s standing in the way of the life you want. I&rsquo;ll help you clear away what&rsquo;s blocking your path so you can step forward with clarity and confidence. You&rsquo;ve got the power to change the rules, and start living authentically, with purpose and joy&mdash;you just need a little nudge (or sometimes a big push!) in the right direction.
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
          <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29] leading-tight max-w-2xl">
            My style is collaborative, warm, and <span className="italic font-serif text-[#5f8d8a] font-normal">real.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed">
            <div className="space-y-6">
              <p>
                I show up as a human first, interested and open. I&rsquo;ll hold space for the hard stuff (you can&rsquo;t shock me), ask thoughtful questions, and challenge what&rsquo;s no longer working. I believe therapy should help you feel more grounded, empowered, and alive&mdash;not just in the room, but in your actual life. <strong className="text-[#2c2a29] font-medium">You don&rsquo;t need to be perfect here. You just need to be willing to start and we will find solutions together.</strong>
              </p>
              <p>
                Before becoming a therapist, I spent over a decade as a board-certified medical physicist working in cancer care. It was meaningful work, but I realized I was most drawn to the emotional side of people&rsquo;s experiences. I wanted to be part of the healing process in a different way, so I made a big career shift and never looked back. Now I bring that compassion and dedication into the therapy room&mdash;helping people slow down, reflect deeply, and discover new ways of being.
              </p>
            </div>

            <div className="space-y-6 flex flex-col justify-between">
              <p>
                I like to think of therapy as a chance to stop time: an opportunity to step out of the rat race and life&rsquo;s constant problems for a moment, brainstorm why things aren&rsquo;t working, and discover how to make them better. Here, you can find calm in the center of the storm, take a deep breath, and regroup with someone who is dedicated to helping you succeed.
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
                    {openFaq === index ? '' : '+'}
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
