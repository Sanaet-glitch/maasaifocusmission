const posts = [
  { text: "April 2025 — Join us every Sunday for community prayer and fellowship in Kajiado. Together we grow stronger in faith.", color: "#b5411a", label: "COMMUNITY PRAYER SUNDAY" },
  { text: "April 2025 — Our education team visited 3 schools this week. The children are thriving.", color: "#c8922a", label: "EDUCATION OUTREACH WEEK" },
  { text: "March 2025 — Volunteer spotlight: meet Grace, who has dedicated 2 years to our mobile health clinic.", color: "#4a5e1f", label: "" },
  { text: "March 2025 — Thank you to all our donors who made the mobile clinic possible this quarter.", color: "#2d3a0e", label: "NATIONAL DOCTORS DAY" },
  { text: "March 2025 — Construction begins on the new community hall in Amboseli region.", color: "#6b6b1a", label: "COMMUNITY HALL PROJECT" },
  { text: "March 2025 — Spring appeal: help us reach 500 more Maasai families before end of year.", color: "#b5411a", label: "YEAR-END APPEAL 2025" },
];

const SocialFeed = () => {
  return (
    <section className="w-screen relative">
      <div className="absolute inset-0 bg-white" />
      <div className="relative mx-auto w-full max-w-[1280px] px-6 sm:px-8 md:px-12 py-12 md:py-16">
        <h3 className="font-['Playfair_Display',serif] font-black text-[#2d3a0e] text-center mb-8 text-2xl sm:text-3xl md:text-[33px] lg:text-[37.504px] leading-tight">
          Facebook Feed
        </h3>

        {/* Feed header */}
        <div className="max-w-[600px] mx-auto mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 md:w-[43px] md:h-[43px] rounded-full bg-[#2d3a0e] flex-shrink-0" />
            <div>
              <a href="#" className="font-['Inter',sans-serif] font-semibold text-base md:text-lg text-[#555]">
                Maasai Focus Mission
              </a>
              <p className="font-['Inter',sans-serif] font-light text-sm md:text-base text-[#555] m-0">
                500+ followers
              </p>
            </div>
          </div>
          <p className="font-['Inter',sans-serif] font-light text-sm md:text-base text-[#555] leading-relaxed mb-4">
            Maasai Focus Mission is a registered NGO walking alongside Maasai communities in Kenya.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="px-3 py-2.5 rounded-lg bg-[#2d3a0e] text-white font-['Inter',sans-serif] font-semibold text-xs sm:text-sm border-none cursor-pointer">
              Follow Us on Facebook
            </button>
            <button className="px-3 py-2.5 rounded-lg bg-transparent border border-[#2d3a0e] text-[#2d3a0e] font-['Inter',sans-serif] font-semibold text-xs sm:text-sm cursor-pointer">
              View our website
            </button>
          </div>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[900px] mx-auto">
          {posts.map((post, i) => (
            <div
              key={i}
              className="bg-white border border-[#e5e5e5] rounded-md p-4"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 md:w-[43px] md:h-[43px] rounded-full bg-[#2d3a0e] flex-shrink-0" />
                <span className="font-['Inter',sans-serif] font-semibold text-sm md:text-base text-[#555]">
                  Maasai Focus Mission
                </span>
              </div>
              <p className="font-['Inter',sans-serif] font-light text-sm md:text-base text-[#555] leading-relaxed mb-3">
                {post.text}
              </p>
              <div
                className="flex items-center justify-center w-full sm:w-[223px] h-[150px] sm:h-[193px] text-white font-['Inter',sans-serif] font-semibold text-xs text-center"
                style={{ background: post.color }}
              >
                {post.label}
              </div>
              <div className="flex justify-between mt-3 font-['Inter',sans-serif] font-light text-xs md:text-sm text-[#555]">
                <span>👍 Like</span>
                <span>💬 Comment</span>
                <span>↗ Share</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="px-8 py-2.5 rounded-lg border border-[#2d3a0e] bg-transparent text-[#2d3a0e] font-['Inter',sans-serif] font-semibold text-sm cursor-pointer">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
