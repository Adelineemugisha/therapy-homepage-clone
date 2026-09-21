'use client';

import Link from 'next/link';

export default function AboutPractice() {
  return (
    <div className="w-full bg-[#f7f5f0] text-[#2c2a29]">
      
      <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 px-8 py-16 md:px-16 items-center max-w-7xl mx-auto">
        <div className="lg:col-span-6 space-y-6">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#5e5a57] font-semibold tracking-widest">
            Therapists in Newbury Park, CA
          </p>
          <h1 className="text-4xl md:text-6xl text-[#2c2a29] font-serif font-light leading-[1.15] max-w-lg tracking-tight">
            We’re here to help <br />
            <span className="italic font-serif text-[#5f8d8a] font-normal">you find solid</span> <br />
            ground again.
          </h1>
          <p className="text-sm md:text-base text-[#5e5a57] font-light max-w-md leading-relaxed">
            Discover a transformative therapy experience with our dedicated, specialized therapists.
          </p>
          <div className="pt-2">
            <Link 
              href="/contact" 
              className="text-xs uppercase tracking-[0.25em] text-[#2c2a29] border-b border-[#2c2a29] pb-1 hover:text-[#5f8d8a] hover:border-[#5f8d8a] transition font-medium tracking-widest"
            >
              Book an Appointment
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-[460px] aspect-[1.1] relative overflow-hidden shadow-xs">
            <img 
              src="https://unsplash.com" 
              alt="Family on beach layout block" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="w-full px-8 py-16 md:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-neutral-200/50">
        <div className="lg:col-span-5">
          <h2 className="text-2xl md:text-4xl font-serif font-light text-[#2c2a29] leading-snug">
            It seems like nobody else understands what you’re going through.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-sm text-[#5e5a57] font-light leading-relaxed">
          <p className="uppercase tracking-[0.1em] text-[#2c2a29] font-medium text-xs tracking-widest">
            You could be here as a parent, a spouse, or simply someone trying to navigate the things life has thrown your way.
          </p>
          <p>
            We know how frustrating it can be trying to make sense of your emotions and balance everyone else’s needs along with your own. Our expertise, lived experiences, and empathetic approach help our clients feel safe and understood in their challenges—no matter what they bring to the table.
          </p>
        </div>
      </section>

      <section className="relative w-full h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://unsplash.com" 
            alt="Family running on beach shoreline grid" 
            className="w-full h-full object-cover filter brightness-[0.7]"
          />
        </div>
        <div className="relative z-10 max-w-3xl text-center px-6 text-white">
          <p className="text-2xl md:text-4xl font-serif font-light leading-relaxed tracking-wide">
            This isn’t the whole story. We’re here to help you write the next chapter.
          </p>
        </div>
      </section>

      <section className="w-full px-8 py-20 md:px-16 max-w-7xl mx-auto space-y-12">
        <div className="space-y-4">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#5e5a57] font-semibold tracking-widest">
            Our Approach
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29] max-w-3xl leading-snug">
            We believe real change starts with understanding yourself, but we know that’s not enough—you need to know <span className="italic font-serif text-[#5f8d8a] font-normal">how</span> to make that change happen.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-4">
          <div className="lg:col-span-5 w-full">
            <div className="w-full aspect-[4/5] bg-neutral-200 overflow-hidden shadow-xs">
              <img 
                src="https://unsplash.com" 
                alt="Walk along beach layout illustration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 text-sm text-[#5e5a57] font-light leading-relaxed space-y-6">
            <h4 className="uppercase tracking-[0.15em] text-[#2c2a29] font-semibold text-xs tracking-widest">
              That’s where we come in.
            </h4>
            <p>
              We’re here to listen, to honor what you’ve been through, and to help you make sense of your experiences, without judgment or preconceived agendas. We also recognize that this can be a vulnerable experience, especially if you’re used to being someone who has managed it all on your own before. This is a place where you can be free to show up exactly as you are knowing that we’re proud of you and are ready to help you feel grounded, even when life feels chaotic.
            </p>
            <p>
              Our goal is to not only help you understand yourself on a deeper level but to also give you practical skills you can use in your daily life. We expect you to show up, not just physically, but with a willingness to reflect, apply what you’ve learned, and engage in this work of healing. We believe that growth happens through consistency, both in and out of sessions.
            </p>
            
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-3">
                <p>
                  Together, we’ll tackle the specific challenges you’re facing—conflict in your relationships, stress at work, or feeling disconnected from yourself or others.
                </p>
                <p>
                  We know that no one else has lived your life as you, so we’ll take the time to understand your experience not just as therapists, but as people who genuinely care. You don’t need to have it all figured out, you just need to be ready to take those first steps. When everything else feels unsteady, we hope to be a place of safety and stability in your life.
                </p>
                <div className="pt-4">
                  <Link 
              href="/contact"
                    className="inline-block border border-[#2c2a29] px-7 py-3 rounded-[50%_50%_50%_50%_/_50%_50%_50%_50%] text-xs uppercase tracking-[0.15em] font-medium text-[#2c2a29] hover:bg-[#2c2a29] hover:text-white transition duration-300 min-w-[130px] text-center"
                  >
                    Schedule Now
                  </Link>
                </div>
              </div>
              <div className="w-full aspect-square md:aspect-[4/5] bg-neutral-100 overflow-hidden shadow-xs">
                <img 
                  src="https://unsplash.com" 
                  alt="Sea ripple texture panel" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="w-full bg-[#fdfbf7] border-t border-b border-neutral-200/40 px-8 py-20 md:px-16">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29]">
              Meet the Team
            </h2>
            <p className="text-xs md:text-sm text-[#5e5a57] font-light max-w-xl leading-relaxed">
              Take a look at the faces of Conejo Valley Family Counseling—therapists who are dedicated to helping you grow and live your best life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            <div className="bg-white border border-neutral-100 p-6 flex flex-col items-center text-center space-y-4 shadow-2xs">
              <div className="w-full aspect-[4/5] bg-neutral-200 overflow-hidden relative">
                <img 
                  src="https://unsplash.com" 
                  alt="Jennifer Anderson profile picture" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-lg font-normal text-[#2c2a29]">Jennifer Anderson</h3>
              <Link 
                href="/team/jennifer-anderson" 
                className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#2c2a29] border-b border-[#2c2a29]/60 pb-0.5 hover:text-[#5f8d8a] hover:border-[#5f8d8a] transition"
              >
                Read Bio
              </Link>
            </div>
            <div className="bg-white border border-neutral-100 p-6 flex flex-col items-center text-center space-y-4 shadow-2xs">
              <div className="w-full aspect-[4/5] bg-neutral-200 overflow-hidden relative">
                <img 
                  src="https://unsplash.com" 
                  alt="Heather Williams-Baumgart profile picture" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-lg font-normal text-[#2c2a29]">Heather Williams-Baumgart</h3>
              <Link 
                href="/team/heather-williams-baumgart" 
                className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#2c2a29] border-b border-[#2c2a29]/60 pb-0.5 hover:text-[#5f8d8a] hover:border-[#5f8d8a] transition"
              >
                Read Bio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-8 py-16 md:px-16 bg-[#e6dfd5] text-[#2c2a29]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-sm leading-relaxed">
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-normal">Expertise.</h4>
            <p className="font-light text-[#5e5a57]">
              We’ve spent years honing our skills and knowledge, but we never stop learning from our clients. Every session allows us the opportunity to help you grow while deepening our understanding of what truly helps people. As we work to help you uncover patterns, you’ll gain practical tools to use in your daily life and feel empowered to make real, lasting changes.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-normal">Understanding.</h4>
            <p className="font-light text-[#5e5a57]">
              Your story is your own, and we honor that. Our team takes the time to listen and really understand what it’s like to walk in your shoes. Whether it’s your relationships, your work, or the way you move through the world, we’re here to listen. Our approach isn’t one-size-fits-all because your experience is unique, and we believe the way you’re supported should be, too.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-normal">Transformation.</h4>
            <p className="font-light text-[#5e5a57]">
              True change doesn’t happen overnight but it does happen with commitment and consistency. We believe in working alongside you to create real, tangible shifts—not just in how you feel but in how you live. With our support, you’ll build a stronger foundation, find your footing, and move forward with more clarity, confidence, and connection to yourself and others.
            </p>
          </div>
        </div>
      </section>

      <section id="methods-list" className="w-full px-8 py-20 md:px-16 bg-white max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29]">
            Some of the <br />
            <span className="italic font-serif text-[#5f8d8a] font-normal">methods</span> we use
          </h2>
        </div>
        <div className="lg:col-span-8 border-t border-neutral-200 divide-y divide-neutral-100 text-xs md:text-sm font-sans uppercase tracking-[0.15em] font-medium text-[#2c2a29]">
          {['Somatic Therapy', 'Eye Movement Desensitization & Reprocessing (EMDR)', 'Emotionally Focused Therapy (EFT)', 'Internal Family Systems Informed', 'Cognitive Behavioral Therapy (CBT)', 'Dialectical Behavioral Therapy (DBT)', 'Brainspotting'].map((method, idx) => (
            <div key={idx} className="py-5 flex items-center gap-4 cursor-pointer hover:text-[#5f8d8a] transition tracking-wider">
              <span className="text-base font-light text-neutral-400">＋</span>
              <span>{method}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full px-8 py-20 md:px-16 bg-[#e6dfd5]/40 border-t border-b border-neutral-200/30">
        <div className="max-w-5xl mx-auto bg-[#fdfbf7] p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-2xs border border-neutral-200/20">
          <div className="md:col-span-5 w-full aspect-[4/5] bg-neutral-200 overflow-hidden">
            <img 
              src="https://unsplash.com" 
              alt="Founder portrait presentation" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-7 space-y-4">
            <h3 className="text-2xl md:text-3xl font-serif font-light text-[#2c2a29]">
              A <span className="italic font-serif text-[#5f8d8a] font-normal">note</span> from our founder
            </h3>
            <blockquote className="text-sm font-serif italic text-[#5e5a57] leading-relaxed">
              "Starting Conejo Valley Counseling in 2014 and witnessing what it has become is one of the greatest privileges of my life. Therapy has been a deeply transformative experience for me personally, and it’s fueled my passion for helping others through this powerful process. I’m grateful every day to work alongside incredible therapists who are dedicated to helping people heal and find hope. We all have our own stories, and it’s an honor to be part of a team that helps people reclaim theirs."
            </blockquote>
            <p className="text-xs uppercase tracking-[0.15em] font-semibold text-[#2c2a29] tracking-widest">
              — Jennifer Anderson, LMFT
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-8 py-20 md:px-16 bg-white text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#5e5a57] font-semibold tracking-widest">
            Book an Appointment
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-[#2c2a29] leading-tight">
            It’s time to close the gap between the life you want and the life you’re <span className="italic font-serif text-[#5f8d8a] font-normal">living.</span>
          </h2>
          <p className="text-xs md:text-sm text-[#5e5a57] font-light leading-relaxed max-w-md mx-auto">
            Sessions available for you both online and in-person based in Newbury Park.
          </p>
          <div className="pt-4">
            <Link 
              href="/contact" 
              className="inline-block border border-[#2c2a29] px-8 py-3.5 rounded-[50%_50%_50%_50%_/_50%_50%_50%_50%] text-xs uppercase tracking-[0.2em] font-medium text-[#2c2a29] hover:bg-[#2c2a29] hover:text-white transition duration-300 min-w-[150px] tracking-widest text-center"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
