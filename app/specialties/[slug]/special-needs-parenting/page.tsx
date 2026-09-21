'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';

export default function SpecialNeedsParentingSpecialty() {
  const [openFaq, setOpenFaq] = useState(null);

  const painPoints = [
    { title: "Isolation", desc: "It feels like nobody truly understands what you’re going through." },
    { title: "Exhaustion", desc: "The endless meetings, IEPs, and appointments leave you drained." },
    { title: "Disconnection", desc: "The overwhelming demands of caregiving are creating a distance between you and other loved ones." },
    { title: "Doubt", desc: "You may constantly question what your child needs, wondering if you’re making the right choices." },
    { title: "Judgment", desc: "If your child has behavioral challenges, you might feel scrutinized by others who don’t understand your child’s situation." },
    { title: "Worry", desc: "Concerns about what the future looks like for your child and for you as a caregiver weigh heavily on your mind." }
  ];

  const outcomes = [
    "Feel calmer & more confident in your role as a parent",
    "Understand that you’re not alone in this",
    "Navigate complex emotions like guilt, frustration, & fear",
    "Learn how to advocate for your child’s needs",
    "Develop a stronger sense of connection with your child",
    "Learn about your child’s unique strengths",
    "Find more moments of joy & connection",
    "Manage difficult days without feeling overwhelmed"
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
      question: "I don't know how to balance caring for my other children and my child who has special needs. Can therapy help?",
      answer: "Finding that balance can feel impossible, and it’s normal to feel torn in different directions. In therapy, we’ll explore ways to manage your time, expectations, and emotions so that each of your children gets what they need—including prioritizing what you need, too. We’ll work together to make sure you don’t feel like you’re constantly choosing one child over another."
    },
    {
      question: "My child's needs are so unique. Can therapy really help?",
      answer: "Yes. Our focus is entirely centered on validating your specific caregiving ecosystem. We combine clinical methods like Acceptance and Commitment Therapy (ACT) with functional coordination tools to help you construct balanced boundaries, alleviate systemic pressure loops, and build sustainable confidence."
    },
    {
      question: "How am I going to do this forever?",
      answer: "This is one of the heaviest weights special needs parents carry. We work with you to break down long-term uncertainty tracks into manageable, immediate intervals. By building a reliable support infrastructure and practicing proactive nervous system tracking, forever becomes less daunting."
    },
    {
      question: "What kinds of special needs do you have experience with?",
      answer: "Our practitioners carry extensive, firsthand lived experience and focused training across neurodevelopmental variations, spectrum parameters, physical complex tracking conditions, and chronic behavioral obstacles, matching support directly to your family's unique dynamics."
    }
  ];

  return (
    <div className="w-full bg-[#f7f5f0] text-[#2c2a29] font-sans antialiased selection:bg-[#5f8d8a]/20">
      <Navbar />

      <main className="w-full">
        
        <section className="w-full max-w-7xl mx-auto px-8 py-16 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-start">
            <div className="w-full max-w-[400px] aspect-[3/4] bg-neutral-200 overflow-hidden relative shadow-sm rounded-xs">
              <img 
                src="https://unsplash.com" 
                alt="Parent carrying child on shoulders at beach" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 pl-0 lg:pl-6">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#5e5a57] font-semibold">
              Counseling for Special Needs Parents in Newbury Park & Across CA
            </p>
            <h1 className="text-4xl md:text-6xl text-[#2c2a29] font-serif font-light leading-[1.15] tracking-tight">
              Caring for a special<br />
              needs child is hard<br />
              work. <span className="italic font-serif text-[#5f8d8a] font-normal">You need</span><br />
              support, too.
            </h1>
            <p className="text-sm md:text-base text-[#5e5a57] font-light max-w-md leading-relaxed pt-2">
              We’re here to help parents feel less isolated and more empowered with useful tools and greater confidence in themselves and their child’s future.
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
              <h2 className="text-2xl md:text-[32px] font-serif font-light text-[#2c2a29] leading-snug tracking-tight max-w-sm">
                When your child has special needs, you often go through life with more questions than answers.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed">
              <div className="space-y-4 font-serif text-[#2c2a29] text-base md:text-lg border-b border-neutral-200 pb-6 font-normal tracking-wide">
                <p>“AM I DOING ENOUGH?”</p>
                <p>“WHAT IF THIS DOESN’T WORK?”</p>
                <p>“WHY DID THIS HAPPEN TO ME?”</p>
              </div>
              <p className="pt-2">
                You’re navigating a complex landscape of emotions and challenges that others simply can’t understand. It’s not uncommon to feel overwhelmed, jealous, or even angry, especially when you see other parents with seemingly “normal” or typical children.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full px-8 py-24 md:px-16 max-w-7xl mx-auto space-y-16">
          <h3 className="text-2xl md:text-3xl font-serif font-light text-[#2c2a29]">
            You’re not alone if you’ve felt:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {painPoints.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm md:text-[14.5px] text-[#5e5a57] font-light leading-relaxed">
                <span className="text-[#5f8d8a] text-xs pt-1">✓</span>
                <p>
                  <strong className="text-[#2c2a29] font-medium">{item.title}:</strong> {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full px-8 py-20 md:px-16 bg-[#e6dfd5]/10 border-t border-b border-neutral-200/40">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-2xl md:text-3xl font-serif font-light text-[#2c2a29] leading-snug tracking-tight max-w-md">
                These feelings can manifest in many ways, but you don’t have to carry them on your own anymore.
              </h3>
              <p className="text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed max-w-md">
                We believe everything you’re experiencing is valid—you don’t have to pretend things are better than they are. You’re navigating a path that not every parent has to walk, and you deserve support and understanding on that journey.
              </p>
            </div>
            <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
              <div className="w-full max-w-[440px] aspect-[1.1] overflow-hidden relative shadow-sm rounded-xs">
                <img 
                  src="https://unsplash.com" 
                  alt="Family walking hand in hand along ocean waterline" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-8 py-24 md:px-16 max-w-7xl mx-auto space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-[40px] font-serif font-light text-[#2c2a29] leading-tight max-w-3xl tracking-tight">
              Even when you feel like you’re just surviving, you’re doing <span className="italic font-serif text-[#5f8d8a] font-normal">so much more</span> than you realize for your child.
            </h2>
          </div>
        <section className="w-full px-8 py-20 md:px-16 bg-white border-t border-b border-neutral-200/40">
          <div className="max-w-7xl mx-auto space-y-12">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#5e5a57] font-semibold tracking-widest">
              OUR APPROACH
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-7 space-y-8 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed order-2 lg:order-1">
                <div className="space-y-4">
                  <p>
                    You are not alone—that is the core of what we’re here to remind you of again and again. We know you love your child, but this path isn’t always easy. In the midst of a life where there are often no days—or even hours—off, we want to offer a place of respite and rest that’s just for you.
                  </p>
                  <p>
                    At Conejo Valley Family Counseling we draw from our lived experiences and extensive training in helping you navigate the world as the parent of a special needs child. Our goal is to create a welcoming space where you feel truly understood and seen. Rather than having to explain the ins and outs of each part of your experience—the IEP meetings, the outbursts, the appointments—you’ll be sitting down with someone who already “gets” it.
                  </p>
                  <p>
                    As much as we are here to validate your experience and provide a place to express your emotions, we’ll also work together to help you take action. What needs to happen, and what can be set aside? What can you delegate, and what can you let go of? What kind of help does your child need to manage their behavior? It’s easy to get overwhelmed with services, and sometimes that can leave both you and your child feeling stretched too thin. We’ll help you identify essential resources and find the right professionals to join your support network.
                  </p>
                  <p>
                    Building and nurturing your relationships—with your partner, friends, and support groups—is also key. These connections are vital to your wellbeing, and we encourage you to pour into them. Throughout this process, we’ll focus on self-compassion, using Acceptance and Commitment Therapy (ACT) and stress management skills to help you find a sense of balance in your life.
                  </p>
                  <p>
                    Ultimately, we want to empower you to embrace your identity as a special needs parent—helping you feel confident in advocating for both your child and yourself.
                  </p>
                </div>

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
                <div className="w-full max-w-[420px] aspect-[3/4] overflow-hidden relative shadow-sm rounded-xs">
                  <img 
                    src="https://unsplash.com" 
                    alt="Special Needs Parent Support Session" 
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
              We can help <br />
              <span className="italic font-serif text-[#5f8d8a] font-normal">you...</span>
            </h2>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 pt-2">
            {[
              "Feel calmer & more confident in your role as a parent",
              "Understand that you’re not alone in this",
              "Navigate complex emotions like guilt, frustration, & fear",
              "Learn how to advocate for your child’s needs",
              "Develop a stronger sense of connection with your child",
              "Learn about your child’s unique strengths",
              "Find more moments of joy & connection",
              "Manage difficult days without feeling overwhelmed"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-[#5e5a57] font-light leading-snug">
                <span className="text-[#5f8d8a] text-xs pt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full bg-[#fdfbf7] border-t border-b border-neutral-200/40 px-8 py-24 md:px-16">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29] tracking-tight">
                Therapists who can help
              </h2>
              <p className="text-xs md:text-sm text-[#5e5a57] font-light max-w-2xl leading-relaxed">
                Our therapists are highly trained and experienced in helping clients process & heal from trauma. No matter what you're facing, we're here to guide and support you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-4xl pt-4">
              {[
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
              ].map((therapist, index) => (
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
              alt="Family running on beach sand horizon landscape" 
              className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.01]"
            />
          </div>
          <div className="relative z-10 max-w-3xl text-center px-6 text-white space-y-6">
            <p className="text-2xl md:text-4xl font-serif font-light leading-relaxed tracking-wide drop-shadow-xs">
              Every step forward is worth celebrating, for you and your child.
            </p>
            <p className="text-sm opacity-90 font-light tracking-wide -mt-2">
              We’ll be cheering you on each step of the way.
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
            {[
              {
                question: "I don't know how to balance caring for my other children and my child who has special needs. Can therapy help?",
                answer: "Finding that balance can feel impossible, and it's normal to feel torn in different directions. In therapy, we'll explore ways to manage your time, expectations, and emotions so that each of your children gets what they need—including prioritizing what you need, too. We'll work together to make sure you don't feel like you're constantly choosing one child over another."
              },
              {
                question: "My child's needs are so unique. Can therapy really help?",
                answer: "Yes. Therapy provides a dedicated framework to process the specific clinical variables and emotional weight of caregiving. We center our approach around actionable coping skills, family tracking histories, and structural boundary support tailored precisely to your family's blueprint."
              },
              {
                question: "How am I going to do this forever?",
                answer: "Thinking about long-term caregiving can lead to profound existential fatigue and burnout. We help you shift focus away from permanent future anxiety toward manageable micro-rhythms, strengthening your internal resilience trackers and systemic support systems."
              },
              {
                question: "What kinds of special needs do you have experience with?",
                answer: "Our multidisciplinary specialized practitioners bring comprehensive extensive training and lived experiences covering neurodevelopmental tracking, sensory processing variances, chronic medical complexities, and intensive emotional regulation support."
              }
            ].map((faq, index) => (
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
        <Footer />
      </main>
    </div>
  );
}