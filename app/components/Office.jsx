export default function Office() {
  return (
    <section id="office" className="w-full bg-[#e9e4da] px-8 py-24 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      <div className="lg:col-span-5 space-y-6">
        <h2 className="text-xs uppercase tracking-[0.25em] text-[#3b6e6c] font-sans font-bold">
          Our Sanctuary Space
        </h2>
        <h3 className="text-3xl md:text-4xl font-serif text-[#1e252b] font-light leading-snug">
          A calm, intentional space carved out for your healing journey.
        </h3>
        <p className="text-sm text-[#535d66] font-sans font-light leading-relaxed max-w-md">
          Our physical office space is intentionally designed with organic textures, soft indirect lighting, and absolute sensory safety in mind. Whether arriving for hybrid check-ins or in-person therapeutic sessions, your absolute privacy, safety, and deep comfort remain our highest architectural priorities.
        </p>
        <div className="text-[11px] uppercase tracking-[0.15em] text-[#1e252b] font-sans font-medium">
          📍 Located discreetly with full private parking accessibility.
        </div>
      </div>

      <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        <div className="w-full aspect-[4/3] bg-neutral-300 overflow-hidden rounded-xs shadow-xs">
          <img 
            src="https://unsplash.com" 
            alt="Minimalist therapy consultation office room" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full aspect-[4/3] bg-neutral-300 overflow-hidden rounded-xs shadow-xs sm:mt-8">
          <img 
            src="https://unsplash.com" 
            alt="Comfortable seating lounge area detail" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </section>
  );
}
