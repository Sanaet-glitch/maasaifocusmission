import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[#3b2008]" />
      <div className="relative mx-auto w-full max-w-[1280px] pt-[100px] md:pt-[130px] lg:pt-[168px]">
        <div className="flex flex-col md:flex-row w-full relative min-h-[500px] md:min-h-[550px] lg:min-h-[652px]">
          {/* Left Column */}
          <div className="flex flex-col justify-center w-full md:w-1/2 px-6 sm:px-8 md:pl-10 lg:pl-[88px] md:pr-4 py-10 md:py-16">
            <h1 className="font-['Playfair_Display',serif] font-black leading-[1.05] tracking-tight m-0 text-[42px] sm:text-[52px] md:text-[60px] lg:text-[77.44px]">
              <span className="text-[#c8922a]">Our Roots.</span>
              <br />
              <span className="text-[#c8922a]">Our Culture.</span>
              <br />
              <span className="text-white">Our People.</span>
            </h1>
            <p className="font-['Inter',sans-serif] font-light text-white mt-6 max-w-[550px] text-lg md:text-xl lg:text-[24px] leading-relaxed">
              Empowering Maasai communities through education and sensitization,
              sustainable healthcare, and holistic community transformation since 2025.
            </p>
            <div className="mt-6">
              <Link
                to="/about"
                className="bg-[#c8922a] text-[#2d3a0e] font-['Inter',sans-serif] font-black text-base md:text-lg lg:text-[19.84px] px-6 md:px-8 py-3 md:py-4 rounded-full inline-block hover:opacity-90 transition-opacity"
              >
                Learn Our Story
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative w-full md:w-1/2 flex items-center justify-center min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
            {/* Gold ring - bleeds off right edge */}
            <div
              className="hidden md:block absolute rounded-full bg-[#c8922a] z-0"
              style={{ width: 540, height: 540, right: -250, top: 20 }}
            />
            {/* Mobile gold ring */}
            <div
              className="md:hidden absolute rounded-full bg-[#c8922a] z-0"
              style={{ width: 350, height: 350, right: -120, top: 0 }}
            />
            <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px] relative z-10 rounded-full overflow-hidden bg-[#6b6b1a]" />
          </div>
        </div>
      </div>

      {/* Color Strips */}
      <div className="relative w-full h-[47px]">
        <div className="absolute inset-0 bg-[#c8922a]" />
        <div className="absolute left-0 top-0 w-1/2 h-full bg-[#4a5e1f]" />
      </div>
    </section>
  );
};

export default Hero;
