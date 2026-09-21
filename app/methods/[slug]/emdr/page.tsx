'use client';

import { useState } from "react";
import Link from "next/link";
import Navbar from "../../../components/Navbar.jsx";
import Footer from "../../../components/Footer.jsx";

export default function EmdrTherapyMethod() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const outcomesList = [
    "LET GO OF BEHAVIORS THAT NO LONGER SERVE YOU.",
    "FIND LASTING RELIEF AND PEACE.",
    "FEEL PRESENT AND ENGAGED IN YOUR OWN LIFE.",
    "CREATE AND MAINTAIN MEANINGFUL RELATIONSHIPS.",
    "TALK TO YOURSELF IN A CARING AND COMPASSIONATE WAY.",
    "HEAL FROM THE EFFECTS OF TRAUMATIC EXPERIENCES LIKE SEXUAL ASSAULT OR ACCIDENTS."
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
      question: "How do I know if EMDR is the right fit for me?",
      answer: "If you're struggling with distressing memories, anxiety, or feelings that impact your day-to-day, EMDR could be a great option for you. It's particularly useful if you've found that traditional talk therapy hasn't provided the relief you're looking for. The best way to find out if EMDR is right for you is to talk with a therapist trained in this method. They can help you assess your needs and see if this approach fits."
    },
    {
      question: "How many sessions of EMDR will I need?",
      answer: "The number of sessions varies depending on the complexity of the trauma and individual processing speeds. Some clients experience profound shifts within 8 to 12 sessions for a single-incident trauma, while complex or developmental trauma tracks typically benefit from longer-term integrated care."
    },
    {
      question: "Can I do EMDR and regular therapy?",
      answer: "Yes, absolutely. EMDR handles specific trauma reprocessing cycles efficiently and acts as a powerful accelerator when woven alongside your foundational talk therapy support systems."
    },
    {
      question: "Can I see my regular therapist and one of your EMDR therapists?",
      answer: "Yes. We frequently offer adjunctive EMDR processing options. You can continue seeing your primary outside therapist for regular talk therapy sessions while stepping into our office specifically to complete targeted EMDR processing tracks safely."
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
                alt="Individual holding shell to ear grounding along ocean coast beach" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 pt-4">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#5e5a57] font-semibold">
              IN-PERSON & ONLINE EMDR THERAPY IN NEWBURY PARK & ACROSS CA
            </p>
            <h1 className="text-4xl md:text-6xl text-[#2c2a29] font-serif font-light leading-[1.15] tracking-tight">
              Restore balance.<br />
              Reconnect with<br />
              yourself. Regain<br />
              <span className="italic font-serif text-[#5f8d8a] font-normal">control.</span>
            </h1>
            <p className="text-sm md:text-base text-[#5e5a57] font-light max-w-md leading-relaxed pt-2">
              Experience the transformative impact of EMDR therapy to help you heal, grow, and embrace a new beginning.
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
                Our team specializes in Eye Movement Desensitization and Reprocessing (EMDR) for children, teens, & adults.
              </h2>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-[#5e5a57] font-light leading-relaxed">
              <div className="space-y-4">
                <p>
                  You might be here because past experiences keep affecting your daily life—you're having flashbacks, heightened anxiety, or difficulty sleeping. It could be a previous accident or a devastating betrayal that still weighs heavy on your mind, even though you thought you were \"over it.\" You might be starting to wonder if there's something from your childhood or upbringing that's making relationships or connecting with others feel so hard.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Consider this an opportunity to start fresh and tap into your brain's innate ability to heal. At Conejo Valley Family Counseling, we're here to help you process and move through the difficult challenges of your past so they can finally be released. We believe you deserve a fulfilling, vibrant life, and we're committed to helping you get there.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-8 py-24 md:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-neutral-200/50">
          <div className="lg:col-span-5 w-full">
            <div className="w-full aspect-[4/5] bg-neutral-200 overflow-hidden shadow-xs rounded-xs">
              <img 
                src="https://unsplash.com" 
                alt="Individual in white dress walking out along sand shore baseline view" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-6 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed pl-0 lg:pl-6">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29] leading-tight">
              Your brain has been helping you cope for years. Let’s give it what it needs to <span className="italic font-serif text-[#5f8d8a] font-normal">truly</span> heal.
            </h2>
            <div className="w-20 h-[1px] bg-[#2c2a29]/30 my-4" />
            <h3 className="text-2xl font-serif text-[#2c2a29] font-normal pt-2">What is EMDR?</h3>
            <p>
              Sometimes, when we go through an overwhelming or painful experience, our brains don't fully process what happened, leaving us feeling stuck, anxious, or triggered by memories. This means that trauma can linger in both the mind and body, making it hard to move forward or feel at peace.
            </p>
            <p>
              Eye Movement Desensitization and Reprocessing (EMDR) is an evidence-based therapy that helps your brain address, process, and correctly \"store\" the memory in a way that decreases the feelings associated with it. Instead of just talking about the memories, EMDR uses guided eye movements or other forms of bilateral and rhythmic stimulation (like tapping) to bridge both sides of your brain and address the trauma at its source. This allows you to let go of intense emotions or negative beliefs attached to an experience, so it doesn't feel as overwhelming or disruptive anymore. This isn't just a bandaid fix—it's a powerful method that allows both brain and body to truly heal so you can feel a sense of freedom and relief from the burdens you've been carrying.
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
        </section>
     
        <section className="w-full px-8 py-24 md:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-neutral-200/50 bg-[#fdfbf7]/40">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29] leading-tight">
                EMDR therapy <br />
                can <span className="italic font-serif text-[#5f8d8a] font-normal">help you...</span>
              </h2>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-8 text-sm text-[#5e5a57] font-light leading-relaxed pl-0 lg:pl-6">
            <div className="space-y-6">
              {outcomesList.map((item, idx) => (
                <div key={idx} className="border-b border-neutral-200 pb-5">
                  <h4 className="text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold text-[#2c2a29]">{item}</h4>
                </div>
              ))}
            </div>
            
            <p className="pt-4 text-sm md:text-[15px] font-light leading-relaxed">
              By dedicating time to exploring your experiences and the impact of dissociation, you can gradually learn to navigate your triggers with greater ease and fewer feelings of disconnection. This is your chance to create a new narrative—one that isn’t defined by dissociation or your past trauma. Through therapy, you can cultivate a sense of safety and agency that allows you to live fully in the present and embrace a life rich with purpose and fulfillment.
            </p>
          </div>
        </section>

        <section className="w-full bg-[#fdfbf7] border-t border-b border-neutral-200/40 px-8 py-24 md:px-16">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29] tracking-tight">
                Therapists who can help
              </h2>
              <p className="text-xs md:text-sm text-[#5e5a57] font-light max-w-2xl leading-relaxed">
                Our therapists are trained in EMDR and ready to help you process difficult memories or experiences. Whether you're struggling with trauma, anxiety, or just feeling \"stuck,\" we're here to guide you through.
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

        <section className="relative w-full h-[55vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://unsplash.com" 
              alt="Two beach chairs under a large umbrella ocean scenic view" 
              className="w-full h-full object-cover filter brightness-[0.5] contrast-[1.01]"
            />
          </div>
          <div className="relative z-10 max-w-3xl text-center px-6 text-white space-y-6">
            <p className="text-2xl md:text-4xl font-serif font-light leading-relaxed tracking-wide drop-shadow-xs">
              Go beyond talk therapy to let go of the past & embrace the future.
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
        <Footer />
        </main>
        </div>
    );
    }

