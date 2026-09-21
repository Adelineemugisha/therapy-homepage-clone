'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';

const teamMembers = [
  { name: "Jennifer Anderson, LMFT", slug: "jennifer-anderson" },
  { name: "Candace Bletscher, AMFT", slug: "candace-bletscher" },
  { name: "Heather Williams-Baumgart, AMFT", slug: "heather-williams-baumgart" },
  { name: "Samantha Johnson, AMFT", slug: "samantha-johnson" },
  { name: "Autumn Bodily, AMFT", slug: "autumn-bodily" },
  { name: "Andrea Watkins, APCC", slug: "andrea-watkins" },
  { name: "Rosa Gomez, AMFT", slug: "rosa-gomez" },
  { name: "Chad Flores, AMFT", slug: "chad-flores" },
];

export default function TeamMemberProfile({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const member = teamMembers.find(m => m.slug === slug);

  const faqs = [
    {
      question: "What led you to be a therapist?",
      answer: "My personal journey and witnessing the transformative power of deep healing work fueled my lifelong passion for helping individuals pick up their blocks, process historic relational challenges, and reclaim their authentic stories safely."
    },
    {
      question: "What do you enjoy doing when you are not working?",
      answer: "When I am not spending time alongside our incredible clinical practitioners or clients, I enjoy quiet coastal walks, exploring architectural spaces, and connecting deeply with my family and nature tracks."
    },
    {
      question: "What is a book that has been inspiring to you as a therapist?",
      answer: "Books focusing on the intricate neuro-biological connections between somatic body-memory networks and psychological resilience remain consistent anchors inside my clinical approach."
    },
    {
      question: "What's your favorite way to recharge after a busy week?",
      answer: "Prioritizing sensory safety, dimming indirect lighting environments, and spending intentional, slow moments grounding my own regulatory system keeps me stable and ready to serve."
    }
  ];

  const displayName = member ? member.name.split(',')[0].trim() : slug;

  return (
    <div className="w-full bg-[#f7f5f0] text-[#2c2a29] font-sans antialiased">
      <Navbar />

      <main className="w-full max-w-7xl mx-auto px-8 py-20 md:px-16 space-y-24">

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8">
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-start">
            <div className="w-full max-w-[400px] aspect-[4/5] bg-neutral-200 overflow-hidden relative shadow-xs rounded-xs">
              <img
                src="https://unsplash.com"
                alt={`${displayName} Profile Presentation`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-serif font-light tracking-tight">
                {displayName}
              </h1>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#5e5a57] font-semibold tracking-widest pt-1">
                Licensed Marriage & Family Therapist
              </p>
            </div>

            <h2 className="text-2xl md:text-[32px] font-serif font-light leading-[1.3] text-[#2c2a29] max-w-xl">
              It’s time for a future unburdened by the past so you can live <span className="italic font-serif text-[#5f8d8a] font-normal">fully</span> in the present.
            </h2>

            <div className="space-y-6 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed max-w-2xl">
              <p>
                I specialize in complex trauma, dissociation, and special needs parenting. Clients often come to me feeling like what they've been doing just isn't working anymore, hitting a wall of burnout and overwhelm. They've tried countless strategies to improve their relationships, be better parents, or simply move forward, but nothing seems to bring the change they desperately seek. I'm here to help them find that change.
              </p>
              <p>
                Living with complex trauma can lead to feelings of deep-seated anxiety, confusion, and emotional numbness. Many of my clients describe a sense of disconnection from themselves and their surroundings, often struggling to navigate daily life while managing overwhelming emotions. This dissociation can make it difficult to engage fully in their life and relationships, which only amplifies feelings of guilt and inadequacy.
              </p>
            </div>

            <div className="w-full max-w-xl border-t border-neutral-300 pt-1 mt-8">
              <div className="flex items-center justify-between py-4 border-b border-neutral-200 text-xs uppercase tracking-[0.2em] text-[#2c2a29] font-medium">
                <span>Specialties</span>
                <span className="text-lg font-light text-neutral-400">＋</span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-neutral-200 text-xs uppercase tracking-[0.2em] text-[#2c2a29] font-medium">
                <span>Modalities</span>
                <span className="text-lg font-light text-neutral-400">＋</span>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed max-w-4xl lg:ml-[41.6%]">
          <div className="lg:col-span-12 space-y-6">
            <p>
              Being a parent is difficult, especially when you're raising a child with unique challenges of their own. As a parent of two special needs kids myself, I understand the challenges and emotions that come with that role. I've been in the trenches—the exhaustion, the isolation, and the overwhelming responsibility of advocating for your child. I'm here to help you feel seen and validated so we can move through whatever you're feeling, together.
            </p>
            <p>
              It's important to acknowledge the depth of these feelings. You are not alone in your experiences, and there is hope for healing and connection. Together, we can explore the complexities of your emotions and uncover pathways to peace and empowerment.
            </p>
          </div>
        </section>

        <section className="w-full pt-16 border-t border-neutral-200/60 space-y-12">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29] leading-tight max-w-2xl">
            One of my first priorities in our work together is helping you feel <span className="italic font-serif text-[#5f8d8a] font-normal">safe.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed">
            <div className="space-y-6">
              <p>
                If you're feeling overwhelmed or struggling with intense emotions, we'll work together to manage those first, creating a foundation of support and stability. I'll also help you understand how the trauma you've been through can affect both your brain and body. This allows you to begin understanding and recognizing all the different parts of yourself—your roles, your anxious parts, and where feelings are coming from. Together, we'll move through your feelings and uncover the hard experiences you've been through at a pace that feels right for you.
              </p>
              <p>
                I'm here to listen, validate your stress, and help you feel seen in what you're going through, whether you're a parent of special needs, someone who's experiencing dissociation, or trying to move on from the past. We'll work on coping tools for the day-to-day challenges, learning when it's okay to delegate or seek outside help.
              </p>
            </div>

            <div className="space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <p>
                  I also believe in the power of effort and commitment within the therapy experience. If you're willing to show up and do the work—just like I am—you can see profound changes in your life and understand how your past has shaped the way you see and feel about yourself.
                </p>
                <p>
                  With over 20 years of experience in this field, I've had the privilege of working with people from all walks of life. My lived experiences empower me to connect with you in a genuine, personal way. With this kind of support, you can heal, regain confidence, and feel empowered in a way that maybe hasn't seemed possible before. It's okay to start where you are and take things one step at a time—you don't have to do it alone. I will meet you wherever you are, help lift you up, and guide you toward a brighter future ahead.
                </p>
              </div>

              <div className="pt-8 md:pt-0">
                <Link
                  href="/contact"
                  className="inline-block text-xs uppercase tracking-[0.25em] text-[#2c2a29] font-semibold border-b border-[#2c2a29] pb-0.5 hover:text-[#5f8d8a] hover:border-[#5f8d8a] transition"
                >
                  Schedule an Appointment
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-3">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#5e5a57] font-semibold tracking-widest">
              FAQs
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#2c2a29]">
              A little bit more <br />
              <span className="italic font-serif text-[#5f8d8a] font-normal">about me...</span>
            </h2>
          </div>

          <div className="lg:col-span-7 border-t border-neutral-200 divide-y divide-neutral-200/70 w-full">
            {faqs.map((faq, index) => (
              <div key={index} className="py-4 w-full transition-all duration-200">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between text-left py-2 font-sans text-xs md:text-sm tracking-wide text-[#2c2a29] hover:text-[#5f8d8a] cursor-pointer focus:outline-none group"
                >
                  <span className="font-medium text-[#2c2a29] group-hover:text-[#5f8d8a] transition-colors">{faq.question}</span>
                  <span className="text-lg font-light text-neutral-400 group-hover:text-[#5f8d8a] transition-colors">
                    {openFaq === index ? '' : '＋'}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="pt-2 pb-4 text-sm text-[#5e5a57] font-light leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200 max-w-xl">
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
