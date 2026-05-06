import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Handshake, Globe, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    icon: Handshake,
    title: "Local Rootedness",
    description: "We provide the deep community ties and cultural context necessary for any project to succeed in Narok and Kajiado. Our proximity is your impact.",
    color: "#c8922a"
  },
  {
    icon: ShieldCheck,
    title: "Radical Transparency",
    description: "Our financial and operational systems are designed for full accountability. We provide regular, detailed reporting to all our partners.",
    color: "#4a5e1f"
  },
  {
    icon: Globe,
    title: "Scalable Impact",
    description: "We are ready to scale our holistic model through strategic collaborations with international NGOs, foundations, and socially responsible businesses.",
    color: "#b5411a"
  }
];

const Collaborations = () => {
  return (
    <div className="min-h-screen bg-[#fdfcf9] overflow-x-hidden">
      <Navbar />
      
      {/* High-Premium Hero Section */}
      <section className="relative pt-[160px] pb-24 md:pt-[220px] md:pb-32 bg-[#2d3a0e] overflow-hidden">
        {/* Subtle Background Texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]"></div>
        </div>
        
        <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12">
          <div className="max-w-[850px]">
            <span className="inline-block font-['Inter',sans-serif] font-semibold text-[#c8922a] uppercase tracking-[0.2em] text-sm mb-6">
              Strategic Alliances
            </span>
            <h1 className="font-['Playfair_Display',serif] font-black text-white text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.1] mb-8">
              Walking Together for <br />
              <span className="text-[#c8922a]">Collective Impact.</span>
            </h1>
            <p className="font-['Inter',sans-serif] font-light text-lg md:text-xl text-white/80 leading-relaxed max-w-[700px]">
              We believe that true community transformation is not a solo journey. We invite partners who share our commitment to dignity, heritage, and sustainable growth to join us in Narok and Kajiado.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Readiness Section - Glassmorphism Card */}
      <section className="relative -mt-12 z-10">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 md:p-16 rounded-[2rem] shadow-2xl bg-[#2d3a0e]/5 border-[#2d3a0e]/10">
            <div className="max-w-[800px] mx-auto text-center">
              <h2 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-2xl md:text-4xl mb-8 leading-tight">
                Built for Institutional Partnership
              </h2>
              <p className="font-['Inter',sans-serif] font-light text-lg md:text-xl text-[#555] leading-relaxed">
                As a registered NGO in Kenya, we have built our operational framework from the ground up to be "partnership-ready." We combine local authenticity with institutional standards of accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Pillars of Collaboration Grid */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={i} 
                  className="group relative p-10 rounded-3xl bg-white border border-[#2d3a0e]/5 shadow-[0_4px_20px_rgba(45,58,14,0.03)] hover:shadow-[0_20px_60px_rgba(45,58,14,0.1)] transition-all duration-500"
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-500"
                    style={{ backgroundColor: pillar.color }}
                  >
                    <Icon size={32} className="text-white" />
                  </div>
                  
                  <h3 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-2xl mb-4">
                    {pillar.title}
                  </h3>
                  
                  <p className="font-['Inter',sans-serif] font-light text-lg text-[#555] leading-relaxed mb-8">
                    {pillar.description}
                  </p>

                  <div className="flex items-center gap-2 text-[#c8922a] font-black text-sm uppercase tracking-widest">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Institutional Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Collaborate with Us - Elevated Section */}
      <section className="relative py-24 md:py-32 bg-[#2d3a0e] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#c8922a]/5 skew-x-[-15deg] translate-x-1/4"></div>
        
        <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-['Playfair_Display',serif] font-black text-white text-3xl md:text-5xl mb-8 leading-tight">
                Why Partner with <br />
                <span className="text-[#c8922a]">Maasai Focus Mission?</span>
              </h2>
              <div className="space-y-6">
                {[
                  "Deep Proximity: We live in the communities we serve.",
                  "Cultural Competency: We navigate local customs with respect.",
                  "Sustainable Model: We focus on long-term self-reliance.",
                  "Direct Impact: Low overhead ensures resources reach the field."
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#c8922a]/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#c8922a]"></div>
                    </div>
                    <p className="font-['Inter',sans-serif] text-white/80 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              {/* Glassmorphism Inquiry Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 md:p-12 rounded-[2rem] shadow-2xl">
                <h3 className="font-['Playfair_Display',serif] font-black text-white text-2xl mb-6">Start a Conversation</h3>
                <p className="font-['Inter',sans-serif] text-white/70 mb-10 leading-relaxed">
                  Whether you represent a foundation, an NGO, or a corporate partner, we are ready to discuss how we can walk together toward a shared vision of community dignity.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-4 bg-[#c8922a] text-[#2d3a0e] font-['Inter',sans-serif] font-black text-lg px-10 py-5 rounded-full transition-all hover:scale-105 hover:shadow-xl group"
                >
                  Inquire About Partnership
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Partnership Network Quote */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12 text-center">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-3xl md:text-4xl mb-8">
              "Individually we are a drop, <br /> together we are an ocean."
            </h2>
            <div className="h-1 w-20 bg-[#c8922a] mx-auto mb-10"></div>
            <p className="font-['Inter',sans-serif] font-light text-xl text-[#555] leading-relaxed">
              Our collaborations extend beyond financial support; we seek intellectual exchange, shared advocacy, and a unified voice for the communities of the Rift Valley.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collaborations;
