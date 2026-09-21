'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';

export default function JenniferAndersonProfile() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSpecialtiesOpen, setIsSpecialtiesOpen] = useState(false);
  const [isModalitiesOpen, setIsModalitiesOpen] = useState(false);

  const specialtiesList = [
    "Trauma and C-PTSD",
    "Dissociation and Dissociative Identity Disorder (DID)",
    "Attachment and Relational Trauma",
    "Adoption",
    "Special Needs Parenting"
  ];

  const modalitiesList = [
    "IFS-informed Parts Work",
    "Attachment Resourcing",
    "Inner Child Work",
    "EMDR",
    "Somatic Therapy",
    "Trauma-Informed Stabilization Treatment (TIST)",
    "Developmental Needs Meeting Strategy (DNMS)",
    "Brainspotting",
    "Trauma Regulation and Integration Process (TRIP)",
    "Neuroaffective Relational Model (NARM)",
    "Accelerated Experiential Dynamic Psychotherapy (AEDP)"
  ];

  const faqs = [
    {
      question: "What led you to be a therapist?",
      answer: "My personal journey and witnessing the transformative power of deep healing work fueled my lifelong passion for helping individuals pick up their blocks, process historic relational challenges, and reclaim their authentic stories safely."
    },
    {
      question: "What do you enjoy doing when you are not working?",
      answer: "I love spending time together with my family—traveling, going out to eat, and going to Hawaii as often as we get the chance!"
    },
    {
      question: "What is a book that has been inspiring to you as a therapist?",
      answer: "The Gifts of Imperfection by Brené Brown."
    },
    {
      question: "What's your favorite way to recharge after a busy week?",
      answer: "I enjoy the simple things, like sitting on the beach, going for a drive, or spending time with my husband and friends."
    }
  ];

  return (
    <div className="w-full bg-[#f7f5f0] text-[#2c2a29] font-sans antialiased">
      <Navbar />

      <main className="w-full max-w-7xl mx-auto px-8 py-20 md:px-16 space-y-24">

        {/* PORTRAIT & HEADER BLOCK */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8">
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-start">
            <div className="w-full max-w-[400px] aspect-[4/5] bg-neutral-200 overflow-hidden relative shadow-sm rounded-xs">
              <img
                src="https://unsplash.com"
                alt="Jennifer Anderson Profile Presentation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight">
                Jennifer Anderson
              </h1>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#5e5a57] font-semibold tracking-widest pt-1">
                Licensed Marriage & Family Therapist #46111
              </p>
            </div>

            <h2 className="text-2xl md:text-[32px] font-serif font-light leading-[1.3] text-[#2c2a29] max-w-xl">
              It&rsquo;s time for a future unburdened by the past so you can live <span className="italic font-serif text-[#5f8d8a] font-normal">fully</span> in the present.
            </h2>

            <div className="space-y-6 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed max-w-2xl">
              <p>
                I specialize in complex trauma, dissociation, and special needs parenting. Clients often come to me feeling like what they&rsquo;ve been doing just isn&rsquo;t working anymore, hitting a wall of burnout and overwhelm. They&rsquo;ve tried countless strategies to improve their relationships, be better parents, or simply move forward, but nothing seems to bring the change they desperately seek. I&rsquo;m here to help them find that change.
              </p>
              <p>
                Living with complex trauma can lead to feelings of deep-seated anxiety, confusion, and emotional numbness. Many of my clients describe a sense of disconnection from themselves and their surroundings, often struggling to navigate daily life while managing overwhelming emotions. This dissociation can make it difficult to engage fully in their life and relationships, which only amplifies feelings of guilt and inadequacy.
              </p>
            </div>

            {/* INTERACTIVE TOGGLE BLOCK ROWS */}
            <div className="w-full max-w-xl border-t border-neutral-300 pt-1 mt-8">

              {/* Specialties Accordion Row */}
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

              {/* Modalities Accordion Row */}
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

        {/* NARRATIVE SECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed max-w-4xl lg:ml-[41.6%]">
          <div className="lg:col-span-12 space-y-6">
            <p>
              Being a parent is difficult, especially when you&rsquo;re raising a child with unique challenges of their own. As a parent of two special needs kids myself, I understand the challenges and emotions that come with that role. I&rsquo;ve been in the trenches&mdash;the exhaustion, the isolation, and the overwhelming responsibility of advocating for your child. I&rsquo;m here to help you feel seen and validated so we can move through whatever you&rsquo;re feeling, together.
            </p>
            <p>
              It&rsquo;s important to acknowledge the depth of these feelings. You are not alone in your experiences, and there is hope for healing and connection. Together, we can explore the complexities of your emotions and uncover pathways to peace and empowerment.
            </p>
          </div>
        </section>

        {/* PRIORITIES & VALUES SECTION */}
        <section className="w-full pt-16 border-t border-neutral-200/60 space-y-12">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29] leading-tight max-w-2xl">
            One of my first priorities in our work together is helping you feel <span className="italic font-serif text-[#5f8d8a] font-normal">safe.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed">
            <div className="space-y-6">
              <p>
                If you&rsquo;re feeling overwhelmed or struggling with intense emotions, we&rsquo;ll work together to manage those first, creating a foundation of support and stability. I&rsquo;ll also help you understand how the trauma you&rsquo;ve been through can affect both your brain and body. This allows you to begin understanding and recognizing all the different parts of yourself&mdash;your roles, your anxious parts, and where feelings are coming from. Together, we&rsquo;ll move through your feelings and uncover the hard experiences you&rsquo;ve been through at a pace that feels right for you.
              </p>
              <p>
                I&rsquo;m here to listen, validate your stress, and help you feel seen in what you&rsquo;re going through, whether you&rsquo;re a parent of special needs, someone who&rsquo;s experiencing dissociation, or trying to move on from the past. We&rsquo;ll work on coping tools for the day-to-day challenges, learning when it&rsquo;s okay to delegate or seek outside help.
              </p>
            </div>

            <div className="space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <p>
                  I also believe in the power of effort and commitment within the therapy experience. If you&rsquo;re willing to show up and do the work&mdash;just like I am&mdash;you can see profound changes in your life and understand how your past has shaped the way you see and feel about yourself.
                </p>
                <p>
                  With over 20 years of experience in this field, I&rsquo;ve had the privilege of working with people from all walks of life. My lived experiences empower me to connect with you in a genuine, personal way. With this kind of support, you can heal, regain confidence, and feel empowered in a way that maybe hasn&rsquo;t seemed possible before. It&rsquo;s okay to start where you are and take things one step at a time&mdash;you don&rsquo;t have to do it alone. I will meet you wherever you are, help lift you up, and guide you toward a brighter future ahead.
                </p>
              </div>

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

        {/* PERSONALIZED FAQ DROPDOWNS BLOCK */}
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
