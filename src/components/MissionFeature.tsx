const MissionFeature = () => {
  return (
    <section className="w-screen relative">
      <div className="absolute inset-0 bg-[#b5411a]" />
      <div className="relative mx-auto w-full max-w-[1280px] min-h-[400px] md:min-h-[478px]">
        {/* Desktop layout */}
        <div className="hidden md:block relative" style={{ minHeight: 478 }}>
          <div className="absolute bg-[#6b6b1a]" style={{ width: '40%', maxWidth: 493, height: 430, left: 27, top: 0 }} />
          <div className="absolute bg-[#4a5e1f]" style={{ width: 165, height: 149, left: '36%', top: 8 }} />
          <div className="absolute bg-[#2d3a0e]" style={{ width: 203, height: 196, right: 0, bottom: 0, zIndex: 0 }} />

          <div className="absolute z-10 right-6 lg:right-12 xl:right-0 top-12 w-full max-w-[520px]" style={{ left: 'auto', marginLeft: 'auto', marginRight: '2%' }}>
            <div className="xl:ml-0" style={{ paddingLeft: 0 }}>
              <h3 className="font-['Playfair_Display',serif] font-black text-white m-0 text-2xl md:text-[30px] lg:text-[37.504px] leading-tight">
                Rooted in community. Driven by heritage. Maasai Focus walks alongside the Maasai people — building lasting change from within.
              </h3>
              <p className="font-['Inter',sans-serif] font-light text-[#2d3a0e] mt-4 text-base md:text-lg lg:text-[20.608px] leading-relaxed">
                Discover how we work and where your support goes.
              </p>
              <div className="mt-6">
                <a href="#" className="bg-[#c8922a] text-[#2d3a0e] font-['Inter',sans-serif] font-black text-base md:text-lg lg:text-[19.84px] px-6 md:px-8 py-3 md:py-4 rounded-full inline-block">
                  Explore Our Programs
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet layout */}
        <div className="md:hidden p-6 sm:p-8">
          <div className="mx-auto w-full max-w-[400px] h-[200px] sm:h-[240px] bg-[#6b6b1a]" />
          <h3 className="font-['Playfair_Display',serif] font-black text-white mt-6 text-xl sm:text-2xl leading-tight">
            Rooted in community. Driven by heritage. Maasai Focus walks alongside the Maasai people — building lasting change from within.
          </h3>
          <p className="font-['Inter',sans-serif] font-light text-[#2d3a0e] mt-3 text-base sm:text-lg">
            Discover how we work and where your support goes.
          </p>
          <a href="#" className="inline-block mt-4 bg-[#c8922a] text-[#2d3a0e] font-['Inter',sans-serif] font-black text-base sm:text-lg px-6 py-3 rounded-full">
            Explore Our Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default MissionFeature;
