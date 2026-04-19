import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Heart, Shield } from "lucide-react";
import heroLandscape from "@/assets/hero-landscape.jpg";
import educationDetail from "@/assets/education-detail.jpg";
import healthcareDetail from "@/assets/healthcare-detail.jpg";
import beadworkDetail from "@/assets/beadwork-detail.jpg";

const pillars = [
  {
    icon: BookOpen,
    title: "Education",
    subtitle: "Nurturing the Mind",
    description:
      "We focus on long-term student sponsorships — covering school fees, uniforms, and learning materials. Our goal is not just enrollment, but consistent presence in the classroom, year after year.",
    image: educationDetail,
    imageAlt: "Education essentials on a desk",
    color: "#c8922a",
  },
  {
    icon: Heart,
    title: "Health & Nutrition",
    subtitle: "Sustaining the Body",
    description:
      "Direct food relief and health sensitization form the backbone of our care. We help families access existing health services and provide emergency aid when the need is immediate.",
    image: healthcareDetail,
    imageAlt: "Healthcare and nutrition support",
    color: "#4a5e1f",
  },
  {
    icon: Shield,
    title: "Cultural Heritage",
    subtitle: "Preserving the Soul",
    description:
      "Development that does not respect tradition is not development at all. We ensure that every initiative honours Maasai identity, language, and customs — because a culture that is respected can lead its own future.",
    image: beadworkDetail,
    imageAlt: "Maasai beadwork cultural detail",
    color: "#b5411a",
  },
];

const OurWork = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="w-screen relative bg-[#2d3a0e]">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 pt-[140px] md:pt-[180px] lg:pt-[220px] pb-12 md:pb-16">
          <h1 className="font-['Playfair_Display',serif] font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight">
            A Holistic Approach to Community Growth
          </h1>
          <p className="font-['Inter',sans-serif] font-light text-lg md:text-xl text-white/70 mt-4 max-w-[700px] leading-relaxed">
            We believe that true transformation isn't found in a single project, but in the intersection of health, education, and heritage. A child who is healthy can learn; a community that is educated can thrive; and a culture that is respected can lead its own future.
          </p>
        </div>
      </section>

      {/* Landscape break */}
      <section className="w-screen relative">
        <img
          src={heroLandscape}
          alt="Kenyan savanna landscape"
          className="w-full h-[200px] sm:h-[260px] md:h-[340px] object-cover"
          loading="lazy"
          width={1280}
          height={720}
        />
      </section>

      {/* The Three Pillars */}
      <section className="w-screen relative bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 py-12 md:py-16">
          <h2 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-3xl md:text-4xl leading-tight mb-6 text-center">
            The Three Pillars
          </h2>
          <p className="font-['Inter',sans-serif] font-light text-lg md:text-xl text-[#555] text-center max-w-[700px] mx-auto mb-10 md:mb-14">
            Everything we do falls within three interconnected areas — because no single intervention is enough on its own.
          </p>

          <div className="space-y-12 md:space-y-16">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              const isReversed = i % 2 === 1;
              return (
                <div
                  key={i}
                  className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 items-center`}
                >
                  <div className="flex-1">
                    <div
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-4"
                      style={{ backgroundColor: pillar.color }}
                    >
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-2xl md:text-3xl leading-tight mb-1">
                      {pillar.title}
                    </h3>
                    <span
                      className="font-['Inter',sans-serif] font-medium text-sm md:text-base block mb-4"
                      style={{ color: pillar.color }}
                    >
                      {pillar.subtitle}
                    </span>
                    <p className="font-['Inter',sans-serif] font-light text-lg text-[#555] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="w-full lg:w-[400px] flex-shrink-0">
                    <img
                      src={pillar.image}
                      alt={pillar.imageAlt}
                      className="w-full h-[240px] sm:h-[280px] lg:h-[300px] object-cover rounded-lg"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-screen relative bg-[#f9f8f4]">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 py-12 md:py-16 text-center">
          <h2 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-2xl sm:text-3xl md:text-[33px] leading-tight mb-4">
            Walk With Us
          </h2>
          <p className="font-['Inter',sans-serif] font-light text-base md:text-lg text-[#555] max-w-[500px] mx-auto mb-8 leading-relaxed">
            Whether through sponsorship, volunteering, or simply sharing our story — every step forward is one we take together.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#c8922a] text-[#2d3a0e] font-['Inter',sans-serif] font-black text-base md:text-lg px-8 py-4 rounded-full"
          >
            Get Involved
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurWork;
