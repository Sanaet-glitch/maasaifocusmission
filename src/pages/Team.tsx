import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Linkedin, Mail, ShieldCheck, Users, Heart } from "lucide-react";

const teamMembers = [
  {
    name: "Samuel Ole Kina",
    role: "Executive Director & Board Chair",
    bio: "A lifelong advocate for Maasai heritage, Samuel leads our strategic vision with a focus on sustainable community development and cultural integrity.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Sarah Enane",
    role: "Program Coordinator & Board Secretary",
    bio: "Sarah oversees our daily outreach and student sponsorship programs, ensuring every child we walk with has the support they need to thrive.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "David Lemayian",
    role: "Community Liaison & Board Treasurer",
    bio: "Rooted in the Suswa area, David bridges the gap between our mission and the local leadership, fostering trust and collective action.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Grace Namunyak",
    role: "Education Officer",
    bio: "Grace is dedicated to our 'Back-to-School' initiatives, working directly with families in Nakuru to remove barriers to education.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "John Santeto",
    role: "Health & Nutrition Lead",
    bio: "John coordinates our emergency food relief and health sensitization efforts, bringing a holistic approach to community wellness.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
  },
];

const Team = () => {
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
          <div className="max-w-[800px]">
            <span className="inline-block font-['Inter',sans-serif] font-semibold text-[#c8922a] uppercase tracking-[0.2em] text-sm mb-6">
              Leadership & Stewardship
            </span>
            <h1 className="font-['Playfair_Display',serif] font-black text-white text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.1] mb-8">
              The People Behind <br />
              <span className="text-[#c8922a]">The Mission.</span>
            </h1>
            <p className="font-['Inter',sans-serif] font-light text-lg md:text-xl text-white/80 leading-relaxed max-w-[650px]">
              We are a collective of neighbors, leaders, and advocates rooted in the community we serve. Our leadership is defined by proximity, accountability, and a shared vision for Maasai self-reliance.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid with Glassmorphism Elevation */}
      <section className="py-24 md:py-32 relative">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative">
                {/* Image Container with subtle glass border */}
                <div className="relative mb-8 overflow-hidden rounded-3xl aspect-[4/5] bg-[#2d3a0e]/5 border border-[#2d3a0e]/10 shadow-2xl">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  {/* Glassmorphism Bio Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#2d3a0e]/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                    <p className="text-white font-['Inter',sans-serif] font-light text-lg leading-relaxed italic mb-6">
                      "{member.bio}"
                    </p>
                    <div className="flex gap-4">
                      <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-[#c8922a] transition-colors">
                        <Linkedin className="w-5 h-5 text-white" />
                      </a>
                      <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-[#c8922a] transition-colors">
                        <Mail className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Member Info */}
                <div className="px-2">
                  <h3 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-2xl md:text-3xl mb-2 group-hover:text-[#c8922a] transition-colors">
                    {member.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-[2px] bg-[#c8922a]"></div>
                    <p className="font-['Inter',sans-serif] font-bold text-[#c8922a] uppercase tracking-[0.15em] text-xs">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Institutional Trust Section */}
      <section className="relative py-24 md:py-32 bg-[#2d3a0e] overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-[#c8922a]/5 skew-x-[15deg] -translate-x-1/4"></div>
        
        <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12">
          <div className="text-center max-w-[850px] mx-auto mb-20">
            <h2 className="font-['Playfair_Display',serif] font-black text-white text-3xl md:text-5xl mb-8">
              Governance & Accountability
            </h2>
            <div className="h-1 w-24 bg-[#c8922a] mx-auto mb-10"></div>
            <p className="font-['Inter',sans-serif] font-light text-xl text-white/70 leading-relaxed">
              Our Board of Directors provides strategic oversight and ensures that every resource entrusted to us is used with radical transparency and cultural integrity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-center group hover:bg-white/10 transition-all">
              <ShieldCheck className="w-10 h-10 text-[#c8922a] mx-auto mb-6" />
              <h4 className="font-['Playfair_Display',serif] font-black text-white text-xl mb-2">Samuel Ole Kina</h4>
              <p className="font-['Inter',sans-serif] text-white/50 text-xs font-bold uppercase tracking-[0.2em]">Chairperson</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-center group hover:bg-white/10 transition-all">
              <Users className="w-10 h-10 text-[#c8922a] mx-auto mb-6" />
              <h4 className="font-['Playfair_Display',serif] font-black text-white text-xl mb-2">Sarah Enane</h4>
              <p className="font-['Inter',sans-serif] text-white/50 text-xs font-bold uppercase tracking-[0.2em]">Secretary</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl text-center group hover:bg-white/10 transition-all">
              <Heart className="w-10 h-10 text-[#c8922a] mx-auto mb-6" />
              <h4 className="font-['Playfair_Display',serif] font-black text-white text-xl mb-2">David Lemayian</h4>
              <p className="font-['Inter',sans-serif] text-white/50 text-xs font-bold uppercase tracking-[0.2em]">Treasurer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12 text-center">
          <div className="max-w-[700px] mx-auto">
            <h2 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-3xl md:text-5xl mb-8">
              Join Our Leadership
            </h2>
            <p className="font-['Inter',sans-serif] font-light text-xl text-[#555] mb-12 leading-relaxed">
              We are always looking for passionate individuals who share our commitment to dignity-first development. Explore our current opportunities or volunteer your expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="/volunteer"
                className="w-full sm:w-auto bg-[#c8922a] text-[#2d3a0e] font-['Inter',sans-serif] font-black text-lg px-12 py-5 rounded-full transition-all hover:scale-105 hover:shadow-xl"
              >
                Volunteer With Us
              </a>
              <a
                href="/contact"
                className="w-full sm:w-auto font-['Inter',sans-serif] font-bold text-[#2d3a0e] text-lg hover:text-[#c8922a] transition-colors underline decoration-[#c8922a] decoration-2 underline-offset-8"
              >
                Inquire About Careers
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
