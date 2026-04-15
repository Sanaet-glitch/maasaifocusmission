import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    title: "Respect for Culture",
    description: "We honour the traditions, language, and identity of the Maasai people in everything we do.",
    color: "#c8922a",
  },
  {
    title: "Honest Service",
    description: "We show up with integrity — no hidden agendas, no empty promises. Just genuine care.",
    color: "#4a5e1f",
  },
  {
    title: "Community First",
    description: "Every decision we make starts and ends with the people we walk alongside.",
    color: "#2d3a0e",
  },
];

const About = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* Hero heading */}
      <section className="w-screen relative bg-[#2d3a0e]">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 pt-[140px] md:pt-[180px] lg:pt-[220px] pb-12 md:pb-16">
          <h1 className="font-['Playfair_Display',serif] font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight">
            A Community Response.
          </h1>
        </div>
      </section>

      {/* Who We Are */}
      <section className="w-screen relative bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 py-12 md:py-16">
          <h2 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-2xl sm:text-3xl md:text-[33px] lg:text-[37.504px] leading-tight mb-6">
            Who We Are
          </h2>
          <p className="font-['Inter',sans-serif] font-light text-base sm:text-lg md:text-xl text-[#555] leading-relaxed max-w-[800px]">
            Maasai Focus Mission didn't start in an office. It started in our community, seeing children who needed school fees and families who needed a hand. We are a small team dedicated to our roots. Before any registration or formal structure, we were simply neighbours responding to what was in front of us — with whatever we had.
          </p>
        </div>
      </section>

      {/* What We've Done */}
      <section className="w-screen relative bg-[#f9f8f4]">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 py-12 md:py-16">
          <h2 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-2xl sm:text-3xl md:text-[33px] lg:text-[37.504px] leading-tight mb-8">
            What We've Done
          </h2>
          <div className="space-y-6 max-w-[800px]">
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 mt-2 rounded-full bg-[#c8922a] flex-shrink-0" />
              <div>
                <h3 className="font-['Inter',sans-serif] font-semibold text-lg md:text-xl text-[#2d3a0e] mb-1">
                  Student Support
                </h3>
                <p className="font-['Inter',sans-serif] font-light text-base md:text-lg text-[#555] leading-relaxed">
                  Helping children stay in the classroom. We walk with students, covering school fees and providing essentials so they can focus on learning.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-3 h-3 mt-2 rounded-full bg-[#4a5e1f] flex-shrink-0" />
              <div>
                <h3 className="font-['Inter',sans-serif] font-semibold text-lg md:text-xl text-[#2d3a0e] mb-1">
                  Emergency Food Relief
                </h3>
                <p className="font-['Inter',sans-serif] font-light text-base md:text-lg text-[#555] leading-relaxed">
                  Sharing what we have with those in need. When a family is struggling, we show up with food, supplies, and presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-screen relative bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 py-12 md:py-16">
          <h2 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-2xl sm:text-3xl md:text-[33px] lg:text-[37.504px] leading-tight mb-8">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="rounded-lg p-6 md:p-8"
                style={{ backgroundColor: value.color + "12" }}
              >
                <div
                  className="w-10 h-10 rounded-full mb-4 flex items-center justify-center"
                  style={{ backgroundColor: value.color }}
                >
                  <span className="text-white font-['Inter',sans-serif] font-bold text-lg">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-['Inter',sans-serif] font-semibold text-lg md:text-xl text-[#2d3a0e] mb-2">
                  {value.title}
                </h3>
                <p className="font-['Inter',sans-serif] font-light text-base md:text-lg text-[#555] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
