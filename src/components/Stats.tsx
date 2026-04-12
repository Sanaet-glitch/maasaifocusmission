const stats = [
  { number: "3,000+", label: "community members in our region", fontSize: 86.8 },
  { number: "5+", label: "active community development programs", fontSize: 93.3 },
  { number: "100%", label: "of funds go directly to the field", fontSize: 68.9 },
];

const Stats = () => {
  return (
    <section style={{ width: "100vw", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "#ffffff" }} />
      <div
        style={{
          position: "relative",
          width: 1280,
          maxWidth: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 662.5,
          padding: "60px 24px",
        }}
      >
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            fontSize: 37.504,
            lineHeight: "42.4845px",
            textAlign: "center",
            marginBottom: 32,
          }}
        >
          <span style={{ color: "#b5411a" }}>The Maasai community</span>{" "}
          <span style={{ color: "#2d3a0e" }}>deserves dignity and hope.</span>
        </h3>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: 23.68,
            lineHeight: "33.152px",
            color: "#2d3a0e",
            textAlign: "center",
            marginTop: 16,
          }}
        >
          Every contribution directly transforms lives in Kenya's Maasai communities.
        </p>

        <div className="flex flex-col md:flex-row justify-around items-start w-full mt-12 gap-12 md:gap-0">
          {stats.map((stat, i) => (
            <div key={i} className="text-center flex-1">
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 900,
                  fontSize: stat.fontSize,
                  lineHeight: `${stat.fontSize}px`,
                  color: "#c8922a",
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: 23.68,
                  lineHeight: "33.152px",
                  color: "#2d3a0e",
                  marginTop: 0,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
