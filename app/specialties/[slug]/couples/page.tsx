'use client';

import { useState } from "react";
import Link from "next/link";
import Navbar from "../../../components/Navbar.jsx";
import Footer from "../../../components/Footer.jsx";

export default function CouplesSpecialty() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const challengesList = [
    "Constant arguments",
    "Communication breakdowns",
    "Loss of intimacy",
    "Trust issues",
    "Feeling disconnected",
    "Unresolved conflicts",
    "Lack of quality time",
    "Differing life goals",
    "Infidelity recovery",
    "Parenting disagreements",
    "Financial stress",
    "Emotional distance"
  ];

  const sessionsOutcomes = [
    "Improve communication skills, helping you express needs and listen empathetically",
    "Identify and break free from destructive patterns of interaction",
    "Rebuild trust and heal from past hurts",
    "Rekindle intimacy and physical connection",
    "Develop strategies for managing conflicts effectively",
    "Align your values and goals for the future",
    "Strengthen your emotional bond and sense of partnership"
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
      question: "What's the difference between couples therapy and individual therapy?",
      answer: "While individual therapy focuses on personal growth and individual challenges, couples therapy centers on the relationship dynamics between partners. In couples therapy, the relationship itself is the \"client.\" We work on improving communication, understanding patterns of interaction, and fostering emotional connection between partners."
    },
    {
      question: "What are some common misconceptions about couples therapy?",
      answer: "A common misconception is that couples therapy is only for relationships on the brink of divorce or break up. In reality, it is a proactive space to strengthen healthy bonds, improve communication baselines, navigate minor lifecycle transitions, and align core future milestones before structural cracks deepen."
    },
    {
      question: "What if my partner is reluctant to try therapy?",
      answer: "It is very common for one partner to feel hesitant or defensive about entering a therapeutic environment. We invite reluctant partners to come in for just a single foundational framework session to experience our non-judgmental, collaborative approach where neither side is blamed or made into the enemy."
    },
    {
      question: "How can we make the most of our couples therapy sessions?",
      answer: "Maximizing therapeutic progress requires a mutual willingness to show up honestly, step out of defensive communication habits, practice recommended micro-rhythms between sessions, and remain actively committed to investigating structural patterns together."
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
                alt="Couples standing by ocean wave boundary shoreline" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 pt-4">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#5e5a57] font-semibold">
              In-Person & Online Couples Counseling in Newbury Park & Across CA
            </p>
            <h1 className="text-4xl md:text-6xl text-[#2c2a29] font-serif font-light leading-[1.15] tracking-tight">
              Rekindling<br />
              connection.<br />
              Rebuilding trust.<br />
              Rediscovering <span className="italic font-serif text-[#5f8d8a] font-normal">joy.</span>
            </h1>
            <p className="text-sm md:text-base text-[#5e5a57] font-light max-w-md leading-relaxed pt-2">
              Counseling for couples seeking to strengthen their bond, navigate challenges, and create a thriving relationship.
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
                Your relationship deserves more than just survival—it deserves to thrive.
              </h2>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-[#5e5a57] font-light leading-relaxed">
              <div className="space-y-4">
                <p>
                  You remember a time when your relationship felt effortless, filled with joy and deep connection. But lately, it feels like you and your partner are drifting apart or caught in cycles of conflict that leave you both feeling hurt and misunderstood.
                </p>
                <p>
                  Maybe you find yourselves having the same arguments over and over, never really resolving anything. The playfulness and intimacy that once came so naturally now feel forced or absent altogether. You might be dealing with a significant breach of trust, like infidelity, that's left you questioning everything. Or perhaps life transitions—a new baby, an empty nest, career changes—have created distance between you that you don't know how to bridge.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Communication breakdowns leave you feeling unheard and misunderstood. You long for the emotional and physical intimacy you once shared, but don't know how to reconnect. The stress of daily life—work, finances, family obligations—seems to be pulling you apart rather than bringing you closer together. You might even be questioning if you're still right for each other, wondering if it's possible to recapture the love and connection that brought you together in the first place.
                </p>
                <p>
                  Whether you're newlyweds navigating the early years of marriage, long-term partners facing a crossroads, or somewhere in between, the weight of these challenges can feel overwhelming. You want to fight for your relationship, but you're not sure where to start.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-8 py-24 md:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-neutral-200/50">
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29] leading-tight">
              Relationship <br />
              challenges often look <br />
              <span className="italic font-serif text-[#5f8d8a] font-normal">like...</span>
            </h2>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 pt-2">
            {challengesList.map((sign, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm md:text-[14.5px] text-[#5e5a57] font-light leading-snug">
                <span className="text-[#5f8d8a] text-xs pt-0.5">✓</span>
                <span>{sign}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full px-8 py-20 bg-white border-t border-b border-neutral-200/40">
          <div className="max-w-7xl mx-auto space-y-12">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#5e5a57] font-semibold tracking-widest">
              How We Can Help
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 w-full flex justify-center lg:justify-start">
                <div className="w-full max-w-[420px] aspect-[3/4] overflow-hidden relative shadow-sm rounded-xs">
                  <img 
                    src="https://unsplash.com" 
                    alt="Couples splashing dynamically in the sand shore water" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="lg:col-span-7 space-y-8 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed pl-0 lg:pl-6">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-serif font-light text-[#2c2a29] tracking-tight leading-snug">
                    Our approach to couples counseling combines evidence-based methods to help you and your partner reconnect, resolve conflicts, and build a stronger, more fulfilling relationship.
                  </h3>
                  <p className="text-neutral-500 font-medium text-xs uppercase tracking-wider">
                    We primarily use two powerful counseling modalities: the Gottman Method and Emotionally Focused Therapy (EFT).
                  </p>
                </div>
                
                <div className="space-y-6 pt-4 border-t border-neutral-100">
                  <p>
                    Using the Gottman Method, we'll work together to strengthen your friendship, manage conflicts constructively, and create shared meaning in your relationship. This approach helps you build a "sound relationship house" with tools for better communication and emotional connection. We'll focus on enhancing your love maps (understanding each other's inner worlds), fostering fondness and admiration, and turning towards each other in daily interactions.
                  </p>
                  <p>
                    Emotionally Focused Therapy (EFT) helps us identify and transform negative interaction patterns into positive ones. We'll explore the emotions underlying your behaviors, fostering a secure emotional bond and deepening your connection. EFT allows us to address attachment needs and create new patterns of emotional responsiveness, leading to lasting change in your relationship dynamics.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 border-t border-neutral-100">
              <div className="lg:col-span-7 space-y-6 text-sm text-[#5e5a57] font-light leading-relaxed">
                <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#2c2a29]">
                  Throughout our sessions, we'll:
                </h4>
                <div className="space-y-3 pl-1">
                  {sessionsOutcomes.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-[#5f8d8a] text-xs pt-0.5">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="pt-4">
                  We understand that every couple is unique, and we tailor our approach to your specific needs and challenges. Whether you're dealing with infidelity, navigating major life transitions, or simply wanting to deepen your connection, we're here to support you every step of the way.
                </p>
                <p>
                  Our goal is not just to help you overcome current challenges, but to equip you with the skills and insights to continue strengthening your relationship long after counseling ends.
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

              <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
                <div className="w-full max-w-[380px] aspect-[4/5] bg-neutral-100 overflow-hidden relative shadow-sm rounded-xs">
                  <img 
                    src="https://unsplash.com" 
                    alt="Holding hands framework close up" 
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
              Couples counseling <br />
              can <span className="italic font-serif text-[#5f8d8a] font-normal">help you...</span>
            </h2>
          </div>
          
          <div className="lg:col-span-8 space-y-8 text-sm text-[#5e5a57] font-light leading-relaxed border-b border-neutral-100 pb-8">
            <div className="border-b border-neutral-200 pb-5">
              <h4 className="text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold text-[#2c2a29]">REBUILD TRUST AND INTIMACY.</h4>
            </div>
            <div className="border-b border-neutral-200 pb-5">
              <h4 className="text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold text-[#2c2a29]">IMPROVE COMMUNICATION AND UNDERSTANDING.</h4>
            </div>
            <div className="border-b border-neutral-200 pb-5">
              <h4 className="text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold text-[#2c2a29]">RESOLVE CONFLICTS MORE EFFECTIVELY.</h4>
            </div>
            <div className="border-b border-neutral-200 pb-5">
              <h4 className="text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold text-[#2c2a29]">REDISCOVER JOY AND PLAYFULNESS IN YOUR RELATIONSHIP.</h4>
            </div>
            <div className="border-b border-neutral-200 pb-5">
              <h4 className="text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold text-[#2c2a29]">CREATE A SHARED VISION FOR YOUR FUTURE TOGETHER.</h4>
            </div>
            
            <p className="pt-4 text-sm md:text-[15px] font-light max-w-2xl leading-relaxed">
              As you work through the process of couples therapy, you’ll find yourselves growing not just as a couple, but as individuals. This is your opportunity to create the relationship you’ve always wanted—one built on deep understanding, mutual respect, and lasting love.
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
                Our therapists are extensively trained in couples therapy, using evidence-based approaches that promote real change and lasting connection.
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
              alt="Couples carrying spinning around beach horizon backdrop" 
              className="w-full h-full object-cover filter brightness-[0.5] contrast-[1.01]"
            />
          </div>
          <div className="relative z-10 max-w-3xl text-center px-6 text-white space-y-6">
            <p className="text-2xl md:text-4xl font-serif font-light leading-relaxed tracking-wide drop-shadow-xs">
              Your journey to a stronger relationship starts here.
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
