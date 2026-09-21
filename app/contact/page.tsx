'use client';

import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function ContactFormView() {
  return (
    <div className="w-full bg-[#f7f5f0] text-[#2c2a29] font-sans antialiased">
      <Navbar />

      <main className="w-full max-w-7xl mx-auto px-8 py-20 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        <div className="lg:col-span-5 space-y-8 pt-4">
          <h1 className="text-4xl md:text-[54px] text-[#2c2a29] font-serif font-light leading-tight">
            Get <span className="italic text-[#5f8d8a] font-normal">in Touch.</span>
          </h1>
          
          <p className="text-sm md:text-[15px] text-[#5e5a57] font-light leading-relaxed max-w-sm">
            Use this form to tell us more about what brings you to therapy. We'll respond within 24 hours to match you with the therapist whose expertise and availability best aligns with your needs & goals.
          </p>

          <div className="w-full h-[1px] bg-neutral-200/80 my-8" />

          <div className="space-y-4 text-[14px] text-[#5e5a57] font-light leading-relaxed">
            <p>925 Broadbeck Dr Suite 225<br />Newbury Park, CA 91320</p>
            <p>
              <a href="mailto:info@conejovalleycounseling.com" className="hover:text-black transition">
                info@conejovalleycounseling.com
              </a>
            </p>
            <p className="text-[#2c2a29] font-normal">805.242.3120</p>
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="lg:col-span-7 w-full space-y-7 max-w-2xl">

          <div className="space-y-2">
            <label className="block text-[11px] uppercase tracking-wider text-[#2c2a29] font-medium">
              Name <span className="text-neutral-400 font-normal lowercase">(required)</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <input type="text" className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#5f8d8a]" />
                <span className="block text-[10px] text-neutral-400 font-light">First Name</span>
              </div>
              <div className="space-y-1">
                <input type="text" className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#5f8d8a]" />
                <span className="block text-[10px] text-neutral-400 font-light">Last Name</span>
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-[11px] uppercase tracking-wider text-[#2c2a29] font-medium">
              Email <span className="text-neutral-400 font-normal lowercase">(required)</span>
            </label>
            <input type="email" className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#5f8d8a]" />
          </div>

          <div className="space-y-1.5">
            <label className="block text-[11px] uppercase tracking-wider text-[#2c2a29] font-medium">
              Phone <span className="text-neutral-400 font-normal lowercase">(required)</span>
            </label>
            <input type="tel" className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#5f8d8a]" />
          </div>

          <div className="space-y-1.5">
            <label className="block text-[11px] uppercase tracking-wider text-[#2c2a29] font-medium">
              Are you looking for telehealth or in-person therapy? <span className="text-neutral-400 font-normal lowercase">(required)</span>
            </label>
            <select className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#5f8d8a] appearance-none cursor-pointer">
              <option value="">Select an option</option>
              <option value="telehealth">Telehealth / Online Video Session</option>
              <option value="in-person">In-Person at Newbury Park Office</option>
              <option value="hybrid">No Preference / Hybrid</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="block text-[11px] uppercase tracking-wider text-[#2c2a29] font-medium">
              How did you hear about our practice? <span className="text-neutral-400 font-normal lowercase">(required)</span>
            </label>
            <select className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#5f8d8a] appearance-none cursor-pointer">
              <option value="">Select an option</option>
              <option value="google">Google Search</option>
              <option value="psychology-today">Psychology Today</option>
              <option value="referral">Doctor / Friend Referral</option>
              <option value="other">Other Source</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="block text-[11px] uppercase tracking-wider text-[#2c2a29] font-medium">
              Please provide the name of your insurance company: <span className="text-neutral-400 font-normal lowercase">(required)</span>
            </label>
            <span className="block text-[11px] text-neutral-400 font-light -mt-1 pb-1">If you do not plan to use insurance, please write "None"</span>
            <input type="text" className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#5f8d8a]" />
          </div>

          <div className="space-y-1.5">
            <label className="block text-[11px] uppercase tracking-wider text-[#2c2a29] font-medium">
              What are the presenting issues? <span className="text-neutral-400 font-normal lowercase">(required)</span>
            </label>
            <span className="block text-[11px] text-[#5e5a57] font-medium pb-1">Note: Please do not provide highly personal information in this form.</span>
            <textarea rows={4} className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#5f8d8a] resize-none" />
          </div>

          <div className="space-y-1.5">
            <label className="block text-[11px] uppercase tracking-wider text-[#2c2a29] font-medium">
              If the counseling is for a minor, please provide their age:
            </label>
            <input type="text" className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#5f8d8a]" />
          </div>

          <div className="space-y-1.5">
            <label className="block text-[11px] uppercase tracking-wider text-[#2c2a29] font-medium">
              Are you interested in working with a particular clinician? <span className="text-neutral-400 font-normal lowercase">(required)</span>
            </label>
            <span className="block text-[11px] text-neutral-400 font-light -mt-1 pb-1">If so, choose their name below. If not, select "None."</span>
            <select className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#5f8d8a] appearance-none cursor-pointer">
              <option value="">Select an option</option>
              <option value="none">None / First Available Matching Practitioner</option>
              <option value="jennifer">Jennifer Anderson, LMFT</option>
              <option value="heather">Heather Williams-Baumgart, AMFT</option>
              <option value="candace">Candace Bletscher, AMFT</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="block text-[11px] uppercase tracking-wider text-[#2c2a29] font-medium">
              We see clients the same day and time each week. Please provide some consistent days and times that work for you: <span className="text-neutral-400 font-normal lowercase">(required)</span>
            </label>
            <input type="text" className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#5f8d8a]" />
          </div>

          <div className="pt-4">
            <button type="submit" className="text-xs uppercase tracking-[0.2em] font-semibold border-b-2 border-neutral-400 pb-1 hover:text-[#5f8d8a] hover:border-[#5f8d8a] transition duration-200 cursor-pointer">
              Submit
            </button>
          </div>

        </form>
      </main>

      <Footer />
    </div>
  );
}
