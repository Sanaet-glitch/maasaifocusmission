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
    <section style={{ width: "100vw", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "#ffffff" }} />
      <div
        style={{
          position: "relative",
          width: 1280,
          maxWidth: "100%",
          margin: "0 auto",
          padding: "60px 24px",
        }}
      >
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: 37.504,
            lineHeight: "42.4845px",
            color: "#2d3a0e",
            textAlign: "center",
            marginBottom: 32,
          }}
        >
          Facebook Feed
        </h3>

        {/* Feed header */}
        <div className="max-w-[600px] mx-auto mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div style={{ width: 43, height: 43, borderRadius: "50%", background: "#2d3a0e" }} />
            <div>
              <a href="#" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 18, color: "#555" }}>
                Maasai Focus Mission
              </a>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 16, color: "#555", margin: 0 }}>
                500+ followers
              </p>
            </div>
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 16, lineHeight: "22.4px", color: "#555", marginBottom: 16 }}>
            Maasai Focus Mission is a registered NGO walking alongside Maasai communities in Kenya.
          </p>
          <div className="flex gap-3">
            <button
              style={{
                padding: "10px 12px",
                borderRadius: 8,
                background: "#2d3a0e",
                color: "#fff",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: 14,
                border: "none",
                cursor: "pointer",
              }}
            >
              Follow Us on Facebook
            </button>
            <button
              style={{
                padding: "10px 12px",
                borderRadius: 8,
                background: "transparent",
                border: "1px solid #2d3a0e",
                color: "#2d3a0e",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              View our website
            </button>
          </div>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[900px] mx-auto">
          {posts.map((post, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                border: "1px solid #e5e5e5",
                borderRadius: 6,
                padding: 16,
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div style={{ width: 43, height: 43, borderRadius: "50%", background: "#2d3a0e" }} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 16, color: "#555" }}>
                  Maasai Focus Mission
                </span>
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 16, lineHeight: "22.4px", color: "#555", marginBottom: 12 }}>
                {post.text}
              </p>
              <div
                className="flex items-center justify-center"
                style={{
                  width: 223,
                  height: 193,
                  background: post.color,
                  color: "#fff",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: 12,
                  textAlign: "center",
                }}
              >
                {post.label}
              </div>
              <div
                className="flex justify-between mt-3"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: 14, color: "#555" }}
              >
                <span>👍 Like</span>
                <span>💬 Comment</span>
                <span>↗ Share</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            style={{
              padding: "10px 32px",
              borderRadius: 8,
              border: "1px solid #2d3a0e",
              background: "transparent",
              color: "#2d3a0e",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
