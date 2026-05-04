import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Heart, Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    icon: BookOpen,
    title: "Education",
    subtitle: "Nurturing the Mind",
    description:
      "We focus on long-term student sponsorships — covering school fees, uniforms, and learning materials. Our goal is not just enrollment, but consistent presence in the classroom, year after year.",
    link: "/programs/education",
    color: "#c8922a",
    features: ["Student Sponsorships", "Learning Materials", "Mentorship"]
  },
  {
    icon: Heart,
    title: "Health & Nutrition",
    subtitle: "Sustaining the Body",
    description:
      "Direct food relief and health sensitization form the backbone of our care. We help families access existing health services and provide emergency aid when the need is immediate.",
    link: "/programs/healthcare",
    color: "#4a5e1f",
    features: ["Food Relief", "Health Sensitization", "Emergency Aid"]
  },
  {
    icon: Shield,
    title: "Cultural Heritage",
    subtitle: "Preserving the Soul",
    description:
      "Development that does not respect tradition is not development at all. We ensure that every initiative honours Maasai identity, language, and customs — because a culture that is respected can lead its own future.",
    link: "/programs/community",
    color: "#b5411a",
    features: ["Traditional Values", "Cultural Preservation", "Community Dialogue"]
  },
];

const OurWork = () => {
  return (
    <div className="min-h-screen bg-[#fdfcf9] overflow-x-hidden">
      <Navbar />

      {/* High-Premium Hero Section */}
      <section className="relative pt-[160px] pb-24 md:pt-[220px] md:pb-32 bg-[#2d3a0e] overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]"></div>
        </div>
        
        <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12">
          <div className="max-w-[850px]">
            <span className="inline-block font-['Inter',sans-serif] font-semibold text-[#c8922a] uppercase tracking-[0.2em] text-sm mb-6">
              Our Methodology
            </span>
            <h1 className="font-['Playfair_Display',serif] font-black text-white text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.1] mb-8">
              A Holistic Approach to <br />
              <span className="text-[#c8922a]">Community Growth.</span>
            </h1>
            <p className="font-['Inter',sans-serif] font-light text-lg md:text-xl text-white/80 leading-relaxed max-w-[700px]">
              We believe that true transformation isn't found in a single project, but in the intersection of health, education, and heritage. Every initiative is designed to empower, not just assist.
            </p>
          </div>
        </div>
      </section>

      {/* The Strategy Quote - Glassmorphism Card */}
      <section className="relative -mt-12 z-10">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 md:p-16 rounded-[2rem] shadow-2xl bg-[#2d3a0e]/5 border-[#2d3a0e]/10">
            <p className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-2xl md:text-3xl lg:text-4xl text-center leading-relaxed italic">
              "A child who is healthy can learn; a community that is educated can thrive; and a culture that is respected can lead its own future."
            </p>
          </div>
        </div>
      </section>

      {/* The Three Pillars Grid with Glassmorphism Cards */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12">
          <div className="text-center max-w-[700px] mx-auto mb-20">
            <h2 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-3xl md:text-5xl mb-6">
              The Three Pillars
            </h2>
            <div className="h-1 w-20 bg-[#c8922a] mx-auto mb-8"></div>
            <p className="font-['Inter',sans-serif] font-light text-lg text-[#555] leading-relaxed">
              Everything we do falls within three interconnected areas — because no single intervention is enough on its own.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={i} 
                  className="group relative flex flex-col bg-white p-8 md:p-10 rounded-3xl border border-[#2d3a0e]/5 shadow-[0_4px_20px_rgba(45,58,14,0.03)] hover:shadow-[0_20px_60px_rgba(45,58,14,0.1)] transition-all duration-500 hover:-translate-y-2"
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-500"
                    style={{ backgroundColor: pillar.color }}
                  >
                    <Icon size={32} className="text-white" />
                  </div>
                  
                  <h3 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-2xl md:text-3xl mb-2">
                    {pillar.title}
                  </h3>
                  <span className="font-['Inter',sans-serif] font-bold text-xs uppercase tracking-[0.2em] mb-6 block" style={{ color: pillar.color }}>
                    {pillar.subtitle}
                  </span>
                  
                  <p className="font-['Inter',sans-serif] font-light text-lg text-[#555] leading-relaxed mb-8 flex-grow">
                    {pillar.description}
                  </p>

                  <div className="space-y-3 mb-10">
                    {pillar.features.map((feature, fi) => (
                      <div key={fi} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4" style={{ color: pillar.color }} />
                        <span className="font-['Inter',sans-serif] text-sm font-medium text-[#2d3a0e]/70">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    to={pillar.link}
                    className="flex items-center gap-3 font-['Inter',sans-serif] font-black text-[#2d3a0e] group/link"
                  >
                    <span className="underline decoration-[#c8922a] decoration-2 underline-offset-8 group-hover/link:text-[#c8922a] transition-colors">
                      View Pillar Details
                    </span>
                    <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform text-[#c8922a]" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainable Model Section - Glassmorphism Background */}
      <section className="relative py-24 md:py-32 bg-[#2d3a0e] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#c8922a]/5 skew-x-[-15deg] translate-x-1/4"></div>
        
        <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-['Playfair_Display',serif] font-black text-white text-3xl md:text-5xl mb-8 leading-tight">
                A Model for <br />
                <span className="text-[#c8922a]">Sustainable Change.</span>
              </h2>
              <p className="font-['Inter',sans-serif] font-light text-lg text-white/70 leading-relaxed mb-8">
                We don't believe in "helicopter aid." Our model is built on deep community consultation and long-term commitment. We measure success not by the amount of aid given, but by the strength of the community's own institutions.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-black text-[#c8922a] mb-1">100%</div>
                  <div className="text-sm font-bold text-white/50 uppercase tracking-widest">Community Led</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#c8922a] mb-1">Dignity</div>
                  <div className="text-sm font-bold text-white/50 uppercase tracking-widest">First Approach</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl">
                <h3 className="font-['Playfair_Display',serif] font-black text-white text-2xl mb-6">Our Promise</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#c8922a]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#c8922a]"></div>
                    </div>
                    <p className="font-['Inter',sans-serif] text-white/80">Every donation goes directly to community-approved projects.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#c8922a]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#c8922a]"></div>
                    </div>
                    <p className="font-['Inter',sans-serif] text-white/80">We maintain full transparency through regular community forums.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#c8922a]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#c8922a]"></div>
                    </div>
                    <p className="font-['Inter',sans-serif] text-white/80">Cultural preservation is non-negotiable in our development work.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12 text-center">
          <h2 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-3xl md:text-5xl mb-8">
            Walk With Us
          </h2>
          <p className="font-['Inter',sans-serif] font-light text-xl text-[#555] mb-12 max-w-[600px] mx-auto leading-relaxed">
            Whether through sponsorship, volunteering, or simply sharing our story — every step forward is one we take together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-[#c8922a] text-[#2d3a0e] font-['Inter',sans-serif] font-black text-lg px-12 py-5 rounded-full transition-all hover:scale-105 hover:shadow-xl"
            >
              Get Involved
            </Link>
            <Link
              to="/partner"
              className="w-full sm:w-auto border-2 border-[#2d3a0e] text-[#2d3a0e] font-['Inter',sans-serif] font-black text-lg px-12 py-5 rounded-full transition-all hover:bg-[#2d3a0e] hover:text-white"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurWork;
