'use client';

import { useState } from "react";
import Link from "next/link";
import Navbar from "../../../components/Navbar.jsx";
import Footer from "../../../components/Footer.jsx";

export default function DissociationSpecialty() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const dissociationSigns = [
    "Not having a solid sense of identity",
    "Flashbacks",
    "Self-destructive urges",
    "Constant chatter in your mind",
    "Suicidal ideation",
    "Addiction",
    "Nightmares",
    "Feeling like you're losing time",
    "Negative inner critic",
    "Conflicting parts of yourself",
    "Being misunderstood or like you're \"faking it\"",
    "Stuck without a way forward"
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
      question: "How do I know if dissociation is happening to me?",
      answer: "Dissociation frequently manifests as feeling entirely disconnected from your body, your emotions, or your physical surroundings. You might look at your life from the outside, notice substantial gaps in your working memory tracks, or experience a disorienting sensation where your mind feels filled with conflicting inner voices or a heavy, persistent fog."
    },
    {
      question: "What if I dissociate during therapy?",
      answer: "Dissociating during a therapeutic session is a completely natural defense mechanism of an overloaded nervous system. Our trauma-informed practitioners are highly trained to recognize subtle shifts and will immediately use gentle somatic grounding, temperature modulations, and deep orienting tools to help you safely anchor back into the present moment."
    },
    {
      question: "Can dissociation be cured?",
      answer: "Rather than seeking a complete extraction or 'cure,' our framework focuses on deep integration, system safety, and somatic resolution. By calming your baseline nervous activation tracks and mapping inner structures, the protective urge to fragment fades, letting you move through daily life with lasting presence and agency."
    },
    {
      question: "I have heard that all of my parts need to integrate. Is that true?",
      answer: "Not necessarily. Modern parts work models (like Internal Family Systems) place the highest clinical priority on internal harmony, mutual cooperation, and system respect. Integration means removing structural walls and historic burdens so your core Self can lead safely, rather than forcing parts to disappear."
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
                alt="Therapeutic Grounding Portrait Block" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 pt-4">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#5e5a57] font-semibold">
              Dissociation & Dissociative Identity Disorder Therapists in Newbury Park
            </p>
            <h1 className="text-4xl md:text-6xl text-[#2c2a29] font-serif font-light leading-[1.15] tracking-tight">
              Lift the fog &<br />
              embrace newfound<br />
              <span className="italic font-serif text-[#5f8d8a] font-normal">clarity.</span>
            </h1>
            <p className="text-sm md:text-base text-[#5e5a57] font-light max-w-md leading-relaxed pt-2">
              Learn how to honor and embrace all the parts of yourself so you can feel more grounded in the present.
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
                Life doesn’t have to look like this anymore. With our support, you can find the tools to return to the present and reclaim who you are.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed">
              <p>
                Feeling like you're losing time is incredibly disorienting, especially when your mind is filled with conflicting voices. The hurtful thoughts from different parts of you make it hard to trust yourself, and nightmares and flashbacks can create a sense of being trapped. The self-destructive urges—self-harm, addiction, or thoughts of suicide—that often accompany dissociation are exhausting to manage day after day.
              </p>
              <p>
                We recognize that the thought of getting to know the different parts of yourself can be very overwhelming. As a team with extensive experience in helping our clients with dissociation and Dissociative Identity Disorder (DID), we aim to support you in finding stability again in all areas of your life—work, home, relationships, and within yourself.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full px-8 py-24 md:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-neutral-200/50">
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29] leading-tight">
              Sometimes <br />
              <span className="italic font-serif text-[#5f8d8a] font-normal">dissociation</span> <br />
              can look like...
            </h2>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 pt-2">
            {dissociationSigns.map((sign, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm md:text-[14.5px] text-[#5e5a57] font-light leading-snug">
                <span className="text-[#5f8d8a] text-xs pt-0.5">✓</span>
                <span>{sign}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full px-8 py-20 md:px-16 bg-white border-t border-b border-neutral-200/40">
          <div className="max-w-7xl mx-auto space-y-12">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#5e5a57] font-semibold tracking-widest">
              How We Can Help
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

              <div className="lg:col-span-7 space-y-8 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed order-2 lg:order-1">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-serif font-light text-[#2c2a29] tracking-tight leading-snug">
                    We recognize that each client's experience with dissociation is unique and deeply personal.
                  </h3>
                  <p>
                    Everyone enters therapy at a different stage—we will meet you where you are and support you each step of the way. Some individuals come to us unaware that they are experiencing dissociative disorders (DD), often just recognizing trauma or memory gaps. For these clients, we begin with foundational psychoeducation, helping them understand dissociation and how it manifests in their lives.
                  </p>
                </div>
                
              <div className="space-y-4 pt-4 border-t border-neutral-100">
                <h4 className="uppercase tracking-[0.12em] text-[#2c2a29] font-semibold text-xs tracking-widest">
                  Others come to therapy with a more developed understanding of their dissociative experiences...
                </h4>
                <p>
                  Whether through self-diagnosis or insights from previous therapists. In this case, we build on your existing knowledge and guide you through a process of parts mapping, helping you to explore the different facets of your identity. This discovery process allows you to dive deeply into the root, function, and role of each part of yourself.
                </p>
                <p>
                  As we work together, we'll incorporate elements of EMDR, Brainspotting, and somatic therapy to address your different struggles. These methods in particular are focused on helping you address the specific struggles and effects of your trauma. We approach everything we do with the goal of helping you feel relief, find healing, and discover solutions to your challenges. We don’t want you to be plagued by the memories or experiences of your past and we’re committed to helping you feel supported in the journey toward healing.
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
            </div>

            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="w-full max-w-[420px] aspect-[3/4] overflow-hidden relative shadow-sm rounded-xs">
                <img 
                  src="https://unsplash.com" 
                  alt="Walking along beach landscape asset" 
                  className="w-full h-full object-cover"
                />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full px-8 py-24 md:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-[#2c2a29] leading-snug">
              Therapy for <br />
              dissociation can <br />
              <span className="italic font-serif text-[#5f8d8a] font-normal">help you...</span>
            </h2>
          </div>
          
          <div className="lg:col-span-8 space-y-8 text-sm text-[#5e5a57] font-light leading-relaxed">
            <div className="border-b border-neutral-200 pb-5 space-y-1">
              <h4 className="text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold text-[#2c2a29]">Feel more present and engaged in your daily life.</h4>
            </div>
            <div className="border-b border-neutral-200 pb-5 space-y-1">
              <h4 className="text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold text-[#2c2a29]">Accept that you’re made up of different parts (and that’s okay!).</h4>
            </div>
            <div className="border-b border-neutral-200 pb-5 space-y-1">
              <h4 className="text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold text-[#2c2a29]">Build a stronger sense of who you are.</h4>
            </div>
            <div className="border-b border-neutral-200 pb-5 space-y-1">
              <h4 className="text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold text-[#2c2a29]">Reduce triggers that remind you of past trauma.</h4>
            </div>
            
            <p className="pt-4 text-sm md:text-[15px] font-light max-w-2xl leading-relaxed">
              By dedicating time to exploring your experiences and the impact of dissociation, you can gradually learn to navigate your feelings with greater ease and fewer feelings of disconnection. This is your chance to create a new narrative—one that isn’t defined by dissociation or your past trauma. Through therapy, you can cultivate a sense of safety and agency that allows you to live fully in the present and embrace a life rich with purpose and fulfillment.
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
                Our therapists are skilled in working with dissociation, helping you feel more present and connected to yourself and the people in your life. We're here to support you by zoning in on your experiences and giving you the space to discover a sense of groundedness.
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
              alt="Ocean white beach umbrella scenery" 
              className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.01]"
            />
          </div>
          <div className="relative z-10 max-w-3xl text-center px-6 text-white space-y-6">
            <p className="text-2xl md:text-4xl font-serif font-light leading-relaxed tracking-wide drop-shadow-xs">
              Your story is valid, and we’re here to help you believe in its truth. Together, we can navigate your experiences and empower you to heal.
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
                  <span className="font-semibold text-[#2c2a29] group-hover:text-[#5f8d8a] transition-colors">
                    {faq.question}
                  </span>
                  <span className="text-lg font-light text-neutral-400 group-hover:text-[#5f8d8a] transition-colors">
                    {openFaq === index ? "−" : "＋"}
                  </span>
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
                    