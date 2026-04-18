import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Handshake, Shield, Eye, Sprout, ArrowRight } from "lucide-react";
import heroLandscape from "@/assets/hero-landscape.jpg";
import beadworkDetail from "@/assets/beadwork-detail.jpg";

const partnerPoints = [
  {
    icon: Shield,
    title: "Rooted Authenticity",
    description: "We are Maasai-led and community-rooted. Our partners know they are supporting work that truly understands and respects the context."
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    description: "We share everything — from budget breakdowns to field reports. You'll always know exactly how your contribution is being used."
  },
  {
    icon: Sprout,
    title: "Sustainable Impact",
    description: "We don't do quick fixes. Our programs are designed for long-term growth that outlasts any single project cycle."
  }
];

const Partner = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="w-screen relative bg-[#2d3a0e]">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 pt-[140px] md:pt-[180px] lg:pt-[220px] pb-12 md:pb-16">
          <h1 className="font-['Playfair_Display',serif] font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight">
            Partners in Purpose
          </h1>
          <p className="font-['Inter',sans-serif] font-light text-lg md:text-xl text-white/70 mt-4 max-w-[700px] leading-relaxed">
            We don't work in isolation. We partner with churches, NGOs, and businesses who share our commitment to holistic community growth.
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

      {/* Why Partner With Us */}
      <section className="w-screen relative bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 py-12 md:py-16">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#c8922a] flex items-center justify-center">
                  <Handshake size={24} className="text-white" />
                </div>
                <span className="font-['Inter',sans-serif] font-medium text-[#c8922a] text-sm md:text-base uppercase tracking-wider">
                  Partnership
                </span>
              </div>
              <h2 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-2xl sm:text-3xl md:text-[33px] lg:text-[37.504px] leading-tight mb-6">
                Why Partner With Us?
              </h2>
              <p className="font-['Inter',sans-serif] font-light text-base md:text-lg text-[#555] mb-8 leading-relaxed">
                We believe the best partnerships are built on shared values, not just shared goals. When you partner with Maasai Focus Mission, you join a network of organizations committed to dignified, community-led development.
              </p>

              <div className="space-y-6">
                {partnerPoints.map((point, i) => {
                  const Icon = point.icon;
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#c8922a]/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={20} className="text-[#c8922a]" />
                      </div>
                      <div>
                        <h3 className="font-['Inter',sans-serif] font-semibold text-lg md:text-xl text-[#2d3a0e] mb-1">
                          {point.title}
                        </h3>
                        <p className="font-['Inter',sans-serif] font-light text-base md:text-lg text-[#555] leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="w-full lg:w-[400px] flex-shrink-0">
              <img
                src={beadworkDetail}
                alt="Maasai beadwork cultural detail"
                className="w-full h-[300px] sm:h-[360px] lg:h-[400px] object-cover rounded-lg"
                loading="lazy"
                width={800}
                height={800}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="w-screen relative bg-[#f9f8f4]">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 py-12 md:py-16">
          <h2 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-2xl sm:text-3xl md:text-[33px] leading-tight mb-10 text-center">
            How Organizations Can Partner
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="rounded-lg p-6 md:p-8 bg-white">
              <h3 className="font-['Inter',sans-serif] font-semibold text-lg md:text-xl text-[#2d3a0e] mb-3">
                Churches & Faith Groups
              </h3>
              <p className="font-['Inter',sans-serif] font-light text-base md:text-lg text-[#555] leading-relaxed">
                Join us in serving with compassion. We welcome prayer support, mission trips, and collaborative outreach programs.
              </p>
            </div>
            <div className="rounded-lg p-6 md:p-8 bg-white">
              <h3 className="font-['Inter',sans-serif] font-semibold text-lg md:text-xl text-[#2d3a0e] mb-3">
                NGOs & Nonprofits
              </h3>
              <p className="font-['Inter',sans-serif] font-light text-base md:text-lg text-[#555] leading-relaxed">
                Let's combine strengths. We seek partnerships that amplify impact through shared resources and complementary expertise.
              </p>
            </div>
            <div className="rounded-lg p-6 md:p-8 bg-white">
              <h3 className="font-['Inter',sans-serif] font-semibold text-lg md:text-xl text-[#2d3a0e] mb-3">
                Businesses & CSR
              </h3>
              <p className="font-['Inter',sans-serif] font-light text-base md:text-lg text-[#555] leading-relaxed">
                Corporate partners find meaningful alignment with our education and health initiatives. Let's create shared value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-screen relative bg-[#2d3a0e]">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 py-12 md:py-16 text-center">
          <div className="w-16 h-16 rounded-full bg-[#c8922a] flex items-center justify-center mx-auto mb-6">
            <Handshake size={32} className="text-[#2d3a0e]" />
          </div>
          <h2 className="font-['Playfair_Display',serif] font-black text-white text-2xl sm:text-3xl md:text-[33px] leading-tight mb-4">
            Start a Conversation
          </h2>
          <p className="font-['Inter',sans-serif] font-light text-base md:text-lg text-white/70 max-w-[500px] mx-auto mb-8 leading-relaxed">
            Every great partnership begins with a simple conversation. Tell us about your organization and let's explore how we can walk together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#c8922a] text-[#2d3a0e] font-['Inter',sans-serif] font-black text-base md:text-lg px-8 py-4 rounded-full hover:bg-[#d9a73a] transition-colors"
          >
            Start a Conversation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partner;