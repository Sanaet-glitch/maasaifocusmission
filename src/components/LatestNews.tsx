import { Link } from "react-router-dom";
import newsNotebook from "@/assets/news-notebook.jpg";
import newsBasket from "@/assets/news-basket.jpg";
import newsPath from "@/assets/news-path.jpg";

const cards = [
  { title: "The Story Behind Maasai Focus: Why We Started.", image: newsNotebook, alt: "School notebook and pencil on a rustic table" },
  { title: "Community Support: A Recent Family Visit in Nakuru.", image: newsBasket, alt: "Traditional woven basket with grains" },
  { title: "Moving Forward: Our 2026 Registration as an NGO.", image: newsPath, alt: "Winding path through the savannah" },
];

const LatestNews = () => {
  return (
    <section className="w-screen relative">
      <div className="absolute inset-0 bg-white" />
      <div className="relative mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 py-12 md:py-16">
        <h3 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-center mb-8 md:mb-10 text-2xl sm:text-3xl md:text-[33px] lg:text-[37.504px] leading-tight">
          Latest News
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div key={i} className="overflow-hidden">
              <img
                src={card.image}
                alt={card.alt}
                className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
              <span className="block font-['Inter',sans-serif] font-light text-[#2d3a0e] pt-4 px-1 text-base sm:text-lg md:text-xl lg:text-[23.68px] leading-relaxed">
                {card.title}
              </span>
              <Link
                to="/about"
                className="font-['Inter',sans-serif] font-light text-[#b5411a] text-sm px-1"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
