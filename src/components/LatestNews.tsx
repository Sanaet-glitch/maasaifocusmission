const cards = [
  { title: "Building the First Community Library in Kajiado", color: "#c8922a", h: 220.5 },
  { title: "Mobile Clinic Reaches 200 Families This Quarter", color: "#b5411a", h: 220.5 },
  { title: "Community Dedication Service — March 2025", color: "#4a5e1f", h: 209.7 },
];

const LatestNews = () => {
  return (
    <section style={{ width: "100vw", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "#ffffff" }} />
      <div
        style={{
          position: "relative",
          width: 1280,
          maxWidth: "100%",
          margin: "0 auto",
          minHeight: 609.48,
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
            margin: 0,
            marginBottom: 40,
          }}
        >
          Latest News
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {cards.map((card, i) => (
            <div key={i} className="overflow-hidden">
              <div
                style={{
                  width: "100%",
                  height: card.h,
                  background: card.color,
                }}
              />
              <a
                href="#"
                className="block"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: 23.68,
                  lineHeight: "33.152px",
                  color: "#2d3a0e",
                  padding: "16px 8px 4px",
                }}
              >
                {card.title}
              </a>
              <a
                href="#"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: 14,
                  color: "#b5411a",
                  padding: "0 8px",
                }}
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
