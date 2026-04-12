const partners = [
  { name: "Kenya NGO Bureau", style: { fontWeight: 500, color: "#2d3a0e" } },
  { name: "Partner Church", style: { fontWeight: 500, color: "#2d3a0e" } },
  { name: "Donor Organization", style: { fontWeight: 500, color: "#2d3a0e" } },
  { name: "Become a Partner →", style: { fontWeight: 700, color: "#b5411a" } },
];

const Partners = () => {
  return (
    <section style={{ width: "100vw", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "#ffffff" }} />
      <div
        style={{
          position: "relative",
          width: 1280,
          maxWidth: "100%",
          margin: "0 auto",
          minHeight: 332.28,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
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
            marginBottom: 40,
          }}
        >
          Our Partners
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-[45px]">
          {partners.map((p, i) => (
            <span
              key={i}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 20,
                ...p.style,
              }}
            >
              {p.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
