'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';

export default function RosaGomezProfile() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSpecialtiesOpen, setIsSpecialtiesOpen] = useState(false);
  const [isModalitiesOpen, setIsModalitiesOpen] = useState(false);

  const specialtiesList = [
    "Generational trauma",
    "Identity",
    "Anxiety",
    "Depression",
    "Grief",
    "Relationships",
    "Culturally-informed therapy",
    "LGBTQ-affirming therapy",
    "Teens and young adults"
  ];

  const modalitiesList = [
    "EMDR",
    "Parts Work",
    "Person-Centered Therapy",
    "Narrative Therapy",
    "Bowen Family Systems Theory",
    "Cognitive Behavioral Therapy (CBT)"
  ];

  const faqs = [
    {
      question: "What led you to be a therapist?",
      answer: "My decision to enter this field is rooted in my own experiences and a deep desire to help people unpack trauma and difficult family patterns. Being bilingual in English and Spanish and a person of color, I understand how essential it is to see someone who looks like you in this space. I bring my whole self into our sessions to ensure you feel comfortable, safe, and truly understood as we chart a new way forward."
    },
    {
      question: "What do you enjoy doing when you are not working?",
      answer: "When I am not working alongside clients, I prioritize connecting with my community, exploring creative tracking rhythms, and carving out spaces for mindful rest."
    },
    {
      question: "What is a book that has been inspiring to you as a therapist?",
      answer: "Books focusing on the complexities of family system dynamics, relational patterns, and narrative therapy paths form the core of my therapeutic library."
    },
    {
      question: "What's your favorite way to recharge after a busy week?",
      answer: "Slowing down entirely, spending time in spaces where I can disconnect from external noise, and intentionally grounding my own regulatory system."
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
                alt="Rosa Gomez Profile View"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight">
                Rosa Gomez
              </h1>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#5e5a57] font-semibold tracking-widest pt-1">
                Associate Marriage & Family Therapist #157037, Supervised by Jennifer Anderson, LMFT #46111
              </p>
            </div>

            <h2 className="text-2xl md:text-[32px] font-serif font-light leading-[1.3] text-[#2c2a29] max-w-xl">
              You don&rsquo;t have to keep repeating patterns you never chose in the first place.
            </h2>

            <div className="space-y-6 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed max-w-2xl">
              <p>
                Many of my clients are realizing how they were raised doesn&rsquo;t align with who they truly are or what they value. They&rsquo;re teens and young adults, members of the LGBTQ+ community, and people of color who are embarking on a journey of self-discovery and looking for a co-pilot to join them.
              </p>
              <p>
                If you still live at home, you may feel like you need to hide parts of yourself because you&rsquo;re afraid you&rsquo;ll disappoint your parents. You may feel pressured to behave a certain way that doesn&rsquo;t feel true to you.
              </p>
              <p>
                Or you&rsquo;re transitioning into young adulthood, living on your own for the first time, and realizing how many things from your past you want to leave behind. You might be unsure who you are outside of your family and eager to finally discover that person, but don&rsquo;t know where to start.
              </p>
              <p>
                If you&rsquo;re at the stage of starting your own family, you might freeze in your tracks when you catch yourself treating your own kids the way you were treated, even though you swore you would never become your parents.
              </p>
              <p>
                Whatever brings you to this place: it&rsquo;s welcome here. I&rsquo;m here to support you in breaking free of the patterns you learned from the family you were born into, so you can start charting your own way in life.
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
            Therapy can be what you want it to be. You&rsquo;re the driver and <span className="italic font-serif text-[#5f8d8a] font-normal">you</span> decide where this experience takes us.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed">
            <div className="space-y-6">
              <p>
                This career is more than just a job for me; it&rsquo;s a true passion. Connecting with people and making them feel seen is what I love most. My goal is that you feel comfortable sitting across from me, even when we&rsquo;re talking about some tough things. Sometimes that means dropping a joke or swear word to lighten the mood&mdash;and I always encourage you to express yourself too.
              </p>
              <p>
                But while therapy does not have to be all &ldquo;doom and gloom,&rdquo; that doesn&rsquo;t mean I take this work lightly. I&rsquo;m bilingual in English and Spanish, and I&rsquo;m a person of color. I understand the importance of seeing people who look like you in this kind of position. I&rsquo;ve been through my own share of trauma and difficult family experiences. When it serves you, I&rsquo;ll share pieces of my own experience to help normalize whatever you&rsquo;re feeling.
              </p>
            </div>

            <div className="space-y-6 flex flex-col justify-between">
              <p>
                I pull from Narrative Therapy and Bowen Family Systems Theory to help you understand the bigger patterns at play in your family and your own story. I also use CBT and EMDR when appropriate. My hope is that you&rsquo;ll leave our session knowing that you can do things you never thought you could.
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
