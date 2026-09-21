'use client';

import Link from 'next/link';

export default function AboutPractice() {
  return (
    <div className="w-full bg-[#fcfbfa] text-[#7a87b8] font-sans antialiased selection:bg-[#b2d6cd]/30">

      <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 px-6 py-12 md:px-16 lg:py-24 max-w-[1440px] mx-auto items-center">
        <div className="lg:col-span-6 space-y-6 lg:pr-8">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#7a87b8]/80 font-semibold">
            Licensed Clinical Psychologist • Santa Monica, CA
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#7a87b8] font-serif font-light leading-[1.15] tracking-tight">
            We’re here to help <span className="italic font-serif text-[#b2d6cd] font-normal">you</span> <br />
            find solid ground again.
          </h1>
          <p className="text-sm md:text-base text-[#7a87b8]/90 font-light max-w-md leading-relaxed">
            Providing evidence-based therapy for adults navigating deep anxiety, chronic stress, burnout, and the lingering effects of past trauma.
          </p>
          <div className="pt-4">
            <Link 
              href="/contact" 
              className="text-[11px] uppercase tracking-[0.25em] text-[#7a87b8] border-b border-[#7a87b8] pb-1.5 hover:text-[#b2d6cd] hover:border-[#b2d6cd] transition-colors duration-300 font-medium"
            >
              Book an Appointment
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-[560px] aspect-[1.25] relative overflow-hidden border border-[#b2d6cd]">
         <img 
      src="/maya-reynolds.jpg" 
       alt="Dr. Maya Reynolds, PsyD — Clinical Psychologist in Santa Monica" 
      className="w-full h-full object-cover"
          />
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-16 md:px-16 lg:py-24 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start border-t border-[#b2d6cd]/40">
        <div className="lg:col-span-5">
          <h2 className="text-2xl md:text-[34px] font-serif font-light text-[#7a87b8] leading-[1.35] max-w-md">
            It seems like nobody else understands what you’re going through.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-[#7a87b8]/90 font-light leading-[1.7] text-sm md:text-[14.5px] lg:pl-4">
          <p className="uppercase tracking-[0.1em] text-[#7a87b8] font-medium leading-[1.6]">
            Many of the people I partner with are high-achieving, thoughtful, and highly self-aware—yet internally feel exhausted, stuck in overthinking, or emotionally on edge.
          </p>
          <p>
            Clients frequently come to my practice feeling "functional" and put-together on the outside while quietly struggling with constant worry, persistent physical tension, difficulty sleeping, or a heavy sense that they are constantly bracing for something to go wrong.
          </p>
        </div>
      </section>

      <section className="relative w-full h-[45vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
      <img 
        src="https://images.pexels.com/photos/7699503/pexels-photo-7699503.jpeg" 
         alt="Comfortable therapeutic consulting setting with warm beige armchairs and soft, gentle natural lighting" 
          className="w-full h-full object-cover border border-[#b2d6cd]"
          />

        </div>
       <div className="relative z-10 max-w-4xl text-center px-6">
        <p className="text-xl sm:text-2xl md:text-[32px] font-serif font-bold leading-[1.5] tracking-wide text-[#191970]! drop-shadow-sm">
    This isn’t the whole story. We’re here to help you write the next chapter.
        </p>
          </div>
      </section>

      <section className="w-full px-6 py-16 md:px-16 lg:py-24 max-w-[1440px] mx-auto space-y-16">
        <div className="space-y-4">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#7a87b8]/80 font-semibold">
            Clinical Philosophy
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-serif font-light text-[#7a87b8] max-w-4xl leading-[1.35]">
            I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving intentional space for reflection and depth.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 w-full">
            <div className="w-full aspect-[1.2] lg:aspect-[1.25] overflow-hidden border border-[#b2d6cd]">
              <img 
                src="https://images.pexels.com/photos/8560658/pexels-photo-8560658.jpeg" 
                alt="Comfortable therapeutic consulting setting" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 text-[#7a87b8]/90 font-light leading-[1.7] text-sm md:text-[14.5px] space-y-6 lg:pt-2">
            <h4 className="uppercase tracking-[0.15em] text-[#7a87b8] font-semibold text-xs">
              Paced with safety and care.
            </h4>
            <p>
              Trauma work is a core pillar of my practice. I work deeply with adults who have experienced single-incident trauma as well as more complex, long-standing patterns stemming from childhood hardships, relationship distress, or chronic systemic stress. My approach is paced carefully, keeping safety, stabilization, and regulation at the center of our work.
            </p>
            <p>
              I believe therapy works best when you feel respected, heard, and actively involved. My goal is not just temporary symptom relief, but helping you build long-term insight, deep resilience, and a healthier, more compassionate relationship with yourself.
            </p>
            
            <div className="w-full grid grid-cols-1 gap-8 pt-6">
              <div className="space-y-6">
                <p>
                  Together, we will tackle the unique challenges holding you back—whether that is career burnout, relationship patterns, or feeling disconnected from your body and your emotions.
                </p>
                <div className="pt-4">
                  <Link 
                    href="/contact"
                    className="inline-block border border-[#7a87b8]/60 px-8 py-3 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium text-[#7a87b8] hover:bg-[#7a87b8] hover:text-white transition-all duration-300 min-w-[150px] text-center"
                  >
                    Schedule a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="methods-list" className="w-full px-6 py-20 md:px-16 lg:py-28 bg-[#fcfbfa] max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-[#b2d6cd]/40">
        <div className="lg:col-span-4">
          <h2 className="text-3xl md:text-[36px] font-serif font-light text-[#7a87b8] leading-[1.25]">
            Evidence-Based <br />
            <span className="italic font-serif text-[#b2d6cd] font-normal">methods</span> <br />
            I integrate
          </h2>
        </div>
        <div className="lg:col-span-8 border-t border-[#b2d6cd] divide-y divide-[#b2d6cd]/40 text-xs md:text-[13px] font-sans uppercase tracking-[0.2em] font-medium text-[#7a87b8]">
          {[
            'Cognitive Behavioral Therapy (CBT)', 
            'Eye Movement Desensitization and Reprocessing (EMDR)', 
            'Mindfulness-Based Practices',
            'Body-Oriented & Somatic Techniques'
          ].map((method, idx) => (
            <div key={idx} className="py-[22px] flex items-center gap-4 cursor-pointer hover:text-[#b2d6cd] transition-colors duration-300">
              <span className="text-[15px] font-light text-[#7a87b8]/40 -mt-0.5">＋</span>
              <span>{method}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="our-office" className="w-full px-6 py-20 md:px-16 lg:py-28 bg-white border-t border-b border-[#b2d6cd]/30">
        <div className="max-w-[1440px] mx-auto space-y-12">
          <div className="space-y-4">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#7a87b8]/80 font-semibold">
              In-Person Care
            </p>
            <h2 className="text-3xl md:text-[38px] font-serif font-light text-[#7a87b8]">
              Our Office: A Space for Healing
            </h2>
            <p className="text-sm md:text-base text-[#7a87b8]/90 font-light max-w-2xl leading-relaxed">
              Located in coastal Santa Monica, the office is intentionally designed to be a quiet, private sanctuary where you can step away from the fast-paced external environment, decompress, and focus completely on your well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="flex flex-col space-y-3">
              <div className="w-full aspect-[1.35] overflow-hidden border border-[#b2d6cd]">
               <img 
           src="/office-1.jpg" 
           alt="Bright, welcoming private office consulting room with comfortable seating" 
          className="w-full h-full object-cover"
             />

              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="w-full aspect-[1.35] overflow-hidden border border-[#b2d6cd]">
                <img 
             src="/office-2.jpg" 
             alt="A clean, calm reception space emphasizing client privacy and safety" 
           className="w-full h-full object-cover"
             />
              </div>
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm leading-[1.7] text-[#7a87b8]/90 font-light">
            <div className="space-y-2">
              <h4 className="font-serif text-lg font-normal text-[#7a87b8]">Location Mention.</h4>
              <p>Conveniently located at 123th Street 45 W, Santa Monica, CA 90401. Accessible to professionals and residents across West Los Angeles.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-serif text-lg font-normal text-[#7a87b8]">Hybrid Availability.</h4>
              <p>I provide consistent, face-to-face in-person sessions from this office alongside secure, encrypted telehealth visits for clients residing across California.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-serif text-lg font-normal text-[#7a87b8]">Comfort & Privacy.</h4>
              <p>The space utilizes clean air purification, soundproofing, and minimalist elements to help your nervous system feel regulated and secure the moment you arrive.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-16 md:px-16 lg:py-24 bg-white max-w-[1440px] mx-auto">
        <div className="w-full bg-[#fcfbfa] border border-[#b2d6cd] px-6 py-12 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 w-full aspect-[1.15] overflow-hidden border border-[#b2d6cd]">
            <img 
              src="https://images.pexels.com/photos/7903156/pexels-photo-7903156.jpeg"
              alt="Dr. Maya Reynolds office consultation area" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-7 space-y-6 lg:pl-4">
            <h3 className="text-2xl md:text-3xl font-serif font-light text-[#7a87b8]">
              A <span className="italic font-serif text-[#b2d6cd] font-normal">note</span> from Dr. Reynolds
            </h3>
            <blockquote className="text-sm md:text-[15px] font-light text-[#7a87b8]/90 leading-[1.7]">
              "If you’re looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—I may be a good fit."
            </blockquote>
            <p className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#7a87b8] pt-2">
              — Dr. Maya Reynolds, PsyD
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-6 py-20 md:px-16 lg:py-32 bg-[#fcfbfa] text-center max-w-[1440px] mx-auto">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#7a87b8]/80 font-semibold">
            Office Address: 123th Street 45 W, Santa Monica, CA 90401
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-[46px] font-serif font-light text-[#7a87b8] leading-[1.25]">
            It’s time to close the gap between <br className="hidden sm:inline" />
            the life you want and the life <br className="hidden sm:inline" />
            you’re <span className="italic font-serif text-[#b2d6cd] font-normal">living.</span>
          </h2>
          <p className="text-xs md:text-sm text-[#7a87b8]/90 font-light leading-relaxed max-w-md mx-auto pt-2">
            In addition to trauma and anxiety, I frequently support clients dealing with professional burnout, perfectionism, and high internal pressure.
          </p>
          <div className="pt-6">
            <Link 
              href="/contact" 
              className="inline-block border border-[#7a87b8]/60 px-10 py-3.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium text-[#7a87b8] hover:bg-[#7a87b8] hover:text-white transition-all duration-300 min-w-[165px]"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
