import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import educationDetail from "@/assets/education-detail.jpg";
import healthcareDetail from "@/assets/healthcare-detail.jpg";
import communityLandscape from "@/assets/community-landscape.jpg";

const programs = [
  {
    title: "Education & Sensitization",
    text: "We focus on the 'Back-to-School' essentials—fees, uniforms, and books—ensuring that financial hurdles don't stop a child's potential.",
    image: educationDetail,
    alt: "A child's hand holding a pen, writing in a notebook",
    color: "#c8922a",
  },
  {
    title: "Sustainable Healthcare",
    text: "Our focus is on sensitization and support, helping families access existing health services and providing emergency aid when needed.",
    image: healthcareDetail,
    alt: "Traditional herbal remedies in a woven basket",
    color: "#4a5e1f",
  },
  {
    title: "Community Transformation",
    text: "Small-scale, direct interventions like the food relief in Nakuru, responding to immediate needs with dignity.",
    image: communityLandscape,
    alt: "Kenyan rural landscape with green rolling hills",
    color: "#2d3a0e",
  },
];

const Programs = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="w-screen relative bg-[#2d3a0e]">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 pt-[140px] md:pt-[180px] lg:pt-[220px] pb-12 md:pb-16">
          <h1 className="font-['Playfair_Display',serif] font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight">
            How We Walk Together
          </h1>
          <p className="font-['Inter',sans-serif] font-light text-lg md:text-xl text-white/70 mt-4 max-w-[600px]">
            Every program grows from the real, everyday needs of our community.
          </p>
        </div>
      </section>

      {/* Program sections */}
      {programs.map((program, i) => (
        <section
          key={i}
          className={`w-screen relative ${i % 2 === 0 ? "bg-white" : "bg-[#f9f8f4]"}`}
        >
          <div className={`mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 py-12 md:py-16 flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}>
            <div className="flex-1">
              <div
                className="w-12 h-1 rounded-full mb-4"
                style={{ backgroundColor: program.color }}
              />
              <h2 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-2xl sm:text-3xl md:text-[33px] lg:text-[37.504px] leading-tight mb-6">
                {program.title}
              </h2>
              <p className="font-['Inter',sans-serif] font-light text-base sm:text-lg md:text-xl text-[#555] leading-relaxed">
                {program.text}
              </p>
            </div>
            <div className="w-full lg:w-[420px] flex-shrink-0">
              <img
                src={program.image}
                alt={program.alt}
                className="w-full h-[240px] sm:h-[280px] md:h-[320px] object-cover rounded-lg"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>
        </section>
      ))}

      {/* Closing note */}
      <section className="w-screen relative bg-[#2d3a0e]">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 py-12 md:py-16 text-center">
          <p className="font-['Playfair_Display',serif] font-black text-white text-xl sm:text-2xl md:text-3xl leading-tight max-w-[700px] mx-auto">
            "We don't have all the answers. But we show up, and we keep walking."
          </p>
          <p className="font-['Inter',sans-serif] font-light text-base md:text-lg text-white/60 mt-4">
            — The Maasai Focus Team
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
