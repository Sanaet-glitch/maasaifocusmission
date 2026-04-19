import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Handshake, Globe, ShieldCheck } from "lucide-react";

const Collaborations = () => {
  return (
    <div className="min-h-screen bg-[#FCFBF8] overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-screen relative bg-[#2d3a0e]">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 pt-[140px] md:pt-[180px] lg:pt-[220px] pb-12 md:pb-16">
          <h1 className="font-['Playfair_Display',serif] font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight mb-6">
            Collaborations
          </h1>
          <p className="font-['Inter',sans-serif] font-light text-lg md:text-xl text-white/70 mt-4 max-w-[600px] leading-relaxed">
            We believe that true community transformation is a collective effort. We are ready to walk with partners who share our vision.
          </p>
        </div>
      </section>

      {/* Readiness Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-3xl md:text-4xl mb-8">
            Built for Partnership
          </h2>
          <p className="font-['Inter',sans-serif] font-light text-lg md:text-xl text-[#555] mb-16 leading-relaxed">
            As a newly registered NGO, we have built our systems from the ground up to be "partnership-ready." We bring local authenticity, and we look for partners who bring specialized expertise or resources.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#c8922a]/10 rounded-full flex items-center justify-center mb-6">
                <Handshake className="text-[#c8922a]" size={32} />
              </div>
              <h3 className="font-bold text-[#2d3a0e] text-xl mb-4">Local Rootedness</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide the deep community ties and cultural context necessary for any project to succeed in Narok and Kajiado.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#4a5e1f]/10 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="text-[#4a5e1f]" size={32} />
              </div>
              <h3 className="font-bold text-[#2d3a0e] text-xl mb-4">Radical Transparency</h3>
              <p className="text-gray-600 leading-relaxed">
                Our financial and operational systems are designed for full accountability to our partners and the community.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#2d3a0e]/10 rounded-full flex items-center justify-center mb-6">
                <Globe className="text-[#2d3a0e]" size={32} />
              </div>
              <h3 className="font-bold text-[#2d3a0e] text-xl mb-4">Scalable Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                We are ready to scale our holistic model through strategic collaborations with international NGOs and foundations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#f9f8f4] border-y border-gray-200">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-2xl md:text-3xl mb-6">
            Interested in Partnering?
          </h2>
          <p className="font-['Inter',sans-serif] font-light text-lg text-[#555] mb-10 leading-relaxed">
            Whether you represent an NGO, a church group, or a socially responsible business, we would love to discuss how we can walk together.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[#2d3a0e] text-white font-bold px-10 py-4 rounded-full hover:bg-[#c8922a] transition-colors"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collaborations;
