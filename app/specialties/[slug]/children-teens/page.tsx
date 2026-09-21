'use client';

import { useState } from "react";
import Link from "next/link";
import Navbar from "../../../components/Navbar.jsx";
import Footer from "../../../components/Footer.jsx";

export default function ChildrenTeensSpecialty() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const childrenSigns = [
    "Frequent emotional outbursts",
    "Changes in school performance",
    "Difficulty making friends",
    "Separation anxiety",
    "Sleep problems",
    "Aggressive behavior",
    "Excessive worrying",
    "Physical complaints",
    "Trouble focusing",
    "Defiant behavior",
    "Social withdrawal",
    "Regression in behaviors"
  ];

  const teensSigns = [
    "Mood swings",
    "Academic struggles",
    "Social isolation",
    "Anxiety symptoms",
    "Sleep changes",
    "Risk-taking behaviors",
    "Low self-esteem",
    "Family conflicts",
    "Substance experimentation",
    "Digital media struggles",
    "Identity confusion",
    "Emotional overwhelm"
  ];

  const familySupports = [
    "Parent-child sessions to strengthen relationships and communication",
    "Whole family sessions to address systemic challenges and improve family functioning",
    "Parent-only coaching sessions to develop effective parenting strategies and support"
  ];

  const outcomesList = [
    "DEVELOP EMOTIONAL AWARENESS AND REGULATION.",
    "BUILD STRONGER RELATIONSHIPS WITH FAMILY AND PEERS.",
    "IMPROVE SELF-ESTEEM AND CONFIDENCE.",
    "LEARN LIFELONG COPING SKILLS."
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
      question: "How do I know if my child needs therapy?",
      answer: "If you've noticed concerning changes in your child's behavior, mood, relationships, or academic performance that persist for more than a few weeks, therapy might be helpful. Even if you're unsure, an initial consultation can help determine if professional support would benefit your child and family."
    },
    {
      question: "What can I expect in the first session?",
      answer: "The initial session is primarily an information-gathering consultation. We typically meet with the parents or guardians first to explore family history, map out developmental milestones, and clarify specific behavioral tracks before introducing the child or teenager directly into the therapeutic space."
    },
    {
      question: "How will I be involved in my child's treatment?",
      answer: "Parental involvement is foundational to sustainable growth. While protecting age-appropriate boundaries and safety trust for teenagers, we keep parents updated through periodic coaching check-ins, systemic family updates, and practical behavioral resources for the home."
    },
    {
      question: "How long does therapy typically last?",
      answer: "Therapy cycles vary depending on the complexity of the systemic needs or trauma variables. Some families find lasting relief and actionable strategies within 12 to 16 targeted sessions, while other tracks benefit from longer-term development support."
    },
    {
      question: "Do you coordinate with schools or other professionals?",
      answer: "Yes. With explicit parental consent and signed release documentation, we proactively coordinate with school counselors, learning specialists, and pediatricians to build a cohesive, unified support network around your child."
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
                alt="Child standing on beach front with a seagull" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 pt-4">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#5e5a57] font-semibold">
              IN-PER-SON & ONLINE CHILDREN & TEEN COUNSELING IN NEWBURY PARK & ACROSS CA
            </p>
            <h1 className="text-4xl md:text-6xl text-[#2c2a29] font-serif font-light leading-[1.15] tracking-tight">
              Supporting young<br />
              hearts and minds<br />
              through life's<br />
              <span className="italic font-serif text-[#5f8d8a] font-normal">challenges.</span>
            </h1>
            <p className="text-sm md:text-base text-[#5e5a57] font-light max-w-md leading-relaxed pt-2">
              Specialized therapy for children, teens, and their families.
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
                You've noticed the changes in your child or teen, and you're worried.
              </h2>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-[#5e5a57] font-light leading-relaxed">
              <div className="space-y-4">
                <p>
                  As a parent, it's heart-wrenching to watch your child or teenager struggle. Maybe you've noticed changes in their behavior, mood, or relationships that concern you. The happy, engaged child you once knew might seem distant, anxious, or angry, and you're not sure how to help them navigate these challenges.
                </p>
                <p>
                  For your younger child, you might notice they're having trouble at school, experiencing frequent meltdowns, or struggling to make friends. Their teachers might be reporting behavioral concerns, or you're seeing increased anxiety, sadness, or difficulty managing emotions at home. Perhaps family dynamics have become strained, and the usual parenting approaches aren't working anymore.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  With your teenager, the challenges might look different—withdrawing from family and activities they once enjoyed, showing signs of anxiety or depression, or dealing with intense peer pressure and social media stress. You might be worried about their academic performance, their relationships, or the growing tension at home. The communication between you might have broken down, leaving you feeling helpless and disconnected from your teen.
                </p>
                <p>
                  Whether you're seeking support for a child or a teenager, you want to help them thrive—not just cope. You're looking for guidance that considers your whole family's needs while providing your young one with the tools and support they need to flourish.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-8 py-24 md:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-neutral-200/50">
          <div className="lg:col-span-4 flex flex-col justify-between">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29] leading-tight">
              Children <br />
              often show <br />
              <span className="italic font-serif text-[#5f8d8a] font-normal">like...</span>
            </h2>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 pt-2">
            {childrenSigns.map((sign, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm md:text-[14.5px] text-[#5e5a57] font-light leading-snug">
                <span className="text-[#5f8d8a] text-xs pt-0.5">✓</span>
                <span>{sign}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full px-8 py-24 md:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-neutral-200/40 bg-[#fdfbf7]/40">
          <div className="lg:col-span-4 flex flex-col justify-between">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29] leading-tight">
              Teens <br />
              often show <br />
              <span className="italic font-serif text-[#5f8d8a] font-normal">like...</span>
            </h2>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 pt-2">
            {teensSigns.map((sign, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm md:text-[14.5px] text-[#5e5a57] font-light leading-snug">
                <span className="text-[#5f8d8a] text-xs pt-0.5">✓</span>
                <span>{sign}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full px-8 py-20 bg-white border-t border-b border-neutral-200/40">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="space-y-4">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#5e5a57] font-semibold tracking-widest">
                HOW WE CAN HELP
              </p>
              <h3 className="text-2xl md:text-[32px] font-serif font-light text-[#2c2a29] tracking-tight leading-snug max-w-4xl">
                We believe in age-appropriate, engaging approaches that meet your child or teen exactly where they are developmentally, while involving you appropriately in their healing journey.
              </h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-neutral-100 pt-8">
              <div className="lg:col-span-5 w-full flex justify-center lg:justify-start">
                <div className="w-full max-w-[400px] aspect-[4/3] overflow-hidden relative shadow-sm rounded-xs">
                  <img 
                    src="https://unsplash.com" 
                    alt="Play therapy clinical context" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-4 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed pl-0 lg:pl-6">
                <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#2c2a29]">FOR CHILDREN</h4>
                <p>
                  Through play therapy, art therapy, and expressive approaches, we create a safe space where your child can process their emotions and experiences in ways that feel natural to them. These therapeutic techniques allow children to communicate and heal through their language of play and creativity, rather than relying solely on words. We help them develop emotional awareness, build coping skills, and strengthen their sense of self-worth.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-neutral-100 pt-12">
              <div className="lg:col-span-7 space-y-6 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed order-2 lg:order-1">
                <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#2c2a29]">FOR TEENS</h4>
                <p>
                  We use evidence-based approaches including Cognitive Behavioral Therapy (CBT) and Dialectical Behavior Therapy (DBT) to help teens navigate their challenges. Through practical coping tools, interpersonal skills development, mindfulness techniques, and motivational interviewing, we support teens in building emotional resilience, improving relationships, and developing a stronger sense of identity.
                </p>

                <div className="space-y-4 pt-6 border-t border-neutral-100">
                  <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#2c2a29]">FAMILY SUPPORT</h4>
                  <p className="text-[14px]">
                    Understanding that family dynamics play a crucial role in your child's well-being, we offer:
                  </p>
                  <div className="space-y-3 pl-1">
                    {familySupports.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-[14px]">
                        <span className="text-[#5f8d8a] text-xs pt-0.5">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="pt-4 text-[14px]">
                    Our goal is to create a comprehensive support system that nurtures your child's emotional growth while providing you with the tools and guidance you need as a parent.
                  </p>
                </div>
                
                <div className="pt-6">
                  <Link 
                    href="/contact" 
                    className="inline-block text-xs uppercase tracking-[0.25em] text-[#2c2a29] font-semibold border-b border-[#2c2a29] pb-0.5 hover:text-[#5f8d8a] hover:border-[#5f8d8a] transition"
                  >
                    Book an Appointment
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 w-full flex flex-col gap-6 justify-center lg:justify-end order-1 lg:order-2">
                <div className="w-full max-w-[400px] aspect-[4/3] bg-neutral-100 overflow-hidden relative shadow-sm rounded-xs">
                  <img src="https://unsplash.com" alt="Teens and parents tracking paths" className="w-full h-full object-cover" />
                </div>
                <div className="w-full max-w-[400px] aspect-[4/3] bg-neutral-100 overflow-hidden relative shadow-sm rounded-xs">
                  <img src="https://unsplash.com" alt="Family embracing together close up" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="w-full px-8 py-24 md:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-[#2c2a29] leading-snug">
              Therapy can help <br />
              your child or teen...
            </h2>
          </div>
          
          <div className="lg:col-span-8 space-y-8 text-sm text-[#5e5a57] font-light leading-relaxed border-b border-neutral-100 pb-8">
            {outcomesList.map((item, idx) => (
              <div key={idx} className="border-b border-neutral-200 pb-5">
                <h4 className="text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold text-[#2c2a29]">{item}</h4>
              </div>
            ))}
            
            <p className="pt-4 text-sm md:text-[15px] font-light max-w-2xl leading-relaxed">
              As your child or teen develops these skills and insights, you’ll see positive changes not just in them, but in your whole family system.
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
                Our therapists specialize in working with children, teens, and families, using age-appropriate, evidence-based approaches to support growth and healing.
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
              alt="Family walking hand in hand along beach skyline" 
              className="w-full h-full object-cover filter brightness-[0.5] contrast-[1.01]"
            />
          </div>
          <div className="relative z-10 max-w-3xl text-center px-6 text-white space-y-6">
            <p className="text-2xl md:text-4xl font-serif font-light leading-relaxed tracking-wide drop-shadow-xs">
              Every step forward is worth celebrating, for you and your child. We'll be cheering you on each step of the way.
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
