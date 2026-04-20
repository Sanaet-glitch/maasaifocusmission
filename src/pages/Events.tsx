import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Users, Leaf } from "lucide-react";

const events = [
  {
    quarter: "Q3 2026",
    title: "Education Awareness Workshop",
    location: "NAROK COUNTY",
    description: "A community-led dialogue focused on school enrollment, retention strategies, and the importance of girl-child education.",
  },
  {
    quarter: "Q4 2026",
    title: "Health & Nutrition Community Day",
    location: "KAJIADO REGION",
    description: "A day of sensitization focused on family wellness, preventive care, and nutritional best practices for rural households.",
  },
  {
    quarter: "Ongoing",
    title: "Local Leadership Engagement",
    location: "NAROK & KAJIADO",
    description: "Regular consultative meetings with community elders and local leaders to ensure project alignment with traditional values.",
  },
];

const Events = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* Hero heading */}
      <section className="w-screen relative bg-[#2d3a0e]">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 pt-[140px] md:pt-[180px] lg:pt-[220px] pb-12 md:pb-16 text-center lg:text-left">
          <h1 className="font-['Playfair_Display',serif] font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight">
            Trainings & Events
          </h1>
          <p className="font-['Inter',sans-serif] font-light text-lg md:text-xl text-white/70 mt-4 max-w-[700px] mx-auto lg:mx-0">
            Our 2026 Community Roadmap. We believe in planned, strategic outreach that respects the rhythm of our community.
          </p>
        </div>
      </section>

      {/* Planned Outreach Section */}
      <section className="w-screen relative bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 py-12 md:py-20">
          <div className="max-w-[800px] mx-auto text-center mb-16">
            <h2 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-3xl md:text-4xl leading-tight mb-6">
              Planned Outreach & Sensitization
            </h2>
            <p className="font-['Inter',sans-serif] font-light text-lg md:text-xl text-[#555] leading-relaxed">
              Our events are developed in close consultation with local elders. While dates are subject to community needs, these represent our core focus areas for the coming year.
            </p>
          </div>

          <div className="space-y-10 max-w-[900px] mx-auto">
            {events.map((event, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 p-8 rounded-lg bg-[#f9f8f4] border border-[#2d3a0e]/5 hover:border-[#c8922a]/30 transition-all">
                <div className="flex-shrink-0 flex flex-col items-center justify-center w-24 h-24 rounded-lg bg-[#2d3a0e] text-white">
                  <Calendar className="w-6 h-6 mb-1 text-[#c8922a]" />
                  <span className="font-['Inter',sans-serif] font-bold text-xs uppercase tracking-wider">{event.quarter}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-2xl mb-2">
                    {event.title}
                  </h3>
                  <p className="font-['Inter',sans-serif] font-semibold text-[#c8922a] text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#c8922a]" />
                    📍 {event.location}
                  </p>
                  <p className="font-['Inter',sans-serif] font-light text-lg text-[#555] leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Train Section */}
      <section className="w-screen relative bg-[#2d3a0e] py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12">
          <div className="max-w-[800px] mx-auto text-center mb-16">
            <h2 className="font-['Playfair_Display',serif] font-black text-white text-3xl md:text-4xl leading-tight mb-8">
              Why We Train
            </h2>
            <blockquote className="relative">
              <p className="font-['Inter',sans-serif] font-light italic text-xl md:text-2xl text-white/90 leading-relaxed">
                "Sensitization is not about changing people; it is about providing the tools for people to lead their own change."
              </p>
            </blockquote>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
            <div className="p-8 rounded-lg bg-white/5 border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#c8922a] flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-[#2d3a0e]" />
                </div>
                <h3 className="font-['Playfair_Display',serif] font-black text-white text-xl">Community-Led</h3>
              </div>
              <p className="font-['Inter',sans-serif] font-light text-lg text-white/70 leading-relaxed">
                Every training session is co-designed with community leaders to ensure relevance and respect.
              </p>
            </div>
            <div className="p-8 rounded-lg bg-white/5 border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#4a5e1f] flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-['Playfair_Display',serif] font-black text-white text-xl">Sustainable Impact</h3>
              </div>
              <p className="font-['Inter',sans-serif] font-light text-lg text-white/70 leading-relaxed">
                We focus on skills and knowledge that remain in the community long after the event is over.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-screen relative bg-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 text-center">
          <h2 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-3xl md:text-4xl leading-tight mb-6">
            Get Involved in Our Roadmap
          </h2>
          <p className="font-['Inter',sans-serif] font-light text-lg md:text-xl text-[#555] mb-10 max-w-[700px] mx-auto">
            Interested in partnering for an event or volunteering as a facilitator? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/partner"
              className="bg-[#c8922a] text-[#2d3a0e] font-['Inter',sans-serif] font-black text-lg px-10 py-4 rounded-full transition-transform hover:scale-105"
            >
              Partner for an Event
            </a>
            <a
              href="/volunteer"
              className="border-2 border-[#2d3a0e] text-[#2d3a0e] font-['Inter',sans-serif] font-black text-lg px-10 py-4 rounded-full transition-colors hover:bg-[#2d3a0e] hover:text-white"
            >
              Volunteer as a Facilitator
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
