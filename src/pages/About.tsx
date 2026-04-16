import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroLandscape from "@/assets/hero-landscape.jpg";
import beadworkDetail from "@/assets/beadwork-detail.jpg";
import journeySprout from "@/assets/journey-sprout.jpg";
import newsBasket from "@/assets/news-basket.jpg";
import newsPath from "@/assets/news-path.jpg";

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

const timeline = [
  { year: "2024", title: "Quiet Beginnings", description: "First student sponsorships — neighbors helping neighbors before any formal structure existed.", image: journeySprout, alt: "Small sprout in red soil" },
  { year: "2025", title: "Community Outreach", description: "Food relief efforts in Nakuru, responding to immediate needs with whatever we had.", image: newsBasket, alt: "Traditional basket with grains" },
  { year: "2026", title: "Formal Commitment", description: "Official NGO registration in Kenya — a tool to help us serve our community better.", image: newsPath, alt: "Winding path through the savannah" },
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
          <p className="font-['Inter',sans-serif] font-light text-lg md:text-xl text-white/70 mt-4 max-w-[600px]">
            We are a small team of neighbors, learning as we go.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="w-screen relative bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 py-12 md:py-16 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="flex-1">
            <h2 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-2xl sm:text-3xl md:text-[33px] lg:text-[37.504px] leading-tight mb-6">
              Who We Are
            </h2>
            <p className="font-['Inter',sans-serif] font-light text-base sm:text-lg md:text-xl text-[#555] leading-relaxed">
              Maasai Focus Mission didn't start in an office. It started in our community, seeing children who needed school fees and families who needed a hand. We are a small team dedicated to our roots. Before any registration or formal structure, we were simply neighbours responding to what was in front of us — with whatever we had.
            </p>
          </div>
          <div className="w-full lg:w-[360px] flex-shrink-0">
            <img
              src={beadworkDetail}
              alt="Maasai beadwork cultural detail"
              className="w-full h-[260px] lg:h-[300px] object-cover rounded-lg"
              loading="lazy"
              width={800}
              height={800}
            />
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="w-screen relative bg-[#2d3a0e]">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 py-12 md:py-16">
          <h2 className="font-['Playfair_Display',serif] font-black text-white text-2xl sm:text-3xl md:text-[33px] lg:text-[37.504px] leading-tight mb-10">
            Our Journey
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-[2px] bg-[#c8922a]/30" />
            <div className="space-y-8 md:space-y-10">
              {timeline.map((item, i) => (
                <div key={i} className="flex items-start gap-5 md:gap-6 relative">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#c8922a] flex items-center justify-center flex-shrink-0 z-10">
                    <span className="font-['Inter',sans-serif] font-bold text-xs md:text-sm text-[#2d3a0e]">
                      {item.year}
                    </span>
                  </div>
                  <div className="pt-1 flex-1">
                    <h3 className="font-['Inter',sans-serif] font-semibold text-lg md:text-xl text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="font-['Inter',sans-serif] font-light text-base md:text-lg text-white/70 leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full max-w-[400px] h-[140px] sm:h-[160px] object-cover rounded-lg"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
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

      {/* Landscape image break */}
      <section className="w-screen relative">
        <img
          src={heroLandscape}
          alt="Kenyan savanna landscape at golden hour"
          className="w-full h-[200px] sm:h-[260px] md:h-[340px] object-cover"
          loading="lazy"
          width={1280}
          height={720}
        />
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
