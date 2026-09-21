'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';

export default function TraumaSpecialty() {
  const [openFaq, setOpenFaq] = useState(null);

  const traumaSigns = [
    "Feelings of shame",
    "Strained relationships",
    "Difficulty trusting others",
    "Depression",
    "Flashbacks",
    "Emotional numbing",
    "Anxiety",
    "Nightmares",
    "Trouble sleeping",
    "Negative self-talk",
    "Harmful behaviors",
    "Hypervigilance"
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
      question: "How do I know if I need trauma therapy?",
      answer: "If you've experienced events that feel like they regularly affect you emotionally or mentally, such as abuse, neglect, loss, or violence, you might benefit from trauma therapy. There might be other signs that indicate you need support including persistent anxiety, flashbacks, difficulty regulating emotions, or trouble in relationships. No matter what you're experiencing, we can help."
    },
    {
      question: "What if I don't feel comfortable talking about my trauma?",
      answer: "That is completely okay and very common. We never force you to recount distressing details before your nervous system feels safe. Using body-based (somatic) approaches, EMDR, and parts mapping, we can process how trauma is stored in your body and brain without requiring you to repeatedly explain the painful events out loud."
    },
    {
      question: "What type of trauma do you specialize in?",
      answer: "Our clinical team has extensive training across a broad spectrum of trauma tracks, including complex childhood trauma (C-PTSD), relational neglect, physical or emotional abuse, medical trauma, chronic generational wounds, sudden loss, and institutional or occupational stressors experienced by first responders."
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
                alt="Trauma Grounding Sand Beach Scenery" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 pt-4">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#5e5a57] font-semibold">
              In-Person & Online Trauma Counseling in Newbury Park & Across CA
            </p>
            <h1 className="text-4xl md:text-6xl text-[#2c2a29] font-serif font-light leading-[1.15] tracking-tight">
              Helping you make<br />
              peace with the<br />
              <span className="italic font-serif text-[#5f8d8a] font-normal">past.</span>
            </h1>
            <p className="text-sm md:text-base text-[#5e5a57] font-light max-w-md leading-relaxed pt-2">
              Trauma therapy for adults looking for support, healing, and relief.
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
                You know things from your past are impacting you today.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed">
              <p>
                More often than not your mind is on high alert, constantly scanning for danger, even when you're safe. It seems like almost daily there are flashbacks and nightmares—the sleepless nights are so exhausting and you're feeling disconnected from yourself and the world around you. It's making it hard to stay present, and you might notice your relationships with loved ones feel distant or strained, too. You feel a bit ashamed like you should be “handling” this so much better than you are, and the inner critic inside keeps reminding you that you aren't.
              </p>
              <p>
                To alleviate the pain, you find yourself compulsively spending, glued to your screens, or even engaging in disordered eating habits. It all feels like it's led to you being emotionally numb because you've been trying to cope by distracting yourself or avoiding feelings altogether for so long.
              </p>
              <p>
                The word “trauma” might feel like the right way to describe what you're feeling, or it might feel too drastic—like your experiences don't quite “qualify.” The truth is, many of us carry the weight of difficult past experiences and oftentimes, it's holding us back from happiness, peace, or even the ability to be ourselves.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full px-8 py-24 md:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-neutral-200/50">
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29] leading-tight">
              Sometimes <br />
              <span className="italic font-serif text-[#5f8d8a] font-normal">trauma</span> <br />
              can look like...
            </h2>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 pt-2">
            {traumaSigns.map((sign, idx) => (
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
              <div className="lg:col-span-7 space-y-8 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-serif font-light text-[#2c2a29] tracking-tight leading-snug">
                    We are all influenced by our early relationships in life.
                  </h3>
                  <p>
                    In trauma therapy, we'll look at these early attachments and how they may be influencing your deeply held beliefs and feelings about yourself and your experiences. We'll also equip you with psychoeducation to understand how trauma affects the nervous system—because trauma doesn't just exist in your mind, it impacts your body, too. Using somatic (body-based) approaches, we'll address where that trauma is stored in your body and Eye Movement Desensitization and Reprocessing (EMDR) to help you process and release those past experiences.
                  </p>
                </div>
                
                <div className="space-y-4 pt-4 border-t border-neutral-100">
                  <h4 className="uppercase tracking-[0.12em] text-[#2c2a29] font-semibold text-xs tracking-widest">
                    AS WE EXPLORE THE DIFFERENT PARTS OF YOURSELF THAT EMERGED FROM TRAUMA, WE CAN IDENTIFY THOSE THAT MIGHT ENGAGE IN UNHEALTHY BEHAVIORS.
                  </h4>
                  <p>
                    Then we can find strategies to get your needs met in healthier ways and ultimately heal from the trauma that caused those behaviors. When it comes to your relationships with others, we'll help you work to set healthy boundaries, understanding who to allow into your life and who to keep at a distance.
                  </p>
                  <p>
                                <div className="flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <p>
                  Our ultimate goal is to help you create a vision for the future while nurturing a healthy relationship with yourself and others. This comes through letting go of the hurt and pain that's stored in our body and brain and stepping into our new selves. This process can help you feel grounded and free from the weight you've been carrying, ultimately allowing you to feel purpose, embrace genuine connection, and discover a future that's even brighter than what you thought was possible.
                </p>
              </div>

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

        <section className="w-full px-8 py-24 md:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-[#2c2a29] leading-snug">
              Therapy for <br />
              trauma can <br />
              <span className="italic font-serif text-[#5f8d8a] font-normal">help you...</span>
            </h2>
          </div>
          
          <div className="lg:col-span-8 space-y-8 text-sm text-[#5e5a57] font-light leading-relaxed">
            <div className="border-b border-neutral-200 pb-5 space-y-1">
              <h4 className="text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold text-[#2c2a29]">BUILD A SOLID SENSE OF IDENTITY.</h4>
            </div>
            <div className="border-b border-neutral-200 pb-5 space-y-1">
              <h4 className="text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold text-[#2c2a29]">HEAL FROM PAST PAIN.</h4>
            </div>
            <div className="border-b border-neutral-200 pb-5 space-y-1">
              <h4 className="text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold text-[#2c2a29]">LET GO OF HARMFUL OR UNHEALTHY BEHAVIORS.</h4>
            </div>
            <div className="border-b border-neutral-200 pb-5 space-y-1">
              <h4 className="text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold text-[#2c2a29]">CULTIVATE SELF-TRUST AND TRUST IN OTHERS.</h4>
            </div>
            
            <p className="pt-4 text-sm md:text-[15px] font-light max-w-2xl leading-relaxed">
              As you take the time to understand yourself and your experiences, you’ll learn how to feel less responsive to your triggers or controlled by your past. This is an opportunity to write a new narrative for your life—one where you finally feel free.
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
                Our therapists are highly trained and experienced in helping clients process & heal from trauma. No matter what you're facing, we're here to guide and support you.
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
              You can rewrite your story.
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
        </div>
        <Footer />
      </main>
    </div>
  );
}

