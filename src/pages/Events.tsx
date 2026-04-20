import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Users, Leaf, ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const roadmapItems = [
  {
    quarter: "Q3 2026",
    title: "Education Awareness Workshop",
    location: "Narok County",
    description: "A community-led dialogue focused on school enrollment, retention strategies, and the vital importance of girl-child education in our evolving landscape.",
    tags: ["Sensitization", "Education", "Community"]
  },
  {
    quarter: "Q4 2026",
    title: "Health & Nutrition Community Day",
    location: "Kajiado Region",
    description: "A comprehensive day of sensitization focused on family wellness, preventive care, and nutritional best practices tailored for rural Maasai households.",
    tags: ["Wellness", "Nutrition", "Family"]
  },
  {
    quarter: "Ongoing",
    title: "Local Leadership Engagement",
    location: "Narok & Kajiado",
    description: "Regular consultative meetings with community elders and local leaders to ensure every project remains aligned with our traditional values and community needs.",
    tags: ["Leadership", "Consultation", "Heritage"]
  }
];

const Events = () => {
  return (
    <div className="min-h-screen bg-[#fdfcf9] overflow-x-hidden">
      <Navbar />

      {/* Premium Hero Section */}
      <section className="relative pt-[160px] pb-24 md:pt-[220px] md:pb-32 bg-[#2d3a0e] overflow-hidden">
        {/* Subtle Background Pattern/Texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]"></div>
        </div>
        
        <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12">
          <div className="max-w-[800px]">
            <span className="inline-block font-['Inter',sans-serif] font-semibold text-[#c8922a] uppercase tracking-[0.2em] text-sm mb-6">
              Institutional Trust & Transparency
            </span>
            <h1 className="font-['Playfair_Display',serif] font-black text-white text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.1] mb-8">
              Our 2026 <br />
              <span className="text-[#c8922a]">Community Roadmap.</span>
            </h1>
            <p className="font-['Inter',sans-serif] font-light text-lg md:text-xl text-white/80 leading-relaxed max-w-[650px]">
              We believe in planned, strategic outreach that respects the rhythm of our community. Every event is co-designed with elders to ensure cultural dignity and lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Timeline Section */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Sidebar Strategy */}
            <div className="lg:w-1/3">
              <div className="sticky top-[120px]">
                <h2 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-3xl md:text-4xl mb-6">
                  Planned Outreach & Sensitization
                </h2>
                <p className="font-['Inter',sans-serif] font-light text-lg text-[#555] leading-relaxed mb-8">
                  While our dates remain flexible to accommodate community rhythms, these focus areas represent our core commitments for the coming year.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[#2d3a0e]">
                    <CheckCircle2 className="w-5 h-5 text-[#c8922a]" />
                    <span className="font-['Inter',sans-serif] font-medium">Elder-Approved Agenda</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#2d3a0e]">
                    <CheckCircle2 className="w-5 h-5 text-[#c8922a]" />
                    <span className="font-['Inter',sans-serif] font-medium">Culturally Responsive Methods</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#2d3a0e]">
                    <CheckCircle2 className="w-5 h-5 text-[#c8922a]" />
                    <span className="font-['Inter',sans-serif] font-medium">Sustainable Knowledge Transfer</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Items */}
            <div className="lg:w-2/3 space-y-12">
              {roadmapItems.map((item, index) => (
                <div key={index} className="group relative bg-white p-8 md:p-10 rounded-2xl border border-[#2d3a0e]/5 shadow-[0_4px_20px_rgba(45,58,14,0.03)] hover:shadow-[0_10px_40px_rgba(45,58,14,0.08)] transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-[#2d3a0e] flex flex-col items-center justify-center text-white">
                        <Calendar className="w-6 h-6 text-[#c8922a] mb-1" />
                        <span className="text-[10px] font-bold uppercase tracking-tighter">{item.quarter.split(' ')[0]}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag, ti) => (
                          <span key={ti} className="px-3 py-1 bg-[#f9f8f4] text-[#2d3a0e]/60 text-[10px] font-bold uppercase tracking-widest rounded-full border border-[#2d3a0e]/5">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-2xl md:text-3xl mb-3 group-hover:text-[#c8922a] transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 text-[#c8922a] font-['Inter',sans-serif] font-semibold text-sm mb-4 uppercase tracking-wider">
                        <MapPin className="w-4 h-4" />
                        {item.location}
                      </div>
                      <p className="font-['Inter',sans-serif] font-light text-lg text-[#555] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why We Train - Philosophical Section */}
      <section className="bg-[#2d3a0e] py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#c8922a]/5 skew-x-[-15deg] translate-x-1/4"></div>
        
        <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12">
          <div className="text-center max-w-[850px] mx-auto mb-20">
            <h2 className="font-['Playfair_Display',serif] font-black text-white text-3xl md:text-5xl mb-8">
              Why We Train
            </h2>
            <div className="h-1 w-24 bg-[#c8922a] mx-auto mb-10"></div>
            <blockquote className="font-['Inter',sans-serif] font-light italic text-2xl md:text-3xl text-white/90 leading-relaxed">
              "Sensitization is not about changing people; it is about providing the tools for people to lead their own change."
            </blockquote>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-2xl">
              <div className="w-14 h-14 rounded-full bg-[#c8922a] flex items-center justify-center mb-6">
                <Leaf className="w-7 h-7 text-[#2d3a0e]" />
              </div>
              <h3 className="font-['Playfair_Display',serif] font-black text-white text-2xl mb-4">Community-Led</h3>
              <p className="font-['Inter',sans-serif] font-light text-lg text-white/70 leading-relaxed">
                Every training session is co-designed with community leaders to ensure relevance and respect. We don't bring external solutions; we facilitate local wisdom.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-2xl">
              <div className="w-14 h-14 rounded-full bg-[#4a5e1f] flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-['Playfair_Display',serif] font-black text-white text-2xl mb-4">Sustainable Impact</h3>
              <p className="font-['Inter',sans-serif] font-light text-lg text-white/70 leading-relaxed">
                We focus on skills and knowledge that remain in the community long after the event is over. Our goal is self-reliance, not dependence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12 text-center">
          <div className="max-w-[750px] mx-auto">
            <h2 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-3xl md:text-5xl mb-8">
              Join Our Journey of Impact
            </h2>
            <p className="font-['Inter',sans-serif] font-light text-lg md:text-xl text-[#555] mb-12 leading-relaxed">
              Interested in partnering for an upcoming event or volunteering as a facilitator? We are looking for those who share our commitment to cultural dignity.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/partner"
                className="group flex items-center gap-3 bg-[#c8922a] text-[#2d3a0e] font-['Inter',sans-serif] font-black text-lg px-10 py-5 rounded-full transition-all hover:bg-[#b07d1e] hover:shadow-xl active:scale-95"
              >
                Partner for an Event
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/volunteer"
                className="font-['Inter',sans-serif] font-bold text-[#2d3a0e] text-lg hover:text-[#c8922a] transition-colors underline decoration-[#c8922a] decoration-2 underline-offset-8"
              >
                Volunteer as a Facilitator
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
