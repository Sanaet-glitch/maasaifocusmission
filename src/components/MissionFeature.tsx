const MissionFeature = () => {
  return (
    <section style={{ width: "100vw", position: "relative" }}>
      <div style={{ position: "absolute", inset: 0, background: "#b5411a" }} />
      <div
        style={{
          position: "relative",
          width: 1280,
          maxWidth: "100%",
          margin: "0 auto",
          minHeight: 478.02,
        }}
        className="flex flex-col md:block"
      >
        {/* Image cluster */}
        <div className="relative w-full" style={{ minHeight: 430 }}>
          <div
            className="hidden md:block"
            style={{
              position: "absolute",
              width: 493.2,
              height: 430.21,
              background: "#6b6b1a",
              left: 27,
              top: 0,
              objectFit: "cover",
            }}
          />
          <div
            className="hidden md:block"
            style={{
              position: "absolute",
              width: 165.6,
              height: 149.53,
              background: "#4a5e1f",
              left: 460,
              top: 8,
              objectFit: "cover",
            }}
          />
          <div
            className="hidden md:block"
            style={{
              position: "absolute",
              width: 203.4,
              height: 196.31,
              background: "#2d3a0e",
              left: 1052,
              top: 202,
              objectFit: "cover",
            }}
          />
          {/* Mobile main image */}
          <div
            className="md:hidden mx-auto mt-6"
            style={{ width: "90%", maxWidth: 337.5, height: 237.6, background: "#6b6b1a" }}
          />
        </div>

        {/* Text block */}
        <div
          className="relative px-6 py-8 md:py-0 md:px-0"
          style={{
            position: window.innerWidth >= 768 ? "absolute" : "relative",
            left: window.innerWidth >= 768 ? 633 : undefined,
            top: window.innerWidth >= 768 ? 47 : undefined,
            width: window.innerWidth >= 768 ? 544 : undefined,
          }}
        >
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: 37.504,
              lineHeight: "42.4845px",
              color: "#ffffff",
              margin: 0,
            }}
          >
            Rooted in community. Driven by faith. Maasai Focus Mission walks alongside the Maasai
            people — building lasting change from within.
          </h3>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: 20.608,
              lineHeight: "28.8512px",
              color: "#2d3a0e",
              marginTop: 16,
            }}
          >
            Discover how we work and where your support goes.
          </p>
          <div className="mt-6">
            <a
              href="#"
              style={{
                background: "#c8922a",
                color: "#2d3a0e",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                fontSize: 19.84,
                padding: "15.872px 33.728px",
                borderRadius: 300,
                display: "inline-block",
              }}
            >
              Explore Our Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionFeature;
