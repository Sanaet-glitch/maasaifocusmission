const partners = [
  { name: "Kenya NGO Bureau", color: "#2d3a0e", bold: false },
  { name: "Partner Church", color: "#2d3a0e", bold: false },
  { name: "Donor Organization", color: "#2d3a0e", bold: false },
  { name: "Become a Partner →", color: "#b5411a", bold: true },
];

const Partners = () => {
  return (
    <section className="w-screen relative">
      <div className="absolute inset-0 bg-white" />
      <div className="relative mx-auto w-full max-w-[1280px] flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 py-12 md:py-16">
        <h3 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-center mb-8 md:mb-10 text-2xl sm:text-3xl md:text-[33px] lg:text-[37.504px] leading-tight">
          Our Partners
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-[45px]">
          {partners.map((p, i) => (
            <span
              key={i}
              className="font-['Inter',sans-serif] text-base sm:text-lg md:text-xl"
              style={{ color: p.color, fontWeight: p.bold ? 700 : 500 }}
            >
              {p.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
