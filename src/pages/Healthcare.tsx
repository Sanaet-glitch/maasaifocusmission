import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeartPulse, Stethoscope, Apple, ShieldCheck } from "lucide-react";

const Healthcare = () => {
  return (
    <div className="min-h-screen bg-[#FCFBF8] overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-screen relative bg-[#2d3a0e]">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 pt-[140px] md:pt-[180px] lg:pt-[220px] pb-12 md:pb-16 text-center">
          <h1 className="font-['Playfair_Display',serif] font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight mb-6">
            Healthcare & Wellness
          </h1>
          <p className="font-['Inter',sans-serif] font-light text-lg md:text-xl text-white/70 mt-4 max-w-[800px] mx-auto leading-relaxed">
            Sustaining the body is essential for a thriving community. We focus on health sensitization and direct emergency support to ensure every family has the chance to be well.
          </p>
        </div>
      </section>

      {/* Our Impact Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="p-8 rounded-2xl bg-[#f9f8f4]">
              <h3 className="text-4xl font-black text-[#2d3a0e] mb-2">2</h3>
              <p className="text-[#c8922a] font-bold uppercase tracking-widest text-sm">Families Supported with Emergency Aid</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#f9f8f4]">
              <h3 className="text-4xl font-black text-[#2d3a0e] mb-2">Ongoing</h3>
              <p className="text-[#c8922a] font-bold uppercase tracking-widest text-sm">Health Sensitization Initiatives</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge & Our Approach */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-200 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                  alt="Healthcare Focus" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#4a5e1f] p-8 rounded-2xl text-white hidden md:block max-w-[280px]">
                <p className="font-['Playfair_Display',serif] italic text-xl">
                  "Health is a state of complete physical, mental and social well-being."
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-3xl md:text-4xl mb-8">
                A Proactive Approach to Health
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                In rural Maasai communities, access to healthcare isn't just about distance; it's about sensitization and early intervention. We believe that empowering families with knowledge is the first line of defense.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                When crisis hits, we step in with direct support. Whether it's emergency food relief or helping a family navigate a medical emergency, we walk with them to ensure they aren't alone.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#c8922a]/10 rounded-full flex items-center justify-center">
                    <HeartPulse className="text-[#c8922a]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2d3a0e] text-lg">Health Sensitization</h4>
                    <p className="text-gray-600">Workshops and community dialogues focused on preventive care and wellness.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#4a5e1f]/10 rounded-full flex items-center justify-center">
                    <Apple className="text-[#4a5e1f]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2d3a0e] text-lg">Nutritional Support</h4>
                    <p className="text-gray-600">Providing essential food items to families facing immediate nutritional crises.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Wellness Model */}
      <section className="py-20 bg-[#2d3a0e] text-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="font-['Playfair_Display',serif] font-black text-3xl md:text-4xl mb-16">
            Our Wellness Model
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
              <Stethoscope className="text-[#c8922a] mx-auto mb-6" size={40} />
              <h3 className="font-bold text-xl mb-4">Awareness</h3>
              <p className="text-white/70 leading-relaxed">
                Educating families on basic health indicators and when to seek professional medical help.
              </p>
            </div>
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
              <ShieldCheck className="text-[#c8922a] mx-auto mb-6" size={40} />
              <h3 className="font-bold text-xl mb-4">Navigation</h3>
              <p className="text-white/70 leading-relaxed">
                Helping community members navigate existing healthcare systems to receive the care they need.
              </p>
            </div>
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
              <HeartPulse className="text-[#c8922a] mx-auto mb-6" size={40} />
              <h3 className="font-bold text-xl mb-4">Emergency Aid</h3>
              <p className="text-white/70 leading-relaxed">
                Direct intervention for families in acute health or nutritional distress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#FCFBF8]">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-3xl md:text-4xl mb-6">
            Support Community Wellness
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Your partnership allows us to respond quickly to medical emergencies and sustain our long-term health sensitization work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-[#2d3a0e] text-white font-bold px-10 py-4 rounded-full hover:bg-[#c8922a] transition-colors"
            >
              Partner for Health
            </a>
            <a 
              href="/volunteer" 
              className="border-2 border-[#2d3a0e] text-[#2d3a0e] font-bold px-10 py-4 rounded-full hover:bg-[#2d3a0e] hover:text-white transition-all"
            >
              Volunteer as a Health Advocate
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Healthcare;
