import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#f7f5f0] text-[#2c2a29] font-sans antialiased">
      <div className="max-w-7xl mx-auto px-8 py-20 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        <div className="md:col-span-4 space-y-6">
          <div className="tracking-widest text-left">
            <span className="block text-3xl font-normal text-[#2c2a29] font-serif">
              Conejo Valley
            </span>
            <span className="block text-[11px] uppercase tracking-[0.25em] text-[#5e5a57] mt-0.5 font-sans font-semibold">
              Family Counseling
            </span>
          </div>
          <p className="text-[#5e5a57] font-light text-[15px] leading-relaxed max-w-xs">
            We want to make getting started simple. You're welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA—whatever works best for you.
          </p>
        </div>

        <div className="md:col-span-2 md:col-start-6 space-y-4">
          <h5 className="font-medium text-sm uppercase tracking-[0.18em] text-[#2c2a29]">
            Navigate
          </h5>
          <div className="flex flex-col space-y-2.5 font-light text-[15px] text-[#5e5a57]">
            <Link href="/" className="hover:text-black transition">Home</Link>
            <Link href="#about" className="hover:text-black transition">About</Link>
            <Link href="#faqs" className="hover:text-black transition">FAQs</Link>
            <Link href="/contact" className="hover:text-black transition">Contact</Link>
          </div>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h5 className="font-medium text-sm uppercase tracking-[0.18em] text-[#2c2a29]">
            Our Team
          </h5>
          <div className="flex flex-col space-y-2.5 font-light text-[15px] text-[#5e5a57] whitespace-pre-line">
            <Link href="/team/jennifer-anderson" className="hover:text-black transition">Jennifer Anderson</Link>
            <span className="leading-tight block">Heather Williams-<br />Baumgart</span>
            <span>Autumn Bodily</span>
            <span>Candace Bletscher</span>
            <span>Samantha Johnson</span>
            <span>Andrea Watkins</span>
            <span>Rosa Gomez</span>
            <span>Chad Flores</span>
          </div>
        </div>

        <div className="md:col-span-3 space-y-5 text-[15px] text-[#5e5a57] font-light leading-relaxed">
          <h5 className="font-medium text-sm uppercase tracking-[0.18em] text-[#2c2a29]">
            Contact
          </h5>
          <div className="space-y-1">
            <p>925 Broadbeck Dr</p>
            <p>Suites 200 and 225</p>
            <p>Newbury Park, CA 91320</p>
          </div>
          <p>
            <a href="mailto:info@conejovalleycounseling.com" className="hover:text-black transition break-all">
              info@conejovalleycounseling.com
            </a>
          </p>
          <p className="text-[#2c2a29] font-normal">
            805.242.3120
          </p>
          <div className="space-y-1 text-[14px]">
            <p>Serving Thousand Oaks,</p>
            <p>Westlake Village,</p>
            <p>Camarillo, Moorpark, &</p>
            <p>Simi Valley</p>
          </div>
        </div>

      </div>

      <div className="w-full bg-[#82a5a3] text-white/90 text-xs px-8 py-4 md:px-16 font-light">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-x-2 gap-y-1 items-center">
          <span className="hover:underline cursor-pointer">Terms</span>
          <span>|</span>
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
          <span>|</span>
          <span className="hover:underline cursor-pointer">Disclaimer</span>
          <span>|</span>
          <span>Website by Walker Strategy Co.</span>
        </div>
      </div>
    </footer>
  );
}
