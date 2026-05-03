import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, BookOpen, Heart, Leaf, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const stories = [
  {
    title: "The Future in a Notebook",
    category: "Education",
    date: "Since 2024",
    summary: "How a simple commitment to school fees transformed the trajectory of our first sponsored students in Kajiado.",
    content: "Our journey didn't start with a grand office or a formal board. It started with a single student who was about to drop out because of a small balance in school fees. By stepping in, we realized that the hurdle wasn't the child's potential, but the financial wall in front of them. Today, those same students are leading their classes, proving that when the community walks together, no child is left behind.",
    icon: <BookOpen className="w-6 h-6 text-[#c8922a]" />,
    image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&q=80&w=800",
    accent: "bg-[#c8922a]"
  },
  {
    title: "A Shared Meal in Nakuru",
    category: "Community Support",
    date: "2025 Outreach",
    summary: "A quiet visit to a family in need reminded us that the strongest support is often the simplest.",
    content: "In the heart of Nakuru, we met a family facing a difficult season. We didn't arrive with cameras or big promises; we arrived with essential food items and time to listen. This visit reinforced our 'Dignity-First' approach—providing relief in a way that honors the family's pride and heritage. It wasn't just about the food; it was about the reminder that they are not alone.",
    icon: <Heart className="w-6 h-6 text-[#b5411a]" />,
    image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&q=80&w=800",
    accent: "bg-[#b5411a]"
  },
  {
    title: "The First Step: Registration",
    category: "Milestone",
    date: "2026",
    summary: "Our official registration as an NGO is a tool to help us serve our community with greater accountability.",
    content: "Becoming a registered NGO in Kenya was a major milestone, but we remain the same team of neighbors who started this work years ago. This formal status allows us to partner with international organizations and expand our reach, while staying deeply rooted in our Maasai culture and values. It is a new chapter in a story that is still being written.",
    icon: <Leaf className="w-6 h-6 text-[#4a5e1f]" />,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
    accent: "bg-[#4a5e1f]"
  }
];

const Stories = () => {
  return (
    <div className="min-h-screen bg-[#fdfcf9] overflow-x-hidden">
      <Navbar />
      
      {/* Premium Hero Section with Glassmorphism Overlay */}
      <section className="relative pt-[160px] pb-24 md:pt-[220px] md:pb-32 bg-[#2d3a0e] overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]"></div>
        </div>
        
        <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12">
          <div className="max-w-[800px]">
            <span className="inline-block font-['Inter',sans-serif] font-semibold text-[#c8922a] uppercase tracking-[0.2em] text-sm mb-6">
              Impact & Heritage
            </span>
            <h1 className="font-['Playfair_Display',serif] font-black text-white text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.1] mb-8">
              Stories of <br />
              <span className="text-[#c8922a]">Quiet Change.</span>
            </h1>
            <p className="font-['Inter',sans-serif] font-light text-lg md:text-xl text-white/80 leading-relaxed max-w-[650px]">
              Every step we take is a story written by our community. These are the quiet moments of resilience and dignity that define our collective mission.
            </p>
          </div>
        </div>
      </section>

      {/* Stories Grid with Glassmorphism Elements */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12">
          <div className="space-y-24 md:space-y-40">
            {stories.map((story, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
              >
                {/* Visual Side with Glass Accent */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute -inset-4 bg-[#2d3a0e]/5 rounded-[2rem] blur-2xl group-hover:bg-[#c8922a]/10 transition-colors duration-700"></div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-[450px] md:h-[550px] object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    {/* Glassmorphism Badge */}
                    <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-xl flex items-center gap-3 shadow-xl">
                      <div className="p-2 bg-white/20 rounded-lg">
                        {story.icon}
                      </div>
                      <span className="text-xs font-black text-white uppercase tracking-[0.2em]">{story.category}</span>
                    </div>
                  </div>
                </div>

                {/* Content Side with Premium Typography */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-[2px] ${story.accent}`}></div>
                    <span className="font-['Inter',sans-serif] font-bold text-[#c8922a] text-sm uppercase tracking-widest">
                      {story.date}
                    </span>
                  </div>
                  
                  <h2 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-3xl md:text-5xl leading-tight">
                    {story.title}
                  </h2>
                  
                  {/* Glassmorphism Quote Card */}
                  <div className="relative p-8 rounded-2xl bg-[#2d3a0e]/5 border border-[#2d3a0e]/10 backdrop-blur-sm">
                    <Quote className="absolute -top-4 -left-4 w-10 h-10 text-[#c8922a] opacity-40" />
                    <p className="font-['Inter',sans-serif] font-semibold text-[#2d3a0e]/80 text-xl italic leading-relaxed">
                      {story.summary}
                    </p>
                  </div>

                  <p className="font-['Inter',sans-serif] font-light text-lg text-[#555] leading-relaxed">
                    {story.content}
                  </p>
                  
                  <div className="pt-4">
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center gap-3 text-[#2d3a0e] font-black text-lg group"
                    >
                      <span className="underline decoration-[#c8922a] decoration-2 underline-offset-8 group-hover:text-[#c8922a] transition-colors">
                        Learn more about this project
                      </span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform text-[#c8922a]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elevated CTA Section with Glassmorphism */}
      <section className="relative py-24 md:py-32 bg-[#2d3a0e] overflow-hidden">
        {/* Decorative Element */}
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-[#c8922a]/5 skew-x-[-15deg] translate-x-1/4"></div>
        
        <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 md:px-12 text-center">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-['Playfair_Display',serif] font-black text-white text-3xl md:text-5xl mb-8">
              Be Part of the Next Chapter
            </h2>
            <p className="font-['Inter',sans-serif] font-light text-xl text-white/70 mb-12 leading-relaxed">
              Our story is still being written, and there is a place for you in it. Whether as a donor, volunteer, or partner, your support helps us walk further.
            </p>
            
            {/* Glassmorphism CTA Container */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/partner"
                className="w-full sm:w-auto bg-[#c8922a] text-[#2d3a0e] font-['Inter',sans-serif] font-black text-lg px-12 py-5 rounded-full transition-all hover:scale-105 hover:shadow-[0_20px_40px_rgba(200,146,42,0.3)]"
              >
                Partner With Us
              </Link>
              <Link
                to="/volunteer"
                className="w-full sm:w-auto bg-white/5 backdrop-blur-md border border-white/20 text-white font-['Inter',sans-serif] font-black text-lg px-12 py-5 rounded-full transition-all hover:bg-white/10"
              >
                Join the Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Stories;
