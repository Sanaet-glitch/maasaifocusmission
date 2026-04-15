const stats = [
  { number: "3,000+", label: "Target Community Members" },
  { number: "5+", label: "Core Community Programs" },
  { number: "100%", label: "Direct Impact Commitment" },
];

const Stats = () => {
  return (
    <section className="w-screen relative">
      <div className="absolute inset-0 bg-white" />
      <div className="relative mx-auto w-full max-w-[1280px] flex flex-col items-center justify-center min-h-[400px] md:min-h-[550px] lg:min-h-[662px] px-6 sm:px-8 md:px-12 py-12 md:py-16">
        <h3 className="font-['Playfair_Display',serif] font-black text-center mb-6 md:mb-8 text-2xl sm:text-3xl md:text-[33px] lg:text-[37.504px] leading-tight">
          <span className="text-[#b5411a]">The Maasai community</span>{" "}
          <span className="text-[#2d3a0e]">deserves heritage and collective growth.</span>
        </h3>
        <p className="font-['Inter',sans-serif] font-light text-[#2d3a0e] text-center mt-2 md:mt-4 text-base sm:text-lg md:text-xl lg:text-[23.68px] leading-relaxed max-w-3xl">
          Every contribution directly transforms lives in Kenya's Maasai communities.
        </p>

        <div className="flex flex-col sm:flex-row justify-around items-center sm:items-start w-full mt-10 md:mt-12 gap-10 sm:gap-6 md:gap-0">
          {stats.map((stat, i) => (
            <div key={i} className="text-center flex-1">
              <div className="font-['Playfair_Display',serif] font-black text-[#c8922a] text-[50px] sm:text-[60px] md:text-[70px] lg:text-[86px] leading-none">
                {stat.number}
              </div>
              <div className="font-['Inter',sans-serif] font-light text-[#2d3a0e] text-base sm:text-lg md:text-xl lg:text-[23.68px] leading-relaxed mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
