import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#fcfbfa] text-[#7a87b8] font-sans antialiased border-t border-[#b2d6cd]/40">
      <div className="max-w-7xl mx-auto px-8 py-20 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        <div className="md:col-span-4 space-y-6">
          <div className="tracking-widest text-left">
            <span className="block text-3xl font-light text-[#7a87b8] font-serif">
              Dr. Maya Reynolds
            </span>
            <span className="block text-[11px] uppercase tracking-[0.25em] text-[#7a87b8]/80 mt-0.5 font-sans font-semibold">
              Clinical Psychologist
            </span>
          </div>
          <p className="text-[#7a87b8]/90 font-light text-[15px] leading-relaxed max-w-xs">
            I want to make getting started simple. You are welcome to come into my private office in Santa Monica or schedule virtual telehealth appointments from anywhere across California.
          </p>
        </div>

        <div className="md:col-span-2 md:col-start-6 space-y-4">
          <h5 className="font-medium text-sm uppercase tracking-[0.18em] text-[#7a87b8]">
            Navigate
          </h5>
          <div className="flex flex-col space-y-2.5 font-light text-[15px] text-[#7a87b8]/90">
            <Link href="/" className="hover:text-[#b2d6cd] transition duration-300">Home</Link>
            <Link href="#methods-list" className="hover:text-[#b2d6cd] transition duration-300">Modalities</Link>
            <Link href="#our-office" className="hover:text-[#b2d6cd] transition duration-300">Our Office</Link>
            <Link href="/contact" className="hover:text-[#b2d6cd] transition duration-300">Contact</Link>
          </div>
        </div>

        <div className="md:col-span-3 space-y-4">
          <h5 className="font-medium text-sm uppercase tracking-[0.18em] text-[#7a87b8]">
            Clinical Focus
          </h5>
          <div className="flex flex-col space-y-2.5 font-light text-[15px] text-[#7a87b8]/90">
            <span>Anxiety Management</span>
            <span>Trauma Therapy & EMDR</span>
            <span>Professional Burnout</span>
            <span>Perfectionism Support</span>
            <span>High Internal Pressure</span>
          </div>
        </div>

        <div className="md:col-span-3 space-y-5 text-[15px] text-[#7a87b8]/90 font-light leading-relaxed">
          <h5 className="font-medium text-sm uppercase tracking-[0.18em] text-[#7a87b8]">
            Contact Info
          </h5>
          <div className="space-y-1">
            <p>123th Street 45 W</p>
            <p>Santa Monica, CA 90401</p>
          </div>
          <p>
            <a href="mailto:dr.mayareynolds@example.com" className="hover:text-[#b2d6cd] transition break-all">
              dr.mayareynolds@example.com
            </a>
          </p>
          <p className="text-[#7a87b8] font-medium">
            310.555.0194
          </p>
          <div className="space-y-1 text-[14px] text-[#7a87b8]/70 italic">
            <p>Serving Santa Monica,</p>
            <p>West Los Angeles, Venice,</p>
            <p>& Greater California via Telehealth</p>
          </div>
        </div>

      </div>
      
      <div className="w-full bg-[#b2d6cd] text-[#7a87b8] text-xs px-8 py-4 md:px-16 font-medium border-t border-[#b2d6cd]">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-x-2 gap-y-1 items-center justify-between">
          <div className="flex gap-x-4">
            <span className="hover:underline cursor-pointer">Terms & Conditions</span>
            <span>|</span>
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span>|</span>
            <span className="hover:underline cursor-pointer">Disclaimer</span>
          </div>
          <div>
            <span>© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
