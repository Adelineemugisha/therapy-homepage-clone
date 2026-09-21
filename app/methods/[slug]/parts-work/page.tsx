"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../../../components/Navbar.jsx";
import Footer from "../../../components/Footer.jsx";

export default function PartsWorkMethod() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const criteriaList = [
    "Complex trauma or PTSD",
    "Chronic feelings of self-doubt or self-criticism",
    "Anxiety, depression, or emotional overwhelm",
    "Difficulty managing anger or other intense emotions",
    "Conflicts in relationships or struggles with intimacy"
  ];

  const helperTherapists = [
    {
      name: "Jennifer Anderson",
      img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
      path: "/team/jennifer-anderson"
    },
    {
      name: "Heather Williams-Baumgart",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
      path: "/team/heather-williams"
    }
  ];

  const faqs = [
    {
      question: "How do I know if Parts Work Therapy is the right fit for me?",
      answer: "Parts Work Therapy can be a strong fit if you feel stuck in repeated patterns, internal conflict, or unresolved trauma. It is often helpful for people who notice self-criticism, emotional overwhelm, relationship difficulties, or a sense of being disconnected from themselves."
    },
    {
      question: "Do I need to talk about my trauma in detail for this to help?",
      answer: "No. Parts Work Therapy is collaborative and gentle. You do not need to recount every painful detail in order to begin healing. We work at a pace that feels safe, and the focus is often on helping you understand, soothe, and build trust with the different parts of yourself."
    },
    {
      question: "What can Parts Work Therapy help me achieve?",
      answer: "This approach can help you reduce self-judgment, understand internal conflicts, and build more compassion for yourself. Over time, many clients feel more grounded, emotionally regulated, and able to live from a place of greater wholeness and connection."
    },
    {
      question: "Is Parts Work Therapy only for people with a diagnosis?",
      answer: "Not at all. Many people benefit from Parts Work Therapy without having a formal diagnosis. It can support anyone who feels pulled in different directions, overwhelmed by emotions, or longing for a deeper sense of internal harmony."
    }
  ];

  return (
    <div className="w-full bg-[#f7f5f0] text-[#2c2a29] font-sans antialiased selection:bg-[#5f8d8a]/20">
      <Navbar />

      <main className="w-full">
        <section className="w-full max-w-7xl mx-auto px-8 py-16 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-start">
            <div className="w-full max-w-[440px] aspect-[4/5] bg-neutral-200 overflow-hidden relative shadow-sm rounded-xs">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80"
                alt="Person on beach shoreline reflecting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 pt-4">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#5e5a57] font-semibold">
              IN-PERSON &amp; ONLINE PARTS WORK THERAPY IN NEWBURY PARK &amp; ACROSS CA
            </p>
            <h1 className="text-4xl md:text-6xl text-[#2c2a29] font-serif font-light leading-[1.15] tracking-tight">
              Connect with every<br />
              part of yourself. Heal<br />
              from within.<br />
              Rediscover <span className="italic font-serif text-[#5f8d8a] font-normal">wholeness.</span>
            </h1>
            <p className="text-sm md:text-base text-[#5e5a57] font-light max-w-md leading-relaxed pt-2">
              Experience the profound healing potential of Parts Work Therapy to help you reconnect, find balance, and cultivate inner peace.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="text-xs uppercase tracking-[0.25em] text-[#2c2a29] border-b border-[#2c2a29] pb-1 hover:text-[#5f8d8a] hover:border-[#5f8d8a] transition font-semibold"
              >
                Book an Appointment
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full px-8 py-20 md:px-16 bg-[#e6dfd5]/20 border-t border-[#e6dfd5]/60">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-12">
              <h2 className="text-2xl md:text-[34px] font-serif font-light text-[#2c2a29] leading-snug tracking-tight pb-6">
                Our team specializes in Parts Work Therapy for children, teens, and adults.
              </h2>
            </div>
            <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-12 text-sm text-[#5e5a57] font-light leading-relaxed">
              <div>
                <p>
                  You might feel like parts of you are in conflict, or like certain aspects of your personality keep reacting in ways that make life feel hard. Perhaps you have parts that push you toward perfectionism, self-criticism, or avoidance. These internal struggles can stem from past experiences, especially trauma. If you feel pulled in opposing directions or want to understand why some parts of you feel protectively reactive, Parts Work Therapy could offer relief and a path forward.
                </p>
              </div>
              <div>
                <p>
                  At Conejo Valley Counseling, we help you develop a relationship with each part of yourself so you can learn to work together harmoniously. We draw from a variety of models, including Internal Family Systems (IFS), Developmental Needs Meeting Strategy (DNMS), Trauma-Informed Stabilization Treatment (TIST), and Ego State Therapy. Our goal is to guide you toward compassion, understanding, and, ultimately, integration within yourself.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-8 py-24 md:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-neutral-200/50">
          <div className="lg:col-span-5 w-full">
            <div className="w-full aspect-[4/3] bg-neutral-200 overflow-hidden shadow-xs rounded-xs">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
                alt="Hands resting softly outdoors"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed pl-0 lg:pl-6">
            <h3 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29] leading-tight">
              Understanding Parts Work Therapy
            </h3>
            <p>
              Parts Work Therapy is based on the idea that everyone has different "parts" or sub-personalities, each with its own perspective, needs, and goals. In many people, especially those who have experienced trauma, parts can take on specific roles to protect, defend, or cope. For example, you might have parts that push you to "keep it together" at all costs, or parts that retreat or avoid when emotions feel overwhelming. These parts are not bad—they are adaptations that once helped you survive.
            </p>
            <p>
              Parts Work Therapy helps you create an internal environment where these parts feel seen, understood, and appreciated. By learning to communicate with and listen to each part, you can foster self-compassion and allow for transformative healing.
            </p>
          </div>
        </section>

        <section className="w-full px-8 py-24 md:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-neutral-200/50 bg-[#fdfbf7]/40">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-4">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#5e5a57] font-semibold tracking-widest">
                IS PARTS WORK RIGHT FOR YOU?
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29] leading-tight">
                Parts Work Therapy can be particularly effective if you’re dealing with:
              </h2>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8 text-sm text-[#5e5a57] font-light leading-relaxed pl-0 lg:pl-6">
            <div className="space-y-6">
              {criteriaList.map((item, idx) => (
                <div key={idx} className="border-b border-neutral-200 pb-5">
                  <h4 className="text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold text-[#2c2a29]">{item}</h4>
                </div>
              ))}
            </div>

            <p className="pt-4 text-sm md:text-[15px] font-light leading-relaxed">
              If you feel disconnected from yourself or as though internal struggles are holding you back, Parts Work Therapy can help you understand and reconcile these experiences. This approach allows you to heal wounds that may feel disconnected from the present but continue to impact your life in profound ways.
            </p>
          </div>
        </section>

        <section className="w-full px-8 py-20 bg-white border-t border-b border-neutral-200/40">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed order-2 lg:order-1">
              <h3 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29] leading-tight">
                What to <span className="italic font-serif text-[#5f8d8a] font-normal">expect</span>
              </h3>
              <p>
                Parts Work Therapy is a collaborative, self-paced process. In our sessions, we create a compassionate, non-judgmental space where you can safely connect with and explore each part of yourself. By engaging with different parts and understanding their origins, you can build an internal sense of harmony and resilience. Many clients find relief and a renewed sense of wholeness as they gain insight into why certain patterns emerged and how to meet their needs in healthier ways.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-block text-xs uppercase tracking-[0.25em] text-[#2c2a29] font-semibold border-b border-[#2c2a29] pb-0.5 hover:text-[#5f8d8a] hover:border-[#5f8d8a] transition"
                >
                  Book an Appointment
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="w-full max-w-[380px] aspect-[4/5] overflow-hidden relative shadow-sm rounded-xs">
                <img
                  src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80"
                  alt="Calm reflective person outdoors"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-[#fdfbf7] border-t border-b border-neutral-200/40 px-8 py-24 md:px-16">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29] tracking-tight">
                Therapists who can help
              </h2>
              <p className="text-xs md:text-sm text-[#5e5a57] font-light max-w-2xl leading-relaxed">
                Our therapists are extensively trained in Parts Work Therapy, utilizing a variety of parts models to help you cultivate self-compassion and inner harmony.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl pt-4">
              {helperTherapists.map((therapist, index) => (
                <div key={index} className="bg-white border border-neutral-100 p-6 flex flex-col items-center text-center space-y-4 shadow-2xs rounded-xs">
                  <div className="w-full aspect-[4/5] bg-neutral-200 overflow-hidden relative rounded-xs">
                    <img src={therapist.img} alt={therapist.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-serif text-xl font-normal text-[#2c2a29] tracking-tight">{therapist.name}</h3>
                  <Link
                    href={therapist.path}
                    className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#2c2a29] border-b border-[#2c2a29]/60 pb-0.5 hover:text-[#5f8d8a] hover:border-[#5f8d8a] transition tracking-widest"
                  >
                    Read Bio
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full h-[55vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80"
              alt="Coastal landscape"
              className="w-full h-full object-cover filter brightness-[0.5] contrast-[1.01]"
            />
          </div>
          <div className="relative z-10 max-w-3xl text-center px-6 text-white space-y-6">
            <p className="text-2xl md:text-4xl font-serif font-light leading-relaxed tracking-wide drop-shadow-xs">
              Reclaim your inner harmony with Parts Work Therapy.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-block border border-white px-8 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-medium text-white hover:bg-white hover:text-[#2c2a29] transition duration-300 min-w-[140px]"
              >
                Book Now
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full px-8 py-24 md:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-2">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#5e5a57] font-semibold tracking-widest">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29] leading-tight">
              Frequently asked<br />questions
            </h2>
          </div>
          <div className="lg:col-span-8 border-t border-neutral-200 divide-y divide-neutral-200/70 w-full">
            {faqs.map((faq, index) => (
              <div key={index} className="py-5 w-full transition-all duration-200">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between text-left py-1 font-sans text-xs md:text-sm tracking-wide text-[#2c2a29] hover:text-[#5f8d8a] cursor-pointer focus:outline-none group"
                >
                  <span className="font-semibold text-[#2c2a29] group-hover:text-[#5f8d8a] transition-colors">{faq.question}</span>
                  <span className="text-lg font-light text-neutral-400 group-hover:text-[#5f8d8a] transition-colors">{openFaq === index ? "−" : "＋"}</span>
                </button>
                {openFaq === index && (
                  <div className="pt-3 pb-2 text-sm text-[#5e5a57] font-light leading-relaxed max-w-2xl whitespace-pre-line">
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
