'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';

export default function AndreaWatkinsProfile() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSpecialtiesOpen, setIsSpecialtiesOpen] = useState(false);
  const [isModalitiesOpen, setIsModalitiesOpen] = useState(false);

  const specialtiesList = [
    "Trauma",
    "Women & Moms",
    "Pre-Teen and Teen Girls",
    "Postpartum Support",
    "Couples",
    "Anxiety",
    "Self-Esteem & Identity",
    "Racial & Cultural Identity"
  ];

  const modalitiesList = [
    "EMDR",
    "Parts Work",
    "Humanistic Therapy",
    "Strengths-Based",
    "Attachment-Focused",
    "Emotionally Focused Therapy (EFT)"
  ];

  const faqs = [
    {
      question: "What led you to be a therapist?",
      answer: "My path to counseling was shaped by a commitment to holding deep, honest spaces where individuals can step off the treadmill of carrying cultural, maternal, or generational expectations and reconnect with what they genuinely need to heal."
    },
    {
      question: "What do you enjoy doing when you are not working?",
      answer: "Away from sessions, I find grounding in quiet creative routines, sorting through my thoughts in reflective spaces, and prioritizing slow, intentional rhythms alongside family."
    },
    {
      question: "What is a book that has been inspiring to you as a therapist?",
      answer: "Literature that explores the deep somatic intersections of maternal mental health, identity development in women, and the reclamation of self-worth guides my foundational library."
    },
    {
      question: "What's your favorite way to recharge after a busy week?",
      answer: "Slowing down the pacing of the world around me, turning inward to tune out environmental overstimulation, and resetting my system at an intentional, quiet baseline."
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
                alt="Andrea Watkins Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight">
                Andrea Watkins
              </h1>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#5e5a57] font-semibold tracking-widest pt-1">
                Associate Professional Clinical Counselor #16209, Supervised by Jennifer Anderson, LMFT #46111
              </p>
            </div>

            <h2 className="text-2xl md:text-[32px] font-serif font-light leading-[1.3] text-[#2c2a29] max-w-xl">
              Regroup, rebuild, and feel confident moving forward the way <span className="italic font-serif text-[#5f8d8a] font-normal">you</span> want to.
            </h2>

            <div className="space-y-6 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed max-w-2xl">
              <p>
                On the outside, things might look like they&rsquo;re going fine, but inside, you feel overwhelmed, anxious, or just...empty. Maybe you&rsquo;re a mom who feels overstimulated and under-supported. Juggling motherhood, relationships, school, or a demanding career is all taking a toll&mdash;and even though you&rsquo;re managing, it&rsquo;s exhausting. Or maybe you&rsquo;re in a relationship where communication has started to crack, and no matter what you do, you&rsquo;re never on the same page.
              </p>
              <p>
                Chances are, whatever you&rsquo;re going through, you&rsquo;ve already tried to &ldquo;fix&rdquo; it&mdash;working harder, staying busier, searching the internet for answers&mdash;and somehow, the change you&rsquo;re hoping for still feels out of reach.
              </p>
              <p>
                That&rsquo;s where I come in. I work with women, moms, teens, and couples who are ready to stop running on empty and finally uncover what&rsquo;s really going on. Sometimes that means sorting through self-esteem struggles or the weight of cultural and generational expectations. Other times, it&rsquo;s helping my clients find healthier ways to cope with big feelings, or giving couples space to heal old hurts and rebuild trust. Whatever your phase of life and story look like, this is a space to pause, process, and create real change.
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
            Therapy isn&rsquo;t for quick &ldquo;fixes&rdquo;&mdash;it&rsquo;s more of a space where you can slow down, tune in to your emotions (while tuning out the world), and connect the dots between your past and your <span className="italic font-serif text-[#5f8d8a] font-normal">present.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed">
            <div className="space-y-6">
              <p>
                Therapy isn&rsquo;t for quick &ldquo;fixes&rdquo;&mdash;it&rsquo;s more of a space where you can slow down, tune in to your emotions (while tuning out the world), and connect the dots between your past and your present. I&rsquo;ll ask questions that might surprise you, but always with the goal of helping you see the bigger picture of your life. Together, we&rsquo;ll explore what&rsquo;s working, what isn&rsquo;t, and what needs to shift so you can feel more like yourself again. My style is warm, curious, and collaborative&mdash;I know you&rsquo;re the expert on your life, and I see myself as your teammate in this process. We can go deep and intense, or we can take it slow&mdash;you get to set the pace.
              </p>
            </div>

            <div className="space-y-6 flex flex-col justify-between">
              <p>
                What I love most about this work is helping people discover that their feelings aren&rsquo;t something to avoid or fear&mdash;they&rsquo;re meant to be felt. It&rsquo;s in that environment of honesty and safety that real growth happens. Whether you&rsquo;re navigating motherhood, stepping into independence as a teen, or rebuilding connection in your relationship, my goal is for you to feel supported, understood, and more confident in who you are and where you&rsquo;re headed.
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
