'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';

export default function AnxietyDepressionSpecialty() {
  const [openFaq, setOpenFaq] = useState(null);

  const anxietySigns = [
    "Constant worry",
    "Racing thoughts",
    "Panic attacks",
    "Physical tension",
    "Sleep difficulties",
    "Avoiding situations",
    "Racing heart",
    "Perfectionism",
    "Social fears",
    "Specific phobias",
    "Difficulty concentrating",
    "Restlessness"
  ];

  const depressionSigns = [
    "Loss of interest",
    "Overwhelming fatigue",
    "Changes in sleep",
    "Feeling hopeless",
    "Isolation",
    "Changes in appetite",
    "Low motivation",
    "Difficulty concentrating",
    "Feeling worthless",
    "Emotional numbness",
    "Loss of pleasure",
    "Unexplained pain"
  ];

  const outcomesList = [
    "FIND PEACE IN YOUR DAILY LIFE.",
    "DEVELOP EFFECTIVE COPING STRATEGIES.",
    "RECONNECT WITH JOY AND PURPOSE.",
    "BUILD CONFIDENCE AND SELF-COMPASSION."
  ];

  const helperTherapists = [
    {
      name: "Heather Williams-Baumgart",
      img: "https://unsplash.com",
      path: "/team/heather-williams"
    },
    {
      name: "Candace Bletscher",
      img: "https://unsplash.com",
      path: "/team/candace-bletscher"
    }
  ];

  const faqs = [
    {
      question: "How do I know if I need therapy for anxiety or depression?",
      answer: "If you're finding that anxiety or depression is impacting your daily life—affecting your sleep, relationships, work, or ability to enjoy activities—therapy can help. You don't need to be in crisis to seek support. Many people find therapy helpful for managing everyday anxiety and depression, preventing them from becoming more severe."
    },
    {
      question: "What if I'm experiencing both anxiety and depression?",
      answer: "It is incredibly common to experience anxiety and depression simultaneously. They often feed into one another—anxiety's restless energy can lead to physical and emotional exhaustion, which can trigger depressive lows. Our integrative approach uses specialized evidence-based strategies to address both symptoms cohesively."
    },
    {
      question: "What about medication? Do I need it?",
      answer: "Medication can be a supportive structural tool for symptom management, but it is not always necessary. We provide a space to explore your options without judgment. If you are interested in exploring medication tracking, we can collaborate closely with your doctor or psychiatrist to ensure holistic care."
    },
    {
      question: "How long will therapy take?",
      answer: "The duration of your therapeutic journey depends completely on your unique experiences, historical baselines, and goals. Some clients achieve meaningful relief and functional coping skills within 12 to 20 weekly sessions, while others choose longer-term support to process deeper root variables."
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
                alt="Sandy footprints leading towards ocean horizon stones" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 pt-4">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#5e5a57] font-semibold">
              IN-PERSON & ONLINE ANXIETY & DEPRESSION COUNSELING IN NEWBURY PARK & ACROSS CA
            </p>
            <h1 className="text-4xl md:text-6xl text-[#2c2a29] font-serif font-light leading-[1.15] tracking-tight">
              Finding peace in the<br />
              present. Hope for<br />
              <span className="italic font-serif text-[#5f8d8a] font-normal">tomorrow.</span>
            </h1>
            <p className="text-sm md:text-base text-[#5e5a57] font-light max-w-md leading-relaxed pt-2">
              Therapy for adults seeking relief from anxiety, depression, and the weight they carry.
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
                You're tired of feeling like this—caught between overwhelming anxiety and the heavy blanket of depression.
              </h2>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-[#5e5a57] font-light leading-relaxed">
              <div className="space-y-4">
                <p>
                  Some days, your mind races with worst-case scenarios, your heart pounds, and you can't seem to catch your breath. The constant worry is exhausting, yet you can't seem to shut it off. You might find yourself avoiding places, people, or situations that make you anxious, and your world feels like it's getting smaller. The physical symptoms—the racing heart, tight chest, sweating, or panic attacks—make you wonder if something is seriously wrong, even though doctors say you're physically healthy.
                </p>
                <p>
                  Other days, it's like moving through thick fog. Getting out of bed feels impossible, and the simplest tasks seem overwhelming.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  You're struggling to find joy in things you used to love, and maybe you're sleeping too much—or barely sleeping at all. The inner critic in your head keeps telling you that you should be able to \"snap out of it\" or \"just get over it,\" but it's not that simple. You might feel guilty for not being more present with loved ones or for canceling plans, yet the thought of socializing feels completely overwhelming.
                </p>
                <p>
                  Sometimes these feelings take turns; other times, they hit all at once, leaving you feeling trapped between anxiety's restless energy and depression's heavy weight. You might wonder if anyone else understands this contradiction—feeling both overwhelmed and empty at the same time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-8 py-24 md:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-neutral-200/50">
          <div className="lg:col-span-4 flex flex-col justify-between">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29] leading-tight">
              Anxiety <br />
              often looks <br />
              <span className="italic font-serif text-[#5f8d8a] font-normal">like...</span>
            </h2>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 pt-2">
            {anxietySigns.map((sign, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm md:text-[14.5px] text-[#5e5a57] font-light leading-snug">
                <span className="text-[#5f8d8a] text-xs pt-0.5">✓</span>
                <span>{sign}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full px-8 py-24 md:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-neutral-200/40 bg-[#fdfbf7]/40">
          <div className="lg:col-span-4 flex flex-col justify-between">

        <section className="w-full px-8 py-24 md:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-neutral-200/40 bg-[#fdfbf7]/40">
          <div className="lg:col-span-4 flex flex-col justify-between">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29] leading-tight">
              Depression <br />
              often looks <br />
              <span className="italic font-serif text-[#5f8d8a] font-normal">like...</span>
            </h2>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 pt-2">
            {depressionSigns.map((sign, idx) => (
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
                Our approach to anxiety and depression treatment combines immediate relief with long-lasting change. We understand that while you need tools to feel better now, you also want to address the root causes of your struggles for lasting wellness.
              </h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-neutral-100 pt-8">
              <div className="lg:col-span-5 w-full flex justify-center lg:justify-start">
                <div className="w-full max-w-[400px] aspect-[4/5] overflow-hidden relative shadow-sm rounded-xs">
                  <img 
                    src="https://unsplash.com" 
                    alt="Thoughtful individual gazing across shoreline ocean view" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-6 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed pl-0 lg:pl-6">
                <p>
                  Using Cognitive Behavioral Therapy (CBT), we'll work together to understand how your thoughts affect your feelings and behaviors, giving you practical tools to challenge unhelpful thinking patterns and develop new coping strategies. Through Acceptance and Commitment Therapy (ACT), you'll learn to relate differently to difficult thoughts and emotions while moving toward what matters most to you.
                </p>
                <p>
                  We incorporate mindfulness techniques to help you stay grounded in the present moment, rather than being caught up in anxiety about the future or depression about the past. For those struggling with intense emotions or seeking additional coping skills, we draw from Dialectical Behavior Therapy (DBT) to teach practical strategies for emotional regulation and distress tolerance.
                </p>
                <p>
                  Our goal is not just to help you feel better, but to help you build a life that feels meaningful and fulfilling. We'll work at your pace, respecting your unique experiences and needs. Whether you're dealing with specific phobias, social anxiety, panic attacks, or the heavy weight of depression, we'll create a personalized approach that works for you.
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
              Therapy for anxiety <br />
              and depression <br />
              <span className="italic font-serif text-[#5f8d8a] font-normal">can help you...</span>
            </h2>
          </div>
          
          <div className="lg:col-span-8 space-y-8 text-sm text-[#5e5a57] font-light leading-relaxed border-b border-neutral-100 pb-8">
            {outcomesList.map((item, idx) => (
              <div key={idx} className="border-b border-neutral-200 pb-5">
                <h4 className="text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold text-[#2c2a29]">{item}</h4>
              </div>
            ))}
            
            <p className="pt-4 text-sm md:text-[15px] font-light max-w-2xl leading-relaxed">
              As you learn to understand and manage your anxiety and depression, you’ll discover that a different way of living is possible. This is your chance to move from surviving to truly thriving.
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
                Our therapists are extensively trained in treating anxiety and depression, using evidence-based approaches that promote real change and lasting relief.
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
              alt="Mother and son holding hands walking along beach shoreline backdrop" 
              className="w-full h-full object-cover filter brightness-[0.5] contrast-[1.01]"
            />
          </div>
          <div className="relative z-10 max-w-3xl text-center px-6 text-white space-y-6">
            <p className="text-2xl md:text-4xl font-serif font-light leading-relaxed tracking-wide drop-shadow-xs">
              You don't have to face this alone.
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
        <Footer />
      </main>
    </div>
  );
}
