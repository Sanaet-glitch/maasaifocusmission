import { Link } from "react-router-dom";

const posts = [
  {
    title: "Supporting Our Students",
    text: "Before we were an official NGO, we were just neighbors helping neighbors. We are currently walking with a few students to ensure they stay in school.",
    color: "#c8922a",
  },
  {
    title: "A Visit to a Family",
    text: "Recently, we were able to share some essential food items with a family in our community. It was a small gesture, but it reminded us why we started.",
    color: "#4a5e1f",
  },
  {
    title: "A New Chapter (2026)",
    text: "Our recent registration is just a tool to help us do this work better. We are still the same people, just with a formal commitment to our community.",
    color: "#2d3a0e",
  },
];

const SocialFeed = () => {
  return (
    <section className="w-screen relative">
      <div className="absolute inset-0 bg-white" />
      <div className="relative mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 py-12 md:py-16">
        <h3 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-center mb-8 text-2xl sm:text-3xl md:text-[33px] lg:text-[37.504px] leading-tight">
          Our Journey So Far
        </h3>

        {/* Feed header */}
        <div className="max-w-[600px] mx-auto mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 md:w-[43px] md:h-[43px] rounded-full bg-[#2d3a0e] flex-shrink-0" />
            <div>
              <span className="font-['Inter',sans-serif] font-semibold text-base md:text-lg text-[#555]">
                Maasai Focus Mission
              </span>
              <p className="font-['Inter',sans-serif] font-light text-sm md:text-base text-[#555] m-0">
                Walking alongside Maasai communities
              </p>
            </div>
          </div>
          <p className="font-['Inter',sans-serif] font-light text-sm md:text-base text-[#555] leading-relaxed mb-4">
            Maasai Focus Mission is a registered NGO walking alongside Maasai communities in Kenya.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/about"
              className="px-3 py-2.5 rounded-lg bg-[#2d3a0e] text-white font-['Inter',sans-serif] font-semibold text-xs sm:text-sm no-underline"
            >
              Our Story
            </Link>
            <button className="px-3 py-2.5 rounded-lg bg-transparent border border-[#2d3a0e] text-[#2d3a0e] font-['Inter',sans-serif] font-semibold text-xs sm:text-sm cursor-pointer">
              View our website
            </button>
          </div>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[900px] mx-auto">
          {posts.map((post, i) => (
            <div
              key={i}
              className="bg-white border border-[#e5e5e5] rounded-md p-4"
            >
              <div
                className="flex items-center justify-center w-full h-[150px] sm:h-[180px] text-white font-['Inter',sans-serif] font-semibold text-xs text-center rounded-sm mb-3"
                style={{ background: post.color }}
              >
                {post.title}
              </div>
              <h4 className="font-['Inter',sans-serif] font-semibold text-sm md:text-base text-[#2d3a0e] mb-2">
                {post.title}
              </h4>
              <p className="font-['Inter',sans-serif] font-light text-sm md:text-base text-[#555] leading-relaxed">
                {post.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
