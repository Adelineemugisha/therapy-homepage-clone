'use client';

import Link from 'next/link';

export default function Navbar() {

  const specialtyItems = [
    { name: "Anxiety Management", slug: "anxiety" },
    { name: "Trauma Therapy & EMDR", slug: "trauma" },
    { name: "Professional Burnout", slug: "burnout" }
  ];

  const methodItems = [
    { name: "Cognitive Behavioral Therapy (CBT)", slug: "cbt" },
    { name: "EMDR", slug: "emdr" },
    { name: "Mindfulness Practices", slug: "mindfulness" },
    { name: "Body-Oriented Techniques", slug: "somatic" }
  ];

  return (
    <nav className="w-full bg-[#fcfbfa] px-8 py-6 md:px-16 flex justify-between items-center relative z-50 border-b border-[#b2d6cd]/30">


      <Link href="/" className="tracking-widest text-left group">
        <span className="block text-xl font-light text-[#7a87b8] font-serif tracking-wide">
          Dr. Maya Reynolds
        </span>
        <span className="block text-[10px] uppercase tracking-[0.25em] text-[#7a87b8]/80 -mt-0.5 font-sans font-semibold">
          Clinical Psychologist
        </span>
      </Link>

      <div className="hidden md:flex items-center space-x-8 text-[11px] uppercase tracking-[0.2em] text-[#7a87b8]/90 font-sans font-medium">
        <Link href="/" className="hover:text-[#b2d6cd] transition duration-300">About</Link>

        <div className="relative group/nav py-2">
          <button className="hover:text-[#b2d6cd] transition uppercase tracking-[0.2em] flex items-center gap-1 focus:outline-none cursor-pointer text-[#7a87b8]/90 font-medium">
            Specialties
          </button>
          <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-72 bg-[#fcfbfa] border border-[#b2d6cd]/30 shadow-xl rounded-sm p-4 space-y-3 hidden group-hover/nav:block z-50 text-center animate-in fade-in duration-150">
            {specialtyItems.map((item) => (
              <Link
                key={item.name}
                href={`/specialties/${item.slug}`}
                className="block text-[11px] tracking-[0.15em] text-[#7a87b8] hover:text-[#b2d6cd] transition duration-150 py-1 font-sans relative group w-max mx-auto"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#b2d6cd] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </Link>
            ))}
          </div>
        </div>

        <div className="relative group/nav py-2">
          <button className="hover:text-[#b2d6cd] transition uppercase tracking-[0.2em] flex items-center gap-1 focus:outline-none cursor-pointer text-[#7a87b8]/90 font-medium">
            Methods
          </button>
          <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-72 bg-[#fcfbfa] border border-[#b2d6cd]/30 shadow-xl rounded-sm p-4 space-y-3 hidden group-hover/nav:block z-50 text-center animate-in fade-in duration-150">
            {methodItems.map((item) => (
              <Link
                key={item.name}
                href={`/methods/${item.slug}`}
                className="block text-[11px] tracking-[0.15em] text-[#7a87b8] hover:text-[#b2d6cd] transition duration-150 py-1 font-sans relative group w-max mx-auto"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#b2d6cd] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </Link>
            ))}
          </div>
        </div>

        <Link href="#our-office" className="hover:text-[#b2d6cd] transition uppercase tracking-[0.2em] py-2">
          Our Office
        </Link>

        <Link 
          href="/contact" 
          className="border border-[#7a87b8]/60 px-7 py-2.5 rounded-full text-[#7a87b8] bg-transparent hover:bg-[#7a87b8] hover:text-white transition-all duration-300 ml-4 font-sans font-medium text-center min-w-[120px]"
         >
          Contact
        </Link>

      </div>
    </nav>
  );
}
