'use client';

import { useState } from "react";
import Link from "next/link";
import Navbar from "../../../components/Navbar.jsx";
import Footer from "../../../components/Footer.jsx";

export default function BrainspottingMethod() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefitsList = [
    "PERSISTENT ANXIETY OR DEPRESSION",
    "A SENSE OF BEING \"STUCK\" OR UNABLE TO MOVE FORWARD",
    "TRAUMATIC EXPERIENCES THAT STILL FEEL \"ACTIVE\" OR UNRESOLVED",
    "PHYSICAL SYMPTOMS OF TRAUMA, SUCH AS CHRONIC PAIN OR TENSION",
    "EMOTIONAL BLOCKS OR DIFFICULTY CONNECTING WITH CERTAIN FEELINGS"
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
      question: "How do I know if Brainspotting Therapy is the right fit for me?",
      answer: "If you're struggling with unresolved trauma, emotional pain, or a feeling of being \"stuck,\" Brainspotting could be a powerful tool for healing. It's particularly helpful for those who feel traditional talk therapy hasn't reached the depths of their emotional or physical pain."
    },
    {
      question: "Do I have to talk about my trauma in Brainspotting Therapy?",
      answer: "No. Unlike traditional talk therapies that require you to narrate every detail of a traumatic event, Brainspotting processes data down at a deep subcortical neuro-biological level. You can process the stored physical and emotional blocks completely without having to talk extensively about the memory if it feels too overwhelming."
    },
    {
      question: "Can I work with another therapist while doing Brainspotting as adjunctive therapy?",
      answer: "Yes, absolutely. Brainspotting functions beautifully as an adjunctive therapeutic tracker alongside your primary talk therapy cycles to accelerate deep trauma somatic integration tracks safely."
    }
  ];

  return (
    <div className="w-full bg-[#f7f5f0] text-[#2c2a29] font-sans antialiased selection:bg-[#5f8d8a]/20">
      <Navbar />

      <main className="w-full">

        <section className="w-full max-w-7xl mx-auto px-8 py-16 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[440px] aspect-[4/5] bg-neutral-200 overflow-hidden relative shadow-sm rounded-xs">
              <img 
                src="https://unsplash.com" 
                alt="Individual in knit sweater looking out towards beach waves line" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 pt-4">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#5e5a57] font-semibold">
              IN-PERSON & ONLINE BRAINSPOTTING THERAPY IN NEWBURY PARK & ACROSS CA
            </p>
            <h1 className="text-4xl md:text-6xl text-[#2c2a29] font-serif font-light leading-[1.15] tracking-tight">
              Access deep healing.<br />
              Unlock stored<br />
              trauma. Transform<br />
              from <span className="italic font-serif text-[#5f8d8a] font-normal">within.</span>
            </h1>
            <p className="text-sm md:text-base text-[#5e5a57] font-light max-w-md leading-relaxed pt-2">
              Experience the powerful healing potential of Brainspotting Therapy to help you process trauma, find relief, and reclaim a balanced sense of self.
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
                Our team specializes in Brainspotting Therapy for children, teens, & adults.
              </h2>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-[#5e5a57] font-light leading-relaxed">
              <div className="space-y-4">
                <p>
                  If you're feeling stuck or overwhelmed by past experiences, Brainspotting may offer the targeted healing you've been looking for. Brainspotting is a body-centered approach that goes beyond traditional talk therapy, helping you access and process deep-seated trauma or emotional pain. This therapy acknowledges that trauma often isn't fully processed in the mind alone but also in the body, where it can impact your responses, emotions, and daily life.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  At Conejo Valley Family Counseling, we use Brainspotting to guide you in connecting with the parts of your brain that hold unresolved trauma, allowing for deep, lasting healing. This innovative approach leverages specific eye positions, known as \"brainspots,\" to help you access, process, and release stored emotions, memories, and beliefs that may have felt impossible to reach through other therapeutic methods.
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
                alt="Birds flying along beach shore frame" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-6 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed pl-0 lg:pl-6">
            <h3 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29] leading-tight">
              What is Brainspotting?
            </h3>
            <p>
              Brainspotting is based on the idea that specific points in your field of vision, or \"brainspots,\" are directly connected to areas in your brain where unprocessed trauma may be stored. By focusing on a particular brainspot, we can bypass the more analytical parts of your brain and reach the core of emotional pain and trauma. This allows you to work through memories, release stuck emotions, and experience relief in a powerful, non-verbal way.
            </p>
          </div>
        </section>

        <section className="w-full px-8 py-24 md:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-neutral-200/50 bg-[#fdfbf7]/40">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-4">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#5e5a57] font-semibold tracking-widest">
                IS BRAINSPOTTING RIGHT FOR YOU?
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29] leading-tight">
                Brainspotting Therapy can be especially beneficial if you’re dealing with:
              </h2>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-8 text-sm text-[#5e5a57] font-light leading-relaxed pl-0 lg:pl-6">
            <div className="space-y-6">
              {benefitsList.map((item, idx) => (
                <div key={idx} className="border-b border-neutral-200 pb-5">
                  <h4 className="text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold text-[#2c2a29]">{item}</h4>
                </div>
              ))}
            </div>
            
            <p className="pt-4 text-sm md:text-[15px] font-light leading-relaxed">
              If traditional therapies haven’t brought the relief you need, Brainspotting can offer a more direct, body-centered approach to accessing and processing trauma. It’s a valuable tool for anyone who feels disconnected from their own emotions or weighed down by experiences that feel difficult to fully resolve.
            </p>
          </div>
        </section>

        <section className="w-full px-8 py-20 bg-white border-t border-b border-neutral-200/40">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed order-2 lg:order-1">
              <h3 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29] leading-tight">
                Understanding Brainspotting Therapy
              </h3>
              <div className="space-y-6">
                {benefitsList.map((item, idx) => (
                  <div key={idx} className="border-b border-neutral-200 pb-5">
                    <h4 className="text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold text-[#2c2a29]">{item}</h4>
                  </div>
                ))}
              </div>
              
              <p className="pt-4 text-sm md:text-[15px] font-light leading-relaxed">
                If traditional therapies haven't brought the relief you need, Brainspotting can offer a more direct, body-centered approach to accessing and processing trauma. It's a valuable tool for anyone who feels disconnected from their own emotions or weighed down by experiences that feel difficult to fully resolve.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full px-8 py-20 bg-white border-t border-b border-neutral-200/40">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed order-2 lg:order-1">
              <h3 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29] leading-tight">
                What to <span className="italic font-serif text-[#5f8d8a] font-normal">expect</span>
              </h3>
              <p>
                Brainspotting Therapy is a deeply personal, client-led process. During sessions, we'll work together to identify a "brainspot"—a specific point in your visual field that allows you to access deeply held emotions or memories. As you focus on this spot, you'll have the opportunity to notice and process any sensations, emotions, or thoughts that arise. Brainspotting provides a safe way to access parts of yourself that may have felt closed off or overwhelming, fostering deep, transformational healing. Many clients report feeling more calm, clear, and connected after Brainspotting sessions, as they release stored trauma and regain a sense of peace.
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
                  src="https://unsplash.com" 
                  alt="Tall organic palm tree frame asset" 
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
                Our therapists are extensively trained in Brainspotting Therapy, using body-centered approaches to help you process trauma and find deep, lasting relief.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-4xl pt-4">
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
                    {openFaq === index ? '' : '＋'}
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

      </main>

      <Footer />
    </div>
  );
}