import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Users, Globe, Heart, ArrowRight } from "lucide-react";
import heroLandscape from "@/assets/hero-landscape.jpg";

const localRoles = [
  {
    title: "Community Outreach",
    description: "Walk alongside our team in Narok and Kajiado, connecting with families and sharing resources."
  },
  {
    title: "Student Mentorship",
    description: "Guide and encourage students through tutoring, career guidance, and emotional support."
  },
  {
    title: "Event Support",
    description: "Help organize and run community gatherings, school outreach events, and cultural celebrations."
  }
];

const virtualRoles = [
  {
    title: "Grant Writing",
    description: "Use your writing skills to help us secure funding and tell our story to potential partners."
  },
  {
    title: "Social Media Storytelling",
    description: "Share our journey with the world through compelling content and meaningful narratives."
  },
  {
    title: "Administrative Support",
    description: "Assist with scheduling, communications, and coordination from wherever you are."
  }
];

const Volunteer = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="w-screen relative bg-[#2d3a0e]">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 pt-[140px] md:pt-[180px] lg:pt-[220px] pb-12 md:pb-16">
          <h1 className="font-['Playfair_Display',serif] font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight">
            Join the Journey
          </h1>
          <p className="font-['Inter',sans-serif] font-light text-lg md:text-xl text-white/70 mt-4 max-w-[700px] leading-relaxed">
            Maasai Focus Mission is built on the belief that we are stronger together. Whether you are a neighbor in Narok or a friend from across the globe, there is a place for you here.
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

      {/* Local Opportunities */}
      <section className="w-screen relative bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 py-12 md:py-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#c8922a] flex items-center justify-center">
              <Users size={24} className="text-white" />
            </div>
            <span className="font-['Inter',sans-serif] font-medium text-[#c8922a] text-sm md:text-base uppercase tracking-wider">
              Local Opportunities
            </span>
          </div>
          <h2 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-2xl sm:text-3xl md:text-[33px] lg:text-[37.504px] leading-tight mb-4">
            Narok & Kajiado
          </h2>
          <p className="font-['Inter',sans-serif] font-light text-base md:text-lg text-[#555] max-w-[600px] mb-10 leading-relaxed">
            Help us walk alongside our neighbors. Our local volunteers are the heartbeat of our daily work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {localRoles.map((role, i) => (
              <div key={i} className="rounded-lg p-6 md:p-8 bg-[#f9f8f4]">
                <h3 className="font-['Inter',sans-serif] font-semibold text-lg md:text-xl text-[#2d3a0e] mb-3">
                  {role.title}
                </h3>
                <p className="font-['Inter',sans-serif] font-light text-base md:text-lg text-[#555] leading-relaxed">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Opportunities */}
      <section className="w-screen relative bg-[#f9f8f4]">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 py-12 md:py-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#4a5e1f] flex items-center justify-center">
              <Globe size={24} className="text-white" />
            </div>
            <span className="font-['Inter',sans-serif] font-medium text-[#4a5e1f] text-sm md:text-base uppercase tracking-wider">
              Virtual Opportunities
            </span>
          </div>
          <h2 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-2xl sm:text-3xl md:text-[33px] lg:text-[37.504px] leading-tight mb-4">
            From Anywhere in the World
          </h2>
          <p className="font-['Inter',sans-serif] font-light text-base md:text-lg text-[#555] max-w-[600px] mb-10 leading-relaxed">
            Lend your skills to our mission from anywhere in the world. Distance is no barrier to making a difference.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {virtualRoles.map((role, i) => (
              <div key={i} className="rounded-lg p-6 md:p-8 bg-white">
                <h3 className="font-['Inter',sans-serif] font-semibold text-lg md:text-xl text-[#2d3a0e] mb-3">
                  {role.title}
                </h3>
                <p className="font-['Inter',sans-serif] font-light text-base md:text-lg text-[#555] leading-relaxed">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-screen relative bg-[#2d3a0e]">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 py-12 md:py-16 text-center">
          <div className="w-16 h-16 rounded-full bg-[#c8922a] flex items-center justify-center mx-auto mb-6">
            <Heart size={32} className="text-[#2d3a0e]" />
          </div>
          <h2 className="font-['Playfair_Display',serif] font-black text-white text-2xl sm:text-3xl md:text-[33px] leading-tight mb-4">
            Ready to Walk With Us?
          </h2>
          <p className="font-['Inter',sans-serif] font-light text-base md:text-lg text-white/70 max-w-[500px] mx-auto mb-8 leading-relaxed">
            Every hand that joins us makes the load lighter and the impact greater. Let's talk about how you can contribute.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#c8922a] text-[#2d3a0e] font-['Inter',sans-serif] font-black text-base md:text-lg px-8 py-4 rounded-full hover:bg-[#d9a73a] transition-colors"
          >
            Apply to Volunteer
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Volunteer;