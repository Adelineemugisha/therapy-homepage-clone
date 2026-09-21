'use client';

import Link from 'next/link';

export default function Navbar() {

  const teamMembers = [
    { name: "Jennifer Anderson, LMFT" },
    { name: "Candace Bletscher, AMFT" },
    { name: "Heather Williams-Baumgart, AMFT" },
    { name: "Samantha Johnson, AMFT" },
    { name: "Autumn Bodily, AMFT" },
    { name: "Andrea Watkins, APCC" },
    { name: "Rosa Gomez, AMFT" },
    { name: "Chad Flores, AMFT" }
  ];

  const specialtyItems = [
    { name: "Dissociation" },
    { name: "Trauma" },
    { name: "Special Needs Parenting" },
    { name: "Couples" },
    { name: "Children & Teens" },
    { name: "Anxiety & Depression" },
    { name: "Adoption" }
  ];

  const methodItems = [
    { name: "EMDR" },
    { name: "Brainspotting" },
    { name: "Somatic Therapy" },
    { name: "Parts Work Therapy" }
  ];

  return (
    <nav className="w-full bg-[#f4f1ea] px-8 py-6 md:px-16 flex justify-between items-center relative z-50 border-b border-[#e9e4da]/40">

      <Link href="/" className="tracking-widest text-left group">
        <span className="block text-xl font-normal text-[#1e252b] font-serif tracking-wide">
          Conejo Valley
        </span>
        <span className="block text-[10px] uppercase tracking-[0.25em] text-[#535d66] -mt-0.5 font-sans">
          Family Counseling
        </span>
      </Link>

      <div className="hidden md:flex items-center space-x-8 text-[11px] uppercase tracking-[0.2em] text-[#535d66] font-sans font-medium">
        <Link href="#about" className="hover:text-black transition">About</Link>
        
        <div className="relative group/nav py-2">
          <button className="hover:text-black transition uppercase tracking-[0.2em] flex items-center gap-1 focus:outline-none cursor-pointer">
            Our Team
          </button>
          <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-80 bg-[#f4f1ea] border border-neutral-200/60 shadow-xl rounded-sm p-4 space-y-3 hidden group-hover/nav:block z-50 text-center animate-in fade-in duration-150">
            {teamMembers.map((member) => {
              const slug = member.name.split(',')[0].toLowerCase().replace(/[^a-z]+/g, '-').replace(/^-|-$/g, '');
              return (
                <Link
                  key={member.name}
                  href={`/team/${slug}`}
                  className="block text-[11px] tracking-[0.15em] text-[#535d66] hover:text-black transition duration-150 py-1 font-sans relative group w-max mx-auto"
                >
                  {member.name}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="relative group/nav py-2">
          <button className="hover:text-black transition uppercase tracking-[0.2em] flex items-center gap-1 focus:outline-none cursor-pointer">
            Specialties
          </button>
          <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-72 bg-[#f4f1ea] border border-neutral-200/60 shadow-xl rounded-sm p-4 space-y-3 hidden group-hover/nav:block z-50 text-center animate-in fade-in duration-150">
            {specialtyItems.map((item) => {
              const slug = item.name.toLowerCase().replace(/[^a-z]+/g, '-').replace(/^-|-$/g, '');
              return (
                <Link
                  key={item.name}
                  href={`/specialties/${slug}`}
                  className="block text-[11px] tracking-[0.15em] text-[#535d66] hover:text-black transition duration-150 py-1 font-sans relative group w-max mx-auto"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="relative group/nav py-2">
          <button className="hover:text-black transition uppercase tracking-[0.2em] flex items-center gap-1 focus:outline-none cursor-pointer">
            Methods
          </button>
          <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-64 bg-[#f4f1ea] border border-neutral-200/60 shadow-xl rounded-sm p-4 space-y-3 hidden group-hover/nav:block z-50 text-center animate-in fade-in duration-150">
            {methodItems.map((item) => {
              const slug = item.name.toLowerCase().replace(/[^a-z]+/g, '-').replace(/^-|-$/g, '');
              return (
                <Link
                  key={item.name}
                  href={`/methods/${slug}`}
                  className="block text-[11px] tracking-[0.15em] text-[#535d66] hover:text-black transition duration-150 py-1 font-sans relative group w-max mx-auto"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </Link>
              );
            })}
          </div>
        </div>

        <Link href="#faqs" className="hover:text-black transition uppercase tracking-[0.2em] py-2">
          FAQs
        </Link>

       <Link 
         href="/contact" 
         className="border border-[#1e252b] px-7 py-3 rounded-[50%_50%_50%_50%_/_50%_50%_50%_50%] text-[#1e252b] bg-transparent hover:bg-[#1e252b] hover:text-white transition duration-300 ml-4 font-sans font-medium text-center min-w-[110px]"
         >
          Contact
       </Link>

      </div>
    </nav>
  );
}
