import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, BookOpen, Heart, Leaf } from "lucide-react";

const stories = [
  {
    title: "The Future in a Notebook",
    category: "Education",
    date: "Since 2024",
    summary: "How a simple commitment to school fees transformed the trajectory of our first sponsored students in Kajiado.",
    content: "Our journey didn't start with a grand office or a formal board. It started with a single student who was about to drop out because of a small balance in school fees. By stepping in, we realized that the hurdle wasn't the child's potential, but the financial wall in front of them. Today, those same students are leading their classes, proving that when the community walks together, no child is left behind.",
    icon: <BookOpen className="w-6 h-6 text-maasai-gold" />,
    image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&q=80&w=800", // Symbolic: Notebook/Study
    accent: "border-maasai-gold"
  },
  {
    title: "A Shared Meal in Nakuru",
    category: "Community Support",
    date: "2025 Outreach",
    summary: "A quiet visit to a family in need reminded us that the strongest support is often the simplest.",
    content: "In the heart of Nakuru, we met a family facing a difficult season. We didn't arrive with cameras or big promises; we arrived with essential food items and time to listen. This visit reinforced our 'Dignity-First' approach—providing relief in a way that honors the family's pride and heritage. It wasn't just about the food; it was about the reminder that they are not alone.",
    icon: <Heart className="w-6 h-6 text-maasai-terracotta" />,
    image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?auto=format&fit=crop&q=80&w=800", // Symbolic: Woven basket/Food
    accent: "border-maasai-terracotta"
  },
  {
    title: "The First Step: Registration",
    category: "Milestone",
    date: "2026",
    summary: "Our official registration as an NGO is a tool to help us serve our community with greater accountability.",
    content: "Becoming a registered NGO in Kenya was a major milestone, but we remain the same team of neighbors who started this work years ago. This formal status allows us to partner with international organizations and expand our reach, while staying deeply rooted in our Maasai culture and values. It is a new chapter in a story that is still being written.",
    icon: <Leaf className="w-6 h-6 text-maasai-olive" />,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800", // Symbolic: Path/Nature
    accent: "border-maasai-olive"
  }
];

const Stories = () => {
  return (
    <div className="min-h-screen bg-[#FCFBF8]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-[180px] md:pt-[240px] pb-16 bg-maasai-olive text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="font-serif text-4xl md:text-6xl font-black mb-6">Stories of Impact</h1>
          <p className="text-xl text-white/80 max-w-2xl font-light leading-relaxed">
            Every step we take is a story written by our community. These are the quiet moments of change that define our mission.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 gap-16">
            {stories.map((story, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2">
                  <div className={`relative rounded-2xl overflow-hidden shadow-xl border-b-8 ${story.accent}`}>
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                      {story.icon}
                      <span className="text-sm font-bold text-maasai-olive uppercase tracking-wider">{story.category}</span>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 space-y-6">
                  <div className="inline-block px-3 py-1 bg-maasai-gold/10 text-maasai-gold rounded text-sm font-bold tracking-widest uppercase">
                    {story.date}
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl font-black text-maasai-olive leading-tight">
                    {story.title}
                  </h2>
                  <p className="text-xl font-bold text-maasai-olive/70 italic">
                    "{story.summary}"
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed font-light">
                    {story.content}
                  </p>
                  <button className="flex items-center gap-2 text-maasai-gold font-bold hover:gap-4 transition-all group">
                    Learn more about this project <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-maasai-gold/5 border-y border-maasai-gold/10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-black text-maasai-olive mb-6">
            Be Part of the Next Chapter
          </h2>
          <p className="text-xl text-gray-600 mb-10 font-light leading-relaxed">
            Our story is still being written, and there is a place for you in it. Whether as a donor, volunteer, or partner, your support helps us walk further.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-maasai-gold text-white rounded-full font-bold text-lg hover:bg-maasai-gold/90 transition-colors shadow-lg">
              Partner With Us
            </a>
            <a href="/volunteer" className="px-8 py-4 border-2 border-maasai-olive text-maasai-olive rounded-full font-bold text-lg hover:bg-maasai-olive hover:text-white transition-all">
              Join the Team
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Stories;
