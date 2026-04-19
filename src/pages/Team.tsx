import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <div className="min-h-screen bg-[#FCFBF8] overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-screen relative bg-[#2d3a0e]">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 pt-[140px] md:pt-[180px] lg:pt-[220px] pb-12 md:pb-16">
          <h1 className="font-['Playfair_Display',serif] font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight mb-6">
            Our Team
          </h1>
          <p className="font-['Inter',sans-serif] font-light text-lg md:text-xl text-white/70 mt-4 max-w-[600px] leading-relaxed">
            We are neighbors, leaders, and advocates walking together to serve the Maasai community.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="relative mb-6 overflow-hidden rounded-2xl aspect-[4/5] bg-gray-200">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2d3a0e]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm font-medium leading-relaxed italic">
                      "{member.bio}"
                    </p>
                  </div>
                </div>
                <h3 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-2xl mb-1">
                  {member.name}
                </h3>
                <p className="font-['Inter',sans-serif] font-bold text-[#c8922a] uppercase tracking-wider text-sm">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Section */}
      <section className="py-20 bg-[#2d3a0e] text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="font-['Playfair_Display',serif] font-black text-3xl md:text-4xl mb-8">
            Governance & Accountability
          </h2>
          <p className="font-['Inter',sans-serif] font-light text-lg md:text-xl text-white/70 mb-12 leading-relaxed">
            Our Board of Directors provides strategic oversight and ensures that every resource entrusted to us is used with radical transparency and integrity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-white/10 rounded-xl bg-white/5">
              <h4 className="font-bold text-[#c8922a] mb-2">Samuel Ole Kina</h4>
              <p className="text-sm text-white/60 uppercase tracking-widest">Chairperson</p>
            </div>
            <div className="p-6 border border-white/10 rounded-xl bg-white/5">
              <h4 className="font-bold text-[#c8922a] mb-2">Sarah Enane</h4>
              <p className="text-sm text-white/60 uppercase tracking-widest">Secretary</p>
            </div>
            <div className="p-6 border border-white/10 rounded-xl bg-white/5">
              <h4 className="font-bold text-[#c8922a] mb-2">David Lemayian</h4>
              <p className="text-sm text-white/60 uppercase tracking-widest">Treasurer</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
