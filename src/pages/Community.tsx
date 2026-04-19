import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Landmark, Users2, Leaf, HeartHandshake } from "lucide-react";

const Community = () => {
  return (
    <div className="min-h-screen bg-[#FCFBF8] overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-screen relative bg-[#2d3a0e]">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 pt-[140px] md:pt-[180px] lg:pt-[220px] pb-12 md:pb-16 text-center">
          <h1 className="font-['Playfair_Display',serif] font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight mb-6">
            Community & Heritage
          </h1>
          <p className="font-['Inter',sans-serif] font-light text-lg md:text-xl text-white/70 mt-4 max-w-[800px] mx-auto leading-relaxed">
            Preserving the soul of our community through cultural honor and sustainable livelihoods. We believe that true development is led by the wisdom of our roots.
          </p>
        </div>
      </section>

      {/* Our Impact Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="p-8 rounded-2xl bg-[#f9f8f4]">
              <h3 className="text-4xl font-black text-[#2d3a0e] mb-2">Narok & Kajiado</h3>
              <p className="text-[#c8922a] font-bold uppercase tracking-widest text-sm">Core Regions of Focus</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#f9f8f4]">
              <h3 className="text-4xl font-black text-[#2d3a0e] mb-2">Holistic</h3>
              <p className="text-[#c8922a] font-bold uppercase tracking-widest text-sm">Community-Led Development</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge & Our Approach */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-3xl md:text-4xl mb-8">
                Empowerment Through Heritage
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Development should never come at the cost of identity. In the Maasai community, our culture is our greatest asset. We work to ensure that as our communities grow, our traditions, language, and values remain vibrant.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Our community development initiatives are built on the principle of "Sensitization and Support." We don't bring outside solutions; we listen to local leaders and elders to support the paths they are already walking.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#c8922a]/10 rounded-full flex items-center justify-center">
                    <Landmark className="text-[#c8922a]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2d3a0e] text-lg">Cultural Preservation</h4>
                    <p className="text-gray-600">Promoting and protecting Maasai heritage through community-led education and sensitization.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#4a5e1f]/10 rounded-full flex items-center justify-center">
                    <Leaf className="text-[#4a5e1f]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2d3a0e] text-lg">Sustainable Livelihoods</h4>
                    <p className="text-gray-600">Supporting traditional economic activities and exploring new, culturally-appropriate opportunities for growth.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-200 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&q=80&w=800" 
                  alt="Community Focus" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#c8922a] p-8 rounded-2xl text-white hidden md:block max-w-[280px]">
                <p className="font-['Playfair_Display',serif] italic text-xl">
                  "Our culture is our roots, and without roots, we cannot stand tall."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Community Model */}
      <section className="py-20 bg-[#2d3a0e] text-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="font-['Playfair_Display',serif] font-black text-3xl md:text-4xl mb-16">
            The Pillars of Community Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
              <Users2 className="text-[#c8922a] mx-auto mb-6" size={40} />
              <h3 className="font-bold text-xl mb-4">Leadership</h3>
              <p className="text-white/70 leading-relaxed">
                Engaging with elders and local leaders to ensure every project is community-owned and led.
              </p>
            </div>
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
              <HeartHandshake className="text-[#c8922a] mx-auto mb-6" size={40} />
              <h3 className="font-bold text-xl mb-4">Livelihoods</h3>
              <p className="text-white/70 leading-relaxed">
                Strengthening traditional economic structures while building resilience for the future.
              </p>
            </div>
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
              <Landmark className="text-[#c8922a] mx-auto mb-6" size={40} />
              <h3 className="font-bold text-xl mb-4">Heritage</h3>
              <p className="text-white/70 leading-relaxed">
                Celebrating and teaching Maasai values to ensure the next generation remains rooted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#FCFBF8]">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-3xl md:text-4xl mb-6">
            Invest in Our Future
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Your support helps us facilitate community dialogues, support local livelihoods, and ensure that the Maasai culture continues to thrive for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-[#2d3a0e] text-white font-bold px-10 py-4 rounded-full hover:bg-[#c8922a] transition-colors"
            >
              Partner with Our Community
            </a>
            <a 
              href="/volunteer" 
              className="border-2 border-[#2d3a0e] text-[#2d3a0e] font-bold px-10 py-4 rounded-full hover:bg-[#2d3a0e] hover:text-white transition-all"
            >
              Join Our Outreach Team
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;
