export default function Office() {
  return (
    <section id="office" className="w-full bg-[#fcfbfa] px-8 py-24 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
     
      <div className="lg:col-span-5 space-y-6">
        <h2 className="text-xs uppercase tracking-[0.25em] text-[#7a87b8]/80 font-sans font-bold">
          Your Healing Journey
        </h2>
        <h3 className="text-3xl md:text-4xl font-serif text-[#7a87b8] font-light leading-snug">
          A gentle promise that you will find your solid footing again.
        </h3>
        <p className="text-sm text-[#7a87b8]/90 font-sans font-light leading-relaxed max-w-md">
          Through deliberate, gentle guidance, we work together to help you process the noise, soothe your nervous system, and reclaim your peace. Step by step, the shadows break apart, the future brightens ahead of you, and you learn to step back out into the open warmth of the sun.
        </p>
        <div className="text-[12px] tracking-wide text-[#7a87b8] font-serif italic font-medium border-l-2 border-[#b2d6cd] pl-4">
          After all the heavy rain, you will look in the mirror and finally see yourself again.
        </div>
      </div>

      <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        
        <div className="w-full aspect-[4/3] bg-[#fcfbfa] overflow-hidden border border-[#b2d6cd]">
          <img 
            src="https://media.istockphoto.com/id/2211746734/photo/young-woman-former-victim-of-domestic-violence-relax-in-her-apartment-has-a-video-call-on.jpg?b=1&s=612x612&w=0&k=20&c=LS6YCKLRbiIR8rAOjwIQrtybS1t_b-l6TKAijTk5GIk=" 
            alt="An individual resting safely and smiling comfortably indoors in a peaceful moment" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full aspect-[4/3] bg-[#fcfbfa] overflow-hidden border border-[#b2d6cd] sm:mt-8">
          <img 
            src="https://images.pexels.com/photos/5698130/pexels-photo-5698130.jpeg" 
            alt="A close comforting interaction showing emotional care, safety, and human connection" 
            className="w-full h-full object-cover"
          />
        </div>

      </div>

    </section>
  );
}
