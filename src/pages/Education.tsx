import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, GraduationCap, Users, Heart } from "lucide-react";

const Education = () => {
  return (
    <div className="min-h-screen bg-[#FCFBF8] overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-screen relative bg-[#2d3a0e]">
        <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 pt-[140px] md:pt-[180px] lg:pt-[220px] pb-12 md:pb-16 text-center">
          <h1 className="font-['Playfair_Display',serif] font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight mb-6">
            Education & School Outreach
          </h1>
          <p className="font-['Inter',sans-serif] font-light text-lg md:text-xl text-white/70 mt-4 max-w-[800px] mx-auto leading-relaxed">
            Nurturing the mind is the first step toward a thriving future. We walk alongside students to ensure financial barriers never stand in the way of their potential.
          </p>
        </div>
      </section>

      {/* Our Impact Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="p-8 rounded-2xl bg-[#f9f8f4]">
              <h3 className="text-4xl font-black text-[#2d3a0e] mb-2">5</h3>
              <p className="text-[#c8922a] font-bold uppercase tracking-widest text-sm">Students Currently Sponsored</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#f9f8f4]">
              <h3 className="text-4xl font-black text-[#2d3a0e] mb-2">100%</h3>
              <p className="text-[#c8922a] font-bold uppercase tracking-widest text-sm">School Retention Rate</p>
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
                Why Education Matters
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                In many Maasai communities, the cost of school fees, uniforms, and learning materials can be a prohibitive barrier. When a family faces economic hardship, education is often the first thing to be sacrificed.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                We believe that every child deserves the chance to stay in the classroom. Our approach is personal, humble, and deeply rooted in the belief that an educated community is a resilient community.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#c8922a]/10 rounded-full flex items-center justify-center">
                    <BookOpen className="text-[#c8922a]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2d3a0e] text-lg">Direct Sponsorship</h4>
                    <p className="text-gray-600">Covering tuition fees and essential learning materials for students in need.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#4a5e1f]/10 rounded-full flex items-center justify-center">
                    <Users className="text-[#4a5e1f]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2d3a0e] text-lg">Mentorship & Support</h4>
                    <p className="text-gray-600">Walking with students and their families to provide emotional and academic guidance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-200 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800" 
                  alt="Education Focus" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#c8922a] p-8 rounded-2xl text-white hidden md:block max-w-[280px]">
                <p className="font-['Playfair_Display',serif] italic text-xl">
                  "Education is the most powerful weapon which you can use to change the world."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#2d3a0e] text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-['Playfair_Display',serif] font-black text-3xl md:text-4xl text-center mb-16">
            Our Sponsorship Model
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-black text-[#c8922a]">01</span>
              </div>
              <h3 className="font-bold text-xl mb-4">Identification</h3>
              <p className="text-white/70 leading-relaxed">
                We work with local leaders to identify students at risk of dropping out due to financial hardship.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-black text-[#c8922a]">02</span>
              </div>
              <h3 className="font-bold text-xl mb-4">Support</h3>
              <p className="text-white/70 leading-relaxed">
                We provide the necessary resources—from fees to uniforms—ensuring the student is ready to learn.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-black text-[#c8922a]">03</span>
              </div>
              <h3 className="font-bold text-xl mb-4">Success</h3>
              <p className="text-white/70 leading-relaxed">
                We monitor progress and celebrate milestones, walking with the student through their entire academic journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#FCFBF8]">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <Heart className="text-[#c8922a] mx-auto mb-6" size={48} />
          <h2 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-3xl md:text-4xl mb-6">
            Sponsor a Student's Future
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Your support can be the difference between a child staying in school or leaving their education behind. Join us in walking with the next generation of leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-[#2d3a0e] text-white font-bold px-10 py-4 rounded-full hover:bg-[#c8922a] transition-colors"
            >
              Learn How to Sponsor
            </a>
            <a 
              href="/volunteer" 
              className="border-2 border-[#2d3a0e] text-[#2d3a0e] font-bold px-10 py-4 rounded-full hover:bg-[#2d3a0e] hover:text-white transition-all"
            >
              Volunteer as a Mentor
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Education;
