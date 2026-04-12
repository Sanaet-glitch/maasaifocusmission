const Hero = () => {
  return (
    <section style={{ width: "100vw", position: "relative" }}>
      <div
        className="section-border"
        style={{
          position: "absolute",
          inset: 0,
          background: "#3b2008",
        }}
      />
      <div
        style={{
          position: "relative",
          width: 1280,
          maxWidth: "100%",
          margin: "0 auto",
          display: "flex",
          paddingTop: 168.641,
          minHeight: 820.7,
        }}
      >
        <div className="flex flex-col md:flex-row w-full" style={{ position: "relative", minHeight: 652.06 }}>
          {/* Left Column */}
          <div
            className="flex flex-col justify-center w-full md:w-1/2 px-6 md:px-0"
            style={{ paddingLeft: window.innerWidth >= 768 ? 88 : undefined }}
          >
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: 77.44,
                lineHeight: "78.0595px",
                letterSpacing: -2.3232,
                margin: 0,
              }}
              className="text-[59.2px] md:text-[77.44px]"
            >
              <span style={{ color: "#c8922a" }}>One People.</span>
              <br />
              <span style={{ color: "#c8922a" }}>One Purpose.</span>
              <br />
              <span style={{ color: "#ffffff" }}>One God.</span>
            </h1>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: 23.68,
                lineHeight: "33.152px",
                color: "#ffffff",
                marginTop: 16,
                maxWidth: 500,
              }}
            >
              Since 2025, Maasai Focus Mission has been walking alongside Maasai
              communities in Kenya, delivering education, healthcare, and
              spiritual transformation across the region.
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
                Learn Our Story
              </a>
            </div>
          </div>

          {/* Right Column — Circle Composition */}
          <div className="relative w-full md:w-1/2 flex items-center justify-center" style={{ minHeight: 400 }}>
            {/* Outer Gold Ring */}
            <div
              className="hidden md:block"
              style={{
                position: "absolute",
                width: 540,
                height: 540,
                borderRadius: "50%",
                background: "#c8922a",
                right: -80,
                top: 20,
                zIndex: 0,
              }}
            />
            {/* Inner Image Circle */}
            <div
              style={{
                width: 420,
                height: 420,
                borderRadius: "50%",
                overflow: "hidden",
                position: "relative",
                zIndex: 10,
                background: "#6b6b1a",
              }}
              className="w-[310px] h-[310px] md:w-[420px] md:h-[420px]"
            />
          </div>
        </div>
      </div>

      {/* Color Strips */}
      <div style={{ position: "relative", height: 47, width: "100%" }}>
        <div style={{ position: "absolute", inset: 0, background: "#c8922a" }} />
        <div style={{ position: "absolute", left: 0, top: 0, width: "50%", height: "100%", background: "#4a5e1f" }} />
      </div>
    </section>
  );
};

export default Hero;
