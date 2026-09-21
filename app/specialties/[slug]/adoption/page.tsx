'use client';

import { useState } from "react";
import Link from "next/link";
import Navbar from "../../../components/Navbar.jsx";
import Footer from "../../../components/Footer.jsx";

export default function AdoptionSpecialty() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const parentChallenges = [
    "Your child's behavior is increasingly challenging, and you're out of ideas on what to do next.",
    "You notice your child pushing you away, no matter how much love and support you offer.",
    "The stress is affecting your whole family, and it's hard to hold everything together.",
    "You're losing your patience more than you'd like, and it's frustrating to feel so out of control.",
    "You want to help your child heal from their trauma but don't know where to start.",
    "The things that worked with your other kids—or how you were raised—just aren't working here, and you're not sure what to do."
  ];

  const adopteeChallenges = [
    "You don't know why relationships feel so hard or why you keep pulling away from people.",
    "Anxiety or depression makes it difficult to feel like yourself.",
    "It's hard to understand your emotions or make sense of them.",
    "You don't feel like you belong anywhere or fit in.",
    "You feel anger toward your adoptive parents and the weight of being treated as a \"project\" instead of just a person.",
    "You're searching for a sense of identity and belonging."
  ];

  const outcomesList = [
    "DEVELOP MORE KINDNESS AND UNDERSTANDING TOWARD YOURSELF AND OTHERS.",
    "FIND EASIER WAYS TO HANDLE STRESSFUL MOMENTS AND FEEL MORE IN CONTROL.",
    "MAKE SENSE OF DIFFICULT EMOTIONS OR BEHAVIORS THAT DON'T ALWAYS SEEM TO HAVE AN EXPLANATION.",
    "GET A CLEARER SENSE OF WHO YOU ARE AND FEEL MORE CONFIDENT IN YOURSELF."
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
      question: "I'm an adoptive parent. How can therapy help me support my child?",
      answer: "Therapy can help adoptive parents understand the challenges their children might face, including attachment issues, trauma, and identity development. We can work with you to develop effective parenting strategies, create a supportive home environment, and address any concerns that arise in your relationship with your child."
    },
    {
      question: "As an adult adoptee can therapy help if I don't know much about my birth family or adoption story?",
      answer: "Yes. Therapy provides a safe space to explore the complex feelings, curiosity, or grief that can exist around unknown biological histories, help you map personal narrative tracks, and support you in making meaning out of your identity framework on your own terms."
    },
    {
      question: "I'm an adult adoptee. Can therapy help with struggles related to identity or belonging?",
      answer: "Absolutely. Many adoptees experience a persistent sense of feeling out of place or navigating a split sense of loyalty. We focus on building internal self-trust, sorting through complex relational attachment tracks, and helping you anchor a solid sense of personal identity."
    },
    {
      question: "What if I feel grief or loss related to my adoption or biological family separation?",
      answer: "Grief and loss are completely normal, valid dimensions of the adoption experience that can surface at any stage of lifecycle transitions. We work gently alongside you using trauma-informed somatic and emotional processing tools to honor and heal these deep-seated separation wounds."
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
                alt="Individual looking out over a beach sand shoreline boundary" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 pt-4">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#5e5a57] font-semibold">
              IN-PERSON & ONLINE COUNSELING IN NEWBURY PARK & ACROSS CA
            </p>
            <h1 className="text-4xl md:text-6xl text-[#2c2a29] font-serif font-light leading-[1.15] tracking-tight">
              Support to help you<br />
              <span className="italic font-serif text-[#5f8d8a] font-normal">navigate</span> the unique<br />
              journey of adoption.
            </h1>
            <p className="text-sm md:text-base text-[#5e5a57] font-light max-w-md leading-relaxed pt-2">
              Learn how to honor every story—yours, your child's, and the one you're creating together.
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
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-[38px] font-serif font-light text-[#2c2a29] tracking-tight leading-tight">
                Adoption has lasting impacts on everyone involved.
              </h2>
              <p className="text-xs uppercase tracking-[0.15em] text-[#5e5a57] font-semibold">
                MAYBE YOU'RE HERE BECAUSE...
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start pt-4">
              <div className="bg-white p-8 border border-neutral-200/40 rounded-sm shadow-2xs space-y-6">
                <h3 className="font-serif text-2xl text-[#2c2a29] font-normal">Adoptive Parents</h3>
                <div className="space-y-4">
                  {parentChallenges.map((challenge, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-[#5e5a57] font-light leading-relaxed">
                      <span className="text-[#5f8d8a] text-xs pt-1">✓</span>
                      <span>{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 border border-neutral-200/40 rounded-sm shadow-2xs space-y-6">
                <h3 className="font-serif text-2xl text-[#2c2a29] font-normal">Adoptee teens & adults</h3>
                <div className="space-y-4">
                  {adopteeChallenges.map((challenge, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-[#5e5a57] font-light leading-relaxed">
                      <span className="text-[#5f8d8a] text-xs pt-1">✓</span>
                      <span>{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center pt-12 max-w-2xl mx-auto space-y-4">
              <h4 className="text-xl md:text-2xl font-serif text-[#2c2a29] font-light">
                You're likely looking to make sense of what this experience means for you.
              </h4>
              <p className="text-sm text-[#5e5a57] font-light leading-relaxed">
                Maybe you want to understand why certain feelings keep showing up, or just trying to figure out how to feel more connected to yourself and the people you care about. We want you to find peace and get to the heart of what’s going on—all while working to build stronger relationships along the way.
              </p>
            </div>
          </div>
        </section>

        <section className="relative w-full h-[55vh] flex items-end justify-start overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://unsplash.com?w=1200&h=660&fit=crop" 
              alt="Adoption Support Session" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 text-left px-8 md:px-16 py-12 text-white max-w-2xl space-y-2">
            <p className="text-3xl md:text-4xl font-serif font-light leading-snug drop-shadow-xs">
              Sometimes the road to connection is full of detours.
            </p>
          </div>
        </section>

        <section className="w-full px-8 py-20 bg-white border-t border-b border-neutral-200/40">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="space-y-4">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#5e5a57] font-semibold tracking-widest">
                HOW WE CAN HELP
              </p>
              <h3 className="text-2xl md:text-[32px] font-serif font-light text-[#2c2a29] tracking-tight leading-snug max-w-4xl">
                We believe adoptive families deserve compassionate support and a safe, understanding space to share their stories.
              </h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-neutral-100 pt-8">
              <div className="lg:col-span-5 w-full flex justify-center lg:justify-start">
                <div className="w-full max-w-[400px] aspect-[4/5] overflow-hidden relative shadow-sm rounded-xs">
                  <img 
                    src="https://unsplash.com" 
                    alt="Adoptive family members laughing together on the beach sand line" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-6 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed pl-0 lg:pl-6">
                <p>
                  For parents, our therapists will help you understand your child's behaviors through the lens of neuroscience. Often, what looks like defiance or manipulation is actually your child's brain responding to stress, trauma, or unmet needs. When you begin to see these behaviors as survival instincts, the focus can shift from punishment to curiosity and understanding. From there, we guide you with practical tools to help your child feel safe, calm, and understood—because when they feel that kind of support, they can begin to grow and thrive.
                </p>
                <p>
                  For teens and adult adoptees, we focus on the grief and loss that often come with adoption. Being separated from biological parents—regardless of age—is a profound trauma, and for many, that's layered with experiences in foster care or orphanages. These wounds can affect emotions, relationships, and the way you move through the world. We use approaches like attachment-focused EMDR and parts work to help you process that pain, work through struggles with emotions, and create stronger, healthier connections.
                </p>
                <p className="font-medium text-[#2c2a29]">
                  No matter where you’re at in this process—and whatever you’re feeling—we’re here to support you with care, understanding, and tools that really work.
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

          </div>
        </section>

        <section className="w-full px-8 py-24 md:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-[#2c2a29] leading-snug">
              Specialized therapy <br />
              for adoption can <br />
              <span className="italic font-serif text-[#5f8d8a] font-normal">help you...</span>
            </h2>
          </div>
          
          <div className="lg:col-span-8 space-y-8 text-sm text-[#5e5a57] font-light leading-relaxed border-b border-neutral-100 pb-8">
            {outcomesList.map((item, idx) => (
              <div key={idx} className="border-b border-neutral-200 pb-5">
                <h4 className="text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold text-[#2c2a29]">{item}</h4>
              </div>
            ))}
            
            <p className="pt-4 text-sm md:text-[15px] font-light max-w-2xl leading-relaxed">
              We know that when adoption or foster care has been a part of your life, complex and deeply personal emotions come with it. That’s why we pride ourselves on being therapists who understand not only where you’re coming from but where you can go from here. Therapy can support you in these unique challenges and pave the way for more fulfilling relationships, personal understanding, and peace with the past.
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
                As a team, we’re experienced in helping individuals and families through the complexities of adoption and foster care. We’re confident in our ability to help you navigate the emotional terrain that comes along this journey.
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
              alt="Adoptive parent family holding hands running on coast ocean strip backdrop" 
              className="w-full h-full object-cover filter brightness-[0.5] contrast-[1.01]"
            />
          </div>
          <div className="relative z-10 max-w-3xl text-center px-6 text-white space-y-6">
            <p className="text-2xl md:text-4xl font-serif font-light leading-relaxed tracking-wide drop-shadow-xs">
              Unpack your emotions. Embrace your identity. Build stronger connections.
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
      </main>
      <Footer />
    </div>
  );
}