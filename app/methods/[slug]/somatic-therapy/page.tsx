'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';

export default function SomaticTherapyMethod() {
  const [openFaq, setOpenFaq] = useState(null);

  const criteriaList = [
    "TRAUMA OR PTSD",
    "CHRONIC STRESS OR ANXIETY",
    "FEELING DISCONNECTED OR NUMB",
    "OVERWHELM OR EMOTIONAL INSTABILITY",
    "PHYSICAL SYMPTOMS OF EMOTIONAL PAIN, SUCH AS CHRONIC PAIN, FATIGUE, AND DIGESTIVE ISSUES"
  ];

  const helperTherapists = [
    {
      name: "Jennifer Anderson",
      img: "https://unsplash.com",
      path: "/team/jennifer-anderson"
    },
    {
      name: "Heather Williams-Baumgart",
      img: "https://unsplash.com",
      path: "/team/heather-williams"
    }
  ];

  const faqs = [
    {
      question: "How do I know if Somatic Therapy is the right fit for me?",
      answer: "If you find that traditional talk therapy hasn't fully addressed your concerns, Somatic Therapy may provide a different, holistic approach that targets trauma where it's stored—in the body. It's ideal for those who want a deeper connection to their physical and emotional selves."
    },
    {
      question: "What if I don't feel comfortable with body-focused therapy?",
      answer: "Somatic Therapy is a collaborative, gentle process that moves completely at your comfort level. We never rush or force you into physical tracking work. The focus begins with subtle awareness, breathing mechanics, and mild tracking loops designed to let you build safety with your body step-by-step."
    },
    {
      question: "What can Somatic Therapy help me achieve?",
      answer: "By learning to safely process and discharge pent-up stress patterns trapped within your autonomic nervous network, you can experience a profound reduction in physical tension tracks, lowered baseline anxiety, greater emotional balance, and a sustainable sense of internal calm and stability."
    },
    {
      question: "Can I work with another therapist while doing Somatic Therapy as adjunctive support?",
      answer: "Yes, absolutely. Somatic body-centered processing tracks integrate beautifully with your regular talk therapy or relational counseling work to speed up personal breakthroughs and establish total mind-body alignment."
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
                src="https://unsplash.com" 
                alt="Individual standing with open arms along sandy beach frontline" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 pt-4">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#5e5a57] font-semibold">
              IN-PERSON & ONLINE SOMATIC THERAPY IN NEWBURY PARK & ACROSS CA
            </p>
            <h1 className="text-4xl md:text-6xl text-[#2c2a29] font-serif font-light leading-[1.15] tracking-tight">
              Release stored<br />
              tension. Reclaim your<br />
              body. Restore<br />
              <span className="italic font-serif text-[#5f8d8a] font-normal">balance.</span>
            </h1>
            <p className="text-sm md:text-base text-[#5e5a57] font-light max-w-md leading-relaxed pt-2">
              Experience the healing power of Somatic Therapy to help you reconnect with your body, release past traumas, and cultivate a grounded sense of self.
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
            <div className="lg:col-span-5">
              <h2 className="text-2xl md:text-[34px] font-serif font-light text-[#2c2a29] leading-snug tracking-tight">
                Our team specializes in Somatic Therapy for children, teens, & adults.
              </h2>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-[#5e5a57] font-light leading-relaxed">
              <div className="space-y-4">
                <p>
                  If you've been carrying emotional pain, stress, or trauma, you may notice its impact not only on your mind, but also on your body. Perhaps you feel tense, find it hard to relax, or notice physical discomfort when you're anxious or stressed. These bodily reactions are often connected to unprocessed emotional experiences that have become \"stuck\" in your body. Somatic Therapy is designed to address trauma and stress at this physical level, offering a powerful pathway to healing that moves beyond talk therapy alone.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  At Conejo Valley Family Counseling we help you release stored tension and reconnect with your body through a variety of somatic techniques. Our approach combines compassionate, body-centered practices that invite you to tune in to physical sensations, helping you process and release emotional pain that might have been held in your body for years.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-8 py-24 md:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-neutral-200/50">
          <div className="lg:col-span-5 w-full">
            <div className="w-full aspect-[4/3] bg-neutral-200 overflow-hidden shadow-xs rounded-xs">
              <img 
                src="https://unsplash.com" 
                alt="Soft sea foam waves ripple detail" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-6 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed pl-0 lg:pl-6">
            <h3 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29] leading-tight">
              What is Somatic Therapy?
            </h3>
            <p>
              Somatic Therapy focuses on the mind-body connection, recognizing that emotional and psychological distress often manifest physically. In Somatic Therapy, we'll work together to observe and engage with these physical sensations, like tension, pain, or numbness, as they arise. By listening to your body's cues, you can gently release emotional pain and bring your nervous system back into balance. Somatic Therapy is particularly beneficial for individuals who have experienced trauma, as it helps to safely discharge pent-up energy and move toward a sense of calm and stability.
            </p>
          </div>
        </section>

        <section className="w-full px-8 py-24 md:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-neutral-200/50 bg-[#fdfbf7]/40">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-4">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#5e5a57] font-semibold tracking-widest">
                IS SOMATIC THERAPY RIGHT FOR YOU?
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29] leading-tight">
                Somatic Therapy can be especially helpful if you’re struggling with:
              </h2>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-8 text-sm text-[#5e5a57] font-light leading-relaxed pl-0 lg:pl-6">
            <div className="space-y-6">
<div className="pt-4">
                <Link 
                  href="/contact" 
                  className="inline-block text-xs uppercase tracking-[0.25em] text-[#2c2a29] font-semibold border-b border-[#2c2a29] pb-0.5 hover:text-[#5f8d8a] hover:border-[#5f8d8a] transition tracking-widest"
                >
                  Book an Appointment
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full h-[55vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://unsplash.com" 
              alt="An individual walking along scenic beachfront landscape backdrop strip" 
              className="w-full h-full object-cover filter brightness-[0.5] contrast-[1.01]"
            />
          </div>
          <div className="relative z-10 max-w-3xl text-center px-6 text-white space-y-6">
            <p className="text-2xl md:text-4xl font-serif font-light leading-relaxed tracking-wide drop-shadow-xs">
              Reclaim peace and connection with Somatic Therapy.
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
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#5e5a57] font-semibold tracking-widest">
              FAQs
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29] leading-tight">
              Frequently asked <br />
              questions
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
                  <span className="text-lg font-light text-neutral-400 group-hover:text-[#5f8d8a] transition-colors">
                    {openFaq === index ? '−' : '＋'}
                  </span>
                </button>
                
                {openFaq === index && (
                  <div className="pt-3 pb-2 text-sm text-[#5e5a57] font-light leading-relaxed max-w-2xl whitespace-pre-line animate-in fade-in slide-in-from-top-1 duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        );
        }